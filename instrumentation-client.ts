import { dispatchNavigationStart } from "@/lib/navigation-progress";

// Hook resmi Next.js: dipanggil tepat saat transisi router dimulai.
// useNavigationPending mendengarkan sinyal ini untuk menampilkan modal loading.
export function onRouterTransitionStart(
  url: string,
  navigationType: "push" | "replace" | "traverse",
) {
  try {
    dispatchNavigationStart({ url, navigationType });
  } catch {
    // Instrumentation tidak boleh mengganggu navigasi.
  }
}
