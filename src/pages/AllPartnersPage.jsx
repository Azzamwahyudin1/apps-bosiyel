import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layouts/Navbar';
import { Footer } from '../components/layouts/Footer';
import { PartnerCard } from '../components/ui/PartnerCard';
import { PARTNERS } from '../constant/partners';
import { FiArrowLeft } from 'react-icons/fi';

export const AllPartnersPage = () => {
    // Sekarang useState sudah bisa digunakan tanpa error
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter partner berdasarkan isi pencarian
    const filteredPartners = PARTNERS.filter((partner) => {
        const query = searchTerm.toLowerCase();
        return (
            partner.name?.toLowerCase().includes(query) ||
            partner.tag?.toLowerCase().includes(query)
        );
    }).slice(0, 15);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0A1128] via-[#0F1A3E] to-[#243C8E] text-white flex flex-col justify-between">
            <div>
                {/* Pass state pencarian ke Navbar */}
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <main className="max-w-md md:max-w-2xl lg:max-w-6xl mx-auto px-4 py-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-xs md:text-sm font-protest tracking-wider uppercase text-cyan-300 hover:text-white bg-[#1A2C68]/80 backdrop-blur-md border border-cyan-400/30 px-4 py-2 rounded-xl transition-all duration-300 mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                        >
                            <FiArrowLeft className="text-base" />
                            <span>KEMBALI KE BERANDA</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-2xl md:text-4xl font-protest tracking-wider">
                            <span className="text-cyan-400">SEMUA PARTNER RESMI </span>
                            <span className="text-white">BOS IYEL</span>
                        </h1>
                        <p className="text-xs md:text-sm text-cyan-300/80 font-protest tracking-wide mt-1 uppercase">
                            Daftar seluruh partner dan toko resmi terpercaya Bang Iyel
                        </p>
                    </motion.div>

                    {/* Grid Hasil Filter */}
                    {filteredPartners.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                            {filteredPartners.map((partner, index) => (
                                <PartnerCard key={partner.id || index} partner={partner} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 font-protest text-cyan-300 tracking-wider">
                            <p className="text-lg">TIDAK ADA PARTNER DENGAN NAMA "{searchTerm.toUpperCase()}"</p>
                        </div>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
};