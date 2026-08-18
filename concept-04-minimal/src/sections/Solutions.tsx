import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { productCategories, productCtas, solutions } from "../data/content";

export default function Solutions() {
  const { t } = useLanguage();

  return (
    <Section
      id="solutions"
      index="02"
      label={t({ ko: "솔루션", en: "Solutions" })}
    >
      {/* 인덱스 리스트 — 대형 텍스트 로우. hover 시 우측에 아이템 태그 표시 */}
      <ul className="border-t border-rule">
        {solutions.map((s, i) => (
          <Reveal as="li" key={s.id} delay={i * 60} className="border-b border-rule">
            <div className="group grid grid-cols-1 items-baseline gap-3 py-7 md:grid-cols-12 md:gap-8 md:py-9">
              <div className="md:col-span-6 lg:col-span-5">
                <div className="flex items-baseline gap-5 md:gap-8">
                  <span className="label text-accent transition-colors duration-300">
                    {s.no}
                  </span>
                  <h3 className="ko text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.25rem] lg:text-[2.75rem]">
                    <span className="link-slide">{t(s.title)}</span>
                  </h3>
                </div>
              </div>

              <div className="md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-6">
                <p className="ko max-w-[46ch] text-ink-soft md:opacity-90">
                  {t(s.desc)}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 transition-opacity duration-500 md:mt-4 md:opacity-0 md:group-hover:opacity-100">
                  {s.items.map((item) => (
                    <li key={t(item)} className="label">
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* Products — 별도 섹션이 아닌 Solutions 내 카테고리 인덱스로 통합 */}
      <div className="mt-20 md:mt-28">
        <Reveal className="label mb-8 md:mb-12">
          {t({ ko: "제품 카테고리", en: "Product Categories" })}
        </Reveal>
        <div className="grid grid-cols-1 gap-x-10 border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat, i) => (
            <Reveal
              key={cat.id}
              delay={i * 60}
              className="border-b border-rule py-7 lg:border-b-0 lg:pb-0"
            >
              <h4 className="ko text-[1.0625rem] font-semibold tracking-[-0.01em]">
                {t(cat.title)}
              </h4>
              <p className="ko mt-2 max-w-[34ch] text-[0.875rem] text-ink-soft">
                {t(cat.desc)}
              </p>
              <ul className="mt-5 space-y-1.5">
                {cat.products.map((p) => (
                  <li key={t(p)} className="text-[0.875rem] text-ink-soft">
                    {t(p)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 md:mt-16">
          <a href="#contact" className="link-accent label">
            {t(productCtas.requestInfo)}
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
