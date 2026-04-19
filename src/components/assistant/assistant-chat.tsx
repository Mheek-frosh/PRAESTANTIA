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
  "Hello! Welcome to Praestantia Projects. How can our team assist you today? Please briefly describe what you are looking for.";

/**
 * Floating assistant on a fixed white UI — reads clearly on light or dark site themes.
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
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setTyping(true);

    window.setTimeout(() => {
      setTyping(false);
      
      const userMessageCount = newMessages.filter(m => m.role === "user").length;
      
      if (userMessageCount === 1) {
        setMessages((m) => [
          ...m,
          { 
            id: nextId(), 
            role: "assistant", 
            text: "Thank you! Could you share just a little more detail about your timeline or specific requirements? Once you reply, I'll transfer our chat directly to a specialist on WhatsApp." 
          },
        ]);
      } else {
        setMessages((m) => [
          ...m,
          { id: nextId(), role: "assistant", text: "Perfect. Redirecting you to our WhatsApp support team now..." },
        ]);

        const chatHistory = newMessages
          .filter(m => m.role === "user")
          .map((m, i) => `User: ${m.text}`)
          .join("\n");
        
        const payload = `*New Website Inquiry*\n\n*Client Request Context:*\n${chatHistory}\n\n*Please assist me!*`;
        
        const waUrl = `https://wa.me/14432248459?text=${encodeURIComponent(payload)}`;
        window.open(waUrl, "_blank", "noopener,noreferrer");
        
        setTimeout(() => setOpen(false), 2500);
      }
    }, 750);
  }, [draft, messages]);

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
              className="mb-3 flex w-[calc(100vw-1.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] sm:w-[min(100vw-2.5rem,380px)]"
            >
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-white px-4 py-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-700/20">
                    <Sparkles className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold leading-tight text-slate-900">
                      WhatsApp Support
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      Online · Replies instantly
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div
                ref={listRef}
                className="flex max-h-[min(58dvh,440px)] flex-col gap-3 overflow-y-auto overflow-x-hidden bg-white px-3 py-3 sm:max-h-[min(52vh,420px)] sm:px-4 sm:py-4"
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[min(92%,20rem)] break-words rounded-2xl px-3 py-2.5 text-[13px] leading-relaxed sm:px-3.5 sm:text-sm ${
                        m.role === "user"
                          ? "bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-700/25"
                          : "border border-slate-200 bg-slate-50 text-slate-800 shadow-sm"
                      }`}
                    >
                      {m.text.split("**").map((chunk, i) =>
                        i % 2 === 1 ? (
                          <strong
                            key={i}
                            className={
                              m.role === "user"
                                ? "font-semibold text-white"
                                : "font-semibold text-emerald-800"
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
                    <div className="flex gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-emerald-600"
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
                className="flex gap-2 border-t border-slate-100 bg-white p-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
              >
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask anything…"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  aria-label="Message to assistant"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || typing}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-700/25 transition enabled:hover:bg-emerald-500 disabled:opacity-40"
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
          className="relative flex h-[3.25rem] w-[3.25rem] min-h-[52px] min-w-[52px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-emerald-600 shadow-[0_8px_30px_-6px_rgba(15,23,42,0.12)] ring-1 ring-white transition hover:border-emerald-200 hover:bg-emerald-50/80 hover:text-emerald-700 sm:h-14 sm:w-14 sm:min-h-0 sm:min-w-0"
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
                <X className="h-6 w-6 text-slate-700" />
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
                <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
