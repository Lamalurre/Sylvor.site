"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import Reveal from "./motion/Reveal";

function formatKr(n: number) {
  return Math.round(n).toLocaleString("sv-SE") + " kr";
}

export default function ROICalculator() {
  const [missedLeads, setMissedLeads] = useState(10);
  const [avgValue, setAvgValue] = useState(15000);
  const [conversionRate, setConversionRate] = useState(30);

  const extraJobsPerMonth = (missedLeads * conversionRate) / 100;
  const monthlyRevenue = extraJobsPerMonth * avgValue;
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <Reveal>
      <div
        className="relative mx-auto max-w-3xl rounded-2xl border border-navy/30 bg-ivory-card p-8 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] sm:p-10"
        style={{ transform: "rotate(-1deg)" }}
      >
        <span
          className="absolute -top-4 -left-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white ring-4 ring-ivory"
          style={{ boxShadow: "0 0 28px -6px rgba(74,108,247,0.55)" }}
        >
          <Calculator size={20} strokeWidth={1.75} />
        </span>

        <h2 className="font-serif text-2xl font-medium sm:text-3xl">
          Hur mycket mer kan du tjäna?
        </h2>
        <p className="mt-2 text-ink/60">
          Justera siffrorna efter din verksamhet och se den potentiella
          extra intäkten.
        </p>

        <div className="mt-8 space-y-7">
          <div>
            <div className="flex items-center justify-between text-sm font-medium">
              <label htmlFor="missedLeads">
                Missade eller sent besvarade förfrågningar/månad
              </label>
              <span className="text-navy">{missedLeads}</span>
            </div>
            <input
              id="missedLeads"
              type="range"
              min={0}
              max={50}
              value={missedLeads}
              onChange={(e) => setMissedLeads(Number(e.target.value))}
              className="mt-2 w-full accent-navy"
            />
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-medium">
              <label htmlFor="avgValue">Genomsnittligt projektvärde</label>
              <span className="text-navy">{formatKr(avgValue)}</span>
            </div>
            <input
              id="avgValue"
              type="range"
              min={0}
              max={100000}
              step={1000}
              value={avgValue}
              onChange={(e) => setAvgValue(Number(e.target.value))}
              className="mt-2 w-full accent-navy"
            />
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-medium">
              <label htmlFor="conversionRate">
                Andel missade leads som annars hade blivit jobb
              </label>
              <span className="text-navy">{conversionRate}%</span>
            </div>
            <input
              id="conversionRate"
              type="range"
              min={0}
              max={100}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="mt-2 w-full accent-navy"
            />
          </div>
        </div>

        <motion.div
          key={`${monthlyRevenue}-${yearlyRevenue}`}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid gap-4 rounded-xl border border-navy/30 bg-navy/[0.06] p-6 sm:grid-cols-2"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Uppskattad extra intäkt / månad
            </span>
            <p className="mt-1 font-serif text-3xl font-medium text-navy">
              {formatKr(monthlyRevenue)}
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Uppskattad extra intäkt / år
            </span>
            <p className="mt-1 font-serif text-3xl font-medium text-navy">
              {formatKr(yearlyRevenue)}
            </p>
          </div>
        </motion.div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <p className="text-xs text-ink/40">
            Räkneexempel baserat på dina antaganden — inte en garanti.
          </p>
          <a
            href="#pricing"
            className="whitespace-nowrap rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white shadow-[0_0_16px_-4px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark"
          >
            Sylvor från 449 kr/mån
          </a>
        </div>
      </div>
    </Reveal>
  );
}
