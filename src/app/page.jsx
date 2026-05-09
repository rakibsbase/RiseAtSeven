import AboutMission from "@/components/home/AboutMission";
import ClientLogos from "@/components/home/ClientLogos";
import FeaturedWork from "@/components/home/FeaturedWork";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      {/* 1. Impact & Credibility Layer */}
      <HeroSection />
      <ClientLogos />

      {/* 2. Philosophy & Expertise */}
      <AboutMission />
      <FeaturedWork />
    </>
  );
}
