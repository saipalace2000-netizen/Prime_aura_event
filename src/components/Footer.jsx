import { Link } from "react-router-dom";
import {
  CONTACT,
  PRIMARY_WHATSAPP_LINK,
  SECONDARY_WHATSAPP_LINK,
} from "../config/contact";

import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-pink-200/70">
      <div className="max-w-7xl mx-auto px-6 py-14">
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
              A premium platform designed for privacy, discretion, and refined
              experiences. Curated profiles with trusted, confidential
              communication.
            </p>

            <p className="mt-4 text-xs text-pink-600/70">
              By Appointment Only · Adults 18+
            </p>

            <p className="mt-2 text-xs text-pink-600/60">
              Available Across India
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-extrabold text-pink-700 mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-pink-700 font-medium text-sm">
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>
              <Link to="/profiles" className="hover:text-pink-500 transition">
                Profiles
              </Link>
              <Link to="/standards" className="hover:text-pink-500 transition">
                Trust & Safety
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
              {/* WhatsApp Primary */}
              <a
                href={PRIMARY_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaWhatsapp className="text-green-500" />
                WhatsApp Booking (Primary)
              </a>

              {/* WhatsApp Secondary */}
              <a
                href={SECONDARY_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaWhatsapp className="text-green-500" />
                WhatsApp Booking (Secondary)
              </a>

              {/* Phone numbers display */}
              <div className="flex items-start gap-2 text-pink-700/80">
                <FaPhoneAlt className="mt-1 text-pink-500" />
                <div className="text-sm">
                  <p className="font-semibold">{CONTACT.primary.phone}</p>
                  <p className="font-semibold">{CONTACT.secondary.phone}</p>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaEnvelope />
                {CONTACT.email}
              </a>

              {/* Instagram */}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaInstagram />
                Instagram
              </a>

              {/* Facebook */}
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

            {/* CTA Button */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={PRIMARY_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-5 py-2 text-white text-sm font-semibold hover:bg-pink-500 transition"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-pink-200 px-5 py-2 text-pink-700 text-sm font-semibold hover:bg-pink-50 transition"
              >
                View Contact Page →
              </Link>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="mt-14 border-t border-pink-200/70 pt-8 text-center">
          <h4 className="text-sm font-extrabold text-pink-700 uppercase tracking-wide mb-3">
            Major Cities We Serve
          </h4>

          <p className="text-sm text-pink-600/70 max-w-5xl mx-auto leading-relaxed">
            Mumbai · Pune · Bangalore · Ahmedabad · Jaipur · Surat · Delhi ·
            Kolkata · Nagpur · Goa · Bhopal · Indore · Diu &amp; Daman
          </p>

          <h4 className="mt-6 text-sm font-extrabold text-pink-700 uppercase tracking-wide mb-3">
            Pune Service Areas
          </h4>

          <p className="text-sm text-pink-600/65 max-w-5xl mx-auto leading-relaxed">
            Kalyani Nagar · Koregaon Park · Viman Nagar · Kharadi · Hinjawadi ·
            Baner · Aundh · Bavdhan · Hadapsar · Shivaji Nagar · Deccan ·
            Swargate · Camp · Magarpatta · Pimpri-Chinchwad · Chakan
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-pink-200/70 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-pink-600/70">
          <p>
            © {new Date().getFullYear()} {CONTACT.brandName}. All rights reserved.
          </p>
          <p>Privacy-first • Premium service • Adults only (18+)</p>
        </div>
      </div>
    </footer>
  );
}
