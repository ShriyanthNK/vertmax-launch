"use client";

import { motion } from "framer-motion";
import { MeasurementHUD } from "./MeasurementHUD";
import { TrajectoryArc } from "./TrajectoryArc";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <TrajectoryArc
        liftoff={0.15}
        strokeWidth={0.35}
        className="pointer-events-none absolute -left-[10%] -top-[5%] h-[70%] w-[85%] text-volt opacity-[0.08]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.05fr_1fr] md:gap-10">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-5 font-display text-[11px] text-volt"
          >
            VERIFIED BY VIDEO
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[40px] leading-[1.08] tracking-tight text-text-primary sm:text-[52px] lg:text-[60px]"
          >
            Your vertical.
            <br />
            Measured, not eyeballed.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md font-body text-[17px] leading-relaxed text-text-muted"
          >
            Vertmax watches your jump frame by frame with your phone&apos;s
            camera and turns takeoff and landing into one honest number,
            then builds the program to raise it.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#download"
              className="rounded-full bg-volt px-6 py-3 font-body text-[15px] font-semibold text-ink transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97]"
            >
              Get early access
            </a>
            <a
              href="#measure"
              className="rounded-full border border-white/[0.12] px-6 py-3 font-body text-[15px] font-medium text-text-primary transition-colors hover:bg-white/[0.04]"
            >
              See how it&apos;s measured
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <MeasurementHUD />
        </motion.div>
      </div>
    </section>
  );
}
