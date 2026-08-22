import { Link } from "react-router-dom";
import MainBanner from "../components/MainBanner";
import Scene from "../components/Scene";
import SectionTitle from "../components/SectionTitle";
import { entityRoles, productScopeNote } from "../data/content";

/**
 * 메인 페이지 — 명세서 홈페이지 8개 섹션을 클래식 한국 기업 홈 문법으로 구성
 *  1) 메인 비주얼 (배너 슬라이더)
 *  2) LS ELECTRIC–EGO–고객 현장 관계 (3단계)
 *  3) EGO가 담당하는 일
 *  4) 사업영역 3개 카드
 *  5) LS ELECTRIC 대리점 역할
 *  6) 주요 고객 및 수행 경험
 *  7) 문의 유형별 빠른 연결
 *  8) 하단 통합 CTA
 */

const relationSteps = [
  {
    no: "1",
    title: "LS ELECTRIC 제품",
    role: entityRoles.lsElectric,
    desc: "제품 제조와 공식 사양·기술자료의 기준이 되는 공급 브랜드입니다.",
  },
  {
    no: "2",
    title: "EGO의 공급 및 대응",
    role: entityRoles.ego,
    desc: "요구사항 확인, 제품·사양 검토, 견적, 판매, 발주, 납기와 납품 관리, 현장 요청과 A/S 접수를 담당합니다.",
  },
  {
    no: "3",
    title: "고객 현장의 도입과 운영",
    role: "제품 도입 및 운영 주체",
    desc: "필요한 제품을 공급받고, 진행 상황과 제품 관련 후속 지원을 한 접점에서 안내받습니다.",
  },
];

const egoTasks = [
  "고객 요구사항과 사용 조건 확인",
  "제품 및 사양 검토와 제조사 협의",
  "견적 제시와 주문 내용 확인",
  "발주, 납기 확인, 출고와 납품 관리",
  "현장 요청, 변경 및 추가 문의 접수",
  "제품 장애 접수와 제조사 연계 A/S 지원",
];

const businessCards = [
  {
    name: "LS ELECTRIC 제품 공급",
    title: "필요한 제품과 사양을 확인합니다",
    body: "고객 요구사항을 확인하고 LS ELECTRIC 제품의 사양을 검토합니다. 견적과 주문, 제조사 발주, 납기 확인, 출고와 납품 과정을 관리합니다.",
    link: "제품 공급 업무 보기",
    to: "/business/supply",
    scene: "SwitchgearRoom" as const,
  },
  {
    name: "납품 및 현장 대응",
    title: "납품 전후의 요청을 이어서 관리합니다",
    body: "모델, 수량, 일정, 납품 장소를 확인하고 현장의 변경·추가 요청을 접수합니다. 필요한 내용을 고객사와 제조사 사이에서 확인하고 진행 상황을 안내합니다.",
    link: "현장 대응 업무 보기",
    to: "/business/delivery",
    scene: "SubstationYard" as const,
  },
  {
    name: "기술지원 및 A/S",
    title: "제품 관련 문제의 접점을 맡습니다",
    body: "제품 정보와 장애 증상을 접수하고 초기 확인을 진행합니다. 필요한 경우 제조사 또는 관련 기술조직과의 확인, 수리·교체 협의와 진행 안내를 지원합니다.",
    link: "기술지원 절차 보기",
    to: "/business/service",
    scene: "RelayPanel" as const,
  },
];

const inquiryCards = [
  {
    title: "제품 구매와 견적이 필요하신가요?",
    body: "제품명 또는 필요한 사양, 수량, 사용 현장과 희망 일정을 보내주시면 확인 후 안내드립니다.",
    cta: "제품·견적 문의",
    to: "/support/inquiry",
  },
  {
    title: "사용 중인 제품에 문제가 있나요?",
    body: "제품명, 모델명, 시리얼번호, 장애 증상과 발생 시점을 알려주시면 확인 절차를 안내드립니다.",
    cta: "A/S 접수",
    to: "/support/as",
  },
  {
    title: "카탈로그나 기술자료를 찾고 있나요?",
    body: "공개 가능한 공식 카탈로그, 매뉴얼, 사양서와 관련 문서를 확인할 수 있습니다.",
    cta: "기술자료 확인",
    to: "/support/resources",
  },
];

