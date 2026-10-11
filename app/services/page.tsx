"use client";

import { PageWrapper } from "@/components/PageWrapper";
import Image from "next/image";
import Link from "next/link";

const services: any[] = [
  {
    category: "For Shops & Online Sellers",
    items: [
      {
        title: "E-commerce & Product Websites",
        desc: "Mobile-friendly online stores and product websites with WhatsApp orders and simple management.",
        tag: "Online Store",
        highlight: "Ideal for fashion, hair, cosmetics, and retail.",
        image: "/website-dev.jpg",
      },
      {
        title: "Inventory, Sales & Invoicing",
        desc: "Track stock, sales, expenses, invoices, and receipts using Excel or Google Sheets.",
        tag: "Best Seller",
        highlight: "For shops, pharmacies, and warehouses.",
        image: "/inventory-invoice.jpg",
      },
    ],
  },
  {
    category: "For Service Businesses",
    items: [
      {
        title: "Client Records & Appointments",
        desc: "Simple systems for recording clients, managing appointments, and tracking payments.",
        tag: "Service Ops",
        highlight: "Reduce lost records and missed follow-ups.",
        image: "/customer-support.jpg",
      },
      {
        title: "Reports & Business Dashboards",
        desc: "Clear dashboards for sales, expenses, profit, and KPIs.",
        tag: "Analytics",
        highlight: "Understand your business at a glance.",
        image: "/data-analytics.jpg",
      },
    ],
  },
  {
    category: "Data & Operations Support",
    items: [
      {
        title: "Data Cleaning & Preparation",
        desc: "Convert messy sales, bank, MoMo, and customer data into clean records.",
        tag: "Data Ops",
        highlight: "Save time and reduce errors.",
        image: "/data-cleaning.jpg",
      },
      {
        title: "Virtual Assistant & Customer Support",
        desc: "Help with admin, research, email, chat support, and daily ops.",
        tag: "Support",
        highlight: "Flexible support for growing businesses.",
        image: "/virtual-assistant.jpg",
      },
    ],
  },
  {
    category: "Live Portfolio Projects",
    items: [
      {
        title: "Excel Pro GH - Main Website",
        desc: "Official business platform for Excel & Website Training in Spintex, Accra. Booking, portfolio, and SME digital solutions.",
        tag: "Main Site",
        highlight: "Next.js 14 • Supabase • Paystack",
        image: "/website-dev.jpg",
        link: "https://excelprogh.vercel.app",
      },
      {
        title: "Betslip Analyser",
        desc: "Smart betslip analysis tool for Ghanaian punters. Analyses odds, calculates winnings, helps make informed betting decisions.",
        tag: "Betting Tool",
        highlight: "Live at betslip-analyser.vercel.app",
        image: "/data-analytics.jpg",
        link: "https://betslip-analyser.vercel.app",
      },
      {
        title: "5-7 Hair Lounge",
        desc: "Modern website for a beauty salon - services showcase, gallery, booking, and WhatsApp contact.",
        tag: "Salon Website",
        highlight: "Beauty & Lifestyle Business",
        image: "/customer-support.jpg",
        link: "https://5-7hair-lounge.vercel.app",
      },
      {
        title: "Anchor Bolt Company Limited",
        desc: "Corporate website for industrial fasteners and construction supply company.",
        tag: "Corporate Site",
        highlight: "Industrial & B2B",
        image: "/inventory-invoice.jpg",
        link: "https://anchor-bolt-company-limited.vercel.app",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          Our services & portfolio
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl text-[#070f26]">
          Tools and support built around your business.
        </h1>
        <p className="mt-3 max-w-3xl text-[#070f26]/80">
          Spintex, Accra | Support: +233 54 809 7756 | contact.excelprogh@gmail.com
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-12">
          {services.map((group) => (
            <div key={group.category}>
              <h2 className="mb-4 text-2xl font-semibold text-[#070f26]">
                {group.category}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {group.items.map((service: any) => (
                  <div key={service.title} className="overflow-hidden rounded-2xl border border-[#070f26]/10 bg-white">
                    <div className="relative h-40 w-full bg-[#f4f4f4]">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <div className="p-5">
                      <span className="rounded-full bg-[#f4c542] px-3 py-1 text-xs font-bold text-[#070f26]">
                        {service.tag}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-[#070f26]">{service.title}</h3>
                      <p className="mt-2 leading-7 text-[#070f26]/80">{service.desc}</p>
                      <p className="mt-3 text-sm text-green-700">{service.highlight}</p>
                      {service.link && (
                        <a href={service.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-lg bg-[#070f26] px-4 py-2 text-sm font-bold text-white hover:bg-black">
                          View Live →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/request" className="inline-flex rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]">
            Request a Quote
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}