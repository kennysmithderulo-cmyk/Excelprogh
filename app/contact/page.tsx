import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl text-[#070f26]">
          Get in touch with Excel Pro GH.
        </h1>
        <p className="mt-4 text-lg leading-8 text-[#070f26]/80">
          We respond to most enquiries within 24 hours. Choose the channel that
          works best for you.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#070f26]/10 bg-white p-6">
            <h2 className="text-lg font-bold text-[#070f26]">Phone & WhatsApp</h2>
            <p className="mt-3 text-[#070f26]/80">
              For quick questions and project discussions.
            </p>
            <div className="mt-4 space-y-2">
              <p>
                <span className="text-[#070f26]/50">Phone:</span>{" "}
                <a
                  href="tel:+233548097756"
                  className="text-[#070f26] font-semibold hover:text-[#f4c542]"
                >
                  +233 548097756
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/233548097756"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#070f26] font-semibold hover:text-[#f4c542]"
                >
                  Open WhatsApp chat
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#070f26]/10 bg-white p-6">
            <h2 className="text-lg font-bold text-[#070f26]">Email</h2>
            <p className="mt-3 text-[#070f26]/80">
              For detailed briefs, documents and follow-ups.
            </p>
            <div className="mt-4">
              <p>
                <span className="text-[#070f26]/50">Email:</span>{" "}
                <a
                  href="mailto:contact.excelprogh@gmail.com"
                  className="text-[#070f26] font-semibold hover:text-[#f4c542]"
                >
                  contact.excelprogh@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#070f26]/10 bg-white p-6 sm:col-span-2">
            <h2 className="text-lg font-bold text-[#070f26]">Location</h2>
            <p className="mt-3 text-[#070f26]/80">
              We work remotely with clients across Ghana and beyond. Meetings
              and training are done via WhatsApp, calls and screen sharing.
            </p>
            <p className="mt-2 text-[#070f26]/80">
              <span className="text-[#070f26]/50">Base:</span> Accra, Ghana
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
