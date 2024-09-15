import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface GDDProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: GDDProps[] = [
  {
    icon: "Blocks",
    title: "Characters",
    description: "Detailed descriptions of the main characters, their backgrounds, and roles in the game.",
  },
  {
    icon: "LineChart",
    title: "Story",
    description: "An overview of the game's storyline, including key plot points and narrative structure.",
  },
  {
    icon: "Wallet",
    title: "Gameplay",
    description: "An overview of the gameplay mechanics, including user movement, attributes, and game mechanics.",
  },
  {
    icon: "Sparkle",
    title: "Creative Choices",
    description: "Description of the visual style, including character design, environment, and overall aesthetic.",
  },
];

export const GDDSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-[#FED009] mb-2 tracking-wider">GDD</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Game Design Document
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {`Our Game Design Document is a detailed document that outlines the game's concept, gameplay, features, and more. It serves as a blueprint for the game's development and helps ensure that the team is on the same page throughout the development process.`}
          </p>
          <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="#FED009"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
        <div className="w-full h-[800px] mb-8">
          <iframe
            className="w-full h-full border-2 border-gray-300"
            src="/Temp MonkeyLick Studios GDD.pdf"
            style={{
              width: "100%",
              height: "100%",
              border: "2px solid gray",
              overflow: "hidden",
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
