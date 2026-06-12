import Button from "@/components/ui/Button";
import CircuitPattern from "@/components/ui/CircuitPattern";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  {
    icon: "rocket" as const,
    title: "Eksekusi Cepat & Adaptif",
    description: "Metodologi agile untuk meluncurkan solusi Anda ke pasar secara cepat dan iteratif.",
  },
  {
    icon: "shield" as const,
    title: "Keamanan Modern",
    description: "Setiap sistem dirancang dengan arsitektur aman guna melindungi integritas data Anda.",
  },
  {
    icon: "spark" as const,
    title: "Teknologi Terkini",
    description: "Memanfaatkan stack teknologi modern untuk efisiensi biaya dan skalabilitas tinggi.",
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
                  100%
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-white">
                  Berorientasi pada Inovasi & Dampak Nyata
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Didirikan pada {siteConfig.foundedYear}, {siteConfig.name} hadir dengan visi meruntuhkan batasan akses teknologi dan membantu bisnis melompati keterbatasan sistem lama.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="font-display text-2xl font-bold text-white">Modern</p>
                    <p className="mt-1 text-xs text-slate-400">Teknologi Terbaru</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="font-display text-2xl font-bold text-white">10+</p>
                    <p className="mt-1 text-xs text-slate-400">Talenta Terkurasi</p>
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
              Membangun Solusi Digital Masa Depan
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Kami percaya teknologi terbaik lahir dari kolaborasi erat dan pemahaman bisnis yang mendalam. Itulah mengapa kami fokus menghadirkan solusi yang lincah dan berpusat pada hasil.
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
