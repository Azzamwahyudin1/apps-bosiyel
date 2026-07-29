import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { PARTNER_DATA } from "../../constant/links";

export const PartnerResmi = () => {
  return (
    <SectionWrapper id="partner-section" className="mt-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-protest tracking-wider">
          <span className="text-cyan-400">PATNER RESMI </span>
          <span className="text-white">BOS IYEL</span>
        </h2>
      </div>

      {/* Grid Container untuk Reusable Partner Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-start md:justify-items-center">
        {PARTNER_DATA.map((partner) => (
          <div
            key={partner.id}
            className="w-48 bg-[#1A2C68]/80 border border-blue-400/20 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg hover:border-cyan-400 transition-all duration-300 hover:scale-105"
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
            <a
              href={partner.contactLink}
              target="_blank"
              rel="noreferrer"
              className="mt-3 w-full bg-[#38BDF8] hover:bg-cyan-300 text-white hover:text-slate-900 font-protest py-1.5 rounded-lg text-xs tracking-wider transition-colors"
            >
              HUBUNGI
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
