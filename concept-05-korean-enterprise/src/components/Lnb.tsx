import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { NavSection } from "../data/navigation";
import { ui } from "../data/ui";
import { useNavItemAction } from "../hooks/useSectionNav";

interface Props {
  section: NavSection;
  /** 라우트로 결정되는 활성 항목 (제품 카테고리). 없으면 스크롤 위치로 판단한다. */
  activeId?: string;
}

/** 현재 화면에 보이는 앵커 섹션을 추적 (LNB 하이라이트용) */
function useScrollSpy(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (!enabled || ids.length === 0) return;
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-150px 0px -62% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join("|"), enabled]);

  return active;
}

/**
 * 좌측 LNB (데스크톱) / 상단 가로 스크롤 탭 (모바일).
 * 한국 기업 사이트 서브페이지의 핵심 내비게이션 문법.
 */
export default function Lnb({ section, activeId }: Props) {
  const { t } = useLanguage();
  const navItem = useNavItemAction();
  const anchorIds = section.items.filter((i) => i.anchor).map((i) => i.anchor!);
  const spy = useScrollSpy(anchorIds, !activeId);
  const current = activeId ?? spy;

  return (
    <>
      {/* Desktop — 좌측 세로 메뉴 */}
      <nav aria-label={t(ui.lnbLabel)} className="hidden lg:block">
        <div className="sticky top-[128px]">
          <div className="bg-gradient-to-br from-brand to-brand-dark px-6 py-7">
            <p
              className="text-[0.65rem] font-semibold tracking-[0.2em] text-white/55 uppercase"
              style={{ fontFamily: "var(--font-en)" }}
            >
              {section.id}
            </p>
            <p className="mt-1.5 text-[1.3rem] font-bold text-white">{t(section.label)}</p>
          </div>
          <ul className="border-x border-b border-line">
            {section.items.map((item) => {
              const key = item.anchor ?? item.id;
              const isActive = current === key || current === item.id;
              return (
                <li key={item.id} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    onClick={() => navItem(section, item)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex w-full items-center justify-between px-5 py-3.5 text-left text-[0.88rem] transition-colors ${
                      isActive
                        ? "bg-brand-soft font-semibold text-brand"
                        : "text-muted hover:bg-surface hover:text-ink"
                    }`}
                  >
                    <span>{t(item.label)}</span>
                    {isActive && (
                      <span aria-hidden="true" className="text-brand">
                        ›
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile — 가로 스크롤 탭 */}
      <nav
        aria-label={t(ui.lnbLabel)}
        className="sticky top-16 z-30 -mx-5 min-w-0 overflow-hidden border-b border-line bg-paper/95 backdrop-blur lg:hidden"
      >
        <ul className="flex w-full gap-1 overflow-x-auto px-4 no-scrollbar">
          {section.items.map((item) => {
            const key = item.anchor ?? item.id;
            const isActive = current === key || current === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => navItem(section, item)}
                  aria-current={isActive ? "true" : undefined}
                  className={`border-b-2 px-3 py-3 text-[0.82rem] whitespace-nowrap transition-colors ${
                    isActive
                      ? "border-brand font-semibold text-brand"
                      : "border-transparent text-muted"
                  }`}
                >
                  {t(item.label)}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
