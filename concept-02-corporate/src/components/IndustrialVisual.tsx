import { useId } from "react";

/**
 * IndustrialVisual — 산업 비주얼 placeholder 컴포넌트
 * ==================================================
 * ⚠️ 외부 이미지 / 스톡포토 URL 사용 금지. 전부 순수 SVG + CSS 그라디언트로 구성한 추상 일러스트.
 * ⚠️ 실제 현장 사진 수령 시 이 컴포넌트를 <img>/<picture>로 교체할 것 (레이아웃 유지용 placeholder).
 *
 * variant:
 *   - "switchgear"  배전반 라인업 (Hero 우측 메인 비주얼)
 *   - "plant"       정유·석유화학 플랜트 스카이라인 실루엣
 *   - "network"     전력 네트워크 / 감시 토폴로지 추상 다이어그램
 *   - "blueprint"   엔지니어링 블루프린트 그리드 패턴
 */

export type IndustrialVisualVariant = "switchgear" | "plant" | "network" | "blueprint";

interface Props {
  variant: IndustrialVisualVariant;
  className?: string;
}

export default function IndustrialVisual({ variant, className = "" }: Props) {
  switch (variant) {
    case "plant":
      return <PlantSkyline className={className} />;
    case "network":
      return <NetworkTopology className={className} />;
    case "blueprint":
      return <BlueprintGrid className={className} />;
    case "switchgear":
    default:
      return <SwitchgearLineup className={className} />;
  }
}

/* ──────────────────────────────────────────────
 * 배전반 라인업 — 밝은 톤의 정면 뷰
 * ────────────────────────────────────────────── */
