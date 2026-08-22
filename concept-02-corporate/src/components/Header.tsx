import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import { company, headerCta, headerSubCta, navItems, ui } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 라우트 이동 시 모바일 드로어 닫기
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (base: string) => pathname === base || pathname.startsWith(`${base}/`);

  return (
    <header className="sticky top-0 z-50">
      {/* 상단 얇은 유틸리티 바 */}
      <div className="hidden bg-navy text-white/70 lg:block">
        <Container>
          <div className="flex h-9 items-center justify-between">
            <p className="text-[0.6875rem] tracking-[0.1em]">{company.headerTagline}</p>
            <Link
              to={headerSubCta.path}
              className="text-[0.6875rem] font-semibold tracking-[0.08em] text-white/80 transition-colors duration-150 hover:text-white"
            >
              {headerSubCta.label}
            </Link>
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
            <Link to="/" className="shrink-0" aria-label={`${company.wordmark} 홈`}>
              <Logo />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="주 메뉴">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.base} className="group relative">
                    <NavLink
                      to={item.path}
                      className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[0.875rem] font-medium transition-colors duration-150 hover:text-brand ${
                        isActive(item.base) ? "text-brand" : "text-ink"
                      }`}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        fill="none"
                        aria-hidden="true"
                        className="mt-px transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
                      >
                        <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 -bottom-px h-[2px] bg-brand transition-opacity duration-150 ${
                          isActive(item.base) ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </NavLink>

                    {/* 드롭다운 */}
                    <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul
                        className="min-w-[220px] border border-line bg-paper py-2 shadow-[0_8px_28px_rgba(14,27,51,0.14)]"
                        style={{ borderRadius: "3px" }}
                      >
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              className={({ isActive: active }) =>
                                `block px-5 py-2.5 text-[0.8438rem] transition-colors duration-150 hover:bg-brand-soft hover:text-brand ${
                                  active ? "font-semibold text-brand" : "font-medium text-ink"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.base}
                    to={item.path}
                    className={`relative px-3.5 py-2 text-[0.875rem] font-medium transition-colors duration-150 hover:text-brand ${
                      isActive(item.base) ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-px h-[2px] bg-brand transition-opacity duration-150 ${
                        isActive(item.base) ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </NavLink>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to={headerCta.path}
                className="hidden bg-brand px-5 py-2.5 text-[0.8125rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark lg:inline-block"
                style={{ borderRadius: "3px" }}
              >
                {headerCta.label}
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? ui.closeMenu : ui.openMenu}
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

      {/* 모바일 드로어 */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-line bg-paper lg:hidden ${
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0 border-b-0"
        }`}
        style={{ transition: "max-height 0.28s ease" }}
      >
        <Container>
          <nav className="flex flex-col py-2" aria-label="모바일 메뉴">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.base} className="border-b border-line py-3.5 last:border-b-0">
                  <p className="text-[0.75rem] font-semibold tracking-[0.1em] text-brand">
                    {item.label}
                  </p>
                  <ul className="mt-2 flex flex-col">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className={({ isActive: active }) =>
                            `block py-2 text-[0.9375rem] ${
                              active ? "font-semibold text-brand" : "font-medium text-ink"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink
                  key={item.base}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive: active }) =>
                    `border-b border-line py-3.5 text-[0.9375rem] last:border-b-0 ${
                      active ? "font-semibold text-brand" : "font-medium text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="my-4 flex flex-col gap-2.5">
              <Link
                to={headerCta.path}
                onClick={() => setOpen(false)}
                className="bg-brand px-5 py-3 text-center text-[0.875rem] font-semibold text-white"
                style={{ borderRadius: "3px" }}
              >
                {headerCta.label}
              </Link>
              <Link
                to={headerSubCta.path}
                onClick={() => setOpen(false)}
                className="border border-line-strong px-5 py-3 text-center text-[0.875rem] font-semibold text-ink"
                style={{ borderRadius: "3px" }}
              >
                {headerSubCta.label}
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
