"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

const initialState = {
  name: "",
  email: "",
  company: "",
  service: "",
  preferredDate: "",
  preferredWindow: "Flexible",
  message: "",
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export function BookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (
      !formData.name.trim() ||
      !formData.service.trim() ||
      !formData.message.trim() ||
      !isValidEmail(formData.email)
    ) {
      setStatus("error");
      setMessage("Please provide your name, a valid email, call type, and a short brief.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submissionType: "booking",
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Thanks. We received your booking request and will confirm by email within one business day.");
      setFormData(initialState);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong.";
      setStatus("error");
      setMessage(errorMessage);
    }
  };

  const minDate = new Date().toISOString().split("T")[0];

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
      <div className="grid gap-4 md:grid-cols-2">
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
          <label htmlFor="service" className="text-sm font-medium">
            Call type
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:bg-slate-950/60 dark:border-white/10"
          >
            <option value="">Select a call type</option>
            <option value="Discovery call">Discovery call</option>
            <option value="Project scoping">Project scoping</option>
            <option value="DevOps planning">DevOps planning</option>
            <option value="AI automation review">AI automation review</option>
            <option value="General consultation">General consultation</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="preferredDate" className="text-sm font-medium">
            Preferred date (optional)
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={minDate}
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:bg-slate-950/60 dark:border-white/10"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="preferredWindow" className="text-sm font-medium">
            Preferred time window
          </label>
          <select
            id="preferredWindow"
            name="preferredWindow"
            value={formData.preferredWindow}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:bg-slate-950/60 dark:border-white/10"
          >
            <option value="Flexible">Flexible</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Late afternoon">Late afternoon</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          What should we prepare for?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:bg-slate-950/60 dark:border-white/10"
          placeholder="Tell us the goal of the call, context, timeline, and anything you want reviewed."
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Request booking"}
        </Button>
        <p className="text-sm text-muted-foreground">We confirm bookings by email within one business day.</p>
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
