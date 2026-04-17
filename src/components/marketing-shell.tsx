"use client";

import { AssistantChat } from "@/components/assistant/assistant-chat";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type MarketingShellProps = {
  children: React.ReactNode;
};

/**
 * Shared chrome for the marketing site (nav, main, footer, assistant).
 * Intro loader is mounted once in `RootShell` in the root layout.
 */
export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-x-clip pb-24 sm:pb-0">
        {children}
      </main>
      <Footer />
      <AssistantChat />
    </>
  );
}
