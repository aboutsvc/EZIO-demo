import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { useLanguage } from "../../context/LanguageContext";
import { company } from "../../data/content";
import { ui } from "../../data/site";

/**
 * 연혁 — 연도 테이블
 * ⚠️ content.ts 의 confirmed 플래그를 그대로 반영한다. 확인되지 않은 연혁을 만들어내지 않으며,
 *    placeholder 행은 시각적으로 구분해 표기한다.
 */
export function History() {
  const { t } = useLanguage();

  return (
    <SubPage path="/about/history">
      <SectionTitle size="lg">{t(ui.about.historyHeading)}</SectionTitle>

      <table className="tbl-classic mt-6">
        <caption className="sr-only">{t(ui.about.historyHeading)}</caption>
        <colgroup>
          <col className="w-[7rem] sm:w-[10rem]" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">{t(ui.about.historyCols.year)}</th>
            <th scope="col">{t(ui.about.historyCols.event)}</th>
          </tr>
        </thead>
        <tbody>
          {company.history.map((item, i) => (
            <tr key={`${item.year}-${i}`} className={item.confirmed ? "" : "bg-surface"}>
              <th scope="row" className="text-center">
                <span
                  className={`text-[1.0625rem] font-bold ${
                    item.confirmed ? "text-brand" : "text-line-strong"
                  }`}
                >
                  {item.year}
                </span>
              </th>
              <td>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={item.confirmed ? "text-ink" : "text-muted"}>{t(item.event)}</span>
                  <span
                    className={`border px-1.5 py-px text-[0.625rem] font-bold ${
                      item.confirmed
                        ? "border-brand-tint bg-brand-soft text-brand"
                        : "border-line-strong bg-white text-muted"
                    }`}
                  >
                    {item.confirmed ? t(ui.about.historyConfirmed) : t(ui.about.historyPending)}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">{t(ui.about.historyNote)}</p>
    </SubPage>
  );
}

export default History;
