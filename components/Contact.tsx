"use client";

import { useState } from "react";
import Reveal from "./motion/Reveal";

const CONTACT_EMAIL = "Hello.leadflow1@outlook.com";

const CHANNEL_OPTIONS = [
  { value: "E-post", label: "E-post" },
  { value: "Webbformulär", label: "Webbformulär" },
  { value: "Instagram/Facebook DM", label: "Instagram/Facebook DM" },
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-navy";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [otherChannel, setOtherChannel] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const channels = fd.getAll("channels").map(String);
    const otherChannelText = String(fd.get("channelsOther") || "").trim();
    if (otherChannelText) channels.push(otherChannelText);

    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      companyName: String(fd.get("companyName") || ""),
      businessType: String(fd.get("businessType") || ""),
      channels: channels.join(", "),
      pricingInfo: String(fd.get("pricingInfo") || ""),
      notifyChannel: String(fd.get("notifyChannel") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setOtherChannel(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kom-igang" className="mx-auto max-w-3xl px-6 pb-24 pt-12">
      <Reveal className="relative">
        <div
          className="absolute inset-0 rounded-2xl border border-navy/20 bg-ivory-card/60"
          style={{ transform: "rotate(-2deg)" }}
          aria-hidden="true"
        />
        <form
          onSubmit={handleSubmit}
          className="relative space-y-5 rounded-2xl border border-border bg-ivory-card p-8 shadow-[0_25px_50px_-25px_rgba(0,0,0,0.7)]"
        >
          <div>
            <h3 className="font-serif text-2xl font-medium">Kom igång</h3>
            <p className="mt-1 text-sm text-ink/60">
              Fyll i dina uppgifter så sätter vi upp Sylvor åt dig — inga
              uppföljningsmejl behövs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium">
                Företagsnamn
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Namn
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                E-post
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Telefonnummer
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium">
              Yrkeskategori
            </label>
            <select
              id="businessType"
              name="businessType"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Välj kategori
              </option>
              <option value="Bygg">Bygg</option>
              <option value="VVS">VVS</option>
              <option value="El">El</option>
              <option value="Målare">Målare</option>
              <option value="Snickare">Snickare</option>
              <option value="Annat">Annat</option>
            </select>
          </div>

          <div>
            <span className="block text-sm font-medium">
              Hur tar ni emot kundförfrågningar idag?
            </span>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
              {CHANNEL_OPTIONS.map((c) => (
                <label
                  key={c.value}
                  className="flex items-center gap-2 text-sm text-ink/80"
                >
                  <input
                    type="checkbox"
                    name="channels"
                    value={c.value}
                    className="h-4 w-4 rounded border-border accent-navy"
                  />
                  {c.label}
                </label>
              ))}
              <label className="flex items-center gap-2 text-sm text-ink/80">
                <input
                  type="checkbox"
                  checked={otherChannel}
                  onChange={(e) => setOtherChannel(e.target.checked)}
                  className="h-4 w-4 rounded border-border accent-navy"
                />
                Annat
              </label>
            </div>
            {otherChannel && (
              <input
                type="text"
                name="channelsOther"
                placeholder="Beskriv hur ni tar emot förfrågningar"
                className={inputClass}
              />
            )}
          </div>

          <div>
            <label htmlFor="pricingInfo" className="block text-sm font-medium">
              Er prissättning/prislista
            </label>
            <textarea
              id="pricingInfo"
              name="pricingInfo"
              required
              rows={3}
              placeholder="Beskriv hur ni prissätter era jobb, eller klistra in er prislista"
              className={inputClass}
            />
          </div>

          <div>
            <span className="block text-sm font-medium">
              Föredragen notis-kanal
            </span>
            <div className="mt-2 flex gap-6">
              <label className="flex items-center gap-2 text-sm text-ink/80">
                <input
                  type="radio"
                  name="notifyChannel"
                  value="SMS"
                  required
                  className="h-4 w-4 border-border accent-navy"
                />
                SMS
              </label>
              <label className="flex items-center gap-2 text-sm text-ink/80">
                <input
                  type="radio"
                  name="notifyChannel"
                  value="E-post"
                  required
                  className="h-4 w-4 border-border accent-navy"
                />
                E-post
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Övrigt (valfritt)
            </label>
            <textarea id="message" name="message" rows={3} className={inputClass} />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-navy px-7 py-3.5 text-base font-medium text-white shadow-[0_0_25px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark disabled:opacity-60"
          >
            {status === "submitting" ? "Skickar..." : "Kom igång"}
          </button>
          {status === "success" && (
            <p className="text-center text-sm text-green">
              Tack! Du är igång inom 24 timmar.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-700">
              Något gick fel. Försök igen eller mejla oss på{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}
