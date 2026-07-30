import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../../assets/logo bos iyel.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[#0A1128]/90 backdrop-blur-md border-b border-white/10 py-3 px-4"
    >
      <div className="max-w-md md:max-w-2xl lg:max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Logo Bulat dengan efek hover rotate/scale */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <img
            src={logoImg}
            alt="Logo BOS IYEL"
            className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover shadow-lg"
          />
        </motion.div>

        {/* Search Bar dengan Efek Glow & Focus Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex-1 max-w-xs md:max-w-md relative group"
        >
          <div
            className="flex items-center bg-slate-900/90 border border-slate-700/80 rounded-full px-3.5 py-1.5 
               transition-all duration-300 ease-out
               group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]
               focus-within:border-cyan-400 focus-within:shadow-[0_0_20px_rgba(56,189,248,0.5)] focus-within:bg-slate-950"
          >
            {/* Ikon Search yang berubah warna saat diklik/fokus */}
            <FiSearch className="text-gray-400 text-lg mr-2 shrink-0 transition-colors duration-300 group-focus-within:text-cyan-400 group-hover:text-cyan-300" />

            <input
              type="text"
              placeholder="Mau cari apa ?"
              className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none w-full font-sans tracking-wide"
            />
          </div>
        </motion.div>

        {/* Hamburger Menu Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl p-1 rounded-lg hover:bg-white/10 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#0A1128]/95 backdrop-blur-xl border-b border-cyan-500/30 mt-3 shadow-[0_15px_30px_rgba(0,0,0,0.6)] font-protest rounded-b-2xl"
          >
            {/* Container dengan Animasi Staggered (Anak Elemen Muncul Bergantian) */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
              }}
              className="py-4 px-5 flex flex-col gap-2"
            >
              {[
                { href: "#quick-links", label: "Quick Links" },
                { href: "#partner-section", label: "Partner Resmi" },
                { href: "#about-section", label: "Who Bos Iyel" },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-between text-slate-200 hover:text-cyan-300 text-sm py-2.5 px-4 rounded-xl bg-slate-900/40 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-400/30 transition-all duration-200"
                >
                  <span className="tracking-wider">{item.label}</span>
                  {/* Panah Kecil Muncul Saat Hover */}
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
                    ➔
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};