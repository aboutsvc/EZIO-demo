// Demo Wordmark — 공식 CI 수령 시 교체
// 심볼 없이 텍스트 워드마크만 사용한다 (미니멀 콘셉트: 타이포그래피가 곧 아이덴티티).
import { company } from "../data/content";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block font-extrabold leading-none tracking-[0.14em] ${className}`}
      aria-label={company.wordmark}
    >
      {company.wordmark}
    </span>
  );
}
