import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { RootShell } from "@/components/providers/root-shell";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { company } from "@/data/site";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Cormorant_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f8fafc",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://praestantia.ng"),
  title: {
    default: `${company.name} | Engineering, Digital & National Programs`,
    template: `%s | ${company.name}`,
  },
  description:
    "Praestantia Projects Ltd — Nigerian multi-sector partner for engineering & construction, project management, ICT & software, cybersecurity & cloud, agriculture, and turnkey government programs.",
  keywords: [
    "Praestantia",
    "Nigeria",
    "engineering",
    "construction",
    "project management",
    "ICT",
    "software development",
    "cybersecurity",
    "cloud",
    "agriculture",
    "government projects",
    "consultancy",
  ],
  openGraph: {
    title: `${company.name} | Engineering Excellence. Digital Innovation.`,
    description:
      "Enterprise-grade delivery across infrastructure, technology, agriculture, and public programs — Abuja & Lagos, Nigeria.",
    type: "website",
    locale: "en_NG",
    siteName: company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name}`,
    description:
      "Engineering excellence, digital innovation, and sustainable growth for Nigeria's most demanding programs.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.legal,
  url: "https://praestantia.ng",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja & Lagos",
    addressCountry: "NG",
  },
  description:
    "Multi-sector Nigerian firm delivering engineering, digital, cybersecurity, agriculture, and turnkey government programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} flex min-h-full min-w-0 flex-col overflow-x-clip font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RootShell>{children}</RootShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
