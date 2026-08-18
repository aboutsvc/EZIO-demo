import type { ReactNode } from "react";

/** 블루프린트식 코너 마커(＋) — 장식 요소 */
export function CornerMarks({ className = "" }: { className?: string }) {
  const mark =
    "absolute h-[9px] w-[9px] before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-line after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:-translate-y-1/2 after:bg-line";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <span className={`${mark} -left-[4px] -top-[4px]`} />
      <span className={`${mark} -right-[4px] -top-[4px]`} />
      <span className={`${mark} -bottom-[4px] -left-[4px]`} />
      <span className={`${mark} -right-[4px] -bottom-[4px]`} />
    </div>
  );
}

interface SectionProps {
  id: string;
  /** mono numeric label — "01" */
  no: string;
  /** mono section name — "SOLUTIONS" */
  label: string;
  /** 도면 라벨 장식 (예: DWG NO. EZ-2026-03) */
  dwg?: string;
  heading?: ReactNode;
  intro?: ReactNode;
  tone?: "base" | "alt" | "raised";
  grid?: boolean;
  children: ReactNode;
  className?: string;
}

const TONE: Record<NonNullable<SectionProps["tone"]>, string> = {
  base: "bg-ink",
  alt: "bg-ink-2",
  raised: "bg-ink-3",
};

export default function Section({
  id,
  no,
  label,
  dwg,
  heading,
  intro,
  tone = "base",
  grid = false,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative border-t-2 border-line ${TONE[tone]} ${className}`}
    >
      {/* 섹션 상단 보더 위 오렌지 세그먼트 */}
      <span
        aria-hidden="true"
        className="absolute -top-[2px] left-0 h-[2px] w-16 bg-orange sm:w-24"
      />
      {grid && (
        <div
          aria-hidden="true"
          className="eng-grid pointer-events-none absolute inset-0 opacity-60"
        />
      )}

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 md:py-24 lg:px-16 lg:py-32">
        {/* 섹션 헤더: 좌측 번호 + mono 라벨 */}
        <div className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line pb-4">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-2xl font-medium leading-none text-orange sm:text-3xl">
              {no}
            </span>
            <span className="mono-label text-fg/70">{label}</span>
          </div>
          {dwg && <span className="mono-label text-muted/60">{dwg}</span>}
        </div>

        {(heading || intro) && (
          <div className="reveal mt-10 grid gap-6 md:mt-14 md:grid-cols-12 md:gap-10">
            {heading && (
              <h2 className="md:col-span-6 lg:col-span-6 text-3xl font-bold leading-[1.12] tracking-tight text-fg sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
            )}
            {intro && (
              <div className="md:col-span-6 md:col-start-7 text-[0.95rem] leading-[1.85] text-muted">
                {intro}
              </div>
            )}
          </div>
        )}

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
