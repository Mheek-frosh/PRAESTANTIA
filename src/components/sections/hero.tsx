"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { company } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const q = "auto=format&fit=crop";

/** Four slides — image, eyebrow, headline, and body copy stay in sync per theme. */
const HERO_SLIDES = [
  {
    imageSrc: `https://images.unsplash.com/photo-1509391366360-2e959784a478?${q}&w=2400&q=85`,
    eyebrow: company.name,
    headline: company.tagline,
    description:
      "Advanced delivery across engineering, digital platforms, cybersecurity, agriculture, and public programs — structured for efficiency, governance, and sustainable growth.",
  },
  {
    imageSrc: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?${q}&w=2400&q=85`,
    eyebrow: "Engineering & built environment",
    headline: "Structures, highways, and utilities that hold under scrutiny.",
    description:
      "Civil works, design assurance, and construction supervision for dual carriageways, institutional campuses, and resilient drainage — with QA packs and as-builts sponsors can defend in audit.",
  },
  {
    imageSrc: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?${q}&w=2400&q=85`,
    eyebrow: "Digital platforms & ICT",
    headline: "Software, integrations, and field systems built for real operations.",
    description:
      "Cloud-native applications, APIs, ERP extensions, and offline-capable mobility — engineered for uptime, security defaults, and maintainability across distributed teams.",
  },
  {
    imageSrc: `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?${q}&w=2400&q=85`,
    eyebrow: "Agriculture & national programs",
    headline: "Value chains and turnkey programs with measurable field outcomes.",
    description:
      "Agro-processing traceability, cooperative-scale pilots, and governance-ready public programs — aligning agronomy, logistics, and digital controls from farm to export documentation.",
  },
] as const;

const INTERVAL_MS = 6500;

const heroStats = [
  { value: "6+", label: "Core sectors" },
  { value: "18+", label: "Program streams" },
  { value: "2", label: "Hub cities" },
] as const;

/**
 * Full-bleed hero — carousel imagery and headline stack advance together.
 */
export function Hero() {
  const [active, setActive] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);
  const slide = HERO_SLIDES[active];

  const bumpAutoplay = useCallback(() => {
    setAutoplayKey((k) => k + 1);
  }, []);

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    bumpAutoplay();
  }, [bumpAutoplay]);

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % HERO_SLIDES.length);
    bumpAutoplay();
  }, [bumpAutoplay]);

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % HERO_SLIDES.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [autoplayKey]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest("input, textarea, select, [contenteditable=true]")) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] min-w-0 flex-col overflow-hidden bg-[#0a1628]"
    >
      <div className="pointer-events-none absolute inset-0 min-w-0">
        {HERO_SLIDES.map((s, i) => (
          <motion.div
            key={s.imageSrc}
            className="absolute inset-0 min-w-0"
            initial={false}
            animate={{
              opacity: i === active ? 1 : 0,
              scale: i === active ? 1.04 : 1,
            }}
            transition={{ duration: 1.2, ease: easeOutExpo }}
          >
            <Image
              src={s.imageSrc}
              alt=""
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/75 to-[#0a1628]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(16,185,129,0.12),transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-[5] flex -translate-y-1/2 items-center justify-between px-2 sm:px-4 md:px-6">
        <button
          type="button"
          onClick={goPrev}
          className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:h-11 sm:w-11"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:h-11 sm:w-11"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
        </button>
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-1 flex-col items-center justify-center px-4 pb-[max(6rem,env(safe-area-inset-bottom))] pt-[max(6.5rem,env(safe-area-inset-top))] text-center sm:px-6 sm:pb-24 sm:pt-32">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.imageSrc}
            className="mx-auto flex max-w-4xl flex-col items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
          >
            <p className="max-w-3xl text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300/95 sm:text-xs">
              {slide.eyebrow}
            </p>

            <h1 className="mt-4 max-w-4xl text-balance font-display text-[clamp(1.875rem,5.5vw,3.75rem)] font-semibold leading-[1.12] tracking-tight text-white sm:mt-5">
              {slide.headline}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5, ease: easeOutExpo }}
        >
          <Link
            href="/#contact"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(16,185,129,0.5)] transition hover:bg-emerald-400 sm:flex-initial sm:min-w-[160px]"
          >
            Get started
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
          <Link
            href="/our-company"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15 sm:flex-initial sm:min-w-[160px]"
          >
            Learn more
          </Link>
        </motion.div>

        <motion.div
          className="mt-14 w-full max-w-3xl border-t border-white/20 pt-10 sm:mt-16 sm:pt-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5, ease: easeOutExpo }}
        >
          <dl className="grid grid-cols-3 gap-4 sm:gap-10">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold tabular-nums text-white sm:text-4xl md:text-[2.75rem]">
                  {s.value}
                </dd>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-[11px] sm:tracking-[0.24em]">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.45 }}
          role="tablist"
          aria-label="Hero slides"
        >
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.imageSrc}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => {
                setActive(i);
                bumpAutoplay();
              }}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2 sm:min-h-0 sm:min-w-0 sm:p-1"
              aria-label={`Slide ${i + 1} of ${HERO_SLIDES.length}`}
            >
              <span
                className={`block rounded-full transition-all duration-500 ease-out ${
                  i === active
                    ? "h-2 w-8 bg-emerald-400"
                    : "h-2 w-2 bg-white/35 hover:bg-white/55"
                }`}
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
