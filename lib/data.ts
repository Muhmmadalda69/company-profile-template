import type {
  CompanyValue,
  Faq,
  Milestone,
  ProcessStep,
  Service,
  Stat,
  TeamMember,
  Testimonial,
} from "./types";

export const services: Service[] = [
  {
    slug: "pengembangan-perangkat-lunak",
    title: "Pengembangan Perangkat Lunak",
    description:
      "Aplikasi web dan sistem enterprise yang dirancang khusus sesuai kebutuhan bisnis Anda.",
    longDescription:
      "Kami membangun perangkat lunak end-to-end — mulai dari analisis kebutuhan, desain arsitektur, pengembangan, hingga pemeliharaan. Tim kami berpengalaman membangun sistem ERP, portal pelanggan, dan platform digital berskala besar.",
    icon: "code",
    features: [
      "Aplikasi web modern & progresif",
      "Sistem enterprise & integrasi API",
      "Arsitektur microservices yang skalabel",
      "Pemeliharaan & dukungan berkelanjutan",
    ],
  },
  {
    slug: "cloud-infrastruktur",
    title: "Cloud & Infrastruktur",
    description:
      "Migrasi, pengelolaan, dan optimalisasi infrastruktur cloud yang andal dan efisien.",
    longDescription:
      "Percepat operasional dengan infrastruktur cloud yang tepat. Kami membantu migrasi dari on-premise, menyiapkan arsitektur multi-cloud, serta mengoptimalkan biaya dan performa infrastruktur Anda.",
    icon: "cloud",
    features: [
      "Migrasi cloud tanpa gangguan operasional",
      "DevOps & otomatisasi CI/CD",
      "Optimalisasi biaya infrastruktur",
      "Monitoring & ketersediaan 99,9%",
    ],
  },
  {
    slug: "keamanan-siber",
    title: "Keamanan Siber",
    description:
      "Perlindungan menyeluruh terhadap aset digital dengan standar keamanan internasional.",
    longDescription:
      "Lindungi bisnis Anda dari ancaman siber yang terus berkembang. Layanan kami mencakup penetration testing, audit keamanan, hingga implementasi tata kelola keamanan sesuai ISO 27001.",
    icon: "shield",
    features: [
      "Penetration testing & vulnerability assessment",
      "Security operation center (SOC)",
      "Audit & kepatuhan ISO 27001",
      "Pelatihan kesadaran keamanan",
    ],
  },
  {
    slug: "analitik-data",
    title: "Analitik Data & AI",
    description:
      "Ubah data menjadi keputusan bisnis melalui dashboard, prediksi, dan kecerdasan buatan.",
    longDescription:
      "Data adalah aset terbesar Anda. Kami membangun data warehouse, dashboard analitik real-time, dan model machine learning yang membantu Anda mengambil keputusan lebih cepat dan akurat.",
    icon: "chart",
    features: [
      "Data warehouse & pipeline data",
      "Dashboard business intelligence",
      "Model prediktif & machine learning",
      "Implementasi AI generatif",
    ],
  },
  {
    slug: "aplikasi-mobile",
    title: "Aplikasi Mobile",
    description:
      "Aplikasi iOS dan Android dengan pengalaman pengguna yang mulus dan performa tinggi.",
    longDescription:
      "Jangkau pelanggan di mana pun mereka berada. Kami mengembangkan aplikasi mobile native dan cross-platform dengan fokus pada performa, keamanan, dan pengalaman pengguna terbaik.",
    icon: "mobile",
    features: [
      "Aplikasi native iOS & Android",
      "Pengembangan cross-platform",
      "Desain UI/UX berpusat pada pengguna",
      "Publikasi & optimalisasi app store",
    ],
  },
  {
    slug: "konsultasi-digital",
    title: "Konsultasi Transformasi Digital",
    description:
      "Pendampingan strategis untuk merancang peta jalan transformasi digital perusahaan.",
    longDescription:
      "Transformasi digital lebih dari sekadar teknologi. Konsultan kami membantu menyusun strategi, memilih teknologi yang tepat, dan mengelola perubahan organisasi agar investasi digital Anda memberikan dampak nyata.",
    icon: "cog",
    features: [
      "Penyusunan peta jalan digital",
      "Asesmen kematangan digital",
      "Manajemen perubahan organisasi",
      "Pendampingan implementasi",
    ],
  },
];

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Tahun Pengalaman" },
  { value: 250, suffix: "+", label: "Proyek Selesai" },
  { value: 120, suffix: "+", label: "Klien Aktif" },
  { value: 98, suffix: "%", label: "Kepuasan Klien" },
];

export const clients: string[] = [
  "Bank Andalan",
  "GarudaMart",
  "MedikaCare",
  "EduPrima",
  "LogistiX",
  "AgroNusa",
  "FinTrust",
  "EnergiPlus",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ruang Code membantu kami memigrasikan seluruh sistem core banking ke cloud tanpa downtime. Profesionalisme tim mereka luar biasa.",
    name: "Budi Santoso",
    role: "Direktur Teknologi",
    company: "Bank Andalan",
  },
  {
    quote:
      "Dashboard analitik yang dibangun Ruang Code mengubah cara kami mengambil keputusan. Penjualan naik 35% dalam enam bulan.",
    name: "Sari Wijaya",
    role: "Chief Executive Officer",
    company: "GarudaMart",
  },
  {
    quote:
      "Audit keamanan mereka sangat menyeluruh. Kami kini jauh lebih percaya diri menghadapi ancaman siber.",
    name: "Andi Pratama",
    role: "Kepala Divisi IT",
    company: "MedikaCare",
  },
];

