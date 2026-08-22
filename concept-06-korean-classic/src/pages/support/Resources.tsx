import { Link } from "react-router-dom";
import CtaBanner from "../../components/CtaBanner";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";

/**
 * 기술자료·카탈로그 — 이용 안내 / 자료 분류 / 빈 상태 / LS ELECTRIC 공식 사이트 안내 / 최신 버전 확인
 * ⚠️ 실제 공개 자료가 없으므로 자료 목록을 만들지 않고 빈 상태 문구를 사용한다.
 *    자료의 저작권은 발행처(LS ELECTRIC)에 있음을 명시한다.
 */

const resourceTypes = [
  "LS ELECTRIC 공식 카탈로그",
  "제품 매뉴얼",
  "제품 사양서",
  "인증서 또는 관련 문서",
];

export function Resources() {
  return (
    <SubPage path="/support/resources">
      {/* ── 1. 자료 이용 안내 ── */}
      <SectionTitle size="lg">제품과 모델에 맞는 공식 자료를 확인하세요</SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        카탈로그와 기술자료는 제품 선택과 사용을 위한 참고 자료입니다. 실제 구매, 적용 또는 교체를
        검토할 때는 대상 모델, 사양, 발행일과 최신 버전을 다시 확인해 주세요. EGO가 제공하거나
        연결하는 LS ELECTRIC 자료의 저작권과 공식 내용은 해당 발행처에 있습니다.
      </p>

      {/* ── 2. 자료 분류 ── */}
      <SectionTitle size="lg" className="mt-12">
        자료 분류
      </SectionTitle>
      <ul className="mt-6 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {resourceTypes.map((type) => (
          <li key={type} className="bg-white px-4 py-4 text-center">
            <p className="text-[0.9375rem] font-bold text-brand-navy">{type}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        자료 분류는 실제 취급·지원 범위가 확인된 항목부터 순차적으로 공개됩니다.
      </p>

      {/* ── 3. 빈 상태 ── */}
      <div className="mt-8 flex flex-col items-center justify-center gap-3 border border-line bg-surface px-6 py-14 text-center">
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
          <path d="M4 4h10l6 6v10H4z" strokeLinejoin="round" />
          <path d="M14 4v6h6" strokeLinejoin="round" />
        </svg>
        <p className="text-[1rem] font-bold text-ink">
          현재 공개된 자료가 없습니다. 필요한 제품과 자료 유형을 문의해 주세요.
        </p>
        <p className="text-[0.875rem] leading-relaxed text-muted">
          제품명, 모델명, 필요한 자료 유형과 사용 목적을 알려주시면 공개 가능한 공식 자료를 확인해
          안내드립니다.
        </p>
        <Link to="/support/inquiry" className="btn-blue mt-2 h-10 px-6 text-[0.875rem]">
          기술자료 문의하기 <span aria-hidden="true">›</span>
        </Link>
      </div>

      {/* ── 4. 외부 공식 자료 안내 ── */}
      <SectionTitle size="lg" className="mt-12">
        LS ELECTRIC 공식 자료 안내
      </SectionTitle>
      <div className="mt-6 border border-line bg-white p-6">
        <p className="text-[0.9375rem] leading-relaxed text-ink-2">
          LS ELECTRIC 공식 웹사이트에서 제품 카탈로그와 기술자료를 확인할 수 있습니다.
        </p>
        <p className="mt-2 text-[0.8125rem] text-muted">
          <span className="mr-2 border border-line bg-surface px-1.5 py-px text-[0.6875rem] font-bold">
            외부 공식 사이트
          </span>
          선택하면 LS ELECTRIC 공식 웹사이트의 자료 페이지로 이동합니다.
        </p>
        <a
          href="https://www.ls-electric.com"
          target="_blank"
          rel="noreferrer noopener"
          className="btn-line mt-4 h-10 px-5 text-[0.875rem]"
        >
          LS ELECTRIC 공식 자료 보기 <span aria-hidden="true">↗</span>
        </a>
        <p className="mt-3 text-[0.75rem] leading-relaxed text-muted">
          자료의 저작권과 이용 조건은 LS ELECTRIC의 기준을 따릅니다.
        </p>
      </div>

      {/* ── 5. 최신 버전 확인 안내 ── */}
      <SectionTitle size="lg" className="mt-12">
        적용 전에 최신 버전을 다시 확인해 주세요
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        제품 사양과 문서는 개정될 수 있습니다. 구매, 설치, 설정, 점검 또는 교체에 사용하기 전
        자료의 대상 모델, 개정일과 최신 여부를 확인하세요. 자료 내용과 실제 제품 정보가 다르거나
        확인이 어려우면 EGO에 문의해 주세요.
      </p>

      {/* ── 6. 자료 문의 CTA ── */}
      <CtaBanner
        className="mt-12"
        title="원하는 자료를 찾지 못하셨나요?"
        body="제품명, 모델명, 필요한 자료 유형과 사용 목적을 알려주시면 공개 가능한 공식 자료를 확인해 안내드립니다."
        primary={{ label: "기술자료 문의하기", to: "/support/inquiry" }}
      />
    </SubPage>
  );
}

export default Resources;
