import Scene from "../../components/Scene";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { useLanguage } from "../../context/LanguageContext";
import { company, positioning } from "../../data/content";
import { ui } from "../../data/site";

/** 설립일 표기 — company.founded (확인된 값) 를 언어별 포맷으로만 변환한다. */
function formatFounded(iso: string, lang: "ko" | "en") {
  const [y, m, d] = iso.split("-").map((v) => Number(v));
  if (lang === "ko") return `${y}년 ${m}월 ${d}일`;
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

/**
 * 회사개요 — 클래식 회사개요 테이블
 * ⚠️ 확인된 정보만 게재. 자본금·임직원수 등 미확인 항목은 "자료 수령 후 게재 예정"으로 비워 둔다.
 *    재무 수치는 기준연도를 반드시 병기한다 (content.ts facts 그대로 사용).
 */
export function Overview() {
  const { t, lang } = useLanguage();

  // 매출액 — content.ts facts 의 기준연도 표기 라벨/값을 그대로 사용
  const revenueFact = company.facts[3];

  return (
    <SubPage path="/about/overview">
      <SectionTitle size="lg">{t(ui.about.overviewHeading)}</SectionTitle>

      <div className="mt-6 border border-line">
        <div className="relative h-[170px] overflow-hidden sm:h-[210px]">
          <Scene name="PlantAerial" tone="light" className="absolute inset-0" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,90,166,0.04)_45%,rgba(15,43,77,0.62)_100%)]"
          />
          <p className="absolute bottom-3 left-4 text-[0.9375rem] font-bold text-white drop-shadow-[0_1px_2px_rgba(15,43,77,0.6)]">
            {company.nameKo}
            <span aria-hidden="true" className="mx-2 font-normal text-white/60">
              |
            </span>
            <span className="font-medium text-white/85">{t(positioning.primary)}</span>
          </p>
        </div>
      </div>

      <table className="tbl-classic mt-8">
        <caption className="sr-only">{t(ui.about.overviewHeading)}</caption>
        <tbody>
          <tr>
            <th scope="row">{t(ui.about.rows.name)}</th>
            <td>
              {company.nameKo}
              <span aria-hidden="true" className="mx-2 text-line-strong">
                |
              </span>
              <span className="text-muted">{company.nameEnLong}</span>
              <span className="ml-2 border border-line bg-surface px-1.5 py-px text-[0.625rem] font-bold text-muted">
                {t(ui.demoBadge)}
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">{t(ui.about.rows.ceo)}</th>
            <td>{t(company.ceo)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.about.rows.founded)}</th>
            <td>{formatFounded(company.founded, lang)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.about.rows.address)}</th>
            <td>{t(company.address)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.about.rows.business)}</th>
            <td>
              {t(positioning.primary)}
              <span className="mt-1 block text-[0.875rem] text-muted">{t(positioning.supporting)}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">{t(revenueFact.label)}</th>
            <td className="font-semibold text-ink">{t(revenueFact.value)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.about.capitalRow)}</th>
            <td className="font-semibold text-ink">{t(ui.about.capitalValue)}</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">{t(ui.about.overviewNote)}</p>

      {/* 요약 팩트 카드 (테이블과 동일 데이터의 시각 요약) */}
      <ul className="mt-8 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {company.facts.map((fact) => (
          <li key={fact.label.en} className="bg-white px-4 py-4">
            <p className="text-[0.75rem] font-semibold tracking-[0.04em] text-brand">{t(fact.label)}</p>
            <p className="mt-1.5 text-[0.9375rem] font-bold leading-snug text-ink">{t(fact.value)}</p>
          </li>
        ))}
      </ul>
    </SubPage>
  );
}

export default Overview;
