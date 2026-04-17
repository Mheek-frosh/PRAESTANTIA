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
 * Floating assistant — fixed emerald/slate palette so contrast holds in light & dark site themes.
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
    <div className="pointer-events-none fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-[48] flex max-w-[100vw] flex-col items-end sm:bottom-8 sm:right-8">
      <div className="pointer-events-auto">
        <AnimatePresence>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 16, scale: 0.96, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 12, scale: 0.96, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="mb-3 flex w-[calc(100vw-1.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_20px_60px_-12px_rgba(15,23,42,0.35)] dark:border-slate-600/80 dark:bg-slate-950 dark:text-slate-50 dark:shadow-[0_24px_70px_-8px_rgba(0,0,0,0.75)] sm:w-[min(100vw-2.5rem,380px)]"
            >
              <div className="flex items-center justify-between gap-2 border-b border-emerald-700/25 bg-emerald-600 px-4 py-3 text-white dark:border-emerald-400/20 dark:bg-emerald-700">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white ring-1 ring-white/30">
                    <Sparkles className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold leading-tight">Assistant</p>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-emerald-100">
                      AI · Informational
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="shrink-0 rounded-lg p-2 text-white/90 transition hover:bg-white/15 hover:text-white"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div
                ref={listRef}
                className="flex max-h-[min(58dvh,440px)] flex-col gap-3 overflow-y-auto overflow-x-hidden bg-slate-50 px-3 py-3 dark:bg-slate-900/95 sm:max-h-[min(52vh,420px)] sm:px-4 sm:py-4"
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[min(92%,20rem)] break-words rounded-2xl px-3 py-2.5 text-[13px] leading-relaxed sm:px-3.5 sm:text-sm ${
                        m.role === "user"
                          ? "bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-700/30 dark:bg-emerald-500 dark:ring-emerald-400/25"
                          : "border border-slate-200 bg-white text-slate-800 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {m.text.split("**").map((chunk, i) =>
                        i % 2 === 1 ? (
                          <strong
                            key={i}
                            className={
                              m.role === "user"
                                ? "font-semibold text-white"
                                : "font-semibold text-emerald-800 dark:text-emerald-200"
                            }
                          >
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
                    <div className="flex gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-600 dark:bg-slate-800">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"
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
                className="flex gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950"
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
              >
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask anything…"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/25 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-50 dark:placeholder:text-slate-400 dark:focus:border-emerald-400"
                  aria-label="Message to assistant"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || typing}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-700/30 transition enabled:hover:bg-emerald-500 disabled:opacity-40 dark:bg-emerald-500 dark:ring-emerald-400/30 dark:enabled:hover:bg-emerald-400"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative flex h-[3.25rem] w-[3.25rem] min-h-[52px] min-w-[52px] items-center justify-center rounded-2xl border border-emerald-700/40 bg-emerald-600 text-white shadow-[0_12px_40px_-8px_rgba(5,150,105,0.55)] ring-1 ring-white/20 transition hover:bg-emerald-500 dark:border-emerald-400/50 dark:bg-emerald-500 dark:shadow-[0_12px_40px_-8px_rgba(16,185,129,0.45)] dark:ring-emerald-200/20 dark:hover:bg-emerald-400 sm:h-14 sm:w-14 sm:min-h-0 sm:min-w-0"
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
                <X className="h-6 w-6" />
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
                <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5 rounded-full bg-amber-300 ring-2 ring-emerald-600 dark:ring-emerald-500" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
