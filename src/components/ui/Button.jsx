import React from "react";

export const Button = ({ 
  children, 
  className = "", 
  variant = "default",
  ...props 
}) => {
  const baseStyles = "rounded-2xl font-protest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A1128]";
  
  const variants = {
    default: "bg-slate-200 text-slate-900 hover:bg-white hover:scale-105",
    cyan: "bg-cyan-500 text-white hover:bg-cyan-400 hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.4)]",
    outline: "bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
