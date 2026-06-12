interface Trace {
  path: string;
  nodes: [number, number][];
  pulseDur: string;
  pulseDelay: string;
}

// Jalur sirkuit bergaya PCB: segmen horizontal/vertikal dengan belokan 45°.
const denseTraces: Trace[] = [
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

const sparseTraces: Trace[] = [
  {
    path: "M -60 110 H 360 L 440 190 H 820",
    nodes: [
      [360, 110],
      [820, 190],
    ],
    pulseDur: "10s",
    pulseDelay: "0s",
  },
  {
    path: "M 1500 160 H 1060 L 980 240 H 700",
    nodes: [
      [1060, 160],
      [700, 240],
    ],
    pulseDur: "12s",
    pulseDelay: "-5s",
  },
  {
    path: "M -60 540 H 300 L 380 460 H 720 L 800 540 H 1500",
    nodes: [
      [300, 540],
      [720, 460],
    ],
    pulseDur: "11s",
    pulseDelay: "-3s",
  },
];

interface CircuitPatternProps {
  density?: "dense" | "sparse";
  withPulses?: boolean;
  className?: string;
}

export default function CircuitPattern({
  density = "sparse",
  withPulses = true,
  className = "",
}: CircuitPatternProps) {
  const traces = density === "dense" ? denseTraces : sparseTraces;
  const viewHeight = density === "dense" ? 900 : 640;

  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      viewBox={`0 0 1440 ${viewHeight}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {traces.map((trace, index) => (
        <g key={index}>
          <path d={trace.path} stroke="rgb(148 163 184 / 0.16)" strokeWidth="1.5" />
          {trace.nodes.map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle
                cx={cx}
                cy={cy}
                r="4.5"
                fill="rgb(37 40 120)"
                stroke="rgb(148 163 184 / 0.35)"
                strokeWidth="1.5"
              />
              <circle cx={cx} cy={cy} r="1.5" fill="rgb(248 188 74 / 0.6)" />
            </g>
          ))}
          {withPulses && (
            <>
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
            </>
          )}
        </g>
      ))}
    </svg>
  );
}
