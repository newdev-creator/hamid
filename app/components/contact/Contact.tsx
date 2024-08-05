import React from "react";
import TitleSection from "../titles/TitleSection";
import ContactSide from "./ContactSide";
import GoogleMap from "./map/GoogleMap";

export default function Contact() {
  return (
    <>
      <TitleSection
        title="contact"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
        position="text-center"
      />
      <div className="container mx-auto px-4 mt-20 md:relative md:flex md:gap-4">
        {/* map */}
        <div className="w-full hidden md:block md:h-[710px] md:relative">
          <GoogleMap />
        </div>
        {/* contact */}
        <ContactSide />
        <div className="w-full block md:hidden md:h-[710px] md:relative">
          <GoogleMap />
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
}
