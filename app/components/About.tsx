import React from "react";
import TitleSection from "./titles/TitleSection";
import Image from "next/image";

export default function About() {
  return (
    <>
      <TitleSection
        title="à propos"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
      />
      <div className="w-full flex justify-between bg-fontBlack ">
        <Image
          src="/assets/img/bg-hero.jpg"
          className="hidden lg:block"
          width={50}
          height={50}
          alt="Photo de Hamid"
        />
        <div>content</div>
      </div>

      <div className="flex flex-col lg:flex-row bg-gray-900 text-white">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            src="/assets/img/bg-hero.jpg"
            alt="Trainer"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">WHY CHOOSE US</h2>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-8">
            WE GIVE THE BEST SERVICE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certified Trainers */}
            <div className="flex items-start">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M13 5h8m-1 6l-7 7-7-7m9-4v12"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">CERTIFIED TRAINERS</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Regular Checks */}
            <div className="flex items-start">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">REGULAR CHECKS</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Quality Equipments */}
            <div className="flex items-start">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2l4-4M7 10h.01M12 17h.01M17 12h.01M12 7h.01"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">QUALITY EQUIPMENTS</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Huge Discounts */}
            <div className="flex items-start">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zM12 2a10 10 0 100 20a10 10 0 000-20z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">HUGE DISCOUNTS</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
