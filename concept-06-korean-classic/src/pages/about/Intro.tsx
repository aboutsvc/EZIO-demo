import CtaBanner from "../../components/CtaBanner";
import SectionTitle, { BulletTitle } from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { company, entityRoles } from "../../data/content";

/**
 * EGO 소개 — 존재 이유 / 사업 구조 / 공급 전후 업무 / 가치 / 대표이사 메시지 / 회사 개요
 * ⚠️ 대표이사 이름·설립연도·주소·연락처는 미확정 — "확정 후 게재 예정" 처리. 값 창작 금지.
 */

const structureRows = [
  {
    entity: "고객사",
    role: "",
    desc: "필요한 제품, 사용 목적, 현장 조건, 수량과 일정을 EGO에 전달합니다.",
  },
  {
    entity: "EGO",
    role: entityRoles.ego,
    desc: "요구사항을 확인하고 제품·사양 검토, 견적, 판매, 발주, 납기와 납품 관리, 현장 요청과 A/S 접수를 담당합니다.",
  },
  {
    entity: "LS ELECTRIC",
    role: entityRoles.lsElectric,
    desc: "제품을 제조·공급하고 공식 제품 정보와 필요한 기술 확인의 기준을 제공합니다.",
  },
];

const phases = [
  {
    title: "공급 전",
    items: [
      "사용 목적, 제품명, 모델, 요구 사양, 수량과 희망 일정 확인",
      "취급·공급 가능 여부와 제품 정보 확인",
      "필요한 경우 LS ELECTRIC과 제품 및 사양 협의",
      "견적 조건과 주문 내용 안내",
    ],
  },
  {
    title: "공급 과정",
    items: [
      "주문 내용 재확인과 제조사 발주",
      "제조사 납기 확인과 일정 안내",
      "출고, 납품 장소와 수령 조건 확인",
      "변경 또는 추가 요청 접수와 관계자 커뮤니케이션",
    ],
  },
  {
    title: "공급 후",
    items: [
      "제품 관련 문의와 현장 요청 접수",
      "장애 증상과 제품 정보 확인",
      "필요한 제조사 기술지원, 수리 또는 교체 협의 연계",
      "진행 상황 안내와 완료 후 후속 확인",
    ],
  },
];

const valueCards = [
  {
    title: "정확한 제품 확인",
    body: "제품명만 전달받아 바로 확정하지 않습니다. 사용 목적과 요청 사양을 함께 확인하고, 필요한 경우 제조사 확인을 거쳐 공급 가능 여부를 안내합니다.",
  },
  {
    title: "보이는 진행 과정",
    body: "견적, 발주, 납기, 출고와 납품 단계에서 확인된 진행 상황을 고객에게 안내합니다.",
  },
  {
    title: "이어지는 고객 접점",
    body: "납품 이후의 제품 관련 문의와 장애도 EGO가 접수해 필요한 지원 절차를 연결합니다.",
  },
  {
    title: "현장 요청의 맥락 유지",
    body: "제품 공급 과정에서 확인한 정보와 현장 요청을 바탕으로 고객사와 제조사 사이의 소통을 지원합니다.",
  },
];

/** 회사 개요 — 확정된 값만 표기, 미확정 행은 "확정 후 게재 예정" */
const overviewRows: { label: string; value: string; pending?: boolean }[] = [
  { label: "회사명", value: company.name },
  { label: "영문 의미", value: company.nameMeaning },
  { label: "대표이사", value: company.pending, pending: true },
  { label: "설립", value: company.pending, pending: true },
  { label: "주요 사업", value: company.mainBusiness },
  { label: "주요 고객·경험", value: "GS칼텍스 관련 제품 공급 및 현장 대응 경험" },
  { label: "사업장", value: company.pending, pending: true },
  { label: "대표 연락처", value: company.pending, pending: true },
];

