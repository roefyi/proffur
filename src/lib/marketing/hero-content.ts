export type HeroVariant = {
  id: string;
  headline: string;
  subhead: string;
};

/** Live hero: headline option 1 + subhead option 3. */
export const ACTIVE_HERO: HeroVariant = {
  id: "qualify-deadlines",
  headline: "Find the contracts your business can actually win.",
  subhead:
    "We track government bids, match them to your licenses and insurance, and highlight the ones you're eligible to win.",
};

/** Alternate pairs kept for copy tests; swap into `ACTIVE_HERO` if needed. */
export const HERO_VARIANTS: HeroVariant[] = [
  ACTIVE_HERO,
  {
    id: "one-place",
    headline: "Stop checking a dozen websites for government work.",
    subhead:
      "City, county, schools, universities, and state postings land in one place. Proffur flags what fits your business and what you need to submit on time.",
  },
  {
    id: "paper-chase",
    headline: "Public contracts, without the daily paper chase.",
    subhead:
      "Proffur will watch public bid boards for you and highlight opportunities that match your trade, licenses, and insurance, so you spend time bidding, not hunting.",
  },
];

export function getActiveHero(): HeroVariant {
  return ACTIVE_HERO;
}
