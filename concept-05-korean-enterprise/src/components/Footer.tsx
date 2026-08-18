import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { company, footer } from "../data/content";
import { navSections, type NavItem, type NavSection } from "../data/navigation";
import { ui } from "../data/ui";
import { useNavItemAction } from "../hooks/useSectionNav";
import Container from "./Container";
import Logo from "./Logo";

/** 다층 푸터 — 상단 사이트맵 링크 컬럼 + 하단 회사정보/데모 고지 */
export default function Footer() {
  const { t } = useLanguage();
  const navItem = useNavItemAction();

  const handle = (section: NavSection, item: NavItem) => navItem(section, item);

  return (
    <footer id="site-footer" className="bg-deep text-white/70">
      {/* 상단 사이트맵 */}
      <div className="border-b border-white/10">
        <Container>
          <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
            {navSections.map((section) => (
              <nav key={section.id} aria-label={t(section.label)}>
                <Link
                  to={section.path}
                  className="text-[0.9rem] font-semibold text-white transition-colors hover:text-brand-sky"
                >
                  {t(section.label)}
                </Link>
                <ul className="mt-4 space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handle(section, item)}
                        className="text-left text-[0.8rem] text-white/55 transition-colors hover:text-white"
                      >
                        {t(item.label)}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </Container>
      </div>

      {/* 하단 회사정보 */}
      <Container>
        <div className="flex flex-col gap-6 py-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Logo tone="light" withKoName={false} />
            <p className="mt-5 text-[0.82rem] font-medium text-white/85">{t(footer.companyLine)}</p>
            <p className="mt-1.5 text-[0.78rem] text-white/50">
              <span className="mr-2 text-white/35">{t(ui.addressLabel)}</span>
              {t(company.address)}
            </p>
            {/* 확인된 대표 전화·팩스·이메일이 없으므로 연락 수단은 문의 폼으로만 안내한다. */}
            <p className="mt-1.5 text-[0.78rem] text-white/50">{t(ui.contactRouting)}</p>
          </div>

          <div className="lg:text-right">
            <Link
              to="/support"
              state={{ scrollTo: "contact" }}
              className="inline-block border border-white/25 px-5 py-2.5 text-[0.8rem] font-semibold text-white transition-colors hover:border-brand-sky hover:bg-brand-sky"
            >
              {t(ui.inquiry)}
            </Link>
            <p className="mt-5 max-w-sm text-[0.75rem] leading-relaxed text-white/40 lg:ml-auto">
              {t(footer.demoNotice)}
            </p>
            <p className="mt-2 text-[0.72rem] text-white/30">{t(footer.copyright)}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
