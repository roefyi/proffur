"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

let posthogInitialized = false;

function initPostHog() {
  if (posthogInitialized || typeof window === "undefined") {
    return;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim();
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() ||
    "https://us.i.posthog.com";

  if (!key) {
    console.warn(
      "[Cifon] PostHog is off: missing NEXT_PUBLIC_POSTHOG_KEY at build time. Add it in Vercel → Settings → Environment Variables, then redeploy.",
    );
    return;
  }

  posthog.init(key, {
    api_host: host,
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: true,
  });
  posthogInitialized = true;
}

type SaasProviderProps = {
  children: React.ReactNode;
};

export function SaasProvider({ children }: SaasProviderProps) {
  useEffect(() => {
    initPostHog();
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
