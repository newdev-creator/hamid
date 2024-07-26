import React from "react";
import TitleSection from "./titles/TitleSection";
import Image from "next/image";
import Percent from "./icons/Percent";
import Healt from "./icons/Healt";
import Certificat from "./icons/Certificat";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

const features = [
  {
    title: "Entrainer certifié",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Certificat />,
  },
  {
    title: "Qualité des exercices",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Certificat />,
  },
  {
    title: "Suivi régulié",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Healt />,
  },
  {
    title: "Prix juste",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Percent />,
  },
];

export default function About() {
  return (
    <>
      <TitleSection
        title="à propos"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
        position="text-center"
      />
      <div className="w-full bg-fontBlack">
        <div className="container mx-auto p-4 mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2">
              <Image
                src="/assets/img/about/about.webp"
                alt="Fitness"
                layout="responsive"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 p-6 text-white">
              <h3
                className={`text-3xl uppercase font-bold mb-4 ${russoOne.className}`}
              >
                pourquoi me choisir
              </h3>
              <h3 className="text-2xl mb-8">Les meilleurs services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="pt-2">{feature.icon}</div>
                    <div>
                      <h4 className="text-xl capitalize font-bold">
                        {feature.title}
                      </h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
