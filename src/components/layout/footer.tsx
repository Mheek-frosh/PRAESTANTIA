"use client";

import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import { company, services } from "@/data/site";

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.07 4.54-2.86 6-1.67 1.34-4 1.95-6.07 1.4-2.43-.63-4.34-2.73-4.66-5.2-.33-2.67.75-5.46 2.87-7.05 1.83-1.38 4.27-1.74 6.45-1.09l.06 4.25c-1.02-.45-2.22-.52-3.23-.07-1.11.49-1.89 1.55-2.01 2.75-.12 1.16.4 2.41 1.33 3.12.98.74 2.37.93 3.51.52 1.38-.49 2.24-1.88 2.26-3.34.02-3.81.01-7.61.02-11.42 0-.25-.01-.5-.01-.74z"/>
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const companyLinks = [
  { href: "/our-company", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Our Team" },
  { href: "/careers", label: "Careers" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--footer-bg)] pt-16 pb-8">
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="relative block h-10 w-44 mb-6">
              <Image
                src="/light.jpeg"
                alt="Praestantia Logo"
                fill
                className="object-contain object-left block dark:hidden"
              />
              <Image
                src="/dark.png"
                alt="Praestantia Logo"
                fill
                className="object-contain object-left hidden dark:block"
              />
            </Link>
            <p className="text-sm leading-relaxed text-[var(--muted)] mb-8 max-w-sm text-pretty">
              A Nigerian multi-sector partner delivering engineering, digital, enterprise AI, and
              agro-industrial outcomes with the rigor expected by governments, corporates, and investors.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@officialpraestantia?_r=1&_t=ZS-963hALH0jep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="TikTok"
              >
                <IconTikTok className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/officialpraestantialtd?igsh=MTlmOHN0OXc4bTc0YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Instagram"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-[var(--foreground)] mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-[var(--foreground)] mb-6">Services</h3>
            <ul className="space-y-4">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-[var(--foreground)] mb-6">Newsletter</h3>
            <p className="text-sm text-[var(--muted)] mb-4">
              Subscribe to receive the latest updates and news articles.
            </p>
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] py-3 pl-4 pr-12 text-sm text-[var(--foreground)] placeholder-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 flex w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white transition hover:brightness-110"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--glass-border)] pt-8 sm:flex-row">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {company.legal}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
