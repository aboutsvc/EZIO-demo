import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { company, nav } from "../data/content";

export default function Company() {
  const { t, lang } = useLanguage();

  return (
    <Section id="company" index="08" label={t(nav.company)}>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7 lg:col-span-7">
          <h2 className="ko text-large font-semibold leading-[1.15] tracking-[-0.025em]">
            {lang === "ko" ? company.nameKo : company.nameEnLong}
          </h2>
          {/* CEO 메시지 — 실제 메시지 미수령 상태의 데모 표기 */}
          <blockquote className="ko mt-8 max-w-[46ch] text-[1.125rem] leading-[1.7] md:mt-10 md:text-[1.25rem]">
            {t({ ko: company.ceoMessage.ko, en: company.ceoMessage.en })}
          </blockquote>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="label">
              {t({ ko: "대표이사", en: "CEO" })} · {t(company.ceo)}
            </span>
            {company.ceoMessage.isPlaceholder && (
              <span className="label text-ink-soft/70">
                {t({ ko: "데모 표기", en: "Demo placeholder" })}
              </span>
            )}
          </div>
        </Reveal>

        <Reveal className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9" delay={100}>
          {/* 확인된 항목만 표기. 재무 수치는 기준연도 병기 */}
          <dl className="border-t border-rule">
            {company.facts.map((fact) => (
              <div
                key={t(fact.label)}
                className="flex flex-col gap-1 border-b border-rule py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="label">{t(fact.label)}</dt>
                <dd className="ko text-[0.9375rem] font-medium sm:text-right">
                  {t(fact.value)}
                </dd>
              </div>
            ))}
          </dl>
          <p className="ko mt-6 text-[0.875rem] leading-relaxed text-ink-soft">
            {t(company.address)}
          </p>
        </Reveal>
      </div>

      {/* 연혁 — 확인된 항목만, 나머지는 placeholder 명시 */}
      <div className="mt-20 md:mt-28">
        <Reveal className="label mb-8 md:mb-10">
          {t({ ko: "연혁", en: "History" })}
        </Reveal>
        <ul className="border-t border-rule">
          {company.history.map((h, i) => (
            <Reveal
              as="li"
              key={`${h.year}-${i}`}
              delay={i * 60}
              className="border-b border-rule"
            >
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-10">
                <span
                  className={`label w-16 shrink-0 ${h.confirmed ? "text-accent" : "text-ink-soft/60"}`}
                >
                  {h.year}
                </span>
                <span
                  className={`ko text-[1rem] ${h.confirmed ? "" : "text-ink-soft"}`}
                >
                  {t(h.event)}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
