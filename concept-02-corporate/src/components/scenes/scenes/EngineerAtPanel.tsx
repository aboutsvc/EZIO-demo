// EGO shared scene artwork — 실제 현장 사진 수령 시 교체 가능한 일러스트레이션
import { useId } from 'react';

type Tone = 'dark' | 'light' | 'navy' | 'warm';

type Role =
  | 'bg0' | 'bg1' | 'panel' | 'panelHi' | 'bezel'
  | 'screen' | 'ink' | 'ok' | 'accent'
  | 'figure' | 'rimWarm' | 'rimCool' | 'floor' | 'hi';

const PALETTE: Record<Tone, Record<Role, string>> = {
  dark: {
    bg0: '#0A0C0E', bg1: '#171C21', panel: '#242B32', panelHi: '#39424A', bezel: '#0C0F12',
    screen: '#12202A', ink: '#A9C0CE', ok: '#4ADE80', accent: '#F26B1D',
    figure: '#05070A', rimWarm: '#F26B1D', rimCool: '#7FA9C4', floor: '#101418', hi: '#E8EAED',
  },
  light: {
    bg0: '#E2E9F0', bg1: '#F5F7F9', panel: '#D3DDE6', panelHi: '#EFF4F8', bezel: '#A9B7C3',
    screen: '#FFFFFF', ink: '#0A3D91', ok: '#1E9E6A', accent: '#0A3D91',
    figure: '#2C3B49', rimWarm: '#FFFFFF', rimCool: '#8FB4DA', floor: '#CBD5DE', hi: '#FFFFFF',
  },
  navy: {
    bg0: '#04070D', bg1: '#0B1524', panel: '#16283C', panelHi: '#274461', bezel: '#050A11',
    screen: '#081826', ink: '#7DD3FC', ok: '#2DD4BF', accent: '#38BDF8',
    figure: '#01040A', rimWarm: '#38BDF8', rimCool: '#2DD4BF', floor: '#08121D', hi: '#CFEBFB',
  },
  warm: {
    bg0: '#E4DCD0', bg1: '#F7F3EC', panel: '#D6CDC1', panelHi: '#F0EAE1', bezel: '#9A9187',
    screen: '#FAF8F5', ink: '#2B2622', ok: '#5A6B4E', accent: '#241F1B',
    figure: '#141414', rimWarm: '#FFFFFF', rimCool: '#CDBFA8', floor: '#CFC6BA', hi: '#FFFFFF',
  },
};

