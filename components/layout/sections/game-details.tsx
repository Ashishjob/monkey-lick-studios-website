import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface GameDetailsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: GameDetailsProps[] = [
  {
    icon: "Blocks",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "LineChart",
    title: "More Leads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "Wallet",
    title: "Higher Conversions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "Sparkle",
    title: "Test Marketing Ideas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

export const GameDetailsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-[#FED009] mb-2 tracking-wider">The Game</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">STASIS</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {`This project is a psychological horror game set on an abandoned space station orbiting an uninhabited planet in our solar system. Players take on the role of a lone astronaut/engineer sent to investigate a mysterious signal emanating from the station. Upon arrival, they encounter a distinct alien entity with terrifying abilities, turning what was supposed to be a routine investigation into a fight for survival. The gameplay combines elements of resource management, stealth, and puzzle-solving as players navigate through the eerie, malfunctioning station, attempting to escape while unraveling the mystery behind the alien presence. With limited communication to mission control, a damaged ship, and a malfunctioning tablet, players must outsmart the alien and reach an emergency escape pod. The game culminates in a chilling twist that suggests the nightmare may not be over, even after escaping the station.`}
          </p>
        </div>
        <Image
          src="/game-logo.svg"
          alt="Game Design Document"
          className="object-cover rounded-lg hover:cursor-default border-2"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};
