const links = [
  { href: "#problem-heading", label: "The problem" },
  { href: "#how-it-works-heading", label: "How it works" },
] as const;

export function MarketingSiteNav() {
  return (
    <nav
      aria-label="Page sections"
      className="rounded-full border border-border/80 bg-background/80 p-1 shadow-sm backdrop-blur-md dark:bg-background/60"
    >
      <ul className="flex items-center">
        {links.map((link, index) => (
          <li key={link.href} className="flex items-center">
            {index > 0 ? (
              <span
                className="mx-0.5 h-3 w-px shrink-0 bg-border/90"
                aria-hidden
              />
            ) : null}
            <a
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
