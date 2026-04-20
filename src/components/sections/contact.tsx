"use client";

import { motion } from "framer-motion";
import { MapPin, Send } from "lucide-react";
import { useState } from "react";
import { company } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

/**
 * Partnership contact form with optimistic success state (wire to API later).
 */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    window.setTimeout(() => setStatus("idle"), 4500);
  }

  return (
    <section
      id="contact"
      className="relative border-t border-[var(--glass-border)] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-3 sm:px-6 lg:px-10">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Contact
            </p>
            <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl md:text-4xl">
              Partner with Praestantia
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Share your program brief—our leadership team reviews strategic
              engagements across Nigeria with the discretion and rigor your
              stakeholders expect.
            </p>

            <div className="mt-6 space-y-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-4 shadow-[var(--card-shadow)] backdrop-blur-xl sm:mt-8 sm:rounded-3xl sm:p-6">
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]/12 text-[var(--accent)]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Nigerian presence
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {company.address} — with mobilization capacity nationwide.
                  </p>
                </div>
              </div>
              <div className="text-sm text-[var(--muted)]">
                <span className="font-semibold text-[var(--foreground)]">
                  Direct line:
                </span>{" "}
                {company.phone}
              </div>
              <div className="text-sm text-[var(--muted)]">
                <span className="font-semibold text-[var(--foreground)]">
                  Email:
                </span>{" "}
                {company.email}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05, ease: easeOutExpo }}
          >
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-4 shadow-[var(--card-shadow)] backdrop-blur-xl sm:rounded-3xl sm:p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--foreground)]">
                  Full name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="min-h-[48px] rounded-xl border border-[var(--glass-border)] bg-[var(--input-bg)] px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/15 sm:min-h-0 sm:text-sm"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--foreground)]">
                  Work email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="min-h-[48px] rounded-xl border border-[var(--glass-border)] bg-[var(--input-bg)] px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/15 sm:min-h-0 sm:text-sm"
                  />
                </label>
              </div>
              <label className="mt-5 flex flex-col gap-2 text-sm font-medium text-[var(--foreground)]">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your objectives, timeline, and stakeholders."
                  className="resize-y rounded-xl border border-[var(--glass-border)] bg-[var(--input-bg)] px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/15 sm:text-sm"
                />
              </label>

              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] shadow-[0_16px_50px_-18px_rgba(5,150,105,0.45)] transition hover:brightness-110 sm:w-auto sm:min-h-0"
                >
                  <Send className="h-4 w-4" />
                  Request a conversation
                </button>
                {status === "sent" && (
                  <p className="text-sm font-medium text-emerald-500">
                    Thank you — we&apos;ll respond within two business days.
                  </p>
                )}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">
                By submitting, you agree we may contact you regarding this inquiry.
                For procurement-specific channels, include your organization and
                reference codes in the message.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: easeOutExpo }}
        >
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] sm:h-[400px] sm:rounded-3xl">
            <iframe
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=22/24%20Arakawa%20Street,%20Agungi,%20Lekki,%20Lagos+(Praestantia%20Projects%20Ltd)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale contrast-125 opacity-90 transition-opacity duration-700 hover:grayscale-0 dark:opacity-60 dark:invert dark:hue-rotate-180 dark:hover:invert-0 dark:hover:hue-rotate-0 dark:hover:opacity-100"
            />
            
            {/* Overlay Button */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=22%2F24+Arakawa+Street+Agungi+Lekki+Lagos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--card-bg)]/80 px-3 py-2 text-xs font-medium text-[var(--foreground)] backdrop-blur-md transition hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
              >
                <span>Open in Maps</span>
                <MapPin className="h-3 w-3" />
              </a>
            </div>
            
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
