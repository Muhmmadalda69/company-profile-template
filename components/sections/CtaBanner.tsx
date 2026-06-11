import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CtaBanner() {
  return (
    <section className="bg-white" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-light to-accent px-6 py-16 text-center sm:px-16">
            <div
              className="orb absolute -top-24 right-10 h-64 w-64 rounded-full bg-accent-light/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <h2
                id="cta-heading"
                className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Siap Membawa Bisnis Anda ke Level Berikutnya?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-200">
                Ceritakan kebutuhan Anda — tim kami akan menghubungi dalam 1 hari kerja
                dengan rekomendasi solusi yang tepat. Tanpa biaya, tanpa komitmen.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/kontak">Hubungi Kami Sekarang</Button>
                <Button href="/tentang" variant="ghost">
                  Tentang Perusahaan
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
