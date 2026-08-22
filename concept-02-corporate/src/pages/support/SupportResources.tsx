import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { NoteBox, Section } from "../../components/PageBlocks";
import { supportResources as d } from "../../data/support";

export default function SupportResources() {
  return (
    <>
      <PageHero
        eyebrow="고객지원 · 기술자료·카탈로그"
        title={d.hero.title}
        sub={d.hero.sub}
        primary={d.hero.cta}
      />

      {/* 1. 이용 안내 */}
      <Section tone="paper">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
                자료 이용 안내
              </p>
              <h2 className="mt-3 text-[1.5rem] leading-[1.35] font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
                {d.guide.title}
              </h2>
              <div className="mt-6 h-[3px] w-14 bg-brand" aria-hidden="true" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.9688rem] leading-[1.9] text-ink/85">{d.guide.body}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 2. 자료 분류 + 빈 상태 */}
      <Section tone="surface" eyebrow="자료 분류" heading={d.categories.title} lead={d.categories.note}>
        <Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {d.categories.items.map((item) => (
              <li key={item} className="flex items-center gap-3 bg-paper px-5 py-5">
                <span aria-hidden="true" className="block h-5 w-[3px] shrink-0 bg-brand" />
                <p className="text-[0.875rem] font-semibold text-ink">{item}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 빈 상태 */}
        <Reveal delay={60}>
          <div
            className="mt-6 flex flex-col items-center justify-center border border-dashed border-line-strong bg-paper px-6 py-14 text-center"
            style={{ borderRadius: "3px" }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10 text-line-strong"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M4 6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
            </svg>
            <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.8] text-muted">{d.empty.message}</p>
          </div>
        </Reveal>
      </Section>

      {/* 3. 외부 공식 자료 안내 */}
      <Section tone="paper" eyebrow="외부 공식 자료" heading={d.external.title}>
        <Reveal>
          <NoteBox className="mt-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-brand uppercase">
                  {d.external.sourceLabel}
                </p>
                <p className="mt-3 text-[0.9063rem] leading-[1.8] text-ink/85">{d.external.note}</p>
                <p className="mt-2 text-[0.8125rem] leading-[1.7] text-muted">{d.external.rights}</p>
              </div>
              <a
                href={d.external.button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 bg-brand px-6 py-3 text-[0.875rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark"
                style={{ borderRadius: "3px" }}
              >
                {d.external.button.label}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5 2h7v7M12 2L6 8M11 9v3H2V3h3" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </a>
            </div>
          </NoteBox>
        </Reveal>
      </Section>

      {/* 4. 최신 버전 확인 안내 */}
      <Section tone="surface" eyebrow="최신 버전 확인" heading={d.latest.title}>
        <Reveal>
          <p className="mt-8 max-w-3xl text-[0.9375rem] leading-[1.9] text-ink/85">{d.latest.body}</p>
        </Reveal>
      </Section>

      {/* 5. 자료 문의 CTA */}
      <CtaBanner
        title={d.cta.title}
        body={d.cta.body}
        primary={d.cta.primary}
        secondary={d.cta.secondary}
      />
    </>
  );
}
