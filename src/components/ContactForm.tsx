"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { getLocaleFromPathname } from "@/lib/i18n";

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
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const copy =
    locale === "fr"
      ? {
          validation: "Merci d'indiquer votre nom, un email valide et un court message.",
          success: "Merci. Nous vous repondrons sous un jour ouvre.",
          fallbackError: "Une erreur est survenue.",
          name: "Nom",
          email: "Email",
          company: "Entreprise (optionnel)",
          projectDetails: "Details du projet",
          namePlaceholder: "Votre nom",
          emailPlaceholder: "vous@entreprise.com",
          companyPlaceholder: "Entreprise ou projet",
          detailsPlaceholder:
            "Parlez-nous de vos objectifs, du calendrier et des resultats attendus.",
          sending: "Envoi...",
          submit: "Envoyer le message",
          note: "Nous repondons sous un jour ouvre.",
        }
      : {
          validation: "Please provide your name, a valid email, and a short message.",
          success: "Thanks for reaching out. We will reply within one business day.",
          fallbackError: "Something went wrong.",
          name: "Name",
          email: "Email",
          company: "Company (optional)",
          projectDetails: "Project details",
          namePlaceholder: "Your name",
          emailPlaceholder: "you@company.com",
          companyPlaceholder: "Company or project",
          detailsPlaceholder: "Tell us about your goals, timeline, and the outcomes you need.",
          sending: "Sending...",
          submit: "Send message",
          note: "We reply within one business day.",
        };

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
      setMessage(copy.validation);
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
      setMessage(copy.success);
      setFormData(initialState);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : copy.fallbackError;
      setStatus("error");
      setMessage(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {copy.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:border-white/10 dark:bg-slate-950/60"
            placeholder={copy.namePlaceholder}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {copy.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:border-white/10 dark:bg-slate-950/60"
            placeholder={copy.emailPlaceholder}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          {copy.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:border-white/10 dark:bg-slate-950/60"
          placeholder={copy.companyPlaceholder}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {copy.projectDetails}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none focus:border-accent dark:border-white/10 dark:bg-slate-950/60"
          placeholder={copy.detailsPlaceholder}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? copy.sending : copy.submit}
        </Button>
        <p className="text-sm text-muted-foreground">{copy.note}</p>
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
