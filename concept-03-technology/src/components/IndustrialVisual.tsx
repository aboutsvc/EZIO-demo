/**
 * IndustrialVisual — 순수 SVG/CSS 추상 산업 비주얼.
 * 외부 이미지/스톡포토 URL 사용 금지.
 * ※ 실제 현장 사진으로 교체 예정 (placeholder 컴포넌트)
 */

export type VisualVariant = "switchgear" | "plant" | "network" | "hmi";

interface Props {
  variant: VisualVariant;
  className?: string;
  title?: string;
}

export default function IndustrialVisual({ variant, className = "", title }: Props) {
  const label = title ?? VARIANT_LABEL[variant];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {variant === "switchgear" && <Switchgear />}
      {variant === "plant" && <Plant />}
      {variant === "network" && <NetworkMesh />}
      {variant === "hmi" && <HmiScreen />}
      <span className="sr-only">{label}</span>
    </div>
  );
}

const VARIANT_LABEL: Record<VisualVariant, string> = {
  switchgear: "배전반 패널 추상 일러스트 (데모 비주얼)",
  plant: "산업 플랜트 실루엣 추상 일러스트 (데모 비주얼)",
  network: "산업용 네트워크 노드 추상 일러스트 (데모 비주얼)",
  hmi: "HMI 감시 화면 추상 일러스트 (데모 비주얼)",
};

/* ── 배전반 패널 열 ── */
function Switchgear() {
  const cells = [0, 1, 2, 3, 4];
  return (
    <svg
      viewBox="0 0 480 300"
      className="h-full w-full"
      role="presentation"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sg-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16233d" />
          <stop offset="100%" stopColor="#0c1524" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="#0a1220" />
      {cells.map((i) => {
        const x = 26 + i * 86;
        return (
          <g key={i}>
            <rect x={x} y={48} width={74} height={210} fill="url(#sg-face)" stroke="#1e2b45" />
            <rect x={x + 10} y={62} width={54} height={34} fill="#0a1220" stroke="#243352" />
            <line x1={x + 16} y1={72} x2={x + 44} y2={72} stroke="#38bdf8" strokeWidth="1.5" opacity="0.55" />
            <line x1={x + 16} y1={80} x2={x + 52} y2={80} stroke="#2dd4bf" strokeWidth="1" opacity="0.35" />
            <line x1={x + 16} y1={88} x2={x + 36} y2={88} stroke="#7c8ca8" strokeWidth="1" opacity="0.3" />
            <circle cx={x + 20} cy={112} r="3" fill={i === 2 ? "#f59e0b" : "#2dd4bf"} opacity="0.85" />
            <circle cx={x + 32} cy={112} r="3" fill="#38bdf8" opacity="0.45" />
            <circle cx={x + 44} cy={112} r="3" fill="#4d5b75" opacity="0.5" />
            <rect x={x + 10} y={128} width={54} height={62} fill="none" stroke="#1e2b45" />
            <line x1={x + 10} y1={206} x2={x + 64} y2={206} stroke="#1e2b45" />
            <rect x={x + 22} y={216} width={30} height={8} rx="1" fill="#16233d" stroke="#243352" />
            <line x1={x + 10} y1={238} x2={x + 64} y2={238} stroke="#1e2b45" />
          </g>
        );
      })}
      {/* busbar */}
      <line x1="18" y1="38" x2="462" y2="38" stroke="#243352" strokeWidth="3" />
      <line
        x1="18"
        y1="38"
        x2="462"
        y2="38"
        stroke="#38bdf8"
        strokeWidth="1.5"
        opacity="0.5"
        className="anim-flow"
      />
      <line x1="18" y1="272" x2="462" y2="272" stroke="#1e2b45" />
    </svg>
  );
}

