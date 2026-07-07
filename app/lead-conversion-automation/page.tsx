import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lead Conversion Automation — LeadFlow",
  description:
    "How LeadFlow triages, prices, and drafts replies to your inbound leads — with you approving every message before it sends.",
};

const steps = [
  {
    n: "01",
    title: "Leads come in the way they already do.",
    body: "Website form, forwarded email, DM — no new tools to learn. Every inquiry lands in one place, in the order it arrives, so nothing sits buried in an inbox.",
    image: "",
    alt: "List of incoming leads, each showing priority, estimated price, and status",
  },
  {
    n: "02",
    title: "AI reads and prepares each one.",
    body: "Estimated price based on your rates, missing info flagged, priority ranked, and a ready-to-send reply drafted in your voice — with the original inquiry kept alongside it so you can check the draft against what the customer actually asked.",
    image: "/images/reply-drafted.png",
    alt: "A drafted reply shown next to the customer's original inquiry, with estimated price and missing information flagged",
  },
  {
    n: "03",
    title: "You review and send.",
    body: "Nothing reaches a customer without your approval. Edit the price, tweak the tone, or send as-is — no risk of the AI quoting the wrong number or sending an off-tone message under your name.",
    image: "",
    alt: "Lead detail view with priority, status, and approval actions",
  },
];

function StepImage({ image, alt }: { image: string; alt: string }) {
  if (!image) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-ink/20 bg-ivory-card">
        <span className="text-sm text-ink/40">Screenshot pending</span>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} className="w-full" />
    </div>
  );
}

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

        <section className="mx-auto max-w-4xl space-y-20 px-6 py-12">
          {steps.map((s) => (
            <div key={s.n}>
              <StepImage image={s.image} alt={s.alt} />
              <div className="mt-6">
                <span className="font-serif text-2xl text-navy">{s.n}</span>
                <h2 className="mt-2 text-xl font-semibold leading-snug">
                  {s.title}
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink/70">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
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
            <StepImage
              image="/images/insights.png"
              alt="Insights dashboard showing lead volume, priority distribution, and response time"
            />
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
