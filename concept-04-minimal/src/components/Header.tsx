import { useEffect, useState } from "react";
import Logo from "./Logo";
import { containerClass } from "./Section";
import { useLanguage } from "../context/LanguageContext";
import { nav } from "../data/content";

// 내비게이션 최소 구성: 로고 + 4개 링크 + 언어 토글
const links = [
  { href: "#solutions", i18n: nav.solutions },
  { href: "#projects", i18n: nav.projects },
  { href: "#company", i18n: nav.company },
  { href: "#contact", i18n: nav.contact },
];

export default function Header() {
  const { t, lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`bg-paper/90 backdrop-blur-[2px] transition-colors duration-500 ${
          scrolled ? "border-b border-rule" : "border-b border-transparent"
        }`}
      >
        <div className={containerClass}>
          <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
            <a
              href="#top"
              className="text-ink"
              onClick={() => setOpen(false)}
              aria-label={t({ ko: "홈으로", en: "Back to top" })}
            >
              <Logo className="text-[1.0625rem]" />
            </a>

            <div className="flex items-center gap-6 md:gap-10">
              <nav className="hidden md:block" aria-label="Primary">
                <ul className="flex items-center gap-8 lg:gap-12">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="link-slide ko text-[0.8125rem] font-medium tracking-[0.1em] text-ink"
                      >
                        {t(link.i18n)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <button
                type="button"
                onClick={toggle}
                className="label text-ink transition-colors duration-300 hover:text-accent"
                aria-label={
                  lang === "ko" ? "Switch to English" : "한국어로 전환"
                }
              >
                <span className={lang === "ko" ? "" : "text-ink-soft"}>KO</span>
                <span className="mx-1 text-rule">/</span>
                <span className={lang === "en" ? "" : "text-ink-soft"}>EN</span>
              </button>

              {/* 모바일 메뉴 토글 — 두 줄 미니멀 마크 */}
              <button
                type="button"
                className="flex h-8 w-8 flex-col items-end justify-center gap-[6px] md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={t({ ko: "메뉴", en: "Menu" })}
              >
                <span
                  className={`block h-px bg-ink transition-all duration-300 ${
                    open ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"
                  }`}
                />
                <span
                  className={`block h-px bg-ink transition-all duration-300 ${
                    open ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 — 전체 화면, 대형 타이포 */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-16 bg-paper transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className={containerClass} aria-label="Mobile">
          <ul className="border-t border-rule pt-4">
            {links.map((link) => (
              <li key={link.href} className="border-b border-rule">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="ko block py-5 text-[1.75rem] font-semibold tracking-tight"
                >
                  {t(link.i18n)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
