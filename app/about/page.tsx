import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          About Excel Pro GH
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Practical technology for Ghanaian businesses.
        </h1>
        <p className="mt-4 text-lg leading-8 text-white/70">
          Excel Pro GH helps small and growing businesses in Ghana save time and
          reduce errors with simple digital systems. We focus on solutions that
          are easy to use, affordable, and aligned with how you actually work.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">What we believe</h2>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>• Technology should be simple, not complicated.</li>
              <li>• Your systems must work offline and on basic devices.</li>
              <li>• Clear pricing and realistic project scopes matter.</li>
              <li>• Support should be fast and human, not automated.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">How we work</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-white/70">
              <li>We listen to how your business operates today.</li>
              <li>
                We suggest the simplest system that solves your main problems.
              </li>
              <li>
                We build it using tools you already know (websites, Excel,
                Google Sheets, WhatsApp).
              </li>
              <li>
                We support you remotely, mostly through WhatsApp and screen
                sharing.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-[#f4c542]/30 bg-[#f4c542]/10 p-6">
            <h2 className="text-xl font-bold">Ready to work together?</h2>
            <p className="mt-2 text-white/70">
              Tell us about your business and what you want to improve. We will
              reply with options and clear pricing.
            </p>
            <div className="mt-4">
              <Link
                href="/request"
                className="inline-flex rounded-lg bg-[#f4c542] px-6 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
