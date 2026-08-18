import Logo from "./Logo";
import Reveal from "./Reveal";
import { containerClass } from "./Section";
import { useLanguage } from "../context/LanguageContext";
import { footer, positioning } from "../data/content";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-paper text-ink">
      <div className={containerClass}>
        <div className="border-t border-rule pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
            <Reveal className="min-w-0">
              {/* Demo Wordmark — 대형 표기 */}
              <Logo className="text-[clamp(3rem,9vw,7rem)] leading-[0.85] tracking-[0.02em]" />
              <p className="label mt-6">{t(positioning.primary)}</p>
            </Reveal>

            <Reveal delay={80} className="md:max-w-[24rem] md:text-right">
              <p className="ko text-[0.9375rem] font-medium">
                {t(footer.companyLine)}
              </p>
              <p className="ko mt-2 text-[0.875rem] leading-relaxed text-ink-soft">
                {t(footer.address)}
              </p>
              <a
                href="#top"
                className="link-slide label mt-8 inline-block"
              >
                {t({ ko: "맨 위로", en: "Back to top" })} ↑
              </a>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-16">
            <p className="ko text-[0.8125rem] text-ink-soft">
              {t(footer.demoNotice)}
            </p>
            <p className="text-[0.8125rem] text-ink-soft">
              {t(footer.copyright)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
