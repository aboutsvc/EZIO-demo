import { Link } from "react-router-dom";
import ProcessSteps from "../components/ProcessSteps";
import SectionTitle from "../components/SectionTitle";
import SubPage from "../components/SubPage";

/**
 * 채용정보 — 도입 / 원하는 인재 특성 6 / 인재상 4 / 직무 예시 4("예시 직무" 배지) /
 * 일하는 방식 / 채용 절차 5단계 / 진행 중인 공고 없음 안내 / 공지사항 CTA
 * ⚠️ 급여·복리후생·모집 인원·근무지 등은 미확정 — 표기하지 않는다. 상시채용 암시 금지.
 */

const traits = [
  "제품명, 수량, 일정과 요청사항을 꼼꼼히 확인하는 사람",
  "확인되지 않은 내용을 단정하지 않고 필요한 정보를 찾아가는 사람",
  "고객과 현장의 긴급성을 이해하되 가능한 범위를 명확히 설명하는 사람",
  "진행 상황과 변경사항을 적시에 공유하는 사람",
  "제조사, 고객사와 내부 담당자 사이에서 요청을 정확히 전달하는 사람",
  "산업용 전기·시스템 제품과 현장 업무를 꾸준히 학습하는 사람",
];

const idealTypes = [
  {
    title: "정확하게 확인하는 사람",
    body: "제품, 사양, 수량, 일정과 조건을 기록하고 다시 확인합니다. 모르는 내용을 추정하기보다 필요한 질문을 하고 근거를 찾습니다.",
  },
  {
    title: "책임 있게 소통하는 사람",
    body: "요청을 받는 데서 끝내지 않고 담당 범위와 다음 절차를 알립니다. 변경이나 지연이 생기면 확인된 사실을 빠르게 공유합니다.",
  },
  {
    title: "현장의 맥락을 이해하는 사람",
    body: "같은 요청도 현장 상황과 업무 영향에 따라 중요도가 달라질 수 있음을 이해합니다. 고객의 설명을 듣고 핵심 정보를 정리합니다.",
  },
  {
    title: "함께 해결 방법을 찾는 사람",
    body: "혼자 결론 내리기보다 고객, 제조사와 동료에게 필요한 정보를 연결합니다. 역할과 책임을 분명히 하면서 협업합니다.",
  },
];

const jobExamples = [
  {
    title: "B2B 제품 영업·고객 대응",
    role: "고객 요구사항 확인, 제품·견적 상담, 주문 협의, 거래처 커뮤니케이션",
    attitude: "고객 요청을 정확히 정리하고 가능한 범위를 분명히 안내하는 태도",
  },
  {
    title: "발주·납기·납품 관리",
    role: "주문 내용 확인, 제조사 발주, 납기 확인, 출고·납품 일정과 현장 조건 관리",
    attitude: "여러 일정과 변경사항을 꼼꼼하게 기록하고 공유하는 태도",
  },
  {
    title: "현장 요청·A/S 지원",
    role: "제품 정보와 장애 요청 접수, 초기 정보 확인, 제조사 기술지원 협의와 진행 안내",
    attitude: "현장 긴급도를 이해하면서 안전과 지원 범위를 정확히 구분하는 태도",
  },
  {
    title: "영업·운영 지원",
    role: "견적·주문·납품 관련 문서, 고객 문의 기록과 내부 운영 업무 지원",
    attitude: "문서와 정보를 정확히 관리하고 필요한 담당자에게 전달하는 태도",
  },
];

const cultureLines = [
  "모르는 내용은 질문하고 확인합니다.",
  "변경사항은 늦지 않게 공유합니다.",
  "고객에게 지킬 수 있는 약속을 합니다.",
  "업무의 맥락과 기록을 동료와 나눕니다.",
];

const hiringSteps = [
  { title: "지원서 접수", desc: "채용공고에 안내된 방법으로 지원서를 제출합니다." },
  { title: "서류 검토", desc: "제출된 서류를 검토합니다." },
  { title: "면접", desc: "직무와 공고에 따라 면접을 진행합니다." },
  { title: "근무 조건 협의", desc: "전형 결과에 따라 근무 조건을 협의합니다." },
  { title: "최종 합격 및 입사 안내", desc: "최종 합격자에게 입사 일정을 안내합니다." },
];

