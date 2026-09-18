"use client";

import { useActionState, useEffect } from "react";

import {
  submitWaitlistSignup,
  type WaitlistFormState,
} from "@/app/actions/waitlist";
import { captureWhenReady } from "@/lib/posthog-capture";
import { cn } from "@/lib/utils";

const initialState: WaitlistFormState = { status: "idle" };

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    submitWaitlistSignup,
    initialState,
  );

  useEffect(() => {
    if (state.status !== "success") return;
    captureWhenReady("waitlist_signup");
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        className="animate-grok-rise mx-auto max-w-lg rounded-full bg-secondary px-6 py-4 text-center sm:px-8 sm:py-5"
        role="status"
      >
        <p className="text-sm font-medium text-foreground sm:text-base">
          You&apos;re on the list. I&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mx-auto w-full max-w-lg">
      <div
        className={cn(
          "flex items-center gap-1 rounded-full bg-secondary p-1.5 pl-4 sm:gap-2 sm:pl-5",
          state.status === "error" && "ring-2 ring-destructive/30",
        )}
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@yourcompany.com"
          required
          disabled={pending}
          className="min-h-10 min-w-0 flex-1 border-0 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:opacity-60 sm:text-sm"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#e8553f] disabled:opacity-60 sm:px-5"
        >
          {pending ? (
            <span className="sm:hidden">…</span>
          ) : (
            <span className="sm:hidden">Join</span>
          )}
          <span className="hidden sm:inline">
            {pending ? "Joining…" : "Join waitlist"}
          </span>
        </button>
      </div>

      {state.status === "error" && (
        <p className="mt-3 text-center text-sm text-destructive" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
