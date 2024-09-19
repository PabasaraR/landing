import React from "react";
import { HeadingSection } from "./HeadingSection";
import { WhoWeAre } from "./WhoWeAre";
import { ServicesSection } from "./ServicesSection";
import { ContactSection } from "./ContactSection";
import bgImage from "../Image/image2.jpg";

export default function LandingPage() {
  return (
    <div
      className="relative w-screen h-screen bg-black bg-center bg-cover animate-fadeIn "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="z-10 bg-[#F5DFFB]/70">
        <HeadingSection />
        <WhoWeAre />
        <ServicesSection />
        <ContactSection />
      </div>
    </div>
  );
}
