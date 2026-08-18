import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  capabilities,
  featuredProject,
  industries,
  powerFlow,
  processSteps,
  projectCustomerName,
} from "../data/content";
import { findSection } from "../data/navigation";
import { ui } from "../data/ui";
import ContentSection from "../components/ContentSection";
import PageLayout from "../components/PageLayout";
import {
  ControlRoom,
  PlantAerial,
  RefineryDusk,
  SubstationYard,
  SwitchgearRoom,
  type SceneProps,
} from "../components/scenes";

const section = findSection("projects")!;

// 산업군별 장면 아트워크 — 실제 현장 사진 수령 시 교체
const sceneByIndustry: Record<string, ComponentType<SceneProps>> = {
  "oil-gas": RefineryDusk,
  manufacturing: PlantAerial,
  energy: SubstationYard,
  infrastructure: SwitchgearRoom,
};

const flowGroupOrder = ["source", "distribution", "measurement", "network", "monitoring"] as const;

export default function Projects() {
  const { t, lang } = useLanguage();

  return (
    <PageLayout
      section={section}
      lead={featuredProject.summary}
      scene="RefineryDusk"
      en="Projects"
    >
      <div className="space-y-14">
        {/* 주요 수행 프로젝트 */}
        <ContentSection id="featured" en="Featured Project" title={ui.featuredTitle}>
          <div className="border border-line">
            <div className="min-h-[200px] border-b border-line bg-surface lg:min-h-[280px]">
              {/* 장면 아트워크 — 실제 프로젝트 사진 수령 시 교체 */}
              <ControlRoom tone="light" />
            </div>
            <div className="p-7 lg:p-9">
              <h3 className="text-[1.3rem] leading-snug font-bold text-ink lg:text-[1.6rem]">
                {t(featuredProject.title)}
              </h3>
              <dl className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
                <div className="bg-paper px-5 py-4">
                  <dt className="text-[0.72rem] text-muted">{t(ui.projectCustomer)}</dt>
                  {/* 고객 실명은 공개 권한 확인 전까지 helper로만 표기 */}
                  <dd className="mt-1.5 text-[0.9rem] font-semibold text-ink">
                    {projectCustomerName(lang)}
                  </dd>
                </div>
                <div className="bg-paper px-5 py-4">
                  <dt className="text-[0.72rem] text-muted">{t(ui.projectIndustry)}</dt>
                  <dd className="mt-1.5 text-[0.9rem] font-semibold text-ink">
                    {t(featuredProject.industry)}
                  </dd>
                </div>
                <div className="bg-paper px-5 py-4">
                  <dt className="text-[0.72rem] text-muted">{t(ui.projectLocation)}</dt>
                  <dd className="mt-1.5 text-[0.9rem] font-semibold text-ink">
                    {t(featuredProject.location)}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-[0.9rem] leading-relaxed text-muted">
                {t(featuredProject.summary)}
              </p>

              <p className="mt-8 text-[0.75rem] font-semibold tracking-wide text-faint">
                {t(ui.projectScope)}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProject.scope.map((item) => (
                  <li
                    key={item.en}
                    className="flex items-start gap-2 border-l-2 border-brand-tint py-1 pl-3 text-[0.84rem] leading-relaxed text-ink"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentSection>

        {/* 적용 산업 */}
        <ContentSection id="industries" en="Industries" title={ui.industriesTitle}>
          <ul className="grid gap-6 sm:grid-cols-2">
            {industries.map((industry) => {
              const Scene = sceneByIndustry[industry.id] ?? PlantAerial;
              return (
                <li key={industry.id} className="border border-line">
                  <div className="h-36 overflow-hidden bg-surface sm:h-40">
                    <Scene tone="light" />
                  </div>
                  <div className="p-5">
                    <p className="text-[1rem] font-bold text-ink">{t(industry.title)}</p>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                      {t(industry.desc)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ContentSection>

        {/* 수행 프로세스 */}
        <ContentSection id="process" en="Process" title={ui.processTitle}>
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.no} className="relative bg-paper p-5">
                <span
                  className="text-[1.5rem] leading-none font-bold text-brand-tint"
                  style={{ fontFamily: "var(--font-en)" }}
                >
                  {step.no}
                </span>
                <p className="mt-3 text-[0.95rem] font-bold text-ink">{t(step.title)}</p>
                <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted">{t(step.desc)}</p>
              </li>
            ))}
          </ol>
        </ContentSection>

        {/* 기술 역량 */}
        <ContentSection id="capability" en="Capability" title={ui.capabilityTitle}>
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <li key={cap.id} className="bg-paper p-6">
                <p className="text-[0.98rem] font-bold text-ink">{t(cap.title)}</p>
                <ul className="mt-3.5 space-y-2">
                  {cap.items.map((item) => (
                    <li
                      key={item.en}
                      className="flex items-start gap-2 text-[0.8rem] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-[4px] w-[4px] shrink-0 bg-brand-sky"
                      />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </ContentSection>

        {/* 전력 인프라 흐름 */}
        <ContentSection
          id="powerflow"
          en="Power Flow"
          title={ui.powerFlowTitle}
          lead={ui.powerFlowLead}
        >
          <div className="space-y-3">
            {flowGroupOrder.map((group, gi) => {
              const nodes = powerFlow.filter((n) => n.group === group);
              return (
                <div key={group} className="relative">
                  <div className="grid gap-3 border border-line bg-surface p-4 sm:grid-cols-[130px_minmax(0,1fr)] sm:items-center">
                    <p className="flex items-center gap-2 text-[0.8rem] font-bold text-brand">
                      <span
                        className="text-[0.7rem] tabular-nums text-brand-sky"
                        style={{ fontFamily: "var(--font-en)" }}
                      >
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      {t(ui.flowGroups[group])}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {nodes.map((node) => (
                        <li
                          key={node.id}
                          className="border border-line-strong bg-paper px-3.5 py-2 text-[0.8rem] text-ink"
                        >
                          {t(node.label)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {gi < flowGroupOrder.length - 1 && (
                    <div aria-hidden="true" className="flex justify-center py-1">
                      <svg viewBox="0 0 16 16" className="h-4 w-4 text-brand-sky">
                        <path
                          d="M8 2v11M4 9l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          fill="none"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            to="/support"
            state={{ scrollTo: "contact" }}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand-sky px-6 py-3 text-[0.85rem] font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t(ui.inquiry)}
            <span aria-hidden="true">›</span>
          </Link>
        </ContentSection>
      </div>
    </PageLayout>
  );
}
