import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { industries } from "../data/content";

export default function Industries() {
  const { t } = useLanguage();

  return (
    <Section
      id="industries"
      index="04"
      label={t({ ko: "산업 분야", en: "Industries" })}
    >
      {/* 4개 단어 대형 나열 */}
      <ul className="border-t border-rule">
        {industries.map((ind, i) => (
          <Reveal
            as="li"
            key={ind.id}
            delay={i * 70}
            className="group border-b border-rule"
          >
            <div className="flex flex-col gap-2 py-8 md:flex-row md:items-end md:justify-between md:gap-10 md:py-10">
              <h3 className="ko text-huge font-extrabold leading-[0.95] tracking-[-0.04em]">
                {t(ind.title)}
              </h3>
              <p className="ko shrink-0 pb-1 text-ink-soft transition-opacity duration-500 md:max-w-[20rem] md:text-right md:opacity-60 md:group-hover:opacity-100">
                {t(ind.desc)}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
