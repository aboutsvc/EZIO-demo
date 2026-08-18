import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import type { I18n } from "../data/content";
import { ui } from "../data/ui";
import Container from "./Container";

export interface Crumb {
  label: I18n;
  to?: string;
}

/** 홈 > 1차 > 2차 — 한국 기업 사이트 공통 breadcrumb 바 */
export default function Breadcrumb({ trail }: { trail: Crumb[] }) {
  const { t } = useLanguage();

  return (
    <div className="border-b border-line bg-surface">
      <Container>
        <nav aria-label={t(ui.breadcrumbLabel)} className="flex h-11 items-center overflow-x-auto no-scrollbar">
          <ol className="flex items-center gap-2 text-[0.78rem] whitespace-nowrap text-muted">
            <li className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-1.5 transition-colors hover:text-brand">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                  <path
                    d="M4 11l8-7 8 7M6 10v10h12V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                {t(ui.home)}
              </Link>
            </li>
            {trail.map((crumb, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={i} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-line-strong">
                    ›
                  </span>
                  {crumb.to && !last ? (
                    <Link to={crumb.to} className="transition-colors hover:text-brand">
                      {t(crumb.label)}
                    </Link>
                  ) : (
                    <span className={last ? "font-semibold text-ink" : undefined} aria-current={last ? "page" : undefined}>
                      {t(crumb.label)}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
