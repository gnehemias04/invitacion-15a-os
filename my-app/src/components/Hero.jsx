export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-pink-500 via-fuchsia-600 to-violet-800 px-6 py-16 text-center text-white">
      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-24 w-24 rounded-full bg-pink-300/30 blur-2xl" />

      <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-violet-300/30 blur-2xl" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-6 text-sm uppercase tracking-[0.5em] text-pink-100 sm:text-base">
          Una noche mágica
        </p>

        <h1 className="mb-4 text-5xl font-light sm:text-7xl md:text-8xl">
          Mis <span className="font-bold">15 años</span>
        </h1>

        <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-pink-200" />

        <p className="mb-4 text-4xl font-bold tracking-wide sm:text-6xl">
          Valentina
        </p>

        <p className="mb-10 text-lg text-pink-100 sm:text-xl">
          15 de noviembre de 2026 · 21:00 hs
        </p>

        <a
          href="#presentacion"
          className="inline-block rounded-full border border-white/70 bg-white/15 px-8 py-4 font-semibold shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-white hover:text-fuchsia-700">
          Descubrí mi invitación
          <span className="ml-2" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl animate-bounce">
        ↓
      </div>
    </section>
  );
}
