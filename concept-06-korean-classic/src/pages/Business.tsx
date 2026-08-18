import { Link } from "react-router-dom";
import Scene from "../components/Scene";
import SectionTitle, { BulletTitle } from "../components/SectionTitle";
import SolutionIcon from "../components/SolutionIcon";
import SubPage from "../components/SubPage";
import { useLanguage } from "../context/LanguageContext";
import { industries, lsElectricArea, positioning, solutions } from "../data/content";
import { ui } from "../data/site";

/**
 * 사업분야 — 5개 솔루션 (아이콘 + 서술 + 취급 항목)
 * ⚠️ LS ELECTRIC 관련 표현은 content.ts 의 안전 문구만 사용한다 (파트너 등급 주장 금지, 로고 미사용).
 */
export function Business() {
  const { t } = useLanguage();

  return (
    <SubPage path="/business">
      <SectionTitle size="lg">{t(ui.business.heading)}</SectionTitle>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{t(positioning.definition)}</p>

      <div className="mt-8 space-y-5">
        {solutions.map((solution) => (
          <article key={solution.id} className="border border-line bg-white">
            <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-white text-brand">
                <SolutionIcon id={solution.id} className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-bold tracking-[0.12em] text-brand">
                  {solution.no}
                </p>
                <h3 className="text-[1.0625rem] font-bold leading-snug text-ink">
                  {t(solution.title)}
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
              <p className="text-[0.9375rem] leading-relaxed text-ink-2">{t(solution.desc)}</p>
              <div>
                <BulletTitle className="text-[0.875rem]">{t(ui.business.itemsLabel)}</BulletTitle>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {solution.items.map((item) => (
                    <li
                      key={item.en}
                      className="border border-line bg-surface px-2 py-1 text-[0.8125rem] text-ink-2"
                    >
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── 취급 제품 영역 (LS ELECTRIC — 안전 표현만) ── */}
      <div className="mt-12">
        <SectionTitle>{t(ui.business.lsHeading)}</SectionTitle>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="border border-line bg-surface p-5">
            <p className="text-[0.75rem] font-bold tracking-[0.1em] text-brand">
              {t(lsElectricArea.eyebrow)}
            </p>
            <p className="mt-2 text-[1.125rem] font-bold text-ink">{t(lsElectricArea.heading)}</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
              {t(lsElectricArea.body)}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-px bg-line">
              {lsElectricArea.categories.map((cat) => (
                <li key={cat.en} className="bg-white px-3 py-2 text-[0.8125rem] font-medium text-ink-2">
                  {t(cat)}
                </li>
              ))}
            </ul>
            <Link to="/products" className="btn-line mt-4 h-9 px-4 text-[0.8125rem]">
              {t(ui.viewMore)} <span aria-hidden="true">›</span>
            </Link>
          </div>
          <div className="relative min-h-[220px] overflow-hidden border border-line">
            <Scene name="SwitchgearRoom" tone="light" className="absolute inset-0" />
          </div>
        </div>
      </div>

      {/* ── 적용 산업 ── */}
      <div className="mt-12">
        <SectionTitle>{t(ui.business.industriesHeading)}</SectionTitle>
        <ul className="mt-5 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry.id} className="bg-white px-4 py-5">
              <p className="text-[1rem] font-bold text-ink">{t(industry.title)}</p>
              <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted">{t(industry.desc)}</p>
            </li>
          ))}
        </ul>
      </div>
    </SubPage>
  );
}

export default Business;
