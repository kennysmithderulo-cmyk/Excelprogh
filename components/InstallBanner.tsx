"use client"; 

import { useEffect, useState } from "react";

export function InstallBanner() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only show on mobile devices
    const checkMobile = () => {
      const mobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();

    const hidden = localStorage.getItem("install-banner-hidden");
    if (isMobile && !hidden) {
      // Small delay so it doesn't pop immediately
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const hideBanner = () => {
    setShow(false);
    localStorage.setItem("install-banner-hidden", "true");
  };

  if (!show || !isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#070f26]/10 bg-white px-4 py-3 sm:hidden">
      <p className="text-sm text-[#070f26]">
        Install Excel Pro GH for quick access
      </p>
      <p className="mt-1 text-xs text-[#070f26]/70">
        Tap the menu in your browser → Install app / Add to Home screen
      </p>
      <div className="mt-2 flex items-center gap-2">
        <button
          onClick={hideBanner}
          className="rounded-md bg-[#f4c542] px-3 py-1.5 text-xs font-semibold text-[#070f26]"
        >
          Got it
        </button>
        <a
          href="https://wa.me/233548097756"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-[#070f26] hover:text-[#f4c542]"
        >
          Need help?
        </a>
      </div>
    </div>
  );
}
