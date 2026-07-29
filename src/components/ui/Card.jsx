import React from "react";

export const Card = ({ 
  children, 
  className = "", 
  onClick 
}) => {
  return (
    <div 
      className={`bg-[#101D46]/60 border border-white/5 rounded-2xl p-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
