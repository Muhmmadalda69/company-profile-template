import CircuitPattern from "@/components/ui/CircuitPattern";

const particles = [
  { top: "18%", left: "8%", size: "h-1.5 w-1.5", delay: "0s" },
  { top: "32%", left: "85%", size: "h-2 w-2", delay: "-1.5s" },
  { top: "65%", left: "12%", size: "h-1 w-1", delay: "-3s" },
  { top: "75%", left: "70%", size: "h-1.5 w-1.5", delay: "-4.5s" },
  { top: "12%", left: "55%", size: "h-1 w-1", delay: "-2s" },
  { top: "55%", left: "92%", size: "h-1 w-1", delay: "-5s" },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Pola sirkuit digital dengan pulsa data */}
      <CircuitPattern density="dense" />

      {/* Orbs */}
      {/* <div className="orb absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="orb orb-slow absolute -bottom-40 right-1/5 h-105 w-105 rounded-full bg-primary-light/40 blur-3xl" /> */}

      {/* Beam sweep */}
      <div className="beam absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Partikel mengambang */}
      {particles.map((particle, index) => (
        <span
          key={index}
          className={`particle absolute rounded-full bg-accent-light ${particle.size}`}
          style={{
            top: particle.top,
            left: particle.left,
            "--particle-delay": particle.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
