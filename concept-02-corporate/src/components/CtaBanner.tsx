import { Link } from "react-router-dom";
import Container from "./Container";
import Reveal from "./Reveal";
import { replyNotice } from "../data/site";

export interface CtaLink {
  label: string;
  path: string;
}

/** 공통 하단 CTA 배너 — 페이지별 문안 변형을 props로 전달 */
export default function CtaBanner({
  title,
  body,
  note,
  primary,
  secondary,
  showReplyNotice = true,
}: {
  title: string;
  body?: string;
  note?: string;
  primary: CtaLink;
  secondary?: CtaLink;
  showReplyNotice?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
      <Container className="relative">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
            <div className="lg:col-span-7">
              <h2 className="text-[1.375rem] leading-[1.35] font-bold tracking-[-0.01em] text-ink sm:text-[1.625rem]">
                {title}
              </h2>
              {body && (
                <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.8] text-muted">{body}</p>
              )}
              {note && <p className="mt-3 text-[0.8125rem] leading-[1.7] text-muted">{note}</p>}
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to={primary.path}
                  className="inline-flex items-center gap-2 bg-brand px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark"
                  style={{ borderRadius: "3px" }}
                >
                  {primary.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </Link>
                {secondary && (
                  <Link
                    to={secondary.path}
                    className="inline-flex items-center gap-2 border border-line-strong bg-paper px-7 py-3.5 text-[0.9375rem] font-semibold text-ink transition-all duration-150 hover:border-brand hover:text-brand"
                    style={{ borderRadius: "3px" }}
                  >
                    {secondary.label}
                  </Link>
                )}
              </div>
              {showReplyNotice && (
                <p className="mt-5 text-[0.75rem] leading-[1.7] text-muted lg:text-right">
                  {replyNotice}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
