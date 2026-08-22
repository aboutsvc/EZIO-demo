import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { CardGrid, Checklist, NoteBox, Section, StepList } from "../../components/PageBlocks";
import { EngineerAtPanel } from "../../components/scenes";
import { businessDelivery as d } from "../../data/business";

export default function BusinessDelivery() {
  return (
    <>
      <PageHero
        eyebrow="사업영역 · 납품 및 현장 대응"
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
              납품과 현장 사이의 접점
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
              {/* 향후 실제 납품/현장 사진 확보 시 동일 컨테이너에 <img>로 대체 가능 */}
              <div className="aspect-[4/3] w-full overflow-hidden border border-line" style={{ borderRadius: "2px" }}>
                <EngineerAtPanel tone="light" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 2. 납품 전 확인 */}
      <Section tone="surface" eyebrow="납품 전 확인" heading={d.checklist.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.checklist.items} columns={2} />
            <p className="mt-6 border-t border-line pt-5 text-[0.8438rem] leading-[1.75] text-muted">
              {d.checklist.note}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. 현장 요청 카드 4 */}
      <Section tone="paper" eyebrow="현장 요청" heading={d.requests.title}>
        <div className="mt-10">
          <CardGrid cards={d.requests.cards} columns={4} />
        </div>
      </Section>

      {/* 4. 절차 6단계 */}
      <Section tone="surface" eyebrow="업무 절차" heading={d.process.title}>
        <Reveal>
          <div className="mt-10">
            <StepList steps={d.process.steps} />
          </div>
        </Reveal>
      </Section>

      {/* 5. 커뮤니케이션 */}
      <Section tone="paper">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                커뮤니케이션
              </p>
              <h2 className="mt-3 text-[1.5rem] leading-[1.35] font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
                {d.communication.title}
              </h2>
              <div className="mt-6 h-[3px] w-14 bg-brand" aria-hidden="true" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.9688rem] leading-[1.9] text-ink/85">{d.communication.body}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 6. 긴급 요청 */}
      <Section tone="surface">
        <Reveal>
          <NoteBox>
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
              긴급 요청 대응
            </p>
            <h2 className="mt-3 text-[1.125rem] font-bold text-ink">{d.urgent.title}</h2>
            <p className="mt-3 max-w-3xl text-[0.9063rem] leading-[1.85] text-ink/80">
              {d.urgent.body}
            </p>
            <p className="mt-4 border-t border-brand-tint pt-4 text-[0.875rem] font-semibold text-ink">
              {d.urgent.contactNote}
            </p>
          </NoteBox>
        </Reveal>
      </Section>

      {/* 7. GS칼텍스 현장 관련 경험 */}
      <Section tone="paper" eyebrow="수행 경험" heading={d.experience.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-7 lg:p-8" style={{ borderRadius: "3px" }}>
            <p className="text-[0.9375rem] leading-[1.85] text-ink/85">{d.experience.body}</p>
            <p className="mt-5 border-t border-line pt-4 text-[0.8125rem] leading-[1.7] text-muted">
              {d.experience.scopeNote}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 8. 고객 편익 */}
      <Section tone="surface" eyebrow="고객 편익" heading={d.benefits.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.benefits.items} columns={2} />
          </div>
        </Reveal>
      </Section>

      {/* 9. 하단 CTA */}
      <CtaBanner
        title={d.cta.title}
        body={d.cta.body}
        primary={d.cta.primary}
        secondary={d.cta.secondary}
      />
    </>
  );
}
