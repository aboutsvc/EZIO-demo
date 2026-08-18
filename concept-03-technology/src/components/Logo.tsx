import { company } from "../data/content";

// Demo Wordmark — 공식 CI 수령 시 교체
// 텍스트 워드마크 + 단순 기하학적 악센트(노드 점)만 사용. 심볼 제작 금지.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className="relative -mb-px inline-block h-1.5 w-1.5 shrink-0 self-center rounded-full bg-[var(--color-teal-data)]"
      />
      <span className="font-display text-[1.0625rem] font-extrabold tracking-[0.22em] text-[var(--color-ink)]">
        {company.wordmark}
      </span>
    </span>
  );
}
