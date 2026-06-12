// Kontrak bersama antara instrumentation-client.ts (pengirim) dan
// useNavigationPending (penerima) untuk sinyal "navigasi dimulai".

export const NAVIGATION_START_EVENT = "app:router-transition-start";

export interface NavigationStartDetail {
  url: string;
  navigationType: "push" | "replace" | "traverse";
}

declare global {
  interface WindowEventMap {
    "app:router-transition-start": CustomEvent<NavigationStartDetail>;
  }

  interface Window {
    /** Penanda bahwa hook router resmi aktif, sehingga fallback klik tidak perlu jalan. */
    __navInstrumented?: boolean;
  }
}

export function dispatchNavigationStart(detail: NavigationStartDetail) {
  window.__navInstrumented = true;
  window.dispatchEvent(
    new CustomEvent(NAVIGATION_START_EVENT, { detail }),
  );
}

export function isRouterInstrumented() {
  return window.__navInstrumented === true;
}
