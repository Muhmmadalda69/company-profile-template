"use client";

import useNavigationPending from "@/lib/hooks/useNavigationPending";
import TechLoader from "./TechLoader";

export default function NavigationProgress() {
  const pending = useNavigationPending();
  if (!pending) return null;
  return <TechLoader label="Memuat halaman" />;
}
