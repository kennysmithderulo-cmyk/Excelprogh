import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const notificationEmail = "contact.excelprogh@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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

    if (name.length > 120 || email.length > 254) {
      return NextResponse.json(
        { error: "Please check the information you entered." },
        { status: 400 }
      );
    }

    if (service.length > 160 || message.length > 3000) {
      return NextResponse.json(
        { error: "Your message is too long. Please shorten it and try again." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      console.error("Supabase environment variables are missing.");

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
      .select("id, created_at")
      .single();

    if (databaseError) {
      console.error("Supabase insert error:", {
        message: databaseError.message,
        details: databaseError.details,
        hint: databaseError.hint,
        code: databaseError.code,
      });

      return NextResponse.json(
        { error: "We could not save your request. Please contact us on WhatsApp." },
        { status: 500 }
      );
    }

    let emailSent = false;

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeService = escapeHtml(service || "Not selected");
        const safeMessage = escapeHtml(message || "No project description provided.");

        const { error: emailError } = await resend.emails.send({
          from: "Excel Pro GH Leads <onboarding@resend.dev>",
          to: [notificationEmail],
          replyTo: email,
          subject: `New lead: ${name}${service ? ` — ${service}` : ""}`,
          html: `
            <h2>New website lead</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Project description:</strong></p>
            <p>${safeMessage.replace(/
/g, "<br />")}</p>
            <hr />
            <p><strong>Lead ID:</strong> ${lead.id}</p>
            <p><strong>Submitted:</strong> ${new Date(
              lead.created_at
            ).toLocaleString("en-GH", {
              dateStyle: "medium",
              timeStyle: "short",
              timeZone: "Africa/Accra",
            })}</p>
          `,
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
      console.warn("RESEND_API_KEY is missing; lead saved without email notification.");
    }

    return NextResponse.json(
      {
        success: true,
        leadId: lead.id,
        emailSent,
        message: "Your request has been received.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
