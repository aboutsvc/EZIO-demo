import CtaBanner from "../../components/CtaBanner";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";

/**
 * 기술지원 및 A/S — 역할 / 접수 가능한 요청 / 준비 정보 / 절차 6단계 /
 * 제조사 연계(명확화 문구 포함) / 수리·교체·단종 / 안전 긴급 안내 / CTA
 * ⚠️ EGO를 공식 인증 서비스센터·직접 수리 조직처럼 보이게 하지 않는다.
 */

const acceptableRequests = [
  "제품 사양, 모델과 공식 자료 확인",
  "사용 중 발생한 오류, 경고 또는 이상 동작",
  "전원, 표시, 통신 또는 작동 상태 관련 제품 문의",
  "외관 손상, 포장·운송 중 이상 확인",
  "수리 또는 교체 가능 여부 문의",
  "보증 적용 가능 여부 확인 요청",
  "단종 여부와 대체 제품 검토 요청",
  "기존 접수 건의 진행 상황 문의",
];

const prepareItems = [
  "회사명, 현장명과 담당자 연락처",
  "제품명과 제품군",
  "모델명",
  "시리얼번호 또는 제조번호",
  "구입·납품 정보 (알고 있는 경우)",
  "설치 또는 사용 현장",
  "장애 증상과 표시되는 오류 코드",
  "장애 발생 시점과 발생 전후 상황",
  "반복 여부와 현재 작동 상태",
  "제품 명판, 표시 화면, 설치 상태 사진",
  "증상을 확인할 수 있는 영상",
  "이미 시도한 조치와 그 결과",
  "현장 안전 또는 생산에 미치는 영향",
];

const serviceRows = [
  {
    step: "1. 요청 접수",
    work: "제품 정보, 현장, 증상, 발생 시점, 긴급도와 자료 접수",
    guide: "필수 정보가 부족하면 추가 자료를 요청할 수 있습니다.",
  },
  {
    step: "2. 초기 확인",
    work: "접수 내용과 공급 이력 확인, 안전상 주의와 기본 확인 항목 안내",
    guide: "원격 정보만으로 원인을 확정하지 않습니다.",
  },
  {
    step: "3. 제조사·기술조직 연계",
    work: "추가 기술 검토가 필요한 내용을 정리해 관련 조직과 협의",
    guide: "협의 주체와 필요한 자료를 안내합니다.",
  },
  {
    step: "4. 대응 방안 협의",
    work: "점검, 수리, 교체, 회수 또는 추가 확인 필요 여부 협의",
    guide: "가능 여부, 비용과 일정은 확인 결과에 따라 안내합니다.",
  },
  {
    step: "5. 진행 상황 안내",
    work: "접수, 확인, 자료 보완, 처리 진행과 일정 변경 안내",
    guide: "확인 중인 내용과 다음 단계를 구분해 안내합니다.",
  },
  {
    step: "6. 완료 및 후속 관리",
    work: "처리 결과, 교체·반환 제품, 추가 주의사항과 재발 여부 확인",
    guide: "처리 범위와 남은 확인사항을 정리합니다.",
  },
];

