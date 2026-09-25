import { Reveal } from "@/components/marketing/reveal";

const pains = [
  {
    title: "Too many websites to check",
    description:
      "City, county, schools, universities, and state boards post separately, often as PDFs or email lists. Miss a source, miss a bid.",
  },
  {
    title: "Hard to know if you qualify",
    description:
      "Licenses, insurance limits, bonding, and certifications vary by job. Sorting that out by hand eats hours.",
  },
  {
    title: "Deadlines slip",
    description:
      "Pre-bid meetings, questions due dates, and submission windows are buried in PDFs. One miss and you're out.",
  },
  {
    title: "Big tools ignore local detail",
    description:
      "National aggregators list postings without local rules, preferences, or pre-qual steps that decide who wins.",
  },
];

export function ProblemSection() {
  return (
    <section
      className="scroll-mt-24"
      aria-labelledby="problem-heading"
    >
      <Reveal delay={0}>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          The problem
        </p>
        <h2
          id="problem-heading"
          className="mt-3 font-display text-2xl tracking-tight text-balance text-foreground sm:text-3xl"
        >
          The work is out there. Finding it shouldn&apos;t be a second job.
        </h2>
      </Reveal>
      <ul className="marketing-problem-list mt-10 divide-y divide-border/80">
        {pains.map((pain, index) => (
          <li key={pain.title} className="py-6 first:pt-0 last:pb-0">
            <Reveal delay={120 + index * 100}>
              <h3 className="text-sm font-medium text-foreground">
                {pain.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pain.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
