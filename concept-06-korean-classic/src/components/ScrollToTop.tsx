import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** 라우트 변경 시 스크롤 최상단 리셋. 해시(#inquiry)가 있으면 해당 요소로 이동. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
