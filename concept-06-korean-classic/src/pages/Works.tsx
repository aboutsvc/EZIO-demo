import { Link } from "react-router-dom";
import ProcessSteps from "../components/ProcessSteps";
import Scene from "../components/Scene";
import SectionTitle from "../components/SectionTitle";
import SubPage from "../components/SubPage";
import { useLanguage } from "../context/LanguageContext";
import { capabilities, featuredProject, industries, projectCustomerName } from "../data/content";
import { ui } from "../data/site";

/**
 * 수행실적 — Featured Project 상세 + 8단계 프로세스 + 기술역량
 * ⚠️ 고객사 실명은 projectCustomerName() helper 로만 표기한다 (공개 동의 확인 전 실명 노출 금지).
 */
export function Works() {
  const { t, lang } = useLanguage();

  return (
    <SubPage path="/works">
      <SectionTitle size="lg">{t(ui.works.featuredHeading)}</SectionTitle>

      <div className="mt-6 border border-line">
        <div className="relative h-[190px] overflow-hidden border-b border-line sm:h-[240px]">
          <Scene name="ControlRoom" tone="light" className="absolute inset-0" />
        </div>
        <div className="bg-white p-5">
          <h3 className="text-[1.25rem] font-bold text-ink">{t(featuredProject.title)}</h3>
          <p className="mt-3 text-[0.9375rem] leading-[1.85] text-ink-2">
            {t(featuredProject.summary)}
          </p>
        </div>
      </div>

      <table className="tbl-classic mt-8">
        <caption className="sr-only">{t(ui.works.featuredHeading)}</caption>
        <tbody>
          <tr>
            <th scope="row">{t(ui.works.rows.customer)}</th>
            <td>
              {projectCustomerName(lang)}
              <span className="mt-1 block text-[0.8125rem] text-muted">{t(ui.works.customerNote)}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">{t(ui.works.rows.industry)}</th>
            <td>{t(featuredProject.industry)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.works.rows.location)}</th>
            <td>{t(featuredProject.location)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.works.rows.title)}</th>
            <td className="font-semibold text-ink">{t(featuredProject.title)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.works.rows.scope)}</th>
            <td>
              <ul className="list-sq grid grid-cols-1 gap-x-6 gap-y-1 text-[0.875rem] text-ink-2 sm:grid-cols-2">
                {featuredProject.scope.map((item) => (
                  <li key={item.en}>{t(item)}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ── 프로세스 8단계 ── */}
      <div className="mt-12">
        <SectionTitle>{t(ui.works.processHeading)}</SectionTitle>
        <div className="mt-5">
          <ProcessSteps />
        </div>
      </div>

      {/* ── 기술 역량 ── */}
      <div className="mt-12">
        <SectionTitle>{t(ui.works.capabilityHeading)}</SectionTitle>
        <ul className="mt-5 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <li key={cap.id} className="bg-white p-4">
              <p className="flex items-center gap-2 text-[1rem] font-bold text-ink">
                <span aria-hidden="true" className="block h-[7px] w-[7px] bg-brand" />
                {t(cap.title)}
              </p>
              <ul className="list-sq mt-2.5 space-y-1 text-[0.8125rem] leading-relaxed text-ink-2">
                {cap.items.map((item) => (
                  <li key={item.en}>{t(item)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* ── 적용 산업 ── */}
      <div className="mt-12">
        <SectionTitle>{t(ui.business.industriesHeading)}</SectionTitle>
        <ul className="mt-5 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry.id} className="bg-white px-4 py-4">
              <p className="text-[0.9375rem] font-bold text-ink">{t(industry.title)}</p>
              <p className="mt-1 text-[0.75rem] leading-relaxed text-muted">{t(industry.desc)}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 border border-line bg-surface px-4 py-8 text-center">
        <p className="text-[1.0625rem] font-bold text-ink">{t(ui.main.inquiryTitle)}</p>
        <p className="max-w-[36rem] text-[0.875rem] leading-relaxed text-muted">
          {t(ui.main.inquiryBody)}
        </p>
        <Link to="/support#inquiry" className="btn-blue mt-1 h-11 px-8 text-[0.9375rem]">
          {t(ui.main.inquiryCta)}
          <span aria-hidden="true">›</span>
        </Link>
      </div>
    </SubPage>
  );
}

export default Works;
