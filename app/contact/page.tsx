import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Get in touch with Excel Pro GH.
        </h1>
        <p className="mt-4 text-lg leading-8 text-white/70">
          We respond to most enquiries within 24 hours. Choose the channel that
          works best for you.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-bold">Phone & WhatsApp</h2>
            <p className="mt-3 text-white/70">
              For quick questions and project discussions.
            </p>
            <div className="mt-4 space-y-2">
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
                <a
                  href="https://wa.me/233548097756"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Open WhatsApp chat
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-bold">Email</h2>
            <p className="mt-3 text-white/70">
              For detailed briefs, documents and follow-ups.
            </p>
            <div className="mt-4">
              <p>
                <span className="text-white/50">Email:</span>{" "}
                <a
                  href="mailto:contact.excelprogh@gmail.com"
                  className="text-green-400 hover:underline"
                >
                  contact.excelprogh@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
            <h2 className="text-lg font-bold">Location</h2>
            <p className="mt-3 text-white/70">
              We work remotely with clients across Ghana and beyond. Meetings
              and training are done via WhatsApp, calls and screen sharing.
            </p>
            <p className="mt-2 text-white/70">
              <span className="text-white/50">Base:</span> Accra, Ghana
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/request"
            className="inline-flex rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]"
          >
            Send a Project Request
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
