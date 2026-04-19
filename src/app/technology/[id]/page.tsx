import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";
import { capabilities } from "@/data/site";

export function generateStaticParams() {
  return capabilities.map((c) => ({ id: c.id }));
}

export default async function TechnologyDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const tech = capabilities.find((c) => c.id === resolvedParams.id);
  if (!tech) notFound();

  return (
    <MarketingShell>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/technology" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Technology
        </Link>
        <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-3xl mb-12 shadow-2xl border border-[var(--glass-border)]">
          <Image src={tech.coverSrc} alt={tech.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-md">
              {tech.title}
            </h1>
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-[var(--muted)] prose-headings:text-[var(--foreground)]">
          <p className="text-xl leading-relaxed text-[var(--foreground)] font-medium mb-8">
            {tech.short}
          </p>
          <div className="h-px w-full bg-[var(--glass-border)] my-8" />
          <h2 className="text-2xl font-semibold mb-4">Detailed Capability</h2>
          <p className="whitespace-pre-wrap leading-relaxed">{tech.details}</p>
        </div>
      </div>
    </MarketingShell>
  );
}
