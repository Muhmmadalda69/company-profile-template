"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/lib/actions/contact";
import type { ContactFormState } from "@/lib/types";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors duration-200 focus:border-accent focus:outline-2 focus:outline-accent/30";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-80 flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-7 w-7"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-primary">
          Terima Kasih!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate>
      {state.status === "error" && (
        <p
          role="alert"
          className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {state.message}
        </p>
      )}

      {/* Honeypot anti-spam: tersembunyi dari pengguna, menjebak bot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-primary">
            Nama Lengkap
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Nama Anda"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className={inputClasses}
          />
          {state.errors?.name && (
            <p id="name-error" className="mt-1.5 text-xs font-medium text-red-600">
              {state.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-primary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="nama@perusahaan.com"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            className={inputClasses}
          />
          {state.errors?.email && (
            <p id="email-error" className="mt-1.5 text-xs font-medium text-red-600">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-primary">
          Subjek
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          placeholder="Apa yang bisa kami bantu?"
          aria-invalid={Boolean(state.errors?.subject)}
          aria-describedby={state.errors?.subject ? "subject-error" : undefined}
          className={inputClasses}
        />
        {state.errors?.subject && (
          <p id="subject-error" className="mt-1.5 text-xs font-medium text-red-600">
            {state.errors.subject}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-primary">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          placeholder="Ceritakan kebutuhan atau tantangan bisnis Anda..."
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={`${inputClasses} resize-y`}
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1.5 text-xs font-medium text-red-600">
            {state.errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-7 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="h-4 w-4 animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Mengirim...
          </>
        ) : (
          "Kirim Pesan"
        )}
      </button>
    </form>
  );
}
