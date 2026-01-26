"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

const initialState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!formData.name.trim() || !formData.message.trim() || !isValidEmail(formData.email)) {
      setStatus("error");
      setMessage("Please provide your name, a valid email, and a short message.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Thanks for reaching out. We will reply within one business day.");
      setFormData(initialState);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong.";
      setStatus("error");
      setMessage(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:bg-slate-950/60 dark:border-white/10"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:bg-slate-950/60 dark:border-white/10"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:bg-slate-950/60 dark:border-white/10"
          placeholder="Company or project"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:bg-slate-950/60 dark:border-white/10"
          placeholder="Tell us about your goals, timeline, and the outcomes you need."
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send message"}
        </Button>
        <p className="text-sm text-muted-foreground">We reply within one business day.</p>
      </div>
      {status !== "idle" ? (
        <p
          className={
            status === "success" ? "text-sm text-emerald-600" : "text-sm text-red-600"
          }
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
