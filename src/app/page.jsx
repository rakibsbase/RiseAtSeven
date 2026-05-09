import AboutMission from "@/components/home/AboutMission";
import ClientLogos from "@/components/home/ClientLogos";
import FeaturedWork from "@/components/home/FeaturedWork";
import HeroSection from "@/components/home/HeroSection";
import InfiniteMarquee from "@/components/home/InfiniteMarquee";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <>
      {/* 1. Impact & Credibility Layer */}
      <HeroSection />
      <ClientLogos />

      {/* 2. Philosophy & Expertise */}
      <AboutMission />
      <FeaturedWork />
      <Service />

      {/* 3. Social Proof & Authority */}
      <InfiniteMarquee />
    </>
  );
}
