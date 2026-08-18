import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { lsElectricArea, productCategories, solutions } from "../data/content";
import { findSection } from "../data/navigation";
import { ui } from "../data/ui";
import ContentSection from "../components/ContentSection";
import PageLayout from "../components/PageLayout";
import {
  ControlRoom,
  EngineerAtPanel,
  HmiScreen,
  RelayPanel,
  SwitchgearRoom,
  type SceneProps,
} from "../components/scenes";

const section = findSection("solutions")!;

// 솔루션별 장면 아트워크 — 실제 현장 사진 수령 시 교체
const sceneBySolution: Record<string, ComponentType<SceneProps>> = {
  "power-distribution": SwitchgearRoom,
  "protection-measurement": RelayPanel,
  "monitoring-control": ControlRoom,
  automation: HmiScreen,
  engineering: EngineerAtPanel,
};

export default function Solutions() {
  const { t } = useLanguage();

  return (
    <PageLayout section={section} lead={ui.solutionsLead} scene="ControlRoom" en="Solutions">
      <div className="space-y-14">
        {solutions.map((solution, i) => {
          const Scene = sceneBySolution[solution.id] ?? SwitchgearRoom;
          const related = productCategories.find((c) => c.id === solution.id);
          return (
            <ContentSection
              key={solution.id}
              id={solution.id}
              en={`Solution ${solution.no}`}
              title={solution.title}
              lead={solution.desc}
            >
              <div
                className={`grid gap-7 lg:grid-cols-[minmax(0,1fr)_40%] lg:gap-9 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-wide text-faint">
                    {t(ui.solutionScope)}
                  </p>
                  <ul className="mt-3 grid gap-px border border-line bg-line sm:grid-cols-2">
                    {solution.items.map((item) => (
                      <li
                        key={item.en}
                        className="flex items-start gap-2.5 bg-paper px-4 py-3.5 text-[0.85rem] leading-relaxed text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-brand-sky"
                        />
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                  {related && (
                    <Link
                      to={`/products/${related.id}`}
                      className="mt-5 inline-flex items-center gap-1.5 border border-line px-4 py-2.5 text-[0.8rem] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      {t(related.title)} {t(ui.quickProductsTitle)}
                      <span aria-hidden="true">›</span>
                    </Link>
                  )}
                </div>
                <div className="min-h-[200px] overflow-hidden border border-line bg-surface lg:min-h-[260px]">
                  <Scene tone="light" />
                </div>
              </div>
            </ContentSection>
          );
        })}

        {/* 제품 기반 — 파트너 등급을 주장하지 않는 안전 표현만 사용 */}
        <section className="border border-line bg-surface p-7 lg:p-9">
          <p
            className="text-[0.7rem] font-semibold tracking-[0.2em] text-brand uppercase"
            style={{ fontFamily: "var(--font-en)" }}
          >
            {t(lsElectricArea.eyebrow)}
          </p>
          <h2 className="mt-3 text-[1.25rem] font-bold text-ink lg:text-[1.45rem]">
            {t(lsElectricArea.heading)}
          </h2>
          <p className="mt-3 max-w-3xl text-[0.9rem] leading-relaxed text-muted">
            {t(lsElectricArea.body)}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {lsElectricArea.categories.map((cat) => (
              <li
                key={cat.en}
                className="border border-line bg-paper px-3.5 py-2 text-[0.8rem] text-ink"
              >
                {t(cat)}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
