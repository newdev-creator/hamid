import { PropsWithChildren } from "react";
import bg from "../../public/assets/img/shiny-overlay.svg";

export default function Section(props: PropsWithChildren<{}>) {
  return (
    <section
      className="bg-cover bg-center text-white max-w-full pt-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      {props.children}
    </section>
  );
}
