import Scene from "../../components/Scene";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { useLanguage } from "../../context/LanguageContext";
import { company, intro, positioning } from "../../data/content";
import { ui } from "../../data/site";

/**
 * CEO 인사말
 * ⚠️ 실제 인사말 미수령 — content.ts 의 placeholder 문구를 그대로 사용하고 데모 표기를 유지한다.
 *    장문의 가짜 인사말을 지어내지 않는다.
 */
export function Greeting() {
  const { t } = useLanguage();

  return (
    <SubPage path="/about/greeting">
      <SectionTitle size="lg">{t(ui.about.greetingHeading)}</SectionTitle>

      <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <p className="text-[1.125rem] font-bold leading-[1.6] text-brand-navy sm:text-[1.375rem]">
            &ldquo;{t(company.ceoMessage)}&rdquo;
          </p>

          <div aria-hidden="true" className="mt-5 h-px w-full bg-line" />

          <p className="mt-5 text-[0.9375rem] leading-[1.9] text-ink-2">{t(intro.body)}</p>

          <div className="mt-5 border-l-[3px] border-brand bg-surface px-4 py-3">
            <p className="text-[0.75rem] font-bold tracking-[0.08em] text-brand">
              {t(positioning.primary)}
            </p>
            <p className="mt-1 text-[0.9375rem] leading-[1.8] text-ink-2">
              {t(positioning.definition)}
            </p>
          </div>

          <p className="mt-8 text-right text-[0.9375rem] text-ink">
            <span className="text-muted">{t(ui.about.greetingSign)}</span>
            <strong className="ml-2 text-[1.0625rem] font-bold text-ink">{t(company.ceo)}</strong>
          </p>

          {company.ceoMessage.isPlaceholder ? (
            <p className="mt-6 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
              <span className="mr-2 inline-block border border-line-strong bg-white px-1.5 py-px text-[0.625rem] font-bold text-brand">
                {t(ui.demoBadge)}
              </span>
              {t(ui.about.placeholderNote)}
            </p>
          ) : null}
        </div>

        <div className="order-first md:order-none">
          <div className="relative h-[200px] overflow-hidden border border-line md:h-[260px]">
            <Scene name="EngineerAtPanel" tone="light" className="absolute inset-0" />
          </div>
          <div className="mt-3 border border-line bg-surface px-4 py-3">
            <p className="text-[0.75rem] font-semibold tracking-[0.08em] text-brand">
              {t(positioning.primary)}
            </p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-2">
              {t(positioning.supporting)}
            </p>
          </div>
        </div>
      </div>
    </SubPage>
  );
}

export default Greeting;
