import Container from "../components/Container";
import Reveal from "../components/Reveal";
import IndustrialVisual from "../components/IndustrialVisual";
import { useLanguage } from "../context/LanguageContext";
import { lsElectricArea } from "../data/content";

/**
 * LS ELECTRIC PRODUCT AREA
 * ⚠️ 파트너 등급·대리점 표현 금지. content.ts의 안전 문구(eyebrow/heading/body)만 렌더링한다.
 * ⚠️ 로고 사용 권한 미확인(lsElectricArea.logoUsageAllowed=false) — 텍스트 기반 표현만 사용.
 */
export default function LSElectric() {
  const { t } = useLanguage();

  return (
    <section id="ls-electric" className="border-b border-line bg-surface py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
              {t(lsElectricArea.eyebrow)}
            </p>
            <h2 className="mt-3 text-[1.75rem] leading-[1.3] font-bold tracking-[-0.015em] text-ink sm:text-[2.125rem] lg:text-[2.375rem]">
              {t(lsElectricArea.heading)}
            </h2>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.85] text-muted lg:text-[1rem]">
              {t(lsElectricArea.body)}
            </p>

            {/* 카테고리 태그 그리드 */}
            <ul className="mt-9 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
              {lsElectricArea.categories.map((cat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-paper px-5 py-4 text-[0.875rem] font-medium text-ink transition-colors duration-150 hover:bg-brand-soft"
                >
                  <span
                    aria-hidden="true"
                    className="block h-[10px] w-[3px] shrink-0 bg-brand"
                  />
                  {t(cat)}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={80}>
            <div
              className="border border-line bg-paper p-6 lg:p-8"
              style={{ borderRadius: "3px" }}
            >
              {/* 실제 현장 사진 / 제품 이미지로 교체 예정 */}
              <IndustrialVisual variant="network" className="h-auto w-full" />
              <div className="mt-5 grid grid-cols-2 gap-px border border-line bg-line">
                {lsElectricArea.categories.slice(0, 4).map((cat, i) => (
                  <div key={i} className="bg-surface px-4 py-3">
                    <p className="text-[0.75rem] font-semibold text-ink/80">{t(cat)}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
