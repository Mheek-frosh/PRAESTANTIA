"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { testimonials } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

/**
 * Three client portraits with quotes — minimal chrome, theme-aware.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative border-t border-[var(--glass-border)] bg-[var(--section-bg)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Clients
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl lg:text-[2rem]">
            What partners say
          </h2>
        </motion.div>

        <ul className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.07,
                duration: 0.5,
                ease: easeOutExpo,
              }}
            >
              <figure className="group flex h-full flex-col rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-[var(--card-shadow)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)]/20 hover:shadow-[0_28px_70px_-40px_rgba(5,150,105,0.18)] sm:rounded-3xl sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--glass-bg)] ring-1 ring-[var(--glass-border)] sm:h-16 sm:w-16">
                    <User className="h-6 w-6 text-[var(--muted)] sm:h-7 sm:w-7" />
                  </div>
                  <figcaption className="min-w-0 flex-1 pt-0.5">
                    <p className="font-semibold leading-snug text-[var(--foreground)]">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-[var(--muted)] sm:text-[13px]">
                      {t.role}
                      <span className="text-[var(--muted)]/70"> · </span>
                      {t.organization}
                    </p>
                  </figcaption>
                </div>
                <blockquote className="mt-5 flex-1 text-pretty text-sm leading-relaxed text-[var(--foreground)]/90 sm:text-[15px] sm:leading-relaxed">
                  <span className="text-[var(--accent)]/90">&ldquo;</span>
                  {t.quote}
                  <span className="text-[var(--accent)]/90">&rdquo;</span>
                </blockquote>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
