"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
interface sponsorsProps {
  logoVar: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    logoVar: "--amazon-logo",
    name: "Amazon",
  },
  {
    logoVar: "--nasa-logo",
    name: "NASA",
  },
  {
    logoVar: "--pwc-logo",
    name: "PWC",
  },
  {
    logoVar: "--jpmc-logo",
    name: "JPMorganChase",
  },
  {
    logoVar: "--paycom-logo",
    name: "Paycom",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Founded by developers previously at
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ logoVar, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <div
                style={{
                  backgroundImage: `var(${logoVar})`,
                  width: '200px',
                  height: '100px',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  marginRight: '8px',
                }}
                aria-label={name}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};