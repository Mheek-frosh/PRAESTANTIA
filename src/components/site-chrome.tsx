"use client";

import { MarketingShell } from "@/components/marketing-shell";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Technology } from "@/components/sections/technology";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";

/**
 * Homepage: marketing shell plus main sections (About lives under /our-company).
 */
export function SiteChrome() {
  return (
    <MarketingShell>
      <Hero />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <Technology />
    </MarketingShell>
  );
}
