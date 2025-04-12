import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import ScheduleSection from "./components/ScheduleSection";
import MonitorSection from "./components/MonitorSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-20 -left-20 h-[500px] w-[500px] bg-gradient-to-tl from-blue-300/20 via-amber-500/20 to-pink-300/20 rounded-full blur-2xl -z-10"></div>
      <div className="overflow-hidden">
        <NavBar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
      </div>
    </main>
  );
};

export default App;
