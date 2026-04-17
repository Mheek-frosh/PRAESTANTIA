"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, LineChart, Users } from "lucide-react";
import { careersContent } from "@/data/company-pages";
import { company } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";
import { InnerPageHero } from "@/components/pages/inner-page-hero";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: easeOutExpo },
};

const whyIcons = [Briefcase, LineChart, Users] as const;

/**
 * Careers — culture, illustrative roles, and hiring process.
 */
export function CareersPage() {
  return (
    <article>
      <InnerPageHero
        eyebrow="Careers"
        title="Do work that shows up in the real economy"
        lead={careersContent.intro}
      />

      <section className="border-b border-[var(--glass-border)] bg-[var(--background)] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            {...fadeUp}
            className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
          >
            Why join {company.name.split(" ")[0]}
          </motion.h2>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {careersContent.whyJoin.map((item, i) => {
              const Icon = whyIcons[i] ?? Users;
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: easeOutExpo }}
                  className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-[var(--card-shadow)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{item.body}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--glass-border)] bg-[var(--section-bg)] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Representative open roles
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">
              Postings below are illustrative of the profiles we hire; availability varies by pipeline. Always
              reference the role title when you write in.
            </p>
          </motion.div>
          <ul className="mt-10 space-y-4">
            {careersContent.roles.map((role, i) => (
              <motion.li
                key={role.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.04, duration: 0.45, ease: easeOutExpo }}
                className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{role.title}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                      {role.location} · {role.type}
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                      {role.summary}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--background)] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            {...fadeUp}
            className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
          >
            How hiring works
          </motion.h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {careersContent.process.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.45, ease: easeOutExpo }}
                className="relative rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 pt-8 shadow-sm"
              >
                <span className="absolute left-5 top-4 font-display text-3xl font-semibold tabular-nums text-[var(--accent)]/35">
                  {step.step}
                </span>
                <h3 className="mt-2 font-semibold text-[var(--foreground)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-[var(--glass-border)] bg-[var(--section-bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-8 shadow-[var(--card-shadow)] sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="font-display text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              Send your profile and intent
            </p>
            <p className="mt-2 max-w-xl text-sm text-[var(--muted)] sm:text-base">
              Use the contact form with subject line <span className="font-medium text-[var(--foreground)]">Careers — [Role]</span> and attach CV / portfolio links.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] shadow-lg transition hover:brightness-110"
          >
            Apply via contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
