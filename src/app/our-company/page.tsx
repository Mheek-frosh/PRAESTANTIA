import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { OurCompanyPage } from "@/components/pages/our-company-page";
import { company } from "@/data/site";

/**
 * Metadata configuration for SEO optimization.
 * This ensures the About Us page has the correct title and description in search results.
 */
export const metadata: Metadata = {
  title: "Our Company",
  description: `Who we are — ${company.name}: vision, mission, operating principles, and governance-ready delivery across Nigeria.`,
};

/**
 * Our Company (About Us) Page
 * 
 * This page displays the history, mission, and operating principles of the company.
 * It uses the <MarketingShell> to maintain consistent padding and layout, 
 * and renders the main content via the <OurCompanyPage /> component.
 */
export default function OurCompany() {
  return (
    <MarketingShell>
      <OurCompanyPage />
    </MarketingShell>
  );
}
