"use client";

import { site } from "@/lib/site";
import { Send } from "lucide-react";
import { useState } from "react";

const reasons = ["Visit the ashram", "Donate or sponsor", "Volunteer", "Something else"];

const fieldClass =
  "w-full rounded-2xl border border-ink-100 bg-white px-5 py-3.5 text-sm text-ink-900 outline-none transition-all duration-300 placeholder:text-ink-300 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200";

/**
 * No backend is wired up yet, so the form composes an email instead of posting.
 * Swap the submit handler for an API route once a mail service is chosen.
 */
export default function ContactForm() {
  const [reason, setReason] = useState(reasons[0]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Reason: ${reason}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website enquiry — ${reason}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="card p-7 sm:p-9">
      <h2 className="text-2xl">Send us a message</h2>
      <p className="mt-2 text-sm text-ink-500">
        We read everything and usually reply within two working days.
      </p>

      <fieldset className="mt-7">
        <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
          I am writing to
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {reasons.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setReason(item)}
              aria-pressed={reason === item}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ease-out-expo ${
                reason === item
                  ? "border-saffron-500 bg-saffron-50 text-saffron-700"
                  : "border-ink-100 text-ink-500 hover:-translate-y-0.5 hover:border-saffron-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
            Your name
          </span>
          <input name="name" required placeholder="Full name" className={`mt-2 ${fieldClass}`} />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
            Phone or email
          </span>
          <input
            name="phone"
            required
            placeholder="How we can reach you"
            className={`mt-2 ${fieldClass}`}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about why you are writing"
          className={`mt-2 resize-none ${fieldClass}`}
        />
      </label>

      <button type="submit" className="btn-primary btn-shine mt-7 w-full py-4 text-base">
        <Send className="h-4 w-4" />
        Send message
      </button>
    </form>
  );
}
