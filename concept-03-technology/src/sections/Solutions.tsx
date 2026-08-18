import Reveal from "../components/Reveal";
import { Container, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { solutions } from "../data/content";
import { ui } from "../data/ui";

export default function Solutions() {
  const { t } = useLanguage();
  const s0 = ui.sections.solutions;

  return (
    <Section id="solutions">
      <div className="dot-grid-tight pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <Reveal>
          <SectionHeader
            index={s0.index}
            eyebrow={s0.eyebrow}
            title={t(s0.title)}
            desc={t(s0.desc)}
          />
        </Reveal>

        {/* connected node cards */}
        <div className="relative mt-14">
          {/* desktop bus */}
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-[var(--color-line)] lg:block" aria-hidden="true">
            <span className="anim-bus absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-[var(--color-teal-data)]" />
          </div>
          {/* mobile spine */}
          <div
            className="pointer-events-none absolute bottom-6 left-[3px] top-2 w-px bg-[var(--color-line)] lg:hidden"
            aria-hidden="true"
          />

          <div className="grid gap-y-6 lg:grid-cols-5 lg:gap-y-0 lg:pt-12">
            {solutions.map((s, i) => (
              <Reveal key={s.id} delay={i * 70} className="relative pl-7 lg:pl-0">
                {/* desktop drop line */}
                <span
                  className="pointer-events-none absolute -top-12 left-1/2 hidden h-12 w-px bg-[var(--color-line)] lg:block"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute -top-12 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-teal-data)] lg:block"
                  aria-hidden="true"
                />
                {/* mobile node dot */}
                <span
                  className="pointer-events-none absolute left-0 top-2 h-[7px] w-[7px] rounded-full bg-[var(--color-teal-data)] lg:hidden"
                  aria-hidden="true"
                />

                <article className="group h-full border border-[var(--color-line)] bg-[var(--color-navy-800)]/45 p-5 transition-colors duration-300 hover:border-[var(--color-cyan-data)]/45 hover:bg-[var(--color-navy-800)] lg:border-l-0 lg:first:border-l">
                  <div className="flex items-center justify-between">
                    <span className="tag-mono text-[0.6875rem] text-[var(--color-cyan-data)]">
                      {s.no}
                    </span>
                    <StatusLed tone="idle" pulse={false} className="transition-colors group-hover:bg-[var(--color-teal-data)]" />
                  </div>
                  <h3 className="font-display mt-4 text-[1.0625rem] font-bold leading-snug text-[var(--color-ink)]">
                    {t(s.title)}
                  </h3>
                  <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-[var(--color-ink-dim)]">
                    {t(s.desc)}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--color-line-soft)] pt-4">
                    {s.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="rounded-sm border border-[var(--color-line)] px-2 py-1 text-[0.6875rem] text-[var(--color-ink-dim)] transition-colors group-hover:border-[var(--color-line)] group-hover:text-[var(--color-ink)]"
                      >
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
