import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-primary">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="orb absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative px-4 py-32 text-center">
        <p className="hero-rise font-display text-7xl font-bold text-gradient sm:text-8xl">
          404
        </p>
        <h1
          className="hero-rise mt-4 font-display text-2xl font-bold text-white sm:text-3xl"
          style={{ "--rise-delay": "120ms" } as React.CSSProperties}
        >
          Halaman Tidak Ditemukan
        </h1>
        <p
          className="hero-rise mx-auto mt-3 max-w-md text-base leading-7 text-slate-300"
          style={{ "--rise-delay": "240ms" } as React.CSSProperties}
        >
          Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
        </p>
        <div
          className="hero-rise mt-8"
          style={{ "--rise-delay": "360ms" } as React.CSSProperties}
        >
          <Button href="/">Kembali ke Beranda</Button>
        </div>
      </div>
    </section>
  );
}
