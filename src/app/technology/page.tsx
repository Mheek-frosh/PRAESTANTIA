import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { Technology } from "@/components/sections/technology";

export const metadata: Metadata = {
  title: "Technology",
  description: "Platforms that stay ahead of the threat landscape.",
};

export default function TechnologyPage() {
  return (
    <MarketingShell>
      <div className="pt-24 pb-16">
        <Technology />
      </div>
    </MarketingShell>
  );
}
