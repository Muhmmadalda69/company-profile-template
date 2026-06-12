import Button from "@/components/ui/Button";
import CircuitPattern from "@/components/ui/CircuitPattern";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  {
    icon: "rocket" as const,
    title: "Eksekusi Cepat & Terukur",
    description: "Metodologi agile dengan rilis bertahap sehingga hasil terlihat sejak minggu pertama.",
  },
  {
    icon: "shield" as const,
    title: "Keamanan Sejak Desain",
    description: "Setiap solusi dibangun dengan prinsip secure-by-design dan standar ISO 27001.",
  },
  {
    icon: "users" as const,
    title: "Tim Berdedikasi",
    description: "150+ profesional bersertifikasi yang siap menjadi perpanjangan tim Anda.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white" aria-labelledby="tentang-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-accent-soft" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 sm:p-10">
              <CircuitPattern withPulses={false} />
              <div className="relative">
                <p className="font-display text-5xl font-bold text-accent sm:text-6xl">
                  {new Date().getFullYear() - siteConfig.foundedYear}+
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-white">
                  Tahun Menjadi Mitra Teknologi Terpercaya
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Sejak {siteConfig.foundedYear}, kami menemani ratusan perusahaan Indonesia
                  bertumbuh melalui teknologi — dari startup tahap awal hingga BUMN dan
                  korporasi multinasional.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="font-display text-2xl font-bold text-white">150+</p>
                    <p className="mt-1 text-xs text-slate-400">Profesional Bersertifikasi</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="font-display text-2xl font-bold text-white">3</p>
                    <p className="mt-1 text-xs text-slate-400">Kantor di Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Tentang Kami
            </p>
            <h2
              id="tentang-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Mitra Teknologi yang Tumbuh Bersama Anda
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Kami percaya teknologi terbaik lahir dari pemahaman bisnis yang mendalam.
              Itulah mengapa setiap proyek dimulai dengan mendengarkan — bukan menjual.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {highlights.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 120} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={360} className="mt-10">
            <Button href="/tentang" variant="secondary">
              Kenali Kami Lebih Dekat
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
