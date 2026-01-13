import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Standards from "./pages/Standards";
import Profiles from "./pages/Profiles";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// ✅ Simple Scroll To Top on route change (smooth premium feel)
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

// ✅ Simple 404 Page (Polished)
function NotFound() {
  return (
    <div className="min-h-screen bg-pink-50 px-6 pt-28 pb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700">
        404 ✨ Page Not Found
      </h1>
      <p className="mt-3 text-pink-600/80">
        The page you are looking for doesn’t exist.
      </p>

      <div className="mt-8">
        <a href="/" className="btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* ✅ Global Layout */}
      <div className="min-h-screen flex flex-col bg-pink-50">
        <Navbar />
        <WhatsAppFloat />

        {/* ✅ Main content grows, footer stays bottom */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/standards" element={<Standards />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />

            {/* ✅ 404 fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
