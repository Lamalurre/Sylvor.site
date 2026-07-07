import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight">
          LeadFlow
        </Link>
        <nav className="hidden gap-8 text-sm text-ink/70 sm:flex">
          <Link href="/#how-it-works" className="hover:text-ink">
            How it works
          </Link>
          <Link href="/#pricing" className="hover:text-ink">
            Pricing
          </Link>
          <Link href="/#contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>
        <Link
          href="/#contact"
          className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-dark"
        >
          Book a free call
        </Link>
      </div>
    </header>
  );
}
