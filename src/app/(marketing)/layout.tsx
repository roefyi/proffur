import { Reveal } from "@/components/marketing/reveal";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function MarketingLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="pointer-events-none fixed inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-3xl items-center px-6 py-6 sm:py-8">
          <Reveal delay={0}>
            <span className="pointer-events-auto text-sm font-medium tracking-tight text-foreground/80">
              Cifon
            </span>
          </Reveal>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
