import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">Excel Pro GH</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
            Websites, Excel automation, dashboards, and business support for
            growing businesses in Ghana.
          </p>
        </div>

        <div>
          <p className="font-semibold">Explore</p>
          <div className="mt-3 grid gap-2 text-sm text-white/60">
            <Link href="/about" className="hover:text-white">
              About us
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-white">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold">Legal</p>
          <div className="mt-3 grid gap-2 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <a
              href="https://wa.me/233548097756"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/40">
        © {new Date().getFullYear()} Excel Pro GH. All rights reserved. Accra,
        Ghana.
      </div>
    </footer>
  );
}
