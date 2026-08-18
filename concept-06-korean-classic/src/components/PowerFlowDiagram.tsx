import { useLanguage } from "../context/LanguageContext";
import { powerFlow } from "../data/content";
import { flowGroupLabels, flowGroupOrder } from "../data/site";

/**
 * 전력 인프라 흐름 — 클래식 각진 박스 + 화살표 다이어그램 (HTML/CSS 구현, Mermaid 미사용)
 * Desktop: 좌 → 우 5단계 그룹 / Mobile: 세로 스택
 */
export function PowerFlowDiagram() {
  const { t } = useLanguage();

  const groups = flowGroupOrder.map((group) => ({
    group,
    label: flowGroupLabels[group],
    nodes: powerFlow.filter((n) => n.group === group),
  }));

  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-full flex-col gap-2 md:min-w-[860px] md:flex-row md:items-stretch">
        {groups.map((g, gi) => (
          <div key={g.group} className="flex flex-col md:flex-1 md:flex-row md:items-stretch">
            <div className="flex min-w-0 flex-1 flex-col border border-line bg-white">
              <p className="border-b border-line bg-brand-navy px-2 py-1.5 text-center text-[0.75rem] font-bold tracking-[0.04em] text-white">
                {t(g.label)}
              </p>
              <ul className="flex flex-1 flex-col gap-1.5 p-2">
                {g.nodes.map((node) => (
                  <li
                    key={node.id}
                    className="border border-line bg-surface px-2 py-2 text-center text-[0.75rem] font-medium leading-snug text-ink-2"
                  >
                    {t(node.label)}
                  </li>
                ))}
              </ul>
            </div>
            {gi < groups.length - 1 ? (
              <div
                aria-hidden="true"
                className="flex items-center justify-center py-1 text-brand md:px-1.5 md:py-0"
              >
                <span className="md:hidden">▼</span>
                <span className="hidden md:inline">▶</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PowerFlowDiagram;
