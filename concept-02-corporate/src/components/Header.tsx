import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import { company, nav, positioning } from "../data/content";
import { ui } from "../data/ui";

const NAV_ITEMS = [
  { id: "company", label: nav.company },
  { id: "solutions", label: nav.solutions },
  { id: "products", label: nav.products },
  { id: "capability", label: nav.capability },
  { id: "projects", label: nav.projects },
  { id: "contact", label: nav.contact },
];

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const offset = window.scrollY + 140;
      let current = "";
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= offset) current = item.id;
      });
      setActive(current);
    };
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
    <header className="sticky top-0 z-50">
      {/* 상단 얇은 유틸리티 바 — 언어 토글 위치 */}
      <div className="hidden bg-navy text-white/70 lg:block">
        <Container>
          <div className="flex h-9 items-center justify-between">
            <p className="text-[0.6875rem] tracking-[0.1em]">
              {t(positioning.supporting)}
            </p>
            <div className="flex items-center gap-5">
              <span className="text-[0.6875rem] tracking-[0.04em]">{t(company.addressShort)}</span>
              <LanguageToggle tone="dark" />
            </div>
          </div>
        </Container>
      </div>

      {/* 메인 내비 */}
      <div
        className={`border-b border-line bg-paper/95 backdrop-blur-sm transition-shadow duration-200 ${
          scrolled ? "shadow-[0_1px_12px_rgba(14,27,51,0.08)]" : ""
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between lg:h-[72px]">
            <a href="#top" className="shrink-0" aria-label={company.wordmark}>
              <Logo />
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3.5 py-2 text-[0.875rem] font-medium transition-colors duration-150 hover:text-brand ${
                    active === item.id ? "text-brand" : "text-ink"
                  }`}
                >
                  {t(item.label)}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-px h-[2px] bg-brand transition-opacity duration-150 ${
                      active === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden bg-brand px-5 py-2.5 text-[0.8125rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark lg:inline-block"
                style={{ borderRadius: "3px" }}
              >
                {t(ui.headerCta)}
              </a>

              <div className="lg:hidden">
                <LanguageToggle />
              </div>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? t(ui.closeMenu) : t(ui.openMenu)}
                className="flex h-10 w-10 items-center justify-center border border-line-strong lg:hidden"
                style={{ borderRadius: "3px" }}
              >
                <span className="relative block h-[14px] w-[18px]" aria-hidden="true">
                  <span
                    className={`absolute left-0 block h-[2px] w-full bg-ink transition-all duration-200 ${
                      open ? "top-[6px] rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute top-[6px] left-0 block h-[2px] w-full bg-ink transition-opacity duration-200 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[2px] w-full bg-ink transition-all duration-200 ${
                      open ? "top-[6px] -rotate-45" : "top-[12px]"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* 모바일 메뉴 */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-line bg-paper lg:hidden ${
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0 border-b-0"
        }`}
        style={{ transition: "max-height 0.28s ease" }}
      >
        <Container>
          <nav className="flex flex-col py-2" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-[0.9375rem] font-medium text-ink last:border-b-0"
              >
                {t(item.label)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="my-4 bg-brand px-5 py-3 text-center text-[0.875rem] font-semibold text-white"
              style={{ borderRadius: "3px" }}
            >
              {t(ui.headerCta)}
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
