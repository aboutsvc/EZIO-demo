import { Link } from "react-router-dom";
import { footerContent } from "../data/content";
import { navSections } from "../data/site";
import Logo from "./Logo";

/**
 * 네이비 푸터 — EGO 소개문 + 데모 고지 + 카피라이트
 * ⚠️ 연도·주소·전화·사업자번호는 미확정이므로 표기하지 않는다.
 */
export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/70">
      {/* 사이트맵 라인 */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="sr-only">사이트맵</h2>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 py-3 text-[0.8125rem]">
            {navSections.map((section) => (
              <li key={section.path}>
                <Link to={section.path} className="hover:text-white">
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[34rem]">
          <Logo variant="navy" />
          <p className="mt-4 text-[0.8125rem] leading-relaxed">{footerContent.intro}</p>
          <p className="mt-1 text-[0.75rem] text-white/45">{footerContent.pendingLine}</p>
          <p className="mt-2 text-[0.8125rem] text-white/50">{footerContent.copyright}</p>
        </div>

        <div className="max-w-[380px] border border-white/15 bg-white/5 p-4">
          <p className="text-[0.75rem] leading-relaxed text-white/60">{footerContent.demoNotice}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link to="/support/inquiry" className="btn-blue h-9 text-[0.8125rem]">
              제품·견적 문의
            </Link>
            <Link
              to="/support/as"
              className="flex h-9 items-center justify-center border border-white/40 text-[0.8125rem] font-semibold text-white/85 hover:bg-white/10"
            >
              A/S 접수
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
