"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type WaitlistState = {
  status: "idle" | "success" | "duplicate" | "error";
  message: string;
  email?: string;
};

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a valid email address.", email };
  }

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { status: "duplicate", message: "You're already on the list." };
    }
    return {
      status: "error",
      message: "Something went wrong. Try again in a moment.",
      email,
    };
  }

  return { status: "success", message: "You're on the list. We'll email you when access opens." };
}
