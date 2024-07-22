import About from "./components/About";
import Hero from "./components/Hero";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Section>
        <About />
      </Section>
    </main>
  );
}
