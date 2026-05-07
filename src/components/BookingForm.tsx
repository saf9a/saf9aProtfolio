"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { getLocaleFromPathname } from "@/lib/i18n";

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
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const copy =
    locale === "fr"
      ? {
          validation:
            "Merci d'indiquer votre nom, un email valide, le type d'appel et un court brief.",
          success:
            "Merci. Nous avons bien recu votre demande et confirmerons le creneau par email sous un jour ouvre.",
          fallbackError: "Une erreur est survenue.",
          name: "Nom",
          email: "Email",
          company: "Entreprise (optionnel)",
          callType: "Type d'appel",
          preferredDate: "Date souhaitee (optionnel)",
          preferredWindow: "Plage horaire preferee",
          prepare: "Que devons-nous preparer ?",
          namePlaceholder: "Votre nom",
          emailPlaceholder: "vous@entreprise.com",
          companyPlaceholder: "Entreprise ou projet",
          callTypePlaceholder: "Choisir un type d'appel",
          callTypes: [
            "Appel de decouverte",
            "Cadrage projet",
            "Planification DevOps",
            "Revue automatisation IA",
            "Consultation generale",
          ],
          timeWindows: ["Flexible", "Matin", "Apres-midi", "Fin d'apres-midi"],
          detailsPlaceholder:
            "Donnez le contexte, l'objectif de l'appel, le calendrier et ce que vous voulez que nous preparions.",
          sending: "Envoi...",
          submit: "Demander un rendez-vous",
          note: "Nous confirmons les demandes par email sous un jour ouvre.",
        }
      : {
          validation: "Please provide your name, a valid email, call type, and a short brief.",
          success:
            "Thanks. We received your booking request and will confirm by email within one business day.",
          fallbackError: "Something went wrong.",
          name: "Name",
          email: "Email",
          company: "Company (optional)",
          callType: "Call type",
          preferredDate: "Preferred date (optional)",
          preferredWindow: "Preferred time window",
          prepare: "What should we prepare for?",
          namePlaceholder: "Your name",
          emailPlaceholder: "you@company.com",
          companyPlaceholder: "Company or project",
          callTypePlaceholder: "Select a call type",
          callTypes: [
            "Discovery call",
            "Project scoping",
            "DevOps planning",
            "AI automation review",
            "General consultation",
          ],
          timeWindows: ["Flexible", "Morning", "Afternoon", "Late afternoon"],
          detailsPlaceholder:
            "Tell us the goal of the call, context, timeline, and anything you want reviewed.",
          sending: "Sending...",
          submit: "Request booking",
          note: "We confirm bookings by email within one business day.",
        };

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
      setMessage(copy.success);
      setFormData(initialState);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : copy.fallbackError;
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
            {copy.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
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
            className="input-field"
            placeholder={copy.emailPlaceholder}
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
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
            className="input-field"
            placeholder={copy.companyPlaceholder}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">
            {copy.callType}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="select-field"
          >
            <option value="" className="bg-surface text-foreground">{copy.callTypePlaceholder}</option>
            {copy.callTypes.map((option) => (
              <option key={option} value={option} className="bg-surface text-foreground">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="preferredDate" className="text-sm font-medium">
            {copy.preferredDate}
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={minDate}
            value={formData.preferredDate}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="preferredWindow" className="text-sm font-medium">
            {copy.preferredWindow}
          </label>
          <select
            id="preferredWindow"
            name="preferredWindow"
            value={formData.preferredWindow}
            onChange={handleChange}
            className="select-field"
          >
            {copy.timeWindows.map((option) => (
              <option key={option} value={option} className="bg-surface text-foreground">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {copy.prepare}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="input-field min-h-36 resize-y"
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
            status === "success" ? "text-sm text-success" : "text-sm text-red-600"
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
