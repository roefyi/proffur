/** Local night window when the marketing site uses dark theme (24h clock). */
export const NIGHT_THEME_START_HOUR = 19; // 7:00 PM
export const NIGHT_THEME_END_HOUR = 7; // 7:00 AM

export function isNightThemeHours(date = new Date()): boolean {
  const hour = date.getHours();
  return hour >= NIGHT_THEME_START_HOUR || hour < NIGHT_THEME_END_HOUR;
}

export function nightThemeInlineScript(): string {
  return `(function(){try{var h=new Date().getHours();if(h>=${NIGHT_THEME_START_HOUR}||h<${NIGHT_THEME_END_HOUR})document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");}catch(e){}})();`;
}
