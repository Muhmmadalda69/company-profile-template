import CircuitPattern from "./CircuitPattern";

interface TechLoaderProps {
  label?: string;
}

/** Chip prosesor dengan inti berdenyut dan cincin orbit berputar. */
function ChipIcon() {
  return (
    <div className="loader-chip">
      <span aria-hidden="true" className="loader-orbit" />
      <span aria-hidden="true" className="loader-core-glow" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="loader-chip-svg"
        aria-hidden="true"
      >
        <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
        <rect
          x="10"
          y="10"
          width="4"
          height="4"
          rx="0.5"
          fill="#f5a71b"
          stroke="none"
          className="loader-core"
        />
        {/* Pin chip: atas, bawah, kiri, kanan */}
        <path d="M9 6.5V4M12 6.5V4M15 6.5V4" />
        <path d="M9 20v-2.5M12 20v-2.5M15 20v-2.5" />
        <path d="M6.5 9H4M6.5 12H4M6.5 15H4" />
        <path d="M17.5 9H20M17.5 12H20M17.5 15H20" />
      </svg>
    </div>
  );
}

/** Progress bar indeterminate dengan blok data berjalan. */
function ProgressBar() {
  return (
    <div className="loader-track">
      <span aria-hidden="true" className="loader-bar" />
    </div>
  );
}

/** Label bergaya terminal: titik berdenyut dan kursor berkedip. */
function TerminalLabel({ label }: { label: string }) {
  return (
    <p className="loader-label">
      {label}
      <span aria-hidden="true" style={{ letterSpacing: "normal" }}>
        <span className="loader-dot">.</span>
        <span className="loader-dot" style={{ animationDelay: "0.25s" }}>
          .
        </span>
        <span className="loader-dot" style={{ animationDelay: "0.5s" }}>
          .
        </span>
      </span>
      <span aria-hidden="true" className="loader-cursor">
        ▮
      </span>
    </p>
  );
}

/**
 * Modal loading bertema teknologi di atas backdrop redup.
 * Styling ada di app/globals.css (bagian "Tech loader").
 */
export default function TechLoader({ label = "Memuat data" }: TechLoaderProps) {
  return (
    <div role="status" aria-live="polite" className="loader-overlay">
      <div className="loader-card">
        <CircuitPattern density="sparse" withPulses={false} className="opacity-50" />
        <div className="loader-card-inner">
          <ChipIcon />
          <ProgressBar />
          <TerminalLabel label={label} />
          <span className="sr-only">Konten sedang dimuat, mohon tunggu.</span>
        </div>
      </div>
    </div>
  );
}
