import Reveal from "../components/Reveal";
import { containerClass } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { brandMessages, positioning } from "../data/content";

export default function Hero() {
  const { t } = useLanguage();

  const headlineLines = t(brandMessages.minimal.headline).split("\n");
  const capabilityList = t(brandMessages.minimal.sub).split("\n");
  // 우측 하단 소형 태그라인 — 공유 콘텐츠의 브랜드 서브카피 재사용
  const tagline = t(brandMessages.corporate.sub);

  return (
    <section
      id="top"
      className="flex min-h-[100svh] flex-col justify-between pt-24 pb-10 md:pt-28 md:pb-14"
    >
      <div className={containerClass}>
        <Reveal className="label" delay={80}>
          {t(positioning.primary)}
        </Reveal>
      </div>

      {/* 초대형 3줄 스택 — 뷰포트 대부분을 차지한다 */}
      <div className={`${containerClass} flex-1 flex items-center`}>
        <h1 className="w-full font-extrabold tracking-[-0.035em] text-mega leading-[0.95]">
          {headlineLines.map((line, i) => (
            <Reveal key={line} as="span" className="block" delay={i * 110}>
              {line}
            </Reveal>
          ))}
        </h1>
      </div>

      <div className={containerClass}>
        <div className="border-t border-rule pt-6 md:pt-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Reveal delay={120}>
              <ul className="flex flex-col gap-1 sm:gap-1.5">
                {capabilityList.map((item) => (
                  <li
                    key={item}
                    className="label text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220} className="sm:max-w-[22rem] sm:text-right">
              <p className="ko text-[0.9375rem] leading-relaxed text-ink-soft">
                {tagline}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
