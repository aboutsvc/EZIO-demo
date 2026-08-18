import { useLanguage } from "../context/LanguageContext";
import { company } from "../data/content";

// Demo Wordmark — 공식 CI 수령 시 교체
// 텍스트 워드마크 + 단순 기하학적 악센트(부스바 모티프)만 사용. 심볼 로고를 창작하지 않는다.

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
  /** 한글 회사명 병기 (한국 기업 사이트 문법) */
  withKoName?: boolean;
}

export default function Logo({ tone = "dark", className = "", withKoName = true }: LogoProps) {
  const { lang } = useLanguage();
  const ink = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/60" : "text-muted";
  const barMain = tone === "light" ? "bg-white" : "bg-brand";
  const barSoft = tone === "light" ? "bg-white/50" : "bg-brand-sky";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span aria-hidden="true" className="flex h-6 items-end gap-[3px]">
        <span className={`block h-3 w-[3px] ${barMain}`} />
        <span className={`block h-6 w-[3px] ${barMain}`} />
        <span className={`block h-4 w-[3px] ${barSoft}`} />
      </span>
      <span className="flex items-baseline gap-2">
        <span
          className={`text-[1.4rem] leading-none font-bold tracking-[0.12em] ${ink}`}
          style={{ fontFamily: "var(--font-en)" }}
        >
          {company.wordmark}
        </span>
        {withKoName && (
          <span className={`hidden text-[0.75rem] leading-none sm:inline ${sub}`}>
            {/* 한국 기업 사이트 문법 — 국문 사이트에서만 한글 회사명 병기 */}
            {lang === "ko" ? company.nameKo : "Industrial Power Solutions"}
          </span>
        )}
      </span>
    </span>
  );
}
