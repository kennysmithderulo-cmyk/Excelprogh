"use client";

import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";

const portfolio: any[] = [
  {
    title: "Excel Pro GH",
    desc: "Main platform for Excel & Website training, SME solutions, Spintex, Accra.",
    tag: "Main Platform",
    link: "https://excelprogh.vercel.app",
    image: "/excelprogh.jpg",
  },
  {
    title: "Betslip Analyser",
    desc: "A website that helps users check betting slips for risk and calculate winnings.",
    tag: "Web Application",
    link: "https://betslip-analyser.vercel.app",
    image: "/betslip.jpg",
  },
  {
    title: "5-7 Hair Lounge",
    desc: "E-commerce hair store with more than 100 products, cart, and WhatsApp ordering.",
    tag: "Website Development",
    link: "https://5-7hair-lounge.vercel.app",
    image: "/hair-lounge.jpg",
  },
  {
    title: "Anchor Bolt Company Limited",
    desc: "Corporate website for industrial fasteners & construction supply company.",
    tag: "Corporate Website",
    link: "https://anchor-bolt-company-limited.vercel.app",
    image: "/anchor-bolt-cover.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">Selected work</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl text-[#070f26]">Examples of what we build.</h1>
        <p className="mt-3 max-w-3xl text-[#070f26]/80">4 live projects - click to view.</p>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((project: any) => (
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
        <div className="mt-10">
          <Link href="/request" className="inline-flex rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]">Start Your Project</Link>
        </div>
      </section>
    </PageWrapper>
  );
}