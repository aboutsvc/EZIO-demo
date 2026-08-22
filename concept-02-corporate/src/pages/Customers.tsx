import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { Checklist, Section, SubjectTable } from "../components/PageBlocks";
import { customersPage as d } from "../data/customers";

export default function Customers() {
  return (
    <>
      <PageHero
        eyebrow="주요 고객·수행실적"
        title={d.hero.title}
        sub={d.hero.sub}
        primary={d.hero.cta}
      />

      {/* 1. 수행 경험 소개 */}
      <Section tone="paper">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                수행 경험
              </p>
              <h2 className="mt-3 text-[1.5rem] leading-[1.35] font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
                {d.intro.title}
              </h2>
              <div className="mt-6 h-[3px] w-14 bg-brand" aria-hidden="true" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.9688rem] leading-[1.9] text-ink/85">{d.intro.body}</p>
              <p className="mt-5 border-l-2 border-brand pl-4 text-[0.8438rem] leading-[1.8] text-muted">
                {d.intro.note}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 2. 주요 고객: GS칼텍스 — 텍스트 표기만 (로고 사용 금지) */}
      <Section tone="surface" eyebrow="Major Customer" heading={d.mainCustomer.title}>
        <Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="bg-navy p-7 lg:col-span-4 lg:p-8" style={{ borderRadius: "3px" }}>
              <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
                {d.mainCustomer.roleLabel}
              </p>
              <p className="mt-5 text-[1.375rem] leading-snug font-bold text-white">
                {d.mainCustomer.label}
              </p>
            </div>
            <div className="border border-line bg-paper p-7 lg:col-span-8 lg:p-8" style={{ borderRadius: "3px" }}>
              <p className="text-[0.9375rem] leading-[1.85] text-ink/85">{d.mainCustomer.body}</p>
              <p className="mt-5 border-t border-line pt-4 text-[0.8125rem] leading-[1.7] text-muted">
                {d.mainCustomer.clarification}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 3. 담당 역할 표 */}
      <Section tone="paper" eyebrow="담당 역할" heading={d.roles.title}>
        <Reveal>
          <div className="mt-10">
            <SubjectTable rows={d.roles.rows.map((r) => ({ subject: r.area, role: r.desc }))} />
          </div>
        </Reveal>
      </Section>

      {/* 4. 수행 업무 범위 */}
      <Section tone="surface" eyebrow="업무 범위" heading={d.scope.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.scope.items} columns={2} />
          </div>
        </Reveal>
      </Section>

      {/* 5. 집약형 사례 카드 */}
      <Section tone="paper" eyebrow="수행 사례" heading="프로젝트 사례">
        <Reveal>
          <article
            className="mt-10 border border-line bg-paper p-7 shadow-[0_1px_2px_rgba(14,27,51,0.04)] lg:p-9"
            style={{ borderRadius: "3px" }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="bg-brand-soft px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[0.06em] text-brand"
                style={{ borderRadius: "2px" }}
              >
                대표 수행 경험
              </span>
            </div>
            <h3 className="mt-4 text-[1.25rem] leading-snug font-bold text-ink sm:text-[1.375rem]">
              {d.caseCard.title}
            </h3>
            <dl className="mt-6 border-t border-line">
              {d.caseCard.rows.map((row) => (
                <div key={row.label} className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-4 sm:gap-4">
                  <dt className="text-[0.8125rem] font-semibold text-muted sm:col-span-1">{row.label}</dt>
                  <dd className="text-[0.9063rem] leading-[1.75] text-ink sm:col-span-3">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[0.8125rem] leading-[1.7] text-muted">{d.caseCard.desc}</p>
          </article>
        </Reveal>
      </Section>

      {/* 6. 공개 범위 안내 */}
      <Section tone="surface" eyebrow="공개 범위" heading={d.disclosure.title}>
        <Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {d.disclosure.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-3 bg-paper p-6">
                <span aria-hidden="true" className="mt-1.5 block h-4 w-[3px] shrink-0 bg-brand" />
                <p className="text-[0.875rem] leading-[1.8] text-ink/80">{note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 7. 상담 CTA */}
      <CtaBanner
        title={d.cta.title}
        body={d.cta.body}
        note={d.cta.note}
        primary={d.cta.primary}
        secondary={d.cta.secondary}
      />
    </>
  );
}
