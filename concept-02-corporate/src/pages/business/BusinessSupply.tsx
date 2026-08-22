import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { CardGrid, Checklist, NoteBox, Section, StepList } from "../../components/PageBlocks";
import { SwitchgearRoom } from "../../components/scenes";
import { businessSupply as d } from "../../data/business";

export default function BusinessSupply() {
  return (
    <>
      <PageHero
        eyebrow="사업영역 · LS ELECTRIC 제품 공급"
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
              제품 공급 역할
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
              {/* 향후 실제 제품/출고 사진 확보 시 동일 컨테이너에 <img>로 대체 가능 */}
              <div className="aspect-[4/3] w-full overflow-hidden border border-line" style={{ borderRadius: "2px" }}>
                <SwitchgearRoom tone="light" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 2. 먼저 확인하는 정보 */}
      <Section tone="surface" eyebrow="사전 확인" heading={d.checklist.title} lead={d.checklist.body}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.checklist.items} columns={2} />
            <p className="mt-6 border-t border-line pt-5 text-[0.8438rem] leading-[1.75] text-muted">
              {d.checklist.note}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. 공급 절차 7단계 */}
      <Section tone="paper" eyebrow="공급 절차" heading={d.process.title}>
        <Reveal>
          <div className="mt-10">
            <StepList steps={d.process.steps} />
          </div>
        </Reveal>
      </Section>

      {/* 4. 편의 카드 4 */}
      <Section tone="surface" eyebrow="구매 편의" heading={d.benefits.title}>
        <div className="mt-10">
          <CardGrid cards={d.benefits.cards} columns={4} />
        </div>
      </Section>

      {/* 5. 취급 제품군 안내 */}
      <Section tone="paper">
        <Reveal>
          <NoteBox>
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
              취급 제품군 안내
            </p>
            <h2 className="mt-3 text-[1.125rem] font-bold text-ink">{d.productRange.title}</h2>
            <p className="mt-3 max-w-3xl text-[0.9063rem] leading-[1.85] text-ink/80">
              {d.productRange.body}
            </p>
          </NoteBox>
        </Reveal>
      </Section>

      {/* 6. 문의 전 준비 정보 */}
      <Section tone="surface" eyebrow="준비 정보" heading={d.prepare.title} lead={d.prepare.body}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.prepare.items} columns={2} />
          </div>
        </Reveal>
      </Section>

      {/* 7. 하단 CTA */}
      <CtaBanner
        title={d.cta.title}
        body={d.cta.body}
        primary={d.cta.primary}
        secondary={d.cta.secondary}
      />
    </>
  );
}
