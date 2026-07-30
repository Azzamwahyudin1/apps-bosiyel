import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { SOCIAL_LINKS } from '../../constant/links';
import { FaWhatsapp, FaInstagram, FaUsers, FaBullhorn } from 'react-icons/fa';

export const QuickLinks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <SectionWrapper id="quick-links">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {/* 1. Saluran WA */}
        <motion.a variants={itemVariants} href={SOCIAL_LINKS.saluranWa} target="_blank" rel="noreferrer" className="block">
          <Button
            className="relative w-full py-3.5 px-3 rounded-2xl text-xs md:text-sm 
                       bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 
                       text-white font-protest tracking-wider uppercase 
                       border border-cyan-400/30 
                       shadow-[0_0_15px_rgba(56,189,248,0.3)] 
                       hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] 
                       hover:border-cyan-300 
                       transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10 flex items-center justify-between w-full">
              <span>Saluran WA</span>
              <FaBullhorn className="text-lg text-cyan-300" />
            </span>
          </Button>
        </motion.a>

        {/* 2. WA Bos Iyel */}
        <motion.a variants={itemVariants} href={SOCIAL_LINKS.waBosIyel} target="_blank" rel="noreferrer" className="block">
          <Button
            className="relative w-full py-3.5 px-3 rounded-2xl text-xs md:text-sm 
                       bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 
                       text-white font-protest tracking-wider uppercase 
                       border border-cyan-400/30 
                       shadow-[0_0_15px_rgba(56,189,248,0.3)] 
                       hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] 
                       hover:border-cyan-300 
                       transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10 flex items-center justify-between w-full">
              <span>WA Bos iyel</span>
              <FaWhatsapp className="text-lg text-green-400" />
            </span>
          </Button>
        </motion.a>

        {/* 3. Instagram */}
        <motion.a variants={itemVariants} href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="block">
          <Button
            className="relative w-full py-3.5 px-3 rounded-2xl text-xs md:text-sm 
                       bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 
                       text-white font-protest tracking-wider uppercase 
                       border border-cyan-400/30 
                       shadow-[0_0_15px_rgba(56,189,248,0.3)] 
                       hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] 
                       hover:border-cyan-300 
                       transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10 flex items-center justify-between w-full">
              <span>Instagram</span>
              <FaInstagram className="text-lg text-pink-400" />
            </span>
          </Button>
        </motion.a>

        {/* 4. Group Bos Iyel */}
        <motion.a variants={itemVariants} href={SOCIAL_LINKS.groupBosIyel} target="_blank" rel="noreferrer" className="block">
          <Button
            className="relative w-full py-3.5 px-3 rounded-2xl text-xs md:text-sm 
                       bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 
                       text-white font-protest tracking-wider uppercase 
                       border border-cyan-400/30 
                       shadow-[0_0_15px_rgba(56,189,248,0.3)] 
                       hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] 
                       hover:border-cyan-300 
                       transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10 flex items-center justify-between w-full">
              <span>Group bos iyel</span>
              <FaUsers className="text-lg text-cyan-300" />
            </span>
          </Button>
        </motion.a>
      </motion.div>

      {/* 5. Tombol Full-Width Highlighted (PARTNER RESMI) - Dibuat Lebih Terang & Menyala */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        animate={{
          boxShadow: [
            "0px 0px 15px rgba(56, 189, 248, 0.4)",
            "0px 0px 30px rgba(56, 189, 248, 0.8)",
            "0px 0px 15px rgba(56, 189, 248, 0.4)"
          ]
        }}
        className="mt-4 rounded-2xl"
      >
        <a href={SOCIAL_LINKS.partnerButton} className="block w-full">
          <Button
            className="relative w-full py-4 text-base md:text-xl rounded-2xl 
                       bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 
                       text-slate-950 font-protest font-bold tracking-widest uppercase 
                       border border-cyan-200 
                       hover:border-white 
                       transition-all duration-300 overflow-hidden group"
          >
            {/* Efek Kilatan Cahaya Putih Saat Hover */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <span className="relative z-10 drop-shadow-sm flex items-center justify-center gap-2">
              PARTNER RESMI BANG iYEL 🔥
            </span>
          </Button>
        </a>
      </motion.div>
    </SectionWrapper>
  );
};