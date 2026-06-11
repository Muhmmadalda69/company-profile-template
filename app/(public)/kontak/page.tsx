import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${siteConfig.name} untuk konsultasi gratis. Tim kami siap membantu kebutuhan transformasi digital perusahaan Anda.`,
  alternates: { canonical: "/kontak" },
};

const contactChannels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Respons dalam 1 hari kerja",
    path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
  },
  {
    label: "Telepon",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    description: "Senin–Jumat, 09.00–18.00 WIB",
    path: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  },
  {
    label: "Kantor Pusat",
    value: "Jakarta Selatan",
    href: undefined,
    description: siteConfig.address,
    path: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  },
];

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungi Kami"
        title="Mari Diskusikan Kebutuhan Anda"
        description="Konsultasi awal gratis dan tanpa komitmen. Ceritakan tantangan Anda, kami bantu temukan solusinya."
      />

      <section className="bg-white" aria-label="Informasi kontak dan formulir">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[2fr_3fr]">
          <div>
            <Reveal direction="left">
              <h2 className="font-display text-2xl font-bold text-primary">
                Informasi Kontak
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Pilih saluran yang paling nyaman bagi Anda. Tim kami selalu siap
                mendengarkan dan membantu.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-6">
              {contactChannels.map((channel, index) => (
                <Reveal as="li" key={channel.label} direction="left" delay={index * 120}>
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d={channel.path} />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-primary">
                        {channel.label}
                      </h3>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          className="text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-light"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-accent">{channel.value}</p>
                      )}
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal direction="left" delay={360} className="mt-10">
              <div className="rounded-2xl border border-slate-200 bg-surface p-6">
                <h3 className="font-display text-sm font-semibold text-primary">
                  Keamanan data Anda terjamin
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted">
                  Seluruh informasi yang Anda kirimkan dienkripsi dan hanya digunakan
                  untuk keperluan komunikasi. Kami tersertifikasi ISO 27001.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" className="relative">
            <div className="rounded-3xl border border-slate-200 bg-surface p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-primary">
                Kirim Pesan
              </h2>
              <p className="mt-2 text-sm text-muted">
                Isi formulir di bawah dan tim kami akan segera menghubungi Anda.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
