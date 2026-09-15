export const metadata = {
  title: "Terms of Service | Excel Pro GH",
  description: "Terms of Service for Excel Pro GH.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#070f26] text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-bold">
            Excel Pro GH
          </a>
          <a href="/" className="text-sm text-[#f4c542]">
            Back to home
          </a>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-white/50">Last updated: 15 September 2026</p>
        <h1 className="mt-3 text-4xl font-bold">Terms of Service</h1>

        <div className="mt-10 space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-bold text-white">1. Services</h2>
            <p className="mt-3 leading-8">
              Excel Pro GH provides website development, Excel automation, data
              cleaning, dashboard, virtual assistant, and customer support
              services as agreed with each client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              2. Proposals and pricing
            </h2>
            <p className="mt-3 leading-8">
              Prices displayed on the website are starting prices unless stated
              otherwise. Final pricing, deliverables, timelines, and payment
              terms will be confirmed before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Client materials</h2>
            <p className="mt-3 leading-8">
              Clients are responsible for providing accurate information and
              ensuring they have permission to use any logos, images, text,
              documents, data, or other materials supplied to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Payments</h2>
            <p className="mt-3 leading-8">
              Deposits, milestone payments, subscriptions, and final payment
              requirements will be stated in the applicable proposal or
              agreement. Additional work outside the agreed scope may require an
              additional fee.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              5. Delivery and revisions
            </h2>
            <p className="mt-3 leading-8">
              Delivery dates depend on project scope and the timely provision of
              required information or feedback. The number of included revision
              rounds will be agreed for each project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              6. Ownership and third-party services
            </h2>
            <p className="mt-3 leading-8">
              Ownership of final project deliverables will be handled according
              to the applicable agreement and payment status. Third-party
              services, hosting, domains, plugins, and software may have their
              own fees and terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">7. Contact</h2>
            <p className="mt-3 leading-8">
              For questions about these terms, contact Excel Pro GH through{" "}
              <a
                href="https://wa.me/233548097756"
                className="text-green-400 underline"
              >
                WhatsApp at +233 548097756
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
