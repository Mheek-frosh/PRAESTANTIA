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
 * Full-bleed hero with a slow crossfade carousel, dark overlay, and white type.
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
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-36 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {SLIDES.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === active ? 1 : 0,
              scale: i === active ? 1.06 : 1,
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

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 shadow-sm backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
          <span className="tracking-wide">
            Nigerian enterprise partner — engineering to cloud
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: easeOutExpo }}
        >
          {company.tagline}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl"
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
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6, ease: easeOutExpo }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_-12px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/15"
          >
            View Projects
          </Link>
        </motion.div>

        <div
          className="mt-8 flex items-center justify-center gap-2 sm:justify-start"
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
              className={`relative h-2 rounded-full transition-all duration-500 ease-out ${
                i === active ? "w-9 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.45)]" : "w-2 bg-white/35 hover:bg-white/55"
              }`}
              aria-label={`Background image ${i + 1} of ${SLIDES.length}`}
            />
          ))}
        </div>

        <motion.dl
          className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
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
              className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md"
            >
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                {v}
              </dt>
              <dd className="mt-2 font-display text-2xl font-semibold text-white">
                {k}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
