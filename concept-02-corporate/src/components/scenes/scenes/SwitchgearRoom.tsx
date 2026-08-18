// EZIO shared scene artwork — 실제 현장 사진 수령 시 교체 가능한 일러스트레이션
import { useId } from 'react';

type Tone = 'dark' | 'light' | 'navy' | 'warm';

type Role =
  | 'bg0' | 'bg1' | 'floor0' | 'floor1'
  | 'panelA' | 'panelB' | 'edge'
  | 'glow' | 'accent' | 'led' | 'hi' | 'disp';

const PALETTE: Record<Tone, Record<Role, string>> = {
  dark: {
    bg0: '#0B0D10', bg1: '#191E23', floor0: '#0C0E10', floor1: '#242A30',
    panelA: '#272D33', panelB: '#3A424A', edge: '#5E6A75',
    glow: '#F26B1D', accent: '#F26B1D', led: '#4ADE80', hi: '#D2DAE1', disp: '#18333F',
  },
  light: {
    bg0: '#DCE6EF', bg1: '#F1F5F9', floor0: '#CBD6E0', floor1: '#EDF3F8',
    panelA: '#B2C0CE', panelB: '#D8E2EB', edge: '#6D8092',
    glow: '#0A3D91', accent: '#0A3D91', led: '#1E9E6A', hi: '#FFFFFF', disp: '#274768',
  },
  navy: {
    bg0: '#05090F', bg1: '#102135', floor0: '#060C15', floor1: '#152C44',
    panelA: '#182B40', panelB: '#26415E', edge: '#4C79A0',
    glow: '#38BDF8', accent: '#38BDF8', led: '#2DD4BF', hi: '#BAE6FD', disp: '#0D3448',
  },
  warm: {
    bg0: '#DFD6C8', bg1: '#F6F2EC', floor0: '#CCC2B5', floor1: '#EDE7DE',
    panelA: '#BAB0A1', panelB: '#DAD2C6', edge: '#7A7167',
    glow: '#2B2622', accent: '#141414', led: '#5A5149', hi: '#FFFFFF', disp: '#4A473F',
  },
};

const F = 1400;
const VX = 600;
const VY = 392;
const FLOOR = 200;
const CEIL = -300;

const px = (X: number, Z: number) => VX + (F * X) / Z;
const py = (Y: number, Z: number) => VY + (F * Y) / Z;

/** 평면 X=const 위의 사각형 → polygon points (m=true 이면 바닥 반사) */
function fq(X: number, y1: number, y2: number, z1: number, z2: number, m = false) {
  const a = m ? 2 * FLOOR - y1 : y1;
  const b = m ? 2 * FLOOR - y2 : y2;
  return `${px(X, z1)},${py(a, z1)} ${px(X, z2)},${py(a, z2)} ${px(X, z2)},${py(b, z2)} ${px(X, z1)},${py(b, z1)}`;
}

/** 평면 Y=const (바닥/천장) 위의 사각형 */
function hq(Y: number, x1: number, x2: number, z1: number, z2: number) {
  return `${px(x1, z1)},${py(Y, z1)} ${px(x2, z1)},${py(Y, z1)} ${px(x2, z2)},${py(Y, z2)} ${px(x1, z2)},${py(Y, z2)}`;
}

interface RowProps {
  side: 1 | -1;
  c: Record<Role, string>;
  mirror?: boolean;
  gradId: string;
  count: number;
}

