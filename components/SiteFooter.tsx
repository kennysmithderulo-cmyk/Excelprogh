import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-white border-t border-[#070f26]/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-[#070f26]">Excel Pro GH</h3>
            <p className="mt-2 text-sm text-[#070f26]/80">
              Websites, Excel automation and business support for SMEs in Ghana.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#070f26]">
              Quick links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#070f26]/80 hover:text-[#f4c542]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#070f26]/80 hover:text-[#f4c542]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#070f26]/80 hover:text-[#f4c542]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#070f26]/80 hover:text-[#f4c542]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#070f26]">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#070f26]/80">
              <li>
                <a href="https://wa.me/233548097756" className="hover:text-[#f4c542]">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@excelprogh.com" className="hover:text-[#f4c542]">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[#070f26]/10 pt-4 text-center text-sm text-[#070f26]/70">
          © {new Date().getFullYear()} Excel Pro GH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
