const particles = [
  { top: "18%", left: "8%", size: "h-1.5 w-1.5", delay: "0s" },
  { top: "32%", left: "85%", size: "h-2 w-2", delay: "-1.5s" },
  { top: "65%", left: "12%", size: "h-1 w-1", delay: "-3s" },
  { top: "75%", left: "70%", size: "h-1.5 w-1.5", delay: "-4.5s" },
  { top: "12%", left: "55%", size: "h-1 w-1", delay: "-2s" },
  { top: "55%", left: "92%", size: "h-1 w-1", delay: "-5s" },
];

// Jalur sirkuit: segmen horizontal/vertikal dengan belokan 45°,
// node di persimpangan, dan pulsa data yang mengalir di sepanjang jalur.
const traces = [
  {
    path: "M -60 140 H 320 L 400 220 H 760 L 820 280 H 1100",
    nodes: [
      [320, 140],
      [760, 220],
      [1100, 280],
    ],
    pulseDur: "9s",
    pulseDelay: "0s",
  },
  {
    path: "M 1500 120 H 1080 L 1000 200 H 640 L 580 260 H 380",
    nodes: [
      [1080, 120],
      [640, 200],
      [380, 260],
    ],
    pulseDur: "11s",
    pulseDelay: "-4s",
  },
  {
    path: "M -60 640 H 240 L 320 560 H 680 L 760 640 H 1020",
    nodes: [
      [240, 640],
      [680, 560],
      [1020, 640],
    ],
    pulseDur: "10s",
    pulseDelay: "-2s",
  },
  {
    path: "M 1500 700 H 1180 L 1100 620 H 860 L 780 700 H 560 L 500 760 H 200",
    nodes: [
      [1180, 700],
      [860, 620],
      [560, 700],
      [200, 760],
    ],
    pulseDur: "13s",
    pulseDelay: "-7s",
  },
  {
    path: "M 200 -40 V 180 L 280 260 V 420",
    nodes: [
      [200, 180],
      [280, 420],
    ],
    pulseDur: "8s",
    pulseDelay: "-3s",
  },
  {
    path: "M 1240 -40 V 200 L 1160 280 V 480 L 1240 560 V 760",
    nodes: [
      [1240, 200],
      [1160, 480],
    ],
    pulseDur: "12s",
    pulseDelay: "-6s",
  },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Pola sirkuit digital */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {traces.map((trace, index) => (
          <g key={index}>
            {/* Jalur */}
            <path
              d={trace.path}
              stroke="rgb(148 163 184 / 0.16)"
              strokeWidth="1.5"
            />
            {/* Node persimpangan */}
            {trace.nodes.map(([cx, cy]) => (
              <g key={`${cx}-${cy}`}>
                <circle cx={cx} cy={cy} r="4.5" fill="rgb(37 40 120)" stroke="rgb(148 163 184 / 0.35)" strokeWidth="1.5" />
                <circle cx={cx} cy={cy} r="1.5" fill="rgb(248 188 74 / 0.6)" />
              </g>
            ))}
            {/* Pulsa data mengalir */}
            <circle r="3" fill="#f8bc4a" className="circuit-pulse">
              <animateMotion
                dur={trace.pulseDur}
                begin={trace.pulseDelay}
                repeatCount="indefinite"
                path={trace.path}
              />
            </circle>
            <circle r="7" fill="rgb(248 188 74 / 0.25)" className="circuit-pulse">
              <animateMotion
                dur={trace.pulseDur}
                begin={trace.pulseDelay}
                repeatCount="indefinite"
                path={trace.path}
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Orbs */}
      <div className="orb absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="orb orb-slow absolute -bottom-40 right-1/5 h-105 w-105 rounded-full bg-primary-light/40 blur-3xl" />

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
