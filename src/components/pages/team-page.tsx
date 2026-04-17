"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/company-pages";
import { easeOutExpo } from "@/lib/motion";
import { InnerPageHero } from "@/components/pages/inner-page-hero";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: easeOutExpo },
};

/**
 * Leadership and team narrative — illustrative profiles; replace with real bios when ready.
 */
export function TeamPage() {
  return (
    <article>
      <InnerPageHero
        eyebrow="Our Team"
        title="Leaders who bridge policy, engineering, and delivery"
        lead="A compact leadership bench aligned to how sponsors actually buy and govern work—technical depth in the room with commercial judgment and field empathy."
      />

      <section className="border-b border-[var(--glass-border)] bg-[var(--background)] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.p
            {...fadeUp}
            className="max-w-3xl text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          >
            We staff programs with principal-led teams—not endless layers of account managers. That means
            executives stay close to risk, architects stay close to integration points, and program leads stay
            close to site reality. The profiles below represent our current leadership structure; titles and
            coverage may evolve as programs scale.
          </motion.p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {teamMembers.map((m, i) => (
              <motion.li
                key={m.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: easeOutExpo }}
                className="flex flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] sm:rounded-3xl"
              >
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src={m.imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-90" />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-2 sm:px-6">
                  <h2 className="font-display text-lg font-semibold text-[var(--foreground)]">{m.name}</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {m.role}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{m.bio}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--section-bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="font-display text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              Join a team where titles mean accountability
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              We are always interested in exceptional engineers, analysts, and program leaders. Explore open roles
              and how we hire on the careers page.
            </p>
          </motion.div>
          <Link
            href="/careers"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)] lg:mt-0"
          >
            View careers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
