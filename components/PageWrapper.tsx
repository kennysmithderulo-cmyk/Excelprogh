import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { InstallBanner } from "./InstallBanner";
import { MobileNav } from "./MobileNav";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#070f26]">
      <SiteHeader />
      {children}
      <SiteFooter />
      <InstallBanner />
      <MobileNav />
    </div>
  );
}