export const team: TeamMember[] = [
  {
    name: "Rachmat Hidayat",
    role: "Chief Executive Officer",
    bio: "20+ tahun memimpin transformasi digital di industri perbankan dan telekomunikasi.",
  },
  {
    name: "Dewi Lestari",
    role: "Chief Technology Officer",
    bio: "Arsitek sistem berpengalaman dengan spesialisasi cloud dan sistem terdistribusi.",
  },
  {
    name: "Fajar Nugroho",
    role: "VP of Engineering",
    bio: "Memimpin 80+ engineer dengan budaya kualitas dan continuous delivery.",
  },
  {
    name: "Maya Kusuma",
    role: "Head of Design",
    bio: "Merancang pengalaman digital yang berpusat pada manusia selama 12 tahun.",
  },
  {
    name: "Arif Rahman",
    role: "Head of Cybersecurity",
    bio: "Praktisi keamanan bersertifikasi CISSP dengan latar belakang di sektor pemerintahan.",
  },
  {
    name: "Nina Paramita",
    role: "Head of Data & AI",
    bio: "Membangun solusi machine learning untuk retail, logistik, dan keuangan.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2012",
    title: "Awal Perjalanan",
    description: "Didirikan di Jakarta oleh tiga engineer dengan misi mendemokratisasi teknologi.",
  },
  {
    year: "2015",
    title: "Ekspansi Enterprise",
    description: "Menangani proyek enterprise pertama untuk sektor perbankan nasional.",
  },
  {
    year: "2018",
    title: "Sertifikasi ISO 27001",
    description: "Meraih sertifikasi keamanan informasi internasional dan membuka divisi keamanan siber.",
  },
  {
    year: "2021",
    title: "100+ Klien",
    description: "Melewati 100 klien aktif dan membuka kantor cabang di Surabaya dan Yogyakarta.",
  },
  {
    year: "2024",
    title: "Era AI",
    description: "Meluncurkan divisi Data & AI untuk membantu klien mengadopsi kecerdasan buatan.",
  },
];

export const companyValues: CompanyValue[] = [
  {
    title: "Integritas",
    description: "Kami menjaga kepercayaan klien dengan transparansi dan kejujuran di setiap proyek.",
    icon: "shield",
  },
  {
    title: "Inovasi",
    description: "Kami terus bereksperimen dengan teknologi terbaru untuk memberikan solusi terbaik.",
    icon: "spark",
  },
  {
    title: "Kolaborasi",
    description: "Kami bekerja sebagai satu tim dengan klien, bukan sekadar vendor.",
    icon: "users",
  },
  {
    title: "Berorientasi Dampak",
    description: "Keberhasilan kami diukur dari dampak nyata terhadap bisnis klien.",
    icon: "target",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Konsultasi & Analisis",
    description: "Kami memahami kebutuhan, tantangan, dan tujuan bisnis Anda secara mendalam.",
  },
  {
    step: "02",
    title: "Perencanaan & Desain",
    description: "Tim kami merancang solusi, arsitektur, dan rencana kerja yang terukur.",
  },
  {
    step: "03",
    title: "Pengembangan & Pengujian",
    description: "Solusi dibangun secara iteratif dengan standar kualitas dan keamanan tinggi.",
  },
  {
    step: "04",
    title: "Peluncuran & Pendampingan",
    description: "Kami memastikan go-live berjalan mulus dan terus mendampingi setelahnya.",
  },
];

export const faqs: Faq[] = [
  {
    question: "Berapa lama waktu pengerjaan sebuah proyek?",
    answer:
      "Durasi bergantung pada kompleksitas proyek. Aplikasi web sederhana biasanya 6–10 minggu, sedangkan sistem enterprise dapat memakan waktu 4–8 bulan. Kami selalu memberikan estimasi terperinci setelah fase analisis kebutuhan.",
  },
  {
    question: "Apakah Ruang Code melayani perusahaan skala kecil?",
    answer:
      "Tentu. Kami melayani mulai dari startup hingga korporasi besar. Pendekatan kami disesuaikan dengan skala, anggaran, dan tahap pertumbuhan bisnis Anda.",
  },
  {
    question: "Bagaimana model kerja sama yang tersedia?",
    answer:
      "Kami menawarkan tiga model: project-based (harga tetap per proyek), dedicated team (tim khusus untuk Anda), dan retainer untuk pemeliharaan berkelanjutan.",
  },
  {
    question: "Apakah data perusahaan kami aman?",
    answer:
      "Keamanan adalah prioritas utama. Kami tersertifikasi ISO 27001, menerapkan enkripsi end-to-end, dan menandatangani NDA untuk setiap kerja sama.",
  },
  {
    question: "Apakah ada dukungan setelah proyek selesai?",
    answer:
      "Ya. Setiap proyek mencakup masa garansi, dan kami menyediakan paket pemeliharaan berkelanjutan dengan SLA yang jelas.",
  },
];
