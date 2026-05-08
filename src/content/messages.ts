import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";

export type SiteMessages = typeof enMessages;

export const messages = enMessages;
export const messagesFr = frMessages satisfies SiteMessages;

export const messagesByLocale = {
  en: messages,
  fr: messagesFr,
} as const;
