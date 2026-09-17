"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type WaitlistFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitWaitlistSignup(
  _prev: WaitlistFormState,
  formData: FormData,
): Promise<WaitlistFormState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.from("waitlist_signups").insert({ email });

    if (error) {
      if (error.code === "23505") {
        return {
          status: "error",
          message: "That email is already on the waitlist. Thanks for your interest!",
        };
      }
      console.error("waitlist insert failed", error);
      return {
        status: "error",
        message: "Something went wrong. Please try again in a moment.",
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("waitlist signup error", err);
    return {
      status: "error",
      message:
        "Waitlist is not configured yet. Add your Supabase environment variables and run the migration.",
    };
  }
}
