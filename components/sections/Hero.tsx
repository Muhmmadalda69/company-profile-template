import Button from "@/components/ui/Button";
import { getSettings } from "@/lib/content";

export default async function Hero() {
  const settings = await getSettings();

  return (
    <section className="relative overflow-hidden bg-primary" aria-labelledby="hero-heading">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="orb absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="orb orb-slow absolute -bottom-40 right-1/5 h-105 w-105 rounded-full bg-primary-light/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center px-4 pb-24 pt-36 text-center sm:px-6">
        <p
          className="hero-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur"
          style={{ "--rise-delay": "0ms" } as React.CSSProperties}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          {settings.hero_badge}
        </p>

        <h1
          id="hero-heading"
          className="hero-rise mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ "--rise-delay": "120ms" } as React.CSSProperties}
        >
          {settings.hero_title}{" "}
          <span className="text-gradient">{settings.hero_highlight}</span>{" "}
          {settings.hero_title_end}
        </h1>

        <p
          className="hero-rise mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          style={{ "--rise-delay": "240ms" } as React.CSSProperties}
        >
          {settings.hero_subtitle}
        </p>

        <div
          className="hero-rise mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ "--rise-delay": "360ms" } as React.CSSProperties}
        >
          <Button href="/kontak">
            Mulai Konsultasi Gratis
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
          <Button href="/layanan" variant="ghost">
            Jelajahi Layanan
          </Button>
        </div>

        <div
          className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
