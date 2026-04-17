"use client";

import { PageLoader } from "@/components/layout/page-loader";

/**
 * Wraps the app once per document — intro loader lives here so client-side
 * route changes do not remount it.
 */
export function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      {children}
    </>
  );
}
