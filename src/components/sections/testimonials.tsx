"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

/**
 * Client and executive testimonials — illustrative profiles for credibility framing.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative border-t border-[var(--glass-border)] bg-[var(--background)] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-3 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl md:text-4xl">
            Trusted by leaders who ship under pressure
          </h2>
          <p className="mt-3 text-pretty text-base text-[var(--muted)] sm:mt-4 sm:text-lg">
            Representative endorsements reflecting how sponsors describe our
            delivery culture—structured for boards, regulators, and operating teams.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.55,
                ease: easeOutExpo,
              }}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-[var(--card-shadow)] sm:rounded-3xl sm:p-7"
            >
              <Quote
                className="absolute right-5 top-5 h-10 w-10 text-[var(--accent)]/15 sm:h-12 sm:w-12"
                aria-hidden
              />
              <div className="mb-4 flex gap-0.5 text-amber-500" aria-hidden>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={`${t.id}-star-${si}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="relative z-[1] flex-1 text-pretty text-sm leading-relaxed text-[var(--foreground)] sm:text-base">
                {t.quote}
              </blockquote>
              <footer className="mt-6 border-t border-[var(--glass-border)] pt-5">
                <p className="font-semibold text-[var(--foreground)]">{t.name}</p>
                <p className="mt-0.5 text-sm text-[var(--muted)]">{t.role}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                  {t.organization}
                </p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
