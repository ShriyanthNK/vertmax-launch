"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Record",
    body: "Prop your phone up, hit record, jump. No sensors, no wearables, just the camera that's already in your pocket.",
  },
  {
    n: "02",
    title: "Verify",
    body: "Pose tracking finds your exact takeoff and landing frame and turns the gap between them into inches.",
  },
  {
    n: "03",
    title: "Train",
    body: "That number becomes the first entry in a program that adapts to how consistently you actually show up.",
  },
];

export function HowItWorks() {
  return (
    <section id="measure" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-xl"
      >
        <p className="eyebrow mb-3 font-display text-[11px] text-volt">
          HOW IT WORKS
        </p>
        <h2 className="font-display text-[32px] leading-tight tracking-tight text-text-primary sm:text-[40px]">
          Three steps, every session.
        </h2>
      </motion.div>

      <div className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
        <motion.div
          className="absolute left-0 right-0 top-[22px] hidden h-px origin-left bg-white/[0.08] sm:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />

        {STEPS.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink font-numeric text-[13px] font-semibold text-volt">
              {step.n}
            </div>
            <h3 className="mb-2 font-body text-[18px] font-semibold text-text-primary">
              {step.title}
            </h3>
            <p className="max-w-xs font-body text-[14px] leading-relaxed text-text-muted">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
