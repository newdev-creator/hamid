import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});
import bg from "../../public/assets/img/bg-hero.jpg";
import ArrowRight from "./icons/ArrowRight";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <>
      <div className="bg-orange w-full h-[5.5rem] md:h-24"></div>
      <div
        className="relative bg-cover bg-center max-w-ful flex flex-col"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative text-center px-10 pt-72 md:text-start md:ms-20">
          <div>
            <h2
              className={`text-4xl md:text-6xl text-white capitalize ${russoOne.className}`}
            >
              Bâtissons le meilleur de vous même
            </h2>
            <p className="text-xl font-medium opacity-80 mb-4">
              Je vous guide pour atteindre votre objectif afin de révéler la
              vrai personne que vous voulez être
            </p>
            <div className="">
              <Button href="#" label="commencer maintenant" />
              <Button href="#" label="séance découverte 15€" variant="pink" />
              <p className="cursor-pointer hover:opacity-100 text-xl font-medium opacity-80 flex justify-center items-center gap-2">
                en savoir plus <ArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="px-10 text-xl font-medium opacity-80 mb-4 mt-20 underline underline-offset-8">
          <ul className="flex justify-between items-center">
            <li>cardio</li>
            <li>crossfit</li>
            <li>bodybuilding</li>
            <li>boxing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

{
  /* 
  <div className="flex-grow-0 flex-shrink-0 w-[1261px] h-[473px]">
    <div className="w-[1261px] h-[473px]">
      <div className="flex flex-col justify-start items-start w-[1261px] absolute left-40 top-[360px] gap-14">
        <p className="flex-grow-0 flex-shrink-0 w-[1209px] text-[80px] text-left text-[#f7f7f7]">
          Bâtissons le meilleur de vous-même
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[1261px] opacity-80 text-[32px] font-semibold text-left text-[#f7f7f7]">
          <span className="flex-grow-0 flex-shrink-0 w-[1261px] opacity-80 text-[32px] font-semibold text-left text-[#f7f7f7]">
            Je vous guide pour atteindre votre objectif afin
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 w-[1261px] opacity-80 text-[32px] font-semibold text-left text-[#f7f7f7]">
            de révéler la vrai personne que vous voulez être{" "}
          </span>
        </p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[25.259260177612305px]">
          <div className="flex-grow-0 flex-shrink-0 w-[455.81px] h-[93px]">
            <div
              className="flex justify-center items-center w-[455.81px] h-[93px] absolute left-0 top-0 overflow-hidden gap-[11.481481552124023px] px-[78.0740737915039px] py-[18.370370864868164px] rounded-tl-[18.37px] rounded-tr-[18.37px] rounded-br-[18.37px]"
              style={{
                background: "linear-gradient(to top, #036 96.57%, #06c 139.02%)",
                boxShadow: "0px 27.555557250976562px 57.40740966796875px 0 rgba(0,0,0,0.1)",
              }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-[34.4444465637207px] text-left text-white">
                Commencez Maintenant
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[455.81px] h-[93px]">
            <div
              className="flex justify-center items-center w-[455.81px] h-[93px] absolute left-[481.07px] top-0 overflow-hidden gap-[11.481481552124023px] px-[78.0740737915039px] py-[18.370370864868164px] rounded-tl-[18.37px] rounded-tr-[18.37px] rounded-br-[18.37px] bg-gradient-to-b from-[#db2a6b] to-[#751639]"
              style={{
                boxShadow: "0px 27.555557250976562px 57.40740966796875px 0 rgba(0,0,0,0.1)",
              }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-[34.4444465637207px] text-left text-white">
                Séance découverte 15€
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[249.81px] h-[45.93px]">
            <div className="flex justify-start items-center absolute left-[962.15px] top-[23.54px] gap-[6.888889312744141px]">
              <p className="flex-grow-0 flex-shrink-0 opacity-80 text-[32.14814758300781px] font-semibold text-left text-[#f7f7f7]">
                En savoir plus
              </p>
              <svg
                width={46}
                height={47}
                viewBox="0 0 46 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[45.93px] h-[45.93px] relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M1.46962 26.0143C1.46962 25.4058 1.67125 24.8222 2.03015 24.3919C2.38905 23.9616 2.87583 23.7199 3.38339 23.7199L29.3916 23.7199L26.9037 20.7601C26.5433 20.3281 26.3408 19.7421 26.3408 19.1311C26.3408 18.5201 26.5433 17.9341 26.9037 17.502C27.264 17.07 27.7528 16.8273 28.2624 16.8273C28.7721 16.8273 29.2608 17.07 29.6212 17.502L35.3625 24.3853C35.6281 24.7079 35.808 25.1177 35.8795 25.5628C35.951 26.0079 35.911 26.4684 35.7644 26.8862C35.6209 27.3052 35.377 27.6639 35.0637 27.917C34.7504 28.1702 34.3816 28.3065 34.0038 28.3088L3.38339 28.3088C2.87583 28.3088 2.38905 28.067 2.03015 27.6367C1.67125 27.2064 1.46962 26.6228 1.46962 26.0143Z"
                  fill="#F7F7F7"
                />
                <path
                  d="M26.4392 33.2505C26.4377 32.9489 26.4855 32.6499 26.5799 32.3707C26.6742 32.0915 26.8131 31.8375 26.9888 31.6234L32.6743 24.7481C33.0312 24.3165 33.5152 24.0741 34.0199 24.0741C34.2698 24.0741 34.5173 24.1336 34.7481 24.2493C34.979 24.3649 35.1888 24.5344 35.3655 24.7481C35.5422 24.9618 35.6824 25.2154 35.778 25.4946C35.8736 25.7738 35.9229 26.073 35.9229 26.3752C35.9229 26.9855 35.7224 27.5708 35.3655 28.0024L29.6799 34.8777C29.5038 35.0925 29.2942 35.263 29.0632 35.3793C28.8323 35.4957 28.5845 35.5556 28.3344 35.5556C28.0842 35.5556 27.8365 35.4957 27.6055 35.3793C27.3746 35.263 27.165 35.0925 26.9888 34.8777C26.8131 34.6635 26.6742 34.4096 26.5799 34.1304C26.4855 33.8511 26.4377 33.5521 26.4392 33.2505Z"
                  fill="#F7F7F7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
