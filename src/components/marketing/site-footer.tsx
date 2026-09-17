import { Reveal } from "@/components/marketing/reveal";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@cifon.com";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-10">
      <Reveal delay={0}>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {year} Cifon</p>
          <a
            href={`mailto:${contactEmail}`}
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            {contactEmail}
          </a>
        </div>
      </Reveal>
    </footer>
  );
}
