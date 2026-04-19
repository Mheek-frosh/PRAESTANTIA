import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Contact Praestantia to partner on strategic engagements.",
};

export default function PartnerWithUsPage() {
  return (
    <MarketingShell>
      <div className="pt-24 pb-16">
        <Contact />
      </div>
    </MarketingShell>
  );
}
