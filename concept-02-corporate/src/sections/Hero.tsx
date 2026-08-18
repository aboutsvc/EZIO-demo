import Container from "../components/Container";
import IndustrialVisual from "../components/IndustrialVisual";
import { useLanguage } from "../context/LanguageContext";
import { brandMessages, company, positioning, productCtas } from "../data/content";
import { ui } from "../data/ui";

/** Company Facts 밴드 셀 구분선 — 1 / 2 / 4 컬럼 그리드에 맞춘 보더 매핑 */
const FACT_BORDERS = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-t-0",
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-paper">
      {/* 우측 밝은 그레이 패널 (스플릿 레이아웃 기반) */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 hidden h-full w-1/2 bg-surface lg:block"
      />
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60 lg:w-1/2" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-24">
          {/* 좌 — 텍스트 */}
          <div className="lg:col-span-6 lg:pr-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="block h-px w-8 bg-brand" />
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                {t(ui.heroEyebrow)}
              </p>
            </div>

            <h1
              className="mt-5 font-bold tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)", lineHeight: 1.08 }}
            >
              {t(brandMessages.corporate.headline)}
            </h1>

            <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.75] text-muted">
              {t(brandMessages.corporate.sub)}
            </p>
            <p className="mt-4 max-w-xl text-[0.9375rem] leading-[1.8] text-muted">
              {t(positioning.definition)}
            </p>

            {/* CTA 2개 */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark"
                style={{ borderRadius: "3px" }}
              >
                {t(ui.heroPrimaryCta)}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 border border-line-strong bg-paper px-7 py-3.5 text-[0.9375rem] font-semibold text-ink transition-all duration-150 hover:border-brand hover:text-brand"
                style={{ borderRadius: "3px" }}
              >
                {t(productCtas.viewSolutions)}
              </a>
            </div>

            {/* 지원 라인 */}
            <p className="mt-8 text-[0.8125rem] tracking-[0.04em] text-muted">
              {t(positioning.supporting)}
            </p>
          </div>

          {/* 우 — 산업 비주얼 (SVG placeholder) */}
          <div className="lg:col-span-6">
            <div
              className="relative border border-line bg-paper p-3 shadow-[0_1px_2px_rgba(14,27,51,0.04)]"
              style={{ borderRadius: "3px" }}
            >
              {/* 실제 현장 사진 수령 시 교체 예정 */}
              <IndustrialVisual variant="switchgear" className="h-auto w-full" />
              <div className="flex items-center justify-between border-t border-line px-1 pt-3">
                <p className="text-[0.6875rem] tracking-[0.14em] text-muted uppercase">
                  Switchgear / Distribution
                </p>
                <p className="text-[0.6875rem] text-muted/70">{t(ui.visualNote)}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Hero 하단 밴드 — Company Facts */}
      <div className="relative border-t border-line bg-paper">
        <Container>
          <p className="sr-only">{t(ui.companyFactsLabel)}</p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {company.facts.map((fact, i) => (
              <div
                key={i}
                className={`border-line py-7 sm:px-6 sm:py-8 lg:px-8 lg:first:pl-0 ${FACT_BORDERS[i] ?? ""}`}
              >
                <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-brand uppercase">
                  {t(fact.label)}
                </dt>
                <dd className="mt-2.5 text-[1.125rem] leading-snug font-semibold text-ink lg:text-[1.25rem]">
                  {t(fact.value)}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
