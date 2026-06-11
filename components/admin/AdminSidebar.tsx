"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Dashboard", href: "/admin" },
  { label: "Konten Landing", href: "/admin/konten" },
  { label: "Layanan", href: "/admin/layanan" },
  { label: "Tim", href: "/admin/tim" },
  { label: "Testimoni", href: "/admin/testimoni" },
  { label: "Statistik", href: "/admin/statistik" },
  { label: "Klien", href: "/admin/klien" },
  { label: "Pesan Masuk", href: "/admin/pesan" },
  { label: "Akun", href: "/admin/akun" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-slate-200 bg-primary lg:min-h-svh lg:w-64 lg:rounded-4xl lg:rounded-br-none lg:rounded-bl-none lg:rounded-tl-none">
      <Link href="/admin" className="flex gap-3 pb-4">
      <div className="w-full h-full flex items-center gap-4 mb-2.5 p-3 border-b border-white">
        <Image src="/logo.png" alt="Ruang Code" width={40} height={40} className="h-9 w-auto" />
        <span className="font-display text-base font-bold text-white">
          Admin Panel
        </span>
      </div>
      </Link>

      <nav aria-label="Menu admin" className="flex-1 overflow-x-auto px-3 pb-4 lg:pb-0">
        <ul className="flex gap-1 lg:flex-col">
          {menu.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-white text-primary"
                      : "text-white hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden bg-accent px-6 py-4 lg:block">
        <Link
          href="/"
          className="text-sm font-medium text-white transition-colors duration-200 hover:text-primary"
        >
          &larr; Lihat Website
        </Link>
      </div>
    </aside>
  );
}
