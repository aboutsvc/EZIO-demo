import type { ReactNode } from "react";

/** 사이트 공통 콘텐츠 폭 — 한국 기업 포털의 넓은 고정 그리드(1280px) */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 lg:px-8 ${className}`}>{children}</div>;
}
