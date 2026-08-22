import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** 라우트 이동 시 스크롤을 페이지 최상단으로 리셋 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // html { scroll-behavior: smooth } 상속을 막기 위해 즉시 이동으로 고정
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
