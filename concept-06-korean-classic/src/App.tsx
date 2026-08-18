import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Greeting from "./pages/about/Greeting";
import History from "./pages/about/History";
import Location from "./pages/about/Location";
import Overview from "./pages/about/Overview";
import Business from "./pages/Business";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Support from "./pages/Support";
import Works from "./pages/Works";

/** 멀티페이지 라우팅 — HashRouter (GitHub Pages 정적 배포 호환) */
export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/about/greeting" replace />} />
        <Route path="/about/greeting" element={<Greeting />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/location" element={<Location />} />
        <Route path="/business" element={<Business />} />
        <Route path="/products" element={<Products />} />
        <Route path="/works" element={<Works />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
