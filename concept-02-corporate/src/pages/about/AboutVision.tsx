import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { CardGrid, NoteBox, Section } from "../../components/PageBlocks";
import { aboutVision as d } from "../../data/about";

export default function AboutVision() {
  return (
    <>
      <PageHero
        eyebrow="회사소개 · 비전 및 경영철학"
        title={d.hero.title}
        sub={d.hero.sub}
        primary={d.hero.cta}
      />

      {/* 1. 도입 */}
      <Section tone="paper">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                경영 원칙
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

      {/* 2·3. 비전 / 미션 */}
      <Section tone="surface">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="h-full">
            <div className="h-full bg-navy p-7 lg:p-9" style={{ borderRadius: "3px" }}>
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/55 uppercase">
                {d.vision.label}
              </p>
              <p className="mt-5 text-[1.125rem] leading-[1.6] font-bold text-white lg:text-[1.25rem]">
                {d.vision.statement}
              </p>
              <p className="mt-5 border-t border-white/15 pt-5 text-[0.875rem] leading-[1.85] text-white/70">
                {d.vision.desc}
              </p>
            </div>
          </Reveal>
          <Reveal delay={60} className="h-full">
            <div className="h-full border border-line bg-paper p-7 lg:p-9" style={{ borderRadius: "3px" }}>
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                {d.mission.label}
              </p>
              <p className="mt-5 text-[1.125rem] leading-[1.6] font-bold text-ink lg:text-[1.25rem]">
                {d.mission.statement}
              </p>
              <p className="mt-5 border-t border-line pt-5 text-[0.875rem] leading-[1.85] text-muted">
                {d.mission.desc}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. 핵심가치 */}
      <Section tone="paper" eyebrow="Core Values" heading={d.coreValues.title}>
        <div className="mt-10">
          <CardGrid cards={d.coreValues.cards} columns={4} />
        </div>
      </Section>

      {/* 5. 실천 기준 */}
      <Section tone="surface" eyebrow="실천 기준" heading={d.practice.title}>
        <Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line">
            {d.practice.rows.map((row) => (
              <div
                key={row.situation}
                className="grid grid-cols-1 gap-2 bg-paper px-5 py-5 sm:grid-cols-12 sm:gap-6 sm:px-7"
              >
                <div className="flex items-center gap-3 sm:col-span-3 lg:col-span-2">
                  <span aria-hidden="true" className="block h-5 w-[3px] shrink-0 bg-brand" />
                  <h3 className="text-[0.9375rem] font-bold text-ink">{row.situation}</h3>
                </div>
                <p className="text-[0.875rem] leading-[1.75] text-ink/80 sm:col-span-9 lg:col-span-10">
                  {row.standard}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 6. 고객에게 드리는 약속 */}
      <Section tone="paper">
        <Reveal>
          <NoteBox>
            <h2 className="text-[1.125rem] leading-[1.5] font-bold text-ink">{d.promise.title}</h2>
            <p className="mt-3 max-w-3xl text-[0.9063rem] leading-[1.85] text-ink/80">
              {d.promise.body}
            </p>
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
