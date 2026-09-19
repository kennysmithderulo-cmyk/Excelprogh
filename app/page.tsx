"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    category: "For Shops & Online Sellers",
    items: [
      {
        title: "E-commerce & Product Websites",
        desc: "Mobile-friendly online stores and product websites with WhatsApp orders and simple management.",
        tag: "From GHS 500",
        link: "#contact",
        image: "/hair-lounge.jpg",
        highlight: "Ideal for fashion, hair, cosmetics, and retail businesses.",
      },
      {
        title: "Inventory, Sales & Invoicing",
        desc: "Track stock, sales, expenses, invoices, and receipts using a practical Excel or Google Sheets system.",
        tag: "From GHS 200",
        link: "#contact",
        image: "/inventory-invoice.jpg",
        highlight: "Suitable for shops, pharmacies, and small warehouses.",
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
        link: "#contact",
        image: "/budget-tracker.jpg",
        highlight: "Reduce lost records and missed follow-ups.",
      },
      {
        title: "Reports & Business Dashboards",
        desc: "Clear dashboards for sales, expenses, profit, and key performance indicators.",
        tag: "From GHS 250",
        link: "#contact",
        image: "/data-analytics.jpg",
        highlight: "Understand your business without opening multiple files.",
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
        link: "#contact",
        image: "/data-cleaning.jpg",
        highlight: "Save time and reduce errors in your reports.",
      },
      {
        title: "Virtual Assistant & Customer Support",
        desc: "Get help with administration, research, email, chat support, and daily business operations.",
        tag: "From GHS 350/month",
        link: "#contact",
        image: "/virtual-assistant.jpg",
        highlight: "Flexible support for growing businesses.",
      },
    ],
  },
];

const portfolio = [
  {
    title: "5-7 Hair Lounge",
    desc: "E-commerce hair store with more than 100 products.",
    tag: "Website Development",
    link: "https://5-7hair-lounge.vercel.app",
    image: "/hair-lounge.jpg",
  },
  {
    title: "Betslip Analyser",
    desc: "A website that helps users check betting slips for risk.",
    tag: "Web Application",
    link: "https://betslip-analyser-check.vercel.app",
    image: "/betslip.jpg",
  },
  {
    title: "Budget Tracker",
    desc: "An income and expense tracking system for small businesses.",
    tag: "Excel Automation",
    link: "#contact",
    image: "/budget-tracker.jpg",
  },
  {
    title: "Inventory & Invoice System",
    desc: "A stock, sales, and invoice management system.",
    tag: "Business Automation",
    link: "#contact",
    image: "/inventory-invoice.jpg",
  },
];

