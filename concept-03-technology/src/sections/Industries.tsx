import Reveal from "../components/Reveal";
import { RefineryDusk } from "../components/scenes";
import { Container, SceneFrame, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { industries } from "../data/content";
import { ui } from "../data/ui";

/** 산업별 라인 글리프 (순수 SVG) */
function IndustryGlyph({ id }: { id: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
      {id === "oil-gas" && (
        <g {...common}>
          <rect x="7" y="20" width="10" height="20" />
          <rect x="21" y="12" width="7" height="28" />
          <path d="M24.5 12V6" />
          <circle cx="38" cy="24" r="7" />
          <path d="M7 40h34M31 40v-9h14" />
        </g>
      )}
      {id === "manufacturing" && (
        <g {...common}>
          <path d="M7 40V22l9 6v-6l9 6v-6l9 6V16h7v24z" />
          <path d="M7 40h34" />
          <path d="M16 33h4M25 33h4M34 33h4" />
        </g>
      )}
      {id === "energy" && (
        <g {...common}>
          <path d="M26 7 14 27h9l-2 14 13-21h-9z" />
          <path d="M7 40h34" />
        </g>
      )}
      {id === "infrastructure" && (
        <g {...common}>
          <path d="M24 6v34M14 40V16l10-10 10 10v24" />
          <path d="M7 40h34M14 22h20M14 30h20" />
        </g>
      )}
    </svg>
  );
}

export default function Industries() {
  const { t } = useLanguage();
  const s = ui.sections.industries;

  return (
    <Section id="industries">
      <div className="dot-grid-tight pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <Reveal>
          <SectionHeader index={s.index} eyebrow={s.eyebrow} title={t(s.title)} desc={t(s.desc)} />
        </Reveal>

        {/* 씬 아트워크 — 실제 현장 사진 수령 시 동일 위치 교체 */}
        <Reveal className="mt-10" delay={60}>
          <SceneFrame className="h-[220px] w-full sm:h-[280px]">
            <RefineryDusk tone="navy" className="opacity-[0.8]" />
          </SceneFrame>
        </Reveal>

        <div className="mt-6 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 80}>
              <article className="group relative h-full overflow-hidden bg-[var(--color-navy-900)] p-6 transition-colors duration-300 hover:bg-[var(--color-navy-800)] sm:p-7">
                <span
                  className="absolute inset-x-0 top-0 h-px w-0 bg-[var(--color-cyan-data)] transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span className="text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:text-[var(--color-cyan-data)]">
                    <IndustryGlyph id={ind.id} />
                  </span>
                  <StatusLed tone="idle" pulse={false} className="mt-1 transition-colors group-hover:bg-[var(--color-teal-data)]" />
                </div>
                <div className="tag-mono mt-8 text-[0.625rem] text-[var(--color-ink-faint)]">
                  {`IND ${String(i + 1).padStart(2, "0")}`}
                </div>
                <h3 className="font-display mt-2 text-lg font-bold text-[var(--color-ink)]">
                  {t(ind.title)}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-ink-dim)]">
                  {t(ind.desc)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
