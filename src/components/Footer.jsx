import { Link } from "react-router-dom";
import { CONTACT } from "../config/contact";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    CONTACT.whatsappDefaultMessage
  )}`;

  return (
    <footer className="relative bg-white border-t border-pink-200/70">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/pictures/prime_logo.png"
                alt={CONTACT.brandName}
                className="h-12 w-auto drop-shadow"
              />
              <h3 className="text-xl font-extrabold text-pink-700">
                {CONTACT.brandName}
              </h3>
            </div>

            <p className="mt-4 text-pink-600/80 text-sm leading-relaxed max-w-sm">
              A premium platform designed for privacy, discretion, and luxury
              experience. Curated profiles and trusted communication.
            </p>

            <p className="mt-4 text-xs text-pink-600/60">
              18+ Only • Respectful & Private
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-extrabold text-pink-700 mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-pink-700 font-medium">
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>

              <Link to="/profiles" className="hover:text-pink-500 transition">
                Profiles
              </Link>

              <Link to="/standards" className="hover:text-pink-500 transition">
                Trust
              </Link>

              <Link to="/contact" className="hover:text-pink-500 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-extrabold text-pink-700 mb-4">
              Contact
            </h4>

            <div className="flex flex-col gap-3 text-sm text-pink-700">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaWhatsapp className="text-green-500" />
                WhatsApp Booking
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaEnvelope />
                {CONTACT.email}
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaFacebookF />
                Facebook
              </a>
            </div>

            <div className="mt-5">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-6 border-t border-pink-200/70 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-pink-600/70">
          <p>
            © {new Date().getFullYear()} {CONTACT.brandName}. All rights reserved.
          </p>
          <p>Privacy-first • Premium service • Adults only (18+)</p>
        </div>
      </div>
    </footer>
  );
}
