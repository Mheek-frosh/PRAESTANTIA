"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOutExpo } from "@/lib/motion";

/**
 * Brief premium splash on first mount — signals polish without blocking usability.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--loader-bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: easeOutExpo } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[0_20px_80px_-20px_rgba(5,150,105,0.35)] backdrop-blur-xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
            >
              <span className="font-display text-3xl font-semibold tracking-tight text-[var(--accent)]">
                P
              </span>
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-[var(--accent)]/30"
                animate={{ opacity: [0.35, 0.9, 0.35], scale: [1, 1.04, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--muted)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
            >
              Praestantia Projects
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
