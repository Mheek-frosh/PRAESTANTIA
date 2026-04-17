"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { easeOutExpo } from "@/lib/motion";

const SESSION_KEY = "praestantia_intro_seen";

/**
 * Premium session intro: mesh backdrop, glass mark, shimmer, progress rail — runs once per tab session.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    let progressTimer: ReturnType<typeof window.setInterval> | undefined;
    let exitTimer: ReturnType<typeof window.setTimeout> | undefined;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* private mode */
      }
      setProgress(100);
      exitTimer = window.setTimeout(() => setVisible(false), 420);
    };

    const id = requestAnimationFrame(() => {
      try {
        if (sessionStorage.getItem(SESSION_KEY)) {
          setVisible(false);
          return;
        }
      } catch {
        /* ignore */
      }

      const started = performance.now();
      const duration = 2400;
      progressTimer = window.setInterval(() => {
        const t = Math.min(1, (performance.now() - started) / duration);
        setProgress(Math.round(t * 100));
        if (t >= 1) {
          window.clearInterval(progressTimer);
          finish();
        }
      }, 32);
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#020617]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(12px)",
            scale: 1.02,
            transition: { duration: 0.55, ease: easeOutExpo },
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute -left-1/3 top-0 h-[min(80vw,720px)] w-[min(80vw,720px)] rounded-full bg-emerald-500/25 blur-[100px]"
              animate={{ x: [0, 40, 0], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-1/4 bottom-0 h-[min(90vw,640px)] w-[min(90vw,640px)] rounded-full bg-cyan-500/20 blur-[110px]"
              animate={{ x: [0, -36, 0], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.06),transparent_55%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6">
            <motion.div
              className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-3xl border border-white/12 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_32px_80px_-24px_rgba(16,185,129,0.45)] backdrop-blur-xl sm:h-24 sm:w-24"
              initial={{ scale: 0.85, opacity: 0, rotateX: 12 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.65, ease: easeOutExpo }}
            >
              <motion.span
                className="font-display text-4xl font-semibold tracking-tight text-white sm:text-[2.75rem]"
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
                  className="absolute -inset-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-18deg]"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-400/35"
                animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.03, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: easeOutExpo }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-emerald-300/90">
                Praestantia Projects Ltd
              </p>
              <p className="max-w-xs text-sm text-slate-400">
                Engineering excellence · Digital innovation · National programs
              </p>
            </motion.div>

            <motion.div
              className="mt-10 h-1 w-[min(220px,70vw)] overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.5, ease: easeOutExpo }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-300"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "tween", ease: "linear", duration: 0.08 }}
              />
            </motion.div>
            <motion.p
              className="mt-2 font-mono text-[10px] tabular-nums text-slate-500"
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
