/** 카테고리/솔루션용 단순 라인 아이콘 — 외부 아이콘 라이브러리 없이 인라인 SVG로만 구성 */
import type { ReactElement } from "react";

type IconKey =
  | "power-distribution"
  | "protection-measurement"
  | "monitoring"
  | "monitoring-control"
  | "automation"
  | "engineering";

const paths: Record<IconKey, ReactElement> = {
  // 배전반 큐비클
  "power-distribution": (
    <>
      <rect x="5" y="6" width="12" height="26" />
      <rect x="21" y="6" width="12" height="26" />
      <path d="M8 11h6M8 15h6M24 11h6M24 15h6" />
      <circle cx="11" cy="24" r="2.5" />
      <circle cx="27" cy="24" r="2.5" />
    </>
  ),
  // 보호계전기 + 파형
  "protection-measurement": (
    <>
      <rect x="5" y="8" width="28" height="22" />
      <path d="M9 22c2.5 0 3-8 5.5-8s3 8 5.5 8 3-8 5.5-8 3 8 5.5 8" />
      <path d="M9 13h6" />
    </>
  ),
  // 모니터 + 그래프
  monitoring: (
    <>
      <rect x="4" y="7" width="30" height="20" />
      <path d="M15 31h8M19 27v4" />
      <path d="M9 21l5-6 4 4 5-7 5 5" />
    </>
  ),
  "monitoring-control": (
    <>
      <rect x="4" y="7" width="30" height="20" />
      <path d="M15 31h8M19 27v4" />
      <path d="M9 21l5-6 4 4 5-7 5 5" />
    </>
  ),
  // PLC / 네트워크 노드
  automation: (
    <>
      <rect x="13" y="4" width="12" height="9" />
      <rect x="3" y="25" width="11" height="9" />
      <rect x="24" y="25" width="11" height="9" />
      <path d="M19 13v7M19 20H8.5v5M19 20h10.5v5" />
    </>
  ),
  // 엔지니어링 — 도면/컴퍼스
  engineering: (
    <>
      <path d="M6 6h26v26H6z" />
      <path d="M6 13h26M13 13v19" />
      <path d="M19 20l5 6M24 20l-5 6" />
    </>
  ),
};

export default function CategoryIcon({
  name,
  className = "h-9 w-9",
}: {
  name: string;
  className?: string;
}) {
  const key = (name in paths ? name : "power-distribution") as IconKey;
  return (
    <svg
      viewBox="0 0 38 38"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {paths[key]}
    </svg>
  );
}
