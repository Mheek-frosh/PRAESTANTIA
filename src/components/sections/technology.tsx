"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Code, Lock } from "lucide-react";
import { capabilities } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const icons = [Code, Cloud, Brain, Lock];

/**
 * Technology pillars — software, cloud, AI readiness, and security.
 */
export function Technology() {
  return (
    <section
      id="technology"
      className="relative border-t border-[var(--glass-border)] bg-[var(--section-bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Technology & capabilities
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Platforms that stay ahead of the threat landscape
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              We architect for longevity: observable systems, hardened boundaries,
              and extensible data models that unlock automation and AI—without
              trading away governance.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {capabilities.map((c, i) => {
              const Icon = icons[i] ?? Code;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.5,
                    ease: easeOutExpo,
                  }}
                  className="rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-[var(--card-shadow)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {c.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
