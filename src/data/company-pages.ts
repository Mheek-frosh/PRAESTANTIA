/**
 * Copy for Our Company, Team, and Careers pages — replace with HR-approved content when ready.
 */

export const ourCompany = {
  introLead:
    "Praestantia Projects Ltd is a Nigerian multi-industry firm built for complexity—where infrastructure meets software, and field operations meet enterprise governance.",
  introBody:
    "We serve institutions that cannot afford fragility: federal and state programs, regulated enterprises, and national-scale operators. Reliability, innovation, and measurable impact are not marketing phrases—they are delivery standards embedded in how we mobilize teams, document decisions, and close milestones.",
  governance:
    "Our delivery model aligns international engineering practice with local procurement realities, stakeholder cadences, and audit expectations. From design reviews to commissioning, sponsors receive transparent reporting, risk registers that evolve with the program, and handover packages structured for long-term operations.",
  principles: [
    {
      title: "Single accountability",
      body: "One partner across engineering, ICT, cybersecurity, agriculture, and turnkey programs—reducing coordination drag and ownership gaps.",
    },
    {
      title: "Evidence-led delivery",
      body: "Milestones tied to verifiable outputs: test records, as-built documentation, security baselines, and operational runbooks—not slide decks alone.",
    },
    {
      title: "Governance by design",
      body: "Documentation, approvals, and change control patterns that satisfy boards, regulators, and donor frameworks without slowing execution.",
    },
    {
      title: "National footprint, elite craft",
      body: "Abuja and Lagos hubs with field teams deployed where programs live—bridging policy intent with site-level precision.",
    },
  ],
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Chidi Okonkwo",
    role: "Chief Executive Officer",
    bio: "Leads corporate strategy and sponsor relationships for national programs, with a background in civil infrastructure and public-private delivery models.",
    imageSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&h=600&q=82",
  },
  {
    id: "2",
    name: "Amara Nwosu",
    role: "Chief Operating Officer",
    bio: "Owns program governance, integrated planning, and cross-sector mobilization—ensuring schedules, budgets, and quality gates stay aligned under pressure.",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600&q=82",
  },
  {
    id: "3",
    name: "David Osei",
    role: "Director, Engineering & Infrastructure",
    bio: "Oversees structural, civil, and MEP coordination for large builds—championing safety culture, design assurance, and construction supervision rigor.",
    imageSrc:
      "https://images.unsplash.com/photo-1507152832244-15d45e1a00b0?auto=format&fit=crop&w=600&h=600&q=82",
  },
  {
    id: "4",
    name: "Funmi Adebayo",
    role: "Director, Digital & Cybersecurity",
    bio: "Guards cloud estates, identity systems, and software delivery pipelines—embedding security architecture and resilience testing from day one.",
    imageSrc:
      "https://images.unsplash.com/photo-1531123897727-8f129e1bf304?auto=format&fit=crop&w=600&h=600&q=82",
  },
  {
    id: "5",
    name: "Emeka Ude",
    role: "Director, Agriculture & Agro-industry",
    bio: "Connects agronomy, processing, and traceability programs—aligning field operations with export readiness and cooperative-scale economics.",
    imageSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=600&q=82",
  },
  {
    id: "6",
    name: "Halima Yusuf",
    role: "Head of Programs & Partnerships",
    bio: "Structures consortia, MoU pathways, and stakeholder forums so complex programs launch with clarity on roles, interfaces, and escalation ladders.",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=82",
  },
];

export const careersContent = {
  intro:
    "We hire engineers, technologists, agronomists, and program leaders who want their work to show up in national outcomes—not only in quarterly reports.",
  whyJoin: [
    {
      title: "High-stakes programs",
      body: "Contribute to infrastructure, digital platforms, and public-sector initiatives where precision and documentation matter as much as speed.",
    },
    {
      title: "Cross-disciplinary craft",
      body: "Collaborate across disciplines without siloed handoffs: one operating rhythm from design through commissioning and sustainment.",
    },
    {
      title: "Growth with guardrails",
      body: "Mentorship, certifications, and exposure to international methods—grounded in ethical delivery and respect for local context.",
    },
  ],
  roles: [
    {
      title: "Senior Civil Engineer",
      location: "Abuja · Hybrid",
      type: "Full-time",
      summary:
        "Lead structural and highway work packages for federal modernization programs; chartered engineer preferred.",
    },
    {
      title: "Cloud Security Architect",
      location: "Lagos · Hybrid",
      type: "Full-time",
      summary:
        "Design zero-trust patterns, landing zones, and continuous compliance for regulated cloud estates.",
    },
    {
      title: "Program Manager — Agro-industry",
      location: "Nationwide travel",
      type: "Full-time",
      summary:
        "Steer multi-site traceability and processing programs with PMP-style governance and farmer-facing KPIs.",
    },
    {
      title: "Business Analyst (Enterprise)",
      location: "Abuja",
      type: "Contract",
      summary:
        "Translate sponsor requirements into backlog-ready specifications for ERP and mobility integrations.",
    },
  ],
  process: [
    { step: "1", title: "Apply", detail: "Send CV, portfolio links, and notice period to our partnerships inbox with the role title in the subject line." },
    { step: "2", title: "Conversation", detail: "Structured interviews with discipline leads—technical depth, collaboration signals, and values fit." },
    { step: "3", title: "Scenario", detail: "Short case or architecture walkthrough relevant to the role (paid for senior contract positions when applicable)." },
    { step: "4", title: "Offer", detail: "Clear compensation, benefits, and onboarding plan—including security and compliance training where required." },
  ],
};
