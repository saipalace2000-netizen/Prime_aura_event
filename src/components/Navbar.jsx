import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaShieldAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-full transition font-medium
     ${
       isActive
         ? "bg-pink-500 text-white shadow-md"
         : "text-pink-700 hover:bg-pink-200/70"
     }`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-pink-100/80 border-b border-pink-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* ✅ Logo + Name */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/pictures/prime_logo.png"
            alt="Prime Aura Events"
            className="h-10 w-auto drop-shadow-md"
          />

          {/* ✅ Smaller on mobile */}
          <span className="text-base md:text-xl font-semibold tracking-wide text-pink-700">
            Prime Aura Events
          </span>
        </NavLink>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/" className={linkClass}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/profiles" className={linkClass}>
            <FaUserFriends /> Profiles
          </NavLink>

          <NavLink to="/standards" className={linkClass}>
            <FaShieldAlt /> Trust
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            <FaEnvelope /> Contact
          </NavLink>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-xl bg-white/70 border border-pink-200 text-pink-700 shadow-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl bg-white/80 border border-pink-200 shadow-lg p-3 flex flex-col gap-2">
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
              <FaHome /> Home
            </NavLink>

            <NavLink
              to="/profiles"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FaUserFriends /> Profiles
            </NavLink>

            <NavLink
              to="/standards"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FaShieldAlt /> Trust
            </NavLink>

            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FaEnvelope /> Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
