import type { Metadata } from "next";
import Link from "next/link";
import { Inbox, Sparkles, PenLine, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lead Conversion Automation — LeadFlow",
  description:
    "How LeadFlow triages, prices, and drafts replies to your inbound leads — with you approving every message before it sends.",
};

const steps = [
  {
    icon: Inbox,
    title: "Leads come in the way they already do.",
    body: "Website form, forwarded email, DM — no new tools to learn. Every inquiry lands in one place, in the order it arrives, so nothing sits buried in an inbox.",
    image: "/images/steps/step-lead-in.png",
    alt: "A lead card showing name, inquiry summary, priority, and estimated price",
    rotate: -3,
  },
  {
    icon: Sparkles,
    title: "AI reads and prepares each one.",
    body: "Estimated price based on your rates, and priority ranked so the urgent ones surface first.",
    image: "/images/steps/step-priority-price.png",
    alt: "Priority badge and estimated price panel for a lead",
    rotate: 2,
  },
  {
    icon: PenLine,
    title: "A reply gets drafted in your voice.",
    body: "Missing info flagged, and a ready-to-send reply drafted from the original inquiry — so you're editing, not writing from scratch.",
    image: "/images/steps/step-reply-draft.png",
    alt: "A drafted reply shown in a text box, ready to copy and send",
    rotate: -2,
  },
  {
    icon: CheckCircle2,
    title: "You review and send.",
    body: "Nothing reaches a customer without your approval. Edit the price, tweak the tone, or send as-is — no risk of the AI quoting the wrong number or sending an off-tone message under your name.",
    image: "/images/steps/step-approve.png",
    alt: "Approval buttons to move a lead forward, including Mark as won",
    rotate: 3,
  },
];

const faqs = [
  {
    q: "Do I need to switch systems to use LeadFlow?",
    a: "No. LeadFlow connects to your existing intake — website form or forwarded email — so leads keep arriving exactly the way they already do. There's nothing new for you or your team to learn.",
  },
  {
    q: "Does the AI send messages automatically?",
    a: "No. Every reply is drafted for you, but nothing goes out until you approve it. You're always the last check before a message reaches a customer.",
  },
  {
    q: "What does it cost?",
    a: (
      <>
        A one-time $499 setup, then $59/mo for up to 100 leads and $79/mo
        above that — no long-term contract. See the full breakdown in{" "}
        <Link href="/#pricing" className="text-navy underline">
          Pricing
        </Link>
        .
      </>
    ),
  },
  {
    q: "How long does it take to get started?",
    a: "Most setups are live within a few days of connecting your existing intake — no migration and no downtime for your current process.",
  },
  {
    q: "Does this work for my type of business?",
    a: "It's built for service businesses with repeat inbound inquiries — cleaning services, trades, agencies, and local service providers. If that sounds like you, it's a fit.",
  },
];

export default function LeadConversionAutomation() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pb-8 pt-16">
          <Link
            href="/"
            className="text-sm font-medium text-ink/50 hover:text-ink"
          >
            ← Back to LeadFlow
          </Link>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-navy">
            Flagship
          </span>
          <h1 className="mt-2 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Lead Conversion Automation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            Every inbound inquiry read, priced against your rates, checked
            for missing details, ranked by priority, and turned into a
            ready-to-send reply — with you approving the final message
            before it ever reaches a customer.
          </p>
        </section>

        <section className="mx-auto max-w-5xl space-y-28 px-6 py-16 sm:space-y-36">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const imageFirst = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16"
              >
                <div
                  className={
                    imageFirst ? "sm:order-2" : "sm:order-1"
                  }
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold leading-snug">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-md leading-relaxed text-ink/70">
                    {s.body}
                  </p>
                </div>
                <div
                  className={`flex justify-center ${
                    imageFirst ? "sm:order-1" : "sm:order-2"
                  }`}
                >
                  <div
                    className="w-full max-w-md rounded-2xl border border-border bg-white p-3 shadow-xl"
                    style={{ transform: `rotate(${s.rotate}deg)` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-navy/30 bg-navy/[0.06] px-8 py-6">
            <p className="text-center font-serif text-lg italic sm:text-xl">
              Human-approved by design — you&apos;re always the last check
              before anything is sent.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <div>
              <h3 className="font-serif text-2xl font-medium">
                Track performance at a glance
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70">
                A running view of active leads, response times, and pipeline
                value — so you always know what&apos;s waiting and what
                it&apos;s worth.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/insights.png"
                alt="Insights dashboard showing lead volume, priority distribution, and response time"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-ivory-card">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none">
                  {f.q}
                  <span className="text-ink/40 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Ready to stop losing leads to slow replies?
          </h2>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-full bg-navy px-7 py-3.5 text-base font-medium text-white transition hover:bg-navy-dark"
          >
            Book a free call
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
