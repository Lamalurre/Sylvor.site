import { Clock, Users, Sparkles } from "lucide-react";
import Reveal from "./motion/Reveal";
import { RevealGroup, RevealItem } from "./motion/RevealGroup";

const options = [
  {
    icon: Clock,
    title: "Manuellt arbete",
    price: "Din tid",
    desc: "Obetald, men inte gratis — varje minut du lägger på att svara på leads är tid du inte lägger på jobbet.",
    highlight: false,
    rotate: -2,
  },
  {
    icon: Users,
    title: "Administrativ hjälp",
    price: "~15 000–25 000 kr/mån",
    desc: "En deltidsanställd som svarar åt dig — ungefärlig kostnad, kräver rekrytering och upplärning.",
    highlight: false,
    rotate: 2,
  },
  {
    icon: Sparkles,
    title: "Sylvor",
    price: "Från 449 kr/mån",
    desc: "Svarar direkt, dygnet runt, på alla leads — du godkänner bara det som faktiskt ska skickas.",
    highlight: true,
    rotate: 0,
  },
];

export default function CostComparison() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Vad kostar det att svara långsamt?
      </h2>
      <p className="mt-3 max-w-2xl text-ink/60">
        Tre sätt att hantera inkommande leads — och vad de faktiskt kostar.
      </p>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
        {options.map((o) => {
          const Icon = o.icon;
          return (
            <RevealItem key={o.title}>
              <div
                className={`h-full rounded-2xl border p-7 ${
                  o.highlight
                    ? "border-navy bg-ivory-card shadow-[0_0_35px_-8px_rgba(74,108,247,0.45)]"
                    : "border-border bg-ivory-card"
                }`}
                style={{ transform: `rotate(${o.rotate}deg)` }}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                    o.highlight
                      ? "border-navy/40 bg-navy text-white"
                      : "border-border bg-ivory text-ink/50"
                  }`}
                  style={
                    o.highlight
                      ? { boxShadow: "0 0 24px -4px rgba(74,108,247,0.7)" }
                      : undefined
                  }
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-semibold">{o.title}</h3>
                <p
                  className={`mt-2 font-serif text-2xl font-medium ${
                    o.highlight ? "text-navy" : ""
                  }`}
                >
                  {o.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {o.desc}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.3}>
        <p className="mt-10 text-center font-serif text-xl italic leading-relaxed text-ink/80">
          Sylvor ersätter inte omdöme. Det ersätter väntetiden.
        </p>
      </Reveal>
    </section>
  );
}
