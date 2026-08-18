/**
 * IndustrialVisual — PLACEHOLDER VISUAL COMPONENT
 * ================================================
 * ⚠️ 실제 현장 사진으로 교체 예정 (Replaceable placeholder).
 * 외부 이미지/스톡포토 URL을 일절 사용하지 않고, 순수 SVG/CSS로 그린
 * 추상적 산업 비주얼입니다. 공식 현장 사진 수령 시 이 컴포넌트만 교체하면 됩니다.
 *
 * variant:
 *  - "refinery"   정유 플랜트 실루엣 (증류탑 · 플레어 스택 · 탱크 · 파이프랙)
 *  - "switchgear" 배전반 패널 열 (큐비클 · 계기 · 인디케이터)
 *  - "blueprint"  도면 그리드 + 치수선
 *  - "pipes"      파이프 / 철골 구조
 *  - "hmi"        감시 화면 프레임 (단선도 목업)
 */

export type IndustrialVisualVariant =
  | "refinery"
  | "switchgear"
  | "blueprint"
  | "pipes"
  | "hmi";

interface Props {
  variant: IndustrialVisualVariant;
  className?: string;
  /** 오렌지 악센트 사용 여부 (절제해서 사용) */
  accent?: boolean;
}

const LINE = "#2A2F34";
const LINE_HI = "#3A4148";
const FG = "#8B9198";
const ORANGE = "#F26B1D";

export default function IndustrialVisual({
  variant,
  className = "",
  accent = true,
}: Props) {
  return (
    <div
      className={`relative ${className}`}
      aria-hidden="true"
      data-placeholder="industrial-visual"
      // 실제 현장 사진으로 교체 예정
    >
      {variant === "refinery" && <Refinery accent={accent} />}
      {variant === "switchgear" && <Switchgear accent={accent} />}
      {variant === "blueprint" && <Blueprint accent={accent} />}
      {variant === "pipes" && <Pipes accent={accent} />}
      {variant === "hmi" && <Hmi accent={accent} />}
    </div>
  );
}

/* ── 정유 플랜트 실루엣 ─────────────────────────────────── */
function Refinery({ accent }: { accent: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="iv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0C0E10" />
          <stop offset="60%" stopColor="#131719" />
          <stop offset="100%" stopColor="#1A1E22" />
        </linearGradient>
        <linearGradient id="iv-silo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#20262B" />
          <stop offset="100%" stopColor="#0F1214" />
        </linearGradient>
        <linearGradient id="iv-haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F26B1D" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#F26B1D" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1440" height="520" fill="url(#iv-sky)" />
      {accent && (
        <rect x="0" y="300" width="1440" height="220" fill="url(#iv-haze)" />
      )}

      {/* 원경 스카이라인 */}
      <g opacity="0.4" fill="#171B1F">
        <rect x="60" y="300" width="46" height="180" />
        <rect x="140" y="330" width="30" height="150" />
        <rect x="200" y="286" width="18" height="194" />
        <rect x="1180" y="316" width="40" height="164" />
        <rect x="1250" y="296" width="22" height="184" />
        <rect x="1300" y="340" width="60" height="140" />
      </g>

      {/* 증류탑 · 반응기 */}
      <g fill="url(#iv-silo)" stroke={LINE} strokeWidth="1">
        <rect x="300" y="180" width="54" height="300" />
        <rect x="386" y="238" width="38" height="242" />
        <rect x="470" y="150" width="66" height="330" />
        <rect x="580" y="256" width="34" height="224" />
        <rect x="880" y="206" width="58" height="274" />
        <rect x="972" y="268" width="30" height="212" />
        <rect x="1040" y="228" width="48" height="252" />
      </g>

      {/* 탑 플랫폼 링 */}
      <g stroke={LINE_HI} strokeWidth="1" opacity="0.85">
        {[210, 260, 310, 360, 410].map((y) => (
          <line key={`p1-${y}`} x1="292" y1={y} x2="362" y2={y} />
        ))}
        {[186, 240, 296, 352, 408].map((y) => (
          <line key={`p2-${y}`} x1="462" y1={y} x2="544" y2={y} />
        ))}
        {[240, 300, 360, 420].map((y) => (
          <line key={`p3-${y}`} x1="872" y1={y} x2="946" y2={y} />
        ))}
      </g>

      {/* 구형 저장탱크 */}
      <g fill="#161A1D" stroke={LINE} strokeWidth="1">
        <circle cx="700" cy="404" r="46" />
        <circle cx="800" cy="420" r="32" />
      </g>
      <g stroke={LINE} strokeWidth="1" opacity="0.7">
        <line x1="672" y1="440" x2="666" y2="480" />
        <line x1="728" y1="440" x2="734" y2="480" />
        <line x1="700" y1="450" x2="700" y2="480" />
        <line x1="782" y1="446" x2="778" y2="480" />
        <line x1="818" y1="446" x2="822" y2="480" />
        <ellipse cx="700" cy="404" rx="46" ry="12" fill="none" />
        <ellipse cx="800" cy="420" rx="32" ry="9" fill="none" />
      </g>

      {/* 플레어 스택 */}
      <g stroke={LINE} strokeWidth="1" fill="none">
        <line x1="1140" y1="480" x2="1140" y2="120" />
        <line x1="1152" y1="480" x2="1152" y2="120" />
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`fl-${i}`}
            x1="1140"
            y1={140 + i * 38}
            x2="1152"
            y2={160 + i * 38}
          />
        ))}
      </g>
      {accent && (
        <path
          d="M1146 118 C1138 100, 1156 96, 1150 78 C1164 92, 1160 112, 1146 118 Z"
          fill={ORANGE}
          opacity="0.75"
        />
      )}

      {/* 파이프랙 */}
      <g stroke={LINE} strokeWidth="1" opacity="0.9">
        <line x1="0" y1="452" x2="1440" y2="452" />
        <line x1="0" y1="462" x2="1440" y2="462" />
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={`col-${i}`}
            x1={20 + i * 58}
            y1="452"
            x2={20 + i * 58}
            y2="480"
          />
        ))}
      </g>

      {/* 지면 */}
      <rect x="0" y="480" width="1440" height="40" fill="#0A0C0D" />
      <line x1="0" y1="480" x2="1440" y2="480" stroke={LINE} strokeWidth="1" />
    </svg>
  );
}

