import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Solutions from "./sections/Solutions";
import Products from "./sections/Products";
import LSElectric from "./sections/LSElectric";
import Industries from "./sections/Industries";
import Capability from "./sections/Capability";
import FeaturedProject from "./sections/FeaturedProject";
import PowerFlow from "./sections/PowerFlow";
import Company from "./sections/Company";
import Contact from "./sections/Contact";
import { useLanguage } from "./context/LanguageContext";
import { ui } from "./data/ui";

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {t(ui.skipToContent)}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Intro />
        <Solutions />
        <Products />
        <LSElectric />
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
