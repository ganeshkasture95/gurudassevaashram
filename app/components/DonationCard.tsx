"use client";

import { donationTiers, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BadgeCheck, Heart, Lock, Repeat, Sparkles } from "lucide-react";
import { useState } from "react";

const frequencies = [
  { id: "once", label: "One-time" },
  { id: "monthly", label: "Monthly" },
] as const;

interface DonationCardProps {
  /** Where the primary button sends the donor next. */
  href?: string;
  className?: string;
}

export default function DonationCard({ href = "#ways-to-give", className }: DonationCardProps) {
  const [frequency, setFrequency] = useState<(typeof frequencies)[number]["id"]>("once");
  const [selected, setSelected] = useState<number>(donationTiers[1].amount);
  const [custom, setCustom] = useState("");

  const customAmount = Number(custom);
  const amount = custom ? (Number.isFinite(customAmount) ? customAmount : 0) : selected;
  const tier = donationTiers.find((item) => item.amount === amount);

  const impact =
    tier?.impact ??
    (amount >= 10000
      ? "Sponsors a student's hostel, meals and tuition — and then some"
      : amount > 0
        ? "Goes straight into meals, books and medicines for our residents"
        : "Enter an amount to see what it supports");

  return (
    <div
      className={cn(
        "card relative overflow-hidden p-7 sm:p-9",
        className,
      )}
    >
      <div
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-saffron-100 blur-2xl"
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="eyebrow">Make a gift</span>
            <h3 className="mt-2 text-2xl">Choose your contribution</h3>
          </div>
          <span className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-saffron-600 text-white shadow-glow sm:flex">
            <Heart className="h-5 w-5" />
          </span>
        </div>

        {/* Frequency toggle */}
        <div
          className="relative mt-7 grid grid-cols-2 gap-1 rounded-full bg-ink-900/5 p-1"
          role="tablist"
          aria-label="Donation frequency"
        >
          <span
            className="absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-white shadow-soft transition-transform duration-500 ease-out-expo"
            style={{ transform: frequency === "once" ? "translateX(0.25rem)" : "translateX(calc(100% + 0.5rem))" }}
            aria-hidden
          />
          {frequencies.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={frequency === item.id}
              onClick={() => setFrequency(item.id)}
              className={cn(
                "relative z-10 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors duration-300",
                frequency === item.id ? "text-ink-900" : "text-ink-500 hover:text-ink-700",
              )}
            >
              {item.id === "monthly" && <Repeat className="h-3.5 w-3.5" aria-hidden />}
              {item.label}
            </button>
          ))}
        </div>

        {/* Preset amounts */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {donationTiers.map((item) => {
            const active = !custom && selected === item.amount;
            return (
              <button
                key={item.amount}
                type="button"
                onClick={() => {
                  setSelected(item.amount);
                  setCustom("");
                }}
                className={cn(
                  "rounded-2xl border px-4 py-4 text-left transition-all duration-300 ease-out-expo",
                  active
                    ? "border-saffron-500 bg-saffron-50 shadow-soft ring-1 ring-saffron-400"
                    : "border-ink-100 bg-white hover:-translate-y-0.5 hover:border-saffron-300",
                )}
              >
                <span className="block font-display text-xl text-ink-900">
                  ₹{item.amount.toLocaleString("en-IN")}
                </span>
                <span className="mt-0.5 block text-[0.7rem] uppercase tracking-[0.12em] text-ink-300">
                  {frequency === "monthly" ? "per month" : "one-time"}
                </span>
              </button>
            );
          })}
        </div>

        <label className="mt-4 block">
          <span className="sr-only">Custom amount in rupees</span>
          <span className="relative flex items-center">
            <span className="pointer-events-none absolute left-5 font-display text-lg text-ink-300">
              ₹
            </span>
            <input
              type="number"
              min={100}
              step={100}
              inputMode="numeric"
              value={custom}
              onChange={(event) => setCustom(event.target.value)}
              placeholder="Other amount"
              className="w-full rounded-2xl border border-ink-100 bg-white py-4 pl-11 pr-5 text-base text-ink-900 outline-none transition-all duration-300 placeholder:text-ink-300 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200"
            />
          </span>
        </label>

        {/* Impact readout */}
        <div
          key={impact}
          className="mt-6 flex items-start gap-3 rounded-2xl border border-moss-100 bg-moss-50 p-4 animate-fade-up"
        >
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-moss-600" aria-hidden />
          <p className="text-sm leading-relaxed text-moss-800">
            <span className="font-semibold">Your ₹{amount.toLocaleString("en-IN")}</span>
            {frequency === "monthly" ? " a month " : " "}
            {impact.charAt(0).toLowerCase() + impact.slice(1)}.
          </p>
        </div>

        <a href={href} className="btn-primary btn-shine mt-6 w-full py-4 text-base">
          Continue to give ₹{amount.toLocaleString("en-IN")}
        </a>

        <ul className="mt-6 grid gap-3 border-t border-ink-100 pt-6 text-xs text-ink-500 sm:grid-cols-2">
          <li className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 shrink-0 text-moss-600" aria-hidden />
            {site.taxSection.split(" ")[0]} receipt in 7 days
          </li>
          <li className="flex items-center gap-2">
            <Lock className="h-4 w-4 shrink-0 text-moss-600" aria-hidden />
            Zero platform commission
          </li>
        </ul>
      </div>
    </div>
  );
}
