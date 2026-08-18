import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Solutions from "./sections/Solutions";
import ProductArea from "./sections/ProductArea";
import Industries from "./sections/Industries";
import Capability from "./sections/Capability";
import FeaturedProject from "./sections/FeaturedProject";
import PowerFlow from "./sections/PowerFlow";
import Company from "./sections/Company";
import Contact from "./sections/Contact";
import { useReveal } from "./hooks/useReveal";
import { useLang } from "./context/LanguageContext";
import { seo } from "./data/content";
import { useEffect } from "react";

export default function App() {
  const { lang, t } = useLang();
  useReveal();

  // 언어 전환 시 문서 타이틀/설명 동기화
  useEffect(() => {
    document.title = t(seo.title);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t(seo.description));
  }, [lang, t]);

  return (
    <div className="min-h-screen bg-ink">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-orange focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink"
      >
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        <Intro />
        <Solutions />
        <ProductArea />
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
