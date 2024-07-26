import Image from "next/image";
import React from "react";

export default function CtaTwo() {
  return (
    <div className="bg-blue-900 text-white py-8 px-4 flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/4 flex justify-center lg:justify-end mb-4 lg:mb-0">
          <Image
            src="/assets/img/CTA/kettelbelt.webp"
            alt="Image 1"
            width={200}
            height={200}
            className="rounded-lg border-4 border-pink-500"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0 px-4">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
            lacus ligula. Phasellus pellentesque nisl urna. Aliquam congue nisl
            diam, sed hendrerit libero blandit nec.
          </p>
          <div className="text-center">
            <a
              href="#"
              className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
            >
              Séance découverte 15€
            </a>
          </div>
        </div>
        <div className="lg:w-1/4 flex justify-center lg:justify-start">
          <Image
            src="/assets/img/CTA/girl_training.webp"
            alt="Image 2"
            width={200}
            height={200}
            className="rounded-lg border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
}
