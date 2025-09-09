import React from "react";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import TechStackSection from "../components/tech/TechStackSection";
import ServicesSection from "../components/services/ServicesSection";
import ContactSection from "../components/contact/ContactSection";

export default function Portfolio() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
