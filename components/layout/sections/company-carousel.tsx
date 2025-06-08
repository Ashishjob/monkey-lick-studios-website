"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import { useTheme } from "next-themes";

interface carouselProps {
  logo: string; // direct image path
  name: string;
  darkLogo?: string;
  lightLogo?: string;
}

const sponsors: carouselProps[] = [
  {
    logo: "/company/amazon-dark.svg",
    darkLogo: "/company/amazon-dark.svg",
    lightLogo: "/company/amazon-light.svg",
    name: "Amazon",
  },
  {
    logo: "/company/nasa.svg",
    name: "NASA",
  },
  {
    logo: "/company/pwc-dark.svg",
    darkLogo: "/company/pwc-dark.svg",
    lightLogo: "/company/pwc-light.svg",
    name: "PWC",
  },
  {
    logo: "/company/jpmc-dark.svg",
    darkLogo: "/company/jpmc-dark.svg",
    lightLogo: "/company/jpmc-light.svg",
    name: "JPMorganChase",
  },
  {
    logo: "/company/paycom-dark.svg",
    darkLogo: "/company/paycom-dark.svg",
    lightLogo: "/company/paycom-light.svg",
    name: "Paycom",
  },
  {
    logo: "/company/bloomberg-dark.svg",
    darkLogo: "/company/bloomberg-dark.svg",
    lightLogo: "/company/bloomberg-light.svg",
    name: "Bloomberg",
  },
  {
    logo: "/company/american-express.svg",
    name: "American Express",
  },
  {
    logo: "/company/slb.svg",
    name: "SLB",
  },
];

export const CarouselSection = () => {
  const { theme } = useTheme();
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Founded by developers previously/currently at
      </h2>
      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ logo, name, darkLogo, lightLogo }) => {
            let logoSrc = logo;
            if (theme === "dark" && darkLogo) logoSrc = darkLogo;
            if (theme === "light" && lightLogo) logoSrc = lightLogo;
            return (
              <div
                key={name}
                className="flex items-center text-xl md:text-2xl font-medium"
                style={{ minWidth: 200, minHeight: 100 }}
              >
                <Image
                  src={logoSrc}
                  alt={name + " logo"}
                  width={200}
                  height={100}
                  style={{ objectFit: "contain", width: 200, height: 100 }}
                  priority
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};