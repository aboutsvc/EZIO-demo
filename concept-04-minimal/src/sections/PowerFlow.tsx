import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { powerFlow, type FlowNode } from "../data/content";

// 그룹 UI 라벨 (콘텐츠 카피가 아닌 데이터 분류 라벨 — powerFlow.group 키에 대응)
const groupLabels: Record<FlowNode["group"], { ko: string; en: string }> = {
  source: { ko: "전원", en: "Source" },
  distribution: { ko: "배전", en: "Distribution" },
  measurement: { ko: "계측", en: "Measurement" },
  network: { ko: "네트워크", en: "Network" },
  monitoring: { ko: "감시", en: "Monitoring" },
};

export default function PowerFlow() {
  const { t } = useLanguage();

  return (
    <Section
      id="power-flow"
      index="07"
      label={t({ ko: "전력 인프라 흐름", en: "Power Infrastructure Flow" })}
      tone="alt"
    >
      {/* 다이어그램조차 타이포그래피로 — 라벨 + 얇은 수직 라인 */}
      <div className="relative max-w-[62rem] pl-8 sm:pl-14">
        {/* 흐름을 잇는 1px 수직 라인 */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-3 bottom-3 w-px bg-rule sm:left-1"
        />
        <ol>
          {powerFlow.map((node, i) => {
            const isNewGroup =
              i === 0 || powerFlow[i - 1].group !== node.group;
            return (
              <Reveal as="li" key={node.id} delay={i * 40}>
                <div className="group relative py-4 sm:py-5">
                  {/* 노드 티크 마크 */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[-2rem] top-1/2 h-px w-5 bg-rule transition-colors duration-500 group-hover:bg-accent sm:left-[-3.5rem] sm:w-11"
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <span className="ko text-[1.25rem] font-medium leading-tight tracking-[-0.015em] sm:text-[1.625rem] lg:text-[1.875rem]">
                      {t(node.label)}
                    </span>
                    <span
                      className={`label shrink-0 transition-opacity duration-500 ${
                        isNewGroup ? "opacity-100" : "opacity-0 sm:opacity-30"
                      } group-hover:opacity-100`}
                    >
                      {t(groupLabels[node.group])}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
