"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Infrastructure",
  "Tech",
  "Agriculture",
];

/**
 * Portfolio grid with photography — PremPlus-style featured project cards.
 */
export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section
      id="projects"
      className="relative border-t border-[var(--glass-border)] bg-[var(--section-bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Portfolio
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Featured programs
            </h2>
            <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
              Representative engagements across infrastructure, technology, and
              agriculture — presented the way we brief boards and public sponsors.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  filter === f
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]"
                    : "border-[var(--glass-border)] bg-[var(--card-bg)] text-[var(--muted)] hover:border-[var(--accent)]/35 hover:text-[var(--foreground)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: easeOutExpo }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)]"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={p.imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/25 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/20 bg-emerald-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
                    {p.category}
                  </span>
                  <span className="absolute bottom-4 left-4 text-xs font-medium text-white/90">
                    {p.year}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {p.summary}
                  </p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Case profile — illustrative
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
