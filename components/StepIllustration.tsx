import { Inbox, Tag, PenLine, CheckCircle2, BarChart3, type LucideIcon } from "lucide-react";

type Variant = "inbox" | "price" | "draft" | "approve" | "insights";

const ICONS: Record<Variant, LucideIcon> = {
  inbox: Inbox,
  price: Tag,
  draft: PenLine,
  approve: CheckCircle2,
  insights: BarChart3,
};

const ACCENTS: Record<Variant, { text: string; bg: string; glow: string; border: string }> = {
  inbox: {
    text: "text-navy",
    bg: "bg-navy",
    glow: "0 0 28px -6px rgba(74,108,247,0.55)",
    border: "border-navy/30",
  },
  price: {
    text: "text-amber",
    bg: "bg-amber",
    glow: "0 0 28px -6px rgba(217,146,42,0.55)",
    border: "border-amber/30",
  },
  draft: {
    text: "text-navy",
    bg: "bg-navy",
    glow: "0 0 28px -6px rgba(74,108,247,0.55)",
    border: "border-navy/30",
  },
  approve: {
    text: "text-green",
    bg: "bg-green",
    glow: "0 0 28px -6px rgba(63,163,107,0.55)",
    border: "border-green/30",
  },
  insights: {
    text: "text-navy",
    bg: "bg-navy",
    glow: "0 0 28px -6px rgba(74,108,247,0.55)",
    border: "border-navy/30",
  },
};

function InboxBody() {
  const rows = [
    { w: "70%", urgent: true },
    { w: "55%", urgent: false },
    { w: "62%", urgent: false },
  ];
  return (
    <div className="space-y-3">
      {rows.map((r, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
            r.urgent ? "border-amber/40 bg-amber/[0.07]" : "border-border bg-white/[0.02]"
          }`}
        >
          <span className="h-6 w-6 shrink-0 rounded-full bg-white/10" />
          <span className="flex-1 space-y-1.5">
            <span className="block h-2 rounded-full bg-white/15" style={{ width: r.w }} />
            <span className="block h-1.5 w-1/3 rounded-full bg-white/8" />
          </span>
          {r.urgent && (
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber shadow-[0_0_6px_1px_rgba(217,146,42,0.8)]" />
          )}
        </div>
      ))}
    </div>
  );
}

function PriceBody() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-2">
      <span
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber/30 bg-amber/[0.08] text-amber"
        style={{ boxShadow: ACCENTS.price.glow }}
      >
        <Tag size={28} strokeWidth={1.5} />
      </span>
      <div className="flex w-full items-end justify-center gap-2">
        <span className="h-10 w-3 rounded-full bg-amber/70" />
        <span className="h-16 w-3 rounded-full bg-amber" />
        <span className="h-6 w-3 rounded-full bg-white/12" />
        <span className="h-8 w-3 rounded-full bg-white/12" />
      </div>
    </div>
  );
}

function DraftBody() {
  const lines = ["92%", "78%", "85%", "40%"];
  return (
    <div className="space-y-2.5 py-1">
      {lines.map((w, i) => (
        <span
          key={i}
          className="block h-2.5 rounded-full bg-white/12"
          style={{ width: w }}
        />
      ))}
      <span className="mt-1 inline-block h-4 w-0.5 animate-pulse bg-navy align-middle" />
    </div>
  );
}

function ApproveBody() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-3">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-green/25" />
        <span className="absolute inset-2 rounded-full border border-green/35" />
        <span
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-green text-white"
          style={{ boxShadow: ACCENTS.approve.glow }}
        >
          <CheckCircle2 size={26} strokeWidth={1.75} />
        </span>
      </div>
      <span className="rounded-full border border-green/30 bg-green/[0.08] px-3 py-1 text-xs font-medium text-green">
        Sent
      </span>
    </div>
  );
}

function InsightsBody() {
  const bars = [30, 60, 42, 78, 50];
  return (
    <div className="flex flex-col gap-4 py-1">
      <div className="flex h-20 items-end justify-between gap-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-sm ${
              i === 3 ? "bg-navy" : "bg-white/12"
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="h-2 w-16 rounded-full bg-white/10" />
        <span className="text-xs font-medium text-navy">100%</span>
      </div>
    </div>
  );
}

const BODIES: Record<Variant, () => React.ReactElement> = {
  inbox: InboxBody,
  price: PriceBody,
  draft: DraftBody,
  approve: ApproveBody,
  insights: InsightsBody,
};

export default function StepIllustration({
  variant,
  rotate = 0,
  className = "",
}: {
  variant: Variant;
  rotate?: number;
  className?: string;
}) {
  const Icon = ICONS[variant];
  const accent = ACCENTS[variant];
  const Body = BODIES[variant];

  return (
    <div className={`relative w-full max-w-sm ${className}`}>
      <div
        className={`rounded-2xl border ${accent.border} bg-ivory-card p-6 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)]`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <Body />
      </div>
      <span
        className={`absolute -top-4 -right-4 flex h-11 w-11 items-center justify-center rounded-full ${accent.bg} text-white ring-4 ring-ivory`}
        style={{ boxShadow: accent.glow, transform: `rotate(${rotate}deg)` }}
      >
        <Icon size={20} strokeWidth={1.75} />
      </span>
    </div>
  );
}
