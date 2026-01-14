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
      {/* Floating Hearts */}
      <FloatingHearts />

      {/* SEO FAQ SCHEMA */}
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
                  text:
                    "Yes. All profiles presented on Prime Aura Events are carefully curated with a quality-first and trust-focused approach.",
                },
              },
              {
                "@type": "Question",
                name: "Is client privacy protected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Absolutely. All inquiries, communications, and arrangements are handled discreetly and confidentially.",
                },
              },
              {
                "@type": "Question",
                name: "Is Prime Aura Events for adults only?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Prime Aura Events is strictly intended for adults aged 19 and above only.",
                },
              },
              {
                "@type": "Question",
                name: "How does booking work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Clients can browse profiles and contact us privately via WhatsApp or the contact page for availability and confirmation.",
                },
              },
            ],
          }),
        }}
      />

      {/* HERO SECTION */}
      <section className="min-h-[100vh] pt-28 pb-20 px-6 flex items-center justify-center relative z-10">
        <div className="max-w-6xl w-full text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/pictures/prime_logo.png"
              alt={CONTACT.brandName}
              className="h-44 md:h-60 lg:h-72 w-auto animate-float-slow drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-pink-700 drop-shadow-sm">
            {CONTACT.brandName}
          </h1>

          <p className="mt-5 text-lg md:text-2xl text-pink-600/80 max-w-3xl mx-auto">
            Premium companionship • Private social experiences • Verified
            presentation • Discreet bookings
          </p>

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

          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap text-sm md:text-base text-pink-700/80">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Verified Profiles
            </span>
            <span className="opacity-40">•</span>
            <span className="flex items-center gap-2">
              <FaLock className="text-pink-500" />
              Private & Discreet
            </span>
            <span className="opacity-40">•</span>
            <span className="flex items-center gap-2">
              <FaShieldAlt className="text-pink-500" />
              Trusted Platform
            </span>
            <span className="opacity-40">•</span>
            <span className="font-semibold">19+ Adults Only</span>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full bg-pink-300/35 blur-[110px] animate-pulse-slow" />
          </div>
        </div>
      </section>
      {/* ✅ LONG FORM TRUST CONTENT */}

      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Premium Social Companionship & Private Event Experiences
            </h2>

            <div className="mt-8 space-y-6 text-pink-700/80 text-[15px] md:text-base leading-relaxed max-w-5xl mx-auto">
              <p>
                Prime Aura Events is designed for individuals who seek refined social
                companionship delivered with discretion, professionalism, and respect.
                Our platform focuses on curated presentation and private communication,
                ensuring a premium experience from the very first interaction.
              </p>

              <p>
                Unlike generic platforms, Prime Aura Events emphasizes quality over
                quantity. Every profile is presented with attention to detail, clarity,
                and authenticity, allowing clients to explore options comfortably and
                confidently. This structured approach helps maintain a trustworthy and
                organized environment.
              </p>

              <p>
                Many clients choose Prime Aura Events for private gatherings, exclusive
                celebrations, and invitation-only occasions where discretion and social
                comfort are essential. Whether it is a private event, a premium party,
                or a refined social engagement, our platform supports smooth and
                respectful coordination.
              </p>

              <p>
                Privacy is treated as a fundamental priority. All inquiries, discussions,
                and arrangements are handled confidentially. Personal information is
                never disclosed to third parties, and communication remains limited to
                secure, private channels.
              </p>

              <p>
                Prime Aura Events operates strictly for adults aged 19 and above. All
                interactions are expected to follow clear consent, mutual respect, and
                lawful guidelines. This ensures a safe, comfortable, and responsible
                environment for everyone involved.
              </p>

              <p>
                By maintaining transparent communication, professional conduct, and a
                privacy-first approach, Prime Aura Events continues to build trust with
                individuals who value quality social companionship and premium event
                experiences.
              </p>

              <p className="font-semibold text-pink-700">
                ✔ Curated Presentation • ✔ Discreet Communication • ✔ Adults 19+ Only
              </p>
            </div>
          </div>



        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              How Prime Aura Events Works
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              A refined, discreet, and professional process inspired by premium
              elite event experiences.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6 text-center">
                <h3 className="text-xl font-bold text-pink-700">
                  1. Browse Curated Profiles
                </h3>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Explore premium profiles selected for presentation,
                  professionalism, and authenticity.
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6 text-center">
                <h3 className="text-xl font-bold text-pink-700">
                  2. Private Inquiry
                </h3>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Connect discreetly to discuss availability, preferences, and
                  arrangements.
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6 text-center">
                <h3 className="text-xl font-bold text-pink-700">
                  3. Confirm & Experience
                </h3>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Enjoy a premium social experience focused on comfort,
                  discretion, and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Why Choose Prime Aura Events 💗
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              Inspired by elite event standards — built around discretion,
              professionalism, and premium comfort.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <div className="flex items-center gap-3 text-pink-700 font-bold">
                  <FaUserCheck /> Verified & Curated Profiles
                </div>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Each profile is carefully reviewed to maintain quality,
                  presentation, and reliability.
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <div className="flex items-center gap-3 text-pink-700 font-bold">
                  <FaLock /> Complete Privacy
                </div>
                <p className="mt-2 text-pink-600/80 text-sm">
                  All conversations, preferences, and arrangements remain
                  strictly confidential.
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <div className="flex items-center gap-3 text-pink-700 font-bold">
                  <FaCrown /> Premium Aura Experience
                </div>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Designed for refined individuals seeking quality social
                  companionship.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="rounded-2xl bg-white border border-pink-200 px-5 py-4 font-semibold text-pink-700">
                ✅ Verified Profiles
              </div>
              <div className="rounded-2xl bg-white border border-pink-200 px-5 py-4 font-semibold text-pink-700">
                🔒 Private Booking
              </div>
              <div className="rounded-2xl bg-white border border-pink-200 px-5 py-4 font-semibold text-pink-700">
                💎 Premium Standard
              </div>
              <div className="rounded-2xl bg-white border border-pink-200 px-5 py-4 font-semibold text-pink-700">
                🔞 Adults Only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG TRUST CONTENT */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              A Premium Social Experience You Can Trust
            </h2>

            <div className="mt-8 space-y-6 text-pink-700/80 text-[15px] md:text-base leading-relaxed max-w-4xl mx-auto">
              <p>
                Prime Aura Events draws inspiration from elite event service
                standards where professionalism, discretion, and respect are
                paramount. Our platform is designed to feel refined, organized,
                and premium from the very first interaction.
              </p>

              <p>
                Many clients prefer a platform that avoids exaggeration and
                focuses instead on quality, transparency, and trust. This is why
                Prime Aura Events emphasizes curated presentation and private
                communication over public claims.
              </p>

              <p>
                Whether the requirement is a private social gathering, a premium
                celebration, or a discreet engagement, our approach ensures
                comfort and clarity at every stage.
              </p>

              <p className="font-semibold text-pink-700">
                ✔ Discreet Communication • ✔ Professional Conduct • ✔ Adults 19+
                Only
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ TRUST REINFORCEMENT (MULTI-ANGLE) */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">

            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Built on Trust, Discretion & Professionalism
            </h2>

            <div className="mt-10 space-y-8 text-pink-700/80 text-[15px] md:text-base leading-relaxed max-w-5xl mx-auto">

              {/* Angle 1 */}
              <div>
                <h3 className="font-bold text-pink-700 text-lg mb-2">
                  Consistent Professional Standards
                </h3>
                <p>
                  Prime Aura Events maintains clear professional standards across all
                  interactions. From profile presentation to private communication,
                  every step is structured to promote comfort, clarity, and respect.
                </p>
              </div>

              {/* Angle 2 */}
              <div>
                <h3 className="font-bold text-pink-700 text-lg mb-2">
                  Discretion at Every Stage
                </h3>
                <p>
                  Discretion is not limited to booking alone. Inquiries, discussions,
                  preferences, and confirmations are handled privately, ensuring that
                  personal information remains protected throughout the process.
                </p>
              </div>

              {/* Angle 3 */}
              <div>
                <h3 className="font-bold text-pink-700 text-lg mb-2">
                  Clear & Transparent Communication
                </h3>
                <p>
                  We prioritize honest and transparent communication to avoid
                  misunderstandings. Availability, expectations, and arrangements are
                  discussed clearly before confirmation, allowing clients to proceed
                  with confidence.
                </p>
              </div>

              {/* Angle 4 */}
              <div>
                <h3 className="font-bold text-pink-700 text-lg mb-2">
                  Verified Presentation & Authenticity
                </h3>
                <p>
                  All profiles featured on Prime Aura Events are curated to maintain
                  authenticity and quality. This approach helps clients make informed
                  decisions while preserving trust and reliability.
                </p>
              </div>

              {/* Angle 5 */}
              <div>
                <h3 className="font-bold text-pink-700 text-lg mb-2">
                  Respectful & Responsible Engagement
                </h3>
                <p>
                  Mutual respect is expected from all parties. Prime Aura Events
                  operates exclusively for adults aged 19+ and follows a responsible,
                  consent-based approach to every interaction.
                </p>
              </div>
              {/* ✅ PROFILE OVERVIEW TABLE */}
              <section className="px-6 pb-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
                      Companion Overview (Sample)
                    </h2>

                    <p className="mt-4 text-center text-pink-600/80 text-sm max-w-3xl mx-auto">
                      The table below provides a general overview of the types of profiles
                      available. Exact details are shared privately to maintain discretion
                      and privacy.
                    </p>

                    <div className="mt-10 overflow-x-auto rounded-xl border border-pink-200">
                      <table className="min-w-full text-sm text-pink-700">
                        <thead className="bg-pink-100">
                          <tr>
                            <th className="px-6 py-4 text-left font-bold">Profile Name</th>
                            <th className="px-6 py-4 text-left font-bold">Age</th>
                            <th className="px-6 py-4 text-left font-bold">Profile Type</th>
                            <th className="px-6 py-4 text-left font-bold">Languages</th>
                            <th className="px-6 py-4 text-left font-bold">Availability</th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-pink-200">
                          <tr className="hover:bg-pink-50 transition">
                            <td className="px-6 py-4">Alina</td>
                            <td className="px-6 py-4">25</td>
                            <td className="px-6 py-4">VIP · International</td>
                            <td className="px-6 py-4">English, Russian</td>
                            <td className="px-6 py-4">Full-time</td>
                          </tr>

                          <tr className="hover:bg-pink-50 transition">
                            <td className="px-6 py-4">Tanya</td>
                            <td className="px-6 py-4">27</td>
                            <td className="px-6 py-4">Model · Premium</td>
                            <td className="px-6 py-4">English, Hindi</td>
                            <td className="px-6 py-4">Part-time</td>
                          </tr>

                          <tr className="hover:bg-pink-50 transition">
                            <td className="px-6 py-4">Sophia</td>
                            <td className="px-6 py-4">24</td>
                            <td className="px-6 py-4">International · Independent</td>
                            <td className="px-6 py-4">English, Russian</td>
                            <td className="px-6 py-4">Full-time</td>
                          </tr>

                          <tr className="hover:bg-pink-50 transition">
                            <td className="px-6 py-4">Riya</td>
                            <td className="px-6 py-4">26</td>
                            <td className="px-6 py-4">VIP · Model</td>
                            <td className="px-6 py-4">English, Hindi</td>
                            <td className="px-6 py-4">Weekends</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </section>
              {/* ✅ PRICING OVERVIEW TABLE */}
              <section className="px-6 pb-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
                      Pricing Overview (Indicative)
                    </h2>

                    <p className="mt-4 text-center text-pink-600/80 text-sm max-w-3xl mx-auto">
                      Pricing details are indicative and provided for reference only.
                      Final arrangements depend on profile selection, availability,
                      duration, and event requirements. All details are confirmed privately.
                    </p>

                    <div className="mt-10 overflow-x-auto rounded-xl border border-pink-200">
                      <table className="min-w-full text-sm text-pink-700">
                        <thead className="bg-pink-100">
                          <tr>
                            <th className="px-6 py-4 text-left font-bold">
                              Service Category
                            </th>
                            <th className="px-6 py-4 text-left font-bold">
                              3 Hours · Short Session
                            </th>
                            <th className="px-6 py-4 text-left font-bold">
                              4 Hours · Extended
                            </th>
                            <th className="px-6 py-4 text-left font-bold">
                              Full Experience
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-pink-200">
                          <tr className="hover:bg-pink-50 transition">
                            <td className="px-6 py-4">Premium Indian Profiles</td>
                            <td className="px-6 py-4">₹15,000 – ₹20,000</td>
                            <td className="px-6 py-4">₹25,000 – ₹30,000</td>
                            <td className="px-6 py-4">₹30,000+</td>
                          </tr>

                          <tr className="hover:bg-pink-50 transition">
                            <td className="px-6 py-4">
                              VIP &amp; Model Profiles
                            </td>
                            <td className="px-6 py-4">₹25,000 – ₹30,000</td>
                            <td className="px-6 py-4">₹35,000 – ₹40,000</td>
                            <td className="px-6 py-4">₹40,000+</td>
                          </tr>

                          <tr className="hover:bg-pink-50 transition">
                            <td className="px-6 py-4">
                              International Profiles
                            </td>
                            <td className="px-6 py-4">₹25,000 – ₹30,000</td>
                            <td className="px-6 py-4">₹35,000 – ₹40,000</td>
                            <td className="px-6 py-4">₹40,000+</td>
                          </tr>

                          <tr className="hover:bg-pink-50 transition">
                            <td className="px-6 py-4">
                              Independent Companion
                            </td>
                            <td className="px-6 py-4">₹13,000</td>
                            <td className="px-6 py-4">₹22,000</td>
                            <td className="px-6 py-4">₹32,000+</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="mt-6 text-xs text-pink-600/70 text-center max-w-3xl mx-auto">
                      Prices are indicative and subject to change. Final confirmation,
                      availability, and expectations are discussed privately to ensure
                      transparency and discretion.
                    </p>

                  </div>
                </div>
              </section>



              {/* Summary Line */}
              <p className="font-semibold text-pink-700 text-center mt-6">
                ✔ Professional Conduct • ✔ Privacy First • ✔ Adults 19+ Only
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Our Service Categories ✨
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              Carefully structured offerings inspired by premium elite event
              services.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <div className="flex items-center gap-3 text-pink-700 font-bold">
                  <FaGlassCheers /> Private Events & Celebrations
                </div>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Ideal for private gatherings, celebrations, and invitation-only
                  occasions.
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <div className="flex items-center gap-3 text-pink-700 font-bold">
                  <FaStar /> Premium Lifestyle Companionship
                </div>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Designed for refined interactions and meaningful social
                  experiences.
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <div className="flex items-center gap-3 text-pink-700 font-bold">
                  <FaMapMarkedAlt /> Travel & Outings
                </div>
                <p className="mt-2 text-pink-600/80 text-sm">
                  Weekend outings, premium travel companionship, and private
                  venue arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELITE STYLE SEO CONTENT */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Professional & Discreet Social Companionship
            </h2>

            <div className="mt-8 space-y-6 text-pink-700/80 text-[15px] md:text-base leading-relaxed">
              <p>
                Prime Aura Events is structured around the concept of refined
                social companionship. Our services are intended for adults who
                appreciate quality interaction, comfort, and professionalism.
              </p>

              <p>
                All profiles are presented with careful attention to detail,
                ensuring a polished and trustworthy browsing experience.
                Discretion remains central to how the platform operates.
              </p>

              <p>
                We maintain clear expectations, transparent communication, and a
                respectful approach to every engagement, creating a balanced and
                premium experience for all parties involved.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Client Experiences 💬
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <p className="text-pink-700/80 text-sm">
                  “The communication was respectful, private, and professional.
                  Everything felt organized and premium.”
                </p>
                <p className="mt-4 text-xs font-semibold text-pink-700">
                  — Private Client
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <p className="text-pink-700/80 text-sm">
                  “A refined platform that clearly values discretion and quality.
                  No exaggeration — just clarity.”
                </p>
                <p className="mt-4 text-xs font-semibold text-pink-700">
                  — Verified Booking
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <p className="text-pink-700/80 text-sm">
                  “Professional experience from inquiry to confirmation. Highly
                  recommended for premium events.”
                </p>
                <p className="mt-4 text-xs font-semibold text-pink-700">
                  — Event Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ LEGAL CLARITY & RESPONSIBLE USE */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">

            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Legal, Ethical & Responsible Use
            </h2>

            <div className="mt-8 space-y-6 text-pink-700/80 text-[15px] md:text-base leading-relaxed max-w-4xl mx-auto">

              <p>
                Prime Aura Events is intended strictly for adults aged 19 years and
                above. By accessing or using this platform, users confirm that they
                meet the minimum age requirement and agree to engage responsibly.
              </p>

              <p>
                All interactions facilitated through Prime Aura Events are expected
                to be consensual, respectful, and conducted within lawful and ethical
                boundaries. We do not promote coercion, exploitation, misleading
                claims, or inappropriate conduct of any kind.
              </p>

              <p>
                Prime Aura Events operates as a private social companionship and
                event-coordination platform. The content presented is for informational
                and presentation purposes only. Final arrangements, expectations, and
                confirmations are discussed privately between consenting adults.
              </p>

              <p>
                Client privacy is treated with the highest priority. Personal
                information shared during inquiries or discussions is handled
                confidentially and is never disclosed to third parties. Communication
                remains limited to secure and private channels.
              </p>

              <p>
                Prime Aura Events maintains zero tolerance for misuse of the platform,
                including harassment, abuse, illegal activity, or misrepresentation.
                Users found violating these principles may be denied access without
                notice.
              </p>

              <p>
                By continuing to use this platform, users acknowledge and accept
                responsibility for their conduct, decisions, and compliance with
                applicable local laws and regulations.
              </p>

              <p className="font-semibold text-pink-700 text-center">
                ✔ Adults 19+ Only • ✔ Consent-Based Interaction • ✔ Privacy First
              </p>

            </div>
          </div>
        </div>
      </section>
      {/* ✅ SERVICE MODES & FLEXIBLE OPTIONS */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">

            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">
              Flexible Service Options
            </h2>

            <p className="mt-4 text-center text-pink-600/80 max-w-3xl mx-auto">
              Prime Aura Events offers multiple service modes designed to suit
              different preferences, comfort levels, and private arrangements.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">

              {/* Home Service */}
              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  Home Service
                </h3>
                <p className="text-pink-600/80 text-sm leading-relaxed">
                  Private home-based social companionship for individuals who prefer
                  a familiar and comfortable environment. Arrangements are discussed
                  discreetly to ensure clarity and mutual comfort.
                </p>
              </div>

              {/* Hotel Service */}
              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  Hotel & Private Venue Service
                </h3>
                <p className="text-pink-600/80 text-sm leading-relaxed">
                  Suitable for business stays, travel plans, and premium hotel or
                  private venue settings. This option focuses on professional
                  etiquette and a refined social presence.
                </p>
              </div>

              {/* On-Call Service */}
              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  On-Call & Short-Notice Availability
                </h3>
                <p className="text-pink-600/80 text-sm leading-relaxed">
                  Flexible on-call service for spontaneous plans, last-minute
                  gatherings, and private events, subject to availability and
                  prior confirmation.
                </p>
              </div>

              {/* Payment Clarity */}
              <div className="rounded-2xl bg-pink-50 border border-pink-200 p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  Transparent Payment Discussion
                </h3>
                <p className="text-pink-600/80 text-sm leading-relaxed">
                  Payment terms, session structure, and expectations are discussed
                  privately and respectfully. This ensures transparency, trust,
                  and mutual understanding before confirmation.
                </p>
              </div>

            </div>

            <p className="mt-8 text-center text-sm text-pink-700 font-semibold">
              ✔ Discreet Discussion • ✔ Flexible Options • ✔ Adults 19+ Only
            </p>

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="px-6 pb-28 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to Explore a Premium Experience?
            </h2>

            <p className="mt-4 text-white/90 max-w-3xl mx-auto">
              Browse curated profiles or make a private inquiry. Designed for
              adults who value discretion, quality, and premium companionship.
            </p>

            <div className="mt-8 flex gap-4 justify-center flex-wrap">
              <Link
                to="/profiles"
                className="px-8 py-3 bg-white text-pink-600 rounded-full font-bold shadow-lg"
              >
                View Profiles ✨
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 border border-white text-white rounded-full font-bold"
              >
                WhatsApp Inquiry
              </a>
            </div>

            <p className="mt-6 text-xs text-white/70">
              19+ Only • All interactions are respectful, private, and consensual
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
