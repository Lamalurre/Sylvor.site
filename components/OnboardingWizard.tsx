"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Reveal from "./motion/Reveal";

const CONTACT_EMAIL = "Hello.leadflow1@outlook.com";

const CHANNEL_OPTIONS = ["E-post", "Webbformulär", "Instagram/Facebook DM"];

const BUSINESS_TYPES = [
  "Bygg",
  "VVS",
  "El",
  "Målare",
  "Snickare",
  "Städfirma",
  "Flyttfirma",
  "Servicebolag",
  "Klinik",
  "Jurist/advokatbyrå",
  "Konsultbolag",
  "Mäklare",
  "Bilfirma",
  "Eventbolag",
  "Annat",
];

const PLANS = [
  { value: "Bas", price: "449 kr/mån" },
  { value: "Standard", price: "799 kr/mån" },
  { value: "Firma", price: "1 499 kr/mån" },
  { value: "Bara testa", price: "7 dagar gratis, inget val ännu" },
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-navy";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  channels: string[];
  channelsOther: string;
  pricingInfo: string;
  notifyChannel: string;
  message: string;
  selectedPlan: string;
};

const EMPTY_FORM: FormState = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  businessType: "",
  channels: [],
  channelsOther: "",
  pricingInfo: "",
  notifyChannel: "",
  message: "",
  selectedPlan: "",
};

