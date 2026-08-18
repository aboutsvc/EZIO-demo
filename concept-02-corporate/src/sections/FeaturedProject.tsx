import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { HmiScreen } from "../components/scenes";
import { useLanguage } from "../context/LanguageContext";
import { featuredProject, projectCustomerName } from "../data/content";
import { ui } from "../data/ui";

/**
 * FEATURED PROJECT — 케이스 스터디 카드
 * ⚠️ 고객 실명은 절대 직접 렌더링하지 않는다. 반드시 projectCustomerName(lang) helper 경유.
 */
export default function FeaturedProject() {
  const { t, lang } = useLanguage();

  const scopeCount =
    lang === "ko"
      ? `${featuredProject.scope.length}${t(ui.projectScopeUnit)}`
      : `${featuredProject.scope.length} ${t(ui.projectScopeUnit)}`;

  const meta = [
    { label: ui.projectMetaCustomer, value: projectCustomerName(lang) },
    { label: ui.projectMetaIndustry, value: t(featuredProject.industry) },
    { label: ui.projectMetaLocation, value: t(featuredProject.location) },
    { label: ui.projectMetaScopeCount, value: scopeCount },
  ];

  return (
    <section id="projects" className="border-b border-line bg-paper py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow={ui.projectEyebrow}
          heading={ui.projectHeading}
          lead={ui.projectLead}
        />

        <Reveal>
          <article
            className="mt-10 border border-line bg-paper transition-shadow duration-200 hover:shadow-[0_2px_20px_rgba(14,27,51,0.08)]"
            style={{ borderRadius: "3px" }}
          >
            {/* 카드 헤더 */}
            <div className="border-b border-line bg-navy px-6 py-8 lg:px-10 lg:py-10">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/55 uppercase">
                {t(featuredProject.industry)}
              </p>
              <h3 className="mt-3 text-[1.5rem] leading-snug font-bold text-white sm:text-[1.875rem] lg:text-[2.125rem]">
                {t(featuredProject.title)}
              </h3>
              <p className="mt-4 max-w-3xl text-[0.9375rem] leading-[1.85] text-white/65">
                {t(featuredProject.summary)}
              </p>
            </div>

            {/* 전력 감시 HMI 비주얼 밴드 */}
            {/* 향후 실제 현장 사진 확보 시 동일 컨테이너에 <img>로 대체 가능 */}
            <div className="h-[220px] w-full overflow-hidden border-b border-line bg-surface sm:h-[320px] lg:h-[430px]">
              <HmiScreen tone="light" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* 좌 — 메타 정보 */}
              <div className="border-line bg-surface px-6 py-8 lg:col-span-4 lg:border-r lg:px-10 lg:py-10">
                <dl className="space-y-6">
                  {meta.map((m, i) => (
                    <div key={i} className="border-b border-line pb-5 last:border-b-0 last:pb-0">
                      <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-brand uppercase">
                        {t(m.label)}
                      </dt>
                      <dd className="mt-2 text-[1rem] font-semibold text-ink">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* 우 — 스코프 리스트 */}
              <div className="border-t border-line px-6 py-8 lg:col-span-8 lg:border-t-0 lg:px-10 lg:py-10">
                <h4 className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">
                  {t(ui.projectScopeHeading)}
                </h4>
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-px sm:grid-cols-2">
                  {featuredProject.scope.map((s, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-3 border-b border-line py-3.5 text-[0.875rem] text-ink"
                    >
                      <span className="text-[0.6875rem] font-bold text-brand/70 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t(s)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
