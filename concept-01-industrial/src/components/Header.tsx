import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLang } from "../context/LanguageContext";
import { nav } from "../data/content";
import type { I18n } from "../data/content";

const NAV_ITEMS: { href: string; label: I18n; no: string }[] = [
  { href: "#solutions", label: nav.solutions, no: "03" },
  { href: "#products", label: nav.products, no: "04" },
  { href: "#capability", label: nav.capability, no: "06" },
  { href: "#project", label: nav.projects, no: "07" },
  { href: "#company", label: nav.company, no: "09" },
  { href: "#contact", label: nav.contact, no: "10" },
];

export default function Header() {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 모바일 메뉴 열림 시 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ink/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
        <a href="#top" className="flex items-center" aria-label="EZIO">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[0.8125rem] font-medium tracking-wide text-muted transition-colors hover:text-fg"
            >
              {t(item.label)}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={
              lang === "ko" ? "Switch to English" : "한국어로 전환"
            }
            className="group flex items-center gap-1 border border-line px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.14em] text-muted transition-colors hover:border-orange hover:text-fg"
          >
            <span className={lang === "ko" ? "text-orange" : ""}>KO</span>
            <span className="text-line">/</span>
            <span className={lang === "en" ? "text-orange" : ""}>EN</span>
          </button>

          {/* Hamburger — mobile / tablet */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-line transition-colors hover:border-orange lg:hidden"
          >
            <span
              className={`h-px w-4 bg-fg transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-fg transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-fg transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t bg-ink lg:hidden ${
          open ? "max-h-[calc(100vh-72px)] border-line" : "max-h-0 border-transparent"
        } transition-[max-height] duration-[400ms] ease-out`}
      >
        <nav className="px-5 pb-8 pt-2 sm:px-8" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-line py-4 text-lg font-medium text-fg transition-colors hover:text-orange"
            >
              <span className="font-mono text-[0.6875rem] text-muted">
                {item.no}
              </span>
              {t(item.label)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
