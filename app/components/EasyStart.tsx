import React from "react";
import TitleSection from "./titles/TitleSection";
import Image from "next/image";
import TitleCard from "./titles/TitleCard";

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
                src="/assets/img/woman-running.webp"
                alt="Photo d'une femme qui court sur la plage"
                // layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 p-6 rounded-lg">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow text-fontBlack font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <TitleCard titleCard="Create a project" />
                    <p className="text-white w-1/2">
                      With lots of unique blocks, you can easily build a page
                      without coding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Assign related people
                    </h3>
                    <p className="text-white">
                      With lots of unique blocks, you can easily build a page
                      without coding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Make it done on-time
                    </h3>
                    <p className="text-white">
                      With lots of unique blocks, you can easily build a page
                      without coding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