export function Careers() {
  return (
    <SubPage path="/careers">
      {/* ── 1. 도입 ── */}
      <SectionTitle size="lg">
        제품과 현장을 연결하는 일은 정확한 확인에서 시작됩니다
      </SectionTitle>
      <p className="mt-5 max-w-[52rem] text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO의 업무는 고객이 필요한 제품과 조건을 이해하고, 견적·발주·납기·납품·후속 요청의 정보를
        정확히 이어가는 일입니다. 작은 변경도 놓치지 않고 확인하며, 고객과 제조사, 내부 담당자가
        같은 정보를 바탕으로 움직일 수 있게 소통하는 태도를 중요하게 생각합니다.
      </p>

      {/* ── 2. EGO가 원하는 인재의 특성 ── */}
      <SectionTitle size="lg" className="mt-12">
        EGO가 원하는 인재의 특성
      </SectionTitle>
      <ul className="list-sq mt-6 grid grid-cols-1 gap-y-2 border border-line bg-white p-5 text-[0.9375rem] leading-relaxed text-ink-2 lg:grid-cols-2 lg:gap-x-6">
        {traits.map((trait) => (
          <li key={trait}>{trait}</li>
        ))}
      </ul>

      {/* ── 3. 인재상 ── */}
      <SectionTitle size="lg" className="mt-12">
        인재상
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {idealTypes.map((type, i) => (
          <article key={type.title} className="border border-line bg-white p-5">
            <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-line-strong">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-[1rem] font-bold text-brand-navy">{type.title}</h3>
            <div aria-hidden="true" className="mt-2 h-[3px] w-10 bg-brand" />
            <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-2">{type.body}</p>
          </article>
        ))}
      </div>

      {/* ── 4. 주요 직무 예시 — 실제 채용 직무 확인 전이므로 "예시 직무" 배지 표기 ── */}
      <SectionTitle size="lg" className="mt-12">
        주요 직무 예시
      </SectionTitle>
      <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted">
        아래 직무는 사이트 구성용 예시입니다. 실제 채용 직무와 모집 여부는 채용공고에서 확인해
        주세요.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {jobExamples.map((job) => (
          <article key={job.title} className="border border-line bg-white p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[1rem] font-bold text-ink">{job.title}</h3>
              <span className="border border-line-strong bg-surface px-1.5 py-px text-[0.625rem] font-bold text-muted">
                예시 직무
              </span>
            </div>
            <dl className="mt-3 space-y-2 text-[0.875rem] leading-relaxed">
              <div>
                <dt className="font-semibold text-brand">역할 예시</dt>
                <dd className="text-ink-2">{job.role}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand">필요한 태도</dt>
                <dd className="text-ink-2">{job.attitude}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      {/* ── 5. EGO에서 일하는 방식 ── */}
      <SectionTitle size="lg" className="mt-12">
        작은 약속과 정확한 기록을 중요하게 생각합니다
      </SectionTitle>
      <p className="mt-5 max-w-[52rem] text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO의 업무는 한 번의 큰 판단보다 반복되는 확인과 소통으로 완성됩니다. 고객이 요청한 조건,
        제조사가 확인한 내용과 현장의 변경사항을 정확히 기록하고 공유합니다. 문제가 생기면 책임을
        피하기보다 현재 상황과 가능한 다음 조치를 함께 확인합니다.
      </p>
      <ul className="mt-5 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
        {cultureLines.map((line) => (
          <li key={line} className="bg-surface px-4 py-3 text-[0.9375rem] font-semibold text-brand-navy">
            “{line}”
          </li>
        ))}
      </ul>

      {/* ── 6. 채용 절차 (5단계) ── */}
      <SectionTitle size="lg" className="mt-12">
        채용 절차
      </SectionTitle>
      <div className="mt-6">
        <ProcessSteps steps={hiringSteps} cols={3} />
      </div>
      <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted">
        채용 절차는 공고와 직무에 따라 달라질 수 있습니다. 각 단계의 대상자에게 일정과 준비사항을
        개별 안내드립니다.
      </p>

      {/* ── 7. 진행 중인 채용공고 ── */}
      <SectionTitle size="lg" className="mt-12">
        진행 중인 채용공고
      </SectionTitle>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 border border-line bg-surface px-6 py-14 text-center">
        <p className="text-[1rem] font-bold text-ink">현재 진행 중인 채용공고가 없습니다</p>
        <p className="max-w-[36rem] text-[0.875rem] leading-relaxed text-muted">
          새로운 채용이 시작되면 이 페이지와 공지사항을 통해 안내드리겠습니다. 지원 서류와 접수
          방법은 각 채용공고에서 확인해 주세요.
        </p>
        <p className="text-[0.8125rem] text-muted">
          근무 조건과 복리후생은 채용공고 및 전형 과정에서 안내드립니다.
        </p>
        <Link to="/support/notice" className="btn-blue mt-2 h-10 px-6 text-[0.875rem]">
          공지사항 확인하기 <span aria-hidden="true">›</span>
        </Link>
      </div>
    </SubPage>
  );
}

export default Careers;
