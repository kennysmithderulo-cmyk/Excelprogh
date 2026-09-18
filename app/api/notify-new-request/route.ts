import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { business_name, email, phone, service, budget, details } = body;

    await resend.emails.send({
      from: "Excel Pro GH <onboarding@resend.dev>", // replace after domain setup
      to: ["excelprogh@gmail.com"],
      subject: `New request: ${service} – ${business_name}`,
      html: `
        <h2>New Client Request</h2>
        <p><strong>Business:</strong> ${business_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
        <p><strong>Details:</strong></p>
        <p>${details.replace(/
/g, "<br>")}</p>
        <hr />
        <p style="font-size:12px;color:#666;">
          Submitted via Excel Pro GH website.
        </p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Notify error:", error);
    return NextResponse.json({ ok: false, error: "Failed to send notification" }, { status: 500 });
  }
}
