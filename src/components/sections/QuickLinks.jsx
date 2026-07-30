import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { SOCIAL_LINKS } from '../../constant/links';
import { FaWhatsapp, FaInstagram, FaUsers, FaBullhorn } from 'react-icons/fa';

export const QuickLinks = () => {
  // Variasi animasi untuk container parent & children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12 // Selisih waktu kemunculan antar tombol
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
        {/* Saluran WA */}
        <motion.a variants={itemVariants} href={SOCIAL_LINKS.saluranWa} target="_blank" rel="noreferrer">
          <Button className="w-full py-3.5 px-3 rounded-2xl text-sm md:text-base">
            <span>Saluran WA</span>
            <FaBullhorn className="text-xl" />
          </Button>
        </motion.a>

        {/* WA Bos Iyel */}
        <motion.a variants={itemVariants} href={SOCIAL_LINKS.waBosIyel} target="_blank" rel="noreferrer">
          <Button className="w-full py-3.5 px-3 rounded-2xl text-sm md:text-base">
            <span>WA Bos iyel</span>
            <FaWhatsapp className="text-xl text-green-300" />
          </Button>
        </motion.a>

        {/* Instagram */}
        <motion.a variants={itemVariants} href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">
          <Button className="w-full py-3.5 px-3 rounded-2xl text-sm md:text-base">
            <span>Instagram</span>
            <FaInstagram className="text-xl text-pink-300" />
          </Button>
        </motion.a>

        {/* Group Bos Iyel */}
        <motion.a variants={itemVariants} href={SOCIAL_LINKS.groupBosIyel} target="_blank" rel="noreferrer">
          <Button className="w-full py-3.5 px-3 rounded-2xl text-sm md:text-base">
            <span>Group bos iyel</span>
            <FaUsers className="text-xl" />
          </Button>
        </motion.a>
      </motion.div>

      {/* Tombol Full-Width Highlighted */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-4"
      >
        <a href={SOCIAL_LINKS.partnerButton}>
          <Button 
            variant="cyan"
            className="w-full py-4 text-lg md:text-xl rounded-2xl font-protest tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.4)]"
          >
            PARTNER RESMI BANG iYEL
          </Button>
        </a>
      </motion.div>
    </SectionWrapper>
  );
};