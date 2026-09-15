"use client";
import { useState } from "react";

const services = [
  {
    category: "For Shops & Online Sellers",
    items: [
      {
        title: "E‑commerce & Product Websites",
        desc:
          "Online stores and product sites with mobile money, WhatsApp orders, and simple admin.",
        tag: "From GHS 500 • 3–10 days",
        link: "#contact",
        image: "/hair-lounge.jpg",
        highlight: "Example: 5-7 Hair Lounge – 100+ products online",
      },
      {
        title: "Inventory, Sales & Invoicing",
        desc:
          "Track stock, sales, and expenses; auto‑generate invoices and receipts in Excel/Sheets.",
        tag: "From GHS 200 • 2–5 days",
        link: "#contact",
        image: "/inventory-invoice.jpg",
        highlight: "Ideal for shops, pharmacies, and small warehouses",
      },
    ],
  },
  {
    category: "For Service Businesses & Clinics",
    items: [
      {
        title: "Appointment & Client Records",
        desc:
          "Simple systems to book appointments, track clients, and manage payments without chaos.",
        tag: "From GHS 250 • 3–7 days",
        link: "#contact",
        image: "/budget-tracker.jpg",
        highlight: "Reduce no‑shows and lost records",
      },
      {
        title: "Reports & Dashboards",
        desc:
          "Weekly/monthly dashboards for sales, expenses, and KPIs so you know your numbers fast.",
        tag: "From GHS 250 • 2–5 days",
        link: "#contact",
        image: "/data-analytics.jpg",
        highlight: "Know your profit without opening 10 files",
      },
    ],
  },
  {
    category: "Data & Operations Support",
    items: [
      {
        title: "Data Cleaning & Preparation",
        desc:
          "Turn messy mobile money, bank, or sales exports into clean, analysis‑ready tables.",
        tag: "From GHS 100 • 1–2 days",
        link: "#contact",
        image: "/data-cleaning.jpg",
        highlight: "Typical time saved: 80–95%",
      },
      {
        title: "Virtual Assistant & Support Teams",
        desc:
          "Ongoing admin, email, research, and customer support (chat/call) for your business.",
        tag: "From GHS 350/mo",
        link: "#contact",
        image: "/virtual-assistant.jpg",
        highlight: "Free up 10–20 hours/month of your time",
      },
    ],
  },
];

const portfolioHighlights = [
  {
    title: "5-7 Hair Lounge",
    desc: "E‑commerce hair store with 100+ products, cart, and checkout.",
    tag: "Website Development – LIVE",
    link: "https://5-7hair-lounge.vercel.app",
    image: "/hair-lounge.jpg",
  },
  {
    title: "Betslip Analyser",
    desc: "Web tool to check bet slips for risk and patterns.",
    tag: "Website Development – LIVE",
    link: "https://betslip-analyser-check.vercel.app",
    image: "/betslip.jpg",
  },
  {
    title: "Budget Tracker",
    desc: "Automated income & expense tracker for small businesses.",
    tag: "Excel Automation",
    link: "#contact",
    image: "/budget-tracker.jpg",
  },
  {
    title: "Inventory & Invoice System",
    desc: "Stock tracking with auto‑generated invoices and receipts.",
    tag: "Excel Automation",
    link: "#contact",
    image: "/inventory-invoice.jpg",
  },
];

