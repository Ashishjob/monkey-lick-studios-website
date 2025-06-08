"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full px-2 sm:px-4">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-14 md:py-32">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-3xl xs:text-4xl md:text-6xl font-bold leading-tight">
            <h1>Numbah One Game Developing Studio</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:justify-center md:gap-0 md:flex-row">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110 hover:rotate-6 group drop-shadow-coin"
              >
                <Image
                  width={60}
                  height={60}
                  className="w-14 h-14 xs:w-20 xs:h-20 md:w-[120px] md:h-[120px] rounded-full border-2 border-[#FED009] bg-white shadow-lg group-hover:shadow-yellow-300/60 transition-all duration-300"
                  src="/coin.webp"
                  alt="dashboard"
                />
              </div>
            ))}
          </div>
          <p className="max-w-screen-sm mx-auto text-base xs:text-lg md:text-xl text-muted-foreground">
            {`We are a team of highly skilled developers that are passionate about creating games that are fun and engaging.`}
          </p>

          <div className="sm:flex-col md:flex-row gap-4 items-center justify-center w-full">
            <Button
              asChild
              variant="secondary"
              className="w-full md:w-1/4 md:mr-2 font-bold group/arrow bg-[#FED009] hover:bg-[#FED009]/80 text-[#426D25]"
            >
              <Link
                href="https://distotron.itch.io/stasis"
                target="_blank"
              >
                Our itch.io
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="w-full md:w-1/4 md:ml-2 font-bold"
            >
              <Link
                href="/resources"
              >
                View Early Documents
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-10 md:mt-14 w-full">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[95%] xs:w-[90%] mx-auto h-12 xs:h-24 lg:h-80 bg-[#FED009]/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full xs:w-[95vw] md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
            src={
              theme === "light"
                ? "/monkeylick-hero.png"
                : "/monkeylick-hero.png"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-10 xs:h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
