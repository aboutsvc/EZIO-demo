import { RefineryDusk } from "../components/scenes";
import { useLang } from "../context/LanguageContext";
import { brandMessages, positioning } from "../data/content";

// 하단 mono 라벨 스트립 — positioning.supporting과 동일 축 (영문 고정 라벨)
const STRIP = [
  "POWER DISTRIBUTION",
  "PROTECTION",
  "MONITORING",
  "AUTOMATION",
  "ENGINEERING",
];

export default function Hero() {
  const { t } = useLang();
  const headline = t(brandMessages.industrial.headline);
  const sub = t(brandMessages.industrial.sub);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-[72px]"
    >
      {/* 배경: 정유 플랜트 황혼 씬 — 추후 실제 현장 사진으로 대체 가능한 자리 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <RefineryDusk tone="dark" className="h-full w-full" />
      </div>
      {/* 수직 스크림 — 상단 헤더/하단 스트립 대비 확보 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(12,14,16,0.88)_0%,rgba(12,14,16,0.70)_9%,rgba(12,14,16,0.26)_34%,rgba(12,14,16,0.32)_66%,rgba(12,14,16,0.90)_100%)]"
      />
      {/* 수평 스크림 — 좌측 카피 가독성 확보 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(12,14,16,0.82)_0%,rgba(12,14,16,0.56)_42%,rgba(12,14,16,0.04)_100%)]"
      />
      <div
        aria-hidden="true"
        className="eng-grid pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 sm:px-8 lg:px-16">
        {/* 상단 도면 라벨 */}
        <div className="flex items-center justify-between border-b border-line/60 py-5">
          <span className="mono-label">{t(positioning.primary)}</span>
          {/* 도면 라벨 장식 — 인증/등급 표기가 아님 */}
          <span className="mono-label text-muted/60">DWG NO. EZ-2026-01</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <div className="reveal is-in max-w-[1080px]">
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-orange" />
              <span className="mono-label text-orange">EZIO</span>
            </div>

            <h1 className="max-w-[16ch] text-[clamp(2.25rem,8.5vw,6.5rem)] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-fg sm:text-[clamp(3.5rem,7vw,6.5rem)]">
              {headline}
            </h1>

            <p className="mt-8 max-w-[46ch] whitespace-pre-line text-[0.975rem] leading-[1.9] text-muted sm:text-base">
              {sub}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-orange px-7 py-3.5 font-mono text-[0.75rem] tracking-[0.14em] text-ink transition-colors hover:bg-fg"
              >
                <span>PROJECT INQUIRY</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#solutions"
                className="group relative inline-flex items-center gap-3 border border-line px-7 py-3.5 font-mono text-[0.75rem] tracking-[0.14em] text-fg transition-colors hover:border-orange"
              >
                <span>SOLUTIONS</span>
                <span
                  aria-hidden="true"
                  className="text-muted transition-colors group-hover:text-orange"
                >
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="hidden items-center gap-3 pb-6 md:flex">
          <span aria-hidden="true" className="h-px w-16 bg-line" />
          <span className="mono-label text-muted/70">SCROLL</span>
          <span
            aria-hidden="true"
            className="block h-8 w-px bg-[linear-gradient(to_bottom,#F26B1D,transparent)]"
          />
        </div>
      </div>

      {/* 하단 mono 라벨 스트립 */}
      <div className="relative border-y border-line bg-ink/80 backdrop-blur-[2px]">
        <div className="mx-auto w-full max-w-[1440px] overflow-hidden px-5 sm:px-8 lg:px-16">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 py-4 sm:gap-x-8">
            {STRIP.map((item, i) => (
              <li key={item} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-3 w-px bg-line sm:block"
                  />
                )}
                <span className="mono-label text-[0.625rem] sm:text-[0.6875rem]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
