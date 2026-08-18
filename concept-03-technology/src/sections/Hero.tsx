import DataFlowChain from "../components/DataFlowChain";
import { StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { brandMessages, positioning, productCtas, nav } from "../data/content";

export default function Hero() {
  const { t } = useLanguage();
  const strip = t(positioning.supporting)
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-12 lg:pt-28"
    >
      {/* backgrounds */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="line-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(900px 520px at 78% 34%, rgba(56,189,248,0.10), transparent 62%), radial-gradient(700px 460px at 12% 88%, rgba(45,212,191,0.07), transparent 62%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--color-navy-900)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="reveal is-visible flex flex-col gap-5">
          <div className="tag-mono flex flex-wrap items-center gap-2.5 text-[var(--color-teal-data)]">
            <StatusLed tone="ok" />
            <span>{t(positioning.primary)}</span>
            <span className="hidden h-px w-8 bg-[var(--color-line)] sm:inline-block" aria-hidden="true" />
            <span className="hidden text-[var(--color-ink-faint)] sm:inline">
              SMART POWER INFRASTRUCTURE
            </span>
          </div>

          <h1 className="font-display max-w-[16ch] text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.035em] text-[var(--color-ink)]">
            {t(brandMessages.technology.headline)}
          </h1>

          <p className="max-w-xl whitespace-pre-line text-[0.9375rem] leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            {t(brandMessages.technology.sub)}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-sm bg-[var(--color-cyan-data)] px-5 py-3 text-[0.875rem] font-semibold text-[#04121f] transition-colors hover:bg-[var(--color-teal-data)]"
            >
              {t(nav.contact)}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2.5 rounded-sm border border-[var(--color-line)] px-5 py-3 text-[0.875rem] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-cyan-data)]/60 hover:bg-[var(--color-navy-800)]"
            >
              {t(productCtas.viewSolutions)}
            </a>
          </div>
        </div>

        {/* animated data flow */}
        <div className="relative mt-10 lg:mt-12">
          <div className="tag-mono mb-3 flex items-center justify-between text-[0.625rem] text-[var(--color-ink-faint)]">
            <span className="flex items-center gap-2">
              <StatusLed tone="data" />
              DATA FLOW
            </span>
            <span className="hidden sm:inline">FIELD → NETWORK → MONITORING</span>
          </div>
          <div className="anim-sweep relative overflow-hidden border border-[var(--color-line)] bg-[var(--color-navy-800)]/50 px-3 py-5 sm:px-6">
            <DataFlowChain />
          </div>
        </div>

        {/* capability strip */}
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--color-line-soft)] pt-4">
          {strip.map((item) => (
            <span
              key={item}
              className="tag-mono flex items-center gap-2 text-[0.625rem] text-[var(--color-ink-faint)]"
            >
              <span className="h-1 w-1 rounded-full bg-[var(--color-cyan-data)]/60" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
