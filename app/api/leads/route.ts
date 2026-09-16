import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const notificationEmail = "kennysmithderulo@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const service =
      typeof body.service === "string" ? body.service.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email) {
      return NextResponse.json(
        { error: "Please provide your name and email address." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      return NextResponse.json(
        {
          error:
            "The contact form is not configured yet. Please contact us on WhatsApp.",
        },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseSecretKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { data: lead, error: databaseError } = await supabase
      .from("leads")
      .insert([
        {
          name,
          email,
          service: service || null,
          message: message || null,
          status: "new",
        },
      ])
      .select("id")
      .single();

    if (databaseError) {
      console.error("Supabase insert error:", databaseError.message);

      return NextResponse.json(
        {
          error:
            "We could not save your request. Please contact us on WhatsApp.",
        },
        { status: 500 }
      );
    }

    let emailSent = false;

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const { error: emailError } = await resend.emails.send({
          from: "Excel Pro GH <onboarding@resend.dev>",
          to: [notificationEmail],
          replyTo: email,
          subject: `New lead from ${name}`,
          text:
            `New lead received.

` +
            `Name: ${name}
` +
            `Email: ${email}
` +
            `Service: ${service || "Not selected"}

` +
            `Project description:
${message || "No description provided."}

` +
            `Lead ID: ${lead.id}`,
        });

        if (emailError) {
          console.error("Resend email error:", emailError);
        } else {
          emailSent = true;
        }
      } catch (emailError) {
        console.error("Resend notification failed:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY is missing. Lead was saved without email.");
    }

    return NextResponse.json(
      {
        success: true,
        emailSent,
        message: "Your request has been received.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      {
        error: "Invalid request. Please try again.",
      },
      { status: 400 }
    );
  }
}
