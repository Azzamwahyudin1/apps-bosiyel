import React from 'react';
import { motion } from 'framer-motion';

export const PartnerCard = ({ partner, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="w-48 bg-[#1A2C68]/80 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-4 flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 shrink-0"
        >
            {/* Logo Partner */}
            <div className="w-full aspect-square bg-slate-950/90 border border-slate-800 rounded-xl overflow-hidden mb-3 p-2 flex items-center justify-center">
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
            <h3 className="text-base font-protest text-white tracking-wide mt-1">
                {partner.name}
            </h3>

            {/* Tombol Hubungi Glowing */}
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={partner.contactLink}
                target="_blank"
                rel="noreferrer"
                className="relative group overflow-hidden mt-3 w-full py-2 rounded-xl text-xs font-protest tracking-wider uppercase inline-block text-center
                   bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 
                   text-white font-bold 
                   border border-cyan-300/40 
                   shadow-[0_0_12px_rgba(56,189,248,0.3)] 
                   hover:shadow-[0_0_20px_rgba(56,189,248,0.7)] 
                   hover:border-cyan-200 transition-all duration-300"
            >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <span className="relative z-10 drop-shadow-sm">
                    HUBUNGI
                </span>
            </motion.a>
        </motion.div>
    );
};