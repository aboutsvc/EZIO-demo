import type { ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { I18n } from "../data/content";

interface Props {
  id: string;
  title: I18n;
  en?: string;
  lead?: I18n;
  children: ReactNode;
  className?: string;
}

/** 서브페이지 본문 섹션 — 좌측 블루 액센트가 붙는 제목 + 본문 */
export default function ContentSection({ id, title, en, lead, children, className = "" }: Props) {
  const { t } = useLanguage();

  return (
    <section id={id} className={`scroll-mt-32 border-t border-line pt-10 first:border-t-0 first:pt-0 ${className}`}>
      <header className="title-accent">
        {en && (
          <p
            className="mb-1 text-[0.66rem] font-semibold tracking-[0.2em] text-brand uppercase"
            style={{ fontFamily: "var(--font-en)" }}
          >
            {en}
          </p>
        )}
        <h2 className="text-[1.35rem] font-bold text-ink lg:text-[1.65rem]">{t(title)}</h2>
        {lead && <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{t(lead)}</p>}
      </header>
      <div className="mt-7">{children}</div>
    </section>
  );
}
