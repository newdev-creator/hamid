import React from "react";
import TitleSection from "./titles/TitleSection";
import Image from "next/image";
import Percent from "./icons/Percent";
import Healt from "./icons/Healt";
import Certificat from "./icons/Certificat";

const features = [
  {
    title: "titre1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Percent />,
  },
  {
    title: "titre1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Percent />,
  },
  {
    title: "titre1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Percent />,
  },
  {
    title: "titre1",
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
      <div className="flex flex-col lg:flex-row bg-fontBlack text-white">
        {/* Image */}
        <div className="lg:w-1/2">
          <Image
            src="/assets/img/bg-hero.jpg"
            width={800}
            height={600}
            alt="Photo de Hamid"
          />
        </div>
        {/* Content */}
        <div className="lg:w-1/2 flex flex-col justify-center p-8">
          <div className="mb-10">
            <TitleSection title="pourquoi me choisir" position="text-start" />
            <TitleSection
              title="Les meilleurs services"
              position="text-start"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div className="flex gap-4" key={index}>
                <div className="pt-2">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-bold">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
