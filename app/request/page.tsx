"use client";

import { FormEvent, useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";

const serviceOptions = [
  "Business website",
  "E-commerce website",
  "Excel automation",
  "Data cleaning",
  "Dashboard",
  "Virtual assistant or support",
  "Something else",
];

export default function RequestPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setStatus("Please enter your name and email address.");
      return;
    }

    setStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(
          result.error ||
            "We could not save your request. Please contact us on WhatsApp."
        );
        return;
      }

      const whatsappMessage = encodeURIComponent(
        `Hello Excel Pro GH. My name is ${form.name}. I need help with: ${
          form.service || "a business project"
        }. ${form.message || ""}`
      );

      setStatus(
        "Your request has been saved. WhatsApp will now open so you can send a quick follow-up."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        business: "",
        service: "",
        budget: "",
        message: "",
      });

      window.open(
        `https://wa.me/233548097756?text=${whatsappMessage}`,
        "_blank",
        "noopener,noreferrer"
      );
    } catch (error) {
      console.error("Lead submission failed:", error);
      setStatus(
        "We could not connect to the contact form. Please contact us directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          Client portal
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Request a quote for your project.
        </h1>
        <p className="mt-4 text-lg leading-8 text-white/70">
          Tell us about your business and what you want to build or improve. We
          will review your request and contact you with options and pricing.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <form onSubmit={send} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                Your name
                <input
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
                  placeholder="e.g. Kojo Mensah"
                />
              </label>

              <label className="grid gap-2 text-sm">
                Email address
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                Phone (optional)
                <input
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
                  placeholder="+233..."
                />
              </label>

              <label className="grid gap-2 text-sm">
                Business name (optional)
                <input
                  value={form.business}
                  onChange={(e) => updateField("business", e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
                  placeholder="Your business name"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                What do you need?
                <select
                  value={form.service}
                  onChange={(e) => updateField("service", e.target.value)}
                  className="rounded-lg border border-white/10 bg-[#111d38] p-3 outline-none focus:border-[#f4c542]"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm">
                Estimated budget (optional)
                <select
                  value={form.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                  className="rounded-lg border border-white/10 bg-[#111d38] p-3 outline-none focus:border-[#f4c542]"
                >
                  <option value="">Not sure yet</option>
                  <option>Under GHS 500</option>
                  <option>GHS 500 – 1,500</option>
                  <option>GHS 1,500 – 3,000</option>
                  <option>Above GHS 3,000</option>
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm">
              Briefly describe your project
              <textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="min-h-28 rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
                placeholder="Tell us what you want to build or improve."
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-[#f4c542] py-3 font-bold text-[#070f26] hover:bg-[#ffd95c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending request..." : "Send Request"}
            </button>

            {status && (
              <p className="text-sm leading-6 text-green-300">{status}</p>
            )}
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-white/60">
          Prefer to chat first?{" "}
          <a
            href="https://wa.me/233548097756"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:underline"
          >
            Open WhatsApp
          </a>
        </p>
      </section>
    </PageWrapper>
  );
}
