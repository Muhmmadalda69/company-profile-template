import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-primary" aria-labelledby="proses-heading">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="orb absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="Cara Kami Bekerja"
          title="Proses yang Transparan & Terukur"
          description="Empat tahap sederhana yang memastikan setiap proyek berjalan tepat waktu, sesuai anggaran, dan melampaui ekspektasi."
          dark
        />

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.step} delay={index * 120} className="relative">
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors duration-300 hover:border-accent-light/40 hover:bg-white/10">
                <span className="font-display text-4xl font-bold text-gradient">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="absolute -right-4.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-accent-light lg:block"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
