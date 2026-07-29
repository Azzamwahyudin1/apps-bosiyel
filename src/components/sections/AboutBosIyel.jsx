import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { SOCIAL_LINKS } from "../../constant/links";

export const AboutBosIyel = () => {
  return (
    <SectionWrapper id="about-section" className="mt-8">
      {/* Title & Karakter Ilustrasi */}
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-3xl md:text-5xl font-protest leading-tight tracking-wider text-white">
          Who Bos
          <br />
          Iyel..?
        </h2>
      </div>

      {/* Paragraf Deskripsi */}
      <div className="bg-[#101D46]/60 border border-white/5 rounded-2xl p-4 md:p-6 mb-6">
        <p className="text-sm md:text-base font-protest text-slate-200 tracking-wide leading-relaxed">
          Bos iyel adalah sebuah usaha yang bergerak sebagai toko game yang
          membantu seseorang menemukan produk dan layanan digital gaming dengan
          pengalaman transaksi yang rapi, cepat, dan terpercaya
        </p>
      </div>

      {/* Tombol ALL MEDSOS */}
      <a href={SOCIAL_LINKS.allMedsos} target="_blank" rel="noreferrer">
        <Button className="w-full py-4 text-lg md:text-xl rounded-2xl bg-slate-200 text-slate-900 hover:bg-white tracking-wider font-protest shadow-lg">
          ALL MEDSOS BOS IYEL
        </Button>
      </a>
    </SectionWrapper>
  );
};
