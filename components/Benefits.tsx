import { ShieldCheck, Zap, Languages, Tag } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Human-approved by design",
    desc: "Every reply is drafted, never sent, until you say so.",
  },
  {
    icon: Zap,
    title: "No new tools to learn",
    desc: "Plugs into the form or inbox you already use.",
  },
  {
    icon: Languages,
    title: "Responds in your customer's language",
    desc: "Drafts match the tone and language of the original inquiry.",
  },
  {
    icon: Tag,
    title: "Priced from your own rate list",
    desc: "Estimates are calculated from rates you set — not guessed.",
  },
];

export default function Benefits() {
  return (
    <section className="border-y border-border bg-ivory-card px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          Why LeadFlow
        </h2>
        <div className="relative mt-16">
          <svg
            className="pointer-events-none absolute left-0 top-6 hidden w-full sm:block"
            height="2"
            aria-hidden="true"
          >
            <line
              x1="10%"
              x2="90%"
              y1="1"
              y2="1"
              stroke="var(--color-navy)"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>
          <div className="relative grid gap-10 sm:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex flex-col items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/30 bg-ivory text-navy shadow-[0_0_18px_-4px_rgba(74,108,247,0.5)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-semibold leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
