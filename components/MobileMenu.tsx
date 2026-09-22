"use client";

import Link from "next/link";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  // Edit these to match your real routes
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/templates", label: "Templates" },
    { href: "/excel-tips", label: "Excel Tips" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/support", label: "Support" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#070f26] text-white">
      {/* Menu top bar */}
      <div className="flex h-14 items-center justify-between px-4 border-b border-white/10">
        <div className="font-semibold">Excelprogh</div>
        <button
          onClick={onClose}
          className="text-white p-2"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Menu links */}
      <nav className="px-4 py-6">
        <ul className="space-y-4 text-lg">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={onClose}
                className="block py-2"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
