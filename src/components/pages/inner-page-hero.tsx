"use client";

import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function InnerPageHero({ eyebrow, title, lead }: InnerPageHeroProps) {
  return (
    <header className="relative border-b border-[var(--glass-border)] bg-[var(--section-bg)] px-4 pb-14 pt-[max(7rem,env(safe-area-inset-top))] sm:px-6 sm:pb-16 sm:pt-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeOutExpo }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-4xl lg:text-[2.65rem]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04, duration: 0.5, ease: easeOutExpo }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45, ease: easeOutExpo }}
        >
          {lead}
        </motion.p>
      </div>
    </header>
  );
}
