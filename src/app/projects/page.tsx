import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of infrastructure and enterprise projects.",
};

export default function ProjectsPage() {
  return (
    <MarketingShell>
      <div className="pt-24 pb-16">
        <Projects />
      </div>
    </MarketingShell>
  );
}
