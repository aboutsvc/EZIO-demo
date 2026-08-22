import DemoForm, { type DemoFormField } from "../../components/DemoForm";
import ProcessSteps from "../../components/ProcessSteps";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";

/**
 * A/S 접수 — 안전 긴급 안내(최상단) / 접수 가능 요청 / 데모 폼 / 처리 절차 7단계 / 비보장 문구
 * ⚠️ 데모 폼 — 실제 전송되지 않는다. "24시간 긴급 A/S", "즉시 해결", "무상 교체" 등 표현 금지.
 */

const acceptableRequests = [
  "제품 작동 이상 또는 장애 증상",
  "오류 코드와 경고 표시 확인",
  "제품 외관·포장·운송 중 이상",
  "제품 사양 또는 사용 관련 공식 자료 문의",
  "점검, 수리 또는 교체 가능 여부 문의",
  "보증 적용 가능 여부 확인 요청",
  "단종 또는 대체 제품 검토 요청",
  "기존 접수 건의 진행 상황 확인",
];

const formFields: DemoFormField[] = [
  {
    id: "type",
    label: "요청 유형",
    required: true,
    type: "select",
    options: [
      "장애",
      "제품 문의",
      "점검 요청",
      "수리·교체 문의",
      "단종·대체 문의",
      "진행 확인",
      "기타",
    ],
  },
  { id: "company", label: "회사명", required: true },
  { id: "name", label: "이름", required: true },
  { id: "phone", label: "연락처", required: true, type: "tel" },
  { id: "product", label: "제품명", required: true },
  { id: "model", label: "모델명", required: true, placeholder: "모르면 “확인 중”으로 입력 후 사진 첨부 안내" },
  { id: "serial", label: "시리얼번호", placeholder: "가능한 경우 입력" },
  { id: "site", label: "설치 또는 사용 현장", required: true },
  { id: "symptom", label: "증상과 오류 코드", required: true, type: "textarea" },
  { id: "occurred", label: "발생 시점", required: true },
  {
    id: "urgency",
    label: "긴급도",
    type: "select",
    options: ["일반", "업무 영향 있음", "운영 중단", "안전 위험"],
  },
];

const processStepsData = [
  { title: "접수 확인", desc: "제품, 현장, 증상과 긴급도를 확인합니다." },
  {
    title: "추가 정보 요청",
    desc: "모델, 시리얼번호, 사진·영상 등 확인에 필요한 자료를 요청할 수 있습니다.",
  },
  { title: "초기 대응 안내", desc: "안전이 확보된 범위에서 확인 가능한 기본 항목을 안내합니다." },
  {
    title: "제조사 또는 기술조직 협의",
    desc: "추가 판단이 필요한 내용을 LS ELECTRIC 또는 관련 기술조직과 협의합니다.",
  },
  {
    title: "처리 방향 안내",
    desc: "점검, 수리, 교체, 회수, 추가 자료 또는 대체 제품 검토 여부를 안내합니다.",
  },
  {
    title: "일정·비용 확인",
    desc: "가능 여부와 일정·비용이 발생하는 경우 확인 후 별도로 안내합니다.",
  },
  {
    title: "완료와 후속 확인",
    desc: "처리 결과와 남은 주의사항을 정리하고 필요한 후속 내용을 확인합니다.",
  },
];

export function As() {
  return (
    <SubPage path="/support/as">
      {/* ── 1. 안전 관련 긴급 안내 — 최상단, 시각적으로 구분 ── */}
      <div className="border-2 border-[#b4232a] bg-[#fdf3f3] p-6">
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
          안전이 우선입니다
        </h2>
        <p className="mt-3 text-[0.9375rem] leading-[1.85] text-ink-2">
          화재, 연기, 타는 냄새, 이상 발열, 감전 위험 또는 인명 위험이 있는 경우 제품에 접근하거나
          임의로 분해하지 마세요. 현장 안전 규정에 따라 접근 통제와 전원 차단 등 필요한 조치를
          시행하고, 119와 사업장 안전 담당자 등 긴급 대응 체계에 먼저 연락하세요. 안전이 확보된 뒤
          EGO에 제품 정보와 상황을 접수해 주세요.
        </p>
        <p className="mt-3 text-[0.8125rem] font-semibold text-[#8f1c22]">
          EGO의 A/S 접수는 긴급 구조, 화재 대응 또는 현장 안전조치를 대신하지 않습니다.
        </p>
      </div>

      {/* ── 2. 접수 가능한 요청 ── */}
      <SectionTitle size="lg" className="mt-12">
        다음 요청을 접수할 수 있습니다
      </SectionTitle>
      <ul className="list-sq mt-6 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
        {acceptableRequests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        실제 지원 가능 범위와 처리 주체는 제품, 공급 이력, 보증 조건, 장애 원인과 제조사 기준에
        따라 달라질 수 있습니다.
      </p>

      {/* ── 3. A/S 접수 양식 (데모 폼) ── */}
      <SectionTitle size="lg" className="mt-12">
        A/S 접수 작성하기
      </SectionTitle>
      <p className="mt-4 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        긴급도는 현장 영향 파악을 위한 정보이며 특정 대응 시간이나 즉시 출동을 보장하지 않습니다.
        안전 위험을 선택한 경우 A/S 접수 전 현장 안전조치와 긴급 연락 체계를 먼저 이용해 주세요.
      </p>
      <div className="mt-5">
        <DemoForm
          formId="as"
          fields={formFields}
          consentLabel="개인정보 수집·이용에 동의합니다. (데모 폼 — 입력한 정보는 실제로 수집·전송되지 않습니다)"
          submitLabel="A/S 접수하기"
          successMessage="A/S 요청이 접수되었습니다. 보내주신 제품 정보와 증상을 확인한 뒤 담당자가 연락드리겠습니다. (데모 — 실제 전송되지 않습니다)"
        />
      </div>

      {/* ── 4. 접수 이후 처리 절차 (7단계) ── */}
      <SectionTitle size="lg" className="mt-12">
        접수 후 다음 순서로 확인합니다
      </SectionTitle>
      <div className="mt-6">
        <ProcessSteps steps={processStepsData} cols={3} />
      </div>

      {/* ── 5. 제조사 확인·비보장 문구 ── */}
      <SectionTitle size="lg" className="mt-12">
        제품 판단과 처리 방식은 제조사 확인이 필요할 수 있습니다
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        공식 사양, 보증 적용, 장애 원인, 수리·교체 가능 여부, 부품과 대체 제품의 공급 가능성은 LS
        ELECTRIC 또는 관련 기술조직의 확인이 필요할 수 있습니다. 이 경우 EGO가 접수 내용을
        전달하고, 추가 자료와 예상 절차, 확인 결과를 고객에게 안내합니다.
      </p>
      <p className="mt-4 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        접수는 무상 수리, 교환, 출장 또는 특정 완료일을 확정하는 절차가 아닙니다. 실제 처리 방식은
        확인 결과에 따라 달라질 수 있습니다.
      </p>
    </SubPage>
  );
}

export default As;
