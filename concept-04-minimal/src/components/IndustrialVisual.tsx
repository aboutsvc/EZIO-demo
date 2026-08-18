/**
 * IndustrialVisual — 추상 산업 비주얼 (순수 SVG, 외부 이미지 사용 없음)
 * ※ 실제 현장 사진으로 교체 예정 — 현재는 데모용 라인 드로잉.
 *
 * CONCEPT 04 규칙: 비주얼은 최소. 흑백(단색) 라인만 사용하며,
 * 전체 사이트에서 2개 이하로만 등장시킨다.
 */

export type IndustrialVisualVariant = "switchgear" | "refinery";

interface Props {
  variant?: IndustrialVisualVariant;
  className?: string;
}

export default function IndustrialVisual({
  variant = "switchgear",
  className = "",
}: Props) {
  return (
    <svg
      viewBox="0 0 640 360"
      className={`h-auto w-full ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      vectorEffect="non-scaling-stroke"
      role="img"
      aria-label={
        variant === "refinery"
          ? "Abstract line drawing of a refinery plant"
          : "Abstract line drawing of a switchgear lineup"
      }
    >
      {variant === "switchgear" ? <Switchgear /> : <Refinery />}
    </svg>
  );
}

/* 배전반 라인업 — 얇은 선으로만 구성한 단면 */
function Switchgear() {
  const panels = [0, 1, 2, 3, 4, 5];
  const x0 = 60;
  const w = 84;
  return (
    <g>
      {/* 상부 부스바 */}
      <line x1="24" y1="72" x2="616" y2="72" />
      <line x1="24" y1="76" x2="616" y2="76" opacity="0.4" />
      {panels.map((i) => {
        const x = x0 + i * w;
        return (
          <g key={i}>
            {/* 부스바 드롭 */}
            <line x1={x + w / 2} y1="76" x2={x + w / 2} y2="104" opacity="0.55" />
            {/* 판넬 본체 */}
            <rect x={x} y="104" width={w} height="192" />
            {/* 계기 창 */}
            <rect x={x + 16} y="122" width={w - 32} height="34" opacity="0.75" />
            <line
              x1={x + 22}
              y1="139"
              x2={x + w - 22}
              y2="139"
              opacity="0.35"
            />
            {/* 구획선 */}
            <line x1={x} y1="180" x2={x + w} y2="180" opacity="0.5" />
            <line x1={x} y1="240" x2={x + w} y2="240" opacity="0.5" />
            {/* 표시등 / 핸들 */}
            <circle cx={x + 24} cy="206" r="5" opacity="0.7" />
            <circle cx={x + 42} cy="206" r="5" opacity="0.35" />
            <line
              x1={x + 20}
              y1="268"
              x2={x + w - 20}
              y2="268"
              opacity="0.55"
            />
          </g>
        );
      })}
      {/* 베이스 채널 + 접지선 */}
      <line x1="52" y1="296" x2="588" y2="296" />
      <line x1="24" y1="312" x2="616" y2="312" opacity="0.35" />
      <line x1="320" y1="296" x2="320" y2="312" opacity="0.35" />
    </g>
  );
}

/* 정유 플랜트 실루엣 — 증류탑 · 파이프랙 */
function Refinery() {
  return (
    <g>
      {/* 지면 */}
      <line x1="16" y1="312" x2="624" y2="312" />
      {/* 증류탑 1 */}
      <path d="M108 312V132a34 34 0 0 1 68 0v180" />
      {[168, 200, 232, 264].map((y) => (
        <line key={y} x1="108" y1={y} x2="176" y2={y} opacity="0.4" />
      ))}
      <line x1="142" y1="98" x2="142" y2="66" opacity="0.6" />
      {/* 증류탑 2 */}
      <path d="M232 312V180a24 24 0 0 1 48 0v132" />
      {[214, 246, 278].map((y) => (
        <line key={y} x1="232" y1={y} x2="280" y2={y} opacity="0.4" />
      ))}
      {/* 구형 탱크 */}
      <circle cx="356" cy="268" r="40" />
      <line x1="356" y1="308" x2="356" y2="312" opacity="0.6" />
      <line x1="330" y1="298" x2="330" y2="312" opacity="0.4" />
      <line x1="382" y1="298" x2="382" y2="312" opacity="0.4" />
      {/* 스택 */}
      <path d="M452 312V96l16-8v224" opacity="0.85" />
      <line x1="452" y1="150" x2="468" y2="150" opacity="0.4" />
      <line x1="452" y1="210" x2="468" y2="210" opacity="0.4" />
      {/* 파이프랙 */}
      <line x1="500" y1="230" x2="624" y2="230" opacity="0.7" />
      <line x1="500" y1="244" x2="624" y2="244" opacity="0.45" />
      {[512, 552, 592].map((x) => (
        <line key={x} x1={x} y1="230" x2={x} y2="312" opacity="0.45" />
      ))}
      {/* 상부 파이프 브리지 */}
      <line x1="176" y1="150" x2="232" y2="150" opacity="0.45" />
      <line x1="280" y1="196" x2="316" y2="196" opacity="0.45" />
      <line x1="316" y1="196" x2="316" y2="228" opacity="0.45" />
    </g>
  );
}
