import { Reveal } from "@/components/marketing/reveal";
import { WaitlistForm } from "@/components/marketing/waitlist-form";

export function WaitlistClosingSection() {
  return (
    <section
      className="scroll-mt-24 text-center"
      aria-labelledby="waitlist-closing-heading"
    >
      <Reveal delay={0}>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Early access
        </p>
        <h2
          id="waitlist-closing-heading"
          className="mx-auto mt-3 max-w-md font-display text-2xl tracking-tight text-balance text-foreground sm:text-3xl"
        >
          Ready to stop hunting bids by hand?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Join the list and we&apos;ll email you when Birmingham early access
          opens.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-8 sm:mt-10">
          <WaitlistForm />
        </div>
      </Reveal>

      <Reveal delay={280}>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          We&apos;re starting in the Birmingham metro area. Spots will be limited
          while we onboard the first contractors.
        </p>
      </Reveal>
    </section>
  );
}
