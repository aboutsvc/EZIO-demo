import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import QuickMenu from "./QuickMenu";
import ScrollToTop from "./ScrollToTop";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* 모바일 하단 고정 퀵바에 콘텐츠가 가리지 않도록 여백 확보 */}
      <div aria-hidden="true" className="h-[58px] bg-brand-navy lg:hidden" />
      <QuickMenu />
    </div>
  );
}

export default Layout;
