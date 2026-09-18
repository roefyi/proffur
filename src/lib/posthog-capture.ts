import posthog from "posthog-js";

/** Fire a client event after PostHog has finished init (avoids dropped captures on fast form success). */
export function captureWhenReady(
  event: string,
  properties?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;

  const send = () => posthog.capture(event, properties);

  if (posthog.__loaded) {
    send();
    return;
  }

  const started = Date.now();
  const id = window.setInterval(() => {
    if (posthog.__loaded) {
      send();
      window.clearInterval(id);
      return;
    }
    if (Date.now() - started > 5000) {
      window.clearInterval(id);
    }
  }, 50);
}
