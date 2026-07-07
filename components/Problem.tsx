import { RevealGroup, RevealItem } from "./motion/RevealGroup";
import Reveal from "./motion/Reveal";

const problems = [
  "Inquiries sit unanswered for hours or days",
  "Every lead gets a generic response, or none",
  "No way to tell which leads are urgent or high-value",
  "Follow-ups get forgotten",
];

export default function Problem() {
  return (
    <section className="border-y border-border bg-ivory-card">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <RevealGroup className="grid gap-6 sm:grid-cols-2">
          {problems.map((p) => (
            <RevealItem key={p} className="flex gap-3 text-lg leading-snug">
              <span className="mt-1 text-navy">—</span>
              <span>{p}</span>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.3}>
          <p className="mt-12 font-serif text-xl italic leading-relaxed text-ink/80 sm:text-2xl">
            Every unanswered inquiry is a customer who books with whoever
            replied first — usually a competitor.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
