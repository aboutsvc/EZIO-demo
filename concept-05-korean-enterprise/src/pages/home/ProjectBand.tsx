import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { capabilities, featuredProject, projectCustomerName } from "../../data/content";
import { ui } from "../../data/ui";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { PlantAerial } from "../../components/scenes";

/** 프로젝트 · 기술역량 밴드 — Featured Project 링크 + 기술 역량 요약 */
export default function ProjectBand() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-deep py-16 lg:py-20">
      {/* 장면 아트워크 배경 — 실제 현장 사진 수령 시 교체 */}
      <div aria-hidden="true" className="absolute inset-0 opacity-45">
        <PlantAerial tone="navy" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#081527] via-[#0b1f3a]/92 to-[#0b1f3a]/70"
      />

      <Container className="relative">
        <SectionTitle
          en="Projects & Capability"
          title={ui.projectBandTitle}
          tone="light"
          action={
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 text-[0.82rem] font-semibold text-white transition-colors hover:bg-white hover:text-brand"
            >
              {t(ui.viewAll)}
              <span aria-hidden="true">›</span>
            </Link>
          }
        />

        <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          {/* Featured project */}
          <article className="border border-white/15 bg-white/[0.04] p-7 lg:p-9">
            <p
              className="text-[0.7rem] font-semibold tracking-[0.1em] text-brand-sky uppercase"
              style={{ fontFamily: "var(--font-en)" }}
            >
              {t(ui.featuredTitle)}
            </p>
            <h3 className="mt-3 text-[1.4rem] leading-snug font-bold text-white lg:text-[1.7rem]">
              {t(featuredProject.title)}
            </h3>

            <dl className="mt-6 grid gap-4 border-y border-white/12 py-5 sm:grid-cols-3">
              <div>
                <dt className="text-[0.7rem] text-white/45">{t(ui.projectCustomer)}</dt>
                {/* 고객 실명은 공개 권한 확인 전까지 helper로만 표기 */}
                <dd className="mt-1 text-[0.88rem] font-semibold text-white">
                  {projectCustomerName(lang)}
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] text-white/45">{t(ui.projectIndustry)}</dt>
                <dd className="mt-1 text-[0.88rem] font-semibold text-white">
                  {t(featuredProject.industry)}
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] text-white/45">{t(ui.projectLocation)}</dt>
                <dd className="mt-1 text-[0.88rem] font-semibold text-white">
                  {t(featuredProject.location)}
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-[0.88rem] leading-relaxed text-white/70">
              {t(featuredProject.summary)}
            </p>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {featuredProject.scope.slice(0, 6).map((s) => (
                <li
                  key={s.en}
                  className="border border-white/18 px-2.5 py-1 text-[0.72rem] text-white/70"
                >
                  {t(s)}
                </li>
              ))}
              {featuredProject.scope.length > 6 && (
                <li className="px-1 py-1 text-[0.72rem] text-white/45">
                  +{featuredProject.scope.length - 6}
                </li>
              )}
            </ul>

            <Link
              to="/projects"
              state={{ scrollTo: "featured" }}
              className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand-sky px-6 py-3 text-[0.85rem] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t(ui.viewDetail)}
              <span aria-hidden="true">›</span>
            </Link>
          </article>

          {/* 기술 역량 */}
          <div className="border border-white/15 bg-white/[0.04] p-7 lg:p-9">
            <p
              className="text-[0.7rem] font-semibold tracking-[0.1em] text-brand-sky uppercase"
              style={{ fontFamily: "var(--font-en)" }}
            >
              {t(ui.capabilityTitle)}
            </p>
            <ul className="mt-5 divide-y divide-white/10">
              {capabilities.map((cap) => (
                <li key={cap.id} className="py-3.5">
                  <p className="text-[0.95rem] font-semibold text-white">{t(cap.title)}</p>
                  <p className="mt-1 text-[0.78rem] leading-relaxed text-white/55">
                    {cap.items.map((i) => t(i)).join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
