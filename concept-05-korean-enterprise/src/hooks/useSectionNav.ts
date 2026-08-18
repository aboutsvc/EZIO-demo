import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { NavItem, NavSection } from "../data/navigation";

/** sticky 헤더 높이 보정값 (모바일 / 데스크톱) */
const OFFSET_MOBILE = 76;
const OFFSET_DESKTOP = 118;

export function scrollToSection(anchor: string) {
  const el = document.getElementById(anchor);
  if (!el) return;
  const offset = window.innerWidth >= 1024 ? OFFSET_DESKTOP : OFFSET_MOBILE;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: top < 0 ? 0 : top,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
}

/**
 * LNB / 메가메뉴 항목 이동.
 * - `to`  : 라우트 이동 (제품 카테고리)
 * - `anchor`: 해당 섹션 페이지로 이동 후 앵커 위치로 스크롤
 *   (HashRouter라 URL 해시를 앵커로 쓸 수 없으므로 location.state로 전달한다)
 */
export function useNavItemAction() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (section: NavSection, item: NavItem) => {
      if (item.to) {
        navigate(item.to);
        return;
      }
      if (item.anchor) {
        if (location.pathname === section.path) {
          scrollToSection(item.anchor);
        } else {
          navigate(section.path, { state: { scrollTo: item.anchor } });
        }
      }
    },
    [navigate, location.pathname]
  );
}

/** 페이지 진입 시 location.state.scrollTo 위치로 스크롤 */
export function useScrollToStateAnchor() {
  const location = useLocation();
  const anchor = (location.state as { scrollTo?: string } | null)?.scrollTo;

  useEffect(() => {
    if (!anchor) return;
    const id = window.requestAnimationFrame(() => scrollToSection(anchor));
    return () => window.cancelAnimationFrame(id);
  }, [anchor, location.key]);
}
