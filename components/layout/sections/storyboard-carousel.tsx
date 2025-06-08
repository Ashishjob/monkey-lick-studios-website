"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface StoryboardProps {
  image: string;
  title: string;
  description: string;
}

const sceneList: StoryboardProps[] = [
  {
    image: "/scenes/scene1.svg",
    title: "Scene 1: Arrival at the Station",
    description: "A lone spaceship approaches an abandoned space station orbiting a barren planet. The suited astronaut, equipped with a flashlight, docks their ship and enters the station. They're greeted by an eerie silence and flickering lights, setting a tense atmosphere.",
  },
  {
    image: "/scenes/scene2.svg",
    title: "Scene 2: The Jammed Airlock",
    description: "The astronaut encounters a jammed airlock, their first obstacle. After examining and struggling with it, they solve a puzzle using materials from their ship to force it open, demonstrating resourcefulness in a dire situation.",
    },
  {
    image: "/scenes/scene3.svg",
    title: "Scene 3: The Abandoned Station",
    description: "Entering the main room, the astronaut finds it in disarray. They discover a USB drive with crucial station data. Suddenly, a meteor strikes the station, causing a power surge and revealing a shadowy figure, hinting at an unknown presence.",
  },
  {
    image: "/scenes/scene4.svg",
    title: "Scene 4: The Generator Room",
    description: "The astronaut enters Room A, the first generator room. They solve a complex puzzle to activate the generator, but their success is short-lived as they're startled by a blood-curdling screech, suggesting imminent danger.",
  },
  {
    image: "/scenes/scene5.svg",
    title: "Scene 5: The Destroyed Ship",
    description: "Returning to the docking bay, the astronaut finds their ship destroyed, eliminating their means of escape. In a moment of desperation, they discover an emergency pod in Room X, offering a glimmer of hope.",
  },
  {
    image: "/scenes/scene6.svg",
    title: "Scene 6: Uncovering the Station's Secrets",
    description: "Exploring further, the astronaut uncovers personal logs and artifacts, learning about the tragic fate of the station's last inhabitant. Their tablet malfunctions, providing only glimpses of crucial information and adding to the mystery.",
  },
  {
    image: "/scenes/scene7.svg",
    title: "Scene 7: The Zomboid Astronaut",
    description: "As more generators are activated, the station seems to awaken. A grotesque fusion of man and alien, the zomboid astronaut, appears and begins stalking the protagonist through the corridors, escalating the tension.",
  },
  {
    image: "/scenes/scene8.svg",
    title: "Scene 8: The Humanoid Alien",
    description: "Activating the generator in Room B unleashes a second threat: a powerful and cunning humanoid alien. The astronaut is now caught between two relentless predators, hunted through the station's maze-like structure.",
  },
  {
    image: "/scenes/scene9.svg",
    title: "Scene 9: The Final Chase",
    description: "In a heart-pounding climax, the astronaut races towards Room X and the escape pod. Both the zomboid astronaut and humanoid alien give chase. The protagonist reaches the pod just in time, launching into space and escaping the station.",
  },
  {
    image: "/scenes/scene10.svg",
    title: "Scene 10: The Final Twist",
    description: "As the astronaut looks back at Earth, a chilling realization dawns. They discover a scratch on their suit, a sign of a possible alien infection. The story ends with the alien's voice whispering through the comm system, 'I'm here,' leaving the protagonist's fate uncertain.",
  },
];

export const StoryboardSection = () => {
  return (
    <section id="storyboard" className="container pb-16 md:pb-24">
      <div className="text-center mb-8">
        <h2 className="text-lg text-[#FED009] text-center mb-2 tracking-wider">
          Storyboard
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Key Scenes in Our Story
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {sceneList.map((scene) => (
            <CarouselItem
              key={scene.title}
              className="px-1 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-white h-full dark:bg-card flex flex-col items-center p-2 sm:p-4 shadow-lg">
                <Avatar className="w-full h-48 sm:h-64 mb-4">
                  <AvatarImage src={scene.image} alt={scene.title} />
                  <AvatarFallback>SV</AvatarFallback>
                </Avatar>
                <CardContent className="text-center md:text-left">
                  <CardTitle className="text-lg sm:text-xl mb-2">{scene.title}</CardTitle>
                  <CardDescription className="md:mb-4 text-xs sm:text-sm">{scene.description}</CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};