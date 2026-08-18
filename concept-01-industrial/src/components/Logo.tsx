import { company } from "../data/content";

// Demo Wordmark — 공식 CI 수령 시 교체
// 심볼 제작 없이 텍스트 워드마크 + 최소 기하학 악센트(오렌지 바)만 사용한다.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className="h-[0.9em] w-[3px] bg-orange" />
      <span className="font-mono text-[1.05rem] font-semibold tracking-[0.22em] text-fg">
        {company.wordmark}
      </span>
    </span>
  );
}
