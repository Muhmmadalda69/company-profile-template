import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section className="bg-surface" aria-labelledby="testimoni-heading">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepercayaan klien adalah pencapaian terbesar kami. Berikut pengalaman mereka bekerja sama dengan tim kami."
        />

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.name} delay={index * 120}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-8 w-8 text-accent/30"
                >
                  <path d="M11 7.5v5.25c0 3.04-1.83 5.42-4.9 6.6l-.85-1.48c1.78-.86 2.8-2.18 3-3.87H5V7.5h6zm8 0v5.25c0 3.04-1.82 5.42-4.9 6.6l-.85-1.48c1.79-.86 2.81-2.18 3-3.87H13V7.5h6z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-secondary">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light font-display text-sm font-semibold text-primary"
                  >
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