export function Home() {
  return (
    <>
      {/* ── 1. 메인 비주얼 ── */}
      <MainBanner />

      {/* ── 2. 제품에서 현장까지 이어지는 역할 (3단계) ── */}
      <section className="mx-auto max-w-[1200px] px-4 py-10 lg:py-14">
        <SectionTitle size="lg">제품 공급 전후의 고객 접점을 하나로 잇습니다</SectionTitle>
        <p className="mt-4 max-w-[52rem] text-[0.9375rem] leading-relaxed text-ink-2">
          제품을 선택하는 단계부터 납품 이후의 제품 관련 문의까지, EGO가 고객과 LS ELECTRIC 사이의
          진행을 연결합니다.
        </p>
        <ol className="mt-6 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
          {relationSteps.map((step) => (
            <li key={step.no} className="bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-navy text-[0.9375rem] font-bold text-white">
                  {step.no}
                </span>
                <div className="min-w-0">
                  <p className="text-[1rem] font-bold text-ink">{step.title}</p>
                  <p className="text-[0.6875rem] font-semibold tracking-[0.02em] text-brand">
                    {step.role}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-2">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 3. EGO가 담당하는 일 ── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2 lg:py-14">
          <div>
            <SectionTitle size="lg">
              필요한 제품을 확인하고, 공급 과정을 관리하며, 후속 요청에 대응합니다
            </SectionTitle>
            <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
              산업용 제품 구매는 제품명만으로 끝나지 않습니다. 필요한 사양과 수량, 희망 일정, 납품
              장소를 함께 확인해야 하며, 주문 이후에도 제조사 납기와 현장 요청을 계속 조율해야
              합니다. EGO는 이 과정을 고객의 접점에서 이어서 관리합니다.
            </p>
          </div>
          <div className="border border-line bg-white p-5">
            <p className="text-[0.75rem] font-semibold tracking-[0.1em] text-brand">핵심 업무</p>
            <ul className="list-sq mt-3 grid grid-cols-1 gap-y-2 text-[0.9375rem] text-ink-2 sm:grid-cols-2 sm:gap-x-6">
              {egoTasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4. 사업영역 3개 카드 ── */}
      <section className="mx-auto max-w-[1200px] px-4 py-10 lg:py-14">
        <SectionTitle size="lg">EGO의 사업영역</SectionTitle>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
          EGO의 업무는 제품 공급, 납품 및 현장 대응, 기술지원과 A/S의 세 영역으로 이어집니다.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {businessCards.map((card) => (
            <article key={card.name} className="flex flex-col border border-line bg-white">
              <div className="relative h-[140px] overflow-hidden border-b border-line">
                <Scene name={card.scene} tone="light" className="absolute inset-0" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,58,102,0.05)_0%,rgba(21,58,102,0.45)_100%)]"
                />
                <p className="absolute bottom-3 left-4 text-[0.9375rem] font-bold text-white">
                  {card.name}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[1.0625rem] font-bold text-ink">{card.title}</h3>
                <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-ink-2">{card.body}</p>
                <Link to={card.to} className="btn-line mt-4 h-9 px-4 text-[0.8125rem]">
                  {card.link} <span aria-hidden="true">›</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 5. LS ELECTRIC 대리점 역할 ── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1200px] px-4 py-10 lg:py-14">
          <SectionTitle size="lg">LS ELECTRIC 제품을 고객 요구에 맞춰 공급합니다</SectionTitle>
          <p className="mt-5 max-w-[52rem] text-[0.9375rem] leading-[1.85] text-ink-2">
            EGO는 LS ELECTRIC 대리점으로서 전기 및 시스템 관련 완제품의 상담, 견적, 판매와 공급을
            담당합니다. 고객이 전달한 사용 목적과 요청 사양을 바탕으로 제품 정보를 확인하고, 필요한
            경우 제조사와 협의합니다. 주문 이후에는 발주와 납기, 출고와 납품 진행을 관리합니다.
          </p>
          <p className="mt-4 max-w-[52rem] border border-line bg-white px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
            {productScopeNote}
          </p>
          <Link to="/support/inquiry" className="btn-blue mt-5 h-11 px-6 text-[0.9375rem]">
            취급 제품 문의하기 <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      {/* ── 6. 주요 고객 및 수행 경험 ── */}
      <section className="mx-auto max-w-[1200px] px-4 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle size="lg">주요 고객 현장에서 쌓아 온 공급과 대응 경험</SectionTitle>
            <p className="mt-5 text-[0.9375rem] leading-[1.85] text-ink-2">
              EGO는 GS칼텍스 현장에 공급되는 LS ELECTRIC 시스템 및 전기 제품 관련 업무를 담당해 온
              경험이 있습니다. 고객 요청 접수와 견적 대응, 발주와 납기 관리, 제품 납품, 현장 요청,
              장애 및 A/S 지원, 제조사와 고객 현장 사이의 커뮤니케이션을 수행합니다.
            </p>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
              프로젝트명, 사업장명과 세부 공급 내역은 고객사와의 계약 및 보안 기준에 따라 공개
              가능한 범위에서 안내합니다.
            </p>
            <Link to="/customers" className="btn-line mt-5 h-10 px-5 text-[0.875rem]">
              주요 수행 경험 보기 <span aria-hidden="true">›</span>
            </Link>
          </div>
          <div className="border border-line bg-white">
            <div className="relative h-[170px] overflow-hidden border-b border-line">
              <Scene name="RefineryDusk" tone="light" className="absolute inset-0" />
            </div>
            <div className="p-5">
              {/* GS칼텍스 로고 사용 허가 미확인 — 텍스트 표기만 사용 */}
              <p className="text-[0.75rem] font-semibold tracking-[0.1em] text-brand">
                {entityRoles.gsCaltex}
              </p>
              <p className="mt-2 text-[1.125rem] font-bold text-ink">주요 고객: GS칼텍스</p>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">
                GS칼텍스는 EGO의 주요 고객이자 대표 수행 경험입니다. 구체적인 계약 관계와 프로젝트
                정보는 공개 승인을 받은 범위에서만 안내합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. 문의 유형별 빠른 연결 ── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1200px] px-4 py-10 lg:py-14">
          <SectionTitle size="lg">어떤 도움이 필요하신가요?</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {inquiryCards.map((card) => (
              <article key={card.title} className="flex flex-col border border-line bg-white p-5">
                <h3 className="text-[1.0625rem] font-bold text-ink">{card.title}</h3>
                <div aria-hidden="true" className="mt-3 h-[3px] w-10 bg-brand" />
                <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-ink-2">{card.body}</p>
                <Link to={card.to} className="btn-blue mt-4 h-10 w-full text-[0.875rem]">
                  {card.cta} <span aria-hidden="true">›</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. 하단 통합 CTA ── */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-[1200px] px-4 py-12 text-center lg:py-16">
          <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem]">
            제품 공급과 현장 지원에 대해 상담해 보세요
          </h2>
          <p className="mx-auto mt-4 max-w-[44rem] text-[0.9375rem] leading-relaxed text-white/80">
            제품명이나 정확한 사양을 모르셔도 사용 목적, 현장 조건과 필요한 일정을 알려주시면
            확인에 필요한 정보를 안내해 드립니다.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/support/inquiry" className="btn-blue h-12 px-8 text-[1rem]">
              제품·견적 문의하기
            </Link>
            <Link
              to="/support/as"
              className="flex h-12 items-center border border-white/50 px-8 text-[1rem] font-semibold text-white hover:bg-white/10"
            >
              A/S 접수하기
            </Link>
          </div>
          {/* 대표 전화·이메일 미확정 — 온라인 폼 안내로 대체 */}
          <p className="mt-5 text-[0.8125rem] text-white/55">문의는 온라인 폼으로 접수해 주세요.</p>
        </div>
      </section>
    </>
  );
}

export default Home;
