import { useLanguage } from "../context/LanguageContext";
import { company, intro, positioning } from "../data/content";
import { findSection } from "../data/navigation";
import { ui } from "../data/ui";
import ContentSection from "../components/ContentSection";
import PageLayout from "../components/PageLayout";
import { EngineerAtPanel } from "../components/scenes";

const section = findSection("company")!;

export default function Company() {
  const { t } = useLanguage();

  const overviewRows: { label: { ko: string; en: string }; value: string; note?: string }[] = [
    { label: ui.overviewRow.nameKo, value: company.nameKo },
    { label: ui.overviewRow.nameEn, value: company.nameEnLong, note: t(ui.nameEnDemoNote) },
    { label: ui.overviewRow.ceo, value: t(company.ceo) },
    { label: ui.overviewRow.founded, value: t(company.foundedDisplay) },
    { label: ui.overviewRow.address, value: t(company.address) },
    { label: ui.overviewRow.business, value: t(company.facts[2].value) },
  ];

  return (
    <PageLayout section={section} lead={positioning.definition} scene="EngineerAtPanel" en="Company">
      <div className="space-y-14">
        {/* 회사개요 */}
        <ContentSection id="overview" en="Overview" title={ui.companyOverviewTitle}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_38%] lg:gap-10">
            <div>
              <h3 className="text-[1.15rem] leading-snug font-bold text-ink lg:text-[1.35rem]">
                {t(intro.heading)}
              </h3>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">{t(intro.body)}</p>
              <p className="mt-6 border-l-[3px] border-brand bg-brand-soft px-5 py-4 text-[0.88rem] leading-relaxed font-medium text-brand">
                {t(positioning.definition)}
              </p>
            </div>
            {/* 장면 아트워크 — 실제 현장 사진 수령 시 교체 */}
            <div className="aspect-[4/3] overflow-hidden border border-line bg-surface lg:aspect-auto lg:min-h-[280px]">
              <EngineerAtPanel tone="light" />
            </div>
          </div>

          {/* 클래식 회사개요 테이블 */}
          <table className="mt-9 w-full border-t-2 border-ink text-left">
            <caption className="sr-only">{t(ui.companyOverviewTitle)}</caption>
            <tbody>
              {overviewRows.map((row) => (
                <tr key={row.label.en} className="border-b border-line">
                  <th
                    scope="row"
                    className="w-[30%] bg-surface px-4 py-3.5 align-top text-[0.82rem] font-semibold text-ink sm:w-[24%] sm:px-6"
                  >
                    {t(row.label)}
                  </th>
                  <td className="px-4 py-3.5 text-[0.85rem] leading-relaxed text-muted sm:px-6">
                    {row.value}
                    {row.note && <span className="mt-1 block text-[0.72rem] text-faint">{row.note}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContentSection>

        {/* 회사 현황 */}
        <ContentSection id="facts" en="Company Facts" title={ui.companyFactsTitle}>
          <dl className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {company.facts.map((fact) => (
              <div key={fact.label.en} className="bg-paper px-6 py-7">
                <dt className="text-[0.72rem] leading-snug text-muted">{t(fact.label)}</dt>
                <dd className="mt-2 text-[1.05rem] leading-snug font-bold text-ink">
                  {t(fact.value)}
                </dd>
              </div>
            ))}
          </dl>
        </ContentSection>

        {/* 연혁 */}
        <ContentSection id="history" en="History" title={ui.historyTitle} lead={ui.historyNote}>
          <ol className="border-l-2 border-line pl-6">
            {company.history.map((item, i) => (
              <li key={i} className="relative pb-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 ${
                    item.confirmed ? "border-brand bg-brand" : "border-line-strong bg-paper"
                  }`}
                />
                <p
                  className={`text-[1.05rem] leading-none font-bold ${
                    item.confirmed ? "text-brand" : "text-faint"
                  }`}
                  style={{ fontFamily: "var(--font-en)" }}
                >
                  {item.year}
                </p>
                <p
                  className={`mt-2 text-[0.9rem] leading-relaxed ${
                    item.confirmed ? "text-ink" : "text-muted"
                  }`}
                >
                  {t(item.event)}
                </p>
                {!item.confirmed && (
                  <span className="mt-2 inline-block border border-line px-2 py-0.5 text-[0.65rem] text-faint">
                    {t(ui.historyPending)}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </ContentSection>

        {/* CEO 인사말 */}
        <ContentSection id="ceo" en="CEO Message" title={ui.ceoTitle}>
          <blockquote className="border border-line bg-surface p-7 lg:p-10">
            <p className="text-[1.05rem] leading-relaxed font-medium text-ink lg:text-[1.25rem]">
              “{t(company.ceoMessage)}”
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              <span className="text-[0.85rem] text-muted">
                {t(ui.ceoRole)}{" "}
                <span className="font-semibold text-ink">{t(company.ceo)}</span>
              </span>
            </footer>
          </blockquote>
          {company.ceoMessage.isPlaceholder && (
            <p className="mt-3 text-[0.75rem] text-faint">{t(ui.ceoPlaceholderNote)}</p>
          )}
        </ContentSection>
      </div>
    </PageLayout>
  );
}
