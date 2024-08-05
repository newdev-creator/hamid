import React from "react";

export default function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9994545041427!2d2.292292315674318!3d48.85884407928785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f1df9e4b81b%3A0xf4eeb04c4ac5f6e4!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1629991596893!5m2!1sen!2sfr"
      width="100%"
      // height="400"
      allowFullScreen={false}
      loading="lazy"
      className="rounded-lg shadow-md h-96 md:h-full"
    ></iframe>
  );
}
