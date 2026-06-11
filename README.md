# 🏢 Ruang Code Company Profile Web App

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js%2016-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React: v19](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![CSS: Tailwind CSS v4](https://img.shields.io/badge/CSS-Tailwind%20v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Ruang Code Company Profile** adalah aplikasi web profil perusahaan modern untuk **PT Ruang Code Indonesia** (perusahaan penyedia solusi teknologi, pengembangan perangkat lunak, infrastruktur cloud, keamanan siber, dan analitik data). Website ini dirancang dengan estetika premium, performa tinggi, animasi mikro yang halus, serta kepatuhan SEO terbaik menggunakan **Next.js 16 (App Router)** dan **Tailwind CSS v4**.

---

## ✨ Fitur Utama

- **🚀 Halaman Beranda (Home)**: Menampilkan hero banner interaktif dengan animasi orbs, data statistik perusahaan, logo klien terkemuka, ringkasan layanan, alur kerja (proses), testimoni klien, dan banner CTA.
- **📄 Halaman Tentang Kami (About)**: Informasi lengkap visi & misi, nilai-nilai inti perusahaan (Integritas, Inovasi, Kolaborasi, Berorientasi Dampak), garis waktu perjalanan (*milestones* sejak 2012), dan profil tim manajemen.
- **🛠️ Halaman Layanan (Services)**: Detail dari 6 layanan utama (Software Development, Cloud & Infrastructure, Cybersecurity, Data Analytics & AI, Mobile Apps, dan Digital Transformation Consulting) lengkap dengan fitur yang ditawarkan dan daftar FAQ interaktif.
- **📞 Halaman Kontak (Contact)**: Formulir kontak interaktif dengan validasi input untuk memudahkan calon klien terhubung langsung.
- **🔍 Optimalisasi SEO Tingkat Lanjut**:
  - Metadata dinamis untuk setiap halaman.
  - Skema data terstruktur JSON-LD (`FAQPage`) pada halaman Layanan untuk meningkatkan visibilitas di Google Search.
  - Tag kanonikal dinamis untuk menghindari masalah konten duplikat.
  - Halaman Sitemap otomatis (`sitemap.ts`), aturan robot (`robots.ts`), Manifest aplikasi (`manifest.ts`), dan favicon/logo lengkap.
- **🎨 Desain Visual Premium**: Menggunakan skema warna terkurasi (gelap/terang elegan), efek *backdrop blur*, *glassmorphism*, dan animasi masuk terarah (*reveal scroll animation*).

---

## 🛠️ Tech Stack & Dependensi

Proyek ini dibangun menggunakan teknologi mutakhir:

- **Framework**: [Next.js 16.2.9](https://nextjs.org/) (App Router)
- **Library UI**: [React 19.2.4](https://react.dev/) & [React-DOM](https://react.dev/)
- **Styling & Desain**: [Tailwind CSS v4.0.0](https://tailwindcss.com/) dengan dukungan CSS Modern `@tailwindcss/postcss`
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Konfigurasi Lingkungan**: Next.js ESLint, PostCSS, dan TypeScript yang terintegrasi secara ketat.

---

## 📁 Struktur Proyek

```text
company-profile/
├── app/                  # Halaman dan rute utama (Next.js App Router)
│   ├── kontak/           # Rute Halaman Kontak
│   ├── layanan/          # Rute Halaman Layanan & FAQ
│   ├── tentang/          # Rute Halaman Tentang Kami
│   ├── globals.css       # Styling global dan variabel CSS Tailwind v4
│   ├── layout.tsx        # Layout utama aplikasi
│   ├── manifest.ts       # Web app manifest untuk PWA/SEO
│   ├── page.tsx          # Halaman Beranda (Home Page)
│   ├── robots.ts         # Konfigurasi crawler mesin pencari
│   └── sitemap.ts        # Generator sitemap otomatis
├── components/           # Komponen UI modular
│   ├── layout/           # Navbar dan Footer global
│   ├── sections/         # Komponen seksi halaman (Hero, Testimonials, dll.)
│   └── ui/               # Komponen dasar (Button, Reveal, Icon, dll.)
├── lib/                  # Utilitas dan Data
│   ├── data.ts           # Data statis untuk konten (Layanan, Tim, FAQ)
│   ├── site-config.ts    # Informasi konfigurasi website global
│   └── types.ts          # Type definition untuk TypeScript
├── public/               # Aset statis (Logo, Gambar, dll.)
└── package.json          # Manajemen dependensi dan script proyek
```

---

## ⚙️ Cara Menjalankan Proyek secara Lokal

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18.x atau lebih baru direkomendasikan).

### 2. Kloning Repositori
```bash
git clone https://github.com/username/company-profile.git
cd company-profile
```

### 3. Instal Dependensi
Gunakan package manager pilihan Anda:
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 4. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### 5. Build untuk Produksi
Untuk melakukan kompilasi proyek agar siap di-deploy ke produksi:
```bash
npm run build
npm run start
```

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan profil perusahaan komersial. Seluruh hak cipta dilindungi oleh **PT Ruang Code Indonesia**.

