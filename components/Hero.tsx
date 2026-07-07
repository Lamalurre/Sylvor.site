import { Sparkles, Tag, PenLine, CheckCircle2 } from "lucide-react";

const chips = [
  { label: "Priced", icon: Tag, className: "left-2 top-6 -rotate-6 sm:left-4 sm:top-10" },
  { label: "Drafted", icon: PenLine, className: "right-0 top-0 rotate-6 sm:right-2 sm:top-4" },
  { label: "Approved", icon: CheckCircle2, className: "bottom-2 left-1/2 -translate-x-1/2 rotate-3" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 pt-16 text-center sm:pt-20">
      <div className="relative mx-auto mb-6 flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60">
        <div
          className="pulse-glow absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,108,247,0.35), rgba(74,108,247,0.08) 55%, transparent 75%)",
            filter: "blur(18px)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-6 rounded-full border border-navy/30" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-navy/40 bg-ivory-card text-navy shadow-[0_0_30px_-4px_rgba(74,108,247,0.6)]">
            <Sparkles size={30} strokeWidth={1.5} />
          </span>
        </div>
        {chips.map((c) => {
          const Icon = c.icon;
          return (
            <span
              key={c.label}
              className={`absolute inline-flex items-center gap-1.5 rounded-full border border-border bg-ivory-card px-3 py-1.5 text-xs font-medium text-ink/80 shadow-lg ${c.className}`}
            >
              <Icon size={13} strokeWidth={1.75} className="text-navy" />
              {c.label}
            </span>
          );
        })}
      </div>

      <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
        Stop losing leads to slow replies.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">
        LeadFlow reads your incoming inquiries, estimates pricing, flags
        what&apos;s missing, and drafts a ready-to-send reply — you stay in
        control of every message that goes out.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#demo"
          className="w-full rounded-full bg-navy px-7 py-3.5 text-base font-medium text-white shadow-[0_0_25px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark sm:w-auto"
        >
          See how it works
        </a>
        <a
          href="#contact"
          className="w-full rounded-full border border-ink/20 px-7 py-3.5 text-base font-medium text-ink transition hover:border-ink/40 hover:bg-ink/5 sm:w-auto"
        >
          Book a free call
        </a>
      </div>
    </section>
  );
}
