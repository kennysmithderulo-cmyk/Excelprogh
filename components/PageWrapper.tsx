import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070f26] text-white">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
