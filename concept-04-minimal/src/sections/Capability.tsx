import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { capabilities, nav, processSteps } from "../data/content";

export default function Capability() {
  const { t } = useLanguage();

  return (
    <Section id="capability" index="05" label={t(nav.capability)}>
      {/* 8단계 프로세스 — 번호 리스트 (Mobile 1열 / Desktop 2열) */}
      <Reveal className="label mb-8 md:mb-12">
        {t({ ko: "프로젝트 프로세스 — 8단계", en: "Project Process — 8 Steps" })}
      </Reveal>

      <ol className="grid grid-cols-1 gap-x-16 border-t border-rule md:grid-cols-2">
        {processSteps.map((step, i) => (
          <Reveal
            as="li"
            key={step.no}
            delay={(i % 2) * 60}
            className="border-b border-rule"
          >
            <div className="flex items-baseline gap-6 py-6 md:gap-8">
              <span className="label w-6 shrink-0">{step.no}</span>
              <div className="min-w-0">
                <h3 className="ko text-[1.125rem] font-semibold tracking-[-0.01em] md:text-[1.25rem]">
                  {t(step.title)}
                </h3>
                <p className="ko mt-1 text-ink-soft">{t(step.desc)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* 기술 역량 */}
      <div className="mt-20 md:mt-28">
        <Reveal className="label mb-8 md:mb-12">
          {t({ ko: "기술 역량", en: "Technical Capabilities" })}
        </Reveal>
        <div className="grid grid-cols-1 gap-x-12 gap-y-0 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.id}
              delay={(i % 3) * 60}
              className="border-b border-rule py-7"
            >
              <h3 className="ko text-[1.0625rem] font-semibold tracking-[-0.01em]">
                {t(cap.title)}
              </h3>
              <ul className="mt-4 space-y-1.5">
                {cap.items.map((item) => (
                  <li
                    key={t(item)}
                    className="ko text-[0.875rem] text-ink-soft"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
