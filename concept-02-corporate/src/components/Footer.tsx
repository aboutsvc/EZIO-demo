import Container from "./Container";
import Logo from "./Logo";
import { useLanguage } from "../context/LanguageContext";
import { company, footer, nav, positioning, solutions } from "../data/content";

const NAV_ITEMS = [
  { id: "company", label: nav.company },
  { id: "solutions", label: nav.solutions },
  { id: "products", label: nav.products },
  { id: "capability", label: nav.capability },
  { id: "projects", label: nav.projects },
  { id: "contact", label: nav.contact },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* 브랜드 */}
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.875rem] leading-[1.8] text-white/60">
              {t(positioning.definition)}
            </p>
          </div>

          {/* 사이트맵 */}
          <div className="lg:col-span-3">
            <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Site
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[0.875rem] text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 사업영역 */}
          <div className="lg:col-span-4">
            <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-white/40 uppercase">
              {t(nav.solutions)}
            </p>
            <ul className="mt-4 space-y-2.5">
              {solutions.map((s) => (
                <li key={s.id}>
                  <a
                    href="#solutions"
                    className="text-[0.875rem] text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {t(s.title)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="border-t border-white/12 py-8">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="text-[0.875rem] font-semibold text-white/90">{t(footer.companyLine)}</p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.8125rem] leading-[1.7] text-white/55">{t(footer.address)}</p>
            </div>
          </div>
        </div>

        {/* 데모 고지 + 저작권 */}
        <div className="flex flex-col gap-4 border-t border-white/12 py-7 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-[0.75rem] leading-[1.7] text-white/45">
            {t(footer.demoNotice)}
          </p>
          <p className="text-[0.75rem] whitespace-nowrap text-white/45">
            {t(footer.copyright)}
          </p>
        </div>
      </Container>

      {/* 하단 블루 라인 */}
      <div className="h-1 w-full bg-brand" aria-hidden="true" />
      <span className="sr-only">{company.nameEnLong}</span>
    </footer>
  );
}
