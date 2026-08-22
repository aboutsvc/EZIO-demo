import CtaBanner from "../../components/CtaBanner";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { productScopeNote } from "../../data/content";

/**
 * LS ELECTRIC 제품 공급 — 역할 / 확인 정보 / 공급 절차 7단계 / 편의 카드 4 /
 * 취급 제품군 안내(문의 유도) / 문의 전 준비 정보 / CTA
 * ⚠️ 취급 제품군 목록을 만들지 않는다 — 명세서 확인 문구만 사용.
 */

const checkItems = [
  "제품명 또는 제품군",
  "기존 사용 모델명과 제조번호 (해당하는 경우)",
  "필요한 사양, 정격과 옵션",
  "사용 목적과 설치·사용 환경에 대한 기본 정보",
  "수량",
  "희망 납기일",
  "납품 장소와 수령 조건",
  "대체 또는 호환 검토가 필요한 기존 제품 정보",
  "도면, 사양서, 제품 명판 사진 등 참고자료",
];

const supplySteps = [
  {
    step: "1. 요구사항 확인",
    work: "제품명, 모델, 사양, 수량, 용도, 일정과 납품 조건 확인",
    guide: "알고 있는 제품 정보와 필요한 조건을 보내주세요.",
  },
  {
    step: "2. 제품·사양 검토",
    work: "EGO 취급 여부와 제품 정보 검토, 필요한 경우 제조사 협의",
    guide: "추가 확인이 필요한 사양은 LS ELECTRIC과 협의한 뒤 안내드립니다.",
  },
  {
    step: "3. 견적",
    work: "제품, 수량, 가격 조건, 납기 기준과 견적 유효기간 안내",
    guide: "견적서의 모델·수량·조건을 확인해 주세요.",
  },
  {
    step: "4. 주문 확인 및 발주",
    work: "고객 주문 내용 재확인 후 제조사 발주",
    guide: "발주 전 최종 제품과 납품 조건을 확인합니다.",
  },
  {
    step: "5. 제조사 납기 확인",
    work: "제조사 기준 납기와 변동 사항 확인",
    guide: "확인된 일정을 안내하고 변동 시 내용을 공유합니다.",
  },
  {
    step: "6. 출고 및 납품 관리",
    work: "출고, 납품 장소, 수령 일정과 전달 사항 관리",
    guide: "수령 담당자와 납품 조건을 확인해 진행합니다.",
  },
  {
    step: "7. 후속 확인",
    work: "수령 여부, 누락·파손·제품 관련 요청 확인",
    guide: "납품 후 확인이 필요한 내용은 EGO로 알려주세요.",
  },
];

const convenienceCards = [
  {
    title: "요구사항 정리",
    body: "고객이 전달한 제품·사양·수량·일정을 공급 확인에 필요한 형태로 정리합니다.",
  },
  {
    title: "제조사 협의 연결",
    body: "제품 정보나 납기에 제조사 확인이 필요한 경우 LS ELECTRIC과 협의하고 확인 결과를 안내합니다.",
  },
  {
    title: "발주와 일정 관리",
    body: "주문 이후 발주와 납기, 출고와 납품 단계의 진행 정보를 이어서 관리합니다.",
  },
  {
    title: "납품 후 접점 유지",
    body: "납품 이후에도 제품 관련 문의와 장애 요청을 같은 접점에서 접수합니다.",
  },
];

const prepareItems = [
  "회사명과 담당자 연락처",
  "제품명·모델명 또는 제품 명판 사진",
  "필요한 수량",
  "요구 사양과 옵션",
  "사용 목적 또는 대체 대상 제품",
  "희망 납기일과 납품 장소",
  "관련 도면·사양서·사진",
];

