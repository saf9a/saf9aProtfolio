import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: getMessages("en").forms.api.invalidRequest },
      { status: 400 }
    );
  }

  const {
    locale,
    submissionType,
    name,
    email,
    company,
    message,
    service,
    preferredDate,
    preferredWindow,
  } = body as {
    locale?: Locale;
    submissionType?: "contact" | "booking";
    name?: string;
    email?: string;
    company?: string;
    message?: string;
    service?: string;
    preferredDate?: string;
    preferredWindow?: string;
  };

  const isBooking = submissionType === "booking";
  const safeLocale = isLocale(locale) ? locale : "en";
  const copy = getMessages(safeLocale).forms.api;

  if (!name || !email || !emailRegex.test(email) || !message || (isBooking && !service)) {
    return NextResponse.json(
      {
        error: isBooking ? copy.invalidBooking : copy.invalidContact,
      },
      { status: 400 }
    );
  }

  const subject = isBooking ? `New booking request from ${name}` : `New inquiry from ${name}`;
  const text = isBooking
    ? [
        "Type: Booking request",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Call type: ${service}`,
        `Preferred date: ${preferredDate || "-"}`,
        `Preferred time window: ${preferredWindow || "-"}`,
        "",
        message,
      ].join("\n")
    : [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "-"}`, "", message].join("\n");

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.RESEND_TO_EMAIL || site.email;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || `"${site.name}" <onboarding@resend.dev>`;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json(
        { error: copy.sendFailed },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  if (process.env.FORMSPREE_ENDPOINT) {
    const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        submissionType: submissionType || "contact",
        name,
        email,
        company,
        service,
        preferredDate,
        preferredWindow,
        message,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: copy.submitFailed },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: copy.providerMissing },
    { status: 500 }
  );
}
