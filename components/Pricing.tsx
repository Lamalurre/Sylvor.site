const plans = [
  {
    tier: "Setup",
    price: "$499",
    period: "one-time",
    desc: "Includes build and integration with your existing intake (form/email forwarding).",
    rotate: -2,
    highlight: false,
  },
  {
    tier: "Standard",
    price: "$59",
    suffix: "/mo",
    period: "up to 100 leads/month",
    desc: "Covers API usage and minor ongoing support — small tweaks and bug fixes. New features quoted separately.",
    rotate: 0,
    highlight: true,
  },
  {
    tier: "Growth",
    price: "$79",
    suffix: "/mo",
    period: "above 100 leads/month",
    desc: "Same coverage as Standard, scaled for higher lead volume.",
    rotate: 2,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Pricing
      </h2>
      <div className="relative mt-16">
        <svg
          className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 sm:block"
          height="2"
          aria-hidden="true"
        >
          <line
            x1="16%"
            x2="84%"
            y1="1"
            y2="1"
            stroke="var(--color-navy)"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>
        <div className="relative grid gap-8 pt-4 sm:grid-cols-3">
          {plans.map((p) => (
            <div key={p.tier} className="relative">
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-amber px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[0_0_16px_-2px_rgba(217,146,42,0.7)]">
                  Most popular
                </span>
              )}
              <div
                className={`rounded-2xl border p-8 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] ${
                  p.highlight
                    ? "border-navy bg-ivory-card shadow-[0_0_35px_-8px_rgba(74,108,247,0.45)]"
                    : "border-border bg-ivory-card"
                }`}
                style={{ transform: `rotate(${p.rotate}deg)` }}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    p.highlight ? "text-navy" : "text-ink/50"
                  }`}
                >
                  {p.tier}
                </span>
                <p className="mt-3 font-serif text-4xl font-medium">
                  {p.price}
                  {p.suffix && (
                    <span className="text-xl text-ink/50">{p.suffix}</span>
                  )}
                </p>
                <p className="mt-1 text-sm text-ink/50">{p.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-sm text-ink/50">
        No long-term contract. Cancel anytime.
      </p>
    </section>
  );
}
