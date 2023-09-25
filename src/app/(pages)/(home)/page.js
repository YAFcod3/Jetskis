"use client";
import Image from "next/image";
import HeroVideo from "./components/HeroVideo";
import Features from "./components/Features";
import Offer from "./components/Offer";
import Info from "./components/Info";
import { Inter, Lora, Source_Sans_3 } from "next/font/google";
import Navbar from "@/app/shared/common/Navbar";
import FeatureJetSki from "./components/FeatureJetSki";

const inter = Inter({ subsets: ["latin"] });
const sans = Source_Sans_3({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar type="showEffect" />

      <HeroVideo />

      <Features />
      <div className={inter.className}>
        <Offer />
      </div>

      <div className={sans.className}>
        <FeatureJetSki/>
        <div className="mt-20 flex mx-auto   bg-gray-100  flex-col items-center gap-30">
          <Info />
        </div>
      </div>
    </>
  );
}
