import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { Section } from "../../components/PageBlocks";
import { aboutExecutives as d } from "../../data/about";

export default function AboutExecutives() {
  return (
    <>
      <PageHero
        eyebrow="회사소개 · 경영진 소개"
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
                경영진
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

      {/* 2. 인물 카드 — 사진·이름·경력 확정 전 플레이스홀더 */}
      <Section tone="surface" eyebrow="People" heading="경영진 소개">
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {d.people.map((person, i) => (
            <Reveal key={person.position} delay={i * 60} className="h-full">
              <article
                className="h-full border border-line bg-paper p-6 lg:p-8"
                style={{ borderRadius: "3px" }}
              >
                <div className="flex items-start gap-6">
                  {/* 실루엣 플레이스홀더 — 공식 프로필 사진 확정 후 교체 */}
                  <div
                    className="flex h-24 w-24 shrink-0 items-center justify-center border border-line bg-surface"
                    style={{ borderRadius: "3px" }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 48 48" className="h-12 w-12 text-line-strong" fill="currentColor">
                      <circle cx="24" cy="17" r="8" />
                      <path d="M8 44c0-9 7.2-14 16-14s16 5 16 14H8z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-brand uppercase">
                      {person.initial}
                    </p>
                    <h3 className="mt-2 text-[1.25rem] font-bold text-ink">{person.position}</h3>
                    <p className="mt-2 text-[0.75rem] leading-[1.6] text-muted">{person.note}</p>
                  </div>
                </div>
                <dl className="mt-6 border-t border-line">
                  {person.fields.map((field) => (
                    <div
                      key={field.label}
                      className="grid grid-cols-3 gap-3 border-b border-line py-3"
                    >
                      <dt className="text-[0.8125rem] font-semibold text-muted">{field.label}</dt>
                      <dd className="col-span-2 text-[0.875rem] text-muted/80">{field.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. 경영진 공동 메시지 */}
      <Section tone="paper">
        <Reveal>
          <div className="bg-navy p-7 lg:p-12" style={{ borderRadius: "3px" }}>
            <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
              경영진 공동 메시지
            </p>
            <h2 className="mt-4 text-[1.375rem] leading-[1.4] font-bold text-white sm:text-[1.5rem]">
              {d.jointMessage.title}
            </h2>
            <p className="mt-6 max-w-3xl text-[0.9375rem] leading-[1.9] text-white/85">
              {d.jointMessage.body}
            </p>
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
