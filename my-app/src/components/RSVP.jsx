import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Sí, voy a asistir");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");

  // Reemplazar por el número de WhatsApp del cliente.
  // Incluir el código de país, sin el signo + ni espacios.
  const whatsappNumber = "5491112345678";

  function handleSubmit(event) {
    event.preventDefault();

    const text = `
¡Hola! Quiero confirmar mi asistencia a los 15 años de Valentina.

Nombre: ${name}
Confirmación: ${attendance}
Cantidad de personas: ${attendance === "Sí, voy a asistir" ? guests : "0"}

Mensaje: ${message || "Sin mensaje adicional"}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="confirmar"
      className="bg-linear-to-br from-violet-900 via-fuchsia-800 to-pink-700 px-6 py-20 text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-pink-200">
          Tu presencia es especial
        </p>

        <h2 className="mb-4 text-center text-4xl font-bold sm:text-5xl">
          ¿Me acompañás?
        </h2>

        <p className="mb-10 max-w-xl text-center text-lg leading-relaxed text-white/80">
          Estoy preparando una noche inolvidable y me encantaría compartirla con
          vos. Confirmá tu asistencia completando el siguiente formulario.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-10">
          <div>
            <label htmlFor="guest-name" className="mb-2 block font-semibold">
              Tu nombre completo
            </label>

            <input
              id="guest-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Escribí tu nombre"
              required
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-violet-950 outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label htmlFor="attendance" className="mb-2 block font-semibold">
              ¿Vas a asistir?
            </label>

            <select
              id="attendance"
              value={attendance}
              onChange={(event) => setAttendance(event.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-violet-950 outline-none focus:ring-2 focus:ring-pink-300">
              <option>Sí, voy a asistir</option>
              <option>Lo siento, no podré asistir</option>
            </select>
          </div>

          {attendance === "Sí, voy a asistir" && (
            <div>
              <label htmlFor="guests" className="mb-2 block font-semibold">
                ¿Cuántas personas asistirán?
              </label>

              <select
                id="guests"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-violet-950 outline-none focus:ring-2 focus:ring-pink-300">
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor="message" className="mb-2 block font-semibold">
              Mensaje para Valentina (opcional)
            </label>

            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="¡Dejale un mensaje!"
              rows={3}
              className="w-full resize-y rounded-xl border border-white/20 bg-white px-4 py-3 text-violet-950 outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-4 font-bold text-fuchsia-700 shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-pink-300">
            💌 Confirmar por WhatsApp
          </button>

          <p className="text-center text-sm text-white/70">
            Tu confirmación se enviará mediante WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
}
