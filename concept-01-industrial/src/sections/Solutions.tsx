import Section from "../components/Section";
import { useLang } from "../context/LanguageContext";
import { positioning, solutions } from "../data/content";

export default function Solutions() {
  const { t } = useLang();

  return (
    <Section
      id="solutions"
      no="03"
      label="Solutions"
      dwg="DWG NO. EZ-2026-03"
      tone="alt"
      grid
      heading={t(positioning.primary)}
      intro={<p>{t(positioning.supporting)}</p>}
    >
      {/* 카드 대신 풀폭 리스트 로우 */}
      <ul className="border-t border-line">
        {solutions.map((s) => (
          <li
            key={s.id}
            className="group relative border-b border-line transition-colors duration-300 hover:bg-ink-3"
          >
            {/* 좌측 오렌지 인디케이터 (hover 시 슬라이드) */}
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-orange transition-transform duration-[400ms] ease-out group-hover:scale-y-100"
            />

            <div className="reveal grid gap-4 px-2 py-8 md:grid-cols-12 md:gap-8 md:px-6 md:py-10 lg:px-8">
              <div className="md:col-span-1">
                <span className="font-mono text-sm text-muted transition-colors duration-300 group-hover:text-orange">
                  {s.no}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                  {t(s.title)}
                </h3>
              </div>

              <div className="md:col-span-4">
                <p className="text-[0.9rem] leading-[1.8] text-muted">
                  {t(s.desc)}
                </p>
              </div>

              <div className="md:col-span-4">
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {s.items.map((item, i) => (
                    <li
                      key={i}
                      className="border border-line px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-muted transition-colors duration-300 group-hover:border-line group-hover:text-fg/80"
                    >
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
