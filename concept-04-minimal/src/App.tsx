import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Solutions from "./sections/Solutions";
import LsElectric from "./sections/LsElectric";
import Industries from "./sections/Industries";
import Capability from "./sections/Capability";
import FeaturedProject from "./sections/FeaturedProject";
import PowerFlow from "./sections/PowerFlow";
import Company from "./sections/Company";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Solutions />
        <LsElectric />
        <Industries />
        <Capability />
        <FeaturedProject />
        <PowerFlow />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
