import { randomUUID } from "crypto";

/** Send a conversion event from the server (does not depend on browser PostHog init). */
export async function captureServerEvent(
  event: string,
  properties?: Record<string, unknown>,
): Promise<void> {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim();
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() ||
    "https://us.i.posthog.com";

  if (!apiKey) return;

  const url = `${host.replace(/\/$/, "")}/capture/`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        event,
        distinct_id: randomUUID(),
        properties: { source: "server", ...properties },
      }),
    });
  } catch (err) {
    console.error("posthog server capture failed", err);
  }
}
