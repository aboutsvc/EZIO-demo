// Demo Wordmark — 공식 CI 수령 시 교체
// 클래식 한국 기업 헤더 문법: 영문 워드마크 + 한글 법인명 병기
import { company } from "../data/content";

interface LogoProps {
  /** navy: 어두운 배경(푸터)용 반전 */
  variant?: "default" | "navy";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const navy = variant === "navy";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* 단순 기하 악센트 — 배전 라인 모티프 (복잡한 심볼 제작 금지) */}
      <span aria-hidden="true" className="flex items-end gap-[3px]">
        <span className={`block w-[5px] h-4 ${navy ? "bg-white/70" : "bg-brand"}`} />
        <span className={`block w-[5px] h-6 ${navy ? "bg-white" : "bg-brand-navy"}`} />
        <span className={`block w-[5px] h-3 ${navy ? "bg-white/45" : "bg-brand/55"}`} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.5rem] font-extrabold tracking-[0.02em] ${
            navy ? "text-white" : "text-brand-navy"
          }`}
        >
          {company.wordmark}
        </span>
        <span
          className={`mt-[3px] text-[0.6875rem] tracking-[0.14em] ${
            navy ? "text-white/70" : "text-muted"
          }`}
        >
          {company.nameKo}
        </span>
      </span>
    </span>
  );
}

export default Logo;
