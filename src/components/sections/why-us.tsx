"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, Link2, Rocket } from "lucide-react";
import { whyUs } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const iconFor = [Building2, Cpu, Link2, Rocket];

/**
 * Differentiators tailored for government and corporate buyers.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto min-w-0 max-w-6xl px-3 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Why Praestantia
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl md:text-4xl">
            Built for boards, ministers, and managing directors
          </h2>
          <p className="mt-3 max-w-3xl text-pretty text-base text-[var(--muted)] sm:mt-4 sm:text-lg">
            When programs are visible, political, and capital-intensive, delivery
            cannot be experimental. We bring an operator&apos;s discipline with a
            founder&apos;s urgency.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {whyUs.map((item, i) => {
            const Icon = iconFor[i] ?? Building2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.55,
                  ease: easeOutExpo,
                }}
                className="relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-[var(--card-shadow)] backdrop-blur-xl sm:rounded-3xl sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)] sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="min-w-0 font-display text-lg font-semibold text-[var(--foreground)] sm:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
                <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.14),transparent_70%)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
