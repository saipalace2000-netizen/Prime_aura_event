import { Link } from "react-router-dom";

export default function Standards() {
  return (
    <div className="min-h-screen bg-pink-50 px-6 pt-28 pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 drop-shadow-sm">
            Our Standards ✨
          </h1>
          <p className="mt-3 text-pink-600/80 text-lg max-w-2xl mx-auto">
            Prime Aura Events is built around trust, discretion, and premium
            presentation. These standards help maintain a safe and respectful
            experience for everyone.
          </p>
        </div>

        {/* Main Standards Card */}
        <div className="rounded-3xl bg-white shadow-xl border border-pink-200/60 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-pink-700">
            Trust & Safety Principles
          </h2>
          <p className="mt-2 text-pink-600/80">
            We follow clear guidelines to protect privacy, maintain respectful
            communication, and keep experiences professional.
          </p>

          {/* Rules */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Adults Only (19+)",
                desc: "Prime Aura Events is strictly intended for adults only. Any misuse is not tolerated.",
              },
              {
                title: "Privacy & Discretion",
                desc: "Client identity and personal information are treated confidentially and never shared publicly.",
              },
              {
                title: "Respect & Consent",
                desc: "All interactions must remain respectful, consensual, and mutually agreed upon.",
              },
              {
                title: "Verified Presentation",
                desc: "Profiles are curated and presented with quality standards to maintain trust and authenticity.",
              },
              {
                title: "No Illegal / Unethical Activity",
                desc: "We do not support illegal, harmful, forced, or unethical activity in any form.",
              },
              {
                title: "Clear Communication",
                desc: "Availability, expectations, and arrangements should be discussed privately with transparency and maturity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-pink-50 border border-pink-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-extrabold text-pink-700">
                  ✅ {item.title}
                </h3>
                <p className="mt-2 text-sm text-pink-600/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Extra Reliability Note */}
          <div className="mt-10 rounded-2xl bg-white border border-pink-200 p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-pink-700">
              Reliability Promise 💗
            </h3>
            <p className="mt-2 text-pink-600/80 leading-relaxed">
              Prime Aura Events operates with a premium and responsible
              approach. We do not make unrealistic promises. We focus on
              professionalism, discreet handling, and a clean premium
              experience for clients who value quality and privacy.
            </p>

            <p className="mt-4 text-xs text-pink-600/70">
              *By using this platform, users agree to follow respectful conduct
              and privacy-first communication.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/profiles" className="btn-primary">
              Browse Profiles ✨
            </Link>

            <Link to="/contact" className="btn-outline">
              Private Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
