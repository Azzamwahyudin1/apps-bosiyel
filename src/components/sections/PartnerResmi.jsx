import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { PARTNER_DATA } from '../../constant/links';

export const PartnerResmi = () => {
  return (
    <SectionWrapper id="partner-section" className="mt-6">
      {/* Header Section Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 bg-clip-text text-transparent">
          <span className='text-cyan-400'>Partener</span>
          <span className='text-white'> Bos Iyel</span>
        </h2>
      </motion.div>

      {/* Grid Container untuk Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-start md:justify-items-center">
        {PARTNER_DATA.map((partner, index) => (
          <motion.div 
            key={partner.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="w-48 bg-[#1A2C68]/80 border border-blue-400/20 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-shadow duration-300"
          >
            {/* Logo Partner */}
            <div className="w-full aspect-square bg-black/90 rounded-xl overflow-hidden mb-3 p-2 flex items-center justify-center">
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Sub-label & Nama */}
            <span className="text-[10px] text-cyan-300 tracking-wider font-protest uppercase">
              {partner.tag}
            </span>
            <h3 className="text-lg font-protest text-white tracking-wide mt-1">
              {partner.name}
            </h3>

            {/* Tombol Hubungi */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={partner.contactLink} 
              target="_blank" 
              rel="noreferrer" 
              className="mt-3 w-full bg-[#38BDF8] hover:bg-cyan-300 text-white hover:text-slate-900 font-protest py-1.5 rounded-lg text-xs tracking-wider transition-colors inline-block"
            >
              HUBUNGI
            </motion.a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};