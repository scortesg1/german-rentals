import Navbar from "@/components/shared/NavBar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "./sections/Hero/HeroSection";
import BrandsSlider from "./sections/BrandsSlider/BrandsSlider";
import Features from "./sections/Features/Features";
import Fleet from "./sections/Fleet/Fleet";
import Cta from "./sections/Cta/Cta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BrandsSlider />
      <Features/>
      <Fleet/>
      <Cta/>
    </main>
  );
}
