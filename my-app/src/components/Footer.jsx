export default function Footer() {
  return (
    <footer className="bg-violet-950 px-6 py-12 text-center text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <div className="mb-4 text-3xl text-pink-300" aria-hidden="true">
          ✨
        </div>

        <h2 className="mb-3 font-serif text-3xl italic text-pink-200 sm:text-4xl">
          Valentina
        </h2>

        <p className="mb-6 max-w-lg leading-relaxed text-white/70">
          Gracias por ser parte de este momento tan especial. ¡Espero que
          disfrutemos juntos una noche inolvidable!
        </p>

        <div className="mb-6 h-px w-24 bg-linear-to-r from-transparent via-pink-300 to-transparent" />

        <p className="text-sm text-white/60">
          15 de noviembre de 2026 · Una noche para recordar ♥
        </p>

        <p className="mt-8 text-xs text-white/50">
          Diseñado con ♥ por{" "}
          <span className="font-semibold text-pink-300">Gabriel Rengifo</span>
        </p>
      </div>
    </footer>
  );
}
