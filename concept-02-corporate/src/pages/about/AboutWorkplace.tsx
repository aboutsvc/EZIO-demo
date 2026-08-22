import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { Checklist, InfoTable, NoteBox, Section } from "../../components/PageBlocks";
import { PlantAerial } from "../../components/scenes";
import { aboutWorkplace as d } from "../../data/about";

export default function AboutWorkplace() {
  return (
    <>
      <PageHero
        eyebrow="회사소개 · 사업장 소개"
        title={d.hero.title}
        sub={d.hero.sub}
        primary={d.hero.cta}
      />

      {/* 1. 기본 정보 — 전 항목 확정 후 게재 */}
      <Section tone="paper" eyebrow="기본 정보" heading={d.basicInfo.title}>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <div className="border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
              <InfoTable rows={d.basicInfo.rows.map((r) => ({ ...r, pending: true }))} />
            </div>
          </Reveal>
          <Reveal delay={60} className="lg:col-span-5">
            <NoteBox>
              <p className="text-[0.9063rem] leading-[1.85] text-ink/85">{d.basicInfo.notice}</p>
            </NoteBox>
          </Reveal>
        </div>
      </Section>

      {/* 2. 지도 플레이스홀더 */}
      <Section tone="surface" eyebrow="Location" heading={d.map.title}>
        <Reveal>
          <div
            className="relative mt-10 overflow-hidden border border-line bg-paper"
            style={{ borderRadius: "3px" }}
          >
            <div className="h-[240px] w-full opacity-40 sm:h-[320px]" aria-hidden="true">
              <PlantAerial tone="light" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                className="border border-line bg-paper/95 px-6 py-4 text-[0.9063rem] font-semibold text-ink shadow-[0_2px_12px_rgba(14,27,51,0.1)]"
                style={{ borderRadius: "3px" }}
              >
                {d.map.placeholder}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 3. 방문 전 확인사항 */}
      <Section tone="paper" eyebrow="Visit" heading={d.beforeVisit.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.beforeVisit.items} columns={2} />
          </div>
        </Reveal>
      </Section>

      {/* 4. 하단 문의 연결 */}
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
