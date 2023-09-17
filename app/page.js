"use client";
import Image from "next/image";
import HeroVideo from "./components/HeroVideo";
import Features from "./components/Features";
import Offer from "./components/Offer";
import FeaturesVideoHover from "./components/FeaturesVideoHover";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroVideo />
      
        <Features />

      <Offer />
      <div className="mt-20 flex max-w-5xl mx-auto  flex-col items-center gap-30">
        <FeaturesVideoHover />
      </div>
      <Footer />
    </>
  );
}
