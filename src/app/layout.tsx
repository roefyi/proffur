import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import { SaasProvider } from "@/components/saas-provider";
import { ThemeByTime } from "@/components/theme-by-time";
import { nightThemeInlineScript } from "@/lib/theme-schedule";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Cifon | Find public contracts you can win",
  description:
    "Cifon helps small trade contractors discover and qualify for government bids without checking a dozen websites every day. Join the waitlist.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: nightThemeInlineScript() }} />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeByTime />
        <SaasProvider>{children}</SaasProvider>
      </body>
    </html>
  );
}
