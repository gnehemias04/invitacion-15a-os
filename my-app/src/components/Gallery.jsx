const photos = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Retrato de Valentina",
    size: "md:row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Un momento especial",
    size: "",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Sonrisas y recuerdos",
    size: "",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Un recuerdo inolvidable",
    size: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="bg-linear-to-b from-white to-pink-50 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-600">
          Recuerdos especiales
        </p>

        <h2 className="mb-4 text-4xl font-bold text-violet-950 sm:text-5xl">
          Mi galería
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-violet-900/70">
          Cada foto guarda un momento, una sonrisa y una historia. Acá te
          comparto algunos recuerdos especiales antes de vivir juntos esta noche
          inolvidable.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-55">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`group overflow-hidden rounded-3xl border-4 border-white shadow-lg ${photo.size}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
