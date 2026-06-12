import CircuitPattern from "@/components/ui/CircuitPattern";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <CircuitPattern />
      <div
        className="orb absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-40 text-center sm:px-6">
        <p
          className="hero-rise font-display text-sm font-semibold uppercase tracking-widest text-accent-light"
          style={{ "--rise-delay": "0ms" } as React.CSSProperties}
        >
          {eyebrow}
        </p>
        <h1
          className="hero-rise mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
          style={{ "--rise-delay": "120ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        <p
          className="hero-rise mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
          style={{ "--rise-delay": "240ms" } as React.CSSProperties}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
