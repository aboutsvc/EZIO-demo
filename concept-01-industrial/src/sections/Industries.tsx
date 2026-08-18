import Section from "../components/Section";
import { PlantAerial } from "../components/scenes";
import { useLang } from "../context/LanguageContext";
import { industries } from "../data/content";

export default function Industries() {
  const { lang, t } = useLang();

  return (
    <Section
      id="industries"
      no="05"
      label="Industries"
      dwg="DWG NO. EZ-2026-05"
      tone="alt"
      grid
      heading={lang === "ko" ? "적용 산업 분야" : "Industries We Serve"}
      intro={
        <p>
          {lang === "ko"
            ? "산업 플랜트와 대형 사업장을 중심으로 전력·자동화 솔루션을 공급합니다."
            : "We supply power and automation solutions centered on industrial plants and large-scale facilities."}
        </p>
      }
    >
      <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4 lg:border-l">
        {industries.map((ind, i) => (
          <li
            key={ind.id}
            className="group relative border-b border-line transition-colors duration-300 hover:bg-ink-3 lg:border-r"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-orange transition-transform duration-[400ms] ease-out group-hover:scale-x-100"
            />
            <div className="reveal flex h-full flex-col justify-between p-6 lg:min-h-[280px] lg:p-8">
              <span className="font-mono text-sm text-muted transition-colors duration-300 group-hover:text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-12">
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-fg lg:text-2xl">
                  {t(ind.title)}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">
                  {t(ind.desc)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* 산업단지 부감 밴드 — 동일 슬롯에 실제 현장 사진 대체 가능 */}
      <div className="reveal relative mt-12 h-[240px] overflow-hidden border border-line sm:h-[300px] lg:h-[400px]">
        {/* 넓은 밴드에서 부감 지평선이 잘리지 않도록 실제 렌더 높이를 키우고 상단 정렬 크롭 */}
        <div className="absolute inset-x-0 top-0 h-[155%]">
          <PlantAerial tone="dark" className="h-full w-full" />
        </div>
        <span
          aria-hidden="true"
          className="eng-grid pointer-events-none absolute inset-0 opacity-50"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(20,23,26,0.85),transparent)]"
        />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className="mono-label text-muted/60">
          FIG. 03 — INDUSTRIAL COMPLEX / AERIAL
        </span>
        <span className="mono-label text-muted/40">REF. A-03</span>
      </div>
    </Section>
  );
}
