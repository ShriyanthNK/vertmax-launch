"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const TARGET_INCHES = 34.5;
const TARGET_FRAME = 118;

/**
 * The hero's signature element: a stylized replay of what the app's own
 * measurement flow actually shows — a frame scrubber, a traced jump arc
 * between takeoff and landing markers, and the resulting number read out
 * in the same instrument-mono type role the app uses for every measured
 * value (VertFont.heroNumber / heroUnit).
 */
export function MeasurementHUD() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [frame, setFrame] = useState(0);
  const [inches, setInches] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const raf = requestAnimationFrame(() => {
        setFrame(TARGET_FRAME);
        setInches(TARGET_INCHES);
        setDone(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    const duration = 1500;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setFrame(Math.round(eased * TARGET_FRAME));
      setInches(Math.round(eased * TARGET_INCHES * 10) / 10);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-surface to-surface/90 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] sm:p-8"
    >
      {/* status row */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-text-primary transition-opacity ${
              done ? "opacity-30" : "animate-pulse opacity-90"
            }`}
          />
          <span className="font-numeric text-[11px] tracking-wide text-text-muted">
            {done ? "ANALYSIS COMPLETE" : "TRACKING"}
          </span>
        </div>
        <span className="font-numeric text-[11px] text-text-muted">
          FRAME {String(frame).padStart(4, "0")} / {TARGET_FRAME}
        </span>
      </div>

      {/* trajectory field */}
      <div className="relative mb-8 h-40 sm:h-48">
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "12.5% 25%",
            color: "var(--color-text-muted)",
          }}
        />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
          <motion.path
            d="M 4 88 Q 62 100 96 8"
            fill="none"
            stroke="var(--color-volt)"
            strokeWidth="1.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        {/* takeoff marker */}
        <motion.div
          className="absolute flex flex-col items-start gap-1"
          style={{ left: "4%", bottom: "10%" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <span className="h-2.5 w-2.5 rounded-full border-2 border-volt bg-ink" />
          <span className="font-numeric text-[10px] text-text-muted">TAKEOFF</span>
        </motion.div>
        {/* landing/apex marker */}
        <motion.div
          className="absolute flex flex-col items-end gap-1 text-right"
          style={{ right: "2%", top: "4%" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <span className="h-2.5 w-2.5 rounded-full border-2 border-volt bg-ink" />
          <span className="font-numeric text-[10px] text-text-muted">APEX</span>
        </motion.div>
      </div>

      {/* readout */}
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow mb-1.5 font-display text-[10px] text-text-muted">
            YOUR VERT
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-numeric text-[56px] font-semibold leading-none text-text-primary sm:text-[64px]">
              {inches.toFixed(1)}
            </span>
            <span className="font-numeric text-[18px] font-medium text-text-muted">in</span>
          </div>
        </div>

        <motion.div
          className="mb-1 flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-ink/60 px-3 py-1.5"
          initial={{ opacity: 0, y: 4 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-volt">
            <path d="M12 2 3 6v6c0 5 3.6 8.9 9 10 5.4-1.1 9-5 9-10V6l-9-4Zm-1.2 13.4-3.4-3.4 1.4-1.4 2 2 5-5 1.4 1.4-6.4 6.4Z" />
          </svg>
          <span className="font-body text-[12px] text-text-primary">Verified by video</span>
        </motion.div>
      </div>
    </div>
  );
}
