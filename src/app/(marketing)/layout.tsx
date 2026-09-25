import Image from "next/image";

import { MarketingSiteNav } from "@/components/marketing/marketing-site-nav";
import { Reveal } from "@/components/marketing/reveal";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function MarketingLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="fixed inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-6 py-6 sm:py-8">
          <Reveal delay={0}>
            <a href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="proffur"
                width={329}
                height={130}
                priority
                className="dark:invert"
                style={{ height: 28, width: "auto" }}
              />
            </a>
          </Reveal>
          <MarketingSiteNav />
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
