"use client";

import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#070f26]/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Left: simple logo / site name */}
            <div className="text-white font-semibold">
              Excelprogh
            </div>

            {/* Right: hamburger menu button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white p-2"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
