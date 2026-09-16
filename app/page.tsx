"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateForm(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
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
            "We could not save your request. Please use WhatsApp instead."
        );
        return;
      }

      const message = encodeURIComponent(
        `Hello Excel Pro GH. My name is ${form.name}. I need help with: ${
          form.service || "a business project"
        }. ${form.message || ""}`
      );

      setStatus(
        "Your request has been received. WhatsApp will open for a quick follow-up."
      );

      window.open(
        `https://wa.me/233548097756?text=${message}`,
        "_blank",
        "noopener,noreferrer"
      );

      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus(
        "We could not submit your request. Please contact us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#070f26] text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-bold">
            Excel Pro GH
          </a>

          <a
            href="https://wa.me/233548097756"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold hover:bg-green-600"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4c542]">
          Websites, automation and business support
        </p>

        <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
          Simple digital systems that help your business save time and grow.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Excel Pro GH builds professional websites, Excel automation systems,
          dashboards, and practical support for small and growing businesses in
          Ghana.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]"
        >
          Request a Quote
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-[#f4c542]">
              Website Development
            </h2>
            <p className="mt-3 leading-7 text-white/65">
              Business websites, landing pages, e-commerce stores, and
              WhatsApp-ordering websites.
            </p>
            <p className="mt-4 text-sm font-semibold text-green-400">
              From GHS 500
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-[#f4c542]">
              Excel Automation
            </h2>
            <p className="mt-3 leading-7 text-white/65">
              Inventory, invoices, budget trackers, sales systems, reporting,
              and dashboards.
            </p>
            <p className="mt-4 text-sm font-semibold text-green-400">
              From GHS 100
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-[#f4c542]">
              Business Support
            </h2>
            <p className="mt-3 leading-7 text-white/65">
              Data cleaning, virtual assistance, customer support, research,
              administration, and operations help.
            </p>
            <p className="mt-4 text-sm font-semibold text-green-400">
              From GHS 350/month
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
              Start a project
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Tell us what your business needs.
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-white/70">
              Submit your request and we will receive it directly. You can also
              use WhatsApp for a faster conversation.
            </p>

            <div className="mt-8 space-y-3 text-white/75">
              <p>
                Phone:{" "}
                <a
                  href="tel:+233548097756"
                  className="text-green-400 hover:underline"
                >
                  +233 548097756
                </a>
              </p>
              <p>Location: Accra, Ghana</p>
              <p>Response time: Usually within 24 hours</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <form onSubmit={submitLead} className="grid gap-4">
              <label className="grid gap-2 text-sm">
                Your name
                <input
                  required
                  value={form.name}
                  onChange={(event) =>
                    updateForm("name", event.target.value)
                  }
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
                  onChange={(event) =>
                    updateForm("email", event.target.value)
                  }
                  className="rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 text-sm">
                Service you need
                <select
                  value={form.service}
                  onChange={(event) =>
                    updateForm("service", event.target.value)
                  }
                  className="rounded-lg border border-white/10 bg-[#111d38] p-3 outline-none focus:border-[#f4c542]"
                >
                  <option value="">Select a service</option>
                  <option>Business website</option>
                  <option>E-commerce website</option>
                  <option>Excel automation</option>
                  <option>Data cleaning</option>
                  <option>Dashboard</option>
                  <option>Virtual assistant or customer support</option>
                  <option>Something else</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm">
                Brief project description
                <textarea
                  value={form.message}
                  onChange={(event) =>
                    updateForm("message", event.target.value)
                  }
                  className="min-h-28 rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
                  placeholder="Tell us what you would like to build or improve."
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
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/50">
        <p>© 2026 Excel Pro GH. Accra, Ghana.</p>
        <div className="mt-3 flex justify-center gap-4">
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </footer>
    </main>
  );
}
