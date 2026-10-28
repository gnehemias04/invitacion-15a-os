export default function Introduction() {
  return (
    <section
      id="presentacion"
      className="overflow-hidden bg-linear-to-b from-violet-50 to-pink-50 px-6 py-20">
      {" "}
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Photograph */}{" "}
        <div className="relative mx-auto w-full max-w-md">
          {" "}
          <div className="absolute -inset-3 rotate-3 rounded-2rem bg-linear-to-br from-pink-300 to-violet-300 opacity-60" />
          <div className="relative overflow-hidden rounded-2rem border-4 border-white shadow-2xl">
            <img
              src="/images/quinceanera.jpg"
              alt="Retrato de la quinceañera"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-fuchsia-600 text-3xl shadow-lg">
            ✨
          </div>
        </div>
        {/* Text */}
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-600">
            Un momento especial
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-violet-950 sm:text-5xl">
            Mis quince años,
            <span className="mt-2 block font-serif font-normal italic text-fuchsia-600">
              un sueño hecho realidad
            </span>
          </h2>

          <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
            <span className="h-px w-12 bg-pink-400" />
            <span className="text-xl text-fuchsia-500">♥</span>
            <span className="h-px w-12 bg-pink-400" />
          </div>

          <p className="mb-5 text-lg leading-relaxed text-violet-900/80">
            Hay momentos que quedan para siempre en el corazón, y este es uno de
            ellos. Hoy comienza una nueva etapa llena de sueños, ilusiones y
            experiencias por descubrir.
          </p>

          <p className="text-lg leading-relaxed text-violet-900/80">
            Me encantaría compartir esta noche mágica con las personas que hacen
            mi vida más especial. ¡Espero que me acompañes!
          </p>

          <p className="mt-8 font-serif text-2xl italic text-fuchsia-700">
            Con cariño, Valentina ♥
          </p>
        </div>
      </div>
    </section>
  );
}
