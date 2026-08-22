import CtaBanner from "../../components/CtaBanner";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";

/**
 * 납품 및 현장 대응 — 역할 / 납품 전 확인 / 현장 요청 카드 4 / 절차 6단계 /
 * 커뮤니케이션 / 긴급 요청 / GS칼텍스 경험 / 편익 4 / CTA
 * ⚠️ 긴급 연락처 미확정 — "문의 폼 접수 후 담당자가 연락드립니다"로 대체.
 *    설치·배선·시운전 직접 수행 표현 금지.
 */

const preDeliveryChecks = [
  "주문 제품명, 모델과 주요 사양",
  "수량과 포장 단위",
  "제조사 확인 납기와 출고 예정 정보",
  "납품 희망일과 수령 가능 시간",
  "납품 장소, 반입 위치와 수령 담당자",
  "차량 진입, 보안, 출입 등록 등 현장 전달사항",
  "하역 또는 별도 장비 필요 여부 (EGO 담당 여부 별도 확인)",
  "분할 납품, 긴급 납품 등 추가 조건",
  "동봉 또는 별도 전달이 필요한 문서",
];

const requestCards = [
  {
    title: "일정·장소 변경",
    body: "납품 일정, 수령 시간, 납품 위치 또는 수령 담당자 변경을 접수합니다. 변경 가능 여부는 출고 상태와 현장 조건을 확인한 뒤 안내합니다.",
  },
  {
    title: "사양·수량 변경",
    body: "제품 모델, 사양, 옵션, 수량의 변경 또는 추가 요청을 접수합니다. 이미 발주·출고된 건은 변경 가능 여부와 비용·납기 영향을 별도로 확인합니다.",
  },
  {
    title: "제품 관련 현장 문의",
    body: "설치 또는 운영 과정에서 확인이 필요한 제품 정보와 현장 요청을 접수합니다. 필요한 경우 제조사 기술지원과의 협의를 지원합니다.",
  },
  {
    title: "납품 후 확인",
    body: "수량, 외관, 포장, 동봉 문서와 제품 정보에 확인이 필요한 경우 내용을 접수해 후속 절차를 안내합니다.",
  },
];

const processRows = [
  { step: "1. 주문 정보 확인", desc: "모델, 사양, 수량과 주문 조건을 확인합니다." },
  {
    step: "2. 제조사 납기·출고 확인",
    desc: "LS ELECTRIC이 확인한 납기와 출고 정보를 기준으로 일정을 안내합니다.",
  },
  {
    step: "3. 현장 조건 확인",
    desc: "납품 장소, 수령 시간, 담당자와 출입·반입 요청사항을 확인합니다.",
  },
  { step: "4. 납품 진행 안내", desc: "확인된 출고와 납품 진행 정보를 관련 담당자에게 안내합니다." },
  {
    step: "5. 변경·추가 요청 대응",
    desc: "사양, 수량, 일정 또는 현장 요청의 영향과 가능 여부를 확인합니다.",
  },
  {
    step: "6. 납품 후 확인",
    desc: "수령 결과와 제품 관련 후속 요청을 확인하고 필요한 절차를 연결합니다.",
  },
];

const benefits = [
  "제품과 수량, 일정, 장소를 한 번에 확인할 수 있습니다.",
  "현장 요청이 발생했을 때 기존 주문 맥락을 가진 접점에서 문의할 수 있습니다.",
  "제조사 확인이 필요한 내용과 EGO가 직접 안내할 수 있는 내용을 구분해 받을 수 있습니다.",
  "일정이나 요청 변경 시 영향과 다음 절차를 확인할 수 있습니다.",
];

