import Section from "../components/Section";
import { useLang } from "../context/LanguageContext";
import { company } from "../data/content";

export default function Company() {
  const { lang, t } = useLang();

  return (
    <Section
      id="company"
      no="09"
      label="Company"
      dwg="DWG NO. EZ-2026-09"
      tone="alt"
      heading={lang === "ko" ? company.nameKo : company.nameEnLong}
      intro={
        <p>
          {lang === "ko"
            ? "산업 플랜트와 대형 사업장을 대상으로 전력·자동화 솔루션을 공급하는 B2B 기업입니다."
            : "A B2B company supplying power and automation solutions to industrial plants and large-scale facilities."}
        </p>
      }
    >
      {/* 회사 팩트 — 재무 수치는 기준연도 병기된 content.ts 값 그대로 사용 */}
      <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4 lg:border-l">
        {company.facts.map((fact, i) => (
          <li
            key={i}
            className="reveal border-b border-line p-6 transition-colors duration-300 hover:bg-ink-3 lg:border-r lg:p-8"
          >
            <span className="mono-label">{t(fact.label)}</span>
            <p className="mt-4 text-lg font-semibold leading-snug tracking-tight text-fg lg:text-xl">
              {t(fact.value)}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* CEO 메시지 — 데모 placeholder 명시 */}
        <div className="lg:col-span-7">
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <span className="mono-label text-fg/70">
              {lang === "ko" ? "대표 메시지" : "CEO Message"}
            </span>
            {company.ceoMessage.isPlaceholder && (
              <span className="mono-label text-muted/50">
                {lang === "ko" ? "데모 표기" : "Demo placeholder"}
              </span>
            )}
          </div>
          <blockquote className="reveal mt-8 border-l-2 border-orange pl-6 text-lg leading-[1.75] tracking-tight text-fg sm:text-xl">
            {lang === "ko" ? company.ceoMessage.ko : company.ceoMessage.en}
          </blockquote>
          <p className="mt-6 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-line" />
            <span className="mono-label">
              {`CEO ${t(company.ceo)}`}
            </span>
          </p>
        </div>

        {/* 연혁 + 주소 */}
        <div className="lg:col-span-5">
          <div className="border-b border-line pb-4">
            <span className="mono-label text-fg/70">
              {lang === "ko" ? "연혁" : "History"}
            </span>
          </div>
          <ul>
            {company.history.map((h, i) => (
              <li
                key={i}
                className="flex gap-6 border-b border-line py-5 text-[0.9rem]"
              >
                <span className="w-12 shrink-0 font-mono text-[0.8125rem] text-orange">
                  {h.year}
                </span>
                <span
                  className={
                    h.confirmed ? "text-fg" : "text-muted/70 italic"
                  }
                >
                  {t(h.event)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border border-line p-6">
            <span className="mono-label text-fg/70">
              {lang === "ko" ? "본사" : "Head Office"}
            </span>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
              {t(company.address)}
            </p>
            <p className="mono-label mt-4 text-muted/60">
              {t(company.foundedDisplay)}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
