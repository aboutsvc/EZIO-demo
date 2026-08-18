// EZIO shared scene artwork — 실제 현장 사진 수령 시 교체 가능한 일러스트레이션
import { useId } from 'react';
import type { ReactElement } from 'react';

type Tone = 'dark' | 'light' | 'navy' | 'warm';

type Role =
  | 'sky0' | 'sky1' | 'haze' | 'gnd0' | 'gnd1'
  | 'roof' | 'face' | 'side' | 'tank' | 'tankHi'
  | 'road' | 'edge' | 'accent' | 'hi' | 'flame';

const PALETTE: Record<Tone, Record<Role, string>> = {
  dark: {
    sky0: '#101720', sky1: '#7A4520', haze: '#5E3A22', gnd0: '#0E1114', gnd1: '#242A30',
    roof: '#343B42', face: '#1E242A', side: '#13181D', tank: '#3B434B', tankHi: '#5A646E',
    road: '#1B2026', edge: '#5A646E', accent: '#F26B1D', hi: '#C9D1D8', flame: '#F26B1D',
  },
  light: {
    sky0: '#BCD6EE', sky1: '#EEF4F9', haze: '#E9F0F6', gnd0: '#C0CAD4', gnd1: '#D9E0E7',
    roof: '#E9EFF4', face: '#B7C5D1', side: '#93A4B4', tank: '#DFE7ED', tankHi: '#FFFFFF',
    road: '#9AA7B4', edge: '#5A6E84', accent: '#0A3D91', hi: '#FFFFFF', flame: '#E07C34',
  },
  navy: {
    sky0: '#04080F', sky1: '#123449', haze: '#12405C', gnd0: '#050A12', gnd1: '#112434',
    roof: '#213850', face: '#132639', side: '#0B1826', tank: '#25415C', tankHi: '#3B7098',
    road: '#101F2E', edge: '#3F6E96', accent: '#38BDF8', hi: '#BAE6FD', flame: '#F5A83F',
  },
  warm: {
    sky0: '#E5DACA', sky1: '#F8F4EE', haze: '#F2ECE3', gnd0: '#CBC2B4', gnd1: '#DFD7CB',
    roof: '#F0EAE1', face: '#BCB2A5', side: '#93897D', tank: '#E5DED4', tankHi: '#FFFFFF',
    road: '#9C9385', edge: '#4A443D', accent: '#241F1B', hi: '#FFFFFF', flame: '#6E6259',
  },
};

const F = 1200;
const VX = 600;
const VY = 168;
const G = 250; // 지면 Y

const px = (X: number, Z: number) => VX + (F * X) / Z;
const py = (Y: number, Z: number) => VY + (F * Y) / Z;

