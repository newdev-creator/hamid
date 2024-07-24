import React from "react";
import TitleSection from "./titles/TitleSection";
import Image from "next/image";
import Button from "./ui/Button";

const services = [
  {
    title: "Fitness",
    description:
      "SPORTS CONDITIONING\nPERSONAL / GROUP TRAINING\nSPECIALTY SERVICES",
    image: "/assets/img/fitness.webp",
  },
  {
    title: "Perte de poids",
    description:
      "3D BODY SCAN\nIN-DEPTH BODY ASSESSMENT\nPHYSICAL AND DIETARY ASSESSMENT",
    image: "/assets/img/weightloss.webp",
  },
  {
    title: "Remise en forme",
    description: "WEIGHT TRAINING\nRESISTANCE TRAINING\nRECOVERY TRAINING",
    image: "/assets/img/fit.webp",
  },
];

export default function Service() {
  return (
    <>
      <TitleSection
        title="service"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
        position="text-center"
      />
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-fontBlack text-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="whitespace-pre-line">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Button href="#" label="commencer maintenant prenez rendez-vous" />
      </div>
    </>
  );
}
