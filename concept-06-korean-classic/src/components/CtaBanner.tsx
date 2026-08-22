import { Link } from "react-router-dom";
import { commonCta } from "../data/content";

/**
 * 공통 하단 CTA 배너 — 각 페이지 콘텐츠 말미에 배치한다.
 * 기본 문구는 명세서 12.3 기본형이며, 사업영역 페이지 등은 페이지별 변형 문구를 props로 전달한다.
 */
interface CtaBannerProps {
  title?: string;
  body?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  /** 하단 보조 안내 (기본: 회신 안내 문구) */
  note?: string;
  className?: string;
}

export function CtaBanner({
  title = commonCta.title,
  body = commonCta.body,
  primary = commonCta.primary,
  secondary = commonCta.secondary,
  note = commonCta.replyNote,
  className = "",
}: CtaBannerProps) {
  return (
    <section className={`border border-brand-navy bg-brand-navy p-6 text-white sm:p-8 ${className}`}>
      <h2 className="text-[1.25rem] font-bold tracking-[-0.02em] sm:text-[1.375rem]">{title}</h2>
      <div aria-hidden="true" className="mt-3 h-[3px] w-14 bg-brand" />
      <p className="mt-4 max-w-[44rem] text-[0.9375rem] leading-relaxed text-white/80">{body}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link to={primary.to} className="btn-blue h-11 px-6 text-[0.9375rem]">
          {primary.label}
          <span aria-hidden="true">›</span>
        </Link>
        {secondary ? (
          <Link
            to={secondary.to}
            className="flex h-11 items-center gap-1.5 border border-white/50 px-6 text-[0.9375rem] font-semibold text-white hover:bg-white/10"
          >
            {secondary.label}
            <span aria-hidden="true">›</span>
          </Link>
        ) : null}
      </div>
      {note ? <p className="mt-4 text-[0.75rem] leading-relaxed text-white/55">{note}</p> : null}
    </section>
  );
}

export default CtaBanner;
