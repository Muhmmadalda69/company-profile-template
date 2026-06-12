import type { NavLink } from "./types";

export const siteConfig = {
  name: "Ruang Code",
  legalName: "Ruang Code",
  tagline: "Solusi Digital untuk Transformasi Bisnis Anda",
  description:
    "Ruang Code adalah perusahaan teknologi yang membantu bisnis bertransformasi digital melalui pengembangan perangkat lunak, cloud, keamanan siber, dan analitik data.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ruangcode.co.id",
  email: "info.ruangcode@gmail.com",
  phone: "+62 85814404967",
  address: "Wargasetra, Tegalwaru, Kab. Karawang, Jawa Barat, Indonesia",
  foundedYear: 2026,
  social: {
    // linkedin: "https://www.linkedin.com/company/",
    instagram: "https://www.instagram.com/ruang.code.id",
    // twitter: "https://www.twitter.com/ruangcode_id",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Kontak", href: "/kontak" },
];
