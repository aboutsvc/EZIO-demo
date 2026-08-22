import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import { footer, navItems } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* 브랜드 */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.875rem] leading-[1.8] text-white/60">
              {footer.intro}
            </p>
          </div>

          {/* 사이트맵 */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5 lg:gap-x-4">
            {navItems.map((item) => (
              <div key={item.base}>
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-white/40">
                  {item.children ? (
                    item.label
                  ) : (
                    <Link
                      to={item.path}
                      className="transition-colors duration-150 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </p>
                {item.children && (
                  <ul className="mt-4 space-y-2.5">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className="text-[0.8125rem] text-white/70 transition-colors duration-150 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 회사 정보 — 미확정 항목은 표기하지 않음 */}
        <div className="border-t border-white/12 py-6">
          <p className="text-[0.8125rem] leading-[1.7] text-white/55">
            {footer.companyInfoPending}
          </p>
        </div>

        {/* 데모 고지 + 저작권 */}
        <div className="flex flex-col gap-4 border-t border-white/12 py-7 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-[0.75rem] leading-[1.7] text-white/45">
            {footer.demoNotice}
          </p>
          <p className="text-[0.75rem] whitespace-nowrap text-white/45">{footer.copyright}</p>
        </div>
      </Container>

      {/* 하단 블루 라인 */}
      <div className="h-1 w-full bg-brand" aria-hidden="true" />
    </footer>
  );
}
