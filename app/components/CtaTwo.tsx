import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import CTAPic1 from "../../public/assets/img/CTA/kettelbelt.webp";
import CTAPic2 from "../../public/assets/img/CTA/man_training.webp";

export default function CtaTwo() {
  return (
    <div className="bg-fontBlack text-white py-8 px-4 my-32">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/4 mb-4 lg:mb-0 relative">
          <Image
            src={CTAPic1}
            alt="Image 1"
            width={200}
            height={200}
            className="rounded-lg border-4 border-white lg:absolute lg:bottom-10"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left m-10 lg:mb-0 px-4">
          <p className="text-xl md:text-2xl font-medium mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
            lacus ligula. Phasellus pellentesque nisl urna. Aliquam congue nisl
            diam, sed hendrerit libero blandit nec.
          </p>
          <div className="text-center">
            <Button href="#" label="Séance découverte 15€" variant="pink" />
          </div>
        </div>
        <div className="lg:w-1/4 relative">
          <Image
            src={CTAPic2}
            alt="Image 2"
            width={200}
            height={200}
            className="rounded-lg border-4 border-white lg:absolute lg:top-4"
          />
        </div>
      </div>
    </div>
  );
}
