import { Fragment } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import CtaBanner from "../components/CtaBanner";
import { Checklist } from "../components/PageBlocks";
import { RefineryDusk, RelayPanel, SwitchgearRoom } from "../components/scenes";
import {
  bottomCta,
  businessCards,
  customers,
  dealerRole,
  duties,
  hero,
  heroFacts,
  quickInquiry,
  relation,
} from "../data/home";

/* Facts 밴드 셀 구분선 — 1 / 2 / 4 컬럼 그리드에 맞춘 보더 매핑 */
const FACT_BORDERS = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-t-0",
];

/* 관계 흐름 — 단계를 따라 점진적으로 짙어지는 블루 틴트 */
const RELATION_TINTS = ["#F5F7F9", "#E5EDF9", "#D5E1F5"];

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex shrink-0 items-center justify-center py-2 lg:w-10 lg:py-0">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 rotate-90 text-brand/55 lg:rotate-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── 1. 메인 비주얼 ── */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div aria-hidden="true" className="absolute top-0 right-0 hidden h-full w-1/2 bg-surface lg:block" />
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60 lg:w-1/2" />

        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-24">
            <div className="lg:col-span-6 lg:pr-6">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="block h-px w-8 bg-brand" />
                <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                  {hero.englishMeaning}
                </p>
              </div>

              <h1
                className="mt-5 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)", lineHeight: 1.2 }}
              >
                {hero.title}
              </h1>

              <p className="mt-6 max-w-xl text-[1rem] leading-[1.85] text-muted lg:text-[1.0625rem]">
                {hero.body}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to={hero.primaryCta.path}
                  className="inline-flex items-center gap-2 bg-brand px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark"
                  style={{ borderRadius: "3px" }}
                >
                  {hero.primaryCta.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </Link>
                <Link
                  to={hero.secondaryCta.path}
                  className="inline-flex items-center gap-2 border border-line-strong bg-paper px-7 py-3.5 text-[0.9375rem] font-semibold text-ink transition-all duration-150 hover:border-brand hover:text-brand"
                  style={{ borderRadius: "3px" }}
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>

              <Link
                to={hero.tertiaryLink.path}
                className="mt-7 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-brand transition-colors duration-150 hover:text-brand-dark"
              >
                {hero.tertiaryLink.label}
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </Link>
            </div>

            {/* 우 — 산업 현장 비주얼 */}
            <div className="lg:col-span-6">
              <div
                className="relative border border-line bg-paper p-3 shadow-[0_1px_2px_rgba(14,27,51,0.04)]"
                style={{ borderRadius: "3px" }}
              >
                {/* 향후 실제 현장 사진 확보 시 동일 컨테이너에 <img>로 대체 가능 */}
                <div className="aspect-[4/3] w-full overflow-hidden border border-line" style={{ borderRadius: "2px" }}>
                  <SwitchgearRoom tone="light" />
                </div>
                <div className="border-t border-line px-1 pt-3">
                  <p className="text-[0.6875rem] tracking-[0.14em] text-muted uppercase">
                    LS ELECTRIC Products · Customer Sites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero 하단 밴드 — 확정 사실만 */}
        <div className="relative border-t border-line bg-paper">
          <Container>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {heroFacts.map((fact, i) => (
                <div
                  key={i}
                  className={`border-line py-6 sm:px-6 sm:py-7 lg:px-8 lg:first:pl-0 ${FACT_BORDERS[i] ?? ""}`}
                >
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-brand uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-2.5 text-[0.9375rem] leading-[1.6] font-semibold text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* ── 2. LS ELECTRIC–EGO–고객 현장 관계 ── */}
      <section className="border-b border-line bg-paper py-16 lg:py-24">
        <Container>
          <SectionHeader eyebrow="Connection" heading={relation.title} lead={relation.lead} />
          <Reveal>
            <div className="mt-10 border border-line bg-paper p-4 sm:p-6 lg:p-8" style={{ borderRadius: "3px" }}>
              <div className="flex flex-col lg:flex-row lg:items-stretch">
                {relation.steps.map((step, i) => (
                  <Fragment key={step.no}>
                    <div
                      className="flex flex-1 flex-col border border-line/70 p-5 lg:p-6"
                      style={{ background: RELATION_TINTS[i], borderRadius: "3px" }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[0.6875rem] font-bold tracking-[0.16em] text-brand uppercase">
                          {step.role}
                        </p>
                        <span className="text-[0.625rem] font-semibold text-brand/45 tabular-nums">
                          {step.no.padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-4 text-[1.0625rem] leading-snug font-bold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[0.8438rem] leading-[1.75] text-ink/75">{step.desc}</p>
                    </div>
                    {i < relation.steps.length - 1 && <FlowArrow />}
                  </Fragment>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 3. EGO가 담당하는 일 ── */}
      <section className="border-b border-line bg-surface py-16 lg:py-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                  EGO가 담당하는 일
                </p>
                <h2 className="mt-3 text-[1.5rem] leading-[1.35] font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem] lg:text-[1.875rem]">
                  {duties.title}
                </h2>
                <div className="mt-6 h-[3px] w-14 bg-brand" aria-hidden="true" />
              </div>
              <div className="lg:col-span-7">
                <p className="text-[0.9688rem] leading-[1.9] text-ink/85">{duties.body}</p>
                <div className="mt-8 border border-line bg-paper p-6 lg:p-7" style={{ borderRadius: "3px" }}>
                  <Checklist items={duties.items} columns={2} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* 플랜트 스카이라인 밴드 */}
          <Reveal delay={80}>
            <figure className="mt-14 overflow-hidden border border-line bg-surface" style={{ borderRadius: "3px" }}>
              {/* 향후 실제 현장 사진 확보 시 동일 컨테이너에 <img>로 대체 가능 */}
              <div className="h-[220px] w-full overflow-hidden sm:h-[320px] lg:h-[420px]">
                <RefineryDusk tone="light" />
              </div>
              <figcaption className="border-t border-line bg-paper px-5 py-3.5">
                <span className="text-[0.75rem] font-semibold tracking-[0.12em] text-ink uppercase">
                  Industrial Sites
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* ── 4. 사업영역 3개 카드 ── */}
      <section className="border-b border-line bg-paper py-16 lg:py-24">
        <Container>
          <SectionHeader eyebrow="Business" heading={businessCards.title} lead={businessCards.lead} />
          <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {businessCards.cards.map((card, i) => (
              <Reveal key={card.no} delay={i * 60} className="h-full">
                <article className="group flex h-full flex-col bg-paper p-7 transition-shadow duration-200 hover:shadow-[0_2px_16px_rgba(14,27,51,0.09)] lg:p-8">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[0.75rem] font-bold tracking-[0.16em] text-brand">{card.no}</span>
                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-line-strong transition-colors duration-200 group-hover:bg-brand"
                    />
                  </div>
                  <p className="mt-5 text-[0.75rem] font-semibold tracking-[0.1em] text-muted uppercase">
                    {card.area}
                  </p>
                  <h3 className="mt-2 text-[1.1875rem] leading-snug font-bold text-ink">{card.title}</h3>
                  <p className="mt-3 flex-1 text-[0.875rem] leading-[1.75] text-muted">{card.body}</p>
                  <Link
                    to={card.link.path}
                    className="mt-6 inline-flex items-center gap-2 self-start border-t border-line pt-5 text-[0.8438rem] font-semibold text-brand transition-colors duration-150 hover:text-brand-dark"
                  >
                    {card.link.label}
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. LS ELECTRIC 대리점 역할 ── */}
      <section className="border-b border-line bg-surface py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                LS ELECTRIC 대리점 역할
              </p>
              <h2 className="mt-3 text-[1.5rem] leading-[1.35] font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem] lg:text-[1.875rem]">
                {dealerRole.title}
              </h2>
              <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.85] text-muted lg:text-[1rem]">
                {dealerRole.body}
              </p>
              <p className="mt-5 max-w-xl border-l-2 border-brand pl-4 text-[0.8438rem] leading-[1.75] text-ink/75">
                {dealerRole.caution}
              </p>
              <Link
                to={dealerRole.cta.path}
                className="mt-8 inline-flex items-center gap-2 bg-brand px-6 py-3 text-[0.875rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark"
                style={{ borderRadius: "3px" }}
              >
                {dealerRole.cta.label}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </Link>
            </Reveal>

            <Reveal className="lg:col-span-6" delay={80}>
              <div className="border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
                {/* 향후 실제 제품/납품 사진 확보 시 동일 컨테이너에 <img>로 대체 가능 */}
                <div className="aspect-[3/2] w-full overflow-hidden border border-line" style={{ borderRadius: "2px" }}>
                  <RelayPanel tone="light" />
                </div>
                <div className="mt-4 border-t border-line pt-3">
                  <p className="text-[0.6875rem] tracking-[0.14em] text-muted uppercase">
                    LS ELECTRIC Products
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 6. 주요 고객 및 수행 경험 ── */}
      <section className="border-b border-line bg-paper py-16 lg:py-24">
        <Container>
          <SectionHeader eyebrow="Customers" heading={customers.title} />
          <Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="bg-navy p-7 lg:col-span-4 lg:p-8" style={{ borderRadius: "3px" }}>
                <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
                  주요 고객 및 대표 수행 경험
                </p>
                <p className="mt-5 text-[1.375rem] leading-snug font-bold text-white">
                  {customers.customerLabel}
                </p>
                <Link
                  to={customers.cta.path}
                  className="mt-8 inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 text-[0.8125rem] font-semibold text-white transition-colors duration-150 hover:bg-white hover:text-navy"
                  style={{ borderRadius: "3px" }}
                >
                  {customers.cta.label}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </Link>
              </div>
              <div className="border border-line bg-paper p-7 lg:col-span-8 lg:p-8" style={{ borderRadius: "3px" }}>
                <p className="text-[0.9375rem] leading-[1.85] text-ink/85">{customers.body}</p>
                <p className="mt-5 border-t border-line pt-4 text-[0.8125rem] leading-[1.7] text-muted">
                  {customers.scopeNote}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 7. 문의 유형별 빠른 연결 ── */}
      <section className="border-b border-line bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeader eyebrow="Support" heading={quickInquiry.title} />
          <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {quickInquiry.cards.map((card, i) => (
              <Reveal key={i} delay={i * 60} className="h-full">
                <article className="flex h-full flex-col bg-paper p-7 transition-shadow duration-200 hover:shadow-[0_2px_16px_rgba(14,27,51,0.09)] lg:p-8">
                  <h3 className="text-[1.0625rem] leading-snug font-bold text-ink">{card.title}</h3>
                  <p className="mt-3 flex-1 text-[0.875rem] leading-[1.75] text-muted">{card.body}</p>
                  <Link
                    to={card.cta.path}
                    className="mt-6 inline-flex items-center justify-center gap-2 self-start border border-line-strong px-5 py-2.5 text-[0.8438rem] font-semibold text-ink transition-all duration-150 hover:border-brand hover:text-brand"
                    style={{ borderRadius: "3px" }}
                  >
                    {card.cta.label}
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. 하단 통합 CTA ── */}
      <CtaBanner
        title={bottomCta.title}
        body={bottomCta.body}
        note={bottomCta.contactNote}
        primary={bottomCta.primary}
        secondary={bottomCta.secondary}
      />
    </>
  );
}
