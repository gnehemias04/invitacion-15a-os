import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-11-15T21:00:00-03:00").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  function getTimeLeft() {
    const difference = EVENT_DATE - Date.now();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Días", value: timeLeft?.days },
    { label: "Horas", value: timeLeft?.hours },
    { label: "Minutos", value: timeLeft?.minutes },
    { label: "Segundos", value: timeLeft?.seconds },
  ];

  return (
    <section className="bg-linear-to-br from-fuchsia-700 to-violet-900 px-6 py-16 text-center text-white">
      {" "}
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-200">
        La cuenta regresiva comenzó{" "}
      </p>
      <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
        ¡Cada vez falta menos!
      </h2>
      {timeLeft ? (
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
              <p className="text-4xl font-bold sm:text-5xl">
                {String(unit.value).padStart(2, "0")}
              </p>

              <p className="mt-2 text-sm uppercase tracking-widest text-pink-200">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl font-semibold">¡Hoy es el gran día! 🎉</p>
      )}
    </section>
  );
}
