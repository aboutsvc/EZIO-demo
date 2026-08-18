import IndustrialVisual from "../components/IndustrialVisual";
import Reveal from "../components/Reveal";
import { Container, DemoBadge, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../data/content";
import { ui } from "../data/ui";

export default function Company() {
  const { t } = useLanguage();
  const s = ui.sections.company;

  return (
    <Section id="company">
      <div className="dot-grid-tight pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <Reveal>
          <SectionHeader
            index={s.index}
            eyebrow={s.eyebrow}
            title={t(s.title)}
            desc={`${t(company.foundedDisplay)} · ${t(company.addressShort)}`}
          />
        </Reveal>

        {/* facts */}
        <div className="mt-12 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {company.facts.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="h-full bg-[var(--color-navy-800)]/60 p-5 sm:p-6">
                <div className="tag-mono flex items-center gap-2 text-[0.5625rem] text-[var(--color-ink-faint)]">
                  <StatusLed tone="idle" pulse={false} />
                  {`F-${String(i + 1).padStart(2, "0")}`}
                </div>
                <div className="mt-4 text-[0.75rem] text-[var(--color-ink-dim)]">{t(f.label)}</div>
                <div className="font-display mt-1.5 text-lg font-bold leading-snug text-[var(--color-ink)]">
                  {t(f.value)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* history */}
          <Reveal className="lg:col-span-5">
            <div className="tag-mono flex items-center gap-2.5 text-[0.625rem] text-[var(--color-teal-data)]">
              <StatusLed tone="ok" />
              {t(s.historyTitle)}
            </div>
            <ol className="relative mt-5 space-y-5 pl-6">
              <span
                className="absolute bottom-2 left-[3px] top-2 w-px bg-[var(--color-line)]"
                aria-hidden="true"
              />
              {company.history.map((h, i) => (
                <li key={i} className="relative">
                  <span
                    className={`absolute -left-6 top-1.5 h-[7px] w-[7px] rounded-full ${
                      h.confirmed ? "bg-[var(--color-teal-data)]" : "bg-[var(--color-ink-faint)]"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="tag-mono text-[0.6875rem] text-[var(--color-cyan-data)]">
                      {h.year}
                    </span>
                    {!h.confirmed && <DemoBadge label="PENDING" />}
                  </div>
                  <p className="mt-1 text-[0.875rem] leading-relaxed text-[var(--color-ink-dim)]">
                    {t(h.event)}
                  </p>
                </li>
              ))}
            </ol>

            <dl className="mt-9 space-y-px border border-[var(--color-line)] bg-[var(--color-line)]">
              <div className="flex flex-wrap gap-x-4 bg-[var(--color-navy-900)] px-4 py-3">
                <dt className="tag-mono min-w-[72px] text-[0.5625rem] text-[var(--color-ink-faint)]">
                  {t(s.ceoLabel)}
                </dt>
                <dd className="text-[0.8125rem] text-[var(--color-ink)]">{t(company.ceo)}</dd>
              </div>
              <div className="flex flex-wrap gap-x-4 bg-[var(--color-navy-900)] px-4 py-3">
                <dt className="tag-mono min-w-[72px] text-[0.5625rem] text-[var(--color-ink-faint)]">
                  ADDRESS
                </dt>
                <dd className="flex-1 text-[0.8125rem] leading-relaxed text-[var(--color-ink)]">
                  {t(company.address)}
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* ceo message */}
          <Reveal className="lg:col-span-7" delay={100}>
            <div className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-navy-800)]/50">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-2.5">
                <span className="tag-mono text-[0.625rem] text-[var(--color-ink-dim)]">
                  {t(s.messageTitle)}
                </span>
                {company.ceoMessage.isPlaceholder && <DemoBadge />}
              </div>
              <div className="p-6 sm:p-8">
                <p className="font-display text-lg font-semibold leading-[1.7] tracking-[-0.01em] text-[var(--color-ink)] sm:text-xl">
                  “{t(company.ceoMessage)}”
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-[0.8125rem] text-[var(--color-ink-dim)]">
                    {t(company.ceo)}
                  </span>
                  <span className="tag-mono text-[0.5625rem] text-[var(--color-ink-faint)]">
                    {t(s.ceoLabel)}
                  </span>
                </div>
                {company.ceoMessage.isPlaceholder && (
                  <p className="mt-4 border-t border-[var(--color-line-soft)] pt-4 text-[0.6875rem] text-[var(--color-ink-faint)]">
                    {t(s.placeholderNote)}
                  </p>
                )}
              </div>
              {/* 실제 현장 사진으로 교체 예정 */}
              <div className="border-t border-[var(--color-line)]">
                <IndustrialVisual variant="plant" className="h-[190px] w-full sm:h-[220px]" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
