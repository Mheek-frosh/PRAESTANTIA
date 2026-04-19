"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { company } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

const aboutChildren = [
  { href: "/our-company", label: "Our Company" },
  { href: "/team", label: "Our Team" },
  { href: "/careers", label: "Careers" },
] as const;

const sectionLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/technology", label: "Technology" },
] as const;

function heroThresholdPx() {
  if (typeof window === "undefined") return 720;
  return Math.min(window.innerHeight * 0.78, 920);
}

function navLinkClass(onHero: boolean, extra = "") {
  return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${extra} ${
    onHero
      ? "text-white/85 hover:bg-white/10 hover:text-white"
      : "text-[var(--muted)] hover:bg-[var(--glass-bg)] hover:text-[var(--foreground)]"
  }`;
}

function dropdownItemClass(onHero: boolean) {
  return `block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
    onHero
      ? "text-slate-900 hover:bg-emerald-50"
      : "text-[var(--foreground)] hover:bg-[var(--glass-bg)]"
  }`;
}

/**
 * Sticky nav: transparent on home hero; About dropdown; section links work from any route.
 */
export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const aboutRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setAboutOpen(false);
      setOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    if (!aboutOpen) return;
    const close = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [aboutOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setAboutOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const onHero = isHome && !pastHero;

  const dropdownPanelClass = onHero
    ? "border border-slate-200/90 bg-white/98 text-slate-900 shadow-xl backdrop-blur-xl"
    : "border border-[var(--glass-border)] bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-xl backdrop-blur-xl";

  const toggleAbout = useCallback(() => {
    setAboutOpen((v) => !v);
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 lg:px-10"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <div
          className={`mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-2 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:gap-4 sm:px-5 sm:py-3 ${
            onHero
              ? "border-white/15 bg-slate-950/25 text-white shadow-none backdrop-blur-md"
              : scrolled
                ? "border-[var(--glass-border)] bg-[var(--nav-bg-scrolled)] text-[var(--foreground)] shadow-[var(--nav-shadow)] backdrop-blur-xl"
                : "border-transparent bg-transparent text-[var(--foreground)]"
          }`}
        >
          <Link href="/" className="group flex min-w-0 shrink items-center gap-2 sm:gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-semibold shadow-sm backdrop-blur-md sm:h-11 sm:w-11 ${
                onHero
                  ? "border-white/25 bg-white/10 text-emerald-300"
                  : "border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--accent)]"
              }`}
            >
              P
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span
                className={`truncate text-xs font-semibold tracking-tight sm:text-sm ${onHero ? "text-white" : "text-[var(--foreground)]"}`}
              >
                {company.name.split(" ")[0]}
              </span>
              <span
                className={`truncate text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.2em] ${onHero ? "text-white/65" : "text-[var(--muted)]"}`}
              >
                {company.name.split(" ").slice(1).join(" ")}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            <Link
              href="/"
              aria-current={isHome ? "page" : undefined}
              className={navLinkClass(onHero, isHome ? "font-semibold" : "")}
            >
              Home
            </Link>
            <div className="relative" ref={aboutRef}>
              <button
                type="button"
                aria-expanded={aboutOpen}
                aria-haspopup="menu"
                onClick={toggleAbout}
                className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  onHero
                    ? "text-white/85 hover:bg-white/10 hover:text-white"
                    : "text-[var(--muted)] hover:bg-[var(--glass-bg)] hover:text-[var(--foreground)]"
                }`}
              >
                About
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {aboutOpen ? (
                <div
                  role="menu"
                  className={`absolute left-0 top-full z-[80] mt-2 min-w-[13.5rem] overflow-hidden rounded-xl py-1.5 ${dropdownPanelClass}`}
                >
                  {aboutChildren.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className={dropdownItemClass(onHero)}
                      onClick={() => setAboutOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {sectionLinks.map((l) => (
              <Link key={l.href} href={l.href} className={navLinkClass(onHero)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-xl border backdrop-blur-md transition ${
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
              href="/partner-with-us"
              className={`hidden min-h-[44px] items-center rounded-xl px-4 py-2 text-sm font-semibold shadow-lg transition sm:inline-flex ${
                onHero
                  ? "bg-emerald-500 text-white hover:bg-emerald-400"
                  : "bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[0_12px_40px_-12px_rgba(5,150,105,0.45)] hover:brightness-110"
              }`}
            >
              Partner with us
            </Link>
            <button
              type="button"
              className={`inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-xl border backdrop-blur-md lg:hidden ${
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
        role="presentation"
        className="fixed inset-0 z-[45] bg-black/45 backdrop-blur-sm lg:hidden"
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
        onClick={() => setOpen(false)}
      />
      <motion.aside
        className="fixed inset-y-0 right-0 z-[60] flex w-[min(380px,calc(100vw-12px))] max-w-full flex-col overflow-y-auto overscroll-contain border-l border-[var(--glass-border)] bg-[var(--surface-elevated)] shadow-2xl backdrop-blur-xl lg:hidden"
        style={{
          paddingTop: "max(1rem, env(safe-area-inset-top))",
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(0.75rem, env(safe-area-inset-right))",
        }}
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        aria-hidden={!open}
      >
        <div className="mb-5 flex shrink-0 items-center justify-between gap-3 border-b border-[var(--glass-border)] pb-4">
          <p className="text-sm font-semibold tracking-tight text-[var(--foreground)]">Menu</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)]/35 hover:text-[var(--accent)]"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-1">
          <Link
            href="/"
            aria-current={isHome ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`flex min-h-[48px] items-center rounded-xl px-3 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--glass-bg)] ${isHome ? "bg-[var(--accent-soft)] font-semibold text-[var(--accent)]" : ""}`}
          >
            Home
          </Link>
          <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            About
          </p>
          {aboutChildren.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] items-center rounded-xl px-3 py-3 pl-5 text-base font-medium text-[var(--foreground)] hover:bg-[var(--glass-bg)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="my-3 border-t border-[var(--glass-border)]" />
          {sectionLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] items-center rounded-xl px-3 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--glass-bg)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/partner-with-us"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-foreground)]"
          >
            Partner with us
          </Link>
        </div>
      </motion.aside>
    </>
  );
}
