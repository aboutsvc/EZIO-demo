import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { navSections, type NavItem, type NavSection } from "../data/navigation";
import { ui } from "../data/ui";
import { positioning } from "../data/content";
import { useNavItemAction } from "../hooks/useSectionNav";
import Container from "./Container";
import Logo from "./Logo";
import MobileDrawer from "./MobileDrawer";

/**
 * 상단 유틸리티 바 + GNB + 전체 폭 메가메뉴.
 * 한국 대기업 제품 포털의 헤더 문법을 재현한다:
 * 하나의 메뉴에 hover 하면 전 메뉴의 하위 항목이 한 패널에 컬럼으로 동시에 펼쳐진다.
 */
export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const navItem = useNavItemAction();
  const [megaOpen, setMegaOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 라우트 이동 시 메가메뉴 닫기
  useEffect(() => {
    setMegaOpen(false);
    setHovered(null);
  }, [location.pathname, location.key]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = useCallback((id: string | null) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
    setHovered(id);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setMegaOpen(false);
      setHovered(null);
    }, 120);
  }, []);

  const handleMegaItem = (section: NavSection, item: NavItem) => {
    navItem(section, item);
    setMegaOpen(false);
    setHovered(null);
  };

  const isActive = (section: NavSection) => location.pathname.startsWith(section.path);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[90] focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        {t(ui.skipToContent)}
      </a>

      <header
        className={`sticky top-0 z-50 bg-paper ${scrolled ? "shadow-[0_1px_10px_rgba(15,30,60,0.10)]" : ""}`}
        onMouseLeave={scheduleClose}
      >
        {/* ── 1. 상단 유틸리티 바 ── */}
        <div className="hidden border-b border-line bg-surface lg:block">
          <Container>
            <div className="flex h-9 items-center justify-end gap-5 text-[0.75rem] text-muted">
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("site-footer")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="transition-colors hover:text-brand"
              >
                {t(ui.sitemap)}
              </button>
              <span aria-hidden="true" className="h-2.5 w-px bg-line-strong" />
              <Link
                to="/support"
                state={{ scrollTo: "contact" }}
                className="transition-colors hover:text-brand"
              >
                {t(ui.inquiry)}
              </Link>
              <span aria-hidden="true" className="h-2.5 w-px bg-line-strong" />
              <div className="flex items-center gap-1" role="group" aria-label={t(ui.languageLabel)}>
                {(["ko", "en"] as const).map((l, i) => (
                  <span key={l} className="flex items-center gap-1">
                    {i > 0 && <span aria-hidden="true" className="text-line-strong">/</span>}
                    <button
                      type="button"
                      onClick={() => setLang(l)}
                      aria-pressed={lang === l}
                      className={`px-0.5 text-[0.75rem] uppercase transition-colors ${
                        lang === l ? "font-bold text-brand" : "text-muted hover:text-ink"
                      }`}
                    >
                      {l}
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* ── 2. GNB ── */}
        <div className="border-b border-line bg-paper">
          <Container>
            <div className="flex h-16 items-center justify-between lg:h-[74px]">
              <Link to="/" aria-label={t(ui.goHome)} className="shrink-0">
                <Logo />
              </Link>

              {/* Desktop GNB */}
              <nav
                className="hidden h-full lg:block"
                aria-label="Global"
                onMouseEnter={() => openMega(hovered)}
              >
                <ul className="flex h-full items-stretch">
                  {navSections.map((section) => {
                    const active = isActive(section);
                    const hot = hovered === section.id && megaOpen;
                    return (
                      <li key={section.id} className="relative flex">
                        <Link
                          to={section.path}
                          onMouseEnter={() => openMega(section.id)}
                          onFocus={() => openMega(section.id)}
                          className={`flex items-center px-6 text-[1.0rem] font-semibold transition-colors ${
                            active || hot ? "text-brand" : "text-ink hover:text-brand"
                          }`}
                        >
                          {t(section.label)}
                        </Link>
                        {/* 메뉴 하단 2px 블루 인디케이터 */}
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-x-3 bottom-0 h-[2px] origin-center transition-transform duration-200 ${
                            active || hot ? "scale-x-100 bg-brand" : "scale-x-0 bg-brand"
                          }`}
                        />
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex items-center gap-2">
                <Link
                  to="/support"
                  state={{ scrollTo: "contact" }}
                  className="hidden bg-gradient-to-r from-brand to-brand-sky px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:inline-block"
                >
                  {t(ui.inquiry)}
                </Link>
                {/* 모바일 햄버거 */}
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  aria-label={t(ui.openMenu)}
                  className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M3 6h18M3 12h18M3 18h18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* ── 3. 전체 폭 메가메뉴 ── */}
        <div
          className={`absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_18px_36px_-24px_rgba(15,30,60,0.45)] lg:block ${
            megaOpen ? "" : "pointer-events-none opacity-0"
          }`}
          style={{
            maxHeight: megaOpen ? 480 : 0,
            overflow: "hidden",
            transition: "max-height .22s ease, opacity .18s ease",
          }}
          onMouseEnter={() => openMega(hovered)}
        >
          <Container>
            <div className="grid grid-cols-[minmax(0,1fr)_repeat(5,minmax(0,1fr))] gap-6 py-9">
              {/* 좌측 브랜드 라벨 */}
              <div className="pr-4">
                <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-brand uppercase">
                  EZIO
                </p>
                <p className="mt-2 text-sm leading-relaxed font-semibold text-ink">
                  {t(positioning.primary)}
                </p>
                <p className="mt-2 text-[0.75rem] leading-relaxed text-muted">
                  {t(positioning.supporting)}
                </p>
              </div>

              {navSections.map((section) => (
                <div key={section.id} className="border-l border-line pl-6">
                  <Link
                    to={section.path}
                    className={`text-[0.95rem] font-bold transition-colors hover:text-brand ${
                      hovered === section.id ? "text-brand" : "text-ink"
                    }`}
                  >
                    {t(section.label)}
                  </Link>
                  <p className="mt-1.5 text-[0.72rem] leading-relaxed text-faint">
                    {t(section.tagline)}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => handleMegaItem(section, item)}
                          className="group flex w-full items-center gap-1.5 text-left text-[0.85rem] text-muted transition-colors hover:text-brand"
                        >
                          <span
                            aria-hidden="true"
                            className="h-[3px] w-[3px] shrink-0 rounded-full bg-line-strong transition-colors group-hover:bg-brand"
                          />
                          {t(item.label)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
