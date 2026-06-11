import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";
import { getSession } from "@/lib/auth";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Masuk Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await getSession()) redirect("/admin");

  return (
    <div className="flex min-h-svh items-center justify-center bg-surface px-4 py-8">
      <div className="w-full max-w-md mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.png" alt={siteConfig.name} width={72} height={72} />
          <h1 className="mt-4 font-display text-2xl font-bold text-primary">
            {siteConfig.name}
          </h1>
        </div>
          <LoginForm />
      </div>
    </div>
  );
}
