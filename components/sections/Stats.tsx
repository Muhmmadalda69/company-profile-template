import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-white" aria-label="Pencapaian kami">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 100}
              className="text-center"
            >
              <dd className="font-display text-4xl font-bold text-primary sm:text-5xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-sm font-medium text-muted">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
