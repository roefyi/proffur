"use client";

import { Reveal } from "@/components/marketing/reveal";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const steps = [
  {
    id: "watch",
    title: "Matches show up automatically",
    description:
      "New postings from the city, county, schools, and state, filtered to your trade, all in one place. No more checking six sites by hand.",
  },
  {
    id: "qualify",
    title: "You get a straight answer if you qualify",
    description:
      "Licenses, insurance, bonding, certifications: checked against the requirements before you spend an afternoon reading a PDF you can't win.",
  },
  {
    id: "remind",
    title: "We remind you before it's too late",
    description:
      "Pre-bid meetings, questions due, submission day: while there's still time to actually do something about it.",
  },
] as const;

const CYCLE_MS = 7600;

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  function select(index: number) {
    setActive(index);
    setPaused(true);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % steps.length
        : (index - 1 + steps.length) % steps.length;
    select(next);
    document.getElementById(`how-step-${steps[next].id}`)?.focus();
  }

  return (
    <section
      className="scroll-mt-24"
      aria-labelledby="how-it-works-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <Reveal delay={0}>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          How it works
        </p>
        <h2
          id="how-it-works-heading"
          className="mt-3 max-w-md font-display text-2xl tracking-tight text-balance text-foreground sm:text-3xl"
        >
          We watch the boards. You hear about the ones worth your time.
        </h2>
      </Reveal>

      <div className="mt-10 grid items-center gap-8 sm:mt-12 sm:grid-cols-[minmax(0,1fr)_13rem] sm:gap-10">
        <div
          role="tablist"
          aria-label="How proffur works"
          className="divide-y divide-border/80"
        >
          {steps.map((step, index) => {
            const selected = index === active;
            return (
              <button
                key={step.id}
                id={`how-step-${step.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="how-it-works-figure"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="group flex w-full gap-4 py-5 text-left first:pt-0 last:pb-0 focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "mt-0.5 w-10 shrink-0 font-display leading-none tabular-nums transition-[color,text-shadow] duration-500 ease-out",
                    selected
                      ? "how-step-number-lit text-2xl"
                      : "text-xl text-muted-foreground/55",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span
                    className={cn(
                      "block font-medium transition-[color,font-size,text-shadow] duration-500 ease-out",
                      selected
                        ? "how-step-title-lit text-base"
                        : "text-sm text-foreground/70",
                    )}
                  >
                    {step.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <Reveal delay={160}>
          <figure
            id="how-it-works-figure"
            role="tabpanel"
            aria-live="polite"
            aria-label={steps[active].title}
            className="how-figure relative mx-auto flex aspect-square w-full max-w-[13rem] items-center justify-center sm:mx-0"
          >
            {active === 0 ? <WatchScene key={active} /> : null}
            {active === 1 ? <QualifyScene key={active} /> : null}
            {active === 2 ? <RemindScene key={active} /> : null}
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function WatchScene() {
  const boards = [
    { x: 22, y: 18, highlight: false },
    { x: 108, y: 14, highlight: false },
    { x: 112, y: 90, highlight: true },
    { x: 26, y: 96, highlight: false },
  ];
  const center = { x: 80, y: 58 };

  return (
    <div className="how-scene-active w-full">
      <svg
        viewBox="0 0 160 130"
        className="h-auto w-full text-border"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {boards.map((board, index) => (
          <g key={index}>
            <line
              x1={board.x + 14}
              y1={board.y + 16}
              x2={center.x}
              y2={center.y}
              className={cn(
                "how-draw stroke-current",
                board.highlight ? "opacity-90" : "opacity-40",
              )}
              strokeWidth="1"
              pathLength={1}
              style={{ animationDelay: `${160 + index * 120}ms` }}
            />
            <rect
              x={board.x}
              y={board.y}
              width="28"
              height="34"
              rx="6"
              className={cn(
                "stroke-current",
                board.highlight
                  ? "how-match-glow fill-primary/10 stroke-primary/50"
                  : "fill-none stroke-current opacity-80",
              )}
              strokeWidth="1"
            />
            <line
              x1={board.x + 6}
              y1={board.y + 12}
              x2={board.x + 22}
              y2={board.y + 12}
              className="stroke-muted-foreground/50"
              strokeWidth="1"
            />
            <line
              x1={board.x + 6}
              y1={board.y + 20}
              x2={board.x + 18}
              y2={board.y + 20}
              className="stroke-muted-foreground/35"
              strokeWidth="1"
            />
          </g>
        ))}
        <circle
          r="3"
          className="fill-primary how-signal-travel"
          style={{
            offsetPath: `path('M ${boards[2].x + 14} ${boards[2].y + 16} L ${center.x} ${center.y}')`,
          }}
        />
        <circle
          cx={center.x}
          cy={center.y}
          r="18"
          className="how-core-ring fill-primary/12 stroke-primary/50"
          strokeWidth="1.5"
        />
        <circle cx={center.x} cy={center.y} r="5" className="fill-primary" />
      </svg>
    </div>
  );
}

function QualifyScene() {
  const rows = [
    { complete: true, fill: "100%" },
    { complete: true, fill: "100%" },
    { complete: false, fill: "62%" },
  ];

  return (
    <div className="how-scene-active w-full">
      <ul className="mx-auto w-full max-w-[10.5rem] space-y-5">
        {rows.map((row, index) => (
          <li
            key={index}
            className="how-pop flex items-center gap-3"
            style={{ animationDelay: `${120 + index * 190}ms` }}
          >
            <span
              className={cn(
                "size-2 shrink-0 rounded-full",
                row.complete
                  ? "bg-muted-foreground/45"
                  : "how-missing-glow bg-primary",
              )}
            />
            <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-border">
              <span
                className={cn(
                  "how-bar absolute inset-y-0 left-0 rounded-full",
                  row.complete ? "bg-muted-foreground/55" : "how-missing-bar bg-primary",
                )}
                style={{
                  width: row.fill,
                  animationDelay: `${240 + index * 190}ms`,
                }}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RemindScene() {
  return (
    <div className="how-scene-active w-full">
      <svg
        viewBox="0 0 160 72"
        className="h-auto w-full text-border"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <line
          x1="8"
          y1="36"
          x2="152"
          y2="36"
          className="how-draw stroke-current"
          strokeWidth="1"
          pathLength={1}
          style={{ animationDelay: "110ms" }}
        />
        {[8, 44, 80, 116, 152].map((x) => (
          <line
            key={x}
            x1={x}
            y1="32"
            x2={x}
            y2="40"
            className="stroke-current opacity-70"
            strokeWidth="1"
          />
        ))}
        <circle cx="44" cy="36" r="3" className="fill-muted-foreground/40" />
        <circle
          cx="116"
          cy="36"
          r="4"
          className="fill-background stroke-muted-foreground/70"
          strokeWidth="1"
        />
        <g className="how-remind-marker">
          <circle
            cx="80"
            cy="36"
            r="11"
            className="how-core-ring fill-primary/10 stroke-primary/50"
            strokeWidth="1.5"
          />
          <circle cx="80" cy="36" r="3.5" className="fill-primary" />
        </g>
      </svg>
    </div>
  );
}
