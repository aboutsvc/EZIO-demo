import type { ReactNode } from "react";

/**
 * 클래식 섹션 타이틀 — 좌측 블루 바(▎) + 아래 이중 밑줄(굵은 블루 + 얇은 그레이).
 * 올드스쿨 한국 기업 사이트의 대표적인 제목 장식이다.
 */
interface SectionTitleProps {
  children: ReactNode;
  /** 우측에 배치할 부가 요소 (더보기 링크 등) */
  aside?: ReactNode;
  /** underline: 이중 밑줄 표시 여부 */
  underline?: boolean;
  size?: "md" | "lg";
  className?: string;
  id?: string;
}

export function SectionTitle({
  children,
  aside,
  underline = true,
  size = "md",
  className = "",
  id,
}: SectionTitleProps) {
  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-4">
        <h2
          id={id}
          className={`flex items-center gap-2 font-bold text-ink tracking-[-0.02em] ${
            size === "lg" ? "text-[1.375rem] sm:text-[1.625rem]" : "text-[1.125rem] sm:text-[1.25rem]"
          }`}
        >
          <span
            aria-hidden="true"
            className={`block w-[4px] shrink-0 bg-brand ${size === "lg" ? "h-[1.15em]" : "h-[1.05em]"}`}
          />
          <span className="min-w-0">{children}</span>
        </h2>
        {aside ? <div className="shrink-0 pb-1">{aside}</div> : null}
      </div>
      {underline ? (
        <div className="relative mt-3 h-[3px] w-full bg-line" aria-hidden="true">
          {/* 이중 밑줄: 굵은 블루(좌측 구간) + 얇은 그레이(전체) */}
          <span className="absolute left-0 top-0 h-[3px] w-14 bg-brand" />
        </div>
      ) : null}
    </div>
  );
}

/** 문단 소제목 — 블루 사각 불릿 */
export function BulletTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`flex items-center gap-2 text-[1rem] font-bold text-ink ${className}`}>
      <span aria-hidden="true" className="block h-[7px] w-[7px] shrink-0 bg-brand" />
      <span className="min-w-0">{children}</span>
    </h3>
  );
}

export default SectionTitle;