/** 배전반 큐비클 열 */
function PanelRow({ side, c, mirror = false, gradId, count }: RowProps) {
  const X = 330 * side;
  const Z0 = 760;
  const W = 330; // 큐비클 1면 폭(깊이방향)
  const TOP = -95;
  const m = mirror;

  return (
    <g>
      {/* 상부 케이블 트렁킹 */}
      <polygon points={fq(X, TOP - 42, TOP - 6, Z0, Z0 + W * count, m)} fill={c.panelA} />
      <polygon points={fq(X, TOP - 42, TOP - 38, Z0, Z0 + W * count, m)} fill={c.edge} opacity={0.5} />

      {Array.from({ length: count }).map((_, i) => {
        const z1 = Z0 + i * W;
        const z2 = z1 + W;
        const gz1 = z1 + W * 0.045;
        const gz2 = z2 - W * 0.045;
        const lod = i < 5;
        const lod2 = i < 3;
        return (
          <g key={i}>
            {/* 본체 */}
            <polygon points={fq(X, TOP, FLOOR, z1, z2, m)} fill={c.panelA} />
            {/* 도어 면 */}
            <polygon points={fq(X, TOP + 12, FLOOR - 16, gz1, gz2, m)} fill={c.panelB} />
            <polygon points={fq(X, TOP + 12, FLOOR - 16, gz1, gz2, m)} fill={`url(#${gradId})`} opacity={0.85} />
            {/* 큐비클 분할 심 */}
            <polygon points={fq(X, TOP, FLOOR, z1, z1 + 3, m)} fill={c.edge} opacity={0.55} />

            {lod && (
              <>
                {/* 계측 컴파트먼트 */}
                <polygon points={fq(X, TOP + 22, TOP + 74, gz1 + 12, gz2 - 12, m)} fill={c.bg0} opacity={0.55} />
                {/* 디스플레이 */}
                <polygon points={fq(X, TOP + 28, TOP + 58, gz1 + 20, gz1 + 92, m)} fill={c.disp} />
                <polygon points={fq(X, TOP + 28, TOP + 32, gz1 + 20, gz1 + 92, m)} fill={c.hi} opacity={0.14} />
                <polygon points={fq(X, TOP + 33, TOP + 39, gz1 + 26, gz1 + 84, m)} fill={c.hi} opacity={0.5} />
                <polygon points={fq(X, TOP + 44, TOP + 48, gz1 + 26, gz1 + 68, m)} fill={c.hi} opacity={0.3} />
                {/* 아날로그 미터 */}
                <polygon points={fq(X, TOP + 27, TOP + 61, gz2 - 96, gz2 - 58, m)} fill={c.bg1} opacity={0.7} />
                <polygon points={fq(X, TOP + 32, TOP + 36, gz2 - 90, gz2 - 64, m)} fill={c.hi} opacity={0.35} />
                {/* 표시등 */}
                {[0, 1, 2].map((k) => (
                  <polygon
                    key={k}
                    points={fq(X, TOP + 84, TOP + 94, gz2 - 44 + k * 15, gz2 - 34 + k * 15, m)}
                    fill={k === 0 ? c.led : k === 1 ? c.accent : c.edge}
                    opacity={k === 2 ? 0.5 : 0.95}
                  />
                ))}
              </>
            )}

            {lod2 && (
              <>
                {/* 환기 그릴 */}
                {Array.from({ length: 7 }).map((_, k) => (
                  <polygon
                    key={k}
                    points={fq(X, TOP + 108 + k * 9, TOP + 112 + k * 9, gz1 + 24, gz1 + 116, m)}
                    fill={c.bg0} opacity={0.4}
                  />
                ))}
                {/* 도어 핸들 */}
                <polygon points={fq(X, TOP + 118, TOP + 156, gz2 - 32, gz2 - 24, m)} fill={c.edge} opacity={0.85} />
                <polygon points={fq(X, TOP + 118, TOP + 122, gz2 - 32, gz2 - 24, m)} fill={c.hi} opacity={0.5} />
                {/* 명판 슬롯 (추상) */}
                <polygon points={fq(X, TOP + 172, TOP + 184, gz1 + 30, gz1 + 96, m)} fill={c.bg1} opacity={0.55} />
              </>
            )}

            {lod && (
              <>
                {/* 하부 케이블실 루버 */}
                {Array.from({ length: 5 }).map((_, k) => (
                  <polygon
                    key={k}
                    points={fq(X, FLOOR - 62 + k * 9, FLOOR - 58 + k * 9, gz1 + 26, gz2 - 26, m)}
                    fill={c.bg0} opacity={0.32}
                  />
                ))}
              </>
            )}

            {/* 베이스 채널 */}
            <polygon points={fq(X, FLOOR - 14, FLOOR, z1, z2, m)} fill={c.bg0} opacity={0.7} />
          </g>
        );
      })}

      {/* 상단 하이라이트 엣지 */}
      <polygon points={fq(X, TOP, TOP + 4, Z0, Z0 + W * count, m)} fill={c.hi} opacity={0.35} />
    </g>
  );
}

