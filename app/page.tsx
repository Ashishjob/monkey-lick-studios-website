import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { TeamSection } from "@/components/layout/sections/team";
import { CarouselSection } from "@/components/layout/sections/company-carousel";
import Trailer from "@/components/layout/sections/trailer";
import GameDownload from "@/components/layout/sections/game-download";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <CarouselSection />
      <Trailer />
      <GameDownload />
      <FooterSection />
    </>
  );
}
