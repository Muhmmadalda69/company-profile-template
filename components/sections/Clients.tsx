import { getClients } from "@/lib/content";

export default async function Clients() {
  const clients = await getClients();

  return (
    <section className="border-y border-slate-200 bg-white" aria-label="Klien kami">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted">
          Dipercaya oleh perusahaan terkemuka
        </p>
        <div
          className="marquee relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <ul className="marquee-track flex w-max items-center gap-14">
            {[...clients, ...clients].map((client, index) => (
              <li
                key={`${client}-${index}`}
                aria-hidden={index >= clients.length}
                className="font-display text-xl font-bold tracking-tight text-slate-400 transition-colors duration-200 hover:text-primary"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
