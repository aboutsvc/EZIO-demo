import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { bannerSlides, ui } from "../data/site";
import Scene from "./Scene";

const ROTATE_MS = 6000;

/**
 * 메인 비주얼 배너 — 블루 그라디언트 + 장면 아트워크, 3장 자동 롤링 + 동그란 인디케이터.
 * 이 사이트의 유일한 자동 애니메이션이며 prefers-reduced-motion 시 자동 전환을 멈춘다.
 */
export function MainBanner() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reduceMotion = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = mq.matches;
    if (mq.matches) setPlaying(false);
  }, []);

  const go = useCallback((next: number) => {
    setIndex(((next % bannerSlides.length) + bannerSlides.length) % bannerSlides.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setIndex((p) => (p + 1) % bannerSlides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  const slide = bannerSlides[index];

  return (
    <section
      aria-label={ui.mainBanner.label}
      aria-roledescription="carousel"
      className="relative h-[420px] overflow-hidden bg-brand-navy sm:h-[460px] lg:h-[500px]"
    >
      {/* 배경 아트워크 (슬라이드별 교체) */}
      <div key={slide.id} className="slide-fade absolute inset-0">
        <Scene name={slide.scene} tone="navy" className="absolute inset-0" />
      </div>
      {/* 블루 그라디언트 합성 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(102deg,rgba(15,43,77,0.95)_0%,rgba(21,58,102,0.88)_42%,rgba(27,90,166,0.5)_78%,rgba(27,90,166,0.22)_100%)]"
      />

      {/* 카피 */}
      <div className="relative mx-auto flex h-full max-w-[1200px] items-center px-4">
        <div key={`${slide.id}-copy`} className="slide-fade max-w-[38rem]">
          <p className="inline-block border border-white/35 px-3 py-1 text-[0.75rem] font-semibold tracking-[0.1em] text-white/85">
            {slide.eyebrow}
          </p>
          <h2 className="mt-4 whitespace-pre-line text-[1.625rem] font-bold leading-[1.3] tracking-[-0.03em] text-white sm:text-[2.125rem] lg:text-[2.375rem]">
            {slide.headline}
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/80 sm:text-base">
            {slide.sub}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to={slide.primary.to} className="btn-blue h-11 px-6 text-[0.9375rem]">
              {slide.primary.label}
              <span aria-hidden="true">›</span>
            </Link>
            {slide.secondary ? (
              <Link
                to={slide.secondary.to}
                className="flex h-11 items-center gap-1.5 border border-white/50 px-6 text-[0.9375rem] font-semibold text-white hover:bg-white/10"
              >
                {slide.secondary.label}
                <span aria-hidden="true">›</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {/* 컨트롤 — 동그란 인디케이터 + 좌우 이동 + 정지/재생 */}
      <div className="absolute inset-x-0 bottom-5 z-10">
        <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={ui.mainBanner.prev}
            className="flex h-8 w-8 items-center justify-center border border-white/40 text-white/85 hover:bg-white/15"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <div className="flex items-center gap-2">
            {bannerSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1}${ui.mainBanner.goTo}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                  i === index ? "border-white bg-white" : "border-white/60 bg-transparent hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={ui.mainBanner.next}
            className="flex h-8 w-8 items-center justify-center border border-white/40 text-white/85 hover:bg-white/15"
          >
            <span aria-hidden="true">›</span>
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? ui.mainBanner.pause : ui.mainBanner.play}
            className="flex h-8 w-8 items-center justify-center border border-white/40 text-[0.6875rem] text-white/85 hover:bg-white/15"
          >
            <span aria-hidden="true">{playing ? "❙❙" : "▶"}</span>
          </button>
          <span className="ml-1 text-[0.75rem] tabular-nums text-white/70">
            {String(index + 1).padStart(2, "0")}
            <span className="mx-1 text-white/35">/</span>
            {String(bannerSlides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
