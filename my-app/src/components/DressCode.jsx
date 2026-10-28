export default function DressCode() {
  return (
    <section className="bg-linear-to-br from-pink-50 via-white to-violet-50 px-6 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-600">
          Una noche especial
        </p>

        <h2 className="mb-4 text-4xl font-bold text-violet-950 sm:text-5xl">
          Código de vestimenta
        </h2>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-violet-900/70">
          Elegí tu mejor outfit y preparate para disfrutar de una noche
          inolvidable.
        </p>

        <div className="w-full max-w-md rounded-3xl border border-pink-100 bg-white p-10 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="mb-6 text-6xl" aria-hidden="true">
            👗
          </div>

          <h3 className="mb-3 text-2xl font-bold text-violet-950">Elegante</h3>

          <p className="leading-relaxed text-violet-900/70">
            Vestimenta formal para compartir una noche llena de magia, alegría y
            momentos especiales.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <span className="h-6 w-6 rounded-full bg-pink-300 ring-2 ring-pink-100" />
            <span className="h-6 w-6 rounded-full bg-fuchsia-500 ring-2 ring-fuchsia-100" />
            <span className="h-6 w-6 rounded-full bg-violet-700 ring-2 ring-violet-100" />
          </div>
        </div>

        <p className="mt-6 text-sm italic text-violet-800/60">
          ¡Lo más importante es que vengas con ganas de celebrar! ✨
        </p>
      </div>
    </section>
  );
}
