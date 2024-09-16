"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface TeamProps {
  image: string;
  name: string;
  position: string;
  linkedin: string;
}
const serviceList: TeamProps[] = [
  {
    image: "/team/sterling-gore.svg",
    name: "Sterling Gore",
    position: "🎬 Producer & Team Lead",
    linkedin: "https://www.linkedin.com/in/sterlinggore/",
  },
  {
    image: "/team/ashish-job.svg",
    name: "Ashish Job",
    position: "🎬 Producer",
    linkedin: "https://www.linkedin.com/in/ashish-job/",
  },
  {
    image: "/team/john-cox.svg",
    name: "John Cox",
    position: "📝 Designer",
    linkedin: "https://www.linkedin.com/in/johncoxdev/",
  },
  {
    image: "/team/sebastian-dle.svg",
    name: "Sebastian De La Espriella",
    position: "🖥️ Engineer",
    linkedin: "https://www.linkedin.com/in/sebastian-de-la-espriella/",
  },
  {
    image: "/monkeylick-hero.png",
    name: "",
    position: "",
    linkedin: "",
  },
  {
    image: "/team/ross-rezvani.svg",
    name: "Ross Rezvani",
    position: "📝 Designer",
    linkedin: "https://www.linkedin.com/in/submit",
  },
  {
    image: "/team/brody-pen.svg",
    name: "Brody Pen",
    position: "🖥️ Engineer",
    linkedin: "https://www.linkedin.com/in/brodypen/",
  },
  {
    image: "/team/jorell-padilla.svg",
    name: "Jorell Padilla",
    position: " 🎨 Artist",
    linkedin: "https://www.linkedin.com/in/jorell-padilla/",
  },
  {
    image: "/team/adrian-armenta.svg",
    name: "Adrian Armenta",
    position: " 🎨 Artist",
    linkedin: "https://www.linkedin.com/in/adrian-armenta/",
  },
];

export const TeamSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-[#FED009] text-center mb-2 tracking-wider">
        Introducing...
      </h2>

      <div className="flex justify-center items-center">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Our Team
        </h2>
      </div>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Meet the team that makes up Monkey Lick Studios!!
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-[100%] mx-auto">
        {serviceList.map(({ image, name, position, linkedin }) => (
          <Card
            key={name}
            className={`bg-muted/60 dark:bg-card h-full relative hover:cursor-pointer ${
              !name && !position && !linkedin ? "p-0 hidden lg:block" : ""
            }`}
            onClick={() => linkedin && window.open(linkedin, "_blank")}
          >
            {!name && !position && !linkedin ? (
              <Image
                src={image}
                alt="Full Card Image"
                className="w-full h-full object-cover rounded-lg hover:cursor-default"
                layout="fill"
              />
            ) : (
              <CardHeader className="flex-row">
                <Image
                  src={image}
                  alt={name}
                  className="w-16 h-16 mr-4 rounded-lg"
                  width={64}
                  height={64}
                />
                <div>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription className="mt-2">{position}</CardDescription>
                </div>
              </CardHeader>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
