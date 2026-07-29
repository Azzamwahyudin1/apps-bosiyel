import React from "react";
import logoImg from "../../assets/hero.png";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#050915] border-t border-white/10 py-8 px-4 text-center mt-12">
      <div className="max-w-md md:max-w-2xl lg:max-w-5xl mx-auto flex flex-col items-center gap-4">
        <img
          src={logoImg}
          alt="BOS IYEL Logo"
          className="w-16 h-16 rounded-full border border-cyan-400"
        />
        <h3 className="font-protest text-xl tracking-wider text-cyan-400">
          BOS IYEL
        </h3>
        <p className="text-xs text-gray-400 max-w-xs font-sans">
          Platform Jual Beli Akun Sultan Termurah & Terlengkap Dengan Keamanan
          100%.
        </p>
        <p className="text-xs text-gray-500 font-sans mt-2">
          &copy; {new Date().getFullYear()} BOS IYEL. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
