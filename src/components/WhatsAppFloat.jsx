import { FaWhatsapp } from "react-icons/fa";
import { CONTACT, PRIMARY_WHATSAPP_LINK } from "../config/contact";

export default function WhatsAppFloat() {
  return (
    <a
      href={PRIMARY_WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label={`WhatsApp ${CONTACT.brandName}`}
      title={`Chat on WhatsApp • ${CONTACT.brandName}`}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Glow + Pulse */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 blur-xl animate-pulse" />

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl transition duration-200 hover:scale-110 active:scale-95">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </a>
  );
}
