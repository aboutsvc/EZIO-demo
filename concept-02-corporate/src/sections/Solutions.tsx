import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { contact, productCtas, solutions } from "../data/content";
import { ui } from "../data/ui";

export default function Solutions() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="border-b border-line bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow={ui.solutionsEyebrow}
          heading={ui.solutionsHeading}
          lead={ui.solutionsLead}
        />

        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <article
                className="group h-full bg-paper p-7 transition-shadow duration-200 hover:shadow-[0_2px_16px_rgba(14,27,51,0.09)] lg:p-8"
                style={{ borderRadius: "0" }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[0.75rem] font-bold tracking-[0.16em] text-brand">
                    {s.no}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-line-strong transition-colors duration-200 group-hover:bg-brand"
                  />
                </div>

                <h3 className="mt-5 text-[1.25rem] leading-snug font-bold text-ink">
                  {t(s.title)}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.75] text-muted">{t(s.desc)}</p>

                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[0.8125rem] text-ink/80">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] block h-[3px] w-[3px] shrink-0 bg-brand"
                      />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* 마지막 셀 — 기술 문의 안내 (구매 UI 아님) */}
          <Reveal delay={solutions.length * 60}>
            <div className="flex h-full flex-col justify-between bg-navy p-7 lg:p-8">
              <div>
                <span className="text-[0.75rem] font-bold tracking-[0.16em] text-white/50">—</span>
                <h3 className="mt-5 text-[1.25rem] leading-snug font-bold text-white">
                  {t(productCtas.technicalInquiry)}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.75] text-white/60">
                  {t(contact.sub)}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 self-start border border-white/30 px-5 py-2.5 text-[0.8125rem] font-semibold text-white transition-colors duration-150 hover:bg-white hover:text-navy"
                style={{ borderRadius: "3px" }}
              >
                {t(productCtas.requestInfo)}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
