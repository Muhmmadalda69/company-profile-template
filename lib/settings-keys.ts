// Kunci konten landing page yang bisa diedit dari admin.
// Satu sumber kebenaran untuk seed, form admin, dan pembacaan di halaman publik.

export const defaultSettings = {
  hero_badge: "Dipercaya 120+ perusahaan di Indonesia",
  hero_title: "Wujudkan Transformasi Digital",
  hero_highlight: "Bisnis Anda",
  hero_title_end: "Bersama Kami",
  hero_subtitle:
    "Ruang Code membantu perusahaan membangun perangkat lunak, infrastruktur cloud, dan keamanan siber kelas dunia — dari strategi hingga implementasi.",
  cta_title: "Siap Membawa Bisnis Anda ke Level Berikutnya?",
  cta_subtitle:
    "Ceritakan kebutuhan Anda — tim kami akan menghubungi dalam 1 hari kerja dengan rekomendasi solusi yang tepat. Tanpa biaya, tanpa komitmen.",
} as const;

export type SettingKey = keyof typeof defaultSettings;

export const settingLabels: Record<SettingKey, string> = {
  hero_badge: "Hero — Teks Badge",
  hero_title: "Hero — Judul (awal)",
  hero_highlight: "Hero — Judul (bagian berwarna)",
  hero_title_end: "Hero — Judul (akhir)",
  hero_subtitle: "Hero — Subjudul",
  cta_title: "Banner CTA — Judul",
  cta_subtitle: "Banner CTA — Subjudul",
};

export const settingMultiline: Partial<Record<SettingKey, boolean>> = {
  hero_subtitle: true,
  cta_subtitle: true,
};
