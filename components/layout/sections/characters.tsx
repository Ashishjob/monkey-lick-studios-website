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

interface CharacterProps {
  image: string;
  name: string;
  originStory: string;
  appearance: string;
  personality: string;
}

const characterList: CharacterProps[] = [
  {
    image: "/unkownpfp.webp",
    name: "Dexter “Dex” Bates",
    originStory:
      "Dexter 'Dex' Bates is a former Air Force pilot, known for his sharp instincts and quick decision-making under pressure. After transitioning to become an astronaut, he was chosen for a high-stakes mission to investigate the mysterious loss of communication with a space station orbiting Earth. Resourceful and relentless, Dex must now navigate a series of unknown dangers to uncover the truth and restore the link to ground control.",
    appearance:
      "Dex is a tall, lean man with an athletic build, standing at about 6 feet. He has short, neatly cropped-brown hair and piercing blue eyes that reflect his years of discipline and focus as a pilot. Though mostly seen in his astronaut suit, his strong posture and commanding presence are evident, hinting at his background in the Air Force.",
    personality:
      "Dex is a highly disciplined and intelligent individual, shaped by his years in the Air Force where quick thinking and adaptability were essential. He remains calm under pressure, relying on logic and strategy to solve problems, yet is always ready to take decisive action when needed. His sense of duty and leadership drive him to persevere, even when faced with unknown dangers aboard the space station.",
  },
  {
    image: "/unkownpfp.webp",
    name: "Letov Yakovich (pre-Zomboid Form)",
    originStory:
      "Letov Yakovich, born in a small, rural village in Russia, fought his way through a challenging upbringing, excelling academically and earning a place in the military. His determination and discipline led him to join the Russian Space Agency, where he quickly proved himself as a skilled and courageous astronaut. A month before Dex's arrival at the station, Letov's communications with Ground Control mysteriously ceased, leaving his fate unknown.",
    appearance:
      "Letov is a stocky, broad-shouldered man with a solid build, standing at around 5'10”. He has short, dark hair and deep-set brown eyes that reflect both his rugged upbringing and years of military discipline. His face, often stern and serious, bears the marks of someone who has faced and overcome adversity, giving him a hardened, resilient look.",
    personality:
      "Letov is known for his resilience and relentless work ethic, traits he developed growing up in a harsh, remote village. His military background has made him disciplined, methodical, and fiercely loyal to his comrades. While he may come across as quiet and reserved, he is fiercely determined and capable of pushing through extreme challenges, with a deep sense of responsibility to complete any mission he's given.",
  },
  {
    image: "/unkownpfp.webp",
    name: "Letov Yakovich (Zomboid Form)",
    originStory:
      "Once a dedicated astronaut, Letov Yakovich fell victim to a mysterious parasitic entity that now controls his lifeless body. His last mission before communication was lost involved investigating an unusual biological anomaly on the space station, which ultimately led to his demise. Now, his body roams the station, manipulated by the parasite, as a haunting reminder of what happens when space's unknown dangers are unleashed.",
    appearance:
      "Letov's once-pristine astronaut suit is now marked by small, unsettling red blood stains, particularly around the neck and chest area. His face is obscured by his helmet, but you see glowing red eyes/pupils glowing through his helmet.. The parasite subtly contorts his movements, giving them an unnatural, jerky quality as if struggling to fully control its host.",
    personality:
      "While Letov's mind is no longer his own, faint traces of his military discipline can be observed in the methodical, albeit eerie, way the parasite navigates his body through the space station. Any warmth or loyalty he once had has been replaced by a cold, predatory instinct driven by the parasite's need to survive. The creature controlling him shows no mercy, seeking to spread its influence across the station.",
  },
  {
    image: "/unkownpfp.webp",
    name: "Alien (Humanoid Form)",
    originStory:
      "explain them",
    appearance:
      "explain what they look like",
    personality:
      "explain what they act like",
  },
  {
    image: "/unkownpfp.webp",
    name: "Alien (Parasitic Form)",
    originStory:
      "explain them",
    appearance:
      "explain what they look like",
    personality:
      "explain what they act like",
  },
];

export const CharacterSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-[#FED009] text-center mb-2 tracking-wider">
          Characters
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Meet the Characters in Our Story
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {characterList.map((character) => (
            <CarouselItem
              key={character.name}
              className="md:basis-1/1 lg:basis-1/1"
            >
              <Card className="bg-muted/50 dark:bg-card flex flex-row">
                <Avatar className="w-1/3 h-auto">
                  <AvatarImage src={character.image} alt={character.name} />
                  <AvatarFallback>SV</AvatarFallback>
                </Avatar>
                <CardContent className="p-6 w-2/3">
                  <CardTitle className="text-2xl mb-2">{character.name}</CardTitle>
                  <CardDescription className="mb-4">
                    <strong>Origin Story:</strong> {character.originStory}
                  </CardDescription>
                  <CardDescription className="mb-4">
                    <strong>Appearance:</strong> {character.appearance}
                  </CardDescription>
                  <CardDescription>
                    <strong>Personality:</strong> {character.personality}
                  </CardDescription>
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