/* ── 정유 플랜트 실루엣 ── */
function Plant() {
  return (
    <svg
      viewBox="0 0 480 240"
      className="h-full w-full"
      role="presentation"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1830" />
          <stop offset="100%" stopColor="#0a1220" />
        </linearGradient>
      </defs>
      <rect width="480" height="240" fill="url(#pl-sky)" />
      <g stroke="#243352" fill="none" strokeWidth="1.2">
        {/* towers */}
        <rect x="40" y="80" width="26" height="120" />
        <rect x="46" y="62" width="14" height="18" />
        <rect x="96" y="110" width="34" height="90" />
        <rect x="150" y="52" width="20" height="148" />
        <rect x="196" y="128" width="46" height="72" />
        <rect x="264" y="90" width="24" height="110" />
        <rect x="308" y="140" width="58" height="60" />
        <rect x="392" y="70" width="22" height="130" />
        {/* stacks */}
        <line x1="154" y1="52" x2="154" y2="26" />
        <line x1="166" y1="52" x2="166" y2="34" />
        <line x1="400" y1="70" x2="400" y2="30" />
        {/* pipe racks */}
        <line x1="24" y1="200" x2="456" y2="200" />
        <line x1="24" y1="212" x2="456" y2="212" />
        <line x1="24" y1="188" x2="456" y2="188" />
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={30 + i * 32} y1="188" x2={30 + i * 32} y2="216" />
        ))}
        {/* spheres */}
        <circle cx="342" cy="118" r="16" />
        <circle cx="378" cy="126" r="10" />
      </g>
      {/* live line */}
      <line
        x1="24"
        y1="194"
        x2="456"
        y2="194"
        stroke="#2dd4bf"
        strokeWidth="1.2"
        opacity="0.4"
        className="anim-flow"
      />
      <g fill="#38bdf8" opacity="0.55">
        <circle cx="53" cy="70" r="1.6" className="anim-led" />
        <circle cx="160" cy="30" r="1.6" className="anim-led" style={{ animationDelay: "1.1s" }} />
        <circle cx="400" cy="34" r="1.6" className="anim-led" style={{ animationDelay: "2.2s" }} />
      </g>
    </svg>
  );
}

/* ── 노드 메시 ── */
function NetworkMesh() {
  const nodes = [
    [60, 60], [180, 40], [300, 76], [420, 52],
    [40, 160], [150, 140], [268, 168], [400, 148],
    [96, 244], [220, 232], [340, 250], [440, 220],
  ];
  const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7],
    [4, 5], [5, 6], [6, 7], [4, 8], [5, 9], [6, 10], [7, 11],
    [8, 9], [9, 10], [10, 11],
  ];
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="presentation">
      <rect width="480" height="300" fill="transparent" />
      <g stroke="#1e2b45" strokeWidth="1">
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      <g stroke="#38bdf8" strokeWidth="1" opacity="0.32">
        {links.slice(0, 8).map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            className="anim-flow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3" fill={i % 5 === 0 ? "#2dd4bf" : "#4d5b75"} />
          {i % 5 === 0 && (
            <circle
              cx={x}
              cy={y}
              r="4"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="1"
              className="anim-ping"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          )}
        </g>
      ))}
    </svg>
  );
}

/* ── HMI 감시 화면 ── */
function HmiScreen() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="presentation">
      <rect width="480" height="300" fill="#0a1220" />
      <rect x="12" y="12" width="456" height="276" fill="#0e1830" stroke="#1e2b45" />
      <line x1="12" y1="40" x2="468" y2="40" stroke="#1e2b45" />
      <circle cx="26" cy="26" r="3" fill="#2dd4bf" />
      <rect x="38" y="22" width="60" height="8" rx="1" fill="#243352" />
      <rect x="392" y="22" width="62" height="8" rx="1" fill="#1e2b45" />
      {/* single line */}
      <g stroke="#243352" strokeWidth="1.4" fill="none">
        <line x1="70" y1="60" x2="70" y2="250" />
        <rect x="52" y="86" width="36" height="20" />
        <rect x="52" y="140" width="36" height="20" />
        <rect x="52" y="196" width="36" height="20" />
        <line x1="88" y1="96" x2="180" y2="96" />
        <line x1="88" y1="150" x2="180" y2="150" />
        <line x1="88" y1="206" x2="180" y2="206" />
      </g>
      <line x1="70" y1="60" x2="70" y2="250" stroke="#38bdf8" strokeWidth="1.2" opacity="0.45" className="anim-flow" />
      {/* trend + cards */}
      <rect x="196" y="60" width="258" height="96" fill="#0a1220" stroke="#1e2b45" />
      <polyline
        points="204,138 224,124 244,130 264,108 284,116 304,92 324,104 344,86 364,98 384,78 404,88 424,72 444,80"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="1.4"
        opacity="0.75"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={196 + i * 88} y={172} width="80" height="52" fill="#0a1220" stroke="#1e2b45" />
          <rect x={206 + i * 88} y={182} width="34" height="6" rx="1" fill="#243352" />
          <rect x={206 + i * 88} y={196} width="52" height="10" rx="1" fill="#1e2b45" />
          <circle cx={262 + i * 88} cy={186} r="2.5" fill={i === 2 ? "#f59e0b" : "#2dd4bf"} />
        </g>
      ))}
      <rect x="196" y="238" width="258" height="34" fill="#0a1220" stroke="#1e2b45" />
      <circle cx="210" cy="255" r="2.5" fill="#f59e0b" className="anim-led" />
      <rect x="222" y="251" width="120" height="7" rx="1" fill="#243352" />
    </svg>
  );
}
