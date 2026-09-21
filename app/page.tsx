import About from "./components/About";
import DonateCta from "./components/DonateCta";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TrustStrip from "./components/TrustStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Impact />
      <Events />
      <Testimonials />
      <DonateCta />
    </>
  );
}
