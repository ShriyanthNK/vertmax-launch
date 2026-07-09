"use client";

import { motion } from "framer-motion";
import { TrajectoryArc } from "./TrajectoryArc";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCTA() {
  return (
    <section id="download" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <TrajectoryArc
        liftoff={0.1}
        strokeWidth={0.3}
        className="pointer-events-none absolute -right-[15%] -bottom-[10%] h-[80%] w-[70%] text-volt opacity-[0.09]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <p className="eyebrow mb-4 font-display text-[11px] text-volt">
          BUILT FOR IOS
        </p>
        <h2 className="mb-5 font-display text-[34px] leading-[1.1] tracking-tight text-text-primary sm:text-[46px]">
          Find your vert.
        </h2>
        <p className="mx-auto mb-9 max-w-md font-body text-[16px] leading-relaxed text-text-muted">
          Vertmax is in active development. Get on the list and we&apos;ll
          reach out the moment early access opens.
        </p>
        <WaitlistForm />
      </motion.div>
    </section>
  );
}
