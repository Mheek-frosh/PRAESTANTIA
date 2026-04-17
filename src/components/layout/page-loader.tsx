"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { easeOutExpo } from "@/lib/motion";

const SESSION_KEY = "praestantia_intro_seen";

function shouldSkipIntroForThisNavigation(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const entry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    // Full reload (F5, dev refresh): always play intro so the loader is visible again.
    if (entry?.type === "reload") return false;
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * Premium session intro on a white canvas — once per tab session for normal navigations;
 * runs again on reload so refresh/dev always sees the intro.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    let progressTimer: number | undefined;
    let exitTimer: number | undefined;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* private mode */
      }
      setProgress(100);
      exitTimer = window.setTimeout(() => setVisible(false), 420) as unknown as number;
    };

    const id = requestAnimationFrame(() => {
      if (shouldSkipIntroForThisNavigation()) {
        setVisible(false);
        return;
      }

      const started = performance.now();
      const duration = 2400;
      progressTimer = window.setInterval(() => {
        const t = Math.min(1, (performance.now() - started) / duration);
        setProgress(Math.round(t * 100));
        if (t >= 1) {
          if (progressTimer !== undefined) window.clearInterval(progressTimer);
          finish();
        }
      }, 32) as unknown as number;
    });

    return () => {
      cancelAnimationFrame(id);
      if (progressTimer) window.clearInterval(progressTimer);
      if (exitTimer) window.clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(8px)",
            scale: 1.01,
            transition: { duration: 0.5, ease: easeOutExpo },
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute -left-1/4 top-0 h-[min(85vw,680px)] w-[min(85vw,680px)] rounded-full bg-emerald-500/[0.07] blur-[90px]"
              animate={{ x: [0, 24, 0], opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-1/4 bottom-0 h-[min(90vw,600px)] w-[min(90vw,600px)] rounded-full bg-slate-300/40 blur-[100px]"
              animate={{ x: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(5,150,105,0.06),transparent_60%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6">
            <motion.div
              className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-3xl border border-slate-200/90 bg-white shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_24px_60px_-20px_rgba(15,23,42,0.12)] sm:h-24 sm:w-24"
              initial={{ scale: 0.88, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.65, ease: easeOutExpo }}
            >
              <motion.span
                className="font-display text-4xl font-semibold tracking-tight text-emerald-600 sm:text-[2.75rem]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.5, ease: easeOutExpo }}
              >
                P
              </motion.span>
              <motion.div
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
                initial={false}
              >
                <motion.div
                  className="absolute -inset-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent skew-x-[-18deg]"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.65, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-500/25"
                animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.02, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: easeOutExpo }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-emerald-700/90">
                Praestantia Projects Ltd
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                Engineering excellence · Digital innovation · National programs
              </p>
            </motion.div>

            <motion.div
              className="mt-10 h-1 w-[min(220px,70vw)] overflow-hidden rounded-full bg-slate-200"
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.5, ease: easeOutExpo }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "tween", ease: "linear", duration: 0.08 }}
              />
            </motion.div>
            <motion.p
              className="mt-2 font-mono text-[10px] tabular-nums text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
