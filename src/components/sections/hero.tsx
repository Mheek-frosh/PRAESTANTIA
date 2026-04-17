"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { company, media } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const SLIDES = [...media.heroCarousel];
const INTERVAL_MS = 6500;

/**
 * Full-bleed hero with crossfade carousel — tuned for small screens (safe areas, type scale, touch targets).
 */
export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] min-w-0 flex-col justify-end overflow-hidden pb-[max(5.5rem,env(safe-area-inset-bottom))] pt-[max(5.5rem,env(safe-area-inset-top))] sm:pb-28 sm:pt-36 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 min-w-0">
        {SLIDES.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0 min-w-0"
            initial={false}
            animate={{
              opacity: i === active ? 1 : 0,
              scale: i === active ? 1.05 : 1,
            }}
            transition={{ duration: 1.45, ease: easeOutExpo }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#0f172a]/88 to-[#0f172a]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(5,150,105,0.22),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "var(--hero-grid)",
            backgroundSize: "var(--hero-grid-size)",
          }}
        />
      </div>

      <div className="mx-auto w-full min-w-0 max-w-6xl px-3 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-left text-[11px] font-medium leading-snug text-white/90 shadow-sm backdrop-blur-md sm:text-xs"
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
          <span className="min-w-0 tracking-wide text-balance">
            Nigerian enterprise partner — engineering to cloud
          </span>
        </motion.div>

        <motion.h1
          className="mt-6 max-w-4xl text-balance font-display text-[clamp(1.65rem,6.5vw,4.25rem)] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-sm sm:mt-8 sm:leading-[1.05]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: easeOutExpo }}
        >
          {company.tagline}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:mt-6 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.65, ease: easeOutExpo }}
        >
          We unite{" "}
          <span className="font-medium text-white">
            engineering, digital platforms, cybersecurity, agriculture,
          </span>{" "}
          and{" "}
          <span className="font-medium text-white">
            turnkey public programs
          </span>{" "}
          — delivering outcomes that scale with Nigeria&apos;s ambition.
        </motion.p>

        <motion.div
          className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6, ease: easeOutExpo }}
        >
          <Link
            href="#contact"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_-12px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400 sm:w-auto sm:min-h-0 sm:px-6"
          >
            Get Started
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
          <Link
            href="#projects"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/15 sm:w-auto sm:min-h-0 sm:px-6"
          >
            View Projects
          </Link>
        </motion.div>

        <div
          className="mt-6 flex max-w-full flex-wrap items-center justify-center gap-1.5 sm:mt-8 sm:gap-2 sm:justify-start"
          role="tablist"
          aria-label="Hero background slides"
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2 sm:min-h-0 sm:min-w-0 sm:p-0"
              aria-label={`Background image ${i + 1} of ${SLIDES.length}`}
            >
              <span
                className={`block rounded-full transition-all duration-500 ease-out ${
                  i === active
                    ? "h-2 w-10 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.45)] sm:w-9"
                    : "h-2 w-2 bg-white/35 sm:hover:bg-white/55"
                }`}
              />
            </button>
          ))}
        </div>

        <motion.dl
          className="mt-8 grid min-w-0 max-w-3xl grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-4 md:gap-6"
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
              className="min-w-0 rounded-2xl border border-white/15 bg-white/10 p-3 text-white backdrop-blur-md sm:p-4"
            >
              <dt className="text-[10px] font-medium uppercase leading-tight tracking-[0.12em] text-slate-300 sm:text-[11px] sm:tracking-[0.18em]">
                {v}
              </dt>
              <dd className="mt-1.5 font-display text-lg font-semibold tabular-nums text-white sm:mt-2 sm:text-2xl">
                {k}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
