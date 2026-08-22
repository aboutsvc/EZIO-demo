import { company } from "../data/site";

// Demo Wordmark — 공식 CI 수령 시 교체
// 텍스트 워드마크 + 단순 기하학적 악센트(블루 바)만 사용. 심볼 로고 제작하지 않음.

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
}

export default function Logo({ tone = "dark", className = "" }: LogoProps) {
  const inkClass = tone === "light" ? "text-white" : "text-ink";
  const subClass = tone === "light" ? "text-white/55" : "text-muted";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* 기하학적 악센트 — 전력 바(bus bar) 모티프 */}
      <span aria-hidden="true" className="flex h-6 items-end gap-[3px]">
        <span className="block h-3 w-[3px] bg-brand" />
        <span className="block h-6 w-[3px] bg-brand" />
        <span className="block h-4 w-[3px] bg-brand/45" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.35rem] font-bold tracking-[0.14em] ${inkClass}`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {company.wordmark}
        </span>
        <span className={`mt-1 hidden text-[0.5625rem] tracking-[0.18em] uppercase sm:block ${subClass}`}>
          {company.englishMeaning}
        </span>
      </span>
    </span>
  );
}
