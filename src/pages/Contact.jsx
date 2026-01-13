import FloatingHearts from "../components/FloatingHearts";
import { CONTACT } from "../config/contact";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    CONTACT.whatsappDefaultMessage
  )}`;

  const telLink = `tel:${(CONTACT.phoneNumber || "").replace(/\s/g, "")}`;
  const mailLink = `mailto:${CONTACT.email}`;

  return (
    <div className="min-h-screen bg-pink-50 relative overflow-hidden px-6 pt-28 pb-16">
      <FloatingHearts />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 drop-shadow-sm">
            Contact Us 💗
          </h1>
          <p className="mt-3 text-pink-600/80 text-lg max-w-2xl mx-auto">
            For premium bookings & inquiries, connect with us instantly.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl font-extrabold text-pink-700">
                {CONTACT.brandName}
              </h2>

              <p className="mt-2 text-pink-600/80 leading-relaxed">
                We provide premium experiences with privacy, class, and luxury.
                Choose your preferred way to contact us below.
              </p>

              {/* CONTACT BUTTONS */}
              <div className="mt-6 grid gap-4">
                {/* WhatsApp */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-pink-200 bg-pink-50 px-5 py-4 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow">
                      <FaWhatsapp className="text-white text-2xl" />
                    </div>
                    <div>
                      <p className="font-bold text-pink-800">WhatsApp</p>
                      <p className="text-sm text-pink-600/70">
                        Instant booking & availability
                      </p>
                    </div>
                  </div>
                  <span className="text-pink-600 font-semibold">Open →</span>
                </a>

                {/* Call */}
                <a
                  href={telLink}
                  className="flex items-center justify-between rounded-2xl border border-pink-200 bg-pink-50 px-5 py-4 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center shadow">
                      <FaPhoneAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-pink-800">Call Us</p>
                      <p className="text-sm text-pink-600/70">
                        {CONTACT.phoneNumber}
                      </p>
                    </div>
                  </div>
                  <span className="text-pink-600 font-semibold">Call →</span>
                </a>

                {/* Email */}
                <a
                  href={mailLink}
                  className="flex items-center justify-between rounded-2xl border border-pink-200 bg-pink-50 px-5 py-4 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center shadow">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-pink-800">Email</p>
                      <p className="text-sm text-pink-600/70">{CONTACT.email}</p>
                    </div>
                  </div>
                  <span className="text-pink-600 font-semibold">Mail →</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              {/* Social Card */}
              <div className="rounded-2xl border border-pink-200 bg-pink-50 p-6">
                <h3 className="text-xl font-extrabold text-pink-700">
                  Social Links ✨
                </h3>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Follow us for updates & premium collections.
                </p>

                <div className="mt-5 flex gap-3 flex-wrap">
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-pink-200 hover:bg-pink-100 transition font-semibold text-pink-700 shadow-sm"
                  >
                    <FaInstagram /> Instagram
                  </a>

                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-pink-200 hover:bg-pink-100 transition font-semibold text-pink-700 shadow-sm"
                  >
                    <FaFacebookF /> Facebook
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="rounded-2xl border border-pink-200 bg-pink-50 p-6 mt-6">
                <h3 className="text-xl font-extrabold text-pink-700">
                  Location 📍
                </h3>

                <div className="mt-3 flex items-start gap-3">
                  <FaMapMarkerAlt className="text-pink-500 text-xl mt-1" />
                  <p className="text-pink-700 font-semibold">
                    {CONTACT.address}
                  </p>
                </div>

                <p className="mt-3 text-sm text-pink-600/80 leading-relaxed">
                  Discreet premium service. Location shared after booking
                  confirmation.
                </p>
              </div>

              {/* Glow */}
              <div className="mt-6 flex justify-center">
                <div className="w-[260px] h-[260px] rounded-full bg-pink-300/30 blur-[80px] animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* FOOT NOTE */}
        <p className="mt-8 text-center text-xs text-pink-600/70">
          * We respect your privacy. Premium bookings only.
        </p>
      </div>
    </div>
  );
}
