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
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--glass-border)] shadow-[var(--card-shadow)] sm:rounded-3xl bg-[var(--card-bg)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.816853288219!2d7.495082!3d9.05785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b59b02dc511%3A0x8673a6e9a68a3560!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1713554160000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 opacity-90 dark:opacity-75 dark:invert dark:hue-rotate-180"
              />
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
                    placeholder="you@organization.gov.ng"
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
      </div>
    </section>
  );
}
