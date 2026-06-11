import type { Metadata } from "next";
import CtaBanner from "@/components/sections/CtaBanner";
import PageHero from "@/components/sections/PageHero";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getTeam } from "@/lib/content";
import { companyValues, milestones } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali ${siteConfig.legalName} — visi, misi, nilai, perjalanan, dan tim di balik solusi digital kami sejak ${siteConfig.foundedYear}.`,
  alternates: { canonical: "/tentang" },
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default async function TentangPage() {
  const team = await getTeam();

  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Teknologi dengan Sentuhan Manusia"
        description={`Sejak ${siteConfig.foundedYear}, kami membantu perusahaan Indonesia bertransformasi melalui teknologi yang berdampak nyata.`}
      />

      {/* Visi & Misi */}
      <section className="bg-white" aria-label="Visi dan misi">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-3xl border border-slate-200 bg-surface p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name="globe" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-primary">Visi</h2>
              <p className="mt-3 leading-7 text-muted">
                Menjadi mitra transformasi digital paling terpercaya di Asia Tenggara,
                yang memberdayakan setiap bisnis untuk tumbuh melalui teknologi.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="h-full rounded-3xl border border-slate-200 bg-surface p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name="rocket" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-primary">Misi</h2>
              <ul className="mt-3 space-y-2.5 leading-7 text-muted">
                <li className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  Menghadirkan solusi teknologi berkualitas dunia yang relevan dengan
                  kebutuhan lokal.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  Membangun talenta digital Indonesia melalui budaya belajar berkelanjutan.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  Menjadi mitra jangka panjang yang tumbuh bersama setiap klien.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nilai Perusahaan */}
      <section className="bg-surface" aria-labelledby="nilai-heading">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Nilai Kami"
            title="Prinsip yang Memandu Setiap Langkah"
            description="Empat nilai inti yang menjadi fondasi cara kami bekerja dan mengambil keputusan."
          />
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 100}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon name={value.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Perjalanan */}
      <section className="relative overflow-hidden bg-primary" aria-labelledby="perjalanan-heading">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Perjalanan Kami"
            title="Lebih dari Satu Dekade Bertumbuh"
            dark
          />
          <ol className="relative mt-16 space-y-10 border-l border-white/15 pl-8 sm:pl-12">
            {milestones.map((milestone, index) => (
              <Reveal as="li" key={milestone.year} delay={index * 100} className="relative">
                <span
                  className="absolute -left-[2.57rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent-light bg-primary sm:-left-[3.57rem]"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                </span>
                <p className="font-display text-sm font-bold uppercase tracking-widest text-accent-light">
                  {milestone.year}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {milestone.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Tim */}
      <section className="bg-white" aria-labelledby="tim-heading">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Tim Kami"
            title="Orang-Orang di Balik Ruang Code"
            description="Dipimpin oleh praktisi berpengalaman yang pernah menangani proyek digital terbesar di Indonesia."
          />
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal as="li" key={member.name} delay={(index % 3) * 100}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light font-display text-xl font-bold text-primary"
                  >
                    {initials(member.name)}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
