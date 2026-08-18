import { Fragment } from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { powerFlow, type FlowNode } from "../data/content";
import { ui } from "../data/ui";

const GROUP_ORDER: FlowNode["group"][] = [
  "source",
  "distribution",
  "measurement",
  "network",
  "monitoring",
];

/** 그룹별 옅은 배경 밴드 — 흐름을 따라 점진적으로 짙어지는 블루 틴트 */
const GROUP_TINT: Record<FlowNode["group"], string> = {
  source: "#F5F7F9",
  distribution: "#EDF2FA",
  measurement: "#E5EDF9",
  network: "#DDE7F7",
  monitoring: "#D5E1F5",
};

function Arrow() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center py-2 lg:w-8 lg:py-0"
    >
      {/* Mobile: 아래 방향 / Desktop: 오른쪽 방향 */}
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 rotate-90 text-brand/55 lg:rotate-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function PowerFlow() {
  const { t } = useLanguage();

  const groups = GROUP_ORDER.map((group) => ({
    group,
    label: ui.flowGroups[group],
    nodes: powerFlow.filter((n) => n.group === group),
  })).filter((g) => g.nodes.length > 0);

  return (
    <section id="power-flow" className="border-b border-line bg-paper py-16 lg:py-24">
      <Container>
        <SectionHeader eyebrow={ui.flowEyebrow} heading={ui.flowHeading} lead={ui.flowLead} />

        <Reveal>
          <div
            className="mt-10 border border-line bg-paper p-4 sm:p-6 lg:p-8"
            style={{ borderRadius: "3px" }}
          >
            <div className="flex flex-col lg:flex-row lg:items-stretch">
              {groups.map((g, gi) => (
                <Fragment key={g.group}>
                  {/* 그룹 밴드 */}
                  <div
                    className="flex flex-1 flex-col border border-line/70 p-4"
                    style={{ background: GROUP_TINT[g.group], borderRadius: "3px" }}
                  >
                    <div className="flex items-center justify-between gap-2 pb-3">
                      <p className="text-[0.6875rem] font-bold tracking-[0.16em] text-brand uppercase">
                        {t(g.label)}
                      </p>
                      <span className="text-[0.625rem] font-semibold text-brand/45 tabular-nums">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {g.nodes.map((node) => (
                        <li
                          key={node.id}
                          className="flex min-h-[54px] items-center border border-line-strong bg-paper px-3 py-3 text-[0.8125rem] leading-snug font-medium text-ink transition-shadow duration-200 hover:shadow-[0_2px_10px_rgba(14,27,51,0.1)] lg:px-3 lg:text-[0.75rem] xl:px-3.5 xl:text-[0.8125rem]"
                          style={{ borderRadius: "2px" }}
                        >
                          <span
                            aria-hidden="true"
                            className="mr-3 block h-5 w-[3px] shrink-0 bg-brand"
                          />
                          {t(node.label)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {gi < groups.length - 1 && <Arrow />}
                </Fragment>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
