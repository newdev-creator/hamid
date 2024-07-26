import About from "./components/About";
import CtaTwo from "./components/CtaTwo";
import EasyStart from "./components/EasyStart";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Service from "./components/Service";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Section>
        <About />
      </Section>
      <Section>
        <Service />
      </Section>
      <Section>
        <EasyStart />
      </Section>
      <Section>
        <CtaTwo />
      </Section>
    </main>
  );
}