export function Service() {
  return (
    <SubPage path="/business/service">
      {/* ── 1. EGO의 역할 ── */}
      <SectionTitle size="lg">고객의 요청을 듣고 다음 지원 절차를 연결합니다</SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO는 공급한 LS ELECTRIC 제품과 관련된 정보 문의, 이상 증상과 장애 요청을 접수합니다.
        제품명, 모델, 시리얼번호, 사용 현장과 증상을 확인한 뒤 가능한 초기 확인 사항을 안내합니다.
        추가 기술 검토가 필요하면 LS ELECTRIC 또는 관련 기술조직과 협의하고, 확인 결과와 다음
        절차를 고객에게 안내합니다.
      </p>
      <p className="mt-4 border-l-[3px] border-brand bg-brand-soft px-4 py-3 text-[0.875rem] leading-relaxed text-ink-2">
        EGO는 고객 접수와 진행 관리를 담당합니다. 실제 점검·수리·교체 주체와 처리 방식은 제품,
        보증 조건, 장애 원인과 제조사 확인 결과에 따라 달라질 수 있습니다.
      </p>

      {/* ── 2. 접수 가능한 요청 ── */}
      <SectionTitle size="lg" className="mt-12">
        다음과 같은 요청을 접수할 수 있습니다
      </SectionTitle>
      <ul className="list-sq mt-6 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
        {acceptableRequests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        접수 가능한 세부 범위는 EGO의 공급 이력, 제품 종류와 제조사 지원 기준에 따라 확인 후
        안내합니다.
      </p>

      {/* ── 3. 접수 전에 준비할 정보 ── */}
      <SectionTitle size="lg" className="mt-12">
        제품과 증상을 정확히 확인할 수 있는 정보를 준비해 주세요
      </SectionTitle>
      <ul className="list-sq mt-6 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
        {prepareItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        전원을 끄거나 재가동하는 조치는 현장 안전 절차와 제품 지침에 따라 가능한 경우에만 진행해
        주세요. 안전이 확인되지 않은 상태에서 제품을 분해하거나 임의로 조작하지 마세요.
      </p>

      {/* ── 4. 기술지원 및 A/S 절차 (6단계 표) ── */}
      <SectionTitle size="lg" className="mt-12">
        접수부터 후속 확인까지
      </SectionTitle>
      <table className="tbl-classic mt-6">
        <caption className="sr-only">기술지원 및 A/S 절차</caption>
        <thead>
          <tr>
            <th scope="col" className="w-[12rem]">
              단계
            </th>
            <th scope="col">업무 내용</th>
            <th scope="col" className="hidden lg:table-cell">
              안내 기준
            </th>
          </tr>
        </thead>
        <tbody>
          {serviceRows.map((row) => (
            <tr key={row.step}>
              <th scope="row" className="whitespace-normal">
                {row.step}
              </th>
              <td className="leading-relaxed text-ink-2">
                {row.work}
                <span className="mt-1 block text-[0.8125rem] text-muted lg:hidden">
                  {row.guide}
                </span>
              </td>
              <td className="hidden text-[0.875rem] leading-relaxed text-muted lg:table-cell">
                {row.guide}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── 5. 제조사 연계 구조 ── */}
      <SectionTitle size="lg" className="mt-12">
        공식 제품 정보와 기술 확인은 제조사 기준으로 연결합니다
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        제품의 공식 사양, 보증 기준, 수리·교체 가능 여부와 기술 판단에 제조사 확인이 필요한 경우
        EGO가 요청 내용을 정리해 LS ELECTRIC 또는 관련 기술조직과 협의합니다. 고객에게는 접수 상태,
        추가로 필요한 정보, 확인 결과와 다음 절차를 안내합니다.
      </p>
      <p className="mt-4 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        EGO는 LS ELECTRIC 공식 인증 서비스센터라고 별도 확인되지 않았습니다. 웹사이트에서는 EGO를
        고객 접수와 제조사 연계를 담당하는 대리점 및 공급·지원 회사로 설명합니다.
      </p>

      {/* ── 6. 수리·교체와 단종 제품 ── */}
      <SectionTitle size="lg" className="mt-12">
        처리 가능 여부는 제품 상태와 제조사 확인 후 안내합니다
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <article className="border border-line bg-white p-5">
          <h3 className="text-[1rem] font-bold text-ink">수리·교체 안내</h3>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">
            수리 또는 교체 필요성이 있는 경우 제품 상태, 보증 조건, 장애 원인, 부품과 대체품 공급
            가능 여부를 확인합니다. 비용, 일정과 처리 방식은 확인 결과를 바탕으로 별도 안내합니다.
          </p>
        </article>
        <article className="border border-line bg-white p-5">
          <h3 className="text-[1rem] font-bold text-ink">단종·대체 제품 안내</h3>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">
            단종이 의심되거나 동일 모델의 공급이 어려운 경우 제조사 정보를 확인하고 대체 제품 검토
            가능 여부를 안내합니다. 대체 제품의 적용 가능성은 기존 사양과 현장 조건을 확인한 뒤
            판단해야 하며, 확인 전 호환을 보장하지 않습니다.
          </p>
        </article>
      </div>

      {/* ── 7. 안전 관련 긴급 안내 — 눈에 띄게 표시 ── */}
      <div className="mt-12 border-2 border-[#b4232a] bg-[#fdf3f3] p-6">
        <h2 className="flex items-center gap-2 text-[1.125rem] font-bold text-[#8f1c22]">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 3 2.5 20h19L12 3z" strokeLinejoin="round" />
            <path d="M12 10v4.5" strokeLinecap="round" />
            <circle cx="12" cy="17.2" r="0.6" fill="currentColor" stroke="none" />
          </svg>
          안전 위험이 있는 경우 현장 안전조치를 먼저 시행해 주세요
        </h2>
        <p className="mt-3 text-[0.9375rem] leading-[1.85] text-ink-2">
          화재, 연기, 타는 냄새, 이상 발열, 감전 위험 또는 인명 위험이 있는 경우 현장 안전 규정에
          따라 장비 접근을 통제하고 전원 차단 등 필요한 안전조치를 우선 시행해 주세요. 필요하면
          119와 사업장 안전 담당자 등 긴급 대응 체계에 먼저 연락하세요. 안전이 확보된 뒤 EGO에 제품
          정보와 상황을 접수해 주세요.
        </p>
        <p className="mt-3 text-[0.8125rem] font-semibold text-[#8f1c22]">
          EGO의 A/S 접수는 긴급 구조나 현장 안전 대응을 대신하지 않습니다.
        </p>
      </div>

      {/* ── 8. CTA (A/S 페이지 변형 문구) ── */}
      <CtaBanner
        className="mt-12"
        title="제품 정보와 증상을 보내주세요"
        body="모델명, 시리얼번호, 장애 증상, 발생 시점과 사진·영상을 함께 보내주시면 확인 절차를 안내드립니다."
        primary={{ label: "A/S 접수하기", to: "/support/as" }}
        secondary={{ label: "기술자료 확인하기", to: "/support/resources" }}
      />
    </SubPage>
  );
}

export default Service;