export function SwitchgearRoom({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const raw = useId();
  const u = raw.replace(/[^a-zA-Z0-9]/g, '');
  const c = PALETTE[tone];
  const id = (n: string) => `${u}-${n}`;
  const url = (n: string) => `url(#${u}-${n})`;
  const soft = tone === 'light' || tone === 'warm';

  const lightZ = [900, 1400, 1980, 2640, 3380];

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
        <linearGradient id={id('wall')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.bg0} />
          <stop offset="55%" stopColor={c.bg1} />
          <stop offset="100%" stopColor={c.bg0} />
        </linearGradient>
        <linearGradient id={id('door')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.hi} stopOpacity={soft ? 0.5 : 0.16} />
          <stop offset="30%" stopColor={c.hi} stopOpacity="0.02" />
          <stop offset="72%" stopColor={c.bg0} stopOpacity="0.05" />
          <stop offset="100%" stopColor={c.bg0} stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id={id('floorg')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.floor1} />
          <stop offset="34%" stopColor={c.floor1} />
          <stop offset="100%" stopColor={c.floor0} />
        </linearGradient>
        <linearGradient id={id('reffade')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <mask id={id('refmask')}>
          <rect x="0" y="392" width="1200" height="408" fill={url('reffade')} />
        </mask>
        <linearGradient id={id('ceil')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.bg0} />
          <stop offset="100%" stopColor={c.bg1} />
        </linearGradient>
        <radialGradient id={id('depth')} cx="0.5" cy="0.49" r="0.42">
          <stop offset="0%" stopColor={c.glow} stopOpacity={soft ? 0.1 : 0.2} />
          <stop offset="55%" stopColor={c.bg1} stopOpacity={soft ? 0.32 : 0.28} />
          <stop offset="100%" stopColor={c.bg1} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('lamp')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={c.hi} stopOpacity={soft ? 0.55 : 0.7} />
          <stop offset="100%" stopColor={c.hi} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('pool')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={c.hi} stopOpacity={soft ? 0.42 : 0.3} />
          <stop offset="100%" stopColor={c.hi} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('vig')} cx="0.5" cy="0.5" r="0.75">
          <stop offset="52%" stopColor={c.bg0} stopOpacity="0" />
          <stop offset="100%" stopColor={c.bg0} stopOpacity={soft ? 0.2 : 0.62} />
        </radialGradient>
        <filter id={id('blur')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .${u}-b1 { animation: ${u}-b 4.2s steps(1,end) infinite; }
          .${u}-b2 { animation: ${u}-b 5.6s steps(1,end) infinite; animation-delay: -2.4s; }
          .${u}-b3 { animation: ${u}-b 7.1s steps(1,end) infinite; animation-delay: -1.1s; }
          @keyframes ${u}-b { 0%,72% { opacity: 1 } 76%,100% { opacity: .22 } }
        }
      `}</style>

      {/* ── 벽 / 배경 ── */}
      <rect width="1200" height="800" fill={url('wall')} />

      {/* 천장 */}
      <polygon points={hq(CEIL, -900, 900, 700, 4600)} fill={url('ceil')} />
      {[1, 2, 3, 4, 5, 6, 7].map((i) => {
        const z = 700 + i * 560;
        return <polygon key={i} points={hq(CEIL, -900, 900, z, z + 8)} fill={c.edge} opacity={0.12} />;
      })}

      {/* 천장 케이블 트레이 */}
      {[-250, 250].map((tx) => (
        <g key={tx}>
          <polygon points={hq(CEIL + 46, tx - 34, tx + 34, 760, 4200)} fill={c.panelA} opacity={soft ? 0.85 : 0.7} />
          <polygon points={hq(CEIL + 46, tx - 34, tx - 30, 760, 4200)} fill={c.hi} opacity={0.18} />
          {Array.from({ length: 9 }).map((_, i) => {
            const z = 800 + i * 380;
            return <polygon key={i} points={hq(CEIL + 20, tx - 4, tx + 4, z, z + 10)} fill={c.bg0} opacity={0.5} />;
          })}
        </g>
      ))}

      {/* 원거리 벽 */}
      <polygon points={fq(-330, CEIL, FLOOR, 4200, 4210)} fill={c.bg1} />
      <rect
        x={px(-330, 4200)} y={py(CEIL, 4200)}
        width={px(330, 4200) - px(-330, 4200)} height={py(FLOOR, 4200) - py(CEIL, 4200)}
        fill={c.bg1}
      />
      <rect
        x={px(-330, 4200)} y={py(CEIL, 4200)}
        width={px(330, 4200) - px(-330, 4200)} height={py(FLOOR, 4200) - py(CEIL, 4200)}
        fill={c.bg0} opacity={0.35}
      />
      {/* 원거리 출입문 */}
      <rect
        x={px(-90, 4200)} y={py(-40, 4200)}
        width={px(90, 4200) - px(-90, 4200)} height={py(FLOOR, 4200) - py(-40, 4200)}
        fill={c.bg0} opacity={0.65}
      />
      <rect
        x={px(-90, 4200)} y={py(-40, 4200)}
        width={px(90, 4200) - px(-90, 4200)} height={2}
        fill={c.hi} opacity={0.3}
      />
      {/* 비상등 */}
      <rect x={px(150, 4200)} y={py(-72, 4200)} width={8} height={4} fill={c.led} opacity={0.9} />

      {/* ── 바닥 ── */}
      <polygon points={hq(FLOOR, -900, 900, 700, 4300)} fill={url('floorg')} />
      {/* 바닥 조인트 라인 */}
      <g opacity={soft ? 0.3 : 0.18}>
        {[900, 1250, 1700, 2260, 2960, 3800].map((z) => (
          <polygon key={z} points={hq(FLOOR, -900, 900, z, z + 4)} fill={c.edge} />
        ))}
        {[-200, 0, 200].map((x) => (
          <polygon key={x} points={hq(FLOOR, x - 2, x + 2, 700, 4300)} fill={c.edge} />
        ))}
      </g>

      {/* ── 바닥 반사 (거울상) ── */}
      <g mask={`url(#${u}-refmask)`} opacity={soft ? 0.3 : 0.42}>
        <g transform="scale(1,1)">
          <PanelRow side={-1} c={c} mirror gradId={id('door')} count={10} />
          <PanelRow side={1} c={c} mirror gradId={id('door')} count={10} />
        </g>
      </g>
      {/* 반사 흐림용 스캔 밴드 */}
      <g opacity={soft ? 0.5 : 0.35}>
        {Array.from({ length: 16 }).map((_, i) => (
          <rect key={i} x="0" y={410 + i * 24} width="1200" height={3 + i * 0.5} fill={c.floor1} opacity={0.16 + i * 0.03} />
        ))}
      </g>

      {/* 조명 바닥 반사 풀 */}
      {lightZ.map((z, i) => {
        const cy = py(FLOOR, z);
        const w = (px(150, z) - px(-150, z)) * 1.5;
        return <ellipse key={i} cx={VX} cy={cy + 26 - i * 3} rx={w} ry={26 - i * 3.6} fill={url('pool')} />;
      })}

      {/* ── 배전반 열 ── */}
      <PanelRow side={-1} c={c} gradId={id('door')} count={10} />
      <PanelRow side={1} c={c} gradId={id('door')} count={10} />

      {/* ── 천장 조명 ── */}
      {lightZ.map((z, i) => {
        const z2 = z + 230 - i * 26;
        return (
          <g key={i}>
            <ellipse
              cx={VX} cy={(py(CEIL, z) + py(CEIL, z2)) / 2}
              rx={(px(190, z) - px(-190, z)) / 2} ry={22 - i * 3}
              fill={url('lamp')} filter={url('blur')} opacity={0.8}
            />
            <polygon points={hq(CEIL, -130, 130, z, z2)} fill={c.hi} opacity={soft ? 0.85 : 0.92} />
            <polygon points={hq(CEIL + 10, -142, 142, z - 10, z2 + 10)} fill={c.hi} opacity={0.12} />
          </g>
        );
      })}

      {/* ── 전면 프레이밍: 최근접 큐비클 측면(엔드캡) ── */}
      <g>
        <polygon
          points={`${px(-330, 760)},${py(-137, 760)} ${px(-900, 760)},${py(-137, 760)} ${px(-900, 760)},${py(FLOOR, 760)} ${px(-330, 760)},${py(FLOOR, 760)}`}
          fill={c.panelA}
        />
        <polygon
          points={`${px(-330, 760)},${py(-137, 760)} ${px(-900, 760)},${py(-137, 760)} ${px(-900, 760)},${py(-128, 760)} ${px(-330, 760)},${py(-128, 760)}`}
          fill={c.hi} opacity={0.3}
        />
        <polygon
          points={`${px(330, 760)},${py(-137, 760)} ${px(900, 760)},${py(-137, 760)} ${px(900, 760)},${py(FLOOR, 760)} ${px(330, 760)},${py(FLOOR, 760)}`}
          fill={c.panelA}
        />
        <polygon
          points={`${px(330, 760)},${py(-137, 760)} ${px(900, 760)},${py(-137, 760)} ${px(900, 760)},${py(-128, 760)} ${px(330, 760)},${py(-128, 760)}`}
          fill={c.hi} opacity={0.3}
        />
      </g>

      {/* ── 점멸 표시등 (전면 큐비클) ── */}
      <g>
        <g className={`${u}-b1`}>
          <circle cx={px(-330, 900)} cy={py(-6, 900)} r="9" fill={c.led} opacity={0.28} filter={url('blur')} />
          <circle cx={px(-330, 900)} cy={py(-6, 900)} r="2.6" fill={c.led} />
        </g>
        <g className={`${u}-b2`}>
          <circle cx={px(-330, 1240)} cy={py(-6, 1240)} r="7" fill={c.accent} opacity={0.3} filter={url('blur')} />
          <circle cx={px(-330, 1240)} cy={py(-6, 1240)} r="2.1" fill={c.accent} />
        </g>
        <g className={`${u}-b3`}>
          <circle cx={px(330, 1080)} cy={py(-6, 1080)} r="8" fill={c.led} opacity={0.28} filter={url('blur')} />
          <circle cx={px(330, 1080)} cy={py(-6, 1080)} r="2.4" fill={c.led} />
        </g>
      </g>

      {/* 공기 원근 / 비네트 */}
      <rect width="1200" height="800" fill={url('depth')} />
      <rect width="1200" height="800" fill={url('vig')} />
    </svg>
  );
}

export default SwitchgearRoom;
