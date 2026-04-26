"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, Globe, Briefcase } from "lucide-react";
import { teamMembers } from "@/data/company-pages";
import { easeOutExpo } from "@/lib/motion";

/* ── animation presets ── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.8, ease: easeOutExpo },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-60px" },
};

const staggerChild = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: easeOutExpo },
};

/* ── stat counters for the hero ── */
const stats = [
  { icon: Users, value: "20+", label: "Professionals" },
  { icon: Award, value: "15+", label: "Years Combined" },
  { icon: Globe, value: "5+", label: "Industries" },
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
];

/**
 * Leadership and team narrative — premium redesign with immersive hero,
 * founder duo spotlight, interactive team grid, and polished CTA.
 */
export function TeamPage() {
  const ceo = teamMembers.find((m) => m.id === "1");
  const cofounder = teamMembers.find((m) => m.id === "cofounder");
  const restOfTeam = teamMembers.filter(
    (m) => m.id !== "1" && m.id !== "cofounder"
  );

  return (
    <article>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — immersive gradient mesh background with stat counters
      ════════════════════════════════════════════════════════════════════ */}
      <header className="team-hero">
        {/* animated gradient mesh */}
        <div className="team-hero__mesh" aria-hidden="true" />
        {/* decorative grid overlay */}
        <div className="team-hero__grid" aria-hidden="true" />

        <div className="team-hero__inner">
          <motion.p
            className="team-hero__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            Our Team
          </motion.p>

          <motion.h1
            className="team-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6, ease: easeOutExpo }}
          >
            Leaders who bridge{" "}
            <span className="team-hero__highlight">policy</span>,{" "}
            <span className="team-hero__highlight">engineering</span>, and{" "}
            <span className="team-hero__highlight">delivery</span>
          </motion.h1>

          <motion.p
            className="team-hero__lead"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5, ease: easeOutExpo }}
          >
            A compact leadership bench aligned to how sponsors actually buy and
            govern work — technical depth in the room with commercial judgment
            and field empathy.
          </motion.p>

          {/* stat counters */}
          <motion.div
            className="team-hero__stats"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6, ease: easeOutExpo }}
          >
            {stats.map((s) => (
              <div key={s.label} className="team-stat">
                <s.icon className="team-stat__icon" />
                <span className="team-stat__value">{s.value}</span>
                <span className="team-stat__label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ════════════════════════════════════════════════════════════════════
          INTRO NARRATIVE
      ════════════════════════════════════════════════════════════════════ */}
      <section className="team-narrative">
        <div className="team-narrative__inner">
          <motion.div {...fadeUp} className="team-narrative__content">
            <div className="team-narrative__accent-line" aria-hidden="true" />
            <p className="team-narrative__text">
              We staff programs with principal-led teams — not endless layers of
              account managers. Executives stay close to risk, architects stay
              close to integration points, and program leads stay close to site
              reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FOUNDERS DUO — side-by-side spotlight
      ════════════════════════════════════════════════════════════════════ */}
      <section className="team-founders">
        <div className="team-founders__inner">
          <motion.div {...fadeUp}>
            <p className="team-section-label">Founding Leadership</p>
            <h2 className="team-section-heading">
              The visionaries behind Praestantia
            </h2>
          </motion.div>

          <div className="team-founders__grid">
            {/* CEO */}
            {ceo && (
              <motion.div
                className="founder-card"
                initial={{ opacity: 0, x: -36, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: easeOutExpo }}
              >
                <div className="founder-card__image-wrap">
                  <Image
                    src={ceo.imageSrc}
                    alt={ceo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="founder-card__image"
                  />
                  <div className="founder-card__image-overlay" />
                  <div className="founder-card__badge">CEO</div>
                </div>
                <div className="founder-card__body">
                  <h3 className="founder-card__name">{ceo.name}</h3>
                  <p className="founder-card__role">{ceo.role}</p>
                  <div className="founder-card__divider" />
                  <div className="founder-card__bio">
                    {ceo.bio.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Co-founder */}
            {cofounder && (
              <motion.div
                className="founder-card"
                initial={{ opacity: 0, x: 36, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: easeOutExpo,
                  delay: 0.12,
                }}
              >
                <div className="founder-card__image-wrap">
                  <Image
                    src={cofounder.imageSrc}
                    alt={cofounder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="founder-card__image"
                  />
                  <div className="founder-card__image-overlay" />
                  <div className="founder-card__badge">Co-Founder</div>
                </div>
                <div className="founder-card__body">
                  <h3 className="founder-card__name">{cofounder.name}</h3>
                  <p className="founder-card__role">{cofounder.role}</p>
                  <div className="founder-card__divider" />
                  <div className="founder-card__bio">
                    {cofounder.bio.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TEAM GRID — interactive hover cards with stagger
      ════════════════════════════════════════════════════════════════════ */}
      <section className="team-grid-section">
        <div className="team-grid-section__inner">
          <motion.div {...fadeUp}>
            <p className="team-section-label">Leadership Team</p>
            <h2 className="team-section-heading">
              Experts driving every domain
            </h2>
          </motion.div>

          <motion.ul className="team-grid" {...staggerContainer}>
            {restOfTeam.map((m) => (
              <motion.li
                key={m.id}
                className="team-member-card"
                {...staggerChild}
              >
                <div className="team-member-card__image-wrap">
                  <Image
                    src={m.imageSrc}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="team-member-card__image"
                  />
                  <div className="team-member-card__image-overlay" />
                </div>
                <div className="team-member-card__body">
                  <h3 className="team-member-card__name">{m.name}</h3>
                  <p className="team-member-card__role">{m.role}</p>
                  <p className="team-member-card__bio">{m.bio}</p>
                </div>
                {/* hover glow ring */}
                <div className="team-member-card__glow" aria-hidden="true" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CTA — careers callout with gradient border
      ════════════════════════════════════════════════════════════════════ */}
      <section className="team-cta-section">
        <div className="team-cta-section__inner">
          <motion.div className="team-cta" {...fadeIn}>
            <div className="team-cta__content">
              <motion.div {...fadeUp}>
                <h2 className="team-cta__heading">
                  Join a team where titles mean{" "}
                  <span className="team-hero__highlight">accountability</span>
                </h2>
                <p className="team-cta__text">
                  We&apos;re always looking for exceptional engineers, analysts,
                  and program leaders. See how we hire and explore open roles.
                </p>
              </motion.div>
              <Link href="/careers" className="team-cta__button">
                View careers
                <ArrowRight className="team-cta__button-icon" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
