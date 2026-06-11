"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import bcrypt from "bcryptjs";
import { createSession, destroySession, getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";

export interface AuthFormState {
  status: "idle" | "error";
  message: string;
}

export interface PasswordFormState {
  status: "idle" | "error" | "success";
  message: string;
}

// Rate limiting sederhana per-IP (in-memory, cukup untuk single instance).
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function login(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const headerStore = await headers();
  const ip =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Terlalu banyak percobaan. Coba lagi dalam 15 menit.",
    };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { status: "error", message: "Email dan password wajib diisi." };
  }

  const user = await prisma.adminUser.findUnique({ where: { email } });
  // Selalu jalankan bcrypt agar waktu respons seragam (cegah user enumeration).
  const valid = await bcrypt.compare(
    password,
    user?.passwordHash ?? "$2a$12$invalidsaltinvalidsaltinvalidsaltinvalid"
  );

  if (!user || !valid) {
    return { status: "error", message: "Email atau password salah." };
  }

  await createSession({ userId: user.id, email: user.email, name: user.name });
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}

export async function changePassword(
  _prev: PasswordFormState,
  formData: FormData
): Promise<PasswordFormState> {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const current = String(formData.get("current") ?? "");
  const next = String(formData.get("next") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (next.length < 10) {
    return { status: "error", message: "Password baru minimal 10 karakter." };
  }
  if (next !== confirm) {
    return { status: "error", message: "Konfirmasi password tidak cocok." };
  }

  const user = await prisma.adminUser.findUnique({
    where: { id: session.userId },
  });
  if (!user || !(await bcrypt.compare(current, user.passwordHash))) {
    return { status: "error", message: "Password saat ini salah." };
  }

  await prisma.adminUser.update({
    where: { id: user.id },
    data: { passwordHash: await bcrypt.hash(next, 12) },
  });

  return { status: "success", message: "Password berhasil diganti." };
}
