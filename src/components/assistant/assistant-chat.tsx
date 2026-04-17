"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { easeOutExpo } from "@/lib/motion";

type Msg = { id: string; role: "user" | "assistant"; text: string };

function nextId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const WELCOME =
  "Hello — I'm your Praestantia assistant. Ask about our sectors (engineering, ICT, cybersecurity, agriculture, government programs) or say **contact** for next steps.";

function replyFor(input: string): string {
  const q = input.toLowerCase().trim();
  if (!q) return "Send a short question and I'll point you to the right section of our site.";
  if (/(hello|hi|hey)\b/.test(q))
    return "Welcome. I can summarize capabilities, services, or help you reach our partnerships team.";
  if (/service|capabilit|offer|what do you/.test(q))
    return "We deliver across **Engineering & Construction**, **Project Management**, **ICT & Software**, **Cybersecurity & Cloud**, **Agriculture & Agro**, and **Consultancy & Turnkey** programs — see the Services section for detail.";
  if (/project|portfolio|case/.test(q))
    return "Explore the **Projects** grid for representative programs across infrastructure, technology, and agriculture (illustrative case profiles).";
  if (/contact|email|call|partner|proposal|rfp/.test(q))
    return "Use the **Contact** section at the bottom of the page — include your organization, timeline, and stakeholders. This assistant is informational only.";
  if (/price|cost|quote|budget/.test(q))
    return "Commercial terms are scoped per engagement. Share context via **Contact** and our team will respond within two business days.";
  if (/who|about|company|praestantia/.test(q))
    return "**Praestantia Projects Ltd** is a Nigerian multi-sector partner for national-scale programs — reliability, innovation, and governance-ready delivery.";
  if (/thank|thanks/.test(q)) return "You're welcome. We're here when you're ready to go deeper.";
  return "I've noted that. For tailored guidance, browse **Services** and **Why Us**, or leave a message in **Contact** with your objectives.";
}

/**
 * Subtle floating “AI assistant” — glass UI, mock replies (no backend). Keeps z-index below the nav.
 */
export function AssistantChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { id: "0", role: "assistant", text: WELCOME },
  ]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const send = useCallback(() => {
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    const userMsg: Msg = { id: nextId(), role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { id: nextId(), role: "assistant", text: replyFor(text) },
      ]);
    }, 650 + Math.min(text.length * 12, 900));
  }, [draft]);

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[48] flex flex-col items-end sm:bottom-8 sm:right-8">
      <div className="pointer-events-auto">
        <AnimatePresence>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 16, scale: 0.96, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 12, scale: 0.96, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="mb-3 flex w-[min(100vw-2.5rem,380px)] flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--surface-elevated)]/95 text-[var(--foreground)] shadow-[0_24px_80px_-20px_rgba(15,23,42,0.35)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/90 dark:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.65)]"
            >
              <div className="flex items-center justify-between gap-2 border-b border-[var(--glass-border)] bg-[var(--accent-soft)]/80 px-4 py-3 dark:border-white/10 dark:bg-emerald-950/40">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-foreground)] shadow-sm">
                    <Sparkles className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">Assistant</p>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">
                      AI · Informational
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--foreground)] dark:hover:bg-white/10"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div
                ref={listRef}
                className="flex max-h-[min(52vh,420px)] flex-col gap-3 overflow-y-auto px-4 py-4"
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                          : "border border-[var(--glass-border)] bg-[var(--section-bg)] text-[var(--foreground)] dark:border-white/10 dark:bg-slate-900/80"
                      }`}
                    >
                      {m.text.split("**").map((chunk, i) =>
                        i % 2 === 1 ? (
                          <strong key={i} className="font-semibold">
                            {chunk}
                          </strong>
                        ) : (
                          <span key={i}>{chunk}</span>
                        ),
                      )}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="flex gap-1 rounded-2xl border border-[var(--glass-border)] bg-[var(--section-bg)] px-4 py-3 dark:border-white/10 dark:bg-slate-900/80">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                          animate={{ opacity: [0.35, 1, 0.35], y: [0, -3, 0] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <form
                className="flex gap-2 border-t border-[var(--glass-border)] p-3 dark:border-white/10"
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
              >
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask anything…"
                  className="min-w-0 flex-1 rounded-xl border border-[var(--glass-border)] bg-[var(--input-bg)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none ring-[var(--accent)]/0 placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20 dark:border-white/10"
                  aria-label="Message to assistant"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || typing}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-foreground)] shadow-sm transition enabled:hover:brightness-110 disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="border-t border-[var(--glass-border)] px-3 py-2 text-[10px] leading-snug text-[var(--muted)] dark:border-white/10">
                Demo assistant — not connected to live AI. Answers are scripted from your site content.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--surface-elevated)]/95 text-[var(--accent)] shadow-[0_16px_50px_-12px_rgba(5,150,105,0.35)] backdrop-blur-xl transition hover:brightness-105 dark:border-white/15 dark:bg-slate-900/90 dark:text-emerald-400 dark:shadow-[0_16px_50px_-12px_rgba(16,185,129,0.25)]"
          aria-expanded={open}
          aria-label={open ? "Close assistant" : "Open AI assistant"}
          whileTap={{ scale: 0.96 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 text-[var(--foreground)]" />
              </motion.span>
            ) : (
              <motion.span
                key="msg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[var(--surface-elevated)] dark:ring-slate-900" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
