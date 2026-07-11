import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="h-4 w-4 text-text-muted" />
          <span className="font-display text-[12px] tracking-tight text-text-muted">
            VERTMAX
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/privacy"
            className="font-body text-[13px] text-text-muted hover:text-text-primary"
          >
            Privacy Policy
          </a>
          <p className="font-body text-[13px] text-text-muted">
            &copy; 2026 Vertmax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
