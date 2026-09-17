"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

let posthogInitialized = false;

function initPostHog() {
  if (posthogInitialized || typeof window === "undefined") {
    return;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  if (!key) {
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
