import { Link } from "react-router-dom";
import MainBanner from "../components/MainBanner";
import PowerFlowDiagram from "../components/PowerFlowDiagram";
import Scene from "../components/Scene";
import SectionTitle from "../components/SectionTitle";
import SolutionIcon from "../components/SolutionIcon";
import { useLanguage } from "../context/LanguageContext";
import {
  featuredProject,
  intro,
  projectCustomerName,
  solutions,
} from "../data/content";
import { notices, ui } from "../data/site";

/**
 * 메인 페이지 — 클래식 한국 기업 홈 문법
 *  1) 블루 그라디언트 메인 배너 슬라이더
 *  2) 클래식 그리드 4박스 (회사소개 배너 / 사업분야 아이콘 / 공지사항 / 온라인 문의)
 *  3) 수행실적 밴드 + 전력 인프라 흐름
 */
export function Home() {
  const { t, lang } = useLanguage();

  return (
    <>
      <MainBanner />

      {/* ── 클래식 그리드 4박스 ── */}
      <section className="mx-auto max-w-[1200px] px-4 py-10 lg:py-12">
        <h2 className="sr-only">{t({ ko: "주요 안내", en: "Highlights" })}</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* 1. 회사소개 바로가기 배너 */}
          <article className="border border-line bg-white lg:col-span-4">
            <div className="relative h-[150px] overflow-hidden border-b border-line">
              <Scene name="EngineerAtPanel" tone="light" className="absolute inset-0" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,58,102,0.05)_0%,rgba(21,58,102,0.45)_100%)]"
              />
              <p className="absolute bottom-3 left-4 text-[1.125rem] font-bold text-white">
                {t(ui.main.aboutBannerTitle)}
              </p>
            </div>
            <div className="p-5">
              <p className="text-[0.875rem] leading-relaxed text-ink-2">
                {t(ui.main.aboutBannerBody)}
              </p>
              <Link to="/about/greeting" className="btn-blue mt-4 h-10 w-full text-[0.875rem]">
                {t(ui.main.aboutBannerCta)}
                <span aria-hidden="true">›</span>
              </Link>
            </div>
          </article>

          {/* 2. 사업분야 아이콘 그리드 */}
          <article className="border border-line bg-white p-5 lg:col-span-8">
            <SectionTitle
              aside={
                <Link to="/business" className="text-[0.8125rem] font-semibold text-muted hover:text-brand">
                  {t(ui.main.businessMore)} <span aria-hidden="true">+</span>
                </Link>
              }
            >
              {t(ui.main.businessTitle)}
            </SectionTitle>
            <ul className="mt-5 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
              {solutions.map((solution) => (
                <li key={solution.id} className="bg-white">
                  <Link
                    to="/business"
                    className="flex h-full flex-col items-center gap-2 px-2 py-5 text-center transition-colors hover:bg-brand-soft"
                  >
                    <span className="flex h-14 w-14 items-center justify-center border border-line bg-surface text-brand">
                      <SolutionIcon id={solution.id} />
                    </span>
                    <span className="text-[0.8125rem] font-bold leading-tight text-ink">
                      {t(solution.title)}
                    </span>
                    <span className="text-[0.6875rem] font-semibold tracking-[0.08em] text-line-strong">
                      {solution.no}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          {/* 3. 공지사항 리스트 박스 */}
          <article className="border border-line bg-white p-5 lg:col-span-8">
            <SectionTitle
              aside={
                <Link to="/support" className="text-[0.8125rem] font-semibold text-muted hover:text-brand">
                  {t(ui.more)} <span aria-hidden="true">+</span>
                </Link>
              }
            >
              {t(ui.noticeTitle)}
            </SectionTitle>
            <ul className="mt-4 divide-y divide-line border-t border-line">
              {notices.slice(0, 4).map((post) => (
                <li key={post.no}>
                  <Link
                    to="/support"
                    className="flex items-center gap-3 py-2.5 text-[0.875rem] hover:text-brand"
                  >
                    <span aria-hidden="true" className="block h-[4px] w-[4px] shrink-0 bg-brand" />
                    <span className="min-w-0 flex-1 truncate text-ink-2">{t(post.title)}</span>
                    <span className="shrink-0 border border-line bg-surface px-1.5 py-px text-[0.625rem] font-bold text-muted">
                      {t(ui.demoBadge)}
                    </span>
                    <span className="shrink-0 text-[0.75rem] tabular-nums text-muted">{post.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[0.75rem] text-muted">{t(ui.demoPostNotice)}</p>
          </article>

          {/* 4. 프로젝트 문의 박스 — 전화번호 대신 온라인 문의 버튼 */}
          <article className="flex flex-col justify-between border border-line bg-brand-navy p-5 text-white lg:col-span-4">
            <div>
              <p className="text-[1.125rem] font-bold">{t(ui.main.inquiryTitle)}</p>
              <div aria-hidden="true" className="mt-3 h-[3px] w-14 bg-brand" />
              <p className="mt-4 text-[0.875rem] leading-relaxed text-white/75">
                {t(ui.main.inquiryBody)}
              </p>
            </div>
            <div className="mt-5">
              <Link
                to="/support#inquiry"
                className="flex h-14 w-full items-center justify-center gap-2 border border-white bg-white text-[1.0625rem] font-bold text-brand-navy transition-colors hover:bg-brand-soft"
              >
                {t(ui.main.inquiryCta)}
                <span aria-hidden="true">›</span>
              </Link>
              <p className="mt-2.5 text-[0.75rem] text-white/55">{t(ui.main.inquiryNote)}</p>
            </div>
          </article>
        </div>
      </section>

      {/* ── 회사 소개 문단 + 수행실적 밴드 ── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2 lg:py-14">
          <div>
            <SectionTitle size="lg">{t(intro.heading)}</SectionTitle>
            <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">{t(intro.body)}</p>
          </div>
          <div className="border border-line bg-white">
            <div className="relative h-[160px] overflow-hidden border-b border-line">
              <Scene name="ControlRoom" tone="light" className="absolute inset-0" />
            </div>
            <div className="p-5">
              <p className="text-[0.75rem] font-semibold tracking-[0.1em] text-brand">
                {t(ui.main.worksTitle)}
              </p>
              <p className="mt-2 text-[1.125rem] font-bold text-ink">{t(featuredProject.title)}</p>
              <p className="mt-1 text-[0.8125rem] text-muted">
                {projectCustomerName(lang)}
                <span aria-hidden="true" className="mx-1.5 text-line-strong">
                  |
                </span>
                {t(featuredProject.location)}
              </p>
              <p className="mt-3 line-clamp-3 text-[0.875rem] leading-relaxed text-ink-2">
                {t(featuredProject.summary)}
              </p>
              <Link to="/works" className="btn-line mt-4 h-9 px-4 text-[0.8125rem]">
                {t(ui.viewMore)} <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 전력 인프라 흐름 ── */}
      <section className="mx-auto max-w-[1200px] px-4 py-10 lg:py-14">
        <SectionTitle size="lg">{t(ui.main.flowTitle)}</SectionTitle>
        <p className="mt-4 max-w-[52rem] text-[0.9375rem] leading-relaxed text-ink-2">
          {t(ui.main.flowBody)}
        </p>
        <div className="mt-6">
          <PowerFlowDiagram />
        </div>
      </section>
    </>
  );
}

export default Home;
