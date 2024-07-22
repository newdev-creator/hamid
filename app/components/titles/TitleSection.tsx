import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

interface PropsTitleSection {
  title: string;
  description: string;
}

const TitleSection: React.FC<PropsTitleSection> = ({ title, description }) => {
  return (
    <div className="text-center text-white text-shadow-lg px-10 lg:px-72">
      <h3
        className={`text-2xl lg:text-4xl mb-6 capitalize ${russoOne.className}`}
      >
        {title}
      </h3>
      <p className="font-medium mb-6">{description}</p>
    </div>
  );
};

export default TitleSection;
