import About from "./components/About";
import Contact from "./components/contact/Contact";
import CtaTwo from "./components/CtaTwo";
import EasyStart from "./components/EasyStart";
import Hero from "./components/Hero";
import HomeOrGym from "./components/HomeOrGym";
import Price from "./components/Price";
import Section from "./components/Section";
import Service from "./components/Service";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Section id="about">
        <About />
      </Section>
      <Section id="service">
        <Service />
      </Section>
      <Section>
        <EasyStart />
      </Section>
      <Section>
        <CtaTwo />
      </Section>
      <Section id="home_or_gym">
        <HomeOrGym />
      </Section>
      <Section id="price">
        <Price />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
}
