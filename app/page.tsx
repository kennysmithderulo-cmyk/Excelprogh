"use client";

import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";

const highlights = [
  { title: "Fast", desc: "Practical solutions delivered quickly." },
  { title: "Simple", desc: "Systems your team can actually use." },
  { title: "Local", desc: "Built for Ghanaian business workflows." },
];

const portfolioHighlights: any[] = [
  {
    title: "Excel Pro GH",
    desc: "Main platform - Excel & Website training, SME solutions, Spintex.",
    tag: "Main Platform",
    link: "https://excelprogh.vercel.app",
    image: "/excelprogh.jpg",
  },
  {
    title: "Betslip Analyser",
    desc: "Smart betting tool that checks slips for risk and calculates winnings.",
    tag: "Web Application",
    link: "https://betslip-analyser.vercel.app",
    image: "/betslip.jpg",
  },
  {
    title: "5-7 Hair Lounge",
    desc: "E-commerce hair store with 100+ products and WhatsApp checkout.",
    tag: "Website Development",
    link: "https://5-7hair-lounge.vercel.app",
    image: "/hair-lounge.jpg",
  },
  {
    title: "Anchor Bolt Company Ltd",
    desc: "Corporate site for industrial fasteners & construction supply.",
    tag: "Corporate Website",
    link: "https://anchor-bolt-company-limited.vercel.app",
    image: "/anchor-bolt-cover.jpg",
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
        <img
          src="/profile.jpg?v=2"
          alt="Excel Pro GH logo"
          className="mx-auto h-24 w-24 rounded-full border-4 border-[#f4c542]/40 bg-white object-contain p-2 sm:h-28 sm:w-28"
        />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4c542] sm:text-sm">
          Websites, automation and business support
        </p>
        <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Simple digital systems that help your business save time and grow.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#070f26]/70 sm:text-lg">
          We build professional websites, Excel automation systems, dashboards, and operational support for small and growing businesses in Ghana.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/request" className="rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]">
            Request a Quote
          </Link>
          <a href="https://wa.me/233548097756" target="_blank" rel="noreferrer" className="rounded-lg border border-[#070f26]/25 px-6 py-3 font-semibold hover:bg-[#070f26]/5">
            Chat on WhatsApp
          </a>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-xl border border-[#070f26]/10 bg-[#f9f9f9] p-4">
              <p className="text-xl font-bold text-[#f4c542]">{h.title}</p>
              <p className="mt-1 text-sm text-[#070f26]/70">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">Selected work</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl text-[#070f26]">4 live projects built for Ghanaian businesses.</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioHighlights.map((project: any) => (
            <a key={project.title} href={project.link} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border border-[#070f26]/10 bg-white transition hover:-translate-y-1 hover:border-[#f4c542]/50">
              <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-[#f4c542]">{project.tag}</p>
                <h3 className="mt-2 font-bold text-[#070f26]">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#070f26]/80">{project.desc}</p>
                <p className="mt-3 text-xs font-bold underline">View Live →</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/portfolio" className="inline-flex rounded-lg border border-[#070f26]/25 px-5 py-3 font-semibold text-[#070f26] hover:bg-[#070f26]/5">
            View full portfolio
          </Link>
        </div>
      </section>

      <section className="bg-[#f9f9f9] px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">What we do</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Websites, automation and support for your business.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["E-commerce & Product Websites","Inventory, Sales & Invoicing","Client Records & Appointments","Reports & Business Dashboards","Data Cleaning & Preparation","Virtual Assistant & Customer Support"].map((item) => (
              <div key={item} className="rounded-xl border border-[#070f26]/10 bg-white p-5">
                <h3 className="font-semibold text-[#070f26]">{item}</h3>
                <p className="mt-2 text-sm text-[#070f26]/70">Request a quote tailored to your business needs.</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="inline-flex rounded-lg border border-[#070f26]/25 px-5 py-3 font-semibold text-[#070f26] hover:bg-[#070f26]/5">View all services</Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}