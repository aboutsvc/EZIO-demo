import Section from "../components/Section";
import { ControlRoom } from "../components/scenes";
import { useLang } from "../context/LanguageContext";
import { powerFlow } from "../data/content";
import type { FlowNode } from "../data/content";

const GROUP_LABEL: Record<FlowNode["group"], { ko: string; en: string }> = {
  source: { ko: "전원", en: "Source" },
  distribution: { ko: "배전", en: "Distribution" },
  measurement: { ko: "계측", en: "Measurement" },
  network: { ko: "네트워크", en: "Network" },
  monitoring: { ko: "감시", en: "Monitoring" },
};

const GROUP_ORDER: FlowNode["group"][] = [
  "source",
  "distribution",
  "measurement",
  "network",
  "monitoring",
];

export default function PowerFlow() {
  const { lang, t } = useLang();

  return (
    <Section
      id="power-flow"
      no="08"
      label="Power Flow"
      dwg="DWG NO. EZ-2026-08"
      tone="base"
      grid
      heading={
        lang === "ko" ? "전력 인프라 흐름" : "Power Infrastructure Flow"
      }
      intro={
        <p>
          {lang === "ko"
            ? "전원에서 배전, 계측, 네트워크를 거쳐 감시 환경까지 — 현장의 전력 흐름을 하나의 계통으로 연결합니다."
            : "From source through distribution, measurement and network to the monitoring environment — one connected power chain."}
        </p>
      }
    >
      {/* 그룹 레전드 */}
      <ul className="mb-12 flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-5">
        {GROUP_ORDER.map((g, i) => (
          <li key={g} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-[7px] w-[7px] rotate-45 border border-orange"
            />
            <span className="mono-label">
              {`${String(i + 1).padStart(2, "0")} ${
                lang === "ko" ? GROUP_LABEL[g].ko : GROUP_LABEL[g].en
              }`}
            </span>
          </li>
        ))}
      </ul>

      {/* 세로형 single-line diagram */}
      <ol className="mx-auto max-w-[880px]">
        {powerFlow.map((node, i) => {
          const isFirst = i === 0;
          const isLast = i === powerFlow.length - 1;
          const groupChanged = i === 0 || powerFlow[i - 1].group !== node.group;

          return (
            <li key={node.id} className="group flex items-stretch">
              {/* 좌측 레일 — 그룹 라벨 (Desktop) */}
              <div className="hidden w-36 shrink-0 pr-6 pt-6 text-right lg:block">
                {groupChanged && (
                  <span className="mono-label text-orange">
                    {lang === "ko"
                      ? GROUP_LABEL[node.group].ko
                      : GROUP_LABEL[node.group].en}
                  </span>
                )}
              </div>

              {/* 스파인 (단선) + 노드 마커 */}
              <div className="relative w-6 shrink-0 sm:w-8">
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 w-px -translate-x-1/2 bg-line ${
                    isFirst
                      ? "top-1/2 bottom-0"
                      : isLast
                        ? "top-0 bottom-1/2"
                        : "inset-y-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-line bg-ink transition-colors duration-300 group-hover:border-orange group-hover:bg-orange"
                />
                {/* 노드 → 박스 연결 티크 */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-px w-1/2 bg-line"
                />
              </div>

              {/* 노드 박스 */}
              <div className="my-1.5 flex flex-1 items-center justify-between gap-4 border border-line bg-ink-2 px-4 py-4 transition-colors duration-300 group-hover:border-orange/60 group-hover:bg-ink-3 sm:px-6">
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[0.6875rem] text-muted transition-colors group-hover:text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9rem] text-fg sm:text-[0.975rem]">
                    {t(node.label)}
                  </span>
                </span>
                <span className="mono-label hidden text-muted/60 sm:block lg:hidden xl:block">
                  {node.group.toUpperCase()}
                </span>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mono-label mt-10 text-center text-muted/50">
        SINGLE-LINE REPRESENTATION — SCHEMATIC
      </p>

      {/* 흐름의 종착점: 중앙 관제 환경 — 동일 슬롯에 실제 현장 사진 대체 가능 */}
      <div className="reveal relative mt-16 h-[240px] overflow-hidden border border-line sm:h-[320px] lg:h-[420px]">
        <ControlRoom tone="dark" className="h-full w-full" />
        <span
          aria-hidden="true"
          className="eng-grid pointer-events-none absolute inset-0 opacity-50"
        />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className="mono-label text-muted/60">
          FIG. 05 — CENTRAL CONTROL ROOM
        </span>
        <span className="mono-label text-muted/40">REF. A-05</span>
      </div>
    </Section>
  );
}
