"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070f26]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-bold">
          Excel Pro GH
        </Link>

        <nav className="hidden items-center gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                isActive(item.href)
                  ? "text-[#f4c542]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request"
            className="rounded-lg bg-[#f4c542] px-3 py-1.5 font-semibold text-[#070f26] transition hover:bg-[#ffd95c]"
          >
            Request
          </Link>
        </nav>

        {/* Mobile menu button – simple version: link to request */}
        <Link
          href="/request"
          className="rounded-md bg-[#f4c542] px-3 py-1.5 text-sm font-semibold text-[#070f26] md:hidden"
        >
          Request
        </Link>
      </div>
    </header>
  );
}
