import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "../config/contact";

export default function WhatsAppFloat() {
  const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    CONTACT.whatsappDefaultMessage
  )}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
      title="WhatsApp Booking"
    >
      <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-105 transition">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </a>
  );
}
