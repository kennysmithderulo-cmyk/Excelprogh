export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-white/70 mb-4">
          Last updated: 15 September 2026
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. What data we collect</h2>
          <p className="text-white/80 mb-3">
            When you use our contact form or reach out via WhatsApp or email, we
            may collect:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone/WhatsApp number (if provided)</li>
            <li>Details about your project or service request</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. How we use your data</h2>
          <p className="text-white/80 mb-3">
            We use this information to:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Respond to your inquiries and provide quotes</li>
            <li>Deliver agreed services and support</li>
            <li>Communicate about your project (updates, questions, invoices)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. Data storage & security</h2>
          <p className="text-white/80 mb-3">
            Your contact details and messages are stored in:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Our website backend (Supabase database)</li>
            <li>Our email and WhatsApp inboxes</li>
          </ul>
          <p className="text-white/80 mt-3">
            We take reasonable steps to protect your information and do not sell
            your data to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Sharing with third parties</h2>
          <p className="text-white/80 mb-3">
            We may share your data only when necessary to:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Provide services (e.g., with your permission, sharing details with a support agent working on your project)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">5. Your rights</h2>
          <p className="text-white/80 mb-3">
            You can request:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Access to the personal data we hold about you</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data, subject to legal and contractual obligations</li>
          </ul>
          <p className="text-white/80 mt-3">
            Contact us at{" "}
            <a
              href="mailto:contact.excelprogh@gmail.com"
              className="text-green-400 underline"
            >
              contact.excelprogh@gmail.com
            </a>{" "}
            for any privacy‑related requests.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. Changes to this policy</h2>
          <p className="text-white/80">
            We may update this Privacy Policy from time to time. The latest
            version will always be posted on this page.
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
