import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { SOCIAL_LINKS } from "../../constant/links";
import { FaWhatsapp, FaInstagram, FaUsers, FaBullhorn } from "react-icons/fa";

export const QuickLinks = () => {
  return (
    <SectionWrapper id="quick-links">
      {/* Grid 2 kolom di mobile, 4 kolom di desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Saluran WA */}
        <a href={SOCIAL_LINKS.saluranWa} target="_blank" rel="noreferrer">
          <Button className="w-full py-3.5 px-3 rounded-2xl text-sm md:text-base">
            <span>Saluran WA</span>
            <FaBullhorn className="text-xl" />
          </Button>
        </a>

        {/* WA Bos Iyel */}
        <a href={SOCIAL_LINKS.waBosIyel} target="_blank" rel="noreferrer">
          <Button className="w-full py-3.5 px-3 rounded-2xl text-sm md:text-base">
            <span>WA Bos iyel</span>
            <FaWhatsapp className="text-xl text-green-300" />
          </Button>
        </a>

        {/* Instagram */}
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">
          <Button className="w-full py-3.5 px-3 rounded-2xl text-sm md:text-base">
            <span>Instagram</span>
            <FaInstagram className="text-xl text-pink-300" />
          </Button>
        </a>

        {/* Group Bos Iyel */}
        <a href={SOCIAL_LINKS.groupBosIyel} target="_blank" rel="noreferrer">
          <Button className="w-full py-3.5 px-3 rounded-2xl text-sm md:text-base">
            <span>Group bos iyel</span>
            <FaUsers className="text-xl" />
          </Button>
        </a>
      </div>

      {/* Tombol Full-Width Highlighted */}
      <div className="mt-4">
        <a href={SOCIAL_LINKS.partnerButton}>
          <Button
            variant="cyan"
            className="w-full py-4 text-lg md:text-xl rounded-2xl font-protest tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-[1.01]"
          >
            PARTNER RESMI BANG iYEL
          </Button>
        </a>
      </div>
    </SectionWrapper>
  );
};
