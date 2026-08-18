import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { useLanguage } from "../../context/LanguageContext";
import { company } from "../../data/content";
import { ui } from "../../data/site";

/**
 * 오시는길
 * ⚠️ 지도 API 미연동 — 스타일된 placeholder 박스로 자리만 잡고 "지도 API 연동 예정"을 명시한다.
 *    전화번호/팩스를 임의로 만들지 않으며, 문의 동선은 온라인 문의 폼으로만 연결한다.
 */
export function Location() {
  const { t } = useLanguage();

  return (
    <SubPage path="/about/location">
      <SectionTitle size="lg">{t(ui.about.locationHeading)}</SectionTitle>

      {/* ── 지도 placeholder ── */}
      <div className="mt-6 border border-line bg-white">
        <div
          className="relative h-[260px] sm:h-[340px]"
          style={{
            backgroundColor: "#eef1f5",
            backgroundImage:
              "linear-gradient(0deg, rgba(21,58,102,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(21,58,102,0.07) 1px, transparent 1px), linear-gradient(0deg, rgba(21,58,102,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(21,58,102,0.045) 1px, transparent 1px)",
            backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
          }}
          role="img"
          aria-label={t(ui.about.mapPlaceholder)}
        >
          {/* 추상 도로 라인 — 지도 자리임을 알리는 장식 */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <span className="absolute left-0 top-[42%] h-[10px] w-full bg-white/90" />
            <span className="absolute left-[34%] top-0 h-full w-[8px] bg-white/90" />
            <span className="absolute left-0 top-[74%] h-[5px] w-full bg-white/70" />
            <span className="absolute left-[72%] top-0 h-[5px] w-full origin-top-left rotate-[62deg] bg-white/70" />
          </div>

          {/* 중심 마커 */}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-[0_3px_10px_rgba(21,58,102,0.35)]">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
            </span>
            <span className="mt-2 border border-line-strong bg-white px-3 py-1 text-[0.8125rem] font-bold text-brand-navy">
              {company.nameKo}
            </span>
          </div>

          {/* 데모 표기 */}
          <p className="absolute left-3 top-3 border border-brand bg-white/95 px-2.5 py-1 text-[0.75rem] font-bold text-brand">
            {t(ui.about.mapPlaceholder)}
          </p>
        </div>
        <p className="border-t border-line bg-surface px-4 py-2.5 text-[0.75rem] text-muted">
          {t(ui.about.mapPlaceholderSub)}
        </p>
      </div>

      {/* ── 주소 정보 ── */}
      <table className="tbl-classic mt-8">
        <caption className="sr-only">{t(ui.about.locationHeading)}</caption>
        <tbody>
          <tr>
            <th scope="row">{t(ui.about.addressRow)}</th>
            <td>{t(company.address)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.about.transportRow)}</th>
            <td className="text-muted">{t(ui.about.transportNote)}</td>
          </tr>
          <tr>
            <th scope="row">{t(ui.about.contactRow)}</th>
            <td>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-muted">{t(ui.about.contactNote)}</span>
                <Link to="/support#inquiry" className="btn-blue h-9 px-4 text-[0.8125rem]">
                  {t(ui.main.inquiryCta)}
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </SubPage>
  );
}

export default Location;
