import Section from "../components/Section";
import IndustrialVisual from "../components/IndustrialVisual";
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

      {/* 파이프랙 / 철골 비주얼 — 실제 현장 사진으로 교체 예정 */}
      <div className="reveal mt-12 border border-line">
        <IndustrialVisual variant="pipes" className="w-full" />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className="mono-label text-muted/60">
          FIG. 03 — PIPE RACK / STRUCTURE (ILLUSTRATIVE)
        </span>
        <span className="mono-label text-muted/40">SVG</span>
      </div>
    </Section>
  );
}
