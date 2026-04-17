import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { TeamPage } from "@/components/pages/team-page";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Leadership and delivery leadership at ${company.name} — engineering, digital, agriculture, and programs.`,
};

export default function Team() {
  return (
    <MarketingShell>
      <TeamPage />
    </MarketingShell>
  );
}
