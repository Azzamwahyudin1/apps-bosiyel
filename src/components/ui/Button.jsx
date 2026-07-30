import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "font-protest tracking-wider uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-[#38BDF8] text-white shadow-[0_0_15px_rgba(56,189,248,0.3)]",
    secondary: "bg-[#1E293B] text-white border border-slate-700",
    cyan: "bg-cyan-400 text-slate-900 font-bold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};