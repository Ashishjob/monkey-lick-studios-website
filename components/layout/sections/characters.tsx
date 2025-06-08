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
    name: "Avery 'Ave' Bates",
    originStory:
      "Avery 'Ave' Bates is a former Air Force pilot, renowned for her sharp instincts and swift decision-making in high-pressure situations. After transitioning into the role of astronaut, she was selected for a critical mission to investigate the sudden loss of communication with a space station orbiting Earth. Resourceful, relentless, and driven by a strong sense of duty, Ave must now navigate through a series of unknown dangers to uncover the truth and re-establish contact with ground control.",
    appearance:
      "Ave is a tall, lean woman with an athletic build, standing at about 6 feet. She has short, neatly cropped brown hair and intense blue eyes that reveal the discipline and focus honed over years in the Air Force. While she is most often seen in her astronaut suit, her confident posture and commanding presence clearly reflect her military background.",
    personality:
      "Ave is highly disciplined and intelligent, shaped by her years in the Air Force where quick thinking and adaptability were essential for survival. She remains calm and collected under pressure, relying on logic and strategy to navigate challenges, yet she is always prepared to act decisively when the situation demands. Her strong sense of leadership and responsibility drive her to persevere, even when facing unknown and potentially life-threatening dangers aboard the space station.",
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
      "The Alien in its humanoid form is an incredibly adaptive and intelligent extraterrestrial creature. This form is designed to blend in with humans and interact with them on a cognitive level, enabling it to infiltrate and gather information without arousing suspicion. With the ability to mimic human mannerisms and speech perfectly, the Alien can seamlessly integrate into various social and professional environments. However, beneath its facade lies an advanced and calculating mind that prioritizes survival and its overarching mission—typically something related to gathering resources or knowledge from human civilizations.",
    appearance:
      "In humanoid form, the Alien stands about 6 feet tall with a lithe, graceful build. Its skin has a slightly iridescent sheen, almost too flawless for a regular human, but easily passable from a distance. It has long, silvery hair that appears almost metallic in certain lights, and piercing eyes that change color depending on its emotional state or when using certain abilities—ranging from a neutral blue to a glowing silver when accessing its alien powers. Its facial features are eerily symmetrical, making it appear both attractive and unsettling. It wears human clothes, but they often seem tailored or pristine, adding to its unnatural presence.",
    personality:
      "The Alien in humanoid form is coldly logical and highly observant. It analyzes human interactions with precision, carefully crafting responses and actions to achieve its objectives. Though it can mimic human emotions, it does not actually feel them in the same way; instead, it views emotions as tools for manipulation. Despite this, it occasionally exhibits curiosity about human behavior, leading to moments of experimentation and study. Its overarching trait is its adaptability—able to shift its tactics based on the situation, always with a focus on its survival and the mission at hand.",
  },
  {
    image: "/unkownpfp.webp",
    name: "Alien (Parasitic Form)",
    originStory:
      "In its parasitic form, the Alien reveals its true nature as a cunning and dangerous organism that thrives by attaching itself to a host. This form is purely biological, with the sole purpose of taking control of another being's body, slowly overwriting its host's physical and mental faculties. It thrives by feeding on the host's resources and enhancing its own abilities through this symbiotic connection, eventually erasing the host's consciousness completely. This form allows the Alien to infiltrate more discreetly, spreading like a virus through the population.",
    appearance:
      "The parasitic form of the Alien is a small, amorphous creature, initially resembling a dark, slimy mass, approximately the size of a fist. It has tendrils that extend outwards, enabling it to latch onto its host's body. Once it attaches, these tendrils infiltrate the nervous system, wrapping around vital organs and the spinal cord. Its surface is a glossy black with bio-luminescent veins running along its form, giving off an unsettling glow in the dark. As it bonds with the host, its presence becomes less visible, leaving only subtle blackened veins or discolorations on the skin that indicate the infection.",
    personality:
      "In parasitic form, the Alien is instinct-driven and predatory. It is a master of stealth and patience, preferring to operate in the shadows and slowly take control of its host without being detected. This form is not communicative or emotional—its primary goal is survival and reproduction. It has an almost hive-mind-like mentality, focused on infecting and controlling others to expand its influence. While it lacks the intellectual sophistication of its humanoid form, it compensates with a relentless hunger and a predatory cunning that makes it a dangerous and insidious threat.",
  },
];

export const CharacterSection = () => {
  return (
    <section id="testimonials" className="container py-16 md:py-24">
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
        className="relative w-full sm:w-[90%] lg:max-w-screen-xl mx-auto text-center md:text-left"
      >
        <CarouselContent>
          {characterList.map((character) => (
            <CarouselItem
              key={character.name}
              className="px-1 md:basis-1/1 lg:basis-1/1"
            >
              <Card className="bg-muted/50 dark:bg-card flex flex-col sm:flex-row">
                <Avatar className="w-full sm:w-1/3 h-fit mx-auto sm:mx-0 mb-4 sm:mb-0">
                  <AvatarImage src={character.image} alt={character.name} />
                  <AvatarFallback>SV</AvatarFallback>
                </Avatar>
                <CardContent className="p-4 sm:p-6 w-full sm:w-2/3">
                  <CardTitle className="text-xl sm:text-2xl mb-2">
                    {character.name}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm mb-4">
                    <strong>Origin Story:</strong> {character.originStory}
                  </CardDescription>
                  <CardDescription className="text-xs sm:text-sm mb-4">
                    <strong>Appearance:</strong> {character.appearance}
                  </CardDescription>
                  <CardDescription className="text-xs sm:text-sm">
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