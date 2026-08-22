import CtaBanner from "../../components/CtaBanner";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { company } from "../../data/content";

/**
 * 경영진 소개 — 도입 / 인물 카드 2 / 경영진 공동 메시지
 * ⚠️ 이름·사진·경력·담당 영역은 미확정 — 실루엣 플레이스홀더로 레이아웃만 유지하고
 *    "확정 후 게재 예정" 표기. 임의로 만들지 않는다.
 */

const executiveCards = [
  { position: "대표이사" },
  { position: "이사" },
];

/** 실루엣 플레이스홀더 — 공식 프로필 사진 수령 시 교체 */
function SilhouetteIcon() {
  return (
    <svg viewBox="0 0 96 96" width="72" height="72" aria-hidden="true" className="text-line-strong">
      <circle cx="48" cy="34" r="16" fill="currentColor" />
      <path d="M20 84c0-15.5 12.5-28 28-28s28 12.5 28 28" fill="currentColor" />
    </svg>
  );
}

export function Executives() {
  return (
    <SubPage path="/about/executives">
      {/* ── 1. 도입 ── */}
      <SectionTitle size="lg">
        확인된 사실과 책임 있는 대응을 경영의 기준으로 삼습니다
      </SectionTitle>
      <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
        EGO의 경영진은 고객에게 필요한 제품과 지원 범위를 정확히 안내하고, 견적·발주·납품·후속
        요청의 진행을 꾸준히 관리하는 것을 중요하게 생각합니다. 인물별 소개는 확인된 직책과 업무
        경험을 중심으로 제공합니다.
      </p>

      {/* ── 2·3. 인물 소개 카드 ── */}
      <SectionTitle size="lg" className="mt-12">
        경영진
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {executiveCards.map((card) => (
          <article key={card.position} className="border border-line bg-white">
            <div className="flex items-center justify-center border-b border-line bg-surface py-8">
              <SilhouetteIcon />
            </div>
            <div className="p-5">
              <p className="text-[0.75rem] font-semibold tracking-[0.1em] text-brand">
                {card.position}
              </p>
              <p className="mt-1 text-[1.0625rem] font-bold text-ink">{company.pending}</p>
              <dl className="mt-4 divide-y divide-line border-y border-line text-[0.8125rem]">
                <div className="flex">
                  <dt className="w-[6.5rem] shrink-0 bg-surface px-3 py-2 font-semibold text-ink">
                    담당 영역
                  </dt>
                  <dd className="px-3 py-2 text-muted">{company.pending}</dd>
                </div>
                <div className="flex">
                  <dt className="w-[6.5rem] shrink-0 bg-surface px-3 py-2 font-semibold text-ink">
                    주요 경력
                  </dt>
                  <dd className="px-3 py-2 text-muted">{company.pending}</dd>
                </div>
              </dl>
              <p className="mt-3 text-[0.75rem] leading-relaxed text-muted">
                프로필 사진과 인물 소개는 회사 확인 후 게재됩니다.
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* ── 4. 경영진 공동 메시지 ── */}
      <SectionTitle size="lg" className="mt-12">
        고객에게 드리는 경영진의 약속
      </SectionTitle>
      <div className="mt-6 border-l-[3px] border-brand bg-surface p-6 sm:p-8">
        <p className="text-[0.9375rem] leading-[1.9] text-ink-2">
          EGO의 경영진은 확인되지 않은 내용을 먼저 약속하지 않겠습니다. 고객의 요구를 정확히 듣고,
          제품 공급과 현장 지원에서 EGO가 담당할 수 있는 범위를 분명히 안내하겠습니다. 제조사
          확인이 필요한 사항은 협의 과정을 투명하게 공유하고, 고객이 다음 단계를 알 수 있도록
          책임 있게 소통하겠습니다.
        </p>
      </div>

      {/* ── 5. CTA ── */}
      <CtaBanner
        className="mt-12"
        title="EGO의 사업 구조와 실제 담당 업무를 회사소개와 사업영역에서 확인해 보세요"
        body="필요한 제품과 지원 내용을 알려주시면 확인에 필요한 내용을 안내드립니다."
        primary={{ label: "EGO 소개 보기", to: "/about/intro" }}
        secondary={{ label: "제품·견적 문의", to: "/support/inquiry" }}
      />
    </SubPage>
  );
}

export default Executives;
