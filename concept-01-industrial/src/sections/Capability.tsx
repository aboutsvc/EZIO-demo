import Section from "../components/Section";
import { useLang } from "../context/LanguageContext";
import { capabilities, processSteps } from "../data/content";

export default function Capability() {
  const { lang, t } = useLang();

  return (
    <Section
      id="capability"
      no="06"
      label="Capability"
      dwg="DWG NO. EZ-2026-06"
      tone="base"
      heading={lang === "ko" ? "프로젝트 수행 프로세스" : "Project Process"}
      intro={
        <p>
          {lang === "ko"
            ? "요구사항 파악에서 시운전과 기술 지원까지, 8단계로 프로젝트를 수행합니다."
            : "From requirement analysis to commissioning and technical support — an eight-step project sequence."}
        </p>
      }
    >
      {/* ── 8단계 프로세스 : Desktop horizontal flow ───────── */}
      <ol className="hidden xl:grid xl:grid-cols-8">
        {processSteps.map((step) => (
          <li key={step.no} className="group relative pr-6">
            <span className="font-mono text-[0.75rem] text-muted transition-colors duration-300 group-hover:text-orange">
              {step.no}
            </span>
            <div className="relative mt-4 border-t border-line">
              <span
                aria-hidden="true"
                className="absolute -top-[5px] left-0 block h-[9px] w-[9px] border border-line bg-ink transition-colors duration-300 group-hover:border-orange group-hover:bg-orange"
              />
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 block h-[1px] w-0 bg-orange transition-all duration-[400ms] ease-out group-hover:w-full"
              />
            </div>
            <h3 className="mt-5 text-[0.975rem] font-semibold tracking-tight text-fg">
              {t(step.title)}
            </h3>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
              {t(step.desc)}
            </p>
          </li>
        ))}
      </ol>

      {/* ── 8단계 프로세스 : Mobile / Tablet vertical timeline ─ */}
      <ol className="xl:hidden">
        {processSteps.map((step, i) => (
          <li key={step.no} className="group relative flex gap-5 pb-8 last:pb-0">
            <div className="relative flex flex-col items-center">
              <span
                aria-hidden="true"
                className="mt-1 block h-[9px] w-[9px] shrink-0 border border-line bg-ink transition-colors group-hover:border-orange group-hover:bg-orange"
              />
              {i < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mt-1 block w-px flex-1 bg-line"
                />
              )}
            </div>
            <div className="flex-1 pb-1">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.6875rem] text-muted">
                  {step.no}
                </span>
                <h3 className="text-[0.975rem] font-semibold text-fg">
                  {t(step.title)}
                </h3>
              </div>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">
                {t(step.desc)}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* ── 기술역량 그리드 ─────────────────────────────── */}
      <div className="mt-20 md:mt-24">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <span className="mono-label text-fg/70">
            {lang === "ko" ? "기술 역량" : "Technical Capability"}
          </span>
          <span className="mono-label text-muted/50">
            SYSTEM INTEGRATION / COORDINATION
          </span>
        </div>

        <ul className="grid grid-cols-1 border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <li
              key={cap.id}
              className="group relative border-b border-line transition-colors duration-300 hover:bg-ink-2 md:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-orange transition-transform duration-[400ms] ease-out group-hover:scale-x-100"
              />
              <div className="reveal p-6 lg:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[0.6875rem] text-muted transition-colors group-hover:text-orange">
                    {`C-${String(i + 1).padStart(2, "0")}`}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {t(cap.title)}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {cap.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[0.8125rem] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] h-px w-3 shrink-0 bg-line"
                      />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
