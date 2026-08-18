import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/ui";

/** KO / EN 토글 — 그 외 언어 UI 없음 */
export default function LanguageToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang, t } = useLanguage();
  const isDark = tone === "dark";

  const base =
    "px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[0.08em] transition-colors duration-150";
  const activeCls = isDark ? "bg-white text-navy" : "bg-brand text-white";
  const idleCls = isDark ? "text-white/60 hover:text-white" : "text-muted hover:text-brand";

  return (
    <div
      className="inline-flex items-center border"
      style={{ borderColor: isDark ? "rgba(255,255,255,0.24)" : "var(--color-line-strong)" }}
      role="group"
      aria-label={t(ui.languageLabel)}
    >
      <button
        type="button"
        onClick={() => setLang("ko")}
        aria-pressed={lang === "ko"}
        className={`${base} ${lang === "ko" ? activeCls : idleCls}`}
      >
        KO
      </button>
      <span
        aria-hidden="true"
        className="h-3 w-px"
        style={{ background: isDark ? "rgba(255,255,255,0.24)" : "var(--color-line-strong)" }}
      />
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? activeCls : idleCls}`}
      >
        EN
      </button>
    </div>
  );
}
