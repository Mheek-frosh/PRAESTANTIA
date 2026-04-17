/**
 * Central content for Praestantia Projects Ltd.
 * Update copy, services, and portfolio entries here.
 */

export const company = {
  name: "Praestantia Projects Ltd",
  tagline: "Engineering Excellence. Digital Innovation. Sustainable Growth.",
  legal: "Praestantia Projects Limited",
  address: "Abuja & Lagos, Nigeria",
  email: "hello@praestantia.ng",
  phone: "+234 (0) 800 PRAESTANTIA",
};

export type ProjectCategory = "Infrastructure" | "Tech" | "Agriculture";

export const projects: {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  year: string;
  image: string;
}[] = [
  {
    id: "1",
    title: "Federal Highway Modernization",
    category: "Infrastructure",
    summary:
      "Design-build supervision for dual-carriageway upgrades with smart drainage and resilient pavement systems.",
    year: "2024",
    image:
      "linear-gradient(135deg, #0f2744 0%, #1e3a5f 50%, #c9a22733 100%)",
  },
  {
    id: "2",
    title: "Smart Utilities Command Center",
    category: "Infrastructure",
    summary:
      "Integrated SCADA-ready monitoring, telemetry dashboards, and incident workflows for regional utilities.",
    year: "2023",
    image:
      "linear-gradient(135deg, #030712 0%, #0a2744 40%, #3b82f6 100%)",
  },
  {
    id: "3",
    title: "National Cloud Security Hardening",
    category: "Tech",
    summary:
      "Zero-trust architecture, identity governance, and continuous compliance monitoring for a public-sector cloud estate.",
    year: "2024",
    image:
      "linear-gradient(135deg, #0c1222 0%, #1a2744 60%, #c9a22755 100%)",
  },
  {
    id: "4",
    title: "Enterprise ERP & Field Mobility",
    category: "Tech",
    summary:
      "End-to-end ERP integration with offline-capable mobile workforce apps for distributed operations.",
    year: "2023",
    image:
      "linear-gradient(135deg, #111827 0%, #1e3a8a 50%, #6366f1 100%)",
  },
  {
    id: "5",
    title: "Agro-Processing Digital Traceability",
    category: "Agriculture",
    summary:
      "Lot tracking, cold-chain sensors, and export documentation automation for a multi-site processing network.",
    year: "2024",
    image:
      "linear-gradient(135deg, #14532d 0%, #0f2744 55%, #c9a22744 100%)",
  },
  {
    id: "6",
    title: "Irrigation & Yield Intelligence Pilot",
    category: "Agriculture",
    summary:
      "Satellite-assisted scheduling, soil analytics, and farmer dashboards for a large cooperative program.",
    year: "2022",
    image:
      "linear-gradient(135deg, #064e3b 0%, #0a1628 70%, #22c55e33 100%)",
  },
];

export const services = [
  {
    id: "engineering",
    title: "Engineering & Construction",
    short:
      "Structural integrity, civil works, and quality-assured delivery for complex built environments.",
    details:
      "From feasibility and detailed design through construction supervision, we align international standards with local context—ensuring safety, schedule discipline, and measurable outcomes on high-stakes projects.",
    icon: "HardHat" as const,
  },
  {
    id: "pm",
    title: "Project Management",
    short:
      "Program governance, risk controls, and stakeholder alignment from initiation to closeout.",
    details:
      "We deploy PMI-aligned frameworks with pragmatic reporting cadences tailored for government and enterprise sponsors—so decisions are timely, transparent, and audit-ready.",
    icon: "Kanban" as const,
  },
  {
    id: "ict",
    title: "ICT & Software Solutions",
    short:
      "Custom platforms, integrations, and modern web systems engineered for scale and maintainability.",
    details:
      "Our engineering teams build cloud-native applications, APIs, and data pipelines with security-first defaults—designed for reliability under real-world Nigerian connectivity and compliance constraints.",
    icon: "Code2" as const,
  },
  {
    id: "cyber",
    title: "Cybersecurity & Cloud",
    short:
      "Identity, infrastructure hardening, and resilient architectures for mission-critical workloads.",
    details:
      "We implement defense-in-depth across endpoints, networks, and cloud estates—backed by continuous monitoring patterns and incident readiness aligned to enterprise expectations.",
    icon: "ShieldCheck" as const,
  },
  {
    id: "agro",
    title: "Agriculture & Agro Services",
    short:
      "Value-chain modernization—from field operations to processing, logistics, and market access.",
    details:
      "We combine agronomy-aware process design with digital traceability so agribusiness partners can scale quality, reduce waste, and unlock export-grade compliance.",
    icon: "Sprout" as const,
  },
  {
    id: "consulting",
    title: "Consultancy & Turnkey Projects",
    short:
      "Strategic advisory and end-to-end delivery for public-sector and large corporate programs.",
    details:
      "We partner with institutions to structure programs, mobilize consortiums, and execute turnkey outcomes—bridging policy intent with field-level delivery.",
    icon: "Landmark" as const,
  },
];

export const whyUs = [
  {
    title: "Multi-sector expertise",
    body: "One partner across engineering, technology, agriculture, and public programs—reducing coordination risk and accelerating execution.",
  },
  {
    title: "Government-ready solutions",
    body: "Documentation, governance, and delivery practices aligned to the expectations of regulators, auditors, and senior stakeholders.",
  },
  {
    title: "End-to-end delivery",
    body: "From strategy and design through build, integration, and sustainment—we own outcomes, not tasks.",
  },
  {
    title: "Innovation-driven",
    body: "We invest in modern platforms, automation, and AI-ready foundations so your investments compound over time.",
  },
];

export const capabilities = [
  {
    title: "Software development",
    body: "Product-grade engineering with CI/CD, testing discipline, and maintainable architecture.",
  },
  {
    title: "Cloud infrastructure",
    body: "Landing zones, observability, cost governance, and resilient multi-region patterns.",
  },
  {
    title: "AI-ready systems",
    body: "Data foundations, retrieval workflows, and responsible deployment guardrails for enterprise AI.",
  },
  {
    title: "Cybersecurity",
    body: "Threat modeling, hardening roadmaps, and operational security programs that scale.",
  },
];
