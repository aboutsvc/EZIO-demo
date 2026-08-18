import type { ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { I18n } from "../data/content";

interface Props {
  title: I18n;
  lead?: I18n;
  /** 영문 서브라벨 (한국 기업 사이트의 KO+EN 병기 문법) */
  en?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
}

export default function SectionTitle({
  title,
  lead,
  en,
  align = "left",
  tone = "dark",
  action,
}: Props) {
  const { t } = useLanguage();
  const centered = align === "center";
  const ink = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/65" : "text-muted";

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${
        centered ? "sm:flex-col sm:items-center" : ""
      }`}
    >
      <div className={centered ? "text-center" : undefined}>
        {en && (
          <p
            className={`text-[0.68rem] font-semibold tracking-[0.2em] uppercase ${
              tone === "light" ? "text-brand-sky" : "text-brand"
            }`}
            style={{ fontFamily: "var(--font-en)" }}
          >
            {en}
          </p>
        )}
        <h2 className={`mt-2 text-[1.5rem] leading-snug font-bold lg:text-[1.95rem] ${ink}`}>
          {t(title)}
        </h2>
        {lead && (
          <p className={`mt-3 max-w-3xl text-[0.9rem] leading-relaxed lg:text-[0.95rem] ${sub}`}>
            {t(lead)}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
