import React from "react";
import TitleSection from "../titles/TitleSection";
import ContactSide from "./ContactSide";

export default function Contact() {
  return (
    <>
      <TitleSection
        title="contact"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
        position="text-center"
      />
      <div className="container mx-auto px-4 mt-20">
        {/* contact */}
        <ContactSide />

        {/* map */}
        <div className="w-full md:w-1/2 lg:w-2/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9994545041427!2d2.292292315674318!3d48.85884407928785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f1df9e4b81b%3A0xf4eeb04c4ac5f6e4!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1629991596893!5m2!1sen!2sfr"
            width="100%"
            height="400"
            allowFullScreen={false}
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
}
