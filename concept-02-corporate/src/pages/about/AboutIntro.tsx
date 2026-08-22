import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { CardGrid, Checklist, InfoTable, Section, SubjectTable } from "../../components/PageBlocks";
import { aboutIntro as d } from "../../data/about";

export default function AboutIntro() {
  return (
    <>
      <PageHero
        eyebrow="회사소개 · EGO 소개"
        title={d.hero.title}
        sub={d.hero.sub}
        primary={d.hero.cta}
      />

      {/* 1. 존재 이유 */}
      <Section tone="paper">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                EGO가 존재하는 이유
              </p>
              <h2 className="mt-3 text-[1.5rem] leading-[1.35] font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
                {d.why.title}
              </h2>
              <div className="mt-6 h-[3px] w-14 bg-brand" aria-hidden="true" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.9688rem] leading-[1.9] text-ink/85">{d.why.body}</p>
              <p className="mt-5 border-l-2 border-brand pl-4 text-[0.875rem] leading-[1.8] text-muted">
                {d.why.sub}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 2. 사업 구조 */}
      <Section tone="surface" eyebrow="사업 구조" heading={d.structure.title}>
        <div className="mt-10">
          <Reveal>
            <SubjectTable rows={d.structure.rows} />
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-6 max-w-3xl text-[0.9063rem] leading-[1.85] text-muted">
              {d.structure.desc}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 3. 공급 전후 담당 업무 */}
      <Section tone="paper" eyebrow="담당 업무" heading={d.phases.title}>
        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
          {d.phases.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60} className="h-full">
              <div className="h-full bg-paper p-6 lg:p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-[0.9375rem] font-bold tracking-[0.06em] text-brand">
                    {group.label}
                  </h3>
                  <span className="text-[0.625rem] font-semibold text-brand/45 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 border-t border-line pt-5">
                  <Checklist items={group.items} columns={1} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. 고객에게 제공하는 가치 */}
      <Section tone="surface" eyebrow="제공 가치" heading={d.values.title}>
        <div className="mt-10">
          <CardGrid cards={d.values.cards} columns={4} />
        </div>
      </Section>

      {/* 5. 대표이사 메시지 */}
      <Section tone="paper">
        <Reveal>
          <div className="bg-navy p-7 lg:p-12" style={{ borderRadius: "3px" }}>
            <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
              대표이사 메시지
            </p>
            <h2 className="mt-4 max-w-2xl text-[1.375rem] leading-[1.4] font-bold text-white sm:text-[1.5rem]">
              {d.ceoMessage.title}
            </h2>
            <blockquote className="mt-7 max-w-3xl space-y-4">
              {d.ceoMessage.paragraphs.map((p, i) => (
                <p key={i} className="text-[0.9375rem] leading-[1.9] text-white/85">
                  {p}
                </p>
              ))}
            </blockquote>
            <p className="mt-7 border-t border-white/15 pt-5 text-[0.875rem] font-semibold text-white/70">
              {d.ceoMessage.signature}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 6. 회사 개요 */}
      <Section tone="surface" eyebrow="회사 개요" heading={d.overview.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <InfoTable rows={d.overview.rows} />
          </div>
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
