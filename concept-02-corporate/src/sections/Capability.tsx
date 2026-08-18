import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { EngineerAtPanel } from "../components/scenes";
import { useLanguage } from "../context/LanguageContext";
import { capabilities, processSteps } from "../data/content";
import { ui } from "../data/ui";

export default function Capability() {
  const { t } = useLanguage();

  return (
    <section id="capability" className="border-b border-line bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow={ui.capabilityEyebrow}
          heading={ui.capabilityHeading}
          lead={ui.capabilityLead}
        />

        {/* ── 8단계 프로세스 ─────────────────────────── */}

        {/* Desktop / Tablet: 번호 원형 스텝퍼 (수평) */}
        <div className="mt-12 hidden md:block">
          <div className="grid grid-cols-4 gap-y-12 xl:grid-cols-8">
            {processSteps.map((step, i) => (
              <div key={step.no} className="relative px-2 text-center">
                {/* 스텝 레일 */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-[23px] h-px bg-line-strong"
                />
                <span className="relative mx-auto flex h-[46px] w-[46px] items-center justify-center border border-brand bg-paper text-[0.8125rem] font-bold text-brand">
                  {step.no}
                </span>
                <h3 className="mt-4 text-[0.875rem] leading-snug font-bold text-ink">
                  {t(step.title)}
                </h3>
                <p className="mx-auto mt-1.5 max-w-[13rem] text-[0.75rem] leading-[1.6] text-muted">
                  {t(step.desc)}
                </p>
                {i === processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[19px] right-2 hidden h-[9px] w-[9px] rotate-45 border-t-2 border-r-2 border-brand xl:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: 세로 타임라인 */}
        <ol className="mt-10 md:hidden">
          {processSteps.map((step, i) => (
            <li key={step.no} className="relative flex gap-4 pb-7 last:pb-0">
              {i < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[46px] bottom-0 left-[22px] w-px bg-line-strong"
                />
              )}
              <span className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center border border-brand bg-paper text-[0.8125rem] font-bold text-brand">
                {step.no}
              </span>
              <div className="pt-2">
                <h3 className="text-[0.9375rem] font-bold text-ink">{t(step.title)}</h3>
                <p className="mt-1 text-[0.8125rem] leading-[1.65] text-muted">{t(step.desc)}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* ── 기술 역량 영역 ─────────────────────────── */}
        <div className="mt-16 border-t border-line pt-14 lg:mt-20 lg:pt-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h3 className="text-[1.375rem] leading-snug font-bold text-ink lg:text-[1.625rem]">
                {t(ui.technicalScopeHeading)}
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.8] text-muted">
                {t(ui.technicalScopeLead)}
              </p>

              {/* 향후 실제 현장 사진 확보 시 동일 컨테이너에 <img>로 대체 가능 */}
              <div
                className="mt-8 hidden aspect-[4/3] w-full overflow-hidden border border-line bg-paper lg:block"
                style={{ borderRadius: "3px" }}
              >
                <EngineerAtPanel tone="light" />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-3">
                {capabilities.map((cap, i) => (
                  <Reveal key={cap.id} delay={i * 50}>
                    <div className="h-full bg-paper p-6 transition-shadow duration-200 hover:shadow-[0_2px_16px_rgba(14,27,51,0.08)]">
                      <div className="flex items-center gap-2.5">
                        <span aria-hidden="true" className="block h-[14px] w-[3px] bg-brand" />
                        <h4 className="text-[0.9375rem] font-bold text-ink">{t(cap.title)}</h4>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {cap.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-[0.8125rem] leading-[1.6] text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[8px] block h-[3px] w-[3px] shrink-0 bg-line-strong"
                            />
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
