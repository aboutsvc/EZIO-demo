import { powerFlow } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

/**
 * Hero 데이터 플로우 — SWGR → IED → Gateway → SCADA → Dashboard
 * 노드 체인을 따라 데이터 패킷(짧은 dash)이 이동한다.
 * 순수 SVG + CSS (stroke-dashoffset) — prefers-reduced-motion 시 패킷 정지.
 */

// 다이어그램용 기술 약어 (번역 대상 아님 — 계장 도면 표기)
const ABBR: Record<string, string> = {
  "mv-swgr": "SWGR",
  meter: "IED",
  gateway: "GATEWAY",
  scada: "SCADA",
  dashboard: "DASHBOARD",
};

const CHAIN_IDS = ["mv-swgr", "meter", "gateway", "scada", "dashboard"];

function useChain() {
  return CHAIN_IDS.map((id) => {
    const node = powerFlow.find((n) => n.id === id)!;
    return { ...node, abbr: ABBR[id] };
  });
}

export default function DataFlowChain() {
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <HorizontalChain />
      </div>
      <div className="md:hidden">
        <VerticalChain />
      </div>
    </div>
  );
}

/* ── Desktop / Tablet : horizontal ── */
function HorizontalChain() {
  const { t } = useLanguage();
  const chain = useChain();
  const centers = [80, 300, 520, 740, 960];
  const boxHalf = 62;
  const cy = 116;
  const gap = centers[1] - centers[0] - boxHalf * 2; // 96

  return (
    <svg
      viewBox="0 0 1040 210"
      className="h-auto w-full"
      role="img"
      aria-label="SWGR — IED — Gateway — SCADA — Dashboard data flow diagram"
    >
      <defs>
        <linearGradient id="dfc-node" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16233d" />
          <stop offset="100%" stopColor="#0d1728" />
        </linearGradient>
      </defs>

      {/* connections */}
      {centers.slice(0, -1).map((cx, i) => {
        const x1 = cx + boxHalf;
        const x2 = centers[i + 1] - boxHalf;
        return (
          <g key={`link-${i}`}>
            <line x1={x1} y1={cy} x2={x2} y2={cy} stroke="#1e2b45" strokeWidth="1" />
            <line
              x1={x1}
              y1={cy}
              x2={x2}
              y2={cy}
              stroke="#38bdf8"
              strokeWidth="1"
              opacity="0.24"
              className="anim-flow"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
            <line
              x1={x1}
              y1={cy}
              x2={x2}
              y2={cy}
              stroke="#2dd4bf"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`6 ${gap}`}
              className="anim-packet"
              style={{
                ["--packet-travel" as string]: `-${gap + 6}`,
                ["--packet-dur" as string]: "2.8s",
                ["--packet-delay" as string]: `${i * 0.56}s`,
              }}
            />
            <path
              d={`M ${x2 - 6} ${cy - 4} L ${x2} ${cy} L ${x2 - 6} ${cy + 4}`}
              fill="none"
              stroke="#4d5b75"
              strokeWidth="1"
            />
          </g>
        );
      })}

      {/* nodes */}
      {chain.map((node, i) => {
        const cx = centers[i];
        return (
          <g key={node.id}>
            <rect
              x={cx - boxHalf}
              y={cy - 32}
              width={boxHalf * 2}
              height={64}
              rx="2"
              fill="url(#dfc-node)"
              stroke="#243352"
            />
            <line
              x1={cx - boxHalf}
              y1={cy - 32}
              x2={cx - boxHalf + 22}
              y2={cy - 32}
              stroke="#2dd4bf"
              strokeWidth="1.5"
            />
            <circle cx={cx - boxHalf + 12} cy={cy - 18} r="2.5" fill="#2dd4bf">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="3.4s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={cx}
              y={cy + 6}
              textAnchor="middle"
              fill="#dce4f2"
              fontFamily="'JetBrains Mono', ui-monospace, monospace"
              fontSize="13"
              letterSpacing="1.2"
            >
              {node.abbr}
            </text>
            <text
              x={cx}
              y={cy + 24}
              textAnchor="middle"
              fill="#4d5b75"
              fontFamily="'JetBrains Mono', ui-monospace, monospace"
              fontSize="8.5"
              letterSpacing="1"
            >
              {`NODE ${String(i + 1).padStart(2, "0")}`}
            </text>
            <text
              x={cx}
              y={cy + 56}
              textAnchor="middle"
              fill="#7c8ca8"
              fontSize="11.5"
            >
              {t(node.label)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Mobile : vertical ── */
function VerticalChain() {
  const { t } = useLanguage();
  const chain = useChain();
  const centers = [46, 158, 270, 382, 494];
  const boxH = 54;
  const gap = centers[1] - centers[0] - boxH; // 58
  const x = 24;
  const w = 272;

  return (
    <svg
      viewBox="0 0 320 560"
      className="mx-auto h-auto w-full max-w-[320px]"
      role="img"
      aria-label="SWGR — IED — Gateway — SCADA — Dashboard data flow diagram"
    >
      <defs>
        <linearGradient id="dfc-node-v" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#16233d" />
          <stop offset="100%" stopColor="#0d1728" />
        </linearGradient>
      </defs>

      {centers.slice(0, -1).map((cy, i) => {
        const y1 = cy + boxH / 2;
        const y2 = centers[i + 1] - boxH / 2;
        const cx = x + w / 2;
        return (
          <g key={`vlink-${i}`}>
            <line x1={cx} y1={y1} x2={cx} y2={y2} stroke="#1e2b45" strokeWidth="1" />
            <line
              x1={cx}
              y1={y1}
              x2={cx}
              y2={y2}
              stroke="#38bdf8"
              strokeWidth="1"
              opacity="0.24"
              className="anim-flow"
            />
            <line
              x1={cx}
              y1={y1}
              x2={cx}
              y2={y2}
              stroke="#2dd4bf"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`6 ${gap}`}
              className="anim-packet"
              style={{
                ["--packet-travel" as string]: `-${gap + 6}`,
                ["--packet-dur" as string]: "2.8s",
                ["--packet-delay" as string]: `${i * 0.56}s`,
              }}
            />
          </g>
        );
      })}

      {chain.map((node, i) => {
        const cy = centers[i];
        return (
          <g key={node.id}>
            <rect
              x={x}
              y={cy - boxH / 2}
              width={w}
              height={boxH}
              rx="2"
              fill="url(#dfc-node-v)"
              stroke="#243352"
            />
            <line x1={x} y1={cy - boxH / 2} x2={x} y2={cy + boxH / 2} stroke="#2dd4bf" strokeWidth="1.5" />
            <circle cx={x + 16} cy={cy - 12} r="2.5" fill="#2dd4bf">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="3.4s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={x + 28}
              y={cy - 7}
              fill="#dce4f2"
              fontFamily="'JetBrains Mono', ui-monospace, monospace"
              fontSize="12"
              letterSpacing="1.1"
            >
              {node.abbr}
            </text>
            <text x={x + 16} y={cy + 14} fill="#7c8ca8" fontSize="11">
              {t(node.label)}
            </text>
            <text
              x={x + w - 12}
              y={cy - 7}
              textAnchor="end"
              fill="#4d5b75"
              fontFamily="'JetBrains Mono', ui-monospace, monospace"
              fontSize="8.5"
              letterSpacing="1"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
