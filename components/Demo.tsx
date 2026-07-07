import Link from "next/link";
import StepIllustration from "./StepIllustration";

export default function Demo() {
  return (
    <section
      id="demo"
      className="border-y border-border bg-ivory-card px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              See it in action
            </h2>
            <p className="mt-3 max-w-md text-ink/70">
              A lead being triaged, priced, and drafted — start to finish.
              Every step is reviewed by you before anything reaches a
              customer.
            </p>
            <Link
              href="/lead-conversion-automation"
              className="mt-6 inline-flex items-center gap-1 font-medium text-navy hover:text-navy-dark"
            >
              See the full flow →
            </Link>
          </div>
          <div className="flex justify-center py-4">
            <StepIllustration variant="draft" rotate={-2} />
          </div>
        </div>
      </div>
    </section>
  );
}
