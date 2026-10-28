export default function EventDetails() {
  const event = {
    date: "Domingo 15 de noviembre de 2026",
    time: "21:00 hs",
    venue: "Salón de eventos",
    address: "Av. Principal 123, Buenos Aires",
    mapsUrl: "https://maps.google.com/",
  };

  const details = [
    {
      icon: "📅",
      title: "¿Cuándo?",
      lines: [event.date, event.time],
    },
    {
      icon: "📍",
      title: "¿Dónde?",
      lines: [event.venue, event.address],
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-600">
          Reservá la fecha
        </p>

        <h2 className="mb-4 text-4xl font-bold text-violet-950 sm:text-5xl">
          ¡Te espero!
        </h2>

        <p className="mx-auto mb-12 w-full max-w-2xl text-center text-base leading-relaxed text-violet-900/70 sm:text-lg">
          Prepará tu mejor look y vení a celebrar conmigo una noche que será
          inolvidable.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {details.map((detail) => (
            <article
              key={detail.title}
              className="rounded-3xl border border-pink-100 bg-linear-to-br from-pink-50 to-violet-50 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4 text-5xl" aria-hidden="true">
                {detail.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-violet-950">
                {detail.title}
              </h3>

              {detail.lines.map((line) => (
                <p
                  key={line}
                  className="mb-2 text-lg text-violet-900/80 last:mb-0">
                  {line}
                </p>
              ))}
            </article>
          ))}
        </div>

        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-fuchsia-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl">
          📍 Ver ubicación en Google Maps
        </a>
      </div>
    </section>
  );
}
