import CtaBanner from "../components/CtaBanner";
import SectionTitle from "../components/SectionTitle";
import SubPage from "../components/SubPage";
import { entityRoles } from "../data/content";

/**
 * 주요 고객·수행실적 — 수행 경험 소개 / 주요 고객 GS칼텍스 / 담당 역할 표 6행 /
 * 수행 업무 범위 / 집약형 사례 카드 1개 / 공개 범위 안내 / 상담 CTA
 * ⚠️ GS칼텍스 로고 사용 금지(텍스트만). "공식 파트너/독점 공급사/전 사업장 총괄" 등 금지.
 *    프로젝트 수·금액·수량·연도 등 근거 없는 수치 표기 금지. 집약형 카드의 기간은 숨김.
 */

const roleRows = [
  {
    area: "요구사항 및 견적 대응",
    desc: "요청 제품, 사양, 수량, 적용 현장과 일정 정보를 확인하고 견적에 필요한 내용을 정리합니다.",
  },
  {
    area: "주문 및 발주 관리",
    desc: "주문 내용을 확인하고 LS ELECTRIC 발주와 관련 진행을 관리합니다.",
  },
  {
    area: "납기 및 납품 관리",
    desc: "제조사 납기를 확인하고 출고, 현장 일정과 납품 조건을 조율합니다.",
  },
  {
    area: "현장 요청 대응",
    desc: "제품 관련 변경, 추가 요청과 현장 문의를 접수하고 필요한 확인을 진행합니다.",
  },
  {
    area: "장애 및 A/S 지원",
    desc: "제품 정보와 증상을 확인하고 제조사 또는 관련 기술조직과의 지원 협의를 연결합니다.",
  },
  {
    area: "커뮤니케이션",
    desc: "고객 현장의 요청과 제조사의 확인 결과가 필요한 담당자에게 이어지도록 소통을 지원합니다.",
  },
];

const scopeItems = [
  "LS ELECTRIC 시스템 및 전기 제품 관련 공급",
  "고객 요구사항과 제품 정보 확인",
  "견적 및 주문 대응",
  "제조사 발주와 납기 확인",
  "출고와 납품 일정 관리",
  "현장 제품 관련 요청 접수",
  "제품 장애 및 A/S 요청 지원",
  "제조사와 고객 현장 사이의 커뮤니케이션",
];