function rand(seed: number) {
  let s = seed;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 엔지니어 실루엣 (뒷모습·안전모) — 얼굴 없음 */
function FigureShapes() {
  return (
    <>
      {/* 안전모 (돔 + 챙 + 리지) */}
      <path d="M-39 68 C-39 26 -22 8 0 8 C22 8 39 26 39 68 Z" />
      <path d="M-48 66 C-48 59 -28 55 0 55 C28 55 48 59 48 66 C48 72 28 75 0 75 C-28 75 -48 72 -48 66 Z" />
      {/* 머리 / 목 */}
      <path d="M-27 70 C-27 100 -20 112 0 112 C20 112 27 100 27 70 Z" />
      <path d="M-13 104 L13 104 L15 132 L-15 132 Z" />
      {/* 몸통 (어깨→허리→힙) */}
      <path d="M-32 130 C-48 134 -58 146 -61 164 C-64 190 -58 224 -52 258 C-48 284 -47 318 -49 350 L-49 372 L49 372 L49 350 C47 318 48 284 52 258 C58 224 64 190 61 164 C58 146 48 134 32 130 Z" />
      {/* 다리 */}
      <path d="M-49 372 C-48 412 -45 470 -43 522 C-42 552 -41 574 -41 586 L-11 586 C-11 570 -9 540 -8 512 C-7 470 -6 412 -5 372 Z" />
      <path d="M49 372 C48 412 45 470 43 522 C42 552 41 574 41 586 L11 586 C11 570 9 540 8 512 C7 470 6 412 5 372 Z" />
      {/* 안전화 */}
      <path d="M-43 578 L-9 578 L-7 600 C-7 606 -12 608 -20 608 L-44 608 C-49 608 -50 604 -49 598 Z" />
      <path d="M43 578 L9 578 L7 600 C7 606 12 608 20 608 L44 608 C49 608 50 604 49 598 Z" />
      {/* 좌완 — 패널 쪽으로 뻗음 */}
      <path d="M-56 148 C-84 148 -108 152 -128 148 C-152 143 -176 128 -196 112 L-207 129 C-186 148 -158 166 -130 172 C-106 177 -80 176 -58 173 Z" />
      <ellipse cx="-206" cy="120" rx="13" ry="10.5" transform="rotate(-38 -206 120)" />
      {/* 우완 — 태블릿을 든 채 내림 */}
      <path d="M56 148 C70 182 78 220 78 260 C78 294 72 318 64 338 L44 330 C52 312 58 290 58 260 C58 224 50 188 38 156 Z" />
      <ellipse cx="54" cy="342" rx="14" ry="11" />
    </>
  );
}

export function EngineerAtPanel({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const raw = useId();
  const u = raw.replace(/[^a-zA-Z0-9]/g, '');
  const c = PALETTE[tone];
  const id = (n: string) => `${u}-${n}`;
  const url = (n: string) => `url(#${u}-${n})`;
  const soft = tone === 'light' || tone === 'warm';
  const R = rand(31415);

  return (
    <svg
      viewBox="0 0 1200 800"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id('room')} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor={c.bg0} />
          <stop offset="46%" stopColor={c.bg1} />
          <stop offset="100%" stopColor={c.bg0} />
        </linearGradient>
        <linearGradient id={id('panelg')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.panelHi} />
          <stop offset="26%" stopColor={c.panel} />
          <stop offset="100%" stopColor={c.bg0} />
        </linearGradient>
        <linearGradient id={id('floorg')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.floor} />
          <stop offset="100%" stopColor={c.bg0} />
        </linearGradient>
        <radialGradient id={id('spill')} cx="0.32" cy="0.42" r="0.5">
          <stop offset="0%" stopColor={c.accent} stopOpacity={soft ? 0.16 : 0.3} />
          <stop offset="100%" stopColor={c.accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('spill2')} cx="0.3" cy="0.4" r="0.55">
          <stop offset="0%" stopColor={c.rimCool} stopOpacity={soft ? 0.18 : 0.34} />
          <stop offset="100%" stopColor={c.rimCool} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('refl')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.rimCool} stopOpacity={soft ? 0.2 : 0.26} />
          <stop offset="100%" stopColor={c.rimCool} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id('figshade')} gradientUnits="userSpaceOnUse" x1="-210" y1="120" x2="86" y2="330">
          <stop offset="0%" stopColor={c.rimCool} stopOpacity={soft ? 0.26 : 0.34} />
          <stop offset="42%" stopColor={c.rimCool} stopOpacity={soft ? 0.07 : 0.09} />
          <stop offset="100%" stopColor={c.rimCool} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id('vest')} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor={c.rimWarm} stopOpacity="0.5" />
          <stop offset="100%" stopColor={c.rimWarm} stopOpacity="0.18" />
        </linearGradient>
        <radialGradient id={id('vig')} cx="0.5" cy="0.46" r="0.76">
          <stop offset="48%" stopColor={c.bg0} stopOpacity="0" />
          <stop offset="100%" stopColor={c.bg0} stopOpacity={soft ? 0.24 : 0.72} />
        </radialGradient>
        <filter id={id('dof')} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.7" />
        </filter>
        <filter id={id('dof2')} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3.4" />
        </filter>
        <filter id={id('blur')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .${u}-b1 { animation: ${u}-b 3.4s steps(1,end) infinite; }
          .${u}-b2 { animation: ${u}-b 5.2s steps(1,end) infinite; animation-delay: -2.1s; }
          @keyframes ${u}-b { 0%,64% { opacity: 1 } 68%,100% { opacity: .2 } }
        }
      `}</style>

      <rect width="1200" height="800" fill={url('room')} />

      {/* ── 배경: 배전반 열 (아웃포커스) ── */}
      <g filter={url('dof2')} opacity={soft ? 0.85 : 0.9}>
        {Array.from({ length: 5 }).map((_, i) => {
          const x = 720 + i * 108;
          return (
            <g key={i}>
              <rect x={x} y={118} width={104} height={496} fill={url('panelg')} />
              <rect x={x + 2} y={118} width={2} height={496} fill={c.hi} opacity={0.08} />
              <rect x={x + 10} y={150} width={84} height={54} fill={c.bezel} opacity={0.6} />
              <rect x={x + 16} y={158} width={40} height={16} fill={c.accent} opacity={0.3} />
              {[0, 1, 2].map((k) => (
                <circle key={k} cx={x + 20 + k * 14} cy={218} r={4} fill={k === 0 ? c.ok : k === 1 ? c.accent : c.panelHi} opacity={0.75} />
              ))}
              {Array.from({ length: 6 }).map((_, k) => (
                <rect key={k} x={x + 14} y={250 + k * 9} width={76} height={4} fill={c.bezel} opacity={0.3} />
              ))}
              <rect x={x + 78} y={330} width={8} height={44} rx={3} fill={c.bezel} opacity={0.7} />
              <rect x={x} y={598} width={104} height={16} fill={c.bg0} opacity={0.7} />
            </g>
          );
        })}
      </g>

      {/* ── 배경: 대형 HMI 스크린 (좌) ── */}
      <g filter={url('dof')}>
        <ellipse cx="400" cy="330" rx="360" ry="250" fill={url('spill2')} />
        <rect x="150" y="132" width="520" height="360" rx="6" fill={c.bezel} />
        <rect x="164" y="146" width="492" height="322" fill={c.screen} />
        <rect x="164" y="146" width="492" height="26" fill={c.ink} opacity={0.14} />
        <rect x="176" y="155" width="70" height="8" rx="4" fill={c.accent} opacity={0.75} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={262 + i * 60} y={155} width={46} height={8} rx="4" fill={c.ink} opacity={0.24} />
        ))}
        {/* 단선결선도 */}
        <g>
          <rect x="196" y="212" width="264" height="4" fill={c.ok} opacity={0.85} />
          <rect x="322" y="186" width="3" height="26" fill={c.ok} opacity={0.8} />
          <circle cx="323" cy="180" r="11" fill="none" stroke={c.ink} strokeWidth={2} />
          {[0, 1, 2, 3].map((i) => {
            const fx = 216 + i * 76;
            const trip = i === 2;
            return (
              <g key={i}>
                <rect x={fx} y="216" width="3" height="26" fill={trip ? c.accent : c.ok} opacity={0.85} />
                <rect x={fx - 9} y="242" width="21" height="21" fill="none" stroke={c.ink} strokeWidth={2} />
                <rect x={fx - 5} y="246" width="13" height="13" fill={trip ? c.accent : c.ok} opacity={0.8} />
                <rect x={fx} y="263" width="3" height="24" fill={trip ? c.accent : c.ok} opacity={0.6} />
                <circle cx={fx + 1.5} cy="298" r="11" fill="none" stroke={c.ink} strokeWidth={1.8} />
                <circle cx={fx + 1.5} cy="312" r="11" fill="none" stroke={c.ink} strokeWidth={1.8} />
                <rect x={fx - 16} y="332" width="36" height="5" fill={c.ink} opacity={0.22} />
              </g>
            );
          })}
        </g>
        {/* 우측 트렌드 */}
        <g>
          <rect x="486" y="196" width="156" height="120" fill={c.ink} opacity={0.05} />
          {Array.from({ length: 4 }).map((_, i) => (
            <rect key={i} x="492" y={210 + i * 26} width="144" height="0.9" fill={c.ink} opacity={0.16} />
          ))}
          <polyline
            points={Array.from({ length: 18 })
              .map((_, i) => `${492 + i * 8.4},${288 - Math.sin(i * 0.6) * 26 - R() * 10}`)
              .join(' ')}
            fill="none" stroke={c.ink} strokeWidth={1.8} opacity={0.85}
          />
          <polyline
            points={Array.from({ length: 18 })
              .map((_, i) => `${492 + i * 8.4},${300 - Math.sin(i * 0.6 + 1.9) * 16 - R() * 8}`)
              .join(' ')}
            fill="none" stroke={c.accent} strokeWidth={1.5} opacity={0.8}
          />
        </g>
        {/* 알람 로우 */}
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="486" y={334 + i * 18} width="156" height="14" fill={c.ink} opacity={i % 2 ? 0.04 : 0.08} />
              <rect x="491" y={337 + i * 18} width="6" height="8" fill={i === 0 ? c.accent : c.ok} opacity={0.95}
                className={i === 0 ? `${u}-b1` : undefined} />
              <rect x="503" y={339 + i * 18} width={64 + i * 18} height="4" fill={c.ink} opacity={0.35} />
            </g>
          ))}
        </g>
        {/* 상태 바 */}
        <rect x="164" y="440" width="492" height="28" fill={c.ink} opacity={0.08} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx={184 + i * 92} cy="454" r="4" fill={i === 1 ? c.accent : c.ok} opacity={0.9} />
            <rect x={194 + i * 92} y="451" width="56" height="5" rx="2.5" fill={c.ink} opacity={0.24} />
          </g>
        ))}
        {/* 유리 반사 */}
        <path d="M164 468 L420 146 L560 146 L200 468 Z" fill={c.hi} opacity={soft ? 0.05 : 0.045} />
      </g>

      {/* 배경 조작 콘솔 */}
      <g filter={url('dof')}>
        <rect x="120" y="500" width="580" height="20" rx="4" fill={c.panel} />
        <rect x="120" y="500" width="580" height="3" fill={c.hi} opacity={0.2} />
        <rect x="140" y="520" width="540" height="110" fill={c.bg0} opacity={0.72} />
        <rect x="196" y="524" width="150" height="46" rx="3" fill={c.bezel} />
        <rect x="204" y="530" width="134" height="30" fill={c.screen} opacity={0.65} />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={392 + i * 26} cy={540} r="8" fill={i === 1 ? c.accent : c.panelHi} opacity={0.65} />
        ))}
      </g>

      {/* 스크린 스필 */}
      <ellipse cx="420" cy="330" rx="520" ry="330" fill={url('spill')} opacity={0.55} />

      {/* ── 바닥 ── */}
      <rect x="0" y="614" width="1200" height="186" fill={url('floorg')} />
      <rect x="0" y="614" width="1200" height="1.6" fill={c.hi} opacity={0.1} />
      <rect x="120" y="616" width="620" height="90" fill={url('refl')} opacity={0.7} />
      <g opacity={soft ? 0.35 : 0.5}>
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={140 + i * 60} y="616" width="22" height={40 + R() * 50} fill={c.rimCool} opacity={0.07} />
        ))}
      </g>

      {/* ── 후방 보조 인물 (작게, 더 어둡게) ── */}
      <g transform="translate(206 632) scale(0.345)" opacity={soft ? 0.5 : 0.66}>
        <g fill={c.rimCool} opacity={0.4} transform="translate(-12,-7)">
          <FigureShapes />
        </g>
        <g fill={c.figure} stroke={c.figure} strokeWidth={5} strokeLinejoin="round">
          <FigureShapes />
        </g>
      </g>
      <ellipse cx="206" cy="638" rx="46" ry="7" fill={c.bg0} opacity={soft ? 0.2 : 0.55} filter={url('blur')} />

      {/* ── 메인 인물 ── */}
      <ellipse cx="838" cy="792" rx="150" ry="20" fill={c.bg0} opacity={soft ? 0.24 : 0.65} filter={url('blur')} />
      <g transform="translate(838 120) scale(1.09)">
        {/* 쿨 림 (좌측 화면광) */}
        <g fill={c.rimCool} opacity={soft ? 0.34 : 0.6} transform="translate(-5.5,-3.2)">
          <FigureShapes />
        </g>
        {/* 실루엣 본체 (stroke 로 AA 경계를 덮어 림이 새어나오지 않게 함) */}
        <g fill={c.figure} stroke={c.figure} strokeWidth={2.4} strokeLinejoin="round">
          <FigureShapes />
        </g>
        {/* 화면광에 의한 내부 명암 (도형 재사용 — 클립 없이 정확히 일치) */}
        <g fill={url('figshade')}>
          <FigureShapes />
        </g>

        {/* 안전조끼 반사 밴드 */}
        <g opacity={soft ? 0.5 : 0.62}>
          <path d="M-56 224 C-26 232 26 232 56 224 L57 242 C26 250 -26 250 -57 242 Z" fill={url('vest')} />
          <path d="M-51 268 C-24 276 24 276 51 268 L52 286 C24 294 -24 294 -52 286 Z" fill={url('vest')} />
          <path d="M-40 136 L-22 133 L-33 236 L-52 232 Z" fill={url('vest')} opacity={0.7} />
          <path d="M40 136 L22 133 L33 236 L52 232 Z" fill={url('vest')} opacity={0.7} />
        </g>

        {/* 안전모 상단 하이라이트 */}
        <path d="M-31 58 C-30 28 -16 15 2 15 C9 15 15 17 20 21 C4 18 -16 29 -19 60 Z" fill={c.hi} opacity={soft ? 0.26 : 0.15} />
        <path d="M-39 62 C-39 55 -20 51 0 51 C20 51 39 55 39 62" fill="none" stroke={c.hi} strokeWidth="1.6" opacity={soft ? 0.22 : 0.12} />

        {/* 태블릿 */}
        <g transform="translate(64 322) rotate(-18)">
          <rect x="-6" y="-4" width="74" height="52" rx="4" fill={c.bezel} />
          <rect x="-1" y="1" width="64" height="44" fill={c.screen} />
          <rect x="3" y="5" width="56" height="5" fill={c.ink} opacity={0.35} />
          <rect x="3" y="14" width="34" height="4" fill={c.ink} opacity={0.22} />
          <rect x="3" y="22" width="44" height="4" fill={c.ink} opacity={0.22} />
          <rect x="3" y="32" width="24" height="9" fill={c.accent} opacity={0.6} />
          <rect x="-1" y="1" width="64" height="44" fill={c.hi} opacity={0.06} />
        </g>
      </g>

      {/* 손끝 접점 하이라이트 */}
      <g>
        <circle cx="614" cy="248" r="26" fill={c.accent} opacity={soft ? 0.14 : 0.24} filter={url('blur')} />
        <circle cx="614" cy="248" r="4" fill={c.accent} opacity={0.8} className={`${u}-b2`} />
      </g>

      {/* 전경 어둠 + 비네트 */}
      <rect x="0" y="752" width="1200" height="48" fill={c.bg0} opacity={soft ? 0.24 : 0.6} />
      <rect width="1200" height="800" fill={url('vig')} />
    </svg>
  );
}

export default EngineerAtPanel;
