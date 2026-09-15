export const metadata = {
  title: "About Excel Pro GH",
  description:
    "Learn about Excel Pro GH and how we help Ghanaian businesses with websites, automation, dashboards, and operational support.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070f26] text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-bold">
            Excel Pro GH
          </a>

          <div className="flex gap-4 text-sm">
            <a href="/#services" className="hover:text-[#f4c542]">
              Services
            </a>
            <a href="/#portfolio" className="hover:text-[#f4c542]">
              Portfolio
            </a>
            <a href="/#contact" className="hover:text-[#f4c542]">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          About us
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          We make business technology easier to use.
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">
          Excel Pro GH helps small and growing businesses use technology to
          reduce repetitive work, organize information, and serve customers
          better.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What we do</h2>
            <p className="mt-4 leading-8 text-white/70">
              We build business websites, online stores, Excel automation
              systems, dashboards, data-cleaning solutions, and operational
              support services.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Our goal is not to add unnecessary complexity. We focus on useful
              systems that match your budget, workflow, and level of technical
              experience.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Who we serve</h2>
            <ul className="mt-5 grid gap-3 text-white/70">
              <li>• Retail shops and online sellers</li>
              <li>• Hair, fashion, and beauty businesses</li>
              <li>• Clinics and service providers</li>
              <li>• Freelancers and entrepreneurs</li>
              <li>• Small teams that need operational support</li>
            </ul>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">How we work</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Understand", "We learn how your business currently works."],
              ["02", "Plan", "We recommend a clear and affordable solution."],
              ["03", "Build", "We create and test the website or system."],
              ["04", "Support", "We help you use and improve it over time."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm font-bold text-[#f4c542]">{number}</p>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[#f4c542]/30 bg-[#f4c542]/10 p-8">
          <h2 className="text-2xl font-bold">Ready to improve your workflow?</h2>
          <p className="mt-3 text-white/70">
            Tell us what you want to build, automate, or organize.
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-block rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26]"
          >
            Start a conversation
          </a>
        </section>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        Excel Pro GH • Accra, Ghana •{" "}
        <a
          href="https://wa.me/233548097756"
          target="_blank"
          rel="noreferrer"
          className="text-green-400"
        >
          WhatsApp us
        </a>
      </footer>
    </main>
  );
}
