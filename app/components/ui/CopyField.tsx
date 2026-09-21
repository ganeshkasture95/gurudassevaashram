"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard is unavailable (insecure context or denied) — leave the value
      // visible so it can still be copied by hand.
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 border-b border-ink-100 py-4 last:border-0">
      <div className="min-w-0">
        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">{label}</dt>
        <dd className="mt-1 truncate font-medium text-ink-900">{value}</dd>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-900/5 text-ink-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron-100 hover:text-saffron-700"
      >
        {copied ? (
          <Check className="h-4 w-4 text-moss-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
