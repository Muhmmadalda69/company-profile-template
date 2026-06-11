"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-primary/90 shadow-lg shadow-primary/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#konten-utama"
        className="sr-only z-50 rounded-md bg-accent px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Lewati ke konten utama
      </a>

      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-xl font-bold text-white"
          aria-label={`${siteConfig.name} — beranda`}
        >
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={48}
            height={29}
            priority
            className="h-8 w-auto"
          />
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <Link
              href="/kontak"
              className="inline-flex h-10 cursor-pointer items-center rounded-full bg-accent px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
            >
              Konsultasi Gratis
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {menuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`overflow-hidden transition-[max-height] duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 border-t border-white/10 bg-primary px-4 py-4">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/kontak"
              onClick={closeMenu}
              className="block rounded-full bg-accent px-4 py-3 text-center text-base font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
            >
              Konsultasi Gratis
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