export function Customers() {
  return (
    <SubPage path="/customers">
      {/* ── 1. 수행 경험 소개 ── */}
      <SectionTitle size="lg">제품 공급 전후의 실무를 고객 현장에서 이어왔습니다</SectionTitle>
      <p className="mt-5 max-w-[52rem] text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO는 고객 요구사항을 확인하고 LS ELECTRIC 제품의 견적과 공급을 진행하며, 주문 이후
        발주·납기·납품을 관리합니다. 현장에서 제품 관련 변경, 추가 요청 또는 장애가 발생하면 내용을
        접수하고 고객사와 제조사 사이의 확인과 커뮤니케이션을 지원합니다.
      </p>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        수행 경험은 고객사와의 계약, 보안 및 로고 사용 기준에 따라 공개 가능한 정보만 표시합니다.
      </p>

      {/* ── 2. 주요 고객: GS칼텍스 — 로고 허가 전 텍스트 표기만 사용 ── */}
      <SectionTitle size="lg" className="mt-12">
        주요 고객 — GS칼텍스
      </SectionTitle>
      <div className="mt-6 border border-line bg-white p-6">
        <p className="text-[0.75rem] font-semibold tracking-[0.06em] text-brand">
          {entityRoles.gsCaltex}
        </p>
        <p className="mt-1 text-[1.25rem] font-bold text-ink">주요 고객: GS칼텍스</p>
        <p className="mt-4 text-[0.9375rem] leading-[1.85] text-ink-2">
          EGO는 GS칼텍스 현장에 공급되는 LS ELECTRIC 시스템 및 전기 제품 관련 업무를 담당해 온
          경험이 있습니다. 고객 요청과 구매 검토에 필요한 견적 대응, 주문 확인, 제조사 발주와 납기
          관리, 제품 납품, 현장 요청 접수, 제품 장애 및 A/S 지원, LS ELECTRIC과 고객 현장 사이의
          커뮤니케이션을 수행합니다.
        </p>
        <p className="mt-4 border-l-[3px] border-brand bg-brand-soft px-4 py-3 text-[0.875rem] leading-relaxed text-ink-2">
          GS칼텍스는 EGO의 주요 고객이자 대표 수행 경험입니다. 구체적인 계약 관계와 프로젝트 정보는
          공개 승인을 받은 범위에서만 안내합니다.
        </p>
      </div>

      {/* ── 3. GS칼텍스 관련 담당 역할 (6행 표) ── */}
      <SectionTitle size="lg" className="mt-12">
        공급과 현장 요청의 각 단계를 관리합니다
      </SectionTitle>
      <table className="tbl-classic mt-6">
        <caption className="sr-only">GS칼텍스 관련 담당 역할</caption>
        <thead>
          <tr>
            <th scope="col" className="w-[12rem]">
              담당 영역
            </th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          {roleRows.map((row) => (
            <tr key={row.area}>
              <th scope="row" className="whitespace-normal">
                {row.area}
              </th>
              <td className="leading-relaxed text-ink-2">{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── 4. 수행 업무 범위 ── */}
      <SectionTitle size="lg" className="mt-12">
        프로젝트에서 보여줄 업무 범위
      </SectionTitle>
      <ul className="list-sq mt-6 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
        {scopeItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        설치, 배선, 시운전, 전기공사, 설비 설계 또는 현장 전체 유지보수는 실제 수행과 공개 근거가
        확인되지 않으면 포함하지 않습니다.
      </p>

      {/* ── 5. 집약형 사례 카드 — 세부 프로젝트 정보 미확정, 기간 영역 숨김 ── */}
      <SectionTitle size="lg" className="mt-12">
        수행 사례
      </SectionTitle>
      <article className="mt-6 border border-line bg-white">
        <div className="border-b border-line bg-brand-navy px-5 py-4">
          <h3 className="text-[1.0625rem] font-bold text-white">
            GS칼텍스 현장 제품 공급 및 지원 경험
          </h3>
        </div>
        <table className="tbl-classic border-t-0">
          <caption className="sr-only">수행 사례 요약</caption>
          <tbody>
            <tr>
              <th scope="row">제품</th>
              <td className="text-ink-2">LS ELECTRIC 시스템 및 전기 제품 관련</td>
            </tr>
            <tr>
              <th scope="row">역할</th>
              <td className="leading-relaxed text-ink-2">
                요구사항과 견적 대응, 발주·납기 관리, 제품 납품, 현장 요청, 장애 및 A/S 지원,
                제조사 커뮤니케이션
              </td>
            </tr>
            <tr>
              <th scope="row">설명</th>
              <td className="leading-relaxed text-muted">
                세부 사업장과 프로젝트 정보는 고객사 보안 및 공개 기준에 따라 비공개로 관리합니다.
              </td>
            </tr>
          </tbody>
        </table>
      </article>

      {/* ── 6. 공개·비공개 정보 기준 ── */}
      <SectionTitle size="lg" className="mt-12">
        고객사 기준을 존중해 공개 범위를 관리합니다
      </SectionTitle>
      <ul className="list-sq mt-6 space-y-2.5 border border-line bg-surface p-5 text-[0.9375rem] leading-relaxed text-ink-2">
        <li>고객사 보안 기준에 따라 세부 사업장과 공급 내역은 공개하지 않습니다.</li>
        <li>프로젝트 세부 정보는 공개 가능한 범위에서 상담 시 안내드립니다.</li>
        <li>제품 및 수량 정보는 고객사와의 계약에 따라 비공개로 관리합니다.</li>
      </ul>

      {/* ── 7. 하단 상담 CTA ── */}
      <CtaBanner
        className="mt-12"
        title="유사한 제품 공급과 현장 대응이 필요하신가요?"
        body="필요한 제품, 적용 현장, 수량, 일정과 지원 범위를 알려주시면 EGO의 취급 및 대응 가능 여부를 확인해 안내드립니다."
        primary={{ label: "제품·견적 상담하기", to: "/support/inquiry" }}
        secondary={{ label: "사업영역 확인하기", to: "/business/supply" }}
        note="공개하기 어려운 현장 정보는 문의 단계에서 필요한 범위만 전달해 주세요."
      />
    </SubPage>
  );
}

export default Customers;
