export default function TermsPage() {
  return (
    <div className="bg-[#070f26] text-white min-h-screen">
      <nav className="px-6 py-4 flex justify-between items-center border-b border-white/10">
        <a href="/" className="font-bold text-lg">
          Excel Pro GH
        </a>
        <div className="flex gap-4 text-sm">
          <a href="/#services" className="hover:text-white/80">
            Services
          </a>
          <a href="/#portfolio" className="hover:text-white/80">
            Portfolio
          </a>
          <a href="/#contact" className="hover:text-white/80">
            Contact
          </a>
        </div>
      </nav>

      <main className="px-6 max-w-3xl mx-auto py-16">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p className="text-white/70 mb-4">
          Last updated: 15 September 2026
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Services</h2>
          <p className="text-white/80 mb-3">
            Excel Pro GH provides website development, Excel and workflow
            automation, data cleaning, dashboards, virtual assistant, and
            customer support services as described on our website and in
            individual proposals or agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. Projects & pricing</h2>
          <p className="text-white/80 mb-3">
            Each project is scoped individually. Prices shown on the website are
            starting prices and may change based on your specific requirements.
            We will confirm final pricing and timelines before starting work.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. Payments</h2>
          <p className="text-white/80 mb-3">
            Payment terms (e.g., deposit and milestones) will be specified in
            your project agreement. Work may begin after an agreed deposit is
            received.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Client responsibilities</h2>
          <p className="text-white/80 mb-3">
            To ensure smooth delivery, you agree to:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Provide accurate information and materials on time</li>
            <li>Review and give feedback within reasonable timeframes</li>
            <li>Ensure you have rights to any content you provide (logos, text, images)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">5. Intellectual property</h2>
          <p className="text-white/80 mb-3">
            Upon full payment, you own the final deliverables (website,
            spreadsheets, dashboards) created specifically for your project.
            We retain the right to reuse general methods, code snippets, and
            know‑how across other projects.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">6. Support & maintenance</h2>
          <p className="text-white/80 mb-3">
            Support terms (duration, response times, what’s included) will be
            agreed per project or support package. Anything beyond the agreed
            scope may be billed separately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">7. Limitation of liability</h2>
          <p className="text-white/80 mb-3">
            While we strive for high quality and reliability, we are not liable
            for indirect or consequential losses (e.g., lost profits) arising
            from the use of our services, except as required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">8. Changes to these terms</h2>
          <p className="text-white/80">
            We may update these Terms from time to time. The latest version will
            always be posted on this page.
          </p>
        </section>
      </main>

      <footer className="text-center py-10 text-white/50 text-sm border-t border-white/10">
        Excel Pro GH • +233 548097756 • Accra, Ghana •{" "}
        <a
          href="https://wa.me/233548097756"
          className="underline hover:text-white/70"
        >
          WhatsApp Us
        </a>
      </footer>
    </div>
  );
}
