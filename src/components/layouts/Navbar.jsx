import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logoImg from "../../assets/hero.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1128]/90 backdrop-blur-md border-b border-white/10 py-3 px-4">
      <div className="max-w-md md:max-w-2xl lg:max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Logo Bulat */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src={logoImg}
            alt="Logo BOS IYEL"
            className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover shadow-lg"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xs md:max-w-md relative">
          <div className="flex items-center bg-slate-900/80 border border-slate-600 rounded-full px-3 py-1.5 focus-within:border-cyan-400 transition">
            <FiSearch className="text-gray-400 text-lg mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Mau cari apa ?"
              className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none w-full font-sans"
            />
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl p-1 rounded-lg hover:bg-white/10 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="mt-3 bg-[#0F1A3E] border-t border-white/10 py-4 px-6 flex flex-col gap-3 font-protest animate-fadeIn">
          <a
            href="#quick-links"
            className="hover:text-cyan-400 py-1"
            onClick={() => setIsOpen(false)}
          >
            Quick Links
          </a>
          <a
            href="#partner-section"
            className="hover:text-cyan-400 py-1"
            onClick={() => setIsOpen(false)}
          >
            Partner Resmi
          </a>
          <a
            href="#about-section"
            className="hover:text-cyan-400 py-1"
            onClick={() => setIsOpen(false)}
          >
            Who Bos Iyel
          </a>
        </div>
      )}
    </nav>
  );
};