export default function Home() {
  const [book, setBook] = useState({ name: "", email: "", service: "" });
  const [msg, setMsg] = useState("");

  const send = () => {
    if (!book.name || !book.email) {
      setMsg("Please enter your name and email so we can reply.");
      return;
    }
    // For now, just show a success message.
    // Later we can connect this to Supabase or an email service.
    setMsg(
      `Thanks ${book.name}! We've received your request and will contact you via ${book.email} or WhatsApp (+233 548097756).`
    );
    setBook({ name: "", email: "", service: "" });
  };

  return (
    <div className="bg-[#070f26] text-white min-h-screen">
      {/* Navbar */}
      <nav className="px-6 py-4 flex justify-between items-center border-b border-white/10">
        <p className="font-bold text-lg">Excel Pro GH</p>
        <div className="flex gap-4 text-sm">
          <a href="#services" className="hover:text-white/80">
            Services
          </a>
          <a href="#portfolio" className="hover:text-white/80">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-white/80">
            Contact
          </a>
          <a
            href="https://wa.me/233548097756"
            className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 max-w-6xl mx-auto py-16 text-center">
        <img
          src="/profile.jpg"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white/20"
          alt="Excel Pro GH founder"
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Websites & Excel Systems That Save You Time and Make You Money
        </h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          We build automated, offline‑friendly websites and Excel systems for
          Ghanaian SMEs — shops, online sellers, clinics, and service businesses
          that want to save time and grow.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-white text-[#070f26] font-bold px-6 py-3 rounded hover:bg-white/90"
          >
            Book a Free 15‑Min Call
          </a>
          <a
            href="https://wa.me/233548097756"
            className="border border-white/30 px-6 py-3 rounded hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-2">What We Build</h2>
        <p className="text-white/60 mb-10">
          Clear, practical systems you can actually use — no subscriptions, no
          unnecessary complexity.
        </p>

        <div className="space-y-12">
          {services.map((sec, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-4 text-white/90">
                {sec.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {sec.items.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:scale-[1.02] transition block"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xs bg-white/10 inline-block px-2 py-1 rounded">
                        {s.tag}
                      </p>
                      <h4 className="font-bold mt-2">{s.title}</h4>
                      <p className="text-sm text-white/60 mt-1">{s.desc}</p>
                      {s.highlight && (
                        <p className="text-xs text-green-400 mt-2">
                          {s.highlight}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="px-6 max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-2">Portfolio Highlights</h2>
        <p className="text-white/60 mb-10">
          A few recent projects. More available on request.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioHighlights.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:scale-105 transition block"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-xs bg-white/10 inline-block px-2 py-1 rounded">
                  {p.tag}
                </p>
                <h3 className="font-bold mt-2">{p.title}</h3>
                <p className="text-sm text-white/60">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Trust / Proof */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">
            Why Clients Choose Excel Pro GH
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-white/80">
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              Built for Ghanaian SMEs (mobile money, WhatsApp orders, local
              workflows)
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              Offline‑first systems with no monthly subscriptions
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              Fast delivery: many projects done in days, not months
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              Ongoing support via WhatsApp, call, or remote sessions
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-white/60 mb-8">
          Tell us about your project. We usually reply within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="mb-4">
              Call / WhatsApp:{" "}
              <a
                href="https://wa.me/233548097756"
                className="text-green-400 font-bold"
              >
                +233 548097756
              </a>
            </p>
            <p className="mb-4">
              Email:{" "}
              <a
                href="mailto:contact.excelprogh@gmail.com"
                className="text-green-400 font-bold"
              >
                contact.excelprogh@gmail.com
              </a>
            </p>
            <p className="text-white/60">
              Based in Accra, Ghana — working with clients locally and
              internationally.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold mb-4">Request a Quote / Book a Call</h3>
            <div className="grid gap-3">
              <input
                placeholder="Your name"
                className="p-3 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                value={book.name}
                onChange={(e) =>
                  setBook({ ...book, name: e.target.value })
                }
              />
              <input
                placeholder="Email address"
                type="email"
                className="p-3 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                value={book.email}
                onChange={(e) =>
                  setBook({ ...book, email: e.target.value })
                }
              />
              <input
                placeholder="Service you need (e.g. Website, Excel automation, Data cleaning)"
                className="p-3 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                value={book.service}
                onChange={(e) =>
                  setBook({ ...book, service: e.target.value })
                }
              />
              <button
                onClick={send}
                className="bg-white text-[#070f26] font-bold py-3 rounded hover:bg-white/90"
              >
                Send Request
              </button>
              {msg && (
                <p className="text-sm text-green-300 mt-2">{msg}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-white/50 text-sm border-t border-white/10">
        Excel Pro GH • +233 548097756 • Accra, Ghana •{" "}
        <a
          href="https://wa.me/233548097756"
          className="underline hover:text-white/70"
        >
          WhatsApp Us
        </a>
        <span className="mx-2">•</span>
        <a href="/privacy" className="underline hover:text-white/70">
          Privacy
        </a>
        <span className="mx-2">•</span>
        <a href="/terms" className="underline hover:text-white/70">
          Terms
        </a>
      </footer>
    </div>
  );
                                  }
