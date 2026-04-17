"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Shield } from "lucide-react";
import { media } from "@/data/media";
import { easeOutExpo } from "@/lib/motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: easeOutExpo },
};

/**
 * About: split layout with editorial imagery (corporate site pattern).
 */
export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[var(--glass-border)] bg-[var(--section-bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: easeOutExpo }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-slate-200 shadow-[var(--card-shadow)]"
          >
            <Image
              src={media.about}
              alt="Praestantia team collaboration and program governance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/50 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-medium leading-snug text-white drop-shadow-md">
              National programs demand discipline, transparency, and delivery
              velocity — without compromising safety or compliance.
            </p>
          </motion.div>

          <div>
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                About Praestantia
              </p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Who we are
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Praestantia Projects Ltd is a Nigerian multi-industry firm built
                for complexity—where infrastructure meets software, and field
                operations meet enterprise governance. We serve institutions that
                cannot afford fragility: reliability, innovation, and national
                impact are delivery standards.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <motion.article
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[var(--foreground)]">
                  Vision
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  Trusted partner for engineered infrastructure and intelligent
                  digital systems across Africa.
                </p>
              </motion.article>

              <motion.article
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[var(--foreground)]">
                  Mission
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  Mobilize elite engineering and technology for measurable
                  outcomes — transparent to sponsors.
                </p>
              </motion.article>

              <motion.article
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-sm sm:col-span-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[var(--foreground)]">
                  Reliability
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  International practice, local execution — resilient across
                  supply chains and policy cycles.
                </p>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
