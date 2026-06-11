import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-light">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${dark ? "text-slate-300" : "text-muted"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
