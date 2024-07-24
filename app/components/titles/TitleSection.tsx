import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

interface PropsTitleSection {
  title: string;
  description?: string;
  position?: string;
}

const TitleSection: React.FC<PropsTitleSection> = ({
  title,
  description,
  position,
}) => {
  return (
    <div className={`${position} text-white text-shadow-lg`}>
      <h3
        className={`text-2xl lg:text-4xl mb-10 capitalize ${russoOne.className}`}
      >
        {title}
      </h3>
      <p className="text-xl lg:text-2xl font-medium px-8 lg:px-72 mb-6">
        {description}
      </p>
    </div>
  );
};

export default TitleSection;
