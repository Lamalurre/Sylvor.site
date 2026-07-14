"use client";

import { useState, useMemo } from "react";
import { Compass } from "lucide-react";
import Reveal from "./motion/Reveal";

type Plan = "Bas" | "Standard" | "Firma";

const PLAN_INFO: Record<Plan, { price: string; reason: string }> = {
  Bas: {
    price: "449 kr/mån",
    reason: "Er volym är låg nog att Bas räcker gott och väl.",
  },
  Standard: {
    price: "799 kr/mån",
    reason: "Standard passar bäst för er volym och antal användare.",
  },
  Firma: {
    price: "1 499 kr/mån",
    reason: "Er volym eller ert team är stort nog att Firma ger bäst värde.",
  },
};

function recommend(leads: number, users: number): Plan {
  if (leads <= 50 && users <= 1) return "Bas";
  if (leads <= 200 && users <= 3) return "Standard";
  return "Firma";
}

export default function PlanRecommender() {
  const [leads, setLeads] = useState(80);
  const [users, setUsers] = useState(2);

  const plan = useMemo(() => recommend(leads, users), [leads, users]);
  const info = PLAN_INFO[plan];

  return (
    <Reveal>
      <div
        className="relative mx-auto max-w-2xl rounded-2xl border border-navy/30 bg-ivory-card p-8 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)]"
        style={{ transform: "rotate(1deg)" }}
      >
        <span
          className="absolute -top-4 -right-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white ring-4 ring-ivory"
          style={{ boxShadow: "0 0 28px -6px rgba(74,108,247,0.55)" }}
        >
          <Compass size={20} strokeWidth={1.75} />
        </span>

        <h3 className="font-serif text-2xl font-medium">
          Vilket paket passar er?
        </h3>
        <p className="mt-2 text-ink/60">
          Svara på två frågor så rekommenderar vi ett paket.
        </p>

        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between text-sm font-medium">
              <label htmlFor="rec-leads">Leads per månad</label>
              <span className="text-navy">{leads}</span>
            </div>
            <input
              id="rec-leads"
              type="range"
              min={0}
              max={400}
              step={10}
              value={leads}
              onChange={(e) => setLeads(Number(e.target.value))}
              className="mt-2 w-full accent-navy"
            />
          </div>
          <div>
            <div className="flex items-center justify-between text-sm font-medium">
              <label htmlFor="rec-users">Antal användare</label>
              <span className="text-navy">{users}</span>
            </div>
            <input
              id="rec-users"
              type="range"
              min={1}
              max={10}
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="mt-2 w-full accent-navy"
            />
          </div>
        </div>

        <div className="mt-7 rounded-xl border border-navy/30 bg-navy/[0.06] p-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
            Vi rekommenderar
          </span>
          <p className="mt-1 font-serif text-3xl font-medium text-navy">
            {plan} <span className="text-lg text-ink/50">— {info.price}</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            {info.reason}
          </p>
          <a
            href="#kom-igang"
            className="mt-4 inline-block rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark"
          >
            Starta 14 dagar gratis
          </a>
        </div>
      </div>
    </Reveal>
  );
}
