import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { HERO_CTA } from "../../constant/links";
import characterHero from "../../assets/hero.png";

// Komponen Banner Utama dengan layout persis seperti contoh gambar
export const HeroBanner = () => {
  return (
    <SectionWrapper>
      <div className="relative w-full rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 p-4 md:p-6 overflow-hidden shadow-2xl border border-cyan-300/30">
        {/* Container Flex (Desktop 2-kolom, Mobile stacked) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Teks & Deskripsi Utama Banner */}
          <div className="text-center lg:text-left text-white z-10 flex-1">
            <h1 className="text-3xl md:text-5xl font-protest drop-shadow-md tracking-wider">
              BOS IYEL
            </h1>
            <p className="text-xs md:text-sm font-sans mt-1 max-w-md font-medium text-blue-50 leading-relaxed">
              Platform Jual Beli Akun Sultan Termurah & Terlengkap Dengan
              Keamanan 100%
            </p>

            {/* 3 Tombol CTA Kecil di Dalam Banner */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
              {HERO_CTA.map((cta, idx) => (
                <a
                  key={idx}
                  href={cta.link}
                  className="bg-sky-200/90 hover:bg-white text-blue-900 text-[10px] md:text-xs font-protest px-3 py-1.5 rounded-md shadow transition-transform hover:scale-105"
                >
                  {cta.label}
                </a>
              ))}
            </div>

            {/* Badge Game yang Didukung */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 pt-2 border-t border-white/20">
              <span className="text-[10px] font-sans text-sky-100 uppercase tracking-widest">
                Supported Games:
              </span>
              <span className="bg-black/40 text-amber-400 text-[10px] px-2 py-0.5 rounded font-protest">
                FREE FIRE
              </span>
            </div>
          </div>

          {/* Maskot Ilustrasi Karakter */}
          <div className="shrink-0 z-10 mt-2 lg:mt-0">
            <img
              src={characterHero}
              alt="Karakter Bos Iyel"
              className="w-32 md:w-48 lg:w-56 h-auto object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Efek Wave Background Transparan */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none rounded-2xl" />
      </div>
    </SectionWrapper>
  );
};
