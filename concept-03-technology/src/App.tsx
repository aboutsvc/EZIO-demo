import Header from "./components/Header";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Solutions from "./sections/Solutions";
import ProductArea from "./sections/ProductArea";
import Industries from "./sections/Industries";
import Capability from "./sections/Capability";
import Monitoring from "./sections/Monitoring";
import FeaturedProject from "./sections/FeaturedProject";
import PowerFlowSection from "./sections/PowerFlowSection";
import Company from "./sections/Company";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Solutions />
        <ProductArea />
        <Industries />
        <Capability />
        <Monitoring />
        <FeaturedProject />
        <PowerFlowSection />
        <Company />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
