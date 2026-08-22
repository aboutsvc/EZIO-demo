import CtaBanner from "../../components/CtaBanner";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";

/** 비전 및 경영철학 — 도입 / 비전 / 미션 / 핵심가치 4 / 실천 기준 표 / 고객 약속 */

const coreValues = [
  {
    title: "정확성",
    body: "제품명, 모델, 사양, 수량, 일정과 납품 조건을 확인한 뒤 안내합니다. 불확실한 내용은 추정해 확정하지 않고 제조사 또는 관련 담당자에게 확인합니다.",
  },
  {
    title: "책임 있는 대응",
    body: "요청을 접수하는 데서 끝내지 않습니다. 담당 범위와 다음 절차를 안내하고, 확인 중인 사항과 진행 상황을 고객이 알 수 있도록 관리합니다.",
  },
  {
    title: "연결과 협업",
    body: "고객 현장의 요구와 LS ELECTRIC의 제품·기술 정보를 정확히 연결합니다. 필요한 사람이 같은 정보를 바탕으로 협의할 수 있도록 요청 내용을 정리하고 소통을 지원합니다.",
  },
  {
    title: "장기적인 신뢰",
    body: "한 번의 납품보다 반복해서 신뢰할 수 있는 관계를 중요하게 생각합니다. 지킬 수 있는 약속을 하고, 변경이나 지연이 확인되면 사실과 대응 방향을 투명하게 안내합니다.",
  },
];

const practiceRows = [
  {
    situation: "제품 문의",
    standard: "사용 목적과 요구 사양을 확인하고, 확인되지 않은 호환성이나 성능을 단정하지 않습니다.",
  },
  {
    situation: "견적과 주문",
    standard: "모델, 수량, 조건과 유효기간을 명확히 안내하고 주문 전 내용을 다시 확인합니다.",
  },
  {
    situation: "납기 관리",
    standard: "제조사 확인을 기준으로 일정을 안내하고, 변동이 생기면 확인된 내용을 신속히 공유합니다.",
  },
  {
    situation: "현장 요청",
    standard: "요청 내용과 긴급도를 파악하고, EGO가 할 수 있는 대응과 추가 확인이 필요한 부분을 구분합니다.",
  },
  {
    situation: "장애와 A/S",
    standard: "제품 정보와 증상을 먼저 확인하고, 직접 보장할 수 없는 수리·교체 결과는 제조사 확인 후 안내합니다.",
  },
];

export function Vision() {
  return (
    <SubPage path="/about/vision">
      {/* ── 1. 도입 ── */}
      <SectionTitle size="lg">구호보다 매일의 업무로 증명하는 원칙</SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        산업 현장의 제품 공급에는 정확한 정보, 일정 관리와 꾸준한 커뮤니케이션이 필요합니다. EGO는
        고객에게 가능한 범위를 분명히 알리고, 확인된 제품과 진행 정보를 바탕으로 공급과 후속 대응을
        이어가는 것을 가장 중요한 운영 원칙으로 삼습니다.
      </p>

      {/* ── 2. 비전 ── */}
      <SectionTitle size="lg" className="mt-12">
        비전
      </SectionTitle>
      <div className="mt-6 border border-brand-navy bg-brand-navy p-6 text-white sm:p-8">
        <p className="text-[1.125rem] font-bold leading-[1.6] tracking-[-0.02em] sm:text-[1.25rem]">
          “제품 공급과 현장 지원을 꾸준히 연결해, 고객의 안정적인 운영에 기여하는 신뢰받는
          공급·지원 회사”
        </p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
          EGO가 지향하는 성장은 취급 범위나 규모를 과장하는 데 있지 않습니다. 필요한 제품을 정확히
          확인하고, 공급 과정과 제품 관련 후속 요청을 책임 있게 관리함으로써 고객이 다시 찾을 수
          있는 거래 관계를 만드는 데 있습니다.
        </p>
      </div>

      {/* ── 3. 미션 ── */}
      <SectionTitle size="lg" className="mt-12">
        미션
      </SectionTitle>
      <div className="mt-6 border border-line bg-surface p-6 sm:p-8">
        <p className="text-[1.0625rem] font-bold leading-[1.6] text-brand-navy">
          “고객 요구를 정확히 확인하고, 적합한 LS ELECTRIC 제품의 상담·견적·공급과 제품 관련 후속
          지원을 책임 있게 연결합니다.”
        </p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
          고객의 요청을 듣는 단계부터 제품과 사양 검토, 발주와 납기 관리, 현장 요청 및 제조사 연계
          A/S까지 각 단계의 정보가 끊기지 않게 관리합니다.
        </p>
      </div>

      {/* ── 4. 핵심가치 ── */}
      <SectionTitle size="lg" className="mt-12">
        핵심가치
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {coreValues.map((value, i) => (
          <article key={value.title} className="border border-line bg-white p-5">
            <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-line-strong">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-[1.0625rem] font-bold text-brand-navy">{value.title}</h3>
            <div aria-hidden="true" className="mt-2 h-[3px] w-10 bg-brand" />
            <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-2">{value.body}</p>
          </article>
        ))}
      </div>

      {/* ── 5. 업무에서의 실천 기준 ── */}
      <SectionTitle size="lg" className="mt-12">
        핵심가치를 업무에 적용하는 방법
      </SectionTitle>
      <table className="tbl-classic mt-6">
        <caption className="sr-only">업무에서의 실천 기준</caption>
        <thead>
          <tr>
            <th scope="col" className="w-[8.5rem]">
              업무 상황
            </th>
            <th scope="col">EGO의 실천 기준</th>
          </tr>
        </thead>
        <tbody>
          {practiceRows.map((row) => (
            <tr key={row.situation}>
              <th scope="row">{row.situation}</th>
              <td className="leading-relaxed text-ink-2">{row.standard}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── 6. 고객에게 드리는 약속 ── */}
      <SectionTitle size="lg" className="mt-12">
        확인된 정보를 바탕으로, 다음 단계를 분명히 안내하겠습니다
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO는 제품 공급과 지원 과정에서 고객이 현재 상황과 다음 절차를 알 수 있도록 노력합니다.
        가능한 대응은 구체적으로 안내하고, 제조사 확인이 필요한 사항은 그 범위와 예상 절차를 분명히
        설명하겠습니다.
      </p>

      {/* ── 7. CTA ── */}
      <CtaBanner
        className="mt-12"
        title="EGO가 실제로 어떤 과정을 담당하는지 사업영역에서 확인해 보세요"
        body="필요한 제품과 지원 내용을 알려주시면 확인에 필요한 내용을 안내드립니다."
        primary={{ label: "사업영역 확인하기", to: "/business/supply" }}
        secondary={{ label: "제품·견적 문의하기", to: "/support/inquiry" }}
      />
    </SubPage>
  );
}

export default Vision;
