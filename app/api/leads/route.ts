import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

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

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      return NextResponse.json(
        {
          error:
            "Contact form setup is incomplete. Please contact us on WhatsApp.",
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

    const { data, error } = await supabase
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

    if (error) {
      console.error("Supabase insert error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });

      return NextResponse.json(
        {
          error: `Database error: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        leadId: data.id,
        message: "Your request has been received.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      {
        error: "The contact form received an invalid request. Please try again.",
      },
      { status: 400 }
    );
  }
}