function SwitchgearLineup({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const cubicles = [0, 1, 2, 3, 4];

  return (
    <svg
      viewBox="0 0 640 480"
      role="img"
      aria-label="Switchgear lineup illustration"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F2F6FC" />
          <stop offset="100%" stopColor="#DFE9F8" />
        </linearGradient>
        <linearGradient id={`${uid}-panel`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F7F9FC" />
          <stop offset="100%" stopColor="#E6ECF4" />
        </linearGradient>
        <linearGradient id={`${uid}-plinth`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16274A" />
          <stop offset="100%" stopColor="#0E1B33" />
        </linearGradient>
        <linearGradient id={`${uid}-screen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0E1B33" />
          <stop offset="100%" stopColor="#16274A" />
        </linearGradient>
        <pattern id={`${uid}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#0A3D91" strokeOpacity="0.07" strokeWidth="1" />
        </pattern>
      </defs>

      {/* 배경 */}
      <rect width="640" height="480" fill={`url(#${uid}-bg)`} />
      <rect width="640" height="480" fill={`url(#${uid}-grid)`} />

      {/* 후면 벽 라인 */}
      <path d="M0 300H640" stroke="#0A3D91" strokeOpacity="0.14" strokeWidth="1" />
      <path d="M0 62H640" stroke="#0A3D91" strokeOpacity="0.1" strokeWidth="1" />

      {/* 상부 케이블 트레이 / 부스덕트 */}
      <g>
        <rect x="46" y="62" width="548" height="18" fill="#DCE5F3" stroke="#0A3D91" strokeOpacity="0.25" />
        <rect x="46" y="62" width="548" height="5" fill="#0A3D91" fillOpacity="0.5" />
        {Array.from({ length: 17 }).map((_, i) => (
          <path
            key={i}
            d={`M${62 + i * 32} 80V96`}
            stroke="#0A3D91"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          />
        ))}
      </g>

      {/* 배전반 큐비클 5면 */}
      {cubicles.map((i) => {
        const x = 58 + i * 106;
        return (
          <g key={i}>
            {/* 본체 */}
            <rect x={x} y="112" width="98" height="286" fill={`url(#${uid}-panel)`} stroke="#0A3D91" strokeOpacity="0.28" />
            {/* 상단 계측 구획 */}
            <rect x={x + 10} y="124" width="78" height="62" fill="#FFFFFF" stroke="#0A3D91" strokeOpacity="0.2" />
            <rect x={x + 18} y="132" width="46" height="30" rx="1.5" fill={`url(#${uid}-screen)`} />
            {/* 계측 트렌드 라인 */}
            <path
              d={`M${x + 22} 154 L${x + 30} 146 L${x + 38} 152 L${x + 46} 140 L${x + 54} 148 L${x + 60} 143`}
              fill="none"
              stroke="#7FB0FF"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* 인디케이터 LED */}
            <circle cx={x + 74} cy="139" r="3.4" fill="#0A3D91" />
            <circle cx={x + 74} cy="151" r="3.4" fill="#0A3D91" fillOpacity="0.35" />
            <circle cx={x + 74} cy="163" r="3.4" fill="#0A3D91" fillOpacity="0.18" />
            {/* 라벨 스트립 */}
            <rect x={x + 18} y="168" width="46" height="8" fill="#0A3D91" fillOpacity="0.12" />

            {/* 중단 도어 */}
            <rect x={x + 10} y="196" width="78" height="118" fill="#FFFFFF" stroke="#0A3D91" strokeOpacity="0.18" />
            <path d={`M${x + 10} 254H${x + 88}`} stroke="#0A3D91" strokeOpacity="0.12" />
            {/* 도어 핸들 */}
            <rect x={x + 76} y="240" width="6" height="28" rx="3" fill="#0A3D91" fillOpacity="0.55" />
            {/* 명판 */}
            <rect x={x + 20} y="206" width="34" height="7" fill="#0A3D91" fillOpacity="0.22" />
            <rect x={x + 20} y="218" width="22" height="5" fill="#0A3D91" fillOpacity="0.12" />

            {/* 하단 통풍 루버 */}
            <rect x={x + 10} y="324" width="78" height="62" fill="#FFFFFF" stroke="#0A3D91" strokeOpacity="0.18" />
            {Array.from({ length: 6 }).map((_, j) => (
              <path
                key={j}
                d={`M${x + 20} ${334 + j * 9}H${x + 78}`}
                stroke="#0A3D91"
                strokeOpacity="0.2"
                strokeWidth="2"
              />
            ))}

            {/* 큐비클 구분 라인 */}
            <path d={`M${x + 98} 112V398`} stroke="#0A3D91" strokeOpacity="0.3" />
          </g>
        );
      })}

      {/* 베이스 플린스 */}
      <rect x="46" y="398" width="548" height="26" fill={`url(#${uid}-plinth)`} />
      <rect x="46" y="398" width="548" height="3" fill="#0A3D91" />

      {/* 바닥 그림자 */}
      <ellipse cx="320" cy="434" rx="290" ry="10" fill="#0A3D91" fillOpacity="0.09" />

      {/* 치수 보조선 (엔지니어링 도면 뉘앙스) */}
      <g stroke="#0A3D91" strokeOpacity="0.3" strokeWidth="1">
        <path d="M46 452H594" />
        <path d="M46 446V458" />
        <path d="M594 446V458" />
      </g>
    </svg>
  );
}

/* ──────────────────────────────────────────────
 * 플랜트 스카이라인 — 정유·석유화학 실루엣
 * ────────────────────────────────────────────── */
function PlantSkyline({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 800 300"
      role="img"
      aria-label="Industrial plant skyline illustration"
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F7F9" />
          <stop offset="100%" stopColor="#E4EBF6" />
        </linearGradient>
        <linearGradient id={`${uid}-far`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B9C8DF" />
          <stop offset="100%" stopColor="#CBD7E8" />
        </linearGradient>
        <linearGradient id={`${uid}-near`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E4C9C" />
          <stop offset="100%" stopColor="#0A3D91" />
        </linearGradient>
      </defs>

      <rect width="800" height="300" fill={`url(#${uid}-sky)`} />

      {/* 원경 레이어 */}
      <g fill={`url(#${uid}-far)`}>
        <rect x="30" y="120" width="26" height="140" />
        <rect x="24" y="112" width="38" height="10" />
        <rect x="80" y="150" width="54" height="110" />
        <rect x="150" y="96" width="18" height="164" />
        <rect x="182" y="134" width="42" height="126" />
        <circle cx="264" cy="186" r="34" />
        <rect x="230" y="186" width="68" height="74" />
        <rect x="320" y="110" width="22" height="150" />
        <rect x="356" y="146" width="46" height="114" />
        <rect x="424" y="126" width="18" height="134" />
        <rect x="456" y="164" width="58" height="96" />
        <circle cx="566" cy="196" r="28" />
        <rect x="538" y="196" width="56" height="64" />
        <rect x="618" y="118" width="20" height="142" />
        <rect x="652" y="150" width="48" height="110" />
        <rect x="718" y="132" width="24" height="128" />
        <rect x="756" y="168" width="30" height="92" />
      </g>

      {/* 근경 레이어 */}
      <g fill={`url(#${uid}-near)`}>
        {/* 증류탑 */}
        <rect x="96" y="150" width="34" height="110" />
        <rect x="90" y="142" width="46" height="10" />
        <rect x="106" y="118" width="14" height="26" />
        {/* 스택 */}
        <path d="M196 260V128l14-6v138z" />
        <rect x="188" y="120" width="30" height="8" />
        {/* 반응기 */}
        <rect x="266" y="176" width="52" height="84" />
        <rect x="258" y="166" width="68" height="12" />
        {/* 구형 탱크 */}
        <circle cx="398" cy="216" r="30" />
        <rect x="384" y="240" width="6" height="20" />
        <rect x="406" y="240" width="6" height="20" />
        {/* 증류탑 2 */}
        <rect x="470" y="140" width="30" height="120" />
        <rect x="464" y="132" width="42" height="10" />
        {/* 냉각탑 */}
        <path d="M560 260l10-72h44l10 72z" />
        <rect x="556" y="180" width="72" height="10" />
        {/* 소형 유닛 */}
        <rect x="666" y="196" width="60" height="64" />
        <rect x="690" y="170" width="12" height="28" />
      </g>

      {/* 파이프 랙 */}
      <g stroke="#0A3D91" strokeOpacity="0.5" strokeWidth="3" fill="none">
        <path d="M60 236H760" />
        <path d="M60 246H760" />
      </g>
      <g stroke="#0A3D91" strokeOpacity="0.35" strokeWidth="4">
        {Array.from({ length: 15 }).map((_, i) => (
          <path key={i} d={`M${76 + i * 48} 236V260`} />
        ))}
      </g>

      {/* 탑 링 디테일 */}
      <g stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="2">
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M96 ${172 + i * 22}H130`} />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M470 ${164 + i * 22}H500`} />
        ))}
      </g>

      {/* 지면 */}
      <rect x="0" y="260" width="800" height="40" fill="#0E1B33" />
      <rect x="0" y="260" width="800" height="3" fill="#0A3D91" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
 * 네트워크 토폴로지 — 전력 감시 체계 추상화
 * ────────────────────────────────────────────── */
function NetworkTopology({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const nodes = [
    { x: 60, y: 150 },
    { x: 160, y: 90 },
    { x: 160, y: 210 },
    { x: 270, y: 150 },
    { x: 380, y: 84 },
    { x: 380, y: 216 },
    { x: 480, y: 150 },
  ];
  const links: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
  ];

  return (
    <svg
      viewBox="0 0 540 300"
      role="img"
      aria-label="Power monitoring network topology illustration"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`${uid}-line`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A3D91" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0A3D91" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {links.map(([a, b], i) => (
        <path
          key={i}
          d={`M${nodes[a].x} ${nodes[a].y}L${nodes[b].x} ${nodes[b].y}`}
          stroke={`url(#${uid}-line)`}
          strokeWidth="1.5"
        />
      ))}

      {nodes.map((n, i) => (
        <g key={i}>
          <rect
            x={n.x - 17}
            y={n.y - 17}
            width="34"
            height="34"
            fill="#FFFFFF"
            stroke="#0A3D91"
            strokeOpacity="0.45"
          />
          <rect x={n.x - 8} y={n.y - 8} width="16" height="16" fill="#0A3D91" fillOpacity={0.15 + i * 0.1} />
        </g>
      ))}
    </svg>
  );
}

/* ──────────────────────────────────────────────
 * 블루프린트 그리드 — 배경 장식용
 * ────────────────────────────────────────────── */
function BlueprintGrid({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className={className} preserveAspectRatio="none">
      <defs>
        <pattern id={`${uid}-fine`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#0A3D91" strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
        <pattern id={`${uid}-coarse`} width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M100 0H0V100" fill="none" stroke="#0A3D91" strokeOpacity="0.16" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#${uid}-fine)`} />
      <rect width="400" height="400" fill={`url(#${uid}-coarse)`} />
    </svg>
  );
}
