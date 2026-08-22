import DemoForm, { type DemoFormField } from "../../components/DemoForm";
import ProcessSteps from "../../components/ProcessSteps";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { commonCta } from "../../data/content";

/**
 * 제품·견적 문의 — 접수 가능 항목 / 준비 정보 / 데모 폼 / 접수 이후 처리 흐름 5단계
 * ⚠️ 데모 폼 — 실제 전송되지 않는다. 회사 연락처(전화·이메일)는 미확정이므로 표기하지 않는다.
 */

const acceptableItems = [
  "EGO의 LS ELECTRIC 제품 취급 여부",
  "제품 또는 사양 검토 요청",
  "제품 가격과 견적 요청",
  "수량별 공급 가능 여부",
  "제조사 납기 및 희망 일정 확인",
  "추가 구매 또는 기존 제품 대체 검토",
  "납품 장소와 현장 요청사항 상담",
  "카탈로그, 매뉴얼 또는 사양서 요청",
];

const essentialInfo = [
  "회사명과 담당자 정보",
  "문의 목적",
  "제품명·모델명 또는 필요한 제품의 용도",
  "수량",
  "희망 회신 방법",
];

const helpfulInfo = [
  "세부 사양, 정격과 옵션",
  "기존 제품의 명판 사진",
  "도면, 사양서 또는 구매 요청서",
  "사용 현장과 기본 환경",
  "희망 납기일과 납품 장소",
  "대체 검토가 필요한 기존 제품 정보",
];

const formFields: DemoFormField[] = [
  {
    id: "type",
    label: "문의 분류",
    required: true,
    type: "select",
    options: ["제품 문의", "견적 요청", "납기 문의", "대체 제품 검토", "기술자료 요청", "기타"],
  },
  { id: "company", label: "회사명", required: true },
  { id: "name", label: "이름", required: true },
  { id: "phone", label: "전화번호", required: true, type: "tel" },
  { id: "email", label: "이메일", required: true, type: "email" },
  { id: "product", label: "제품명 또는 제품군", placeholder: "알고 있는 경우 입력" },
  { id: "model", label: "모델명", placeholder: "알고 있는 경우 입력" },
  { id: "quantity", label: "수량", placeholder: "견적 요청 시 권장" },
  { id: "duedate", label: "희망 납기일", placeholder: "해당하는 경우 입력" },
  { id: "message", label: "문의 내용", required: true, type: "textarea" },
];

const flowSteps = [
  { title: "문의 접수", desc: "작성한 내용이 EGO에 접수됩니다." },
  { title: "내용 검토", desc: "제품, 사양, 수량, 일정과 요청사항을 확인합니다." },
  { title: "추가 정보 확인", desc: "확인에 필요한 정보가 부족하면 담당자가 연락드립니다." },
  {
    title: "제조사 확인",
    desc: "제품·사양·납기에 제조사 확인이 필요한 경우 LS ELECTRIC과 협의합니다.",
  },
  {
    title: "회신 및 견적 안내",
    desc: "확인된 공급 가능 여부, 견적 또는 다음 절차를 안내드립니다.",
  },
];

export function Inquiry() {
  return (
    <SubPage path="/support/inquiry">
      {/* ── 1. 접수 가능 항목 ── */}
      <SectionTitle size="lg">제품 구매와 공급에 필요한 내용을 문의해 주세요</SectionTitle>
      <ul className="list-sq mt-6 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
        {acceptableItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        제품의 공식 성능, 호환성, 납기와 공급 가능 여부는 관련 정보와 제조사 확인이 필요한 경우가
        있습니다. 확인 전에는 확정적으로 안내하지 않습니다.
      </p>

      {/* ── 2. 문의 전에 준비하면 좋은 정보 ── */}
      <SectionTitle size="lg" className="mt-12">
        알고 있는 정보만 보내주셔도 됩니다
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="border border-line bg-white p-5">
          <h3 className="text-[0.9375rem] font-bold text-brand-navy">필수에 가까운 정보</h3>
          <ul className="list-sq mt-3 space-y-2 text-[0.875rem] text-ink-2">
            {essentialInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-line bg-white p-5">
          <h3 className="text-[0.9375rem] font-bold text-brand-navy">
            있으면 확인에 도움이 되는 정보
          </h3>
          <ul className="list-sq mt-3 space-y-2 text-[0.875rem] text-ink-2">
            {helpfulInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        정확한 모델을 모르시면 사용 목적과 기존 제품 사진을 보내주세요.
      </p>

      {/* ── 3. 문의 양식 (데모 폼) ── */}
      <SectionTitle size="lg" className="mt-12">
        문의 작성하기
      </SectionTitle>
      <p className="mt-4 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        정확한 견적을 위해 제품 모델, 사양, 수량, 희망 납기와 납품 장소를 가능한 범위에서 작성해
        주세요. 영업비밀, 주민등록번호, 계정 비밀번호 등 문의 처리에 불필요한 민감 정보는 첨부하지
        마세요.
      </p>
      <div className="mt-5">
        <DemoForm
          formId="inquiry"
          fields={formFields}
          consentLabel="개인정보 수집·이용에 동의합니다. (데모 폼 — 입력한 정보는 실제로 수집·전송되지 않습니다)"
          submitLabel="문의 접수하기"
          successMessage="문의가 접수되었습니다. 보내주신 내용을 확인한 뒤 담당자가 연락드리겠습니다. (데모 — 실제 전송되지 않습니다)"
        />
      </div>

      {/* ── 4. 접수 이후 처리 흐름 ── */}
      <SectionTitle size="lg" className="mt-12">
        문의는 다음 순서로 확인합니다
      </SectionTitle>
      <div className="mt-6">
        <ProcessSteps steps={flowSteps} cols={3} />
      </div>
      <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted">{commonCta.replyNote}</p>
    </SubPage>
  );
}

export default Inquiry;
