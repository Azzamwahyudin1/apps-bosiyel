import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroBanner } from "./components/sections/HeroBanner";
import { QuickLinks } from "./components/sections/QuickLinks";
import { PartnerResmi } from "./components/sections/PartnerResmi";
import { AboutBosIyel } from "./components/sections/AboutBosIyel";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Glow Blur Effect pada background */}
      <div className="bg-glow-top" />

      <div>
        <Navbar />
        <main>
          <HeroBanner />
          <QuickLinks />
          <PartnerResmi />
          <AboutBosIyel />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
