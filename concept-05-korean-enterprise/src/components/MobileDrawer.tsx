import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { navSections, type NavItem, type NavSection } from "../data/navigation";
import { ui } from "../data/ui";
import { company } from "../data/content";
import { useNavItemAction } from "../hooks/useSectionNav";
import Logo from "./Logo";

interface Props {
  open: boolean;
  onClose: () => void;
}

/** 모바일 전체화면 드로어 — 섹션별 아코디언 (한국 기업 사이트 모바일 GNB 문법) */
export default function MobileDrawer({ open, onClose }: Props) {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const navItem = useNavItemAction();
  const [expanded, setExpanded] = useState<string | null>(null);

  // 현재 페이지에 해당하는 섹션을 기본 펼침
  useEffect(() => {
    if (!open) return;
    const current = navSections.find((s) => location.pathname.startsWith(s.path));
    setExpanded(current ? current.id : navSections[0].id);
  }, [open, location.pathname]);

  // 드로어가 열려 있는 동안 배경 스크롤 잠금 + ESC 닫기
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleItem = (section: NavSection, item: NavItem) => {
    navItem(section, item);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-paper lg:hidden">
      {/* 드로어 헤더 */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
        <Link to="/" onClick={onClose} aria-label={t(ui.goHome)}>
          <Logo />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label={t(ui.closeMenu)}
          className="flex h-10 w-10 items-center justify-center text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" fill="none" />
          </svg>
        </button>
      </div>

      {/* 언어 토글 */}
      <div className="flex shrink-0 items-center gap-2 border-b border-line bg-surface px-5 py-3">
        <span className="text-xs text-muted">{t(ui.languageLabel)}</span>
        <div className="ml-auto flex overflow-hidden rounded-sm border border-line-strong">
          {(["ko", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`px-3 py-1 text-xs font-semibold uppercase transition-colors ${
                lang === l ? "bg-brand text-white" : "bg-white text-muted"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* 아코디언 메뉴 */}
      <nav className="flex-1 overflow-y-auto overscroll-contain" aria-label={t(ui.allMenus)}>
        <ul>
          {navSections.map((section) => {
            const isOpen = expanded === section.id;
            return (
              <li key={section.id} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : section.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-[1.05rem] font-semibold text-ink">{t(section.label)}</span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`h-5 w-5 text-faint transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="bg-surface pb-2">
                    <li>
                      <Link
                        to={section.path}
                        onClick={onClose}
                        className="block px-5 py-2.5 text-sm font-medium text-brand"
                      >
                        {t(section.label)} {lang === "ko" ? "메인" : "Home"}
                      </Link>
                    </li>
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => handleItem(section, item)}
                          className="block w-full px-5 py-2.5 text-left text-sm text-muted"
                        >
                          {t(item.label)}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="px-5 py-6">
          <Link
            to="/support"
            state={{ scrollTo: "contact" }}
            onClick={onClose}
            className="block w-full bg-gradient-to-r from-brand to-brand-sky py-3.5 text-center text-sm font-semibold text-white"
          >
            {t(ui.inquiry)}
          </Link>
          <p className="mt-4 text-[0.7rem] leading-relaxed text-faint">{t(company.address)}</p>
        </div>
      </nav>
    </div>
  );
}
