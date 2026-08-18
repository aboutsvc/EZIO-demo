import Header from "./components/Header";
import Footer from "./components/Footer";
import SceneFigure from "./components/SceneFigure";
import { SubstationYard } from "./components/scenes";
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

        {/* 씬 3/3 — 히어로와 본문 사이 시네마틱 크롭. 전폭 가로 밴드 한 장 */}
        <div className="bg-paper pb-16 md:pb-24">
          <SceneFigure
            bleed
            ratio="aspect-[2/1] sm:aspect-[3/1]"
            caption="Substation Yard"
            note="Grid Interface"
          >
            <SubstationYard tone="warm" className="h-full w-full" />
          </SceneFigure>
        </div>

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
