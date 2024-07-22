import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});
import bg from "../../public/assets/img/bg-hero.jpg";
import ArrowRight from "./icons/ArrowRight";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <>
      <div className="bg-orange w-full h-[5.5rem]"></div>
      <div
        className="relative bg-no-repeat bg-center lg:bg-[center_top_-8rem] max-w-ful flex flex-col"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative text-center text-white px-10 lg:px-20 pt-72 lg:text-start lg:ms-20">
          <div>
            <h2 className={`text-4xl lg:text-7xl ${russoOne.className}`}>
              Bâtissons le meilleur
            </h2>
            <h2 className={`text-4xl lg:text-7xl mb-9 ${russoOne.className}`}>
              de vous même
            </h2>
            <p className="text-xl lg:text-2xl font-medium opacity-80">
              Je vous guide pour atteindre votre objectif afin
            </p>
            <p className="text-xl lg:text-2xl font-medium opacity-80 mb-9">
              de révéler la vrai personne que vous voulez être
            </p>
            <div className="lg:flex lg:gap-6 items-center">
              <Button href="#" label="commencer maintenant" />
              <Button href="#" label="séance découverte 15€" variant="pink" />
              <p className="cursor-pointer hover:opacity-100 text-xl font-medium opacity-80 flex justify-center items-center gap-2">
                en savoir plus <ArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="px-10 lg:px-80 text-xl text-white font-medium opacity-80 mb-4 mt-20 underline underline-offset-8">
          <ul className="flex justify-between items-center gap-2">
            <li>cardio</li>
            <li>crossfit</li>
            <li>bodybuilding</li>
            <li>boxing</li>
          </ul>
        </div>
      </div>
    </>
  );
}
