"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

function ShareCardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: -3 }}
      whileHover={{ rotate: 0, y: -4 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto w-full max-w-[280px] rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-surface to-surface/90 p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)]"
    >
      <div className="mb-8 flex items-center gap-2">
        <Logo className="h-4 w-4 text-volt" />
        <span className="font-display text-[11px] tracking-wide text-text-primary">VERTMAX</span>
      </div>

      <p className="eyebrow mb-1 font-display text-[9px] text-text-muted">PERSONAL RECORD</p>
      <div className="mb-4 flex items-baseline gap-1.5">
        <span className="font-numeric text-[44px] font-semibold leading-none text-text-primary">34.5</span>
        <span className="font-numeric text-[14px] text-text-muted">in</span>
      </div>

      <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-ink/60 px-2.5 py-1">
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-volt">
          <path d="M12 2 3 6v6c0 5 3.6 8.9 9 10 5.4-1.1 9-5 9-10V6l-9-4Zm-1.2 13.4-3.4-3.4 1.4-1.4 2 2 5-5 1.4 1.4-6.4 6.4Z" />
        </svg>
        <span className="font-body text-[10px] text-text-primary">Verified by video</span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg border border-volt/40 bg-raised">
          <div className="absolute inset-x-3 bottom-3 h-px bg-volt/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-volt" />
        </div>
        <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg border border-volt/40 bg-raised">
          <div className="absolute inset-x-3 top-3 h-px bg-volt/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-volt" />
        </div>
      </div>
      <div className="flex justify-between font-numeric text-[9px] text-text-muted">
        <span>TAKEOFF</span>
        <span>LANDING</span>
      </div>
    </motion.div>
  );
}

function WidgetMock() {
  return (
    <div className="mx-auto flex w-full max-w-[280px] flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: 3 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        whileHover={{ rotate: 0, y: -4 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[22px] border border-white/[0.08] bg-gradient-to-b from-surface to-surface/90 p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)]"
      >
        <p className="eyebrow mb-3 font-display text-[9px] text-text-muted">BEST VERT</p>
        <div className="flex items-baseline gap-1.5">
          <span className="font-numeric text-[32px] font-semibold leading-none text-text-primary">34.5</span>
          <span className="font-numeric text-[12px] text-text-muted">in</span>
        </div>
        <p className="mt-2 font-numeric text-[10px] text-volt">+1.2 IN THIS MONTH</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        whileHover={{ rotate: 0, y: -4 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[22px] border border-white/[0.08] bg-gradient-to-b from-surface to-surface/90 p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow mb-1 font-display text-[9px] text-text-muted">TODAY</p>
            <p className="font-body text-[13px] font-medium text-text-primary">Lower body power</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full bg-volt/15 px-2.5 py-1.5">
            <span className="font-numeric text-[13px] font-semibold leading-none text-volt">14</span>
            <span className="mt-0.5 font-numeric text-[7px] leading-none text-volt/80">DAY STREAK</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Showcase() {
  return (
    <section id="track" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 max-w-xl"
      >
        <p className="eyebrow mb-3 font-display text-[11px] text-volt">
          PROOF, NOT SCREENSHOTS
        </p>
        <h2 className="font-display text-[32px] leading-tight tracking-tight text-text-primary sm:text-[40px]">
          Carry the number with you.
        </h2>
        <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-text-muted">
          A share card built from your actual verified frames, and a home
          screen widget that keeps today&apos;s streak one glance away.
        </p>
      </motion.div>

      <div className="grid gap-16 sm:grid-cols-2 sm:items-center sm:gap-8">
        <ShareCardMock />
        <WidgetMock />
      </div>
    </section>
  );
}
