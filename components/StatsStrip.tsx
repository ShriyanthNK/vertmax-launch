"use client";

import { motion } from "framer-motion";

const MARKS = ["CAMERA-VERIFIED", "ADAPTIVE PROGRAMMING", "ON-DEVICE", "NO WEARABLES"];

export function StatsStrip() {
  return (
    <div className="border-y border-white/[0.06] bg-surface/40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8 sm:justify-between"
      >
        {MARKS.map((mark) => (
          <span
            key={mark}
            className="font-numeric text-[12px] tracking-wide text-text-muted"
          >
            {mark}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
