import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { slides } from "../data/home";
import { ui } from "../data/ui";
import * as Scenes from "./scenes";
import Container from "./Container";

const AUTOPLAY_MS = 6000;

// 장면 아트워크 — 실제 현장 사진 수령 시 동일 위치를 <img>/<picture>로 교체한다.
const sceneMap = {
  RefineryDusk: Scenes.RefineryDusk,
  SwitchgearRoom: Scenes.SwitchgearRoom,
  ControlRoom: Scenes.ControlRoom,
  SubstationYard: Scenes.SubstationYard,
  PlantAerial: Scenes.PlantAerial,
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/** 메인 비주얼 슬라이더 — 풀와이드 3슬라이드, 6초 자동 롤링 + 화살표 + 바 인디케이터 + 일시정지 */
export default function MainSlider() {
  const { t } = useLanguage();
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const playing = !paused && !reducedMotion;

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [playing, index]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <section
      aria-label={t(ui.sliderLabel)}
      aria-roledescription="carousel"
      className="relative overflow-hidden bg-deep"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative h-[430px] sm:h-[490px] lg:h-[560px]">
        {slides.map((slide, i) => {
          const Scene = sceneMap[slide.scene];
          const active = i === index;
          return (
            <div
              key={slide.id}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-700 ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className="absolute inset-0">
                <Scene tone="navy" />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#061225]/95 via-[#0a1d38]/80 to-[#0a1d38]/20"
              />

              <Container className="relative h-full">
                <div className="flex h-full max-w-2xl flex-col justify-center pb-16 lg:pb-20">
                  {active && (
                    <div key={`${slide.id}-${index}`} className="slide-in">
                      <p
                        className="text-[0.72rem] font-semibold tracking-[0.12em] text-brand-sky uppercase lg:text-[0.8rem]"
                        style={{ fontFamily: "var(--font-en)" }}
                      >
                        {t(slide.eyebrow)}
                      </p>
                      <h2 className="mt-4 text-[2rem] leading-[1.2] font-bold text-white sm:text-[2.6rem] lg:text-[3.2rem]">
                        {t(slide.headline)}
                      </h2>
                      <p className="mt-5 max-w-xl text-[0.92rem] leading-relaxed whitespace-pre-line text-white/75 lg:text-[1.05rem]">
                        {t(slide.sub)}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          to={slide.cta.to}
                          className="bg-gradient-to-r from-brand to-brand-sky px-7 py-3.5 text-[0.9rem] font-semibold text-white transition-opacity hover:opacity-90"
                        >
                          {t(slide.cta.label)}
                        </Link>
                        {slide.secondary && (
                          <Link
                            to={slide.secondary.to}
                            className="border border-white/35 px-7 py-3.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-white hover:text-brand"
                          >
                            {t(slide.secondary.label)}
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Container>
            </div>
          );
        })}

        {/* ── 컨트롤 ── */}
        <Container className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="pointer-events-auto flex items-center gap-4 border-t border-white/15 py-4">
            {/* 바 인디케이터 */}
            <ul className="flex flex-1 items-center gap-2 sm:gap-4">
              {slides.map((slide, i) => {
                const active = i === index;
                return (
                  <li key={slide.id} className="min-w-0 flex-1">
                    <button
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`${t(ui.sliderGoTo)} ${i + 1}`}
                      aria-current={active ? "true" : undefined}
                      className="group block w-full text-left"
                    >
                      <span
                        className={`relative block h-[3px] w-full overflow-hidden ${
                          active ? "bg-white/25" : "bg-white/15 group-hover:bg-white/30"
                        } ${active && playing ? "bar-progress" : ""}`}
                      >
                        {active && !playing && (
                          <span className="absolute inset-0 bg-white" aria-hidden="true" />
                        )}
                      </span>
                      <span
                        className={`mt-2 hidden truncate text-[0.72rem] sm:block ${
                          active ? "font-semibold text-white" : "text-white/45"
                        }`}
                      >
                        {t(slide.eyebrow)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* 번호 + 화살표 + 일시정지 */}
            <div className="flex shrink-0 items-center gap-1.5">
              <span
                className="mr-2 text-[0.78rem] tabular-nums text-white/60"
                style={{ fontFamily: "var(--font-en)" }}
              >
                <span className="font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mx-1 text-white/30">/</span>
                {String(slides.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label={t(ui.sliderPrev)}
                className="flex h-9 w-9 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-brand"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" fill="none" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused || reducedMotion ? t(ui.sliderPlay) : t(ui.sliderPause)}
                aria-pressed={paused}
                disabled={reducedMotion}
                className="flex h-9 w-9 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-brand disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                {playing ? (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M8 5h3v14H8zM13 5h3v14h-3z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M8 5l11 7-11 7z" fill="currentColor" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label={t(ui.sliderNext)}
                className="flex h-9 w-9 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-brand"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" fill="none" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
