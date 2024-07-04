import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <h1
      className={`text-4xl md:flex md:w-7 md:mr-4 ${russoOne.className}`}
    >
      <span className="text-pink">H</span>
      <span className="text-white mr-2">amid </span>
      <span className="text-pink">Coaching</span>
    </h1>
  );
}
