import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Executives from "./pages/about/Executives";
import Intro from "./pages/about/Intro";
import Vision from "./pages/about/Vision";
import Workplace from "./pages/about/Workplace";
import Delivery from "./pages/business/Delivery";
import Service from "./pages/business/Service";
import Supply from "./pages/business/Supply";
import Careers from "./pages/Careers";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import As from "./pages/support/As";
import Inquiry from "./pages/support/Inquiry";
import Notice from "./pages/support/Notice";
import Resources from "./pages/support/Resources";

/** 멀티페이지 라우팅 — HashRouter (GitHub Pages 정적 배포 호환) */
export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/about/intro" replace />} />
        <Route path="/about/intro" element={<Intro />} />
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/about/executives" element={<Executives />} />
        <Route path="/about/workplace" element={<Workplace />} />
        <Route path="/business" element={<Navigate to="/business/supply" replace />} />
        <Route path="/business/supply" element={<Supply />} />
        <Route path="/business/delivery" element={<Delivery />} />
        <Route path="/business/service" element={<Service />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/support" element={<Navigate to="/support/inquiry" replace />} />
        <Route path="/support/inquiry" element={<Inquiry />} />
        <Route path="/support/as" element={<As />} />
        <Route path="/support/resources" element={<Resources />} />
        <Route path="/support/notice" element={<Notice />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
