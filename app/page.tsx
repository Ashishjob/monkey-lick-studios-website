import { GDDSection } from "@/components/layout/sections/gdd";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { TeamSection } from "@/components/layout/sections/team";
import { CarouselSection } from "@/components/layout/sections/carousel";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { GameDetailsSection } from "@/components/layout/sections/game-details";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <GDDSection />
      <GameDetailsSection />
      <TeamSection />

      {/* <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection /> */}

      <FooterSection />
    </>
  );
}
