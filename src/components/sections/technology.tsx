"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Brain, Cloud, Code, Lock, ArrowRight } from "lucide-react";
import { media } from "@/data/media";
import { capabilities } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const icons = [Code, Cloud, Brain, Lock];

/**
 * Technology pillars with a wide editorial banner (PremPlus-style visual rhythm).
 */
export function Technology() {
  return (
    <section
      id="technology"
      className="relative border-t border-[var(--glass-border)] bg-[var(--section-bg)] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-3 sm:px-6 lg:px-10">
        <motion.div
          className="relative mb-10 min-h-[160px] w-full overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-slate-900 shadow-[var(--card-shadow)] sm:mb-14 sm:aspect-[21/9] sm:min-h-0 sm:rounded-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <Image
            src={media.technologyBanner}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1152px"
            className="object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/55 to-emerald-900/35" />
          <p className="absolute bottom-4 left-4 right-4 max-w-none text-xs font-medium leading-relaxed text-white/95 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-md sm:text-base">
            Global-grade platforms — engineered for Nigerian operating realities,
            security posture, and long-term maintainability.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Technology & capabilities
            </p>
            <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl md:text-4xl">
              Platforms that stay ahead of the threat landscape
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              We architect for longevity: observable systems, hardened boundaries,
              and extensible data models that unlock automation and AI—without
              trading away governance.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-7">
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
                  className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-4 shadow-[var(--card-shadow)] backdrop-blur-xl sm:rounded-3xl sm:p-6"
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
                    {c.short}
                  </p>
                  <Link
                    href={`/technology/${c.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] hover:underline group/tech"
                  >
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover/tech:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
