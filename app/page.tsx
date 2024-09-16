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

export default function Home() {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <GDDSection />
      <GameDetailsSection />
      <CharacterSection />
      <StoryboardSection />
      <TeamSection />

      {/* <FeaturesSection />
      <PricingSection />
      <FAQSection /> */}

      <FooterSection />
    </>
  );
}
