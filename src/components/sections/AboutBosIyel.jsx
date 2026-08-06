import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { SOCIAL_LINKS } from "../../constant/links";
import characterAbout from "../../assets/avatar_bosiyel.png";

export const AboutBosIyel = () => {
  return (
    <SectionWrapper id="about-section" className="mt-8">
      {/* Title & Karakter Ilustrasi */}
      <div className="flex items-start justify-between mb-4">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-protest leading-tight tracking-wider text-white"
        >
          Who Bos
          <br />
          Iyel...?
        </motion.h2>

        {/* Karakter dengan efek melayang berulang - Ukuran Lebih Besar */}
        <motion.img
          src={characterAbout}
          alt="Bos Iyel Character"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            rotate: [0, 3, -3, 0],
            y: [0, -6, 0],
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-32 md:w-48 lg:w-56 h-auto object-contain -mt-4 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Paragraf Deskripsi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#101D46]/60 border border-white/5 rounded-2xl p-4 md:p-6 mb-6"
      >
        <p className="text-sm md:text-base font-protest text-slate-200 tracking-wide leading-relaxed">
          Bos iyel adalah sebuah usaha yang bergerak sebagai toko game yang
          membantu seseorang menemukan produk dan layanan digital gaming dengan
          pengalaman transaksi yang rapi, cepat, dan terpercaya
        </p>
      </motion.div>

      {/* Tombol ALL MEDSOS */}
      <motion.a
        href={SOCIAL_LINKS.allMedsos}
        target="_blank"
        rel="noreferrer"
        className="block w-full"
        animate={{
          boxShadow: [
            "0px 0px 15px rgba(56, 189, 248, 0.4)",
            "0px 0px 30px rgba(56, 189, 248, 0.8)",
            "0px 0px 15px rgba(56, 189, 248, 0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ borderRadius: "1rem" }}
      >
        <Button
          className="relative w-full py-4 text-lg md:text-xl rounded-2xl 
               bg-gradient-to-r from-sky-400 via-blue-600 to-blue-800 
               text-white font-protest tracking-widest uppercase
               border border-sky-300/50 overflow-hidden group"
        >
          {/* Efek Kilasan Cahaya */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

          <span className="relative z-10 drop-shadow-md">GRUP JB BOS IYEL</span>
        </Button>
      </motion.a>
    </SectionWrapper>
  );
};
