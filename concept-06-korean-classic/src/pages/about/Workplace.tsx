import CtaBanner from "../../components/CtaBanner";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { company } from "../../data/content";

/**
 * 사업장 소개 — 기본 정보 표 / 지도 플레이스홀더 / 방문 전 확인사항 / 하단 문의 연결
 * ⚠️ 주소·연락처·운영시간·교통 정보는 전부 미확정 — "확정 후 게재 예정" 처리.
 *    자가용/대중교통 안내는 값이 없으므로 섹션 자체를 생략한다. 값 창작 금지.
 */

const infoRows = ["사업장명", "주소", "대표 연락처", "이메일", "운영시간", "휴무·점심시간"];

const visitChecks = [
  "방문 목적과 희망 시간을 담당자에게 알려주세요.",
  "제품 수령 또는 납품 방문은 제품명, 수량과 차량 정보를 미리 확인해 주세요.",
  "현장 또는 건물의 출입 절차가 있는 경우 담당자 안내를 따라주세요.",
  "운영시간 외 방문이 필요한 경우 사전에 가능 여부를 확인해 주세요.",
];

export function Workplace() {
  return (
    <SubPage path="/about/workplace">
      {/* ── 1. 사업장 기본 정보 ── */}
      <SectionTitle size="lg">방문 및 연락 안내</SectionTitle>
      <table className="tbl-classic mt-6">
        <caption className="sr-only">사업장 기본 정보</caption>
        <tbody>
          {infoRows.map((label) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td className="text-muted">{company.pending}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 border-l-[3px] border-brand bg-brand-soft px-4 py-3 text-[0.875rem] leading-relaxed text-ink-2">
        업무 일정에 따라 담당자가 외부 현장에 있을 수 있습니다. 방문 상담, 제품 수령 또는 납품이
        필요한 경우 방문 전에 담당자와 일정을 확인해 주세요.
      </p>

      {/* ── 2. 지도 (플레이스홀더) ── */}
      <SectionTitle size="lg" className="mt-12">
        위치 안내
      </SectionTitle>
      <div className="mt-6 flex h-[260px] flex-col items-center justify-center gap-2 border border-line bg-surface">
        <svg
          viewBox="0 0 24 24"
          width="34"
          height="34"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-line-strong"
        >
          <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
        <p className="text-[0.9375rem] font-semibold text-ink-2">
          지도는 사업장 정보 확정 후 제공됩니다.
        </p>
        <p className="text-[0.8125rem] text-muted">
          정확한 주소와 출입 안내가 확인되면 이 영역에 지도가 표시됩니다.
        </p>
      </div>

      {/* ── 3. 방문 전 확인사항 ── */}
      <SectionTitle size="lg" className="mt-12">
        방문 전에 확인해 주세요
      </SectionTitle>
      <ol className="mt-6 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
        {visitChecks.map((check, i) => (
          <li key={check} className="flex gap-3 bg-white p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-brand text-[0.8125rem] font-bold text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[0.875rem] leading-relaxed text-ink-2">{check}</p>
          </li>
        ))}
      </ol>

      {/* ── 4. 하단 문의 연결 — 대표번호 미확정이므로 온라인 폼으로 연결 ── */}
      <CtaBanner
        className="mt-12"
        title="방문 또는 납품 일정은 미리 확인해 주세요"
        body="방문 목적과 희망 시간을 알려주시면 담당자 일정을 확인해 안내드립니다. 문의는 온라인 폼으로 접수해 주세요."
        primary={{ label: "제품·견적 문의", to: "/support/inquiry" }}
        secondary={{ label: "A/S 접수", to: "/support/as" }}
      />
    </SubPage>
  );
}

export default Workplace;
