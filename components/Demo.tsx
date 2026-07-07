import Link from "next/link";

export default function Demo() {
  return (
    <section
      id="demo"
      className="border-y border-border bg-ivory-card px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          See it in action
        </h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          A lead being triaged, priced, and drafted — start to finish.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/reply-drafted.png"
            alt="LeadFlow drafting a ready-to-send reply next to the original inquiry"
            className="w-full"
          />
        </div>
        <Link
          href="/lead-conversion-automation"
          className="mt-6 inline-flex items-center gap-1 font-medium text-navy hover:text-navy-dark"
        >
          See the full flow →
        </Link>
      </div>
    </section>
  );
}
