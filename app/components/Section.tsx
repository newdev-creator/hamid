import { PropsWithChildren } from "react";
import bg from "../../public/assets/img/shiny-overlay.svg";

interface SectionProps extends PropsWithChildren<{}> {
  id?: string;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="bg-cover bg-center text-white max-w-full"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div className="h-20"></div>
      {children}
    </section>
  );
}
