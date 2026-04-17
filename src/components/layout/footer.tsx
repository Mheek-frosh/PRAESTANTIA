import Link from "next/link";
import { Mail } from "lucide-react";
import { company } from "@/data/site";

/** Brand icons (not all vendor glyphs ship in lucide builds). */
function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const quick = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

/**
 * Enterprise footer with quick links and social placeholders.
 */
export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--footer-bg)]">
      <div className="mx-auto min-w-0 max-w-6xl px-3 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-sm font-semibold text-[var(--accent)] backdrop-blur-md">
                P
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {company.name}
                </p>
                <p className="text-xs text-[var(--muted)]">{company.address}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-[var(--muted)] sm:mt-5">
              A Nigerian multi-sector partner delivering engineering, digital, and
              agro-industrial outcomes with the rigor expected by governments,
              corporates, and investors.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Quick links
              </p>
              <ul className="mt-4 space-y-2">
                {quick.map((q) => (
                  <li key={q.href}>
                    <Link
                      href={q.href}
                      className="text-sm text-[var(--foreground)]/80 transition hover:text-[var(--accent)]"
                    >
                      {q.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--foreground)]/85">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[var(--accent)]" />
                  <span>{company.email}</span>
                </li>
                <li>{company.phone}</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Connect
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.linkedin.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://x.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                aria-label="X"
              >
                <IconX className="h-[16px] w-[16px]" />
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">
              This site presents representative capabilities. Engagements are
              governed by formal statements of work and compliance requirements.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--glass-border)] pt-6 text-xs leading-relaxed text-[var(--muted)] sm:mt-12 sm:flex-row sm:items-center sm:gap-4 sm:pt-8">
          <p className="text-pretty">© {new Date().getFullYear()} {company.legal}. All rights reserved.</p>
          <p className="text-pretty text-[var(--muted)]">Built for national impact — engineered for trust.</p>
        </div>
      </div>
    </footer>
  );
}
