"use server";

import type { ContactFormState } from "@/lib/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;

function sanitize(value: FormDataEntryValue | null, maxLength: number): string {
  if (typeof value !== "string") return "";
  // Strip control characters to prevent header/log injection.
  return value.replace(CONTROL_CHARS, "").trim().slice(0, maxLength);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users never fill this hidden field. Bots do.
  if (sanitize(formData.get("website"), 100) !== "") {
    return { status: "success", message: "Pesan Anda telah terkirim. Terima kasih!" };
  }

  const name = sanitize(formData.get("name"), 100);
  const email = sanitize(formData.get("email"), 254);
  const subject = sanitize(formData.get("subject"), 150);
  const message = sanitize(formData.get("message"), 3000);

  const errors: ContactFormState["errors"] = {};
  if (name.length < 2) errors.name = "Nama minimal 2 karakter.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Format email tidak valid.";
  if (subject.length < 3) errors.subject = "Subjek minimal 3 karakter.";
  if (message.length < 10) errors.message = "Pesan minimal 10 karakter.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Mohon periksa kembali isian Anda.",
      errors,
    };
  }

  // Integrate with your email provider or CRM here (e.g. Resend, Nodemailer,
  // or an internal ticketing API). Data is already validated and sanitized.
  console.info("Pesan kontak baru diterima", { name, email, subject });

  return {
    status: "success",
    message: "Pesan Anda telah terkirim. Tim kami akan menghubungi Anda dalam 1 hari kerja.",
  };
}
