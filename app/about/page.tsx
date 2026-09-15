export default function AboutPage() {
  return (
    <div className="bg-[#070f26] text-white min-h-screen">
      {/* Navbar (simple, consistent with home) */}
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
          <a
            href="https://wa.me/233548097756"
            className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <main className="px-6 max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6">About Excel Pro GH</h1>

        <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
          <img
            src="/profile.jpg"
            alt="Founder"
            className="w-full md:w-auto md:h-64 object-cover rounded-xl border border-white/10"
          />
          <div className="md:col-span-2 text-white/80">
            <p className="mb-4">
              Excel Pro GH helps businesses in Ghana and beyond save time and
              reduce errors by automating repetitive work. We build practical
              systems you can actually use — from websites and online stores to
              Excel automation, data cleaning, and support teams.
            </p>
            <p className="mb-4">
              Whether you’re spending hours every week on manual reports,
              struggling to track inventory, or need a website that actually
              brings customers, we design solutions that fit your workflow and
              budget.
            </p>
            <p>
              Our focus is on small and growing businesses — shops, online
              sellers, clinics, and service providers — who need reliable,
              offline‑friendly tools without expensive monthly subscriptions.
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4">What We Believe</h2>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Technology should save you time, not create more work.</li>
            <li>
              Systems should be simple enough for your team to use every day.
            </li>
            <li>
              Ghanaian businesses deserve tools built for local realities
              (mobile money, WhatsApp, intermittent internet).
            </li>
            <li>
              You shouldn’t need to pay endless subscriptions to run your
              business.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">How We Work</h2>
          <ol className="list-decimal pl-6 text-white/80 space-y-2">
            <li>
              <strong>Discovery:</strong> We learn how your business works, where
              time is wasted, and what “success” looks like.
            </li>
            <li>
              <strong>Design & Build:</strong> We create a simple, focused system
              (website, spreadsheet, or dashboard) tailored to your process.
            </li>
            <li>
              <strong>Test & Train:</strong> We test with real data and show you
              and your team how to use everything confidently.
            </li>
            <li>
              <strong>Support:</strong> We stay available via WhatsApp, call, or
              remote sessions to tweak and improve as you grow.
            </li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-white/80 mb-6">
            If you’re ready to save time and run your business with clearer
            systems, tell us about your project.
          </p>
          <a
            href="/#contact"
            className="bg-white text-[#070f26] font-bold px-6 py-3 rounded hover:bg-white/90 inline-block"
          >
            Contact Us
          </a>
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
