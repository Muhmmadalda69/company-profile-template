import type { NavLink } from "./types";

export const siteConfig = {
  name: "Ruang Code",
  legalName: "PT Ruang Code Indonesia",
  tagline: "Solusi Digital untuk Transformasi Bisnis Anda",
  description:
    "Ruang Code adalah perusahaan teknologi yang membantu bisnis bertransformasi digital melalui pengembangan perangkat lunak, cloud, keamanan siber, dan analitik data.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ruangcode.co.id",
  email: "halo@ruangcode.co.id",
  phone: "+62 21 5095 0000",
  address: "Menara Ruang Code Lt. 12, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190",
  foundedYear: 2012,
  social: {
    linkedin: "https://www.linkedin.com/company/ruangcode",
    instagram: "https://www.instagram.com/ruangcode.id",
    twitter: "https://www.twitter.com/ruangcode_id",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Kontak", href: "/kontak" },
];