const STEP_LABELS = ["Om företaget", "Hur ni jobbar idag", "Kom igång"];

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [stepError, setStepError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleChannel(value: string) {
    setForm((f) => ({
      ...f,
      channels: f.channels.includes(value)
        ? f.channels.filter((c) => c !== value)
        : [...f.channels, value],
    }));
  }

  function goNext() {
    if (step === 1) {
      if (!form.companyName || !form.name || !form.email || !form.phone) {
        setStepError("Fyll i alla fält innan du går vidare.");
        return;
      }
    }
    if (step === 2) {
      if (
        !form.businessType ||
        (form.channels.length === 0 && !form.channelsOther) ||
        !form.pricingInfo ||
        !form.notifyChannel
      ) {
        setStepError("Fyll i alla fält innan du går vidare.");
        return;
      }
    }
    setStepError("");
    setStep((s) => Math.min(s + 1, 3));
  }

  function goBack() {
    setStepError("");
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    if (!form.selectedPlan) {
      setStepError("Välj ett paket eller testa gratis för att komma igång.");
      return;
    }
    setStepError("");
    setStatus("submitting");

    const channels = [...form.channels];
    if (form.channelsOther) channels.push(form.channelsOther);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName,
          name: form.name,
          email: form.email,
          phone: form.phone,
          businessType: form.businessType,
          channels: channels.join(", "),
          pricingInfo: form.pricingInfo,
          notifyChannel: form.notifyChannel,
          message: form.message,
          selectedPlan: form.selectedPlan,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
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
        <div className="relative space-y-6 rounded-2xl border border-border bg-ivory-card p-8 shadow-[0_25px_50px_-25px_rgba(0,0,0,0.7)]">
          {status === "success" ? (
            <div className="py-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-[0_0_24px_-4px_rgba(63,163,107,0.7)]">
                <Check size={26} strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-serif text-2xl font-medium">
                Tack! Du är igång inom 24 timmar.
              </h3>
              <p className="mt-2 text-ink/60">
                Vi hör av oss på {form.email} med nästa steg.
              </p>
            </div>
          ) : (
            <>
              <div>
                <h3 className="font-serif text-2xl font-medium">
                  Starta 7 dagar gratis
                </h3>
                <p className="mt-1 text-sm text-ink/60">
                  Tre korta steg — inga uppföljningsmejl behövs.
                </p>
              </div>

              {/* progress */}
              <div className="flex items-center gap-2">
                {STEP_LABELS.map((label, i) => {
                  const n = i + 1;
                  const done = n < step;
                  const active = n === step;
                  return (
                    <div key={label} className="flex flex-1 items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                            done
                              ? "bg-navy text-white"
                              : active
                                ? "border-2 border-navy text-navy"
                                : "border border-border text-ink/40"
                          }`}
                        >
                          {done ? <Check size={14} /> : n}
                        </span>
                        <span
                          className={`hidden text-xs font-medium sm:inline ${
                            active ? "text-ink" : "text-ink/40"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                      {n < 3 && (
                        <span
                          className={`h-px flex-1 ${done ? "bg-navy" : "bg-border"}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {step === 1 && (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="wiz-companyName" className="block text-sm font-medium">
                        Företagsnamn
                      </label>
                      <input
                        id="wiz-companyName"
                        value={form.companyName}
                        onChange={(e) => update("companyName", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="wiz-name" className="block text-sm font-medium">Namn</label>
                      <input
                        id="wiz-name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="wiz-email" className="block text-sm font-medium">
                        E-post
                      </label>
                      <input
                        id="wiz-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="wiz-phone" className="block text-sm font-medium">
                        Telefonnummer
                      </label>
                      <input
                        id="wiz-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="wiz-businessType" className="block text-sm font-medium">
                      Yrkeskategori
                    </label>
                    <select
                      id="wiz-businessType"
                      value={form.businessType}
                      onChange={(e) => update("businessType", e.target.value)}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Välj kategori
                      </option>
                      {BUSINESS_TYPES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="block text-sm font-medium">
                      Hur tar ni emot kundförfrågningar idag?
                    </span>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                      {CHANNEL_OPTIONS.map((c) => (
                        <label
                          key={c}
                          className="flex items-center gap-2 text-sm text-ink/80"
                        >
                          <input
                            type="checkbox"
                            checked={form.channels.includes(c)}
                            onChange={() => toggleChannel(c)}
                            className="h-4 w-4 rounded border-border accent-navy"
                          />
                          {c}
                        </label>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={form.channelsOther}
                      onChange={(e) => update("channelsOther", e.target.value)}
                      placeholder="Annat sätt? Beskriv här"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="wiz-pricingInfo" className="block text-sm font-medium">
                      Er prissättning/prislista
                    </label>
                    <textarea
                      id="wiz-pricingInfo"
                      value={form.pricingInfo}
                      onChange={(e) => update("pricingInfo", e.target.value)}
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
                      {["SMS", "E-post"].map((n) => (
                        <label
                          key={n}
                          className="flex items-center gap-2 text-sm text-ink/80"
                        >
                          <input
                            type="radio"
                            name="notifyChannel"
                            checked={form.notifyChannel === n}
                            onChange={() => update("notifyChannel", n)}
                            className="h-4 w-4 border-border accent-navy"
                          />
                          {n}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="wiz-message" className="block text-sm font-medium">
                      Övrigt (valfritt)
                    </label>
                    <textarea
                      id="wiz-message"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={2}
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <span className="block text-sm font-medium">
                    Välj paket eller testa gratis
                  </span>
                  {PLANS.map((p) => (
                    <label
                      key={p.value}
                      className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm transition ${
                        form.selectedPlan === p.value
                          ? "border-navy bg-navy/[0.06]"
                          : "border-border hover:border-navy/30"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="selectedPlan"
                          value={p.value}
                          checked={form.selectedPlan === p.value}
                          onChange={() => update("selectedPlan", p.value)}
                          className="h-4 w-4 border-border accent-navy"
                        />
                        <span className="font-medium">{p.value}</span>
                      </span>
                      <span className="text-ink/50">{p.price}</span>
                    </label>
                  ))}
                </div>
              )}

              {stepError && (
                <p className="text-sm text-red-700">{stepError}</p>
              )}

              <div className="flex items-center justify-between gap-4 pt-2">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink/40 hover:bg-ink/5"
                  >
                    Tillbaka
                  </button>
                ) : (
                  <span />
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark"
                  >
                    Nästa
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                    className="rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark disabled:opacity-60"
                  >
                    {status === "submitting"
                      ? "Skickar..."
                      : "Starta gratis provperiod"}
                  </button>
                )}
              </div>

              {status === "error" && (
                <p className="text-center text-sm text-red-700">
                  Något gick fel. Försök igen eller mejla oss på{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
