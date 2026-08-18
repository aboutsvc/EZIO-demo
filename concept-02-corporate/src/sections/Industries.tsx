import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { industries } from "../data/content";
import { ui } from "../data/ui";

/** 산업별 심플 라인 아이콘 — 순수 SVG, 외부 아이콘 라이브러리 사용 안 함 */
function IndustryIcon({ id }: { id: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (id) {
    case "oil-gas":
      return (
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
          <path d="M5 27V13l5-3v17M14 27V9l6-3v21M24 27V15l4 2v10M3 27h26" {...common} />
          <path d="M10 14h4M20 12h4" {...common} />
        </svg>
      );
    case "manufacturing":
      return (
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
          <path d="M4 27V14l7 5V14l7 5V9h10v18zM3 27h26" {...common} />
          <path d="M22 14h4M22 19h4" {...common} />
        </svg>
      );
    case "energy":
      return (
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
          <path d="M17 4l-8 13h6l-1 11 8-13h-6z" {...common} />
          <path d="M3 27h26" {...common} />
        </svg>
      );
    case "infrastructure":
    default:
      return (
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
          <path d="M6 27V8l10-4 10 4v19M3 27h26" {...common} />
          <path d="M11 27v-8h10v8M11 13h10" {...common} />
        </svg>
      );
  }
}

export default function Industries() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="border-b border-line bg-paper py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow={ui.industriesEyebrow}
          heading={ui.industriesHeading}
          lead={ui.industriesLead}
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 60}>
              <article
                className="group flex h-full flex-col border border-line bg-paper p-7 transition-all duration-200 hover:border-brand/40 hover:shadow-[0_2px_16px_rgba(14,27,51,0.09)]"
                style={{ borderRadius: "3px" }}
              >
                <span className="text-brand/85 transition-colors duration-200 group-hover:text-brand">
                  <IndustryIcon id={ind.id} />
                </span>
                <h3 className="mt-6 text-[1.125rem] font-bold text-ink">{t(ind.title)}</h3>
                <p className="mt-2 text-[0.875rem] leading-[1.7] text-muted">{t(ind.desc)}</p>
                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-full bg-line transition-colors duration-200 group-hover:bg-brand/40"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
