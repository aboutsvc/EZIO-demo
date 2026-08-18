import type { ReactNode } from "react";
import Reveal from "./Reveal";

export const containerClass =
  "mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

interface SectionProps {
  id: string;
  /** 섹션 인덱스 — 소형 대문자 라벨 좌측에 표기 */
  index?: string;
  label?: string;
  children: ReactNode;
  /** dark: #141414 반전 섹션 */
  tone?: "paper" | "alt" | "dark";
  className?: string;
  /** 상단 1px 라인 표시 여부 */
  rule?: boolean;
}

/**
 * 섹션 셸 — 카드 없음.
 * 구분은 오직 얇은 1px 라인(#D9D4CC)과 여백으로만 이루어진다.
 */
export default function Section({
  id,
  index,
  label,
  children,
  tone = "paper",
  className = "",
  rule = true,
}: SectionProps) {
  const toneClass =
    tone === "dark"
      ? "bg-ink text-paper"
      : tone === "alt"
        ? "bg-paper-alt text-ink"
        : "bg-paper text-ink";

  return (
    <section id={id} className={`${toneClass} ${className}`}>
      <div className={containerClass}>
        <div
          className={
            rule
              ? tone === "dark"
                ? "border-t border-rule-dark"
                : "border-t border-rule"
              : ""
          }
        >
          <div className="py-16 sm:py-20 md:py-28 lg:py-36">
            {(index || label) && (
              <Reveal className="mb-10 flex items-baseline gap-4 md:mb-16">
                {index && (
                  <span
                    className={`label ${tone === "dark" ? "text-accent-on-dark" : "text-accent"}`}
                  >
                    {index}
                  </span>
                )}
                {label && (
                  <span
                    className={`label ${tone === "dark" ? "text-paper/55" : ""}`}
                  >
                    {label}
                  </span>
                )}
              </Reveal>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
