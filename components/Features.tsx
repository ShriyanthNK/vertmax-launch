"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

function IconCrosshair() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconBars() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M4 18v-4M10 18V9M16 18V5M4 14l6-5 4 3 6-6" />
    </svg>
  );
}

function IconStreak() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M12 2c1 3-3 4-3 7a3 3 0 0 0 6 0c1.2 1 1.5 2.7 1.5 4a4.5 4.5 0 0 1-9 0C7.5 8 9.5 5 12 2Z" />
    </svg>
  );
}

function IconCard() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M7 15.5 10 12l2.5 2.5L17 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWidget() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="8" height="8" rx="1.8" />
      <rect x="13" y="3" width="8" height="8" rx="1.8" />
      <rect x="3" y="13" width="18" height="8" rx="1.8" />
    </svg>
  );
}

function IconSync() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a8 8 0 0 1 13.6-5.7L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.6 5.7L4 16" />
      <path d="M4 20v-4h4" />
    </svg>
  );
}

const FEATURES: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <IconCrosshair />,
    title: "Measured in frames, not guesses",
    body: "Pose tracking reads your takeoff and landing straight from the video. No tape on the wall, no eyeballing the ceiling.",
  },
  {
    icon: <IconBars />,
    title: "Programs that adjust to you",
    body: "Finish a week clean and Vertmax quietly bumps next week's volume. Miss reps and it holds. Periodization without a spreadsheet.",
  },
  {
    icon: <IconStreak />,
    title: "A streak that keeps you honest",
    body: "Home shows exactly how long it's been since your last session, and how long you've kept the streak alive.",
  },
  {
    icon: <IconCard />,
    title: "A card worth posting",
    body: "Every verified jump becomes a clean, shareable card: your number, your date, your proof, ready in one tap.",
  },
  {
    icon: <IconWidget />,
    title: "Your vert, on your home screen",
    body: "A small or medium widget keeps your best jump and today's session one glance away, synced straight from the app.",
  },
  {
    icon: <IconSync />,
    title: "Never lose a rep",
    body: "Sign in once and every measurement, streak, and custom program follows you to a new phone, scoped to your account.",
  },
];

export function Features() {
  return (
    <section id="train" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 max-w-xl"
      >
        <p className="eyebrow mb-3 font-display text-[11px] text-volt">
          THE WHOLE LOOP
        </p>
        <h2 className="font-display text-[32px] leading-tight tracking-tight text-text-primary sm:text-[40px]">
          One number. A program to move it.
        </h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-2xl border border-white/[0.06] bg-gradient-to-b from-surface to-surface/90 p-6 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-volt/25"
          >
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-raised text-volt transition-colors duration-300 group-hover:bg-volt/15">
              {f.icon}
            </div>
            <h3 className="mb-2 font-body text-[16px] font-semibold text-text-primary">
              {f.title}
            </h3>
            <p className="font-body text-[14px] leading-relaxed text-text-muted">
              {f.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
