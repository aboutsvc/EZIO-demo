import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { NoteBox, Section } from "../../components/PageBlocks";
import { ui } from "../../data/site";
import { supportNotice as d } from "../../data/support";

export default function SupportNotice() {
  return (
    <>
      <PageHero eyebrow="고객지원 · 공지사항" title={d.hero.title} sub={d.hero.sub} />

      <Section tone="paper" eyebrow="Notice" heading="공지사항" lead={d.intro}>
        {/* 현재 상태 — 등록된 공지 없음 */}
        <Reveal>
          <NoteBox className="mt-10">
            <p className="text-[0.9063rem] leading-[1.8] text-ink/85">{d.emptyState}</p>
          </NoteBox>
        </Reveal>

        {/* 게시 예시 목록 — 실제 공지가 아님 */}
        <Reveal delay={60}>
          <div className="mt-12">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[1.0625rem] font-bold text-ink">게시 예시</h3>
              <span
                className="bg-brand-soft px-2 py-0.5 text-[0.6875rem] font-semibold tracking-[0.06em] text-brand"
                style={{ borderRadius: "2px" }}
              >
                {ui.demoBadge}
              </span>
            </div>
            <p className="mt-2 text-[0.8438rem] leading-[1.7] text-muted">{d.exampleNote}</p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-y border-line-strong bg-surface">
                    <th className="px-4 py-3 text-[0.75rem] font-semibold tracking-[0.06em] text-muted">
                      카테고리
                    </th>
                    <th className="px-4 py-3 text-[0.75rem] font-semibold tracking-[0.06em] text-muted">
                      제목
                    </th>
                    <th className="px-4 py-3 text-right text-[0.75rem] font-semibold tracking-[0.06em] text-muted">
                      등록일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {d.examples.map((row, i) => (
                    <tr key={i} className="border-b border-line">
                      <td className="whitespace-nowrap px-4 py-4">
                        <span
                          className="border border-line bg-surface px-2 py-1 text-[0.6875rem] font-semibold text-muted"
                          style={{ borderRadius: "2px" }}
                        >
                          {row.category}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex flex-wrap items-center gap-2">
                          <span className="text-[0.9063rem] font-medium text-ink">{row.title}</span>
                          <span
                            className="bg-brand-soft px-1.5 py-0.5 text-[0.625rem] font-semibold text-brand"
                            style={{ borderRadius: "2px" }}
                          >
                            {ui.demoBadge}
                          </span>
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-[0.8125rem] text-muted">
                        —
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[0.75rem] leading-[1.7] text-muted">{d.exampleDetailNote}</p>
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
