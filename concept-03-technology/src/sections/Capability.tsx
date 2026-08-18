import Reveal from "../components/Reveal";
import { Container, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { capabilities, processSteps } from "../data/content";
import { ui } from "../data/ui";

export default function Capability() {
  const { t } = useLanguage();
  const s = ui.sections.capability;

  return (
    <Section id="capability" tone="raised">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <Reveal>
          <SectionHeader index={s.index} eyebrow={s.eyebrow} title={t(s.title)} desc={t(s.desc)} />
        </Reveal>

        {/* ── 8-step pipeline : horizontal (xl) ── */}
        <div className="relative mt-16 hidden xl:block">
          <div className="pointer-events-none absolute inset-x-0 top-[7px] h-px bg-[var(--color-line)]" aria-hidden="true">
            <span className="anim-bus absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-[var(--color-teal-data)]" />
            <span
              className="anim-bus absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-[var(--color-cyan-data)]"
              style={{ ["--bus-delay" as string]: "3.5s" }}
            />
          </div>
          <ol className="grid grid-cols-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 60} as="li" className="group relative pr-4">
                <span
                  className="absolute left-0 top-[3px] h-2 w-2 rounded-full border border-[var(--color-navy-800)] bg-[var(--color-ink-faint)] transition-colors duration-300 group-hover:bg-[var(--color-teal-data)]"
                  aria-hidden="true"
                />
                <div className="pt-8">
                  <span className="tag-mono text-[0.6875rem] text-[var(--color-cyan-data)]">
                    {step.no}
                  </span>
                  <h3 className="font-display mt-2 text-[0.9375rem] font-bold leading-snug text-[var(--color-ink)]">
                    {t(step.title)}
                  </h3>
                  <p className="mt-1.5 text-[0.75rem] leading-relaxed text-[var(--color-ink-dim)]">
                    {t(step.desc)}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ── 8-step pipeline : vertical timeline (mobile / tablet) ── */}
        <div className="relative mt-12 xl:hidden">
          <div className="pointer-events-none absolute bottom-3 left-[3.5px] top-2 w-px bg-[var(--color-line)]" aria-hidden="true" />
          <ol className="space-y-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 50} as="li" className="relative pl-7">
                <span
                  className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[var(--color-ink-faint)]"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="tag-mono text-[0.6875rem] text-[var(--color-cyan-data)]">
                    {step.no}
                  </span>
                  <h3 className="font-display text-base font-bold text-[var(--color-ink)]">
                    {t(step.title)}
                  </h3>
                </div>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-[var(--color-ink-dim)]">
                  {t(step.desc)}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ── 기술 역량 ── */}
        <Reveal className="mt-20 border-t border-[var(--color-line)] pt-14">
          <div className="tag-mono mb-4 flex items-center gap-2.5 text-[var(--color-teal-data)]">
            <StatusLed tone="ok" />
            TECHNICAL CAPABILITY
          </div>
          <h3 className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            {t(s.capabilityTitle)}
          </h3>
          <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-[var(--color-ink-dim)]">
            {t(s.capabilityDesc)}
          </p>
        </Reveal>

        <div className="mt-9 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.id} delay={i * 60}>
              <article className="group h-full bg-[var(--color-navy-900)] p-5 transition-colors duration-300 hover:bg-[var(--color-navy-700)] sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="tag-mono text-[0.625rem] text-[var(--color-ink-faint)]">
                    {`CAP ${String(i + 1).padStart(2, "0")}`}
                  </span>
                  <StatusLed tone="idle" pulse={false} className="transition-colors group-hover:bg-[var(--color-cyan-data)]" />
                </div>
                <h4 className="font-display mt-4 text-base font-bold text-[var(--color-ink)]">
                  {t(cap.title)}
                </h4>
                <ul className="mt-4 space-y-2 border-t border-[var(--color-line-soft)] pt-4">
                  {cap.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-[var(--color-ink-dim)]"
                    >
                      <span
                        className="mt-[0.5em] h-px w-2.5 shrink-0 bg-[var(--color-ink-faint)] transition-colors group-hover:bg-[var(--color-cyan-data)]"
                        aria-hidden="true"
                      />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
