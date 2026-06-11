import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getServices } from "@/lib/content";

export default async function ServicesGrid() {
  const services = await getServices();

  return (
    <section className="bg-surface" aria-labelledby="layanan-heading">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Solusi Teknologi Menyeluruh"
          description="Dari pengembangan perangkat lunak hingga keamanan siber, kami menyediakan layanan lengkap untuk setiap tahap transformasi digital Anda."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal as="li" key={service.slug} delay={(index % 3) * 100}>
              <Link
                href={`/layanan#${service.slug}`}
                className="group flex h-full cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Pelajari lebih lanjut
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
