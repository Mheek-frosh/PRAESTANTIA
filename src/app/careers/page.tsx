import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { CareersPage } from "@/components/pages/careers-page";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Careers at ${company.name} — roles, culture, and how to apply for engineering, technology, and program leadership positions.`,
};

export default function Careers() {
  return (
    <MarketingShell>
      <CareersPage />
    </MarketingShell>
  );
}
