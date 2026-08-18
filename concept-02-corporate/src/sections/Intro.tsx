import Container from "../components/Container";
import Reveal from "../components/Reveal";
import IndustrialVisual from "../components/IndustrialVisual";
import { useLanguage } from "../context/LanguageContext";
import { intro, positioning, solutions } from "../data/content";
import { ui } from "../data/ui";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section id="intro" className="border-b border-line bg-paper py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                {t(ui.introEyebrow)}
              </p>
              <h2 className="mt-3 text-[1.75rem] leading-[1.3] font-bold tracking-[-0.015em] text-ink sm:text-[2.125rem] lg:text-[2.375rem]">
                {t(intro.heading)}
              </h2>
              <div className="mt-6 h-[3px] w-14 bg-brand" aria-hidden="true" />
            </div>

            <div className="lg:col-span-7">
              <p className="text-[1rem] leading-[1.9] text-ink/85 lg:text-[1.0625rem]">
                {t(intro.body)}
              </p>

              {/* 핵심 영역 요약 태그 */}
              <ul className="mt-8 flex flex-wrap gap-2">
                {solutions.map((s) => (
                  <li
                    key={s.id}
                    className="border border-line bg-surface px-3.5 py-2 text-[0.8125rem] font-medium text-ink"
                    style={{ borderRadius: "3px" }}
                  >
                    {t(s.title)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* 플랜트 스카이라인 밴드 — SVG placeholder */}
        <Reveal delay={80}>
          <figure
            className="mt-14 overflow-hidden border border-line bg-surface"
            style={{ borderRadius: "3px" }}
          >
            {/* 실제 현장 사진으로 교체 예정 */}
            <IndustrialVisual variant="plant" className="block h-auto w-full" />
            <figcaption className="flex flex-col gap-1 border-t border-line bg-paper px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[0.75rem] font-semibold tracking-[0.12em] text-ink uppercase">
                {t(positioning.primary)}
              </span>
              <span className="text-[0.75rem] text-muted">{t(ui.visualNote)}</span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
