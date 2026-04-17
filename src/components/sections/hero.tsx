"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { company } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

/**
 * Landing hero with motion gradient mesh and primary CTAs.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-36 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.22),transparent_65%)] blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_68%)] blur-3xl"
          animate={{ x: [0, -32, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "var(--hero-grid)",
            backgroundSize: "var(--hero-grid-size)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] shadow-sm backdrop-blur-xl"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
          <span className="tracking-wide">
            Nigerian enterprise partner — engineering to cloud
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-[var(--foreground)]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: easeOutExpo }}
        >
          {company.tagline}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.65, ease: easeOutExpo }}
        >
          We unite{" "}
          <span className="text-[var(--foreground)]/90">
            engineering, digital platforms, cybersecurity, agriculture,
          </span>{" "}
          and{" "}
          <span className="text-[var(--foreground)]/90">
            turnkey public programs
          </span>{" "}
          — delivering outcomes that scale with Nigeria&apos;s ambition.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6, ease: easeOutExpo }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] shadow-[0_18px_60px_-18px_rgba(201,162,39,0.65)] transition hover:brightness-110"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] backdrop-blur-xl transition hover:border-[var(--accent)]/35"
          >
            View Projects
          </Link>
        </motion.div>

        <motion.dl
          className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55 }}
        >
          {[
            ["6+", "Core sectors"],
            ["End-to-end", "Delivery model"],
            ["Gov-ready", "Governance"],
            ["National", "Footprint"],
          ].map(([k, v]) => (
            <div
              key={v}
              className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 backdrop-blur-xl"
            >
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                {v}
              </dt>
              <dd className="mt-2 font-display text-2xl font-semibold text-[var(--foreground)]">
                {k}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
