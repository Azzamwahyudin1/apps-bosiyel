import React from "react";

// Wrapper kontainer utama untuk menjaga kepresisian margin & max-width di HP dan Desktop
export const SectionWrapper = ({ children, className = "", id = "" }) => {
  return (
    <section
      id={id}
      className={`w-full max-w-md md:max-w-2xl lg:max-w-5xl mx-auto px-4 py-6 ${className}`}
    >
      {children}
    </section>
  );
};
