import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../ui/SectionWrapper';
import { PartnerCard } from '../ui/PartnerCard';
import { PARTNERS } from '../../constant/partners';
import { FiArrowRight } from 'react-icons/fi';

export const PartnerResmi = () => {
  const previewPartners = PARTNERS.slice(0, 5);

  return (
    <SectionWrapper id="partner-section" className="mt-6">
      {/* Header Section dengan*/}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6 px-1"
      >
        {/* Judul Section */}
        <h2 className="text-xl md:text-3xl font-protest tracking-wider">
          <span className="text-cyan-400">PARTNER RESMI </span>
          <span className="text-white">BOS IYEL</span>
        </h2>

        {/* Link "Lihat Semua" */}
        <Link
          to="/partner"
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-protest tracking-[0.2em] text-cyan-400 hover:text-white bg-transparent border border-cyan-400/40 hover:border-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
        >
          <span>Lihat Semua</span>
          <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Container Scroll Menyamping */}
      <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-slate-900/50">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-row gap-4 min-w-max px-1"
        >
          {previewPartners.map((partner, index) => (
            <PartnerCard key={partner.id || index} partner={partner} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};