import React from "react";
import TitleSection from "./titles/TitleSection";
import Image from "next/image";
import TitleCard from "./titles/TitleCard";

const steps = [
  {
    id: 1,
    title: "Create a project",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    id: 2,
    title: "Assign related people",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    id: 3,
    title: "Make it done on-time",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
  },
];

export default function EasyStart() {
  return (
    <>
      <TitleSection
        title="démarrez facilement"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
        position="text-center"
      />

      <div className="bg-fontBlack mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <Image
                src="/assets/img/commencer.webp"
                alt="Photo d'une femme qui court sur la plage"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>

            <div className="w-full lg:w-1/2 mx-auto mt-8 lg:mt-0 lg:ml-52 p-6 rounded-lg">
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className="bg-yellow text-fontBlack font-bold rounded-full w-10 h-10 flex items-center justify-center">
                      {step.id}
                    </div>
                    <div>
                      <TitleCard titleCard={step.title} />
                      <p className="text-white w-1/2">{step.description}</p>
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
