"use client";

import { useEffect } from "react";

import { isNightThemeHours } from "@/lib/theme-schedule";

function applyNightTheme() {
  document.documentElement.classList.toggle("dark", isNightThemeHours());
}

export function ThemeByTime() {
  useEffect(() => {
    applyNightTheme();
    const interval = window.setInterval(applyNightTheme, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return null;
}
