"use client";

import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";

const highlights = [
  {
    title: "Fast",
    desc: "Practical solutions delivered quickly.",
  },
  {
    title: "Simple",
    desc: "Systems your team can actually use.",
  },
  {
    title: "Local",
    desc: "Built for Ghanaian business workflows.",
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
        <img
          src="/profile.jpg?v=2"
          alt="Excel Pro GH logo"
          className="mx-auto h-24 w-24 rounded-full border-4 border-white/20 bg-white object-contain p-2 sm:h-28 sm:w-28"
        />

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4c542] sm:text-sm">
          Websites, automation and business support
        </p>

        <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Simple digital systems that help your business save time and grow.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          We build professional websites, Excel automation systems, dashboards,
          and operational support for small and growing businesses in Ghana.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/request"
            className="rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]"
          >
            Request a Quote
          </Link>
          <a
            href="https://wa.me/233548097756"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/25 px-6 py-3 font-semibold hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-xl font-bold text-[#f4c542]">{h.title}</p>
              <p className="mt-1 text-sm text-white/60">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-white/5 px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
            What we do
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Websites, automation and support for your business.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "E-commerce & Product Websites",
              "Inventory, Sales & Invoicing",
              "Client Records & Appointments",
              "Reports & Business Dashboards",
              "Data Cleaning & Preparation",
              "Virtual Assistant & Customer Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-[#0b1430] p-5"
              >
                <h3 className="font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-white/60">
                  Request a quote tailored to your business needs.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex rounded-lg border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="rounded-2xl border border-[#f4c542]/30 bg-[#f4c542]/10 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
            Start a project
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Tell us what your business needs.
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Share a few details and we will help you choose the right solution.
            You can also contact us directly on WhatsApp.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request"
              className="rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/233548097756"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/25 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
