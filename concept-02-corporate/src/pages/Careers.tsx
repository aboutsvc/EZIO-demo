import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { CardGrid, Checklist, NoteBox, Section } from "../components/PageBlocks";
import { careersPage as d } from "../data/careers";

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="채용정보" title={d.hero.title} sub={d.hero.sub}>
        <div className="mt-8">
          {/* HashRouter 환경에서 href="#..." 는 경로로 해석되므로 버튼 + 스크롤로 처리 */}
          <button
            type="button"
            onClick={() =>
              document.getElementById(d.hero.cta.targetId)?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 border border-white/35 px-6 py-3 text-[0.875rem] font-semibold text-white transition-colors duration-150 hover:bg-white hover:text-navy"
            style={{ borderRadius: "3px" }}
          >
            {d.hero.cta.label}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v11M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </PageHero>

      {/* 1. 도입 */}
      <Section tone="paper">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                채용 안내
              </p>
              <h2 className="mt-3 text-[1.5rem] leading-[1.35] font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
                {d.intro.title}
              </h2>
              <div className="mt-6 h-[3px] w-14 bg-brand" aria-hidden="true" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.9688rem] leading-[1.9] text-ink/85">{d.intro.body}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 2. 원하는 인재의 특성 */}
      <Section tone="surface" eyebrow="인재 특성" heading={d.traits.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.traits.items} columns={2} />
          </div>
        </Reveal>
      </Section>

      {/* 3. 인재상 */}
      <Section tone="paper" eyebrow="인재상" heading={d.idealTypes.title}>
        <div className="mt-10">
          <CardGrid cards={d.idealTypes.cards} columns={4} />
        </div>
      </Section>

      {/* 4. 주요 직무 예시 */}
      <Section tone="surface" eyebrow="직무 예시" heading={d.jobs.title} lead={d.jobs.note}>
        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {d.jobs.cards.map((job, i) => (
            <Reveal key={job.title} delay={i * 60} className="h-full">
              <article className="flex h-full flex-col bg-paper p-6 lg:p-7">
                <span
                  className="self-start bg-brand-soft px-2 py-1 text-[0.6875rem] font-semibold tracking-[0.06em] text-brand"
                  style={{ borderRadius: "2px" }}
                >
                  {d.jobs.badge}
                </span>
                <h3 className="mt-4 text-[1rem] leading-snug font-bold text-ink">{job.title}</h3>
                <dl className="mt-4 flex-1 space-y-4 border-t border-line pt-4">
                  <div>
                    <dt className="text-[0.75rem] font-semibold text-brand">역할 예시</dt>
                    <dd className="mt-1.5 text-[0.8125rem] leading-[1.75] text-muted">{job.role}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.75rem] font-semibold text-brand">필요한 태도</dt>
                    <dd className="mt-1.5 text-[0.8125rem] leading-[1.75] text-muted">{job.attitude}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. 일하는 방식 */}
      <Section tone="paper">
        <Reveal>
          <div className="bg-navy p-7 lg:p-12" style={{ borderRadius: "3px" }}>
            <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
              EGO에서 일하는 방식
            </p>
            <h2 className="mt-4 text-[1.375rem] leading-[1.4] font-bold text-white sm:text-[1.5rem]">
              {d.culture.title}
            </h2>
            <p className="mt-6 max-w-3xl text-[0.9375rem] leading-[1.9] text-white/85">{d.culture.body}</p>
            <ul className="mt-8 grid grid-cols-1 gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
              {d.culture.mottos.map((motto) => (
                <li key={motto} className="flex items-center gap-3 bg-navy px-5 py-4">
                  <span aria-hidden="true" className="block h-4 w-[3px] shrink-0 bg-white/60" />
                  <p className="text-[0.875rem] font-medium text-white/90">{motto}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* 6. 채용 절차 */}
      <Section tone="surface" eyebrow="채용 절차" heading={d.process.title} lead={d.process.note}>
        <Reveal>
          <ol className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {d.process.steps.map((step) => (
              <li key={step.no} className="bg-paper p-6">
                <span className="text-[0.8125rem] font-bold tracking-[0.1em] text-brand tabular-nums">
                  {step.no.padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[0.9375rem] leading-snug font-bold text-ink">{step.title}</h3>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* 7. 진행 중인 채용공고 */}
      <Section tone="paper" eyebrow="채용공고" heading="진행 중인 채용공고">
        <Reveal>
          <div
            id="openings"
            className="mt-10 flex flex-col items-center justify-center border border-dashed border-line-strong bg-paper px-6 py-14 text-center"
            style={{ borderRadius: "3px", scrollMarginTop: "120px" }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10 text-line-strong"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M4 8h16v11H4zM9 8V6a3 3 0 016 0v2" />
            </svg>
            <h3 className="mt-5 text-[1.0625rem] font-bold text-ink">{d.openings.title}</h3>
            <p className="mt-3 max-w-md text-[0.875rem] leading-[1.8] text-muted">{d.openings.body}</p>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <NoteBox className="mt-6">
            <p className="text-[0.8438rem] leading-[1.8] text-ink/80">{d.openings.applyNote}</p>
            <p className="mt-2 text-[0.8438rem] leading-[1.8] text-ink/80">{d.openings.benefitNote}</p>
          </NoteBox>
        </Reveal>
      </Section>

      <CtaBanner
        title={d.cta.title}
        primary={d.cta.primary}
        secondary={d.cta.secondary}
        showReplyNotice={false}
      />
    </>
  );
}
