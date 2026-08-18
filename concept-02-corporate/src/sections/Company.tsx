import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../data/content";
import { ui } from "../data/ui";

export default function Company() {
  const { t, lang } = useLanguage();

  const overview = [
    { label: ui.companyNameLabel, value: lang === "ko" ? company.nameKo : company.nameEnLong },
    { label: ui.companyCeoLabel, value: t(company.ceo) },
    { label: ui.companyFoundedLabel, value: t(company.foundedDisplay) },
    { label: ui.companyAddressLabel, value: t(company.address) },
  ];

  return (
    <section id="company" className="border-b border-line bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow={ui.companyEyebrow}
          heading={ui.companyHeading}
          lead={ui.companyLead}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* 일반 현황 */}
          <Reveal className="lg:col-span-7">
            <div
              className="h-full border border-line bg-paper p-6 lg:p-8"
              style={{ borderRadius: "3px" }}
            >
              <h3 className="text-[0.6875rem] font-semibold tracking-[0.16em] text-brand uppercase">
                {t(ui.companyOverviewLabel)}
              </h3>
              <dl className="mt-6">
                {overview.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 gap-1 border-t border-line py-4 sm:grid-cols-4 sm:gap-4"
                  >
                    <dt className="text-[0.8125rem] font-semibold text-muted sm:col-span-1">
                      {t(row.label)}
                    </dt>
                    <dd className="text-[0.9375rem] leading-[1.7] text-ink sm:col-span-3">
                      {row.value}
                    </dd>
                  </div>
                ))}
                <div className="grid grid-cols-1 gap-1 border-t border-b border-line py-4 sm:grid-cols-4 sm:gap-4">
                  <dt className="text-[0.8125rem] font-semibold text-muted sm:col-span-1">
                    {t(company.facts[2].label)}
                  </dt>
                  <dd className="text-[0.9375rem] leading-[1.7] text-ink sm:col-span-3">
                    {t(company.facts[2].value)}
                  </dd>
                </div>
                {/* 재무 — 기준연도 병기 (content.ts facts 그대로) */}
                <div className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-4 sm:gap-4">
                  <dt className="text-[0.8125rem] font-semibold text-muted sm:col-span-1">
                    {t(company.facts[3].label)}
                  </dt>
                  <dd className="text-[0.9375rem] leading-[1.7] text-ink sm:col-span-3">
                    {t(company.facts[3].value)}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* 대표 메시지 + 연혁 */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal delay={60}>
              <div className="bg-navy p-6 lg:p-8" style={{ borderRadius: "3px" }}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[0.6875rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
                    {t(ui.companyMessageLabel)}
                  </h3>
                  {company.ceoMessage.isPlaceholder && (
                    <span className="border border-white/25 px-2 py-1 text-[0.625rem] font-semibold tracking-[0.08em] text-white/55 uppercase">
                      {t(ui.placeholderTag)}
                    </span>
                  )}
                </div>
                <blockquote className="mt-5 text-[1rem] leading-[1.85] font-medium text-white/90">
                  “{lang === "ko" ? company.ceoMessage.ko : company.ceoMessage.en}”
                </blockquote>
                <p className="mt-5 border-t border-white/15 pt-4 text-[0.8125rem] text-white/55">
                  {t(ui.companyCeoLabel)} · {t(company.ceo)}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="border border-line bg-paper p-6 lg:p-8"
                style={{ borderRadius: "3px" }}
              >
                <h3 className="text-[0.6875rem] font-semibold tracking-[0.16em] text-brand uppercase">
                  {t(ui.companyHistoryLabel)}
                </h3>
                <ol className="mt-5">
                  {company.history.map((h, i) => (
                    <li key={i} className="flex gap-5 border-t border-line py-4 first:border-t-0 first:pt-0">
                      <span
                        className={`w-12 shrink-0 text-[0.875rem] font-bold tabular-nums ${
                          h.confirmed ? "text-brand" : "text-line-strong"
                        }`}
                      >
                        {h.year}
                      </span>
                      <span
                        className={`text-[0.875rem] leading-[1.7] ${
                          h.confirmed ? "text-ink" : "text-muted"
                        }`}
                      >
                        {t(h.event)}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
