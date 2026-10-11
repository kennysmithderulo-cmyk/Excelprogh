"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";

export default function RequestPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageWrapper>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Request a Quote</h1>
        <p className="mt-2 text-[#070f26]/70">
          Fill this form and we will contact you on WhatsApp or Email. 
          This form is now active and sends to contact.excelprogh@gmail.com
        </p>

        {sent && (
          <div className="mt-6 rounded-lg bg-green-100 border border-green-300 p-4 text-green-800">
            ✅ Message sent successfully! We will contact you shortly.
          </div>
        )}

        <form
          action="https://formspree.io/f/xyekpkld"
          method="POST"
          onSubmit={() => setSent(true)}
          className="mt-8 space-y-4 bg-white p-6 rounded-2xl border border-[#070f26]/10"
        >
          <input type="hidden" name="_subject" value="New Quote Request - Excel Pro GH" />
          <input type="hidden" name="_next" value="https://excelprogh.vercel.app/request?success=true" />

          <div>
            <label className="text-sm font-semibold">Full Name</label>
            <input name="name" required placeholder="John Doe" className="mt-1 w-full rounded-lg border border-[#070f26]/20 p-3" />
          </div>

          <div>
            <label className="text-sm font-semibold">WhatsApp Number</label>
            <input name="phone" required placeholder="0548097756" className="mt-1 w-full rounded-lg border border-[#070f26]/20 p-3" />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input name="email" type="email" required placeholder="you@email.com" className="mt-1 w-full rounded-lg border border-[#070f26]/20 p-3" />
          </div>

          <div>
            <label className="text-sm font-semibold">What do you need?</label>
            <select name="service" className="mt-1 w-full rounded-lg border border-[#070f26]/20 p-3">
              <option>E-commerce & Product Website</option>
              <option>Inventory, Sales & Invoicing System</option>
              <option>Client Records & Appointments</option>
              <option>Reports & Business Dashboards</option>
              <option>Data Cleaning & Preparation</option>
              <option>Virtual Assistant & Customer Support</option>
              <option>Training - Tech Stack Mastery GH¢899</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">Tell us more</label>
            <textarea name="message" rows={4} required placeholder="Describe what you need..." className="mt-1 w-full rounded-lg border border-[#070f26]/20 p-3"></textarea>
          </div>

          <button type="submit" className="w-full rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]">
            Send Request
          </button>

          <p className="text-center text-sm text-[#070f26]/60">
            Or chat directly: <a href="https://wa.me/233548097756" className="font-bold text-[#070f26] underline">WhatsApp +233 548097756</a>
          </p>
        </form>
      </section>
    </PageWrapper>
  );
}