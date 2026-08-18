import type { ReactNode } from "react";

/** 12컬럼 그리드 기준 컨테이너 — Desktop 1440px 기준 폭 1280px */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