function rand(seed: number) {
  let s = seed;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type C = Record<Role, string>;

/** 지면 위 직육면체 */
function box(k: string, x0: number, x1: number, z0: number, z1: number, h: number, c: C, roofDetail = true): ReactElement {
  const ty = G - h;
  const roof = `${px(x0, z0)},${py(ty, z0)} ${px(x1, z0)},${py(ty, z0)} ${px(x1, z1)},${py(ty, z1)} ${px(x0, z1)},${py(ty, z1)}`;
  const front = `${px(x0, z0)},${py(ty, z0)} ${px(x1, z0)},${py(ty, z0)} ${px(x1, z0)},${py(G, z0)} ${px(x0, z0)},${py(G, z0)}`;
  const sx = x1 <= 0 ? x1 : x0 >= 0 ? x0 : null;
  const side =
    sx === null
      ? null
      : `${px(sx, z0)},${py(ty, z0)} ${px(sx, z1)},${py(ty, z1)} ${px(sx, z1)},${py(G, z1)} ${px(sx, z0)},${py(G, z0)}`;
  return (
    <g key={k}>
      {side && <polygon points={side} fill={c.side} />}
      <polygon points={front} fill={c.face} />
      <polygon points={roof} fill={c.roof} />
      {roofDetail && (
        <>
          <polygon points={roof} fill={c.hi} opacity={0.06} />
          <line x1={px(x0, z0)} y1={py(ty, z0)} x2={px(x1, z0)} y2={py(ty, z0)} stroke={c.hi} strokeWidth={0.9} opacity={0.22} />
          <line
            x1={px((x0 + x1) / 2, z0)} y1={py(ty, z0)}
            x2={px((x0 + x1) / 2, z1)} y2={py(ty, z1)}
            stroke={c.edge} strokeWidth={0.8} opacity={0.28}
          />
        </>
      )}
    </g>
  );
}

/** 원통형 탱크 */
function tank(k: string, X: number, Z: number, r: number, h: number, c: C): ReactElement {
  const xl = px(X - r, Z);
  const xr = px(X + r, Z);
  const yb = py(G, Z);
  const yt = py(G - h, Z);
  const ry = Math.max(2, (py(G, Z - r) - py(G, Z + r)) / 2);
  const w = xr - xl;
  return (
    <g key={k}>
      <ellipse cx={(xl + xr) / 2} cy={yb} rx={w / 2} ry={ry} fill={c.side} opacity={0.55} />
      <rect x={xl} y={yt} width={w} height={yb - yt} fill={c.tank} />
      <rect x={xl} y={yt} width={w * 0.3} height={yb - yt} fill={c.side} opacity={0.4} />
      <rect x={xl + w * 0.66} y={yt} width={w * 0.34} height={yb - yt} fill={c.hi} opacity={0.06} />
      <ellipse cx={(xl + xr) / 2} cy={yt} rx={w / 2} ry={ry} fill={c.tankHi} />
      <ellipse cx={(xl + xr) / 2} cy={yt} rx={w / 2} ry={ry} fill={c.hi} opacity={0.1} />
      <ellipse cx={(xl + xr) / 2} cy={yt} rx={w / 2} ry={ry} fill="none" stroke={c.edge} strokeWidth={0.8} opacity={0.4} />
      <ellipse cx={(xl + xr) / 2} cy={yt} rx={w * 0.3} ry={ry * 0.6} fill="none" stroke={c.edge} strokeWidth={0.7} opacity={0.3} />
      {w > 26 && (
        <>
          <path d={`M${xl + 2} ${yb} L${xr - 3} ${yt + ry * 0.6}`} stroke={c.edge} strokeWidth={0.9} opacity={0.4} fill="none" />
          <rect x={xl} y={yt + (yb - yt) * 0.5} width={w} height={0.7} fill={c.edge} opacity={0.2} />
        </>
      )}
    </g>
  );
}

/** 굴뚝 / 스택 */
function stack(k: string, X: number, Z: number, r: number, h: number, c: C, plume = true): ReactElement {
  const xl = px(X - r, Z);
  const xr = px(X + r, Z);
  const yb = py(G, Z);
  const yt = py(G - h, Z);
  return (
    <g key={k}>
      <rect x={xl} y={yt} width={xr - xl} height={yb - yt} fill={c.tank} />
      <rect x={xl} y={yt} width={(xr - xl) * 0.35} height={yb - yt} fill={c.side} opacity={0.45} />
      <ellipse cx={(xl + xr) / 2} cy={yt} rx={(xr - xl) / 2} ry={Math.max(1, (xr - xl) / 5)} fill={c.side} />
      <rect x={xl - 1} y={yt + (yb - yt) * 0.22} width={xr - xl + 2} height={1.4} fill={c.edge} opacity={0.4} />
      {plume && (
        <path
          d={`M${(xl + xr) / 2} ${yt} c -6 -18 12 -26 4 -46 c -4 -10 6 -16 2 -26`}
          stroke={c.hi} strokeWidth={Math.min(11, (xr - xl) * 1.5)} opacity={0.055} fill="none" strokeLinecap="round"
        />
      )}
    </g>
  );
}

/** 파이프랙 (Z축 방향) */
function rackZ(k: string, X: number, z0: number, z1: number, c: C): ReactElement {
  const w = 26;
  const h = 34;
  const posts: ReactElement[] = [];
  const n = Math.max(3, Math.round((z1 - z0) / 220));
  for (let i = 0; i <= n; i++) {
    const z = z0 + ((z1 - z0) * i) / n;
    posts.push(
      <line key={i} x1={px(X, z)} y1={py(G, z)} x2={px(X, z)} y2={py(G - h, z)} stroke={c.side} strokeWidth={1.6} />
    );
  }
  return (
    <g key={k}>
      {posts}
      <polygon
        points={`${px(X - w, z0)},${py(G - h, z0)} ${px(X + w, z0)},${py(G - h, z0)} ${px(X + w, z1)},${py(G - h, z1)} ${px(X - w, z1)},${py(G - h, z1)}`}
        fill={c.tank}
      />
      <line x1={px(X - w, z0)} y1={py(G - h, z0)} x2={px(X - w, z1)} y2={py(G - h, z1)} stroke={c.hi} strokeWidth={0.8} opacity={0.2} />
      <line x1={px(X + w, z0)} y1={py(G - h, z0)} x2={px(X + w, z1)} y2={py(G - h, z1)} stroke={c.edge} strokeWidth={0.7} opacity={0.3} />
    </g>
  );
}

/** 파이프랙 (X축 방향) */
function rackX(k: string, x0: number, x1: number, Z: number, c: C): ReactElement {
  const d = 26;
  const h = 34;
  return (
    <g key={k}>
      <polygon
        points={`${px(x0, Z - d)},${py(G - h, Z - d)} ${px(x1, Z - d)},${py(G - h, Z - d)} ${px(x1, Z + d)},${py(G - h, Z + d)} ${px(x0, Z + d)},${py(G - h, Z + d)}`}
        fill={c.tank}
      />
      {Array.from({ length: 7 }).map((_, i) => {
        const X = x0 + ((x1 - x0) * i) / 6;
        return <line key={i} x1={px(X, Z)} y1={py(G, Z)} x2={px(X, Z)} y2={py(G - h, Z)} stroke={c.side} strokeWidth={1.5} />;
      })}
      <line x1={px(x0, Z - d)} y1={py(G - h, Z - d)} x2={px(x1, Z - d)} y2={py(G - h, Z - d)} stroke={c.hi} strokeWidth={0.8} opacity={0.2} />
    </g>
  );
}

/** 지면 사각형 (도로/포장) */
function pad(k: string, x0: number, x1: number, z0: number, z1: number, fill: string, op = 1): ReactElement {
  return (
    <polygon
      key={k}
      points={`${px(x0, z0)},${py(G, z0)} ${px(x1, z0)},${py(G, z0)} ${px(x1, z1)},${py(G, z1)} ${px(x0, z1)},${py(G, z1)}`}
      fill={fill} opacity={op}
    />
  );
}

export function PlantAerial({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const raw = useId();
  const u = raw.replace(/[^a-zA-Z0-9]/g, '');
  const c = PALETTE[tone];
  const id = (n: string) => `${u}-${n}`;
  const url = (n: string) => `url(#${u}-${n})`;
  const soft = tone === 'light' || tone === 'warm';
  const R = rand(5150);

  // ── 시설 배치 ──
  // 카메라 프러스텀: 깊이 Z 에서 가로 가시범위는 |X| < 0.5·Z. 좌표는 이 규칙 안에서 배치한다.
  const items: { z: number; el: ReactElement }[] = [];
  const put = (z: number, el: ReactElement) => items.push({ z, el });

  // ── 원경 밀집 지구 (Z 3200~12000) ──
  for (let i = 0; i < 110; i++) {
    const Z = 3200 + R() * 8800;
    const u = -1 + R() * 2;
    if (Math.abs(u) < 0.06) continue;
    const X = u * 0.6 * Z;
    const w = 90 + R() * 260;
    const d = 80 + R() * 170;
    const h = 14 + R() * 52;
    put(Z, box(`ff${i}`, X, X + w, Z, Z + d, h, c, false));
  }
  for (let i = 0; i < 34; i++) {
    const Z = 3200 + R() * 7600;
    const u = -1 + R() * 2;
    if (Math.abs(u) < 0.1) continue;
    put(Z, tank(`ft${i}`, u * 0.58 * Z, Z, 30 + R() * 40, 20 + R() * 18, c));
  }
  for (let i = 0; i < 11; i++) {
    const Z = 3400 + R() * 6200;
    const u = -1 + R() * 2;
    if (Math.abs(u) < 0.12) continue;
    put(Z, stack(`fs${i}`, u * 0.55 * Z, Z, 9 + R() * 8, 80 + R() * 130, c, i % 3 === 0));
  }

  // ── 중경 (Z 1500~3000) ──
  // 좌: 창고동 열
  for (let i = 0; i < 5; i++) {
    const Z = 1500 + i * 300;
    put(Z, box(`wh${i}`, -0.44 * Z, -0.2 * Z, Z, Z + 150, 30, c));
    put(Z + 2, box(`wh2${i}`, -0.72 * Z, -0.48 * Z, Z + 20, Z + 160, 26, c));
  }
  // 우: 탱크팜
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const Z = 1650 + i * 260;
      put(Z, tank(`mt${i}${j}`, 0.24 * Z + j * 0.14 * Z, Z, 0.032 * Z, 0.024 * Z, c));
    }
  }
  // 냉각탑 3기 (좌중)
  for (let i = 0; i < 3; i++) {
    const Z = 2500;
    put(Z + i, box(`ct${i}`, -0.4 * Z + i * 0.13 * Z, -0.31 * Z + i * 0.13 * Z, Z, Z + 200, 58, c));
    put(Z + 3 + i, stack(`cts${i}`, -0.355 * Z + i * 0.13 * Z, Z + 100, 18, 74, c, true));
  }
  // 굴뚝
  put(2700, stack('bs1', -0.2 * 2700, 2700, 15, 190, c, true));
  put(2400, stack('bs2', 0.44 * 2400, 2400, 13, 150, c, true));
  // 파이프랙
  put(1420, rackX('rx1', -640, -180, 1420, c));
  put(2050, rackX('rx2', 240, 900, 2050, c));
  put(2600, rackZ('rz1', -520, 1550, 3000, c));
  put(2620, rackZ('rz2', 560, 1550, 3000, c));

  // ── 근경 좌: 탱크팜 (Z 700~1150) ──
  for (let r0 = 0; r0 < 4; r0++) {
    for (let cc = 0; cc < 3; cc++) {
      const Z = 700 + r0 * 130;
      const X = -320 + cc * 102;
      put(Z, tank(`nt${r0}${cc}`, X, Z, 40, 30, c));
    }
  }

  // ── 근경 우: 공정 유닛 (Z 680~1300) ──
  put(700, box('pb1', 140, 330, 700, 830, 42, c));
  put(860, box('pb2', 360, 560, 860, 990, 34, c));
  put(1000, box('pb3', 150, 420, 1000, 1180, 26, c));
  for (let i = 0; i < 6; i++) {
    put(890 - i, stack(`pc${i}`, 170 + i * 52, 890, 8, 66 + (i % 3) * 34, c, i === 2));
  }
  put(1180, box('pb4', 470, 760, 1180, 1340, 30, c));
  put(1300, rackX('rx3', 120, 700, 1300, c));

  // ── 근경 사무/게이트동 ──
  put(620, box('ofc', -310, -140, 560, 660, 52, c));
  put(560, box('gate', 130, 300, 520, 610, 22, c));

  // 대형 플레어 스택
  put(1750, stack('flare', 0.31 * 1750, 1750, 13, 260, c, false));

  items.sort((a, b) => b.z - a.z);

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
        <linearGradient id={id('sky')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.sky0} />
          <stop offset="70%" stopColor={c.sky0} />
          <stop offset="100%" stopColor={c.sky1} />
        </linearGradient>
        <linearGradient id={id('gnd')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.haze} />
          <stop offset="14%" stopColor={c.gnd1} />
          <stop offset="100%" stopColor={c.gnd0} />
        </linearGradient>
        <linearGradient id={id('haze')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.haze} stopOpacity={soft ? 0.9 : 0.85} />
          <stop offset="34%" stopColor={c.haze} stopOpacity={soft ? 0.42 : 0.34} />
          <stop offset="100%" stopColor={c.haze} stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id('sun')} cx="0.7" cy="0.2" r="0.5">
          <stop offset="0%" stopColor={c.accent} stopOpacity={soft ? 0.12 : 0.3} />
          <stop offset="100%" stopColor={c.accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('vig')} cx="0.5" cy="0.5" r="0.76">
          <stop offset="52%" stopColor={c.gnd0} stopOpacity="0" />
          <stop offset="100%" stopColor={c.gnd0} stopOpacity={soft ? 0.2 : 0.62} />
        </radialGradient>
        <filter id={id('blur')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id={id('blur2')} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .${u}-bk { animation: ${u}-bk 5.2s ease-in-out infinite; }
          .${u}-bk2 { animation: ${u}-bk 3.9s ease-in-out infinite; animation-delay: -2.2s; }
          @keyframes ${u}-bk { 0%,46% { opacity: 1 } 54%,92% { opacity: .16 } 100% { opacity: 1 } }
        }
      `}</style>

      {/* 하늘 */}
      <rect x="0" y="0" width="1200" height={VY + 2} fill={url('sky')} />
      <rect x="0" y="0" width="1200" height={VY + 2} fill={url('sun')} />
      {/* 원경 실루엣 밴드 */}
      <g opacity={soft ? 0.35 : 0.45}>
        {Array.from({ length: 46 }).map((_, i) => {
          const x = R() * 1200;
          const h = 3 + R() * 13;
          return <rect key={i} x={x} y={VY - h} width={4 + R() * 26} height={h} fill={c.haze} opacity={0.5} />;
        })}
      </g>

      {/* 지면 */}
      <rect x="0" y={VY} width="1200" height={800 - VY} fill={url('gnd')} />

      {/* 도로망 */}
      <g>
        {pad('r-main', -26, 26, 460, 12000, c.road, soft ? 0.45 : 0.7)}
        {pad('r-x1', -1400, 1400, 1400, 1460, c.road, soft ? 0.45 : 0.8)}
        {pad('r-x2', -2600, 2600, 3100, 3170, c.road, soft ? 0.4 : 0.7)}
        {pad('r-z2', -430, -378, 800, 5200, c.road, soft ? 0.4 : 0.7)}
        {pad('r-z3', 700, 752, 1300, 5200, c.road, soft ? 0.4 : 0.7)}
        {/* 차선 */}
        <g opacity={soft ? 0.5 : 0.4}>
          {Array.from({ length: 22 }).map((_, i) => {
            const z = 500 + i * 240 + i * i * 26;
            if (z > 9000) return null;
            return pad(`ln${i}`, -3.4, 3.4, z, z + 90, c.hi, 0.35);
          })}
        </g>
        {/* 차량 */}
        {Array.from({ length: 9 }).map((_, i) => {
          const z = 620 + R() * 2600;
          const X = R() > 0.5 ? -14 : 14;
          const w = 8;
          return (
            <g key={i}>
              <polygon
                points={`${px(X - w, z)},${py(G, z)} ${px(X + w, z)},${py(G, z)} ${px(X + w, z + 26)},${py(G, z + 26)} ${px(X - w, z + 26)},${py(G, z + 26)}`}
                fill={i % 3 === 0 ? c.accent : c.roof} opacity={0.85}
              />
            </g>
          );
        })}
      </g>

      {/* 부지 포장 */}
      {pad('yard1', -420, -80, 640, 1300, c.gnd1, soft ? 0.5 : 0.35)}
      {pad('yard2', 90, 620, 620, 1400, c.gnd1, soft ? 0.5 : 0.3)}

      {/* ── 시설물 (원경 → 근경) ── */}
      <g>
        {items.map((it) => {
          const o = Math.max(0.28, Math.min(1, 1.18 - (it.z - 900) / 9000));
          return (
            <g key={it.el.key ?? String(it.z)} opacity={o}>
              {it.el}
            </g>
          );
        })}
      </g>

      {/* 원경 헤이즈 */}
      <rect x="0" y={VY} width="1200" height="300" fill={url('haze')} />

      {/* 플레어 화염 + 글로우 */}
      <g>
        <circle cx={px(0.31 * 1750, 1750)} cy={py(G - 260, 1750)} r="40" fill={c.flame} opacity={soft ? 0.2 : 0.42} filter={url('blur')} />
        <path
          d={`M${px(0.31 * 1750, 1750)} ${py(G - 260, 1750)} c -5 -9 -1 -15 -3 -22 c 6 5 8 -3 7 -9 c 5 8 9 17 5 25 z`}
          fill={c.flame} opacity={0.95}
        />
      </g>

      {/* 야간 조명 / 표시등 */}
      <g>
        {Array.from({ length: 70 }).map((_, i) => {
          const Z = 700 + R() * 7000;
          const X = (-1 + R() * 2) * 0.56 * Z;
          const hh = 14 + R() * 60;
          return (
            <circle key={i} cx={px(X, Z)} cy={py(G - hh, Z)} r={0.7 + R() * 1.5}
              fill={soft ? c.accent : c.accent} opacity={soft ? 0.22 : 0.35 + R() * 0.5} />
          );
        })}
        <g className={`${u}-bk`}>
          <circle cx={px(0.31 * 1750, 1750)} cy={py(G - 262, 1750)} r="7" fill={c.accent} opacity={0.35} filter={url('blur2')} />
          <circle cx={px(0.31 * 1750, 1750)} cy={py(G - 262, 1750)} r="2.2" fill={c.accent} />
        </g>
        <g className={`${u}-bk2`}>
          <circle cx={px(-0.2 * 2700, 2700)} cy={py(G - 192, 2700)} r="7" fill={c.accent} opacity={0.35} filter={url('blur2')} />
          <circle cx={px(-0.2 * 2700, 2700)} cy={py(G - 192, 2700)} r="2.2" fill={c.accent} />
        </g>
      </g>

      {/* 하단 근경 어둠 + 비네트 */}
      <rect x="0" y="716" width="1200" height="84" fill={c.gnd0} opacity={soft ? 0.12 : 0.26} />
      <rect width="1200" height="800" fill={url('vig')} />
    </svg>
  );
}

export default PlantAerial;
