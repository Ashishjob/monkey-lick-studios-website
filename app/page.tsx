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
      <div className="flex flex-row justify-center w-full">
        <iframe src="https://docs.google.com/presentation/d/100x6_ORM86gmwy0lh4CkMpv7H5tryB4krr_QQdJRwUo/embed?start=false&loop=true&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen mozallowfullscreen webkitallowfullscreen></iframe>        </div>
      {/* <FeaturesSection />
      <PricingSection />
      <FAQSection /> */}

      <FooterSection />
    </>
  );
}
