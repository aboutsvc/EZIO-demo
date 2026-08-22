import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

export interface PageHeroCta {
  label: string;
  path: string;
}

/** 서브페이지 상단 히어로 — 네이비 밴드 + 그리드 배경 (콘셉트 02 톤 유지) */
export default function PageHero({
  eyebrow,
  title,
  sub,
  primary,
  secondary,
  note,
  children,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  primary?: PageHeroCta;
  secondary?: PageHeroCta;
  note?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-navy-2 to-transparent"
      />
      <Container className="relative">
        <div className="py-14 lg:py-20">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="block h-px w-8 bg-white/50" />
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/60 uppercase">
              {eyebrow}
            </p>
          </div>

          <h1
            className="mt-5 max-w-3xl font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)", lineHeight: 1.25 }}
          >
            {title}
          </h1>

          {sub && (
            <p className="mt-5 max-w-2xl text-[0.9375rem] leading-[1.85] text-white/70 lg:text-[1rem]">
              {sub}
            </p>
          )}

          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primary && (
                <Link
                  to={primary.path}
                  className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-[0.875rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark"
                  style={{ borderRadius: "3px" }}
                >
                  {primary.label}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </Link>
              )}
              {secondary && (
                <Link
                  to={secondary.path}
                  className="inline-flex items-center gap-2 border border-white/35 px-6 py-3 text-[0.875rem] font-semibold text-white transition-colors duration-150 hover:bg-white hover:text-navy"
                  style={{ borderRadius: "3px" }}
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          )}

          {note && <p className="mt-6 text-[0.8125rem] leading-[1.7] text-white/55">{note}</p>}

          {children}
        </div>
      </Container>
      <div className="h-[3px] w-full bg-brand" aria-hidden="true" />
    </section>
  );
}
