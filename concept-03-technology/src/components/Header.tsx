import { useEffect, useState } from "react";
import Logo from "./Logo";
import { StatusLed } from "./ui";
import { useLanguage } from "../context/LanguageContext";
import { nav, positioning } from "../data/content";

const NAV_ITEMS = [
  { href: "#company", label: nav.company },
  { href: "#solutions", label: nav.solutions },
  { href: "#products", label: nav.products },
  { href: "#capability", label: nav.capability },
  { href: "#projects", label: nav.projects },
  { href: "#contact", label: nav.contact },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[var(--color-line)] bg-[var(--color-navy-900)]/95 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <a href="#hero" className="flex items-center gap-3" aria-label={t(positioning.primary)}>
          <Logo />
          <span className="tag-mono hidden text-[0.625rem] text-[var(--color-ink-faint)] xl:inline">
            {t(positioning.primary)}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-[0.8125rem] font-medium text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-ink)]"
            >
              {t(item.label)}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--color-cyan-data)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <StatusLed tone="ok" />
            <span className="tag-mono text-[0.625rem] text-[var(--color-ink-faint)]">
              SYSTEM ONLINE
            </span>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "ko" ? "Switch to English" : "한국어로 전환"}
            className="tag-mono flex items-center gap-1 rounded-sm border border-[var(--color-line)] px-2.5 py-1.5 text-[0.6875rem] transition-colors hover:border-[var(--color-cyan-data)]/60"
          >
            <span className={lang === "ko" ? "text-[var(--color-cyan-data)]" : "text-[var(--color-ink-faint)]"}>
              KO
            </span>
            <span className="text-[var(--color-ink-faint)]">/</span>
            <span className={lang === "en" ? "text-[var(--color-cyan-data)]" : "text-[var(--color-ink-faint)]"}>
              EN
            </span>
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--color-line)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-full bg-[var(--color-ink)] transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-[var(--color-ink)] transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-[var(--color-ink)] transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-navy-900)] transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[70vh]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2 sm:px-8" aria-label="Mobile">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b border-[var(--color-line-soft)] py-3.5 text-[0.9375rem] text-[var(--color-ink-dim)] last:border-b-0"
            >
              <span className="tag-mono text-[0.625rem] text-[var(--color-cyan-data)]/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              {t(item.label)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
