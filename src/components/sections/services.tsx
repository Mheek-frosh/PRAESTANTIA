"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  HardHat,
  Kanban,
  Landmark,
  ShieldCheck,
  Sprout,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { services } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const icons = {
  HardHat,
  Kanban,
  Code2,
  ShieldCheck,
  Sprout,
  Landmark,
} as const;

/**
 * Interactive service catalogue with hover polish and expandable detail panels.
 */
export function Services() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Capabilities
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Services engineered for enterprise outcomes
          </h2>
          <p className="mt-4 max-w-3xl text-base text-[var(--muted)] sm:text-lg">
            Explore our multi-sector portfolio—each line of business is led by
            senior practitioners and supported by integrated delivery playbooks.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            const expanded = openId === s.id;
            return (
              <motion.article
                key={s.id}
                layout
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.55,
                  ease: easeOutExpo,
                }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-[var(--card-bg)] p-6 shadow-[var(--card-shadow)] backdrop-blur-xl transition-colors ${
                  expanded
                    ? "border-[var(--accent)]/45 ring-1 ring-[var(--accent)]/25"
                    : "border-[var(--glass-border)] hover:border-[var(--accent)]/35"
                }`}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--accent)] shadow-inner">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <motion.span
                    className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]"
                    animate={{ opacity: expanded ? 1 : 0.75 }}
                  >
                    Explore
                  </motion.span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {s.short}
                </p>

                <button
                  type="button"
                  onClick={() => setOpenId(expanded ? null : s.id)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  aria-expanded={expanded}
                >
                  {expanded ? "Hide details" : "Expand details"}
                  <motion.span
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeOutExpo }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 border-t border-[var(--glass-border)] pt-4 text-sm leading-relaxed text-[var(--muted)]">
                        {s.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-6 -bottom-24 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08),transparent_70%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
