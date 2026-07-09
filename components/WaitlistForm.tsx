"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist, type WaitlistState } from "@/app/actions";

const initialState: WaitlistState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-volt px-6 py-3 font-body text-[15px] font-semibold text-ink transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-60 disabled:hover:scale-100"
    >
      {pending ? "Joining…" : "Get early access"}
    </button>
  );
}

export function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, initialState);
  const joined = state.status === "success" || state.status === "duplicate";

  if (joined) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-6 py-3">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-volt">
          <path d="M12 2 3 6v6c0 5 3.6 8.9 9 10 5.4-1.1 9-5 9-10V6l-9-4Zm-1.2 13.4-3.4-3.4 1.4-1.4 2 2 5-5 1.4 1.4-6.4 6.4Z" />
        </svg>
        <span className="font-body text-[14px] text-text-primary">{state.message}</span>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col items-center gap-3">
      <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          key={state.email ?? ""}
          id="waitlist-email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          defaultValue={state.status === "error" ? state.email : undefined}
          aria-invalid={state.status === "error"}
          aria-describedby={state.status === "error" ? "waitlist-error" : undefined}
          className="w-full flex-1 rounded-full border border-white/[0.12] bg-surface px-5 py-3 font-body text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-volt/40"
        />
        <SubmitButton />
      </div>
      {state.status === "error" && (
        <p id="waitlist-error" className="font-body text-[13px] text-text-muted">
          {state.message}
        </p>
      )}
    </form>
  );
}
