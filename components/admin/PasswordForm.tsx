"use client";

import { useActionState } from "react";
import { changePassword, type PasswordFormState } from "@/lib/actions/auth";

const initialState: PasswordFormState = { status: "idle", message: "" };

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-2 focus:outline-accent/30";

export default function PasswordForm() {
  const [state, formAction, pending] = useActionState(changePassword, initialState);

  return (
    <form action={formAction} className="space-y-5">
      {state.status === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {state.message}
        </p>
      )}
      {state.status === "success" && (
        <p
          role="status"
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
        >
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="current" className="mb-1.5 block text-sm font-semibold text-primary">
          Password Saat Ini
        </label>
        <input
          id="current"
          name="current"
          type="password"
          required
          autoComplete="current-password"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="next" className="mb-1.5 block text-sm font-semibold text-primary">
          Password Baru
        </label>
        <input
          id="next"
          name="next"
          type="password"
          required
          minLength={10}
          autoComplete="new-password"
          className={inputClasses}
        />
        <p className="mt-1 text-xs text-muted">Minimal 10 karakter.</p>
      </div>

      <div>
        <label htmlFor="confirm" className="mb-1.5 block text-sm font-semibold text-primary">
          Konfirmasi Password Baru
        </label>
        <input
          id="confirm"
          name="confirm"
          type="password"
          required
          minLength={10}
          autoComplete="new-password"
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Menyimpan..." : "Ganti Password"}
      </button>
    </form>
  );
}
