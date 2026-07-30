import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import bannerBg from '../../assets/platform_bosiyel.png'; 
import { HERO_CTA } from '../../constant/links';

export const HeroBanner = () => {
  return (
    <SectionWrapper>
      <div className="relative w-full rounded-2xl p-4 md:p-6 overflow-hidden shadow-2xl border border-cyan-300/30">
        
        {/* Background Image */}
        <img 
          src={bannerBg} 
          alt="Banner Background" 
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Overlay Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-blue-950/70 to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Teks & Deskripsi dengan Animasi Fade-In & Slide-Right */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left text-white flex-1"
          >
            <h1 className="text-3xl md:text-5xl font-protest drop-shadow-md tracking-wider">
              BOS IYEL
            </h1>
            <p className="text-xs md:text-sm font-sans mt-1 max-w-md font-medium text-blue-50 leading-relaxed">
              Platform Jual Beli Akun Sultan Termurah & Terlengkap Dengan Keamanan 100%
            </p>

            {/* Tombol CTA dengan Stagger/Hover Animation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
              {HERO_CTA.map((cta, idx) => (
                <motion.a
                  key={idx}
                  href={cta.link}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-sky-200/90 hover:bg-white text-blue-900 text-[10px] md:text-xs font-protest px-3 py-1.5 rounded-md shadow inline-block"
                >
                  {cta.label}
                </motion.a>
              ))}
            </div>

            {/* Badge Supported Games */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 pt-2 border-t border-white/20">
              <span className="text-[10px] font-sans text-sky-100 uppercase tracking-widest">
                Supported Games:
              </span>
              <span className="bg-black/40 text-amber-400 text-[10px] px-2 py-0.5 rounded font-protest">
                FREE FIRE
              </span>
            </div>
          </motion.div>

          {/* Maskot Karakter dengan Animasi Melayang (Floating Effect) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0] // Efek naik-turun halus secara berulang
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            className="shrink-0 mt-2 lg:mt-0"
          >
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
};