export function Delivery() {
  return (
    <SubPage path="/business/delivery">
      {/* ── 1. 납품과 현장 사이의 접점 ── */}
      <SectionTitle size="lg">
        제품이 필요한 장소와 일정에 맞게 전달되도록 확인합니다
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO는 주문된 제품의 모델과 수량, 제조사 납기, 출고 일정, 납품 장소와 수령 담당자를
        확인합니다. 일정 또는 현장 조건에 변경이 생기면 관련 내용을 접수하고, 고객사와 LS ELECTRIC
        사이에 추가 확인이 필요한 사항을 연결합니다.
      </p>
      <p className="mt-4 border-l-[3px] border-brand bg-brand-soft px-4 py-3 text-[0.875rem] leading-relaxed text-ink-2">
        설치 및 운영 과정에서 발생하는 제품 관련 문의와 현장 요청에 대응하고, 필요한 경우 제조사
        기술지원과의 협의를 지원합니다.
      </p>

      {/* ── 2. 납품 전 확인 업무 ── */}
      <SectionTitle size="lg" className="mt-12">
        납품 전에 다음 내용을 확인합니다
      </SectionTitle>
      <ul className="list-sq mt-6 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
        {preDeliveryChecks.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        현장별 출입·반입 조건과 EGO의 대응 가능 범위는 사전에 확인한 뒤 안내합니다.
      </p>

      {/* ── 3. 접수 가능한 현장 요청 ── */}
      <SectionTitle size="lg" className="mt-12">
        현장에서 달라진 요청을 빠짐없이 확인합니다
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {requestCards.map((card, i) => (
          <article key={card.title} className="border border-line bg-white p-5">
            <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-line-strong">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-[1rem] font-bold text-ink">{card.title}</h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">{card.body}</p>
          </article>
        ))}
      </div>

      {/* ── 4. 업무 절차 (6단계 표) ── */}
      <SectionTitle size="lg" className="mt-12">
        확인, 조율, 안내의 순서로 대응합니다
      </SectionTitle>
      <table className="tbl-classic mt-6">
        <caption className="sr-only">납품 및 현장 대응 업무 절차</caption>
        <thead>
          <tr>
            <th scope="col" className="w-[13rem]">
              단계
            </th>
            <th scope="col">업무 내용</th>
          </tr>
        </thead>
        <tbody>
          {processRows.map((row) => (
            <tr key={row.step}>
              <th scope="row" className="whitespace-normal">
                {row.step}
              </th>
              <td className="leading-relaxed text-ink-2">“{row.desc}”</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── 5. 고객사와 제조사 사이의 커뮤니케이션 ── */}
      <SectionTitle size="lg" className="mt-12">
        같은 정보를 바탕으로 협의할 수 있게 합니다
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        현장 요청은 제품 정보, 일정, 적용 조건과 함께 전달되어야 정확히 확인할 수 있습니다. EGO는
        고객의 요청 내용을 정리하고 LS ELECTRIC의 제품·납기·기술 확인이 필요한 부분을 구분합니다.
        확인된 결과와 추가로 필요한 정보를 고객에게 안내해 협의가 이어지도록 지원합니다.
      </p>

      {/* ── 6. 긴급 요청 대응 — 긴급 연락처 미확정: 폼 접수 안내로 대체 ── */}
      <SectionTitle size="lg" className="mt-12">
        긴급 요청은 영향과 가능 범위를 먼저 확인합니다
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        긴급 납품, 추가 수량 또는 현장 장애 요청은 제품명·모델, 수량, 필요한 시점, 현장과 업무
        영향을 함께 알려주세요. EGO는 현재 발주·재고·출고 상태와 제조사 확인 필요 사항을 파악한 뒤
        가능한 대응 방향을 안내합니다. 확인 전에는 즉시 납품이나 문제 해결을 보장하지 않습니다.
      </p>
      <p className="mt-4 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        긴급 요청도 온라인 문의 폼으로 접수해 주세요. 접수 후 담당자가 확인하여 연락드립니다.
      </p>

      {/* ── 7. GS칼텍스 현장 관련 경험 ── */}
      <SectionTitle size="lg" className="mt-12">
        주요 고객 현장에서 이어온 대응 경험
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO는 GS칼텍스 현장에 공급되는 LS ELECTRIC 시스템 및 전기 제품 관련 업무에서 견적과 주문
        대응, 발주·납기 관리, 제품 납품, 현장 요청 접수, 제품 장애와 A/S 지원, 제조사와 고객 현장
        사이의 커뮤니케이션을 담당해 왔습니다.
      </p>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        구체적인 사업장명, 프로젝트명과 공급 내역은 계약 및 보안 기준에 따라 공개 가능한 범위에서만
        안내합니다.
      </p>

      {/* ── 8. 고객이 얻는 편익 ── */}
      <SectionTitle size="lg" className="mt-12">
        납품 전후의 확인 부담을 줄입니다
      </SectionTitle>
      <ul className="list-sq mt-6 space-y-2.5 border border-line bg-white p-5 text-[0.9375rem] leading-relaxed text-ink-2">
        {benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* ── 9. CTA (현장 대응 페이지 변형 문구) ── */}
      <CtaBanner
        className="mt-12"
        title="납품 일정이나 현장 요청을 알려주세요"
        body="제품명, 주문 정보, 현장, 필요한 일정과 요청 내용을 보내주시면 확인 후 안내드립니다."
        primary={{ label: "납품·현장 문의하기", to: "/support/inquiry" }}
        secondary={{ label: "A/S 접수하기", to: "/support/as" }}
      />
    </SubPage>
  );
}

export default Delivery;
