import IndustrialVisual from "../components/IndustrialVisual";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { lsElectricArea } from "../data/content";

/**
 * 다크 반전 섹션 (1/2) — LS ELECTRIC 제품 영역.
 * ⚠️ 파트너 등급 표현 사용 금지. content.ts의 안전 문구만 렌더링한다.
 * 로고 사용 권한 미확인(logoUsageAllowed=false) → 텍스트 표기만 사용.
 */
export default function LsElectric() {
  const { t } = useLanguage();

  return (
    <Section
      id="products"
      index="03"
      label={t(lsElectricArea.eyebrow)}
      tone="dark"
      rule={false}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-6 lg:col-span-6">
          <h2 className="ko text-huge font-extrabold leading-[0.98] tracking-[-0.035em]">
            {t(lsElectricArea.heading)}
          </h2>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
          <Reveal delay={100}>
            <p className="ko max-w-[46ch] text-paper/70">
              {t(lsElectricArea.body)}
            </p>
          </Reveal>
          <ul className="mt-10 border-t border-rule-dark">
            {lsElectricArea.categories.map((cat, i) => (
              <Reveal
                as="li"
                key={t(cat)}
                delay={i * 50}
                className="border-b border-rule-dark"
              >
                <div className="flex items-baseline justify-between gap-6 py-4">
                  <span className="ko text-[1.0625rem] font-medium">
                    {t(cat)}
                  </span>
                  <span className="label text-accent-on-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      {/* 비주얼 1/2 — 흑백 라인 드로잉 (실제 현장 사진으로 교체 예정) */}
      <Reveal className="mt-16 md:mt-24" delay={120}>
        <div className="text-paper/25">
          <IndustrialVisual variant="switchgear" />
        </div>
      </Reveal>
    </Section>
  );
}
