import type { I18n } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

/**
 * 통일된 섹션 헤더 패턴 — 좌측 eyebrow + headline / 우측 설명
 * 12컬럼 그리드 위에서 7 : 5 로 분할.
 */
export default function SectionHeader({
  eyebrow,
  heading,
  lead,
  tone = "light",
}: {
  eyebrow: I18n;
  heading: I18n;
  lead?: I18n;
  tone?: "light" | "dark";
}) {
  const { t } = useLanguage();
  const isDark = tone === "dark";

  return (
    <div className="grid grid-cols-1 gap-6 border-b pb-8 lg:grid-cols-12 lg:gap-10 lg:pb-10"
      style={{ borderColor: isDark ? "rgba(255,255,255,0.14)" : undefined }}
    >
      <div className={`lg:col-span-7 ${isDark ? "" : "border-line"}`}>
        <p
          className={`text-[0.6875rem] font-semibold tracking-[0.2em] uppercase ${
            isDark ? "text-white/60" : "text-brand"
          }`}
        >
          {t(eyebrow)}
        </p>
        <h2
          className={`mt-3 text-[1.75rem] leading-[1.25] font-bold tracking-[-0.015em] sm:text-[2.125rem] lg:text-[2.5rem] ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {t(heading)}
        </h2>
      </div>
      {lead && (
        <div className="lg:col-span-5 lg:pt-9">
          <p
            className={`text-[0.9375rem] leading-[1.75] ${isDark ? "text-white/65" : "text-muted"}`}
          >
            {t(lead)}
          </p>
        </div>
      )}
    </div>
  );
}
