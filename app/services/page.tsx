"use client";

import { PageWrapper } from "@/components/PageWrapper";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    category: "For Shops & Online Sellers",
    items: [
      {
        title: "E-commerce & Product Websites",
        desc: "Mobile-friendly online stores and product websites with WhatsApp orders and simple management.",
        tag: "From GHS 500",
        highlight: "Ideal for fashion, hair, cosmetics, and retail businesses.",
        image: "/website-dev.jpg",
      },
      {
        title: "Inventory, Sales & Invoicing",
        desc: "Track stock, sales, expenses, invoices, and receipts using a practical Excel or Google Sheets system.",
        tag: "From GHS 200",
        highlight: "Suitable for shops, pharmacies, and small warehouses.",
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
        tag: "From GHS 250",
        highlight: "Reduce lost records and missed follow-ups.",
        image: "/customer-support.jpg",
      },
      {
        title: "Reports & Business Dashboards",
        desc: "Clear dashboards for sales, expenses, profit, and key performance indicators.",
        tag: "From GHS 250",
        highlight: "Understand your business without opening multiple files.",
        image: "/data-analytics.jpg",
      },
    ],
  },
  {
    category: "Data & Operations Support",
    items: [
      {
        title: "Data Cleaning & Preparation",
        desc: "Convert messy sales, bank, mobile-money, and customer data into clean, usable records.",
        tag: "From GHS 100",
        highlight: "Save time and reduce errors in your reports.",
        image: "/data-cleaning.jpg",
      },
      {
        title: "Virtual Assistant & Customer Support",
        desc: "Get help with administration, research, email, chat support, and daily business operations.",
        tag: "From GHS 350/month",
        highlight: "Flexible support for growing businesses.",
        image: "/virtual-assistant.jpg",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          Our services
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl text-[#070f26]">
          Tools and support built around your business.
        </h1>
        <p className="mt-3 max-w-3xl text-[#070f26]/80">
          Choose a ready-made solution or contact us for a custom system based
          on the way your business operates.
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
                {group.items.map((service) => (
                  <div
                    key={service.title}
                    className="overflow-hidden rounded-2xl border border-[#070f26]/10 bg-white"
                  >
                    {/* Service image */}
                    <div className="relative h-40 w-full bg-[#f4f4f4]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Service content */}
                    <div className="p-5">
                      <span className="rounded-full bg-[#f4c542] px-3 py-1 text-xs font-bold text-[#070f26]">
                        {service.tag}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-[#070f26]">
                        {service.title}
                      </h3>
                      <p className="mt-2 leading-7 text-[#070f26]/80">
                        {service.desc}
                      </p>
                      <p className="mt-3 text-sm text-green-700">
                        {service.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/request"
            className="inline-flex rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
