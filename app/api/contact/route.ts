import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  inquiryType?: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload?.name?.trim();
    const email = payload?.email?.trim();
    const message = payload?.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const host = process.env.ZOHO_SMTP_HOST;
    const portValue = process.env.ZOHO_SMTP_PORT;
    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER || user;

    if (!host || !portValue || !user || !pass || !receiver) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const port = Number(portValue);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(payload.company?.trim() || ""),
      email: escapeHtml(email),
      phone: escapeHtml(payload.phone?.trim() || ""),
      inquiryType: escapeHtml(payload.inquiryType?.trim() || ""),
      message: escapeHtml(message),
    };

    const subject = `New Inquiry from Anatolia Weave - ${safe.name}`;
    const textBody = [
      `Name: ${safe.name}`,
      `Company: ${safe.company || "-"}`,
      `Email: ${safe.email}`,
      `Phone: ${safe.phone || "-"}`,
      `Inquiry Type: ${safe.inquiryType || "-"}`,
      "",
      "Message:",
      safe.message,
    ].join("\n");

    const htmlBody = `
      <p><strong>Name:</strong> ${safe.name}</p>
      <p><strong>Company:</strong> ${safe.company || "-"}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Phone:</strong> ${safe.phone || "-"}</p>
      <p><strong>Inquiry Type:</strong> ${safe.inquiryType || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${safe.message.replaceAll("\n", "<br />")}</p>
    `;

    await transporter.sendMail({
      from: `"Anatolia Weave Website" <${user}>`,
      to: receiver,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
