"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  HardHat,
  Kanban,
  Landmark,
  ShieldCheck,
  Sprout,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const icons = {
  HardHat,
  Kanban,
  Code2,
  ShieldCheck,
  Sprout,
  Landmark,
  BrainCircuit,
} as const;

/**
 * Service cards with cover photography + expandable detail (image-forward layout).
 */
export function Services() {

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto min-w-0 max-w-6xl px-3 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Capabilities
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl md:text-4xl">
            Services engineered for enterprise outcomes
          </h2>
          <p className="mt-3 max-w-3xl text-pretty text-base text-[var(--muted)] sm:mt-4 sm:text-lg">
            Each practice area is led by senior practitioners — with imagery
            reflecting the environments we operate in every day.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
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
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-[var(--card-bg)] shadow-[var(--card-shadow)] transition-[colors,transform] motion-safe:md:hover:-translate-y-1 border-[var(--glass-border)] hover:border-[var(--accent)]/30`}
              >
                <div className="relative h-40 w-full shrink-0 overflow-hidden bg-slate-200">
                  <Image
                    src={s.coverSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 motion-safe:md:group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
                    <h3 className="min-w-0 font-display text-base font-semibold text-[var(--foreground)] sm:text-lg">
                      {s.title}
                    </h3>
                    <span className="w-fit shrink-0 rounded-full border border-[var(--glass-border)] bg-[var(--section-bg)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Explore
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {s.short}
                  </p>

                  <Link
                    href={`/services/${s.id}`}
                    className="mt-4 inline-flex min-h-[44px] items-center gap-2 py-1 text-left text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)] sm:min-h-0 group/btn"
                  >
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                <div className="pointer-events-none absolute inset-x-6 -bottom-24 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.12),transparent_70%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
