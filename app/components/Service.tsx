import React from "react";
import TitleSection from "./titles/TitleSection";
import Image from "next/image";
import Button from "./ui/Button";
import TitleCard from "./titles/TitleCard";

const services = [
  {
    title: "Fitness",
    description:
      "SPORTS CONDITIONING\nPERSONAL / GROUP TRAINING\nSPECIALTY SERVICES",
    image: "/assets/img/services/fitness.webp",
  },
  {
    title: "Perte de poids",
    description:
      "3D BODY SCAN\nIN-DEPTH BODY ASSESSMENT\nPHYSICAL AND DIETARY ASSESSMENT",
    image: "/assets/img/services/perte_de_poid.webp",
  },
  {
    title: "Remise en forme",
    description: "WEIGHT TRAINING\nRESISTANCE TRAINING\nRECOVERY TRAINING",
    image: "/assets/img/services/remise_en_forme.webp",
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
              className="bg-fontBlack text-white rounded-lg overflow-hidden shadow-lg last:mb-4 lg:mb-20 lg:last:mb-20"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-top"
                />
              </div>
              <div className="p-4">
                <TitleCard titleCard={service.title} />
                <p className="whitespace-pre-line">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="#" label="commencer maintenant prenez rendez-vous" />
        </div>
      </div>
    </>
  );
}