/* ── 배전반 패널 열 ─────────────────────────────────────── */
function Switchgear({ accent }: { accent: boolean }) {
  const panels = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 640 380" className="h-full w-full">
      <defs>
        <linearGradient id="iv-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D2226" />
          <stop offset="100%" stopColor="#111417" />
        </linearGradient>
      </defs>
      <rect width="640" height="380" fill="#0C0E10" />

      {panels.map((i) => {
        const x = 30 + i * 116;
        return (
          <g key={`sg-${i}`}>
            <rect
              x={x}
              y="46"
              width="104"
              height="286"
              fill="url(#iv-panel)"
              stroke={LINE}
              strokeWidth="1"
            />
            {/* 상단 계기창 */}
            <rect
              x={x + 14}
              y="62"
              width="76"
              height="46"
              fill="#0A0C0E"
              stroke={LINE_HI}
              strokeWidth="1"
            />
            <line
              x1={x + 22}
              y1="84"
              x2={x + 82}
              y2="84"
              stroke={FG}
              strokeWidth="1"
              opacity="0.35"
            />
            <line
              x1={x + 22}
              y1="94"
              x2={x + 64}
              y2="94"
              stroke={FG}
              strokeWidth="1"
              opacity="0.2"
            />
            {/* 인디케이터 LED */}
            <circle
              cx={x + 24}
              cy="126"
              r="3.5"
              fill={accent && i === 2 ? ORANGE : "#39424A"}
            />
            <circle cx={x + 38} cy="126" r="3.5" fill="#39424A" />
            <circle cx={x + 52} cy="126" r="3.5" fill="#39424A" />
            {/* 차단기 유닛 */}
            {[150, 196, 242].map((y) => (
              <g key={`br-${i}-${y}`}>
                <rect
                  x={x + 14}
                  y={y}
                  width="76"
                  height="36"
                  fill="#15191C"
                  stroke={LINE}
                  strokeWidth="1"
                />
                <rect
                  x={x + 20}
                  y={y + 12}
                  width="18"
                  height="12"
                  fill="#0A0C0E"
                  stroke={LINE_HI}
                  strokeWidth="1"
                />
                <line
                  x1={x + 46}
                  y1={y + 18}
                  x2={x + 84}
                  y2={y + 18}
                  stroke={FG}
                  strokeWidth="1"
                  opacity="0.25"
                />
              </g>
            ))}
            {/* 하단 케이블 구획 */}
            <rect
              x={x + 14}
              y="288"
              width="76"
              height="30"
              fill="#0F1214"
              stroke={LINE}
              strokeWidth="1"
            />
            {/* 패널 번호 */}
            <text
              x={x + 52}
              y="40"
              textAnchor="middle"
              fill={FG}
              opacity="0.5"
              fontSize="9"
              fontFamily="IBM Plex Mono, monospace"
              letterSpacing="1.5"
            >
              {`P-0${i + 1}`}
            </text>
          </g>
        );
      })}

      {/* 바닥 라인 */}
      <line x1="16" y1="332" x2="624" y2="332" stroke={LINE} strokeWidth="1" />
      <line
        x1="16"
        y1="344"
        x2="624"
        y2="344"
        stroke={LINE}
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

/* ── 블루프린트 그리드 ──────────────────────────────────── */
function Blueprint({ accent }: { accent: boolean }) {
  return (
    <svg viewBox="0 0 600 400" className="h-full w-full">
      <defs>
        <pattern id="iv-bp" width="25" height="25" patternUnits="userSpaceOnUse">
          <path
            d="M25 0 L0 0 0 25"
            fill="none"
            stroke={LINE}
            strokeWidth="0.6"
            opacity="0.6"
          />
        </pattern>
      </defs>
      <rect width="600" height="400" fill="#0C0E10" />
      <rect width="600" height="400" fill="url(#iv-bp)" />

      {/* 도면 프레임 */}
      <rect
        x="40"
        y="34"
        width="520"
        height="332"
        fill="none"
        stroke={LINE_HI}
        strokeWidth="1"
      />

      {/* 평면 배치 */}
      <g fill="none" stroke={FG} strokeWidth="1" opacity="0.45">
        <rect x="90" y="94" width="150" height="96" />
        <rect x="270" y="94" width="96" height="96" />
        <rect x="396" y="94" width="118" height="180" />
        <rect x="90" y="220" width="276" height="54" />
        <circle cx="318" cy="142" r="26" />
      </g>

      {/* 결선 라인 */}
      <g stroke={accent ? ORANGE : FG} strokeWidth="1" opacity="0.8">
        <path d="M240 142 L270 142" />
        <path d="M366 142 L396 142" />
        <path d="M165 190 L165 220" />
        <path d="M455 274 L455 300 L165 300 L165 274" fill="none" />
      </g>

      {/* 치수선 */}
      <g stroke={FG} strokeWidth="0.8" opacity="0.35">
        <line x1="90" y1="322" x2="514" y2="322" />
        <line x1="90" y1="316" x2="90" y2="328" />
        <line x1="514" y1="316" x2="514" y2="328" />
        <line x1="546" y1="94" x2="546" y2="274" />
        <line x1="540" y1="94" x2="552" y2="94" />
        <line x1="540" y1="274" x2="552" y2="274" />
      </g>

      {/* 코너 마커 */}
      <g stroke={FG} strokeWidth="1" opacity="0.5">
        {[
          [40, 34],
          [560, 34],
          [40, 366],
          [560, 366],
        ].map(([cx, cy]) => (
          <g key={`cm-${cx}-${cy}`}>
            <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} />
            <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ── 파이프 / 철골 구조 ─────────────────────────────────── */
function Pipes({ accent }: { accent: boolean }) {
  return (
    <svg viewBox="0 0 600 300" className="h-full w-full">
      <rect width="600" height="300" fill="#0C0E10" />

      {/* 철골 트러스 */}
      <g stroke={LINE} strokeWidth="1" fill="none">
        <line x1="0" y1="80" x2="600" y2="80" />
        <line x1="0" y1="130" x2="600" y2="130" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`tr-${i}`}>
            <line x1={i * 50} y1="80" x2={(i + 1) * 50} y2="130" />
            <line x1={(i + 1) * 50} y1="80" x2={i * 50} y2="130" />
          </g>
        ))}
      </g>

      {/* 파이프 배열 */}
      <g fill="none" strokeWidth="6" strokeLinecap="square">
        <path d="M0 176 L420 176 L420 300" stroke="#1B2024" />
        <path d="M0 196 L392 196 L392 300" stroke="#171B1E" />
        <path
          d="M0 216 L364 216 L364 300"
          stroke={accent ? ORANGE : "#141719"}
          opacity={accent ? 0.55 : 1}
        />
        <path d="M0 236 L336 236 L336 300" stroke="#141719" />
      </g>

      {/* 플랜지 */}
      <g stroke={LINE_HI} strokeWidth="1">
        {[176, 196, 216, 236].map((y, i) => (
          <line
            key={`fl-${y}`}
            x1={120 + i * 22}
            y1={y - 7}
            x2={120 + i * 22}
            y2={y + 7}
          />
        ))}
        {[176, 196, 216, 236].map((y, i) => (
          <line
            key={`fl2-${y}`}
            x1={260 + i * 18}
            y1={y - 7}
            x2={260 + i * 18}
            y2={y + 7}
          />
        ))}
      </g>

      {/* 지지 컬럼 */}
      <g stroke={LINE} strokeWidth="1">
        {[60, 180, 300].map((x) => (
          <line key={`sc-${x}`} x1={x} y1="130" x2={x} y2="300" />
        ))}
      </g>
    </svg>
  );
}

/* ── HMI 감시 화면 프레임 ───────────────────────────────── */
function Hmi({ accent }: { accent: boolean }) {
  return (
    <svg viewBox="0 0 560 340" className="h-full w-full">
      <rect width="560" height="340" fill="#0C0E10" />
      <rect
        x="16"
        y="16"
        width="528"
        height="308"
        fill="#101315"
        stroke={LINE}
        strokeWidth="1"
      />
      {/* 타이틀 바 */}
      <line x1="16" y1="48" x2="544" y2="48" stroke={LINE} strokeWidth="1" />
      <text
        x="32"
        y="38"
        fill={FG}
        fontSize="10"
        fontFamily="IBM Plex Mono, monospace"
        letterSpacing="2"
      >
        POWER MONITORING · DEMO VIEW
      </text>
      <circle cx="520" cy="33" r="4" fill={accent ? ORANGE : FG} opacity="0.8" />

      {/* 단선도 목업 */}
      <g stroke={FG} strokeWidth="1" opacity="0.5" fill="none">
        <line x1="120" y1="76" x2="120" y2="290" />
        <rect x="102" y="100" width="36" height="24" />
        <rect x="102" y="160" width="36" height="24" />
        <rect x="102" y="226" width="36" height="24" />
        <line x1="138" y1="112" x2="220" y2="112" />
        <line x1="138" y1="172" x2="220" y2="172" />
        <line x1="138" y1="238" x2="220" y2="238" />
      </g>

      {/* 데이터 타일 */}
      <g>
        {[
          [240, 76],
          [372, 76],
          [240, 154],
          [372, 154],
        ].map(([x, y], i) => (
          <g key={`tile-${i}`}>
            <rect
              x={x}
              y={y}
              width="116"
              height="62"
              fill="#0C0F11"
              stroke={LINE}
              strokeWidth="1"
            />
            <line
              x1={x + 12}
              y1={y + 22}
              x2={x + 56}
              y2={y + 22}
              stroke={FG}
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1={x + 12}
              y1={y + 42}
              x2={x + 88}
              y2={y + 42}
              stroke={accent && i === 0 ? ORANGE : FG}
              strokeWidth="2"
              opacity={accent && i === 0 ? 0.8 : 0.45}
            />
          </g>
        ))}
      </g>

      {/* 트렌드 차트 */}
      <g>
        <rect
          x="240"
          y="232"
          width="248"
          height="58"
          fill="#0C0F11"
          stroke={LINE}
          strokeWidth="1"
        />
        <polyline
          points="248,278 274,264 300,270 326,250 352,258 378,242 404,252 430,238 456,246 482,240"
          fill="none"
          stroke={accent ? ORANGE : FG}
          strokeWidth="1.5"
          opacity="0.75"
        />
      </g>
    </svg>
  );
}
