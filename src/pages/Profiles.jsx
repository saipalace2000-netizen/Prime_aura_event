import { useMemo, useState, useEffect } from "react";
import { FaCheckCircle, FaWhatsapp, FaTimes } from "react-icons/fa";
import { CONTACT } from "../config/contact";

export default function Profiles() {
  const [selected, setSelected] = useState(null);

  const { indianModels, russianModels } = useMemo(() => {
    const indian = import.meta.glob("../assets/profiles/*.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
    });

    const russian = import.meta.glob(
      "../assets/profiles/Russian/*.{png,jpg,jpeg,webp}",
      { eager: true, import: "default" }
    );

    /* ❌ BLOCKED NAMES */
    const blockedIndianNames = [
      "aliya",
      "ananya",
      "maya",
      "sara",
      "sana",
      "zara",
      "isha",
    ];

    const blockedRussianNames = [
      "olga",
      "ekaterina",
      "karina",
      "maria",
      "sofia",
    ];

    /* 🇮🇳 INDIAN MODELS */
    const indianList = Object.entries(indian)
      .filter(([path]) => !path.toLowerCase().includes("logo.png"))
      .map(([path, src], index) => {
        const fileName = path.split("/").pop() || "";
        const rawName = fileName.replace(/\.(png|jpg|jpeg|webp)$/i, "");

        const prettyName = rawName
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        return {
          id: `IN-${index + 1}`,
          name: prettyName || `Model ${index + 1}`,
          src,
          collection: "Premium Collection",
          verified: true,
          type: "Indian",
        };
      })
      .filter(
        (model) =>
          !blockedIndianNames.some((name) =>
            model.name.toLowerCase().includes(name)
          )
      );

    /* 🇷🇺 RUSSIAN MODELS */
    const russianNames = [
      "Anastasia",
      "Sofia",
      "Olga",
      "Natalia",
      "Maria",
      "Irina",
      "Daria",
      "Polina",
      "Ekaterina",
      "Alina",
      "Yulia",
      "Veronika",
      "Viktoria",
      "Karina",
      "Elena",
      "Ksenia",
      "Tatyana",
      "Kristina",
      "Mila",
      "Zoya",
    ];

    const russianList = Object.entries(russian)
      .filter(([path]) => !path.toLowerCase().includes("logo.png"))
      .map(([path, src], index) => ({
        id: `RU-${index + 1}`,
        name: russianNames[index] || `Russian Model ${index + 1}`,
        src,
        collection: "Russian Collection",
        verified: true,
        type: "Russian",
      }))
      .filter(
        (model) =>
          !blockedRussianNames.some((name) =>
            model.name.toLowerCase().includes(name)
          )
      );

    return { indianModels: indianList, russianModels: russianList };
  }, []);

  /* ESC TO CLOSE MODAL */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const getWaLink = (modelName) => {
    const msg =
      `${CONTACT.whatsappDefaultMessage}\n\n` +
      `✅ I want to book: *${modelName}*\n` +
      `📍 Service: Premium Booking\n` +
      `⏳ Duration: (Please share options)\n` +
      `📅 Date: (Tell me available slots)\n`;

    return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
      msg
    )}`;
  };

  const ProfileCard = ({ model }) => (
    <button
      onClick={() => setSelected(model)}
      className="text-left rounded-2xl overflow-hidden bg-white border border-pink-200 shadow-lg hover:shadow-2xl transition hover:-translate-y-1 duration-200"
    >
      <div className="relative">
        <img
          src={model.src}
          alt={model.name}
          className="w-full h-[300px] object-cover"
          loading="lazy"
        />

        {model.verified && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-pink-700 shadow">
              ✅ Verified
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-extrabold text-pink-700">
            {model.name}
          </h3>
          {model.verified && (
            <FaCheckCircle className="text-blue-500 text-lg" />
          )}
        </div>
        <p className="text-sm text-pink-500">{model.collection}</p>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen px-6 pt-28 pb-14 bg-pink-50">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700">
            Profiles ✨
          </h1>
          <p className="mt-2 text-pink-500/80 text-lg">
            Browse our Premium Indian and Russian Collections
          </p>
        </div>

        {/* INDIAN */}
        <section className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-extrabold text-pink-700 mb-4">
            🇮🇳 Indian Models
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {indianModels.map((m) => (
              <ProfileCard key={m.id} model={m} />
            ))}
          </div>
        </section>

        {/* RUSSIAN */}
        <section className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-extrabold text-pink-700 mb-4">
            🇷🇺 Russian Models
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {russianModels.map((m) => (
              <ProfileCard key={m.id} model={m} />
            ))}
          </div>
        </section>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden"
          >
            <div className="flex justify-between items-center p-5 border-b">
              <h3 className="text-2xl font-extrabold text-pink-700">
                {selected.name}
              </h3>
              <button onClick={() => setSelected(null)}>
                <FaTimes />
              </button>
            </div>

            <div className="grid md:grid-cols-2">
              <img
                src={selected.src}
                alt={selected.name}
                className="h-full object-cover"
              />

              <div className="p-8">
                <p className="text-pink-600">
                  {selected.collection} • {selected.type}
                </p>

                <a
                  href={getWaLink(selected.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 btn-primary"
                >
                  <FaWhatsapp /> Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
