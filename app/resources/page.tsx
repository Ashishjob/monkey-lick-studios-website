import Link from "next/link";
import { GDDSection } from "@/components/layout/sections/gdd";
import { GameDetailsSection } from "@/components/layout/sections/game-details";
import { CharacterSection } from "@/components/layout/sections/characters";
import { StoryboardSection } from "@/components/layout/sections/storyboard-carousel";
import { ArrowLeft } from "lucide-react";
import { FooterSection } from "@/components/layout/sections/footer";

export default function ResourcesPage() {
  const src = "/trailer.mp4"; // Path to the trailer video
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <Link
        href="/"
        className="fixed top-20 sm:top-6 left-6 z-50 flex items-center px-4 py-2 rounded-lg text-base font-semibold shadow transition  text-black dark:text-white"
        style={{ textDecoration: "none" }}
      >
        <ArrowLeft className="mr-2 w-5 h-5 mt-6 md:mt-0" />
        <span className="hidden sm:inline">Back to the Current Game</span>
      </Link>
      <GDDSection />
      <GameDetailsSection />
      <div className="flex flex-col justify-center items-center p-4">
        <h2 className="text-lg text-[#FED009] text-center mb-2 tracking-wider">
          Prepare Yourself With
        </h2>

        <div className="flex justify-center items-center">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Our Trailer
          </h2>
        </div>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          Watch our official trailer to get a sneak peek of the game.
        </h3>
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
            <iframe
              src={src}
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
      <CharacterSection />
      <StoryboardSection />
      <div className="flex flex-row justify-center w-full">
        <iframe
          title="slides"
          src="https://docs.google.com/presentation/d/1gHobjaLR_Vuhj1yE9P_Zo1_aqsNgNzRjoRDeUi82cVg/embed?start=true&loop=true&delayms=3000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen
        ></iframe>
      </div>
      <FooterSection />
    </main>
  );
}
