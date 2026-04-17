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
    <section id="why-us" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Why Praestantia
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Built for boards, ministers, and managing directors
          </h2>
          <p className="mt-4 max-w-3xl text-base text-[var(--muted)] sm:text-lg">
            When programs are visible, political, and capital-intensive, delivery
            cannot be experimental. We bring an operator&apos;s discipline with a
            founder&apos;s urgency.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
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
                className="relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-8 shadow-[var(--card-shadow)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
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
