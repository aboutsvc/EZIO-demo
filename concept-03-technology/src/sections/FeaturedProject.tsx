import IndustrialVisual from "../components/IndustrialVisual";
import Reveal from "../components/Reveal";
import { Container, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { featuredProject, projectCustomerName } from "../data/content";
import { ui } from "../data/ui";

export default function FeaturedProject() {
  const { t, lang } = useLanguage();
  const s = ui.sections.projects;
  // 고객명은 publicCustomerName 플래그를 따르는 helper로만 표기한다.
  const customer = projectCustomerName(lang);

  const meta = [
    { label: t(s.labels.customer), value: customer },
    { label: t(s.labels.industry), value: t(featuredProject.industry) },
    { label: t(s.labels.location), value: t(featuredProject.location) },
  ];

  return (
    <Section id="projects" tone="raised">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <Reveal>
          <SectionHeader index={s.index} eyebrow={s.eyebrow} title={t(s.title)} />
        </Reveal>

        {/* monitoring-frame layout */}
        <Reveal className="mt-10" delay={80}>
          <div className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-navy-900)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-line)] bg-[var(--color-navy-700)] px-4 py-2.5">
              <div className="tag-mono flex items-center gap-2.5 text-[0.625rem] text-[var(--color-ink)]">
                <StatusLed tone="data" />
                PROJECT RECORD
              </div>
              <div className="tag-mono flex items-center gap-2 text-[0.625rem] text-[var(--color-ink-faint)]">
                <span className="h-1 w-1 rounded-full bg-[var(--color-ink-faint)]" aria-hidden="true" />
                <span className="h-1 w-1 rounded-full bg-[var(--color-ink-faint)]" aria-hidden="true" />
                <span className="h-1 w-1 rounded-full bg-[var(--color-ink-faint)]" aria-hidden="true" />
              </div>
            </div>

            <div className="grid lg:grid-cols-12">
              {/* left: meta panel */}
              <div className="border-b border-[var(--color-line)] bg-[var(--color-navy-800)]/60 p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
                <h3 className="font-display text-xl font-bold leading-snug text-[var(--color-ink)] sm:text-2xl">
                  {t(featuredProject.title)}
                </h3>
                <dl className="mt-6 space-y-px border border-[var(--color-line)] bg-[var(--color-line)]">
                  {meta.map((m) => (
                    <div key={m.label} className="flex flex-wrap gap-x-4 bg-[var(--color-navy-900)] px-3.5 py-3">
                      <dt className="tag-mono w-full text-[0.5625rem] text-[var(--color-ink-faint)] sm:w-auto sm:min-w-[64px]">
                        {m.label}
                      </dt>
                      <dd className="text-[0.8125rem] text-[var(--color-ink)]">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* 실제 현장 사진으로 교체 예정 */}
                <div className="mt-6 overflow-hidden border border-[var(--color-line)]">
                  <IndustrialVisual variant="hmi" className="h-[170px] w-full" />
                </div>
              </div>

              {/* right: summary + scope */}
              <div className="p-6 lg:col-span-8">
                <div className="tag-mono text-[0.625rem] text-[var(--color-teal-data)]">
                  {t(s.labels.summary)}
                </div>
                <p className="mt-3 max-w-3xl text-[0.9375rem] leading-[1.85] text-[var(--color-ink-dim)]">
                  {t(featuredProject.summary)}
                </p>

                <div className="tag-mono mt-9 flex items-center gap-2.5 text-[0.625rem] text-[var(--color-teal-data)]">
                  {t(s.labels.scope)}
                  <span className="h-px flex-1 bg-[var(--color-line)]" aria-hidden="true" />
                  <span className="text-[var(--color-ink-faint)]">
                    {String(featuredProject.scope.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-4 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 xl:grid-cols-3">
                  {featuredProject.scope.map((item, i) => (
                    <li
                      key={i}
                      className="group flex items-center gap-3 bg-[var(--color-navy-900)] px-3.5 py-3 transition-colors hover:bg-[var(--color-navy-700)]"
                    >
                      <span className="tag-mono text-[0.5625rem] text-[var(--color-ink-faint)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.8125rem] text-[var(--color-ink-dim)] transition-colors group-hover:text-[var(--color-ink)]">
                        {t(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
