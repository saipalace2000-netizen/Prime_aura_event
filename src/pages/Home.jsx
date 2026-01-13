import { Link } from "react-router-dom";
import FloatingHearts from "../components/FloatingHearts";
import { CONTACT } from "../config/contact";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaShieldAlt,
  FaLock,
  FaUserCheck,
  FaStar,
  FaGlassCheers,
  FaMapMarkedAlt,
  FaCrown,
} from "react-icons/fa";

export default function Home() {
  const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    CONTACT.whatsappDefaultMessage
  )}`;

  return (
    <div className="bg-pink-50 relative overflow-hidden">
      {/* ✅ Floating Hearts Background */}
      <FloatingHearts />

      {/* ✅ SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are profiles verified on Prime Aura Events?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prime Aura Events focuses on curated premium presentation and trusted private communication. Profiles are showcased with a quality-first approach.",
                },
              },
              {
                "@type": "Question",
                name: "Is client privacy protected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Privacy and discretion are treated as top priority. Inquiries and booking discussions are handled confidentially.",
                },
              },
              {
                "@type": "Question",
                name: "How do bookings work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Browse profiles, then contact us via WhatsApp or Contact page for availability and confirmation.",
                },
              },
              {
                "@type": "Question",
                name: "Is this service for adults only?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Prime Aura Events is strictly for adults aged 18+ only.",
                },
              },
            ],
          }),
        }}
      />

      {/* ✅ HERO SECTION (Full Screen) */}
      <section className="min-h-[100vh] pt-28 pb-10 px-6 flex items-center justify-center relative z-10">
        <div className="max-w-6xl w-full text-center">
          {/* Big Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/pictures/prime_logo.png"
              alt={CONTACT.brandName}
              className="h-44 md:h-60 lg:h-72 w-auto animate-float-slow drop-shadow-2xl"
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-pink-700 drop-shadow-sm">
            {CONTACT.brandName}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg md:text-2xl text-pink-600/80 max-w-3xl mx-auto">
            Luxury companionship • Korean pink aesthetics • Private bookings •
            Premium experience
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-5 justify-center flex-wrap">
            <Link to="/profiles" className="btn-primary text-lg">
              View Verified Profiles ✨
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-lg flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp Booking
            </a>
          </div>

          {/* Trust Indicators Row */}
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap text-sm md:text-base text-pink-700/80">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" /> Verified Profiles
            </span>

            <span className="opacity-40">•</span>

            <span className="flex items-center gap-2">
              <FaLock className="text-pink-500" /> Private & Discreet
            </span>

            <span className="opacity-40">•</span>

            <span className="flex items-center gap-2">
              <FaShieldAlt className="text-pink-500" /> Trusted Booking
            </span>

            <span className="opacity-40">•</span>

            <span className="font-semibold text-pink-700">18+ Adults Only</span>
          </div>

          {/* Glow */}
          <div className="mt-14 flex justify-center">
            <div className="w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full bg-pink-300/35 blur-[110px] animate-pulse-slow" />
          </div>
        </div>
      </section>
      {/* ✅ HOW IT WORKS */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              How Prime Aura Events Works
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              A smooth, private, and premium process designed for comfort and clarity.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "1. Browse Profiles",
                  desc: "Explore curated Indian and Russian collections with premium presentation and verified styling.",
                },
                {
                  title: "2. Private Inquiry",
                  desc: "Contact us discreetly through WhatsApp or Contact page for availability and details.",
                },
                {
                  title: "3. Confirm & Enjoy",
                  desc: "Once confirmed, enjoy a premium experience with privacy and respect as top priority.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-pink-50 border border-pink-200 p-6 text-center shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-bold text-pink-700">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-pink-600/80 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/profiles" className="btn-primary text-lg inline-block">
                Browse Profiles ✨
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ WHY CHOOSE US */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Why Choose Prime Aura Events 💗
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              A luxury platform built around discretion, premium presentation, and trustworthy booking.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaUserCheck className="text-pink-500 text-2xl" />,
                  title: "Curated Premium Profiles",
                  desc: "Quality-first presentation and a premium browsing experience designed for elite expectations.",
                },
                {
                  icon: <FaLock className="text-pink-500 text-2xl" />,
                  title: "Private Communication",
                  desc: "We prioritize confidentiality. Conversations and inquiries are handled discreetly.",
                },
                {
                  icon: <FaCrown className="text-pink-500 text-2xl" />,
                  title: "Luxury Aura Experience",
                  desc: "Designed for refined individuals seeking premium companionship for exclusive occasions.",
                },
              ].map((box, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-pink-50 border border-pink-200 p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 text-pink-700 font-bold text-lg">
                    {box.icon} {box.title}
                  </div>
                  <p className="mt-2 text-pink-600/80 text-sm leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust badges mini row */}
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              {[
                { label: "Verified Profiles", icon: "✅" },
                { label: "Private Booking", icon: "🔒" },
                { label: "Premium Standard", icon: "💎" },
                { label: "Adults Only (18+)", icon: "🔞" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-pink-200 px-5 py-4 shadow-sm text-pink-700 font-semibold"
                >
                  <div className="text-xl mb-1">{t.icon}</div>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ✅ LONG FORM TRUST CONTENT */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              A Premium Aura You’ll Feel Instantly
            </h2>

            <div className="mt-8 space-y-5 text-pink-700/80 text-[15px] md:text-base leading-relaxed max-w-4xl mx-auto">
              <p>
                Prime Aura Events is created for clients who value refinement,
                comfort, and discretion. Our platform focuses on premium browsing
                and professional communication, ensuring a smooth experience
                from exploration to confirmation.
              </p>

              <p>
                We understand the importance of privacy in premium services.
                That’s why inquiries are handled discreetly and respectfully.
                Our goal is to maintain a trustworthy environment where clients
                can explore companionship options without confusion.
              </p>

              <p>
                Many premium clients prefer a platform that feels exclusive,
                organized, and high-class. Prime Aura Events offers a curated
                collection and a premium aesthetic inspired by Korean luxury pink
                style, designed to look elegant on mobile and desktop.
              </p>

              <p className="font-semibold text-pink-700">
                ✔ Verified presentation • ✔ Discreet booking • ✔ Adults 18+ only
              </p>
            </div>

            <div className="mt-10 text-center">
              <Link to="/contact" className="btn-outline text-lg inline-block">
                Contact Us Privately
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SERVICE CATEGORIES */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Our Service Categories ✨
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              Carefully curated experiences designed for elite comfort and premium events.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaGlassCheers className="text-pink-500 text-2xl" />,
                  title: "Private Events & Parties",
                  desc: "Perfect for celebrations, premium parties and exclusive gatherings.",
                },
                {
                  icon: <FaStar className="text-pink-500 text-2xl" />,
                  title: "Premium Lifestyle Experiences",
                  desc: "Luxury companionship for refined interactions and elite moments.",
                },
                {
                  icon: <FaMapMarkedAlt className="text-pink-500 text-2xl" />,
                  title: "Travel & Outings",
                  desc: "Weekend travel, premium outings and private venue arrangements.",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-pink-50 border border-pink-200 p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 text-pink-700 font-bold text-lg">
                    {c.icon} {c.title}
                  </div>
                  <p className="mt-2 text-pink-600/80 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/profiles" className="btn-primary text-lg inline-block">
                Explore Profiles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CREDIBILITY COUNTERS */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Premium Trust Indicators
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              Built for clients who prefer privacy, confidence, and premium communication.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { big: "100%", label: "Privacy Commitment" },
                { big: "Verified", label: "Curated Presentation" },
                { big: "24/7", label: "Private Support" },
                { big: "18+", label: "Adults Only Platform" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-pink-50 border border-pink-200 p-6 shadow-sm"
                >
                  <p className="text-3xl md:text-4xl font-extrabold text-pink-700">
                    {item.big}
                  </p>
                  <p className="mt-2 text-sm text-pink-600/80 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIALS */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Client Experiences 💬
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              Professional, discreet, and premium — designed for elite comfort.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  text: "“Everything was handled privately and professionally. Very smooth communication and premium service.”",
                  name: "— Private Client",
                },
                {
                  text: "“The platform feels premium and well-organized. I liked the discretion and the way details were explained clearly.”",
                  name: "— Verified Booking",
                },
                {
                  text: "“High-class experience. Respectful communication and premium presentation — exactly as expected.”",
                  name: "— Event Client",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-pink-50 border border-pink-200 p-6 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-pink-700/80 text-sm leading-relaxed">
                    {t.text}
                  </p>
                  <p className="mt-4 text-xs font-semibold text-pink-700">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FAQ SECTION */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Trust & Common Questions ✨
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Are all profiles verified?",
                  a: "Prime Aura Events focuses on curated profile presentation and premium trust standards with privacy-first communication.",
                },
                {
                  q: "Is privacy protected?",
                  a: "Yes. Discretion and confidentiality are maintained during inquiry and booking.",
                },
                {
                  q: "How do bookings work?",
                  a: "Browse profiles and contact us privately on WhatsApp for availability and confirmation.",
                },
                {
                  q: "Is this service for adults only?",
                  a: "Yes. Prime Aura Events is strictly intended for adults aged 18+ only.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-pink-50 border border-pink-200 p-6 shadow-sm"
                >
                  <h3 className="font-extrabold text-pink-700 text-lg">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-pink-600/80 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/profiles" className="btn-outline text-lg inline-block">
                Explore Profiles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FINAL CTA */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to Explore a Premium Experience?
            </h2>

            <p className="mt-4 text-white/90 max-w-3xl mx-auto">
              Browse verified profiles or make a private inquiry. Designed for
              people who value privacy, comfort, and premium companionship.
            </p>

            <div className="mt-8 flex gap-4 justify-center flex-wrap">
              <Link
                to="/profiles"
                className="px-8 py-3 bg-white text-pink-600 rounded-full font-bold shadow-lg hover:opacity-95 transition"
              >
                View Profiles ✨
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 border border-white text-white rounded-full font-bold hover:bg-white/10 transition"
              >
                WhatsApp Inquiry
              </a>
            </div>

            <p className="mt-6 text-xs text-white/70">
              18+ Only • All interactions are respectful and private
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
