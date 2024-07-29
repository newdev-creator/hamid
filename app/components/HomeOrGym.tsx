import React from "react";
import TitleSection from "./titles/TitleSection";
import homeOrGym from "../../public/assets/img/home_or_gym/home_or_gym.webp";
import Image from "next/image";
import { Russo_One } from "next/font/google";
import ArrowRight from "./icons/ArrowRight";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export default function HomeOrGym() {
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
              <Image src={homeOrGym} alt="Fitness" className="rounded-lg" />
            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 p-6 text-white">
              <div className="space-y-8">
                <div className="flex justify-center gap-4">
                  <div>
                    <h3
                      className={`text-3xl uppercase font-bold mb-4 ${russoOne.className}`}
                    >
                      de chez vous
                    </h3>
                    <ul className="w-full">
                      <li className="flex gap-4 justify-center items-center">
                        <ArrowRight /> Progressez à votre ryhtme
                      </li>
                      <li>Avec votre matériel</li>
                      <li>Exercices adapté</li>
                    </ul>
                  </div>
                </div>
                {/* {steps.map((step) => (
              <div key={step.id} className="flex justify-center gap-4">
                <div className="bg-yellow text-fontBlack font-bold rounded-full min-w-10 w-10 h-10 flex items-center justify-center">
                  {step.id}
                </div>
                <div>
                  <h3
                    className={`text-3xl uppercase font-bold mb-4 ${russoOne.className}`}
                  >
                    {step.title}
                  </h3>
                  <p className="w-1/2">{step.description}</p>
                </div>
              </div>
            ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
