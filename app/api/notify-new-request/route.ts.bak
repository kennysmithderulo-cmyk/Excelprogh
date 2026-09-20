import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const businessName = String(body.business_name || "");
    const email = String(body.email || "");
    const phone = String(body.phone || "");
    const service = String(body.service || "");
    const budget = String(body.budget || "");
    const details = String(body.details || "");

    const { error } = await resend.emails.send({
      from: "Excel Pro GH <onboarding@resend.dev>",
      to: ["excelprogh@gmail.com"],
      subject: "New request from " + businessName,
      html:
        "<h2>New Client Request</h2>" +
        "<p><strong>Business:</strong> " + businessName + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>Service:</strong> " + service + "</p>" +
        "<p><strong>Budget:</strong> " + budget + "</p>" +
        "<p><strong>Project details:</strong></p>" +
        "<p>" + details + "</p>" +
        "<hr />" +
        "<p>Submitted through the Excel Pro GH Client Portal.</p>",
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: "Email notification failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Unable to send email notification" },
      { status: 500 }
    );
  }
}
