import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

/* ──────────────────────────────────────────────
 * 서브페이지 공용 빌딩 블록 — 콘셉트 02의 색감·타이포·섹션 리듬 유지
 * ────────────────────────────────────────────── */

/** 표준 섹션 래퍼 — paper/surface 교차 리듬 + SectionHeader */
export function Section({
  eyebrow,
  heading,
  lead,
  tone = "paper",
  children,
}: {
  eyebrow?: string;
  heading?: string;
  lead?: string;
  tone?: "paper" | "surface";
  children?: ReactNode;
}) {
  return (
    <section
      className={`border-b border-line py-14 lg:py-20 ${
        tone === "surface" ? "bg-surface" : "bg-paper"
      }`}
    >
      <Container>
        {heading && <SectionHeader eyebrow={eyebrow} heading={heading} lead={lead} />}
        {children}
      </Container>
    </section>
  );
}

/** 체크리스트 — 브랜드 틱 마커 */
export function Checklist({
  items,
  columns = 2,
  className = "",
}: {
  items: readonly string[];
  columns?: 1 | 2 | 3;
  className?: string;
}) {
  const colCls =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : columns === 2
        ? "sm:grid-cols-2"
        : "";
  return (
    <ul className={`grid grid-cols-1 gap-x-8 gap-y-3 ${colCls} ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[0.9063rem] leading-[1.7] text-ink/85">
          <svg
            viewBox="0 0 16 16"
            className="mt-[5px] h-3.5 w-3.5 shrink-0 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M2.5 8.5l3.5 3.5L13.5 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** 절차 스텝 — 번호 + 제목 + 설명 (+ 안내 문구) */
export interface Step {
  no: string;
  title: string;
  work?: string;
  desc?: string;
  guide?: string;
}

export function StepList({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="grid grid-cols-1 gap-px border border-line bg-line">
      {steps.map((step) => (
        <li key={step.no} className="bg-paper px-5 py-5 sm:px-7">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6">
            <div className="flex items-baseline gap-4 sm:col-span-4 lg:col-span-3">
              <span className="text-[0.8125rem] font-bold tracking-[0.1em] text-brand tabular-nums">
                {step.no.padStart(2, "0")}
              </span>
              <h3 className="text-[0.9688rem] leading-snug font-bold text-ink">{step.title}</h3>
            </div>
            <div className="sm:col-span-8 lg:col-span-9">
              {(step.work ?? step.desc) && (
                <p className="text-[0.875rem] leading-[1.75] text-ink/80">
                  {step.work ?? step.desc}
                </p>
              )}
              {step.guide && (
                <p className="mt-1.5 text-[0.8125rem] leading-[1.7] text-muted">
                  “{step.guide}”
                </p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** 정보 표 — 라벨/값 (미확정 행은 pending 스타일) */
export interface InfoRow {
  label: string;
  value: string;
  pending?: boolean;
}

export function InfoTable({ rows }: { rows: readonly InfoRow[] }) {
  return (
    <dl className="border-t border-line">
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-4 sm:gap-4"
        >
          <dt className="text-[0.8125rem] font-semibold text-muted sm:col-span-1">{row.label}</dt>
          <dd
            className={`text-[0.9375rem] leading-[1.7] sm:col-span-3 ${
              row.pending ? "text-muted/80" : "text-ink"
            }`}
          >
            {row.pending ? (
              <span className="inline-flex items-center gap-2">
                <span
                  className="border border-line-strong px-2 py-0.5 text-[0.6875rem] font-semibold tracking-[0.06em] text-muted"
                  style={{ borderRadius: "2px" }}
                >
                  확정 전
                </span>
                {row.value}
              </span>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** 카드 그리드 — 제목 + 본문 (+ 번호) */
export interface InfoCard {
  no?: string;
  title: string;
  body: string;
}

export function CardGrid({
  cards,
  columns = 2,
}: {
  cards: readonly InfoCard[];
  columns?: 2 | 3 | 4;
}) {
  const colCls =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-px border border-line bg-line ${colCls}`}>
      {cards.map((card, i) => (
        <Reveal key={i} delay={i * 60} className="h-full">
          <article className="h-full bg-paper p-6 transition-shadow duration-200 hover:shadow-[0_2px_16px_rgba(14,27,51,0.09)] lg:p-7">
            <div className="flex items-baseline justify-between">
              <span className="text-[0.75rem] font-bold tracking-[0.16em] text-brand tabular-nums">
                {card.no ?? String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            </div>
            <h3 className="mt-4 text-[1.0313rem] leading-snug font-bold text-ink">{card.title}</h3>
            <p className="mt-3 text-[0.875rem] leading-[1.75] text-muted">{card.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/** 안내 박스 — info(브랜드 소프트) / warn(안전 안내) */
export function NoteBox({
  children,
  tone = "info",
  className = "",
}: {
  children: ReactNode;
  tone?: "info" | "warn";
  className?: string;
}) {
  if (tone === "warn") {
    return (
      <div
        className={`border border-[#e0b4b4] bg-[#fdf3f2] p-5 lg:p-6 ${className}`}
        style={{ borderRadius: "3px", borderLeftWidth: "4px", borderLeftColor: "#b4372f" }}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className={`border border-brand-tint bg-brand-soft p-5 lg:p-6 ${className}`}
      style={{ borderRadius: "3px", borderLeftWidth: "4px", borderLeftColor: "var(--color-brand)" }}
    >
      {children}
    </div>
  );
}

/** 2주체/3주체 표 — 주체·역할 */
export function SubjectTable({
  rows,
}: {
  rows: readonly { subject: string; role: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-px border border-line bg-line">
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-1 gap-2 bg-paper px-5 py-5 sm:grid-cols-12 sm:gap-6 sm:px-7">
          <div className="flex items-center gap-3 sm:col-span-4 lg:col-span-3">
            <span aria-hidden="true" className="block h-5 w-[3px] shrink-0 bg-brand" />
            <h3 className="text-[0.9688rem] font-bold text-ink">{row.subject}</h3>
          </div>
          <p className="text-[0.875rem] leading-[1.75] text-ink/80 sm:col-span-8 lg:col-span-9">
            {row.role}
          </p>
        </div>
      ))}
    </div>
  );
}
