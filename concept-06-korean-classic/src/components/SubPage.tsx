import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { navSections, pageMeta, ui } from "../data/site";
import Scene from "./Scene";

/**
 * 서브페이지 공통 패턴 (한국 클래식 기업 사이트 문법)
 *   좁은 블루 그라디언트 서브비주얼 바(페이지 타이틀)
 *   → breadcrumb (홈 > 1차 > 2차)
 *   → 좌측 LNB 세로 메뉴(선택 항목 블루 하이라이트) + 우측 콘텐츠
 * 모바일에서는 LNB를 셀렉트박스로 전환한다.
 */
interface SubPageProps {
  /** pageMeta 키 (= 현재 라우트 경로) */
  path: keyof typeof pageMeta | string;
  /** 섹션 LNB가 없는 페이지에서 좌측 컬럼에 넣을 자체 내비게이션 (예: 제품 카테고리) */
  aside?: ReactNode;
  children: ReactNode;
}

export function SubPage({ path, aside, children }: SubPageProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const meta = pageMeta[path];
  const section = navSections[meta.sectionIndex];
  const hasLnb = section.children.length > 1;
  // breadcrumb 2차 항목 — 현재 LNB 항목명을 우선 사용 (섹션명 중복 표기 방지)
  const activeChild = section.children.find((child) => child.path === path);

  return (
    <>
      {/* ── 서브비주얼 바 ── */}
      <div className="relative h-[150px] overflow-hidden bg-brand-navy sm:h-[180px]">
        <Scene name={meta.scene} tone="navy" className="absolute inset-0 opacity-45" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(21,58,102,0.94)_0%,rgba(27,90,166,0.82)_55%,rgba(27,90,166,0.55)_100%)]"
        />
        <div className="relative mx-auto flex h-full max-w-[1200px] flex-col justify-center px-4">
          <h1 className="text-[1.625rem] font-bold tracking-[-0.03em] text-white sm:text-[2rem]">
            {t(meta.title)}
          </h1>
          <p className="mt-1.5 max-w-[46rem] text-[0.8125rem] text-white/80 sm:text-[0.9375rem]">
            {t(meta.lead)}
          </p>
        </div>
      </div>

      {/* ── breadcrumb ── */}
      <div className="border-b border-line bg-surface">
        <nav
          aria-label="breadcrumb"
          className="mx-auto flex max-w-[1200px] items-center gap-2 px-4 py-2.5 text-[0.75rem] text-muted"
        >
          <Link to="/" className="hover:text-brand">
            {t(ui.home)}
          </Link>
          <span aria-hidden="true" className="text-line-strong">
            ›
          </span>
          <Link to={section.path} className="hover:text-brand">
            {t(section.label)}
          </Link>
          {hasLnb ? (
            <>
              <span aria-hidden="true" className="text-line-strong">
                ›
              </span>
              <span className="font-semibold text-ink">
                {t(activeChild ? activeChild.label : meta.title)}
              </span>
            </>
          ) : null}
        </nav>
      </div>

      {/* ── LNB + 콘텐츠 ── */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-8 lg:flex-row lg:gap-10 lg:py-12">
        {hasLnb ? (
          <div className="lg:w-[200px] lg:shrink-0">
            {/* Desktop LNB */}
            <nav aria-label={t(section.label)} className="hidden lg:block">
              <p className="border border-brand-navy bg-brand-navy px-4 py-4 text-[1.125rem] font-bold text-white">
                {t(section.label)}
              </p>
              <ul className="border border-t-0 border-line">
                {section.children.map((child) => {
                  const active = child.path === path;
                  return (
                    <li key={child.path} className="border-b border-line last:border-b-0">
                      <Link
                        to={child.path}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between px-4 py-3 text-[0.9375rem] transition-colors ${
                          active
                            ? "bg-brand-soft font-bold text-brand"
                            : "bg-white text-ink-2 hover:bg-surface hover:text-brand"
                        }`}
                      >
                        <span>{t(child.label)}</span>
                        <span aria-hidden="true" className={active ? "text-brand" : "text-line-strong"}>
                          ›
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile LNB → 셀렉트박스 */}
            <div className="lg:hidden">
              <label htmlFor="lnb-select" className="mb-1.5 block text-[0.75rem] font-semibold text-muted">
                {t(section.label)}
              </label>
              <select
                id="lnb-select"
                value={path}
                onChange={(e) => navigate(e.target.value)}
                className="h-11 w-full border border-line-strong bg-white px-3 text-[0.9375rem] text-ink"
              >
                {section.children.map((child) => (
                  <option key={child.path} value={child.path}>
                    {t(child.label)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : aside ? (
          <div className="lg:w-[200px] lg:shrink-0">{aside}</div>
        ) : null}

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
  );
}

export default SubPage;
