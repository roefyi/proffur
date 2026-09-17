import { getActiveHero } from "@/lib/marketing/hero-content";

export function HeroSection() {
  const hero = getActiveHero();

  return (
    <section className="text-center">
      <h1 className="font-display text-[2.75rem] leading-[1.08] tracking-tight text-balance text-foreground sm:text-6xl sm:leading-[1.06]">
        {hero.headline}
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg sm:leading-relaxed">
        {hero.subhead}
      </p>
    </section>
  );
}
