import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company } from "../data/content";
import { navSections, ui } from "../data/site";
import Logo from "./Logo";

/**
 * 클래식 한국 기업 헤더
 *  - 최상단 얇은 유틸리티 바 (헤더 보조 문구 + 상시 CTA 2개)
 *  - 좌측 로고(EGO 워드마크) / 우측 GNB
 *  - GNB hover 시 **단순 드롭다운** (메가메뉴 아님) — CSS group-hover + focus-within
 *  - 모바일: 햄버거 → 드로어(아코디언 없이 전체 노출)
 */
export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  // 라우트 변경 시 드로어 닫기
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // 드로어 열림 동안 body 스크롤 잠금
  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  return (
    <header className="relative z-50">
      {/* ── 유틸리티 바 ── */}
      <div className="bg-brand-navy">
        <div className="mx-auto flex h-9 max-w-[1200px] items-center justify-between gap-3 px-4">
          <span className="truncate text-[11px] tracking-[0.04em] text-white/60">
            {company.headerTagline}
          </span>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/support/inquiry"
              className="border border-white/50 bg-white/10 px-2.5 py-[3px] text-[11px] font-semibold text-white hover:bg-white hover:text-brand-navy"
            >
              제품·견적 문의
            </Link>
            <Link
              to="/support/as"
              className="border border-white/30 px-2.5 py-[3px] text-[11px] font-semibold text-white/80 hover:bg-white hover:text-brand-navy"
            >
              A/S 접수
            </Link>
          </div>
        </div>
      </div>

      {/* ── 로고 + GNB ── */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-4 lg:h-[86px]">
          <Link to="/" aria-label="EGO 홈으로">
            <Logo />
          </Link>

          {/* Desktop GNB */}
          <nav className="hidden lg:block" aria-label="주 메뉴">
            <ul className="flex items-stretch">
              {navSections.map((section) => {
                const sectionRoot = section.path.split("/")[1];
                const active = pathname.startsWith(`/${sectionRoot}`);
                return (
                  <li key={section.path} className="group relative">
                    <NavLink
                      to={section.path}
                      className={() =>
                        `flex h-[86px] items-center px-5 text-[1.0625rem] font-semibold tracking-[-0.02em] transition-colors ${
                          active
                            ? "text-brand"
                            : "text-ink group-hover:text-brand group-focus-within:text-brand"
                        }`
                      }
                    >
                      {section.label}
                      {/* 클래식 하단 인디케이터 */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-4 bottom-0 h-[3px] bg-brand transition-opacity ${
                          active
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                        }`}
                      />
                    </NavLink>

                    {/* 단순 드롭다운 — 하위 메뉴가 있는 섹션만 */}
                    {section.children.length > 0 ? (
                      <div className="invisible absolute left-1/2 top-full z-40 w-[210px] -translate-x-1/2 border border-line border-t-2 border-t-brand bg-white opacity-0 shadow-[0_6px_14px_rgba(21,58,102,0.12)] transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <ul className="py-1.5">
                          {section.children.map((child) => (
                            <li key={child.path}>
                              <Link
                                to={child.path}
                                className="block px-4 py-2 text-[0.875rem] text-ink-2 hover:bg-brand-soft hover:text-brand"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label={ui.openMenu}
            aria-expanded={drawerOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-line lg:hidden"
          >
            <span aria-hidden="true" className="block h-[2px] w-5 bg-brand-navy" />
            <span aria-hidden="true" className="block h-[2px] w-5 bg-brand-navy" />
            <span aria-hidden="true" className="block h-[2px] w-5 bg-brand-navy" />
          </button>
        </div>
      </div>

      {/* ── 모바일 드로어 ── */}
      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label={ui.closeMenu}
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-brand-navy/55"
          />
          <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-[340px] flex-col bg-white">
            <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-line bg-brand-navy px-4">
              <span className="text-[0.9375rem] font-bold tracking-[0.08em] text-white">
                {ui.menu}
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label={ui.closeMenu}
                className="flex h-9 w-9 items-center justify-center border border-white/30 text-xl leading-none text-white"
              >
                ×
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto" aria-label="모바일 메뉴">
              {navSections.map((section) => (
                <div key={section.path} className="border-b border-line">
                  {section.children.length > 0 ? (
                    <>
                      <p className="bg-surface px-4 py-2.5 text-[0.9375rem] font-bold text-brand-navy">
                        {section.label}
                      </p>
                      <ul>
                        {section.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              className="flex items-center gap-2 px-4 py-2.5 text-[0.875rem] text-ink-2"
                            >
                              <span aria-hidden="true" className="block h-[4px] w-[4px] bg-brand" />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={section.path}
                      className="block bg-surface px-4 py-2.5 text-[0.9375rem] font-bold text-brand-navy"
                    >
                      {section.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="shrink-0 border-t border-line p-4">
              <div className="grid grid-cols-2 gap-2">
                <Link to="/support/inquiry" className="btn-blue h-10 text-[0.8125rem]">
                  제품·견적 문의
                </Link>
                <Link to="/support/as" className="btn-line h-10 text-[0.8125rem]">
                  A/S 접수
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
