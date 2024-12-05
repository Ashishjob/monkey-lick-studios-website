import { GDDSection } from "@/components/layout/sections/gdd";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { TeamSection } from "@/components/layout/sections/team";
import { CarouselSection } from "@/components/layout/sections/company-carousel";
import { CharacterSection } from "@/components/layout/sections/characters";
import { GameDetailsSection } from "@/components/layout/sections/game-details";
import { StoryboardSection } from "@/components/layout/sections/storyboard-carousel";
import Trailer from "@/components/layout/sections/trailer";
import GameDownload from "@/components/layout/sections/game-download";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <CarouselSection />
      <Trailer />
      <GameDownload />
      <GDDSection />
      <GameDetailsSection />
      <CharacterSection />
      <StoryboardSection />
      <div className="flex flex-row justify-center w-full">
        <iframe title="slides" src="https://docs.google.com/presentation/d/1gHobjaLR_Vuhj1yE9P_Zo1_aqsNgNzRjoRDeUi82cVg/embed?start=true&loop=true&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen></iframe>
      </div>
      {/* <FeaturesSection />
      <PricingSection />
      <FAQSection /> */}

      <FooterSection />
    </>
  );
}
