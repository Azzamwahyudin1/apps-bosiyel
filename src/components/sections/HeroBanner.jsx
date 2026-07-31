import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import bannerBg from "../../assets/platform_bosiyel.png";
import { HERO_CTA } from "../../constant/links";

export const HeroBanner = () => {
  return (
    <SectionWrapper>
      <div className="relative w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden shadow-2xl border border-cyan-300/30">
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/dsqr42j4/image/upload/v1785470274/WhatsApp_Image_2026-07-31_at_08.31.22_kxj4ii.jpg"
          alt="Banner Background"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        {/* Overlay Dark Gradient */}
        <div className="" /> {/*buat backround pada image */}
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
              {/*memberi judul pada hero banner*/}
            </h1>
            <p className="text-xs md:text-sm font-sans mt-1 max-w-md font-medium text-blue-50 leading-relaxed">
              {/*memberi paragraf pada hero banner*/}
            </p>
          </motion.div>

          {/* Maskot Karakter dengan Animasi Melayang (Floating Effect) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0], // Efek naik-turun halus secara berulang
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            className="shrink-0 mt-2 lg:mt-0"
          ></motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
