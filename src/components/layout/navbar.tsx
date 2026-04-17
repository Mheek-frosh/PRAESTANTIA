"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { company } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why-us", label: "Why Us" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

function heroThresholdPx() {
  if (typeof window === "undefined") return 720;
  return Math.min(window.innerHeight * 0.78, 920);
}

/**
 * Sticky nav: transparent on hero (light text), solid bar after scroll — PremPlus-style.
 */
export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setPastHero(y > heroThresholdPx());
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
    setPastHero(y > heroThresholdPx());
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const onHero = !pastHero;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
            onHero
              ? "border-white/15 bg-slate-950/25 text-white shadow-none backdrop-blur-md"
              : scrolled
                ? "border-[var(--glass-border)] bg-[var(--nav-bg-scrolled)] text-[var(--foreground)] shadow-[var(--nav-shadow)] backdrop-blur-xl"
                : "border-transparent bg-transparent text-[var(--foreground)]"
          }`}
        >
          <Link href="#hero" className="group flex items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold shadow-sm backdrop-blur-md ${
                onHero
                  ? "border-white/25 bg-white/10 text-emerald-300"
                  : "border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--accent)]"
              }`}
            >
              P
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span
                className={`text-sm font-semibold tracking-tight ${onHero ? "text-white" : "text-[var(--foreground)]"}`}
              >
                {company.name.split(" ")[0]}
              </span>
              <span
                className={`text-[11px] font-medium uppercase tracking-[0.2em] ${onHero ? "text-white/65" : "text-[var(--muted)]"}`}
              >
                Projects Ltd
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  onHero
                    ? "text-white/85 hover:bg-white/10 hover:text-white"
                    : "text-[var(--muted)] hover:bg-[var(--glass-bg)] hover:text-[var(--foreground)]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-md transition ${
                onHero
                  ? "border-white/25 bg-white/10 text-white hover:border-white/40"
                  : "border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
              }`}
              aria-label="Toggle color theme"
            >
              {!mounted ? (
                <Sun className="h-[18px] w-[18px] opacity-40" />
              ) : resolvedTheme === "dark" ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
            </button>
            <Link
              href="#contact"
              className={`hidden rounded-xl px-4 py-2 text-sm font-semibold shadow-lg transition sm:inline-flex ${
                onHero
                  ? "bg-emerald-500 text-white hover:bg-emerald-400"
                  : "bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[0_12px_40px_-12px_rgba(5,150,105,0.45)] hover:brightness-110"
              }`}
            >
              Partner with us
            </Link>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-md lg:hidden ${
                onHero
                  ? "border-white/25 bg-white/10 text-white"
                  : "border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)]"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm lg:hidden"
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
      />
      <motion.aside
        className="fixed inset-y-0 right-0 z-[60] w-[min(92vw,360px)] border-l border-[var(--glass-border)] bg-[var(--surface-elevated)] p-6 pt-24 shadow-2xl backdrop-blur-xl lg:hidden"
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
      >
        <div className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--glass-bg)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-foreground)]"
          >
            Partner with us
          </Link>
        </div>
      </motion.aside>
    </>
  );
}
