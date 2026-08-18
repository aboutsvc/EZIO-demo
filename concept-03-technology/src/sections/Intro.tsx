import Reveal from "../components/Reveal";
import { ControlRoom } from "../components/scenes";
import { Container, Panel, Section, SceneFrame, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { intro, positioning } from "../data/content";
import { ui } from "../data/ui";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <Section id="intro" tone="raised">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="tag-mono mb-5 flex items-center gap-2.5 text-[var(--color-cyan-data)]">
              <StatusLed tone="data" />
              <span>{ui.sections.intro.index}</span>
              <span className="h-px w-6 bg-[var(--color-line)]" aria-hidden="true" />
              <span className="text-[var(--color-ink-dim)]">{ui.sections.intro.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl font-bold leading-[1.18] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
              {t(intro.heading)}
            </h2>
            <p className="mt-6 max-w-2xl text-[0.9375rem] leading-[1.85] text-[var(--color-ink-dim)] sm:text-base">
              {t(intro.body)}
            </p>

            <Panel className="mt-9 max-w-2xl p-5 sm:p-6">
              <div className="tag-mono mb-3 text-[0.625rem] text-[var(--color-teal-data)]">
                POSITIONING
              </div>
              <p className="text-[0.9375rem] leading-[1.8] text-[var(--color-ink)]">
                {t(positioning.definition)}
              </p>
            </Panel>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative h-full min-h-[280px] border border-[var(--color-line)] bg-[var(--color-navy-900)]/60">
              <div className="tag-mono flex items-center justify-between border-b border-[var(--color-line)] px-4 py-2.5 text-[0.625rem] text-[var(--color-ink-faint)]">
                <span className="flex items-center gap-2">
                  <StatusLed tone="ok" />
                  CENTRAL CONTROL
                </span>
                <span>OPERATIONS</span>
              </div>
              {/* 씬 아트워크 — 실제 현장 사진 수령 시 동일 위치 교체 */}
              <SceneFrame
                corners={false}
                ring={false}
                className="h-[300px] w-full lg:h-[calc(100%-42px)]"
              >
                <ControlRoom tone="navy" />
              </SceneFrame>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