export default function Home() {
  const [book, setBook] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof book, value: string) => {
    setBook((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!book.name.trim() || !book.email.trim()) {
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
        body: JSON.stringify(book),
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
        `Hello Excel Pro GH. My name is ${book.name}. I need help with: ${
          book.service || "a business project"
        }. ${book.message || ""}`
      );

      setStatus(
        "Your request has been saved. WhatsApp will now open so you can send a quick follow-up."
      );

      setBook({
        name: "",
        email: "",
        service: "",
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
    <main className="min-h-screen bg-[#070f26] text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-bold">
            Excel Pro GH
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-[#f4c542]">
              Services
            </a>
            <a href="#portfolio" className="hover:text-[#f4c542]">
              Portfolio
            </a>
            <a href="/about" className="hover:text-[#f4c542]">
              About
            </a>
            <a href="#contact" className="hover:text-[#f4c542]">
              Contact
            </a>
            <a
              href="https://wa.me/233548097756"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <img
          src="/profile.jpg"
          alt="Excel Pro GH founder"
          className="mx-auto h-28 w-28 rounded-full border-4 border-white/20 object-cover"
        />

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4c542]">
          Websites, automation and business support
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Simple digital systems that help your business save time and grow.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          We build professional websites, Excel automation systems, dashboards,
          and operational support for small and growing businesses in Ghana.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]"
          >
            Request a Quote
          </a>
          <a
            href="https://wa.me/233548097756"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/25 px-6 py-3 font-semibold hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold text-[#f4c542]">Fast</p>
            <p className="mt-1 text-sm text-white/60">
              Practical solutions delivered quickly.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold text-[#f4c542]">Simple</p>
            <p className="mt-1 text-sm text-white/60">
              Systems your team can actually use.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold text-[#f4c542]">Local</p>
            <p className="mt-1 text-sm text-white/60">
              Built for Ghanaian business workflows.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-20"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
            Our services
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Tools and support built around your business.
          </h2>
          <p className="mt-4 text-white/60">
            Choose a ready-made solution or contact us for a custom system based
            on the way your business operates.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {services.map((group) => (
            <div key={group.category}>
              <h3 className="mb-5 text-2xl font-semibold">
                {group.category}
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map((service) => (
                  <a
                    key={service.title}
                    href={service.link}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#f4c542]/50"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-48 w-full object-cover"
                    />

                    <div className="p-6">
                      <span className="rounded-full bg-[#f4c542] px-3 py-1 text-xs font-bold text-[#070f26]">
                        {service.tag}
                      </span>
                      <h4 className="mt-4 text-xl font-bold">
                        {service.title}
                      </h4>
                      <p className="mt-2 leading-7 text-white/60">
                        {service.desc}
                      </p>
                      <p className="mt-4 text-sm text-green-400">
                        {service.highlight}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="portfolio"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          Selected work
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Examples of what we build.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={
                project.link.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#f4c542]/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-[#f4c542]">
                  {project.tag}
                </p>
                <h3 className="mt-2 font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {project.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-[#f4c542]/30 bg-[#f4c542]/10 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
            Why Excel Pro GH
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Practical technology without unnecessary complexity.
          </h2>

          <div className="mt-8 grid gap-6 text-white/80 md:grid-cols-2">
            <p>✓ Built for Ghanaian businesses and local workflows.</p>
            <p>✓ Clear pricing and practical project scopes.</p>
            <p>✓ Mobile-friendly websites and easy-to-use systems.</p>
            <p>✓ Ongoing support through WhatsApp and remote assistance.</p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-20"
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
              Start a project
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Tell us what your business needs.
            </h2>
            <p className="mt-5 leading-8 text-white/60">
              Share a few details and we will help you choose the right
              solution. You can also contact us directly on WhatsApp.
            </p>

            <div className="mt-8 space-y-4 text-white/80">
              <p>
                <span className="text-white/50">Phone:</span>{" "}
                <a
                  href="tel:+233548097756"
                  className="text-green-400 hover:underline"
                >
                  +233 548097756
                </a>
              </p>

              <p>
                <span className="text-white/50">Email:</span>{" "}
                <a
                  href="mailto:contact.excelprogh@gmail.com"
                  className="text-green-400 hover:underline"
                >
                  contact.excelprogh@gmail.com
                </a>
              </p>

              <p>
                <span className="text-white/50">Location:</span> Accra, Ghana
              </p>
              <p>
                <span className="text-white/50">Response time:</span> Usually
                within 24 hours
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <form onSubmit={send} className="grid gap-4">
              <label className="grid gap-2 text-sm">
                Your name
                <input
                  required
                  value={book.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
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
                  value={book.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  className="rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 text-sm">
                What do you need?
                <select
                  value={book.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  className="rounded-lg border border-white/10 bg-[#111d38] p-3 outline-none focus:border-[#f4c542]"
                >
                  <option value="">Select a service</option>
                  <option>Business website</option>
                  <option>E-commerce website</option>
                  <option>Excel automation</option>
                  <option>Data cleaning</option>
                  <option>Dashboard</option>
                  <option>Virtual assistant or support</option>
                  <option>Something else</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm">
                Briefly describe your project
                <textarea
                  value={book.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
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
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">Excel Pro GH</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
            Websites, Excel automation, dashboards, and business support for
            growing businesses in Ghana.
          </p>
        </div>

        <div>
          <p className="font-semibold">Explore</p>
          <div className="mt-3 grid gap-2 text-sm text-white/60">
            <a href="/about" className="hover:text-white">
              About us
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold">Legal</p>
          <div className="mt-3 grid gap-2 text-sm text-white/60">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
            <a
              href="https://wa.me/233548097756"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/40">
        © {new Date().getFullYear()} Excel Pro GH. All rights reserved. Accra,
        Ghana.
      </div>
    </footer>
  );
    }
