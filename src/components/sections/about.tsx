"use client";

import { motion } from "framer-motion";
import { Target, Eye, Shield } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: easeOutExpo },
};

/**
 * Company narrative: identity, vision, mission, and national impact.
 */
export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[var(--glass-border)] bg-[var(--section-bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div {...fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            About Praestantia
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Who we are
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Praestantia Projects Ltd is a Nigerian multi-industry firm built for
            complexity—where infrastructure meets software, and field operations
            meet enterprise governance. We serve institutions that cannot afford
            fragility: reliability, innovation, and national impact are not slogans;
            they are delivery standards.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-8 shadow-[var(--card-shadow)] backdrop-blur-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--accent)]">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-[var(--foreground)]">
              Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              To be Africa&apos;s most trusted partner for engineered
              infrastructure and intelligent digital systems—raising the bar for
              how public and private programs are conceived, delivered, and
              sustained.
            </p>
            <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.12),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-8 shadow-[var(--card-shadow)] backdrop-blur-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--accent)]">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-[var(--foreground)]">
              Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              We mobilize elite engineering, disciplined program management, and
              modern technology to deliver measurable outcomes—on scope, on
              schedule, and with the transparency senior stakeholders demand.
            </p>
            <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-8 shadow-[var(--card-shadow)] backdrop-blur-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--accent)]">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-[var(--foreground)]">
              Reliability at scale
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Our operating model blends international best practice with deep
              local execution experience—so programs remain resilient across
              supply chains, security realities, and evolving policy landscapes.
            </p>
            <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.1),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
          </motion.article>
        </div>
      </div>
    </section>
  );
}
