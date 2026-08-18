import { useState } from "react";
import Reveal from "../components/Reveal";
import { Container, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { powerFlow, type FlowNode } from "../data/content";
import { ui } from "../data/ui";

/**
 * POWER FLOW — 이 콘셉트의 시그니처 섹션.
 * 세로 단선도(single-line diagram) + 상시 데이터 펄스 + 노드 hover/focus 설명.
 */

const GROUP_ORDER: FlowNode["group"][] = [
  "source",
  "distribution",
  "measurement",
  "network",
  "monitoring",
];

const GROUP_ACCENT: Record<FlowNode["group"], string> = {
  source: "text-[var(--color-ink-dim)]",
  distribution: "text-[var(--color-cyan-data)]",
  measurement: "text-[var(--color-teal-data)]",
  network: "text-[var(--color-cyan-data)]",
  monitoring: "text-[var(--color-teal-data)]",
};

export default function PowerFlowSection() {
  const { t } = useLanguage();
  const s = ui.sections.powerFlow;
  const [activeId, setActiveId] = useState<string>(powerFlow[0].id);
  const active = powerFlow.find((n) => n.id === activeId) ?? powerFlow[0];
  const activeIndex = powerFlow.findIndex((n) => n.id === active.id);

  return (
    <Section id="powerflow" tone="deep">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(760px 460px at 22% 30%, rgba(56,189,248,0.09), transparent 65%)",
        }}
      />
      <Container className="relative py-20 lg:py-28">
        <Reveal>
          <SectionHeader index={s.index} eyebrow={s.eyebrow} title={t(s.title)} desc={t(s.desc)} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* diagram */}
          <Reveal className="lg:col-span-7">
            <div className="relative pl-1">
              {/* rail */}
              <div
                className="pointer-events-none absolute bottom-4 left-[9px] top-4 w-px bg-[var(--color-line)]"
                aria-hidden="true"
              >
                <span className="anim-vbus absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-[var(--color-teal-data)]" />
                <span
                  className="anim-vbus absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-[var(--color-cyan-data)]"
                  style={{ ["--bus-delay" as string]: "3s" }}
                />
                <span
                  className="anim-vbus absolute -left-[2px] h-[5px] w-[5px] rounded-full bg-[var(--color-cyan-data)]/70"
                  style={{ ["--bus-delay" as string]: "6s" }}
                />
              </div>

              <ol className="relative space-y-1.5">
                {powerFlow.map((node, i) => {
                  const isActive = node.id === active.id;
                  const isGroupStart =
                    i === 0 || powerFlow[i - 1].group !== node.group;
                  return (
                    <li key={node.id}>
                      {isGroupStart && (
                        <div className="flex items-center gap-3 pb-1.5 pl-8 pt-4 first:pt-0">
                          <span
                            className={`tag-mono text-[0.5625rem] ${GROUP_ACCENT[node.group]}`}
                          >
                            {`${String(GROUP_ORDER.indexOf(node.group) + 1).padStart(2, "0")} · ${t(
                              s.groups[node.group],
                            )}`}
                          </span>
                          <span className="h-px flex-1 bg-[var(--color-line-soft)]" aria-hidden="true" />
                        </div>
                      )}
                      <button
                        type="button"
                        onMouseEnter={() => setActiveId(node.id)}
                        onFocus={() => setActiveId(node.id)}
                        onClick={() => setActiveId(node.id)}
                        aria-pressed={isActive}
                        className={`group relative flex w-full items-center gap-3 rounded-sm border py-3 pl-8 pr-4 text-left transition-colors duration-300 ${
                          isActive
                            ? "border-[var(--color-cyan-data)]/45 bg-[var(--color-navy-800)]"
                            : "border-[var(--color-line-soft)] bg-transparent hover:border-[var(--color-line)] hover:bg-[var(--color-navy-800)]/50"
                        }`}
                      >
                        {/* rail connector + node dot */}
                        <span
                          className="pointer-events-none absolute left-[9px] top-1/2 h-px w-[14px] bg-[var(--color-line)]"
                          aria-hidden="true"
                        />
                        <span
                          className={`pointer-events-none absolute left-[5px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border transition-colors duration-300 ${
                            isActive
                              ? "border-[var(--color-teal-data)] bg-[var(--color-teal-data)]"
                              : "border-[var(--color-line)] bg-[var(--color-navy-700)]"
                          }`}
                          aria-hidden="true"
                        />
                        <span className="tag-mono w-7 shrink-0 text-[0.5625rem] text-[var(--color-ink-faint)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-[0.875rem] transition-colors ${
                            isActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink-dim)]"
                          }`}
                        >
                          {t(node.label)}
                        </span>
                        <StatusLed
                          tone={isActive ? "data" : "idle"}
                          pulse={isActive}
                          className="shrink-0"
                        />
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>

          {/* detail panel */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="tag-mono mb-3 flex items-center gap-2 text-[0.625rem] text-[var(--color-ink-faint)]">
                <StatusLed tone="data" />
                {t(s.hint)}
              </div>
              <div className="relative overflow-hidden border border-[var(--color-line)] bg-[var(--color-navy-900)]/80">
                <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-2.5">
                  <span className="tag-mono text-[0.625rem] text-[var(--color-teal-data)]">
                    {`NODE ${String(activeIndex + 1).padStart(2, "0")} / ${String(
                      powerFlow.length,
                    ).padStart(2, "0")}`}
                  </span>
                  <span className={`tag-mono text-[0.5625rem] ${GROUP_ACCENT[active.group]}`}>
                    {t(s.groups[active.group])}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-[var(--color-ink)]">
                    {t(active.label)}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-[1.8] text-[var(--color-ink-dim)]">
                    {t(s.nodeDesc[active.id])}
                  </p>

                  {/* mini progress rail */}
                  <div className="mt-7 flex items-center gap-1.5" aria-hidden="true">
                    {powerFlow.map((n, i) => (
                      <span
                        key={n.id}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          i <= activeIndex
                            ? "bg-[var(--color-cyan-data)]/70"
                            : "bg-[var(--color-line)]"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="tag-mono mt-2.5 flex justify-between text-[0.5625rem] text-[var(--color-ink-faint)]">
                    <span>SOURCE</span>
                    <span>MONITORING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
