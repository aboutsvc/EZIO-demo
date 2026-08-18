import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { containerClass } from "./Section";

interface SceneFigureProps {
  children: ReactNode;
  /** 에디토리얼 사진 크레딧 라인 — .label 이 대문자로 변환한다 */
  caption: string;
  /** 우측 보조 라벨 */
  note?: string;
  /** 크롭 비율 — 씬은 사진처럼 slice 로 잘린다 */
  ratio?: string;
  tone?: "paper" | "dark";
  /** 뷰포트 전폭 밴드 — 컨테이너 바깥에서만 사용 */
  bleed?: boolean;
  className?: string;
  delay?: number;
}

/**
 * 씬 아트워크 플레이트.
 * 카드·라운드·그림자 없음. 이미지 + 1px 라인 + 소형 대문자 캡션만으로
 * 인쇄물의 도판(圖版)처럼 다룬다.
 */
export default function SceneFigure({
  children,
  caption,
  note,
  ratio = "aspect-[21/9]",
  tone = "paper",
  bleed = false,
  className = "",
  delay = 0,
}: SceneFigureProps) {
  const ruleClass = tone === "dark" ? "border-rule-dark" : "border-rule";

  const captionRow = (
    <figcaption
      className={`flex items-baseline justify-between gap-6 border-t ${ruleClass} pt-3`}
    >
      <span className={`label ${tone === "dark" ? "text-paper/55" : ""}`}>
        {caption}
      </span>
      {note && (
        <span
          className={`label ${tone === "dark" ? "text-paper/30" : "text-ink-soft/60"}`}
        >
          {note}
        </span>
      )}
    </figcaption>
  );

  return (
    <Reveal as="figure" className={className} delay={delay}>
      <div className={`${ratio} w-full overflow-hidden`}>{children}</div>
      {bleed ? (
        <div className={`${containerClass} mt-3`}>{captionRow}</div>
      ) : (
        <div className="mt-3">{captionRow}</div>
      )}
    </Reveal>
  );
}
