/** 사업분야 아이콘 — content.ts 의 solution id 별 단순 라인 아이콘 (외부 아이콘 라이브러리 미사용) */
interface IconProps {
  id: string;
  className?: string;
}

const COMMON = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function SolutionIcon({ id, className = "h-8 w-8" }: IconProps) {
  switch (id) {
    // 전력 배전 — 배전반 큐비클
    case "power-distribution":
      return (
        <svg {...COMMON} className={className}>
          <rect x="5" y="7" width="9" height="18" />
          <rect x="18" y="7" width="9" height="18" />
          <path d="M7.5 11h4M20.5 11h4M7.5 15h4M20.5 15h4" />
          <path d="M9.5 21v2M22.5 21v2" />
        </svg>
      );
    // 보호 · 계측 — 방패 + 게이지 침
    case "protection-measurement":
      return (
        <svg {...COMMON} className={className}>
          <path d="M16 4l9 3v8c0 6-4 10-9 12-5-2-9-6-9-12V7z" />
          <path d="M11.5 17a4.5 4.5 0 0 1 9 0" />
          <path d="M16 17l3-3" />
        </svg>
      );
    // 감시 · 제어 — 모니터 + 트렌드
    case "monitoring-control":
      return (
        <svg {...COMMON} className={className}>
          <rect x="4" y="6" width="24" height="15" />
          <path d="M12 25h8M16 21v4" />
          <path d="M8 16l4-4 3 3 4-6 4 5" />
        </svg>
      );
    // 자동화 — PLC + 신호
    case "automation":
      return (
        <svg {...COMMON} className={className}>
          <rect x="4" y="10" width="10" height="12" />
          <rect x="19" y="10" width="9" height="12" />
          <path d="M14 16h5" />
          <path d="M7 14h4M7 18h4M22 14h3M22 18h3" />
        </svg>
      );
    // 엔지니어링 · 통합 — 도면 + 컴퍼스
    case "engineering":
      return (
        <svg {...COMMON} className={className}>
          <path d="M6 5h20v22H6z" />
          <path d="M6 11h20M12 11v16" />
          <path d="m17 24 3-8 3 8" />
          <path d="M18.2 21h3.6" />
        </svg>
      );
    default:
      return (
        <svg {...COMMON} className={className}>
          <rect x="6" y="6" width="20" height="20" />
        </svg>
      );
  }
}

export default SolutionIcon;
