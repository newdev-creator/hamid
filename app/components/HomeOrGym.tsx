import React from "react";
import TitleSection from "./titles/TitleSection";
import homeOrGym from "../../public/assets/img/home_or_gym/home_or_gym.webp";
import Image from "next/image";
import { Russo_One } from "next/font/google";
import Check from "./icons/Check";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

interface ServiceSectionProps {
  title: string;
  items: string[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, items }) => (
  <div className="mx-auto">
    <h3 className={`text-3xl uppercase font-bold mb-4 ${russoOne.className}`}>
      {title}
    </h3>
    <ul className="w-full ps-1">
      {items.map((item, index) => (
        <li key={index} className="flex gap-4 mb-2 items-center">
          <Check /> {item}
        </li>
      ))}
    </ul>
  </div>
);

const HomeOrGym: React.FC = () => {
  return (
    <>
      <TitleSection
        title="chez vous ou en salle"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
        position="text-center"
      />
      <div className="w-full bg-fontBlack">
        <div className="container mx-auto p-4 mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2">
              <Image
                src={homeOrGym}
                alt="Fitness"
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 p-6 text-white">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ServiceSection
                    title="de chez vous"
                    items={[
                      "Progressez à votre rythme",
                      "Avec votre matériel",
                      "Exercices adaptés",
                    ]}
                  />
                  <ServiceSection
                    title="en salle"
                    items={[
                      "Matériel adapté",
                      "Cadre professionnel",
                      "Partager votre expérience",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOrGym;
