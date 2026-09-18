import { HeroSection } from "@/components/marketing/hero-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { Reveal } from "@/components/marketing/reveal";
import { WaitlistForm } from "@/components/marketing/waitlist-form";

export default function MarketingPage() {
  return (
    <>
      <main className="mx-auto flex min-h-[85vh] max-w-2xl flex-col justify-center px-6 pb-16 pt-24 sm:min-h-[88vh] sm:pt-28">
        <Reveal delay={0}>
          <HeroSection />
        </Reveal>

        <div id="waitlist" className="mt-10 sm:mt-12">
          <Reveal delay={180}>
            <WaitlistForm />
          </Reveal>
          <Reveal delay={320}>
            <p className="mx-auto mt-5 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
              We&apos;re starting in the Birmingham metro area. Join the list and
              we&apos;ll be in touch when early access opens.
            </p>
          </Reveal>
        </div>
      </main>

      <div className="marketing-problem-band border-t border-border/80">
        <div className="mx-auto max-w-2xl px-6 py-20 sm:py-24">
          <ProblemSection />
        </div>
      </div>
    </>
  );
}