export function Supply() {
  return (
    <SubPage path="/business/supply">
      {/* ── 1. 제품 공급 역할 ── */}
      <SectionTitle size="lg">제품 선택부터 납품까지 필요한 확인을 이어갑니다</SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO는 LS ELECTRIC 대리점으로서 고객이 필요로 하는 전기 및 시스템 관련 완제품을 확인하고
        견적과 판매를 진행합니다. 고객의 사용 목적, 제품명과 모델, 요구 사양, 수량, 희망 일정과
        납품 조건을 바탕으로 공급 가능 여부를 확인합니다. 주문 이후에는 제조사 발주와 납기 확인,
        출고와 납품 과정을 관리합니다.
      </p>
      <p className="mt-4 border-l-[3px] border-brand bg-brand-soft px-4 py-3 text-[0.875rem] leading-relaxed text-ink-2">
        제품의 제조와 공식 사양·성능 기준은 LS ELECTRIC이 제공합니다. EGO는 제품 선택과 공급에
        필요한 고객 접점을 담당하며, 제조사 확인이 필요한 사항을 협의합니다.
      </p>

      {/* ── 2. 먼저 확인하는 정보 ── */}
      <SectionTitle size="lg" className="mt-12">
        정확한 견적을 위해 고객의 요구를 먼저 확인합니다
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2">
        같은 제품군 안에서도 모델, 정격, 옵션과 사용 조건에 따라 확인해야 할 내용이 달라질 수
        있습니다. 아래 정보 중 알고 있는 내용을 보내주시면 제품과 견적 확인에 도움이 됩니다.
      </p>
      <ul className="list-sq mt-5 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
        {checkItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        정확한 모델을 모르시는 경우 사용 목적과 기존 제품 정보를 보내주세요. 확인에 추가 정보가
        필요하면 담당자가 안내드립니다.
      </p>

      {/* ── 3. 제품 공급 업무 절차 (7단계 표) ── */}
      <SectionTitle size="lg" className="mt-12">
        문의부터 납품까지
      </SectionTitle>
      <table className="tbl-classic mt-6">
        <caption className="sr-only">제품 공급 업무 절차</caption>
        <thead>
          <tr>
            <th scope="col" className="w-[11rem]">
              단계
            </th>
            <th scope="col">업무</th>
            <th scope="col" className="hidden lg:table-cell">
              고객 안내 문구
            </th>
          </tr>
        </thead>
        <tbody>
          {supplySteps.map((row) => (
            <tr key={row.step}>
              <th scope="row" className="whitespace-normal">
                {row.step}
              </th>
              <td className="leading-relaxed text-ink-2">
                {row.work}
                <span className="mt-1 block text-[0.8125rem] text-muted lg:hidden">
                  “{row.guide}”
                </span>
              </td>
              <td className="hidden text-[0.875rem] leading-relaxed text-muted lg:table-cell">
                “{row.guide}”
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── 4. EGO를 통해 얻는 편의 ── */}
      <SectionTitle size="lg" className="mt-12">
        공급 과정의 확인 창구를 일관되게 유지합니다
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {convenienceCards.map((card, i) => (
          <article key={card.title} className="border border-line bg-white p-5">
            <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-line-strong">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-[1rem] font-bold text-ink">{card.title}</h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">{card.body}</p>
          </article>
        ))}
      </div>

      {/* ── 5. 취급 제품군 안내 — 목록을 만들지 않고 확인 문구만 사용 ── */}
      <SectionTitle size="lg" className="mt-12">
        EGO 취급 제품
      </SectionTitle>
      <div className="mt-6 border border-line bg-surface p-6">
        <p className="text-[0.9375rem] leading-[1.85] text-ink-2">
          EGO가 실제 취급하는 LS ELECTRIC 제품군은 회사 확인 후 공개합니다. 제품명 또는 모델을
          알려주시면 취급 및 공급 가능 여부를 확인해 드립니다.
        </p>
        <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">{productScopeNote}</p>
      </div>

      {/* ── 6. 문의 전에 준비할 정보 ── */}
      <SectionTitle size="lg" className="mt-12">
        제품·견적 문의가 빨라지는 정보
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2">
        아래 정보를 모두 알지 못해도 문의할 수 있습니다. 다만 제품명, 모델, 사양, 수량과 희망
        일정이 구체적일수록 확인 범위를 빠르게 좁힐 수 있습니다.
      </p>
      <ul className="list-sq mt-5 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
        {prepareItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* ── 7. CTA (제품 공급 페이지 변형 문구) ── */}
      <CtaBanner
        className="mt-12"
        title="필요한 제품과 조건을 알려주세요"
        body="정확한 모델을 모르셔도 사용 목적, 기존 제품 정보와 희망 일정을 보내주시면 확인에 필요한 내용을 안내드립니다."
        primary={{ label: "제품·견적 문의하기", to: "/support/inquiry" }}
        secondary={{ label: "기술자료·카탈로그 보기", to: "/support/resources" }}
      />
    </SubPage>
  );
}

export default Supply;
