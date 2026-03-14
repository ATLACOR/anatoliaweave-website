"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      inquiryType: String(formData.get("inquiryType") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setErrorMessage("Please complete the required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Submission failed.");
      }
      setStatus("success");
      form.reset();
      window.setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-black/50">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">
              Let&apos;s discuss your sourcing needs
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/60">
              Reach out for pricing, minimums, lead times, and sampling
              availability.
            </p>
            <div className="mt-8 space-y-4 text-sm text-black/70">
              <p>Bursa, Turkey</p>
              <a
                href="mailto:contact@anatoliaweave.com"
                className="hover:text-black"
              >
                contact@anatoliaweave.com
              </a>
              <p>+90 (224) 555 18 20</p>
            </div>
          </div>
          <div className="w-full max-w-xl rounded-2xl border border-black/10 bg-[#f7f7f7] p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  required
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40"
                />
                <input
                  required
                  name="company"
                  placeholder="Company"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40"
                />
              </div>
              <select
                name="inquiryType"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Inquiry type
                </option>
                <option>Pricing &amp; MOQ</option>
                <option>Sampling</option>
                <option>Compliance &amp; Documentation</option>
                <option>General Inquiry</option>
              </select>
              <textarea
                required
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-black/15 px-6 py-3 text-sm font-medium text-black transition hover:bg-black/25 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Request"}
              </button>
            </form>
            {status === "success" && (
              <div className="mt-4 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/70">
                Thanks! Your request has been received. We&apos;ll reply soon.
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-lg border border-black/20 bg-white px-4 py-3 text-sm text-black/70">
                {errorMessage ||
                  "Something went wrong. Please try again or email us directly."}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
