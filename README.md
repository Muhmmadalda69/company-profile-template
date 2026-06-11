# 🏢 Ruang Code Company Profile Web App

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js%2016-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React: v19](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![CSS: Tailwind CSS v4](https://img.shields.io/badge/CSS-Tailwind%20v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Ruang Code Company Profile** adalah aplikasi web profil perusahaan modern dari **PT Ruang Code Indonesia** (perusahaan penyedia solusi teknologi, pengembangan perangkat lunak, infrastruktur cloud, keamanan siber, dan analitik data). Website ini dirancang dengan estetika premium, performa tinggi, animasi mikro yang halus, serta kepatuhan SEO terbaik menggunakan **Next.js 16 (App Router)** dan **Tailwind CSS v4**.

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
- **🔐 Panel Admin (CMS Built-in)**: Kelola seluruh konten website tanpa menyentuh kode — lihat bagian [Panel Admin](#-panel-admin) di bawah.
- **🛡️ Keamanan Berlapis**: Security headers (CSP, HSTS, X-Frame-Options), autentikasi JWT httpOnly cookie, password hashing bcrypt, rate limiting login, honeypot anti-spam, dan sanitasi input server-side.

---

## 🛠️ Tech Stack & Dependensi

Proyek ini dibangun menggunakan teknologi mutakhir:

- **Framework**: [Next.js 16.2.9](https://nextjs.org/) (App Router)
- **Library UI**: [React 19.2.4](https://react.dev/) & [React-DOM](https://react.dev/)
- **Styling & Desain**: [Tailwind CSS v4.0.0](https://tailwindcss.com/) dengan dukungan CSS Modern `@tailwindcss/postcss`
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: SQLite via [Prisma ORM](https://www.prisma.io/) — zero-config, file tunggal, mudah di-backup
- **Autentikasi**: JWT (library [jose](https://github.com/panva/jose)) di httpOnly cookie + [bcryptjs](https://github.com/dcodeIO/bcrypt.js) untuk hashing password
- **Konfigurasi Lingkungan**: Next.js ESLint, PostCSS, dan TypeScript yang terintegrasi secara ketat.

---

## 📁 Struktur Proyek

```text
company-profile/
├── app/                       # Halaman dan rute utama (Next.js App Router)
│   ├── (public)/              # Grup rute publik (dengan Navbar & Footer)
│   │   ├── page.tsx           # Halaman Beranda (Home Page)
│   │   ├── kontak/            # Rute Halaman Kontak
│   │   ├── layanan/           # Rute Halaman Layanan & FAQ
│   │   ├── tentang/           # Rute Halaman Tentang Kami
│   │   └── not-found.tsx      # Halaman 404 custom
│   ├── admin/                 # Panel Admin (terproteksi login)
│   │   ├── login/             # Halaman login admin
│   │   └── (panel)/           # Dashboard, CRUD, pesan, akun
│   ├── globals.css            # Styling global dan variabel CSS Tailwind v4
│   ├── layout.tsx             # Layout utama aplikasi
│   ├── manifest.ts            # Web app manifest untuk PWA/SEO
│   ├── opengraph-image.tsx    # OG image dinamis (1200×630)
│   ├── robots.ts              # Konfigurasi crawler mesin pencari
│   └── sitemap.ts             # Generator sitemap otomatis
├── components/                # Komponen UI modular
│   ├── admin/                 # Komponen panel admin (sidebar, form, tabel)
│   ├── layout/                # Navbar dan Footer global
│   ├── sections/              # Komponen seksi halaman (Hero, Testimonials, dll.)
│   └── ui/                    # Komponen dasar (Button, Reveal, Icon, dll.)
├── lib/                       # Utilitas dan Data
│   ├── actions/               # Server Actions (auth, CRUD admin, form kontak)
│   ├── auth.ts                # Manajemen sesi JWT
│   ├── content.ts             # Pembacaan konten dari database
│   ├── data.ts                # Data seed awal & konten statis (FAQ, milestones)
│   ├── db.ts                  # Prisma client singleton
│   ├── settings-keys.ts       # Definisi konten landing page yang bisa diedit
│   ├── site-config.ts         # Informasi konfigurasi website global
│   └── types.ts               # Type definition untuk TypeScript
├── prisma/
│   ├── schema.prisma          # Skema database (layanan, tim, testimoni, dll.)
│   ├── seed.ts                # Script pengisian data awal + akun admin
│   └── dev.db                 # Database SQLite (tidak masuk git)
├── proxy.ts                   # Proteksi rute /admin (pengganti middleware)
├── public/                    # Aset statis (Logo, Gambar, dll.)
└── package.json               # Manajemen dependensi dan script proyek
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

### 4. Siapkan Environment & Database

Salin file contoh environment lalu isi nilainya:

```bash
cp .env.example .env
```

```env
# .env
DATABASE_URL="file:./prisma/database.db"
AUTH_SECRET="<string acak minimal 32 karakter>"   # generate: openssl rand -hex 32
```

Buat database dan isi data awal (termasuk akun admin):

```bash
npm run db:push    # membuat file SQLite sesuai skema Prisma
npm run db:seed    # mengisi konten awal + akun admin default
```

> 💡 Untuk mengatur kredensial admin sendiri saat seeding, set `ADMIN_EMAIL` dan `ADMIN_PASSWORD` di environment sebelum menjalankan `db:seed`.

### 5. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### 6. Build untuk Produksi
Untuk melakukan kompilasi proyek agar siap di-deploy ke produksi:
```bash
npm run build
npm run start
```

---

## 🔐 Panel Admin

Website ini dilengkapi **panel admin built-in** (CMS ringan) untuk mengelola seluruh konten tanpa menyentuh kode. Setiap perubahan langsung tayang di website — halaman publik di-revalidate otomatis.

### Cara Login

1. Jalankan aplikasi (`npm run dev` atau `npm run start`)
2. Buka **`http://localhost:3000/admin/login`**
3. Masuk dengan kredensial default hasil seeding:

   | Field    | Nilai Default            |
   |----------|--------------------------|
   | Email    | `admin@ruangcode.co.id`  |
   | Password | `RuangCode#2026`         |

4. ⚠️ **Segera ganti password default** melalui menu **Akun** (`/admin/akun`) setelah login pertama.

### Fitur Panel Admin

| Menu | Rute | Fungsi |
|------|------|--------|
| **Dashboard** | `/admin` | Ringkasan jumlah konten & pesan masuk terbaru |
| **Konten Landing** | `/admin/konten` | Edit teks hero (badge, judul, subjudul) dan banner CTA di beranda |
| **Layanan** | `/admin/layanan` | CRUD layanan: judul, slug, deskripsi, ikon, fitur, urutan, status tayang/draf |
| **Tim** | `/admin/tim` | CRUD anggota tim: nama, jabatan, bio, urutan |
| **Testimoni** | `/admin/testimoni` | CRUD testimoni klien: kutipan, nama, jabatan, perusahaan |
| **Statistik** | `/admin/statistik` | CRUD angka pencapaian (mis. "250+ Proyek Selesai") |
| **Klien** | `/admin/klien` | CRUD nama klien di marquee beranda |
| **Pesan Masuk** | `/admin/pesan` | Inbox formulir kontak: tandai dibaca/belum, hapus |
| **Akun** | `/admin/akun` | Lihat profil & ganti password |

### Keamanan Panel Admin

- **Autentikasi JWT** disimpan di httpOnly cookie (tidak bisa diakses JavaScript, aman dari XSS)
- **Password di-hash dengan bcrypt** (cost factor 12) — tidak pernah disimpan dalam bentuk asli
- **Rate limiting login**: maksimal 5 percobaan per IP per 15 menit
- **Proteksi berlapis**: rute `/admin` dijaga oleh `proxy.ts` (redirect cepat) **dan** verifikasi sesi di layout + setiap server action (defense in depth)
- **Sesi kedaluwarsa otomatis** setelah 8 jam
- Waktu respons login dibuat seragam untuk mencegah *user enumeration*
- Semua input divalidasi dan dibatasi panjangnya di sisi server

### Catatan Operasional

- Database SQLite tersimpan di `prisma/dev.db` — **backup cukup dengan menyalin satu file ini**
- Konten yang **belum** dikelola dari admin (FAQ, milestones, nilai perusahaan) dapat diedit di `lib/data.ts`
- Informasi global (nama perusahaan, alamat, sosial media) dikelola di `lib/site-config.ts`

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan profil perusahaan komersial. Seluruh hak cipta dilindungi oleh **PT Ruang Code Indonesia**.

