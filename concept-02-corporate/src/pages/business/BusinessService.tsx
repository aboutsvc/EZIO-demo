import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { Checklist, NoteBox, Section, StepList } from "../../components/PageBlocks";
import { HmiScreen } from "../../components/scenes";
import { businessService as d } from "../../data/business";

export default function BusinessService() {
  return (
    <>
      <PageHero
        eyebrow="사업영역 · 기술지원 및 A/S"
        title={d.hero.title}
        sub={d.hero.sub}
        primary={d.hero.primary}
        secondary={d.hero.secondary}
      />

      {/* 1. 역할 */}
      <Section tone="paper">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
              EGO의 역할
            </p>
            <h2 className="mt-3 text-[1.5rem] leading-[1.35] font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
              {d.role.title}
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-[1.9] text-ink/85">{d.role.body}</p>
            <p className="mt-5 border-l-2 border-brand pl-4 text-[0.8438rem] leading-[1.8] text-muted">
              {d.role.scope}
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5">
            <div className="border border-line bg-paper p-4 lg:p-5" style={{ borderRadius: "3px" }}>
              {/* 향후 실제 지원 업무 사진 확보 시 동일 컨테이너에 <img>로 대체 가능 */}
              <div className="aspect-[4/3] w-full overflow-hidden border border-line" style={{ borderRadius: "2px" }}>
                <HmiScreen tone="light" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 2. 접수 가능한 요청 */}
      <Section tone="surface" eyebrow="접수 범위" heading={d.acceptable.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.acceptable.items} columns={2} />
            <p className="mt-6 border-t border-line pt-5 text-[0.8438rem] leading-[1.75] text-muted">
              {d.acceptable.note}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. 접수 전 준비 정보 */}
      <Section tone="paper" eyebrow="준비 정보" heading={d.prepare.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.prepare.items} columns={2} />
          </div>
        </Reveal>
        <Reveal delay={60}>
          <NoteBox tone="warn" className="mt-6">
            <p className="text-[0.875rem] leading-[1.8] text-ink/85">{d.prepare.safetyNote}</p>
          </NoteBox>
        </Reveal>
      </Section>

      {/* 4. 절차 6단계 */}
      <Section tone="surface" eyebrow="지원 절차" heading={d.process.title}>
        <Reveal>
          <div className="mt-10">
            <StepList steps={d.process.steps} />
          </div>
        </Reveal>
      </Section>

      {/* 5. 제조사 연계 */}
      <Section tone="paper" eyebrow="제조사 연계" heading={d.manufacturer.title}>
        <Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="border border-line bg-paper p-7 lg:col-span-7 lg:p-8" style={{ borderRadius: "3px" }}>
              <p className="text-[0.9375rem] leading-[1.85] text-ink/85">{d.manufacturer.body}</p>
            </div>
            <div className="lg:col-span-5">
              <NoteBox className="h-full">
                <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-brand uppercase">
                  명확화 안내
                </p>
                <p className="mt-3 text-[0.8438rem] leading-[1.8] text-ink/80">
                  {d.manufacturer.clarification}
                </p>
              </NoteBox>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 6. 수리·교체와 단종 */}
      <Section tone="surface" eyebrow="처리 안내" heading={d.repair.title}>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {d.repair.blocks.map((block, i) => (
            <Reveal key={block.label} delay={i * 60} className="h-full">
              <div className="h-full border border-line bg-paper p-6 lg:p-7" style={{ borderRadius: "3px" }}>
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="block h-5 w-[3px] shrink-0 bg-brand" />
                  <h3 className="text-[0.9688rem] font-bold text-ink">{block.label}</h3>
                </div>
                <p className="mt-4 text-[0.875rem] leading-[1.8] text-muted">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. 안전 긴급 안내 — 시각적으로 구분 */}
      <Section tone="paper">
        <Reveal>
          <NoteBox tone="warn">
            <p className="text-[0.6875rem] font-bold tracking-[0.2em] text-[#b4372f] uppercase">
              안전 관련 긴급 안내
            </p>
            <h2 className="mt-3 text-[1.125rem] leading-[1.5] font-bold text-ink">{d.safety.title}</h2>
            <p className="mt-3 max-w-3xl text-[0.9063rem] leading-[1.85] text-ink/85">{d.safety.body}</p>
            <p className="mt-4 border-t border-[#e0b4b4] pt-4 text-[0.8438rem] font-semibold text-ink/80">
              {d.safety.caution}
            </p>
          </NoteBox>
        </Reveal>
      </Section>

      {/* 8. 하단 CTA */}
      <CtaBanner
        title={d.cta.title}
        body={d.cta.body}
        primary={d.cta.primary}
        secondary={d.cta.secondary}
      />
    </>
  );
}
