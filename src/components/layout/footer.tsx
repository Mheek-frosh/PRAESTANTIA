"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { company, services } from "@/data/site";

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
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
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