export function Intro() {
  return (
    <SubPage path="/about/intro">
      {/* ── 1. EGO가 존재하는 이유 ── */}
      <SectionTitle size="lg">
        필요한 제품이 정확히 공급되고, 현장의 요청이 끊기지 않도록
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        산업 현장에서 제품 구매는 단순한 주문으로 끝나지 않습니다. 사용 목적과 사양, 수량, 납기와
        납품 장소를 확인해야 하며, 공급 이후에도 제품 관련 문의와 장애에 대응할 접점이 필요합니다.
        EGO는 고객이 LS ELECTRIC 제품을 검토하고 공급받는 과정과 이후의 요청을 한 흐름으로 이어가기
        위해 운영됩니다.
      </p>
      <p className="mt-4 border-l-[3px] border-brand bg-brand-soft px-4 py-3 text-[0.875rem] leading-relaxed text-ink-2">
        EGO는 확인되지 않은 범위를 약속하기보다, 필요한 정보를 정확히 확인하고 가능한 대응 절차를
        분명하게 안내하는 것을 중요하게 생각합니다.
      </p>

      {/* ── 2. EGO의 사업 구조 ── */}
      <SectionTitle size="lg" className="mt-12">
        제조사의 제품과 고객의 요구를 연결합니다
      </SectionTitle>
      <table className="tbl-classic mt-6">
        <caption className="sr-only">EGO의 사업 구조</caption>
        <tbody>
          {structureRows.map((row) => (
            <tr key={row.entity}>
              <th scope="row">
                {row.entity}
                {row.role ? (
                  <span className="mt-0.5 block whitespace-normal text-[0.6875rem] font-medium leading-snug text-muted">
                    {row.role}
                  </span>
                ) : null}
              </th>
              <td className="text-[0.9375rem] leading-relaxed text-ink-2">{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO는 고객 요청을 제품 공급에 필요한 정보로 정리하고, 제조사 확인이 필요한 사항을
        협의합니다. 주문 이후에는 납기와 출고 일정을 확인하고, 납품과 후속 요청의 진행 상황을
        고객에게 안내합니다.
      </p>

      {/* ── 3. 공급 전후의 담당 업무 ── */}
      <SectionTitle size="lg" className="mt-12">
        상담에서 후속 지원까지
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
        {phases.map((phase) => (
          <div key={phase.title} className="bg-white p-5">
            <BulletTitle>{phase.title}</BulletTitle>
            <ul className="list-sq mt-3 space-y-2 text-[0.875rem] leading-relaxed text-ink-2">
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── 4. 고객에게 제공하는 가치 ── */}
      <SectionTitle size="lg" className="mt-12">
        고객의 확인과 조율 부담을 줄입니다
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {valueCards.map((card, i) => (
          <article key={card.title} className="border border-line bg-white p-5">
            <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-line-strong">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-[1rem] font-bold text-ink">{card.title}</h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">{card.body}</p>
          </article>
        ))}
      </div>

      {/* ── 5. 대표이사 메시지 ── */}
      <SectionTitle size="lg" className="mt-12">
        정확한 공급과 책임 있는 대응으로 신뢰를 이어가겠습니다
      </SectionTitle>
      <div className="mt-6 border border-line bg-surface p-6 sm:p-8">
        <div className="space-y-4 text-[0.9375rem] leading-[1.9] text-ink-2">
          <p>안녕하십니까. EGO를 찾아주셔서 감사합니다.</p>
          <p>
            EGO는 고객이 필요로 하는 LS ELECTRIC 제품을 정확히 확인하고, 견적과 발주, 납품 과정이
            원활하게 이어지도록 책임 있게 대응하고 있습니다. 납품 이후의 현장 요청과 제품 관련
            문제도 고객의 접점에서 듣고, 필요한 제조사 지원과 협의를 연결하겠습니다.
          </p>
          <p>
            가능한 범위를 분명히 안내하고 약속한 진행을 꾸준히 관리함으로써, 오래 신뢰할 수 있는
            공급·지원 회사가 되겠습니다.
          </p>
        </div>
        {/* 대표이사 이름 미확정 — 직함만 표기 */}
        <p className="mt-6 text-right text-[0.9375rem] font-bold text-brand-navy">EGO 대표이사</p>
      </div>

      {/* ── 6. 회사 개요 ── */}
      <SectionTitle size="lg" className="mt-12">
        회사 개요
      </SectionTitle>
      <table className="tbl-classic mt-6">
        <caption className="sr-only">회사 개요</caption>
        <tbody>
          {overviewRows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td className={row.pending ? "text-muted" : "text-ink-2"}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        ※ 확인된 정보만 게재하며, 미확정 항목은 회사 확인 후 업데이트됩니다.
      </p>

      {/* ── 7. CTA ── */}
      <CtaBanner
        className="mt-12"
        title="필요한 제품과 현장 요청을 알려주시면 확인 절차를 안내드립니다"
        body="EGO가 실제로 어떤 과정을 담당하는지 사업영역에서 확인해 보세요."
        primary={{ label: "사업영역 자세히 보기", to: "/business/supply" }}
        secondary={{ label: "제품·견적 문의", to: "/support/inquiry" }}
      />
    </SubPage>
  );
}

export default Intro;
