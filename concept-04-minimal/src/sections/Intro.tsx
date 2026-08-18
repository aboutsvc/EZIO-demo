import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { intro, positioning } from "../data/content";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <Section id="intro" index="01" label={t({ ko: "소개", en: "Introduction" })}>
      {/* 큰 인용문형 텍스트 블록 */}
      <Reveal>
        <blockquote className="ko max-w-[24ch] text-large font-medium leading-[1.22] tracking-[-0.02em] sm:max-w-[20ch] lg:max-w-[26ch]">
          {t(positioning.definition)}
        </blockquote>
      </Reveal>

      <div className="mt-16 border-t border-rule pt-8 md:mt-24 md:pt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4 lg:col-span-5">
            <h2 className="ko text-[1.375rem] font-semibold leading-snug tracking-[-0.01em] lg:text-[1.625rem]">
              {t(intro.heading)}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7" delay={100}>
            <p className="ko max-w-[62ch] text-ink-soft">{t(intro.body)}</p>
            <p className="label mt-8">{t(positioning.supporting)}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
