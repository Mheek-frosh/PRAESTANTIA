import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive enterprise services.",
};

export default function ServicesPage() {
  return (
    <MarketingShell>
      <div className="pt-24 pb-16">
        <Services />
      </div>
    </MarketingShell>
  );
}
