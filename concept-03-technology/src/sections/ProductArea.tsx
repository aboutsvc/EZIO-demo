import Reveal from "../components/Reveal";
import { RelayPanel } from "../components/scenes";
import { Container, DemoBadge, SceneFrame, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { lsElectricArea, productCategories, productCtas } from "../data/content";
import { ui } from "../data/ui";

export default function ProductArea() {
  const { t } = useLanguage();
  const s = ui.sections.products;

  return (
    <Section id="products" tone="raised">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        {/* LS ELECTRIC product area — 파트너 등급 표현 없음(텍스트 기반) */}
        <Reveal>
          <div className="grid gap-10 border border-[var(--color-line)] bg-[var(--color-navy-900)]/55 p-6 sm:p-9 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="tag-mono flex items-center gap-2.5 text-[var(--color-teal-data)]">
                <StatusLed tone="ok" />
                {t(lsElectricArea.eyebrow)}
              </div>
              <h2 className="font-display mt-4 text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-[2.125rem]">
                {t(lsElectricArea.heading)}
              </h2>
              <p className="mt-4 max-w-xl text-[0.9375rem] leading-[1.85] text-[var(--color-ink-dim)]">
                {t(lsElectricArea.body)}
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
                {lsElectricArea.categories.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-[var(--color-navy-900)] px-3 py-3 text-[0.75rem] text-[var(--color-ink-dim)] transition-colors hover:bg-[var(--color-navy-700)] hover:text-[var(--color-ink)]"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-cyan-data)]/70"
                      aria-hidden="true"
                    />
                    {t(c)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              {/* 씬 아트워크 — 실제 현장 사진 수령 시 동일 위치 교체 */}
              <SceneFrame className="h-[260px] w-full sm:h-[300px] lg:h-full lg:min-h-[300px]">
                <RelayPanel tone="navy" />
              </SceneFrame>
            </div>
          </div>
        </Reveal>

        {/* Product categories */}
        <Reveal className="mt-20">
          <SectionHeader index={s.index} eyebrow={s.eyebrow} title={t(s.title)} desc={t(s.desc)} />
        </Reveal>

        <div className="mt-10 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 70}>
              <article className="group h-full bg-[var(--color-navy-900)] p-5 transition-colors duration-300 hover:bg-[var(--color-navy-700)]">
                <div className="flex items-center justify-between">
                  <span className="tag-mono text-[0.6875rem] text-[var(--color-cyan-data)]">
                    {`CAT ${String(i + 1).padStart(2, "0")}`}
                  </span>
                  {cat.isDemoContent && <DemoBadge />}
                </div>
                <h3 className="font-display mt-4 text-base font-bold text-[var(--color-ink)]">
                  {t(cat.title)}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-ink-dim)]">
                  {t(cat.desc)}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-[var(--color-line-soft)] pt-4">
                  {cat.products.map((p, idx) => (
                    <li
                      key={idx}
                      className="tag-mono flex items-center gap-2 text-[0.6875rem] normal-case tracking-[0.06em] text-[var(--color-ink-dim)]"
                    >
                      <span
                        className="h-px w-2.5 bg-[var(--color-ink-faint)] transition-colors group-hover:bg-[var(--color-cyan-data)]"
                        aria-hidden="true"
                      />
                      {t(p)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-[0.75rem] leading-relaxed text-[var(--color-ink-faint)]">
            {t(s.demoNote)}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-line)] px-4 py-2.5 text-[0.8125rem] text-[var(--color-ink)] transition-colors hover:border-[var(--color-cyan-data)]/60 hover:bg-[var(--color-navy-800)]"
          >
            {t(productCtas.requestInfo)}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}
