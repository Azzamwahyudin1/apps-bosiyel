import React from 'react';
import { Navbar } from '../components/layouts/Navbar';
import { HeroBanner } from '../components/sections/HeroBanner';
import { QuickLinks } from '../components/sections/QuickLinks';
import { PartnerResmi } from '../components/sections/PartnerResmi';
import { AboutBosIyel } from '../components/sections/AboutBosIyel';
import { Footer } from '../components/layouts/Footer';

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0A1128] via-[#0F1A3E] to-[#243C8E] text-white">
            <Navbar />
            <main className="space-y-6">
                <HeroBanner />
                <QuickLinks />
                <PartnerResmi />
                <AboutBosIyel />
            </main>
            <Footer />
        </div>
    );
};