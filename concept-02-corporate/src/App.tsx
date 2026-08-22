import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ui } from "./data/site";
import Home from "./pages/Home";
import AboutIntro from "./pages/about/AboutIntro";
import AboutVision from "./pages/about/AboutVision";
import AboutExecutives from "./pages/about/AboutExecutives";
import AboutWorkplace from "./pages/about/AboutWorkplace";
import BusinessSupply from "./pages/business/BusinessSupply";
import BusinessDelivery from "./pages/business/BusinessDelivery";
import BusinessService from "./pages/business/BusinessService";
import Customers from "./pages/Customers";
import SupportInquiry from "./pages/support/SupportInquiry";
import SupportAs from "./pages/support/SupportAs";
import SupportResources from "./pages/support/SupportResources";
import SupportNotice from "./pages/support/SupportNotice";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {ui.skipToContent}
      </a>

      <ScrollToTop />
      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/intro" element={<AboutIntro />} />
          <Route path="/about/vision" element={<AboutVision />} />
          <Route path="/about/executives" element={<AboutExecutives />} />
          <Route path="/about/workplace" element={<AboutWorkplace />} />
          <Route path="/business/supply" element={<BusinessSupply />} />
          <Route path="/business/delivery" element={<BusinessDelivery />} />
          <Route path="/business/service" element={<BusinessService />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/support/inquiry" element={<SupportInquiry />} />
          <Route path="/support/as" element={<SupportAs />} />
          <Route path="/support/resources" element={<SupportResources />} />
          <Route path="/support/notice" element={<SupportNotice />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
