import type { Metadata } from "next";
import CtaBanner from "@/components/sections/CtaBanner";
import PageHero from "@/components/sections/PageHero";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getServices } from "@/lib/content";
import { faqs } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan lengkap Ruang Code: pengembangan perangkat lunak, cloud & infrastruktur, keamanan siber, analitik data & AI, aplikasi mobile, dan konsultasi transformasi digital.",
  alternates: { canonical: "/layanan" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default async function LayananPage() {
  const services = await getServices();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Layanan Kami"
        title="Solusi Lengkap untuk Setiap Kebutuhan Digital"
        description={`${siteConfig.name} menyediakan layanan end-to-end — dari strategi, pengembangan, hingga pemeliharaan jangka panjang.`}
      />

      {/* Detail layanan */}
      <section className="bg-white" aria-label="Daftar layanan">
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-24 sm:px-6">
          {services.map((service, index) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="grid scroll-mt-28 gap-8 rounded-3xl border border-slate-200 bg-surface p-8 transition-shadow duration-300 hover:shadow-lg sm:p-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14"
              >
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {service.longDescription}
                  </p>
                </div>
                <div className="lg:border-l lg:border-slate-200 lg:pl-14">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-secondary">
                    Yang Anda dapatkan
                  </h3>
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="h-3 w-3"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="text-sm leading-6 text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="sr-only">{`Layanan ${index + 1} dari ${services.length}`}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Tidak menemukan jawaban yang Anda cari? Hubungi tim kami kapan saja."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 60}>
                <details className="group rounded-2xl border border-slate-200 bg-white open:border-accent/40 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-semibold text-primary [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-7 text-muted">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
