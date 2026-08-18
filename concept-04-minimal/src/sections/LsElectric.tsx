import Reveal from "../components/Reveal";
import SceneFigure from "../components/SceneFigure";
import Section from "../components/Section";
import { SwitchgearRoom } from "../components/scenes";
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

      {/* 씬 1/3 — MV/LV 배전반실. 다크 지면 위에 인화지 도판처럼 얹는다 */}
      <SceneFigure
        className="mt-16 md:mt-24"
        delay={120}
        tone="dark"
        ratio="aspect-[4/3] sm:aspect-[21/9]"
        caption="Switchgear Room"
        note="MV / LV Lineup"
      >
        {/* warm 톤 유지 — dark 톤은 오렌지/시안 표시등이 단일 악센트 규칙과 충돌한다.
            대비를 아주 조금만 올려 니어블랙 지면 위에서 날아가지 않게 한다. */}
        <SwitchgearRoom
          tone="warm"
          className="h-full w-full contrast-[1.07] brightness-[0.97]"
        />
      </SceneFigure>
    </Section>
  );
}
