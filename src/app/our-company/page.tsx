import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { OurCompanyPage } from "@/components/pages/our-company-page";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Company",
  description: `Who we are — ${company.name}: vision, mission, operating principles, and governance-ready delivery across Nigeria.`,
};

export default function OurCompany() {
  return (
    <MarketingShell>
      <OurCompanyPage />
    </MarketingShell>
  );
}
