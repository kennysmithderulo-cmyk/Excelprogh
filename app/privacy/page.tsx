export const metadata = {
  title: "Privacy Policy | Excel Pro GH",
  description: "Privacy Policy for Excel Pro GH.",
};

export default function PrivacyPage() {
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
        <h1 className="mt-3 text-4xl font-bold">Privacy Policy</h1>

        <div className="mt-10 space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-bold text-white">
              1. Information we collect
            </h2>
            <p className="mt-3 leading-8">
              When you contact Excel Pro GH, we may collect your name, email
              address, phone or WhatsApp number, business details, and
              information about the service you are requesting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              2. How we use your information
            </h2>
            <p className="mt-3 leading-8">
              We use your information to respond to inquiries, prepare quotes,
              deliver services, provide support, and communicate with you about
              an active project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              3. Information sharing
            </h2>
            <p className="mt-3 leading-8">
              We do not sell your personal information. We may share information
              with service providers only when reasonably necessary to deliver
              an agreed service or comply with a legal obligation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              4. Data security and retention
            </h2>
            <p className="mt-3 leading-8">
              We take reasonable steps to protect information in our possession.
              We retain information only for as long as reasonably necessary for
              communication, project delivery, support, accounting, or legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              5. Your choices
            </h2>
            <p className="mt-3 leading-8">
              You may ask us to correct or delete personal information we hold
              about you, subject to contractual or legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              6. Contact
            </h2>
            <p className="mt-3 leading-8">
              For privacy questions, contact us on{" "}
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
