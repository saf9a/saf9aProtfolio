import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, message } = body as {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
  };

  if (!name || !email || !message || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please provide a name, valid email, and message." },
      { status: 400 }
    );
  }

  const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\n\n${message}`;

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.RESEND_TO_EMAIL || site.email;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || `"${site.name}" <onboarding@resend.dev>`;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New inquiry from ${name}`,
      text,
    });

    if (error) {
      return NextResponse.json(
        { error: "Email failed to send. Please try again." },
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
      },
      body: JSON.stringify({ name, email, company, message }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Form submission failed. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: "Email provider not configured." },
    { status: 500 }
  );
}
