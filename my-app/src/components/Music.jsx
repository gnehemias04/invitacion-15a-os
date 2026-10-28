import { useRef, useState } from "react";

export default function Music() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function toggleMusic() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("No se pudo reproducir la música:", error);
      }
    }
  }

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center rounded-3xl border border-pink-100 bg-linear-to-br from-pink-50 to-violet-50 p-8 text-center shadow-lg sm:p-12">
        <div
          className={`mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500 to-violet-700 text-3xl text-white shadow-lg ${
            isPlaying ? "animate-spin" : ""
          }`}
          style={{ animationDuration: "5s" }}
          aria-hidden="true">
          ♫
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-600">
          El ritmo de la celebración
        </p>

        <h2 className="mb-4 text-3xl font-bold text-violet-950 sm:text-4xl">
          ¡Dale play a la magia!
        </h2>

        <p className="mb-8 max-w-md leading-relaxed text-violet-900/70">
          Acompañá esta invitación con una canción especial para entrar en
          ambiente y disfrutar de esta noche inolvidable.
        </p>

        <audio
          ref={audioRef}
          src="/music/party-song.mp3"
          loop
          onEnded={() => setIsPlaying(false)}
        />

        <button
          type="button"
          onClick={toggleMusic}
          className="rounded-full bg-linear-to-r from-fuchsia-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-fuchsia-300"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}>
          {isPlaying ? "❚❚ Pausar música" : "▶ Reproducir música"}
        </button>

        <p className="mt-4 text-sm text-violet-800/50">
          Subí el volumen y disfrutá 🎶
        </p>
      </div>
    </section>
  );
}
