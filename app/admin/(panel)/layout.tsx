import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { logout } from "@/lib/actions/auth";
import { getSession } from "@/lib/auth";

export default async function AdminPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="flex min-h-svh flex-col lg:flex-row">
      <AdminSidebar />
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 lg:px-10">
          <p className="text-sm text-muted">
            Masuk sebagai{" "}
            <span className="font-semibold text-primary">{session.name}</span>
          </p>
          <form action={logout}>
            <button
              type="submit"
              className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-secondary transition-colors duration-200 hover:bg-slate-100"
            >
              Keluar
            </button>
          </form>
        </header>
        <div className="p-6 lg:p-10">{children}</div>
      </div>
    </div>
  );
}
