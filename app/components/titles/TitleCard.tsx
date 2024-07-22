import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

interface PropsTitleCard {
  titleCard: string;
}

const TitleCard: React.FC<PropsTitleCard> = ({ titleCard }) => {
  return (
    <h4 className={`text-xl text-white capitalize ${russoOne.className}`}>
      {titleCard}
    </h4>
  );
};

export default TitleCard;
