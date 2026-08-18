import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { company, footer } from "../data/content";
import { navSections, ui } from "../data/site";
import Logo from "./Logo";

/** 네이비 푸터 — 회사정보 한 줄(주소·대표자) + 데모 고지 + 카피라이트 */
export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-white/70">
      {/* 사이트맵 라인 */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="sr-only">{t(ui.footer.sitemapHeading)}</h2>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 py-3 text-[0.8125rem]">
            {navSections.map((section) => (
              <li key={section.path}>
                <Link to={section.path} className="hover:text-white">
                  {t(section.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo variant="navy" />
          <p className="mt-4 text-[0.8125rem] leading-relaxed">
            {t(footer.companyLine)}
            <span aria-hidden="true" className="mx-2 text-white/25">
              |
            </span>
            {t(company.address)}
          </p>
          <p className="mt-1 text-[0.8125rem] text-white/50">{t(footer.copyright)}</p>
        </div>

        <div className="max-w-[380px] border border-white/15 bg-white/5 p-4">
          <p className="text-[0.75rem] leading-relaxed text-white/60">{t(footer.demoNotice)}</p>
          <Link
            to="/support#inquiry"
            className="btn-blue mt-3 h-9 w-full text-[0.8125rem]"
          >
            {t(ui.main.inquiryCta)}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
