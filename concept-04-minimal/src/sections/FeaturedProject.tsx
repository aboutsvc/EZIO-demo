import Reveal from "../components/Reveal";
import SceneFigure from "../components/SceneFigure";
import Section from "../components/Section";
import { RefineryDusk } from "../components/scenes";
import { useLanguage } from "../context/LanguageContext";
import { featuredProject, nav, projectCustomerName } from "../data/content";

export default function FeaturedProject() {
  const { t, lang } = useLanguage();

  // ⚠️ 고객 실명은 helper를 통해서만 노출된다 (publicCustomerName=false → 익명 표기)
  const customer = projectCustomerName(lang);

  const meta = [
    { label: t({ ko: "고객", en: "Client" }), value: customer },
    { label: t({ ko: "산업", en: "Industry" }), value: t(featuredProject.industry) },
    { label: t({ ko: "위치", en: "Location" }), value: t(featuredProject.location) },
  ];

  return (
    <>
      <Section id="projects" index="06" label={t(nav.projects)}>
        {/* 에디토리얼 아티클 레이아웃 — 제목 크게, 메타 작게 */}
        <article>
          <Reveal>
            <h2 className="ko max-w-[16ch] text-huge font-extrabold leading-[0.98] tracking-[-0.035em]">
              {t(featuredProject.title)}
            </h2>
          </Reveal>

          <Reveal className="mt-10 md:mt-14" delay={80}>
            <dl className="grid grid-cols-1 gap-y-0 border-t border-rule sm:grid-cols-3 sm:gap-x-10">
              {meta.map((m) => (
                <div key={m.label} className="border-b border-rule py-4">
                  <dt className="label">{m.label}</dt>
                  <dd className="ko mt-1.5 text-[1rem] font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12">
            <Reveal className="md:col-span-6 lg:col-span-6">
              <p className="ko max-w-[52ch] text-[1.0625rem] leading-[1.75]">
                {t(featuredProject.summary)}
              </p>
            </Reveal>

            <Reveal
              className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9"
              delay={100}
            >
              <p className="label">{t({ ko: "수행 범위", en: "Scope" })}</p>
              <ul className="mt-5 border-t border-rule">
                {featuredProject.scope.map((s, i) => (
                  <li
                    key={t(s)}
                    className="flex items-baseline gap-5 border-b border-rule py-2.5"
                  >
                    <span className="label">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="ko text-[0.9375rem]">{t(s)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </article>
      </Section>

      {/* 씬 2/3 — 프로젝트 현장 도판. 지면 전폭으로 흘려 아티클을 닫는다 */}
      <div className="bg-paper pb-16 md:pb-24">
        <SceneFigure
          bleed
          delay={120}
          ratio="aspect-[16/7]"
          caption="Refinery Complex"
          note="Oil &amp; Gas"
        >
          <RefineryDusk tone="warm" className="h-full w-full" />
        </SceneFigure>
      </div>
    </>
  );
}
