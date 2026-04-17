/**
 * Curated Unsplash photography — replace with owned/licensed assets for production.
 * Images are optimized via next/image (see next.config.ts remotePatterns).
 */

const q = "auto=format&fit=crop";

export const media = {
  /** Hero: solar / sustainable infrastructure (energy-adjacent, boardroom-safe). */
  hero: `https://images.unsplash.com/photo-1509391366360-2e959784a478?${q}&w=2400&q=85`,
  /** About: leadership / collaboration. */
  about: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?${q}&w=1400&q=80`,
  /** Technology strip: data / global systems. */
  technologyBanner: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?${q}&w=2000&q=80`,
  services: {
    engineering: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?${q}&w=900&q=80`,
    pm: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?${q}&w=900&q=80`,
    ict: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?${q}&w=900&q=80`,
    cyber: `https://images.unsplash.com/photo-1563986768609-322da13575f3?${q}&w=900&q=80`,
    agro: `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?${q}&w=900&q=80`,
    consulting: `https://images.unsplash.com/photo-1507676184212-d03ab07a01e7?${q}&w=900&q=80`,
  },
  projects: {
    p1: `https://images.unsplash.com/photo-1590644312911-4d12900d2f2e?${q}&w=1200&q=80`,
    p2: `https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?${q}&w=1200&q=80`,
    p3: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?${q}&w=1200&q=80`,
    p4: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?${q}&w=1200&q=80`,
    p5: `https://images.unsplash.com/photo-1586201379201-ddca671fe3f9?${q}&w=1200&q=80`,
    p6: `https://images.unsplash.com/photo-1500382017468-9049fed747ef?${q}&w=1200&q=80`,
  },
} as const;
