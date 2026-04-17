"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Shield, Target } from "lucide-react";
import { company } from "@/data/site";
import { media } from "@/data/media";
import { ourCompany } from "@/data/company-pages";
import { easeOutExpo } from "@/lib/motion";
import { InnerPageHero } from "@/components/pages/inner-page-hero";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: easeOutExpo },
};

/**
 * Our Company — former homepage About content plus extended narrative.
 */
export function OurCompanyPage() {
  return (
    <article>
      <InnerPageHero
        eyebrow="Our Company"
        title="Built for national programs and enterprise scale"
        lead={ourCompany.introLead}
      />

      <section className="border-b border-[var(--glass-border)] bg-[var(--background)] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-slate-200 shadow-[var(--card-shadow)] lg:sticky lg:top-28"
          >
            <Image
              src={media.about}
              alt="Praestantia team collaboration and program governance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/45 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-xs font-medium leading-snug text-white/95 drop-shadow-md sm:bottom-6 sm:left-6 sm:right-6 sm:text-sm">
              National programs demand discipline, transparency, and delivery velocity —
              without compromising safety or compliance.
            </p>
          </motion.div>

          <div className="min-w-0 space-y-6 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            <motion.p {...fadeUp}>{ourCompany.introBody}</motion.p>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }}>
              {ourCompany.governance}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--glass-border)] bg-[var(--section-bg)] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Vision, mission, and how we earn trust
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
            <motion.article
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--foreground)]">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                Trusted partner for engineered infrastructure and intelligent digital systems across Africa.
              </p>
            </motion.article>
            <motion.article
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--foreground)]">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                Mobilize elite engineering and technology for measurable outcomes — transparent to sponsors and resilient in operation.
              </p>
            </motion.article>
            <motion.article
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--foreground)]">Reliability</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                International practice, local execution — designed to hold through supply-chain stress and policy cycles.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--background)] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Operating principles
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              How {company.name.split(" ")[0]} teams show up when stakes are high and scrutiny is constant.
            </p>
          </motion.div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {ourCompany.principles.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: easeOutExpo }}
                className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-[var(--card-shadow)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--foreground)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--glass-border)] bg-[var(--section-bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-8 shadow-[var(--card-shadow)] sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="font-display text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              Ready to scope a program or partnership?
            </p>
            <p className="mt-2 max-w-xl text-sm text-[var(--muted)] sm:text-base">
              Share objectives, timelines, and stakeholders — we respond with a clear path to mobilization.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] shadow-lg transition hover:brightness-110"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
