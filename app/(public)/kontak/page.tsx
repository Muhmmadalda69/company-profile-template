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
    label: "Whatsapp",
    value: siteConfig.phone,
    icon: "whatsapp",
    href: `https://wa.me/${siteConfig.phone.replace(/[\s+]/g, "")}`,
    description: "Senin–Jumat, 09.00–18.00 WIB",
    path: "",
  },
  {
    label: "Kantor Pusat",
    value: "Karawang",
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
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex gap-4 rounded-2xl border border-transparent p-3 -mx-3 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50/50 hover:shadow-sm"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {channel.label === "Whatsapp" ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                            aria-hidden="true"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        ) : (
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
                        )}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-primary">
                          {channel.label}
                        </h3>
                        <p className="text-sm font-medium text-accent transition-colors duration-200 group-hover:text-accent-light">
                          {channel.value}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {channel.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex gap-4 p-3 -mx-3">
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
                        <p className="text-sm font-medium text-accent">{channel.value}</p>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {channel.description}
                        </p>
                      </div>
                    </div>
                  )}
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
                  untuk keperluan komunikasi.
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
