"use client";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageLoader } from "@/components/layout/page-loader";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Technology } from "@/components/sections/technology";
import { WhyUs } from "@/components/sections/why-us";

/**
 * Client-side shell: loader, navigation, all sections, footer.
 */
export function SiteChrome() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
