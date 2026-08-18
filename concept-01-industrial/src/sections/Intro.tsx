import Section, { CornerMarks } from "../components/Section";
import IndustrialVisual from "../components/IndustrialVisual";
import { useLang } from "../context/LanguageContext";
import { intro, positioning } from "../data/content";

export default function Intro() {
  const { t } = useLang();

  return (
    <Section
      id="intro"
      no="02"
      label="Intro"
      dwg="DWG NO. EZ-2026-02"
      tone="base"
      heading={t(intro.heading)}
      intro={<p>{t(intro.body)}</p>}
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        {/* 포지셔닝 정의 — 블루프린트 프레임 */}
        <div className="relative md:col-span-7">
          <CornerMarks />
          <div className="border border-line p-6 sm:p-10">
            <span className="mono-label text-orange">Positioning</span>
            <p className="reveal mt-5 text-lg leading-[1.7] tracking-tight text-fg sm:text-xl">
              {t(positioning.definition)}
            </p>
            <div className="mt-8 border-t border-line pt-5">
              <span className="mono-label block text-muted/70">
                {t(positioning.supporting)}
              </span>
            </div>
          </div>
        </div>

        {/* 도면 비주얼 — 실제 현장 사진으로 교체 예정 */}
        <div className="reveal relative md:col-span-5">
          <CornerMarks />
          <div className="border border-line">
            <IndustrialVisual variant="blueprint" className="w-full" />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <span className="mono-label text-muted/60">
              FIG. 01 — SITE LAYOUT (ILLUSTRATIVE)
            </span>
            <span className="mono-label text-muted/40">SVG</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
