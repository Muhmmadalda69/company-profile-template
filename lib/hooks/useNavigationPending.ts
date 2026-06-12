"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  isRouterInstrumented,
  NAVIGATION_START_EVENT,
  type NavigationStartDetail,
} from "@/lib/navigation-progress";

// Batas aman: kalau navigasi gagal/dibatalkan, status pending jangan nyangkut.
const SAFETY_TIMEOUT_MS = 8000;

// Durasi tampil minimum: navigasi yang sangat cepat tetap menampilkan
// modal sebentar, alih-alih berkedip lalu hilang.
const MIN_VISIBLE_MS = 100;

// Jeda penutupan setelah rute baru aktif: menutupi pergantian ke fallback
// loading.tsx (modal yang sama) agar tidak ada celah/kedip di antaranya.
const HIDE_GRACE_MS = 100;

// Delay sebelum loader mulai ditampilkan: jika halaman termuat lebih cepat
// dari durasi ini (milidetik), loader TIDAK akan muncul sama sekali (mencegah kedipan).
// Silakan atur angka ini (misal 150ms - 300ms) untuk menyesuaikan delay kemunculan.
const SHOW_DELAY_MS = 150;

function isCurrentPage(target: URL) {
  return (
    target.pathname === window.location.pathname &&
    target.search === window.location.search
  );
}

function navigableAnchorFrom(event: MouseEvent) {
  if (event.button !== 0) return null;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return null;
  }
  const anchor = (event.target as Element | null)?.closest?.("a[href]");
  if (!(anchor instanceof HTMLAnchorElement)) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;
  return anchor;
}

/**
 * `true` selama transisi rute berlangsung — dari sinyal navigasi dimulai
 * (onRouterTransitionStart) sampai rute baru aktif (pathname/search berubah).
 */
export default function useNavigationPending() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, setPending] = useState(false);
  const safetyRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Kapan modal terakhir mulai tampil — dipakai menghitung sisa durasi minimum.
  const shownAtRef = useRef(0);

  // Rute baru sudah aktif — sembunyikan modal, tetapi tunggu dulu sampai
  // durasi tampil minimum terpenuhi agar navigasi cepat tidak berkedip.
  const routeKey = `${pathname}?${searchParams}`;
  useEffect(() => {
    // Jika navigasi selesai sebelum delay kemunculan (SHOW_DELAY_MS) habis,
    // batalkan timer-nya agar loader tidak pernah muncul.
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }

    const elapsed = Date.now() - shownAtRef.current;
    const delay = Math.max(HIDE_GRACE_MS, MIN_VISIBLE_MS - elapsed);
    const timer = setTimeout(() => {
      // Lewati bila navigasi baru sudah dimulai setelah timer ini dijadwalkan
      // (shownAt di-reset oleh startPending); biarkan siklus berikutnya menutup.
      if (shownAtRef.current > 0 && Date.now() - shownAtRef.current < MIN_VISIBLE_MS) return;
      if (safetyRef.current) clearTimeout(safetyRef.current);
      safetyRef.current = null;
      setPending(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [routeKey]);

  useEffect(() => {
    function startPending(destination: string) {
      let target: URL;
      try {
        target = new URL(destination, window.location.href);
      } catch {
        return;
      }
      if (target.origin !== window.location.origin) return;
      // Navigasi ke halaman yang sama / hanya hash tidak perlu indikator.
      if (isCurrentPage(target)) return;

      if (safetyRef.current) clearTimeout(safetyRef.current);
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);

      safetyRef.current = setTimeout(() => {
        setPending(false);
        if (showTimeoutRef.current) {
          clearTimeout(showTimeoutRef.current);
          showTimeoutRef.current = null;
        }
      }, SAFETY_TIMEOUT_MS);

      // Jangan tampilkan langsung; beri delay. Jika halaman termuat sebelum delay
      // ini berakhir, timer ini akan dibatalkan di useEffect routeKey di atas.
      showTimeoutRef.current = setTimeout(() => {
        shownAtRef.current = Date.now();
        setPending(true);
      }, SHOW_DELAY_MS);
    }

    // Sumber utama: onRouterTransitionStart (instrumentation-client.ts),
    // dipanggil Next tepat saat transisi router dimulai — termasuk
    // router.push dari kode dan tombol back/forward.
    function onTransitionStart(event: CustomEvent<NavigationStartDetail>) {
      startPending(event.detail.url);
    }

    // Cadangan bila instrumentation belum termuat (dev server belum
    // di-restart setelah file itu ditambahkan). Harus fase CAPTURE:
    // next/link memanggil preventDefault() di fase bubble lebih dulu,
    // sehingga listener bubble biasa tidak pernah melihat klik ini.
    function onClickCapture(event: MouseEvent) {
      if (isRouterInstrumented()) return;
      const anchor = navigableAnchorFrom(event);
      if (anchor) startPending(anchor.href);
    }

    window.addEventListener(NAVIGATION_START_EVENT, onTransitionStart);
    document.addEventListener("click", onClickCapture, true);
    return () => {
      window.removeEventListener(NAVIGATION_START_EVENT, onTransitionStart);
      document.removeEventListener("click", onClickCapture, true);
      if (safetyRef.current) clearTimeout(safetyRef.current);
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    };
  }, []);

  return pending;
}
