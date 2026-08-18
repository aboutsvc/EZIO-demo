// EZIO shared scene artwork — finished vector scenes. Real site photography can be swapped in later at the same slots.
import { useId } from 'react';

type Tone = 'dark' | 'light' | 'navy' | 'warm';

type Role =
  | 'sky0' | 'sky1' | 'sky2' | 'far'
  | 'steel' | 'steelDk' | 'porc' | 'tank'
  | 'edge' | 'accent' | 'hi' | 'gnd0' | 'gnd1';

const PALETTE: Record<Tone, Record<Role, string>> = {
  dark: {
    sky0: '#0F151C', sky1: '#232430', sky2: '#6E3B1E', far: '#1A212A',
    steel: '#3A434C', steelDk: '#1E242A', porc: '#4E5862', tank: '#2B323A',
    edge: '#616D79', accent: '#F26B1D', hi: '#CBD3DA', gnd0: '#20262C', gnd1: '#101418',
  },
  light: {
    sky0: '#B4CFEA', sky1: '#DAE8F4', sky2: '#F4F7FA', far: '#B2C4D5',
    steel: '#7C8FA2', steelDk: '#455A6E', porc: '#E6EDF3', tank: '#8296A9',
    edge: '#3B5065', accent: '#0A3D91', hi: '#FFFFFF', gnd0: '#C7D0D8', gnd1: '#A5B1BC',
  },
  navy: {
    sky0: '#030710', sky1: '#0A1322', sky2: '#123449', far: '#122438',
    steel: '#24394F', steelDk: '#0D1B2A', porc: '#2F5673', tank: '#1A2C3F',
    edge: '#4275A0', accent: '#38BDF8', hi: '#BAE6FD', gnd0: '#0B1521', gnd1: '#04080F',
  },
  warm: {
    sky0: '#E2D7C7', sky1: '#F0EAE1', sky2: '#FAF8F5', far: '#C9BFB1',
    steel: '#8A8175', porc: '#A79E92', steelDk: '#48423B', tank: '#6C635A',
    edge: '#3A352F', accent: '#241F1B', hi: '#FFFFFF', gnd0: '#D3CABE', gnd1: '#B5AB9E',
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

/** 애자련 — 디스크 체인 */
function InsulatorString(props: { x: number; y: number; n: number; s: number; c: Record<Role, string> }) {
  const { x, y, n, s, c } = props;
  return (
    <g>
      <rect x={x - 0.9} y={y} width={1.8} height={n * 5.2 * s + 4} fill={c.steelDk} />
      {Array.from({ length: n }).map((_, i) => (
        <g key={i}>
          <ellipse cx={x} cy={y + 5 + i * 5.2 * s} rx={5.4 * s} ry={2 * s} fill={c.porc} />
          <ellipse cx={x} cy={y + 4.2 + i * 5.2 * s} rx={5.4 * s} ry={1.6 * s} fill={c.hi} opacity={0.3} />
        </g>
      ))}
      <rect x={x - 3 * s} y={y + n * 5.2 * s + 3} width={6 * s} height={4 * s} fill={c.steelDk} />
    </g>
  );
}

/** 격자 강구조 기둥 */
function LatticeColumn(props: { x: number; top: number; bottom: number; w: number; c: Record<Role, string>; fill: string }) {
  const { x, top, bottom, w, c, fill } = props;
  const n = Math.max(4, Math.round((bottom - top) / 34));
  const step = (bottom - top) / n;
  return (
    <g>
      <rect x={x - w / 2} y={top} width={3.4} height={bottom - top} fill={fill} />
      <rect x={x + w / 2 - 3.4} y={top} width={3.4} height={bottom - top} fill={fill} />
      {Array.from({ length: n }).map((_, i) => (
        <g key={i}>
          <path
            d={`M${x - w / 2 + 2} ${top + i * step} L${x + w / 2 - 2} ${top + (i + 1) * step}`}
            stroke={fill} strokeWidth={2} fill="none"
          />
          <path
            d={`M${x + w / 2 - 2} ${top + i * step} L${x - w / 2 + 2} ${top + (i + 1) * step}`}
            stroke={fill} strokeWidth={2} fill="none"
          />
          <rect x={x - w / 2} y={top + i * step} width={w} height={2} fill={fill} />
        </g>
      ))}
      <rect x={x - w / 2 - 4} y={bottom - 5} width={w + 8} height={6} fill={c.steelDk} />
    </g>
  );
}

/** 주변압기 */
function Transformer(props: {
  x: number; base: number; w: number; h: number; s: number;
  c: Record<Role, string>; grad: string; detail?: boolean;
}) {
  const { x, base, w, h, s, c, grad, detail = true } = props;
  const top = base - h;
  const fins = Math.round(11 * s) + 6;
  return (
    <g>
      {/* 방열기 (좌) */}
      <g>
        <rect x={x - 34 * s} y={top + h * 0.16} width={34 * s} height={h * 0.66} fill={c.tank} />
        {Array.from({ length: fins }).map((_, i) => (
          <rect key={i} x={x - 33 * s} y={top + h * 0.17 + i * ((h * 0.64) / fins)} width={33 * s} height={(h * 0.64) / fins - 1.4}
            fill={c.steelDk} opacity={0.55} />
        ))}
        <rect x={x - 36 * s} y={top + h * 0.16} width={5 * s} height={h * 0.66} fill={c.tank} />
        <rect x={x - 36 * s} y={top + h * 0.16} width={1.6} height={h * 0.66} fill={c.hi} opacity={0.2} />
      </g>
      {/* 방열기 (우) */}
      <g>
        <rect x={x + w} y={top + h * 0.16} width={34 * s} height={h * 0.66} fill={c.tank} />
        {Array.from({ length: fins }).map((_, i) => (
          <rect key={i} x={x + w} y={top + h * 0.17 + i * ((h * 0.64) / fins)} width={33 * s} height={(h * 0.64) / fins - 1.4}
            fill={c.steelDk} opacity={0.55} />
        ))}
        <rect x={x + w + 31 * s} y={top + h * 0.16} width={5 * s} height={h * 0.66} fill={c.tank} />
      </g>

      {/* 본체 탱크 */}
      <rect x={x} y={top} width={w} height={h} rx={3} fill={`url(#${grad})`} />
      <rect x={x} y={top} width={w} height={h} rx={3} fill={c.tank} opacity={0.25} />
      <rect x={x} y={top} width={2.4} height={h} fill={c.hi} opacity={0.22} />
      <rect x={x} y={top} width={w} height={2.4} fill={c.hi} opacity={0.22} />
      {/* 보강 리브 */}
      {[0.22, 0.5, 0.78].map((f, i) => (
        <rect key={i} x={x + w * f} y={top + 4} width={3} height={h - 8} fill={c.steelDk} opacity={0.35} />
      ))}
      <rect x={x + 4} y={top + h * 0.72} width={w - 8} height={2} fill={c.steelDk} opacity={0.4} />

      {/* 콘서베이터 */}
      <g>
        <rect x={x + w * 0.14} y={top - 26 * s} width={w * 0.72} height={20 * s} rx={10 * s} fill={c.tank} />
        <rect x={x + w * 0.14} y={top - 26 * s} width={w * 0.72} height={5 * s} rx={2.5 * s} fill={c.hi} opacity={0.16} />
        <rect x={x + w * 0.24} y={top - 7 * s} width={4} height={8 * s} fill={c.tank} />
        <rect x={x + w * 0.74} y={top - 7 * s} width={4} height={8 * s} fill={c.tank} />
        {detail && <circle cx={x + w * 0.14 + 5 * s} cy={top - 16 * s} r={3.4 * s} fill={c.edge} opacity={0.8} />}
      </g>

      {/* HV 부싱 3상 */}
      {[0.2, 0.5, 0.8].map((f, i) => {
        const bx = x + w * f;
        const bh = (66 + i * 0) * s;
        const bTop = top - 30 * s - bh;
        const sheds = Math.round(8 * Math.min(1.3, s)) + 2;
        return (
          <g key={i}>
            <rect x={bx - 6 * s} y={top - 34 * s} width={12 * s} height={9 * s} fill={c.steelDk} />
            <rect x={bx - 2.4 * s} y={bTop} width={4.8 * s} height={bh} fill={c.porc} />
            {Array.from({ length: sheds }).map((_, k) => {
              const yy = bTop + 6 * s + k * ((bh - 8 * s) / sheds);
              const rx = (3.4 + (k / sheds) * 5.2) * s;
              return (
                <g key={k}>
                  <ellipse cx={bx} cy={yy} rx={rx} ry={1.7 * s} fill={c.porc} />
                  <ellipse cx={bx} cy={yy - 0.7 * s} rx={rx} ry={1.3 * s} fill={c.hi} opacity={0.3} />
                </g>
              );
            })}
            <circle cx={bx} cy={bTop - 2 * s} r={3.6 * s} fill={c.steelDk} />
            <rect x={bx - 1} y={bTop - 8 * s} width={2} height={7 * s} fill={c.steelDk} />
          </g>
        );
      })}

      {/* LV 부싱 (측면 소형) */}
      {detail && [0.34, 0.5, 0.66].map((f, i) => (
        <g key={i}>
          <rect x={x + w + 34 * s + 2} y={top + h * (f - 0.03)} width={16 * s} height={5 * s} fill={c.porc} />
          <ellipse cx={x + w + 34 * s + 18 * s} cy={top + h * f} rx={2.4 * s} ry={5 * s} fill={c.porc} />
        </g>
      ))}

      {/* 냉각팬 */}
      {detail && [0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={x + w * (0.2 + i * 0.3)} cy={base + 9 * s} r={8 * s} fill={c.steelDk} />
          <circle cx={x + w * (0.2 + i * 0.3)} cy={base + 9 * s} r={8 * s} fill="none" stroke={c.edge} strokeWidth={0.9} opacity={0.5} />
          {[0, 1, 2, 3].map((k) => (
            <line key={k}
              x1={x + w * (0.2 + i * 0.3)} y1={base + 9 * s}
              x2={x + w * (0.2 + i * 0.3) + Math.cos((k * Math.PI) / 2 + 0.5) * 7 * s}
              y2={base + 9 * s + Math.sin((k * Math.PI) / 2 + 0.5) * 7 * s}
              stroke={c.edge} strokeWidth={1.4} opacity={0.45} />
          ))}
        </g>
      ))}

      {/* 대차 / 기초 */}
      <rect x={x - 40 * s} y={base} width={w + 80 * s} height={7 * s} fill={c.steelDk} />
      <rect x={x - 46 * s} y={base + 7 * s} width={w + 92 * s} height={5 * s} fill={c.gnd1} opacity={0.7} />
    </g>
  );
}

export function SubstationYard({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const raw = useId();
  const u = raw.replace(/[^a-zA-Z0-9]/g, '');
  const c = PALETTE[tone];
  const id = (n: string) => `${u}-${n}`;
  const url = (n: string) => `url(#${u}-${n})`;
  const soft = tone === 'light' || tone === 'warm';
  const R = rand(1337);

  const gantryX = [90, 268, 446, 624, 802, 980, 1158];

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
        <linearGradient id={id('sky')} x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor={c.sky0} />
          <stop offset="52%" stopColor={c.sky1} />
          <stop offset="88%" stopColor={c.sky2} />
          <stop offset="100%" stopColor={c.sky2} />
        </linearGradient>
        <radialGradient id={id('sun')} cx="0.72" cy="0.78" r="0.55">
          <stop offset="0%" stopColor={c.accent} stopOpacity={soft ? 0.16 : 0.34} />
          <stop offset="100%" stopColor={c.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('tank')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={c.steel} />
          <stop offset="26%" stopColor={c.steel} />
          <stop offset="62%" stopColor={c.tank} />
          <stop offset="100%" stopColor={c.steelDk} />
        </linearGradient>
        <linearGradient id={id('gnd')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.gnd0} />
          <stop offset="100%" stopColor={c.gnd1} />
        </linearGradient>
        <linearGradient id={id('haze')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.sky2} stopOpacity="0" />
          <stop offset="100%" stopColor={c.sky2} stopOpacity={soft ? 0.6 : 0.42} />
        </linearGradient>
        <radialGradient id={id('vig')} cx="0.5" cy="0.44" r="0.78">
          <stop offset="55%" stopColor={c.gnd1} stopOpacity="0" />
          <stop offset="100%" stopColor={c.gnd1} stopOpacity={soft ? 0.16 : 0.52} />
        </radialGradient>
        <filter id={id('blur')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id={id('blur2')} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .${u}-bk { animation: ${u}-bk 4.4s ease-in-out infinite; }
          .${u}-bk2 { animation: ${u}-bk 6.1s ease-in-out infinite; animation-delay: -2.6s; }
          @keyframes ${u}-bk { 0%,48% { opacity: 1 } 56%,94% { opacity: .14 } 100% { opacity: 1 } }
        }
      `}</style>

      {/* ── 하늘 ── */}
      <rect width="1200" height="800" fill={url('sky')} />
      <rect width="1200" height="800" fill={url('sun')} />
      <g opacity={soft ? 0.55 : 0.34}>
        {Array.from({ length: 8 }).map((_, i) => {
          const y = 90 + i * 52 + R() * 24;
          const w = 300 + R() * 560;
          const x = -60 + R() * 900;
          return <ellipse key={i} cx={x + w / 2} cy={y} rx={w / 2} ry={7 + R() * 11} fill={c.hi} opacity={0.05 + (i / 8) * 0.14} filter={url('blur')} />;
        })}
      </g>

      {/* ── 원경: 능선 + 송전철탑 ── */}
      <g opacity={soft ? 0.42 : 0.55}>
        <path d="M0 500 L120 476 L210 492 L320 462 L430 490 L540 470 L660 494 L790 468 L900 492 L1040 472 L1200 494 L1200 560 L0 560Z" fill={c.far} />
      </g>
      <g opacity={soft ? 0.4 : 0.5}>
        {[130, 1080].map((tx, i) => {
          const th = i === 0 ? 250 : 210;
          return (
            <g key={tx}>
              <path d={`M${tx - 26} 520 L${tx - 7} ${520 - th} L${tx + 7} ${520 - th} L${tx + 26} 520`} stroke={c.far} strokeWidth={3.4} fill="none" />
              {Array.from({ length: 9 }).map((_, k) => {
                const t = k / 9;
                const yy = 520 - th * t;
                const hw = 26 - 19 * t;
                return <path key={k} d={`M${tx - hw} ${yy} h${hw * 2}`} stroke={c.far} strokeWidth={1.6} fill="none" opacity={0.8} />;
              })}
              <path d={`M${tx - 44} ${520 - th * 0.82} h88 M${tx - 34} ${520 - th * 0.94} h68`} stroke={c.far} strokeWidth={3} fill="none" />
              {[-40, -22, 22, 40].map((dx) => (
                <path key={dx} d={`M${tx + dx} ${520 - th * 0.82} v14`} stroke={c.far} strokeWidth={1.4} fill="none" />
              ))}
            </g>
          );
        })}
        {/* 가공 송전선 */}
        {[0.8, 0.86, 0.92].map((f, i) => (
          <path key={i} d={`M130 ${520 - 250 * f} Q600 ${520 - 250 * f + 74 + i * 6} 1080 ${520 - 210 * f}`} stroke={c.far} strokeWidth={1.3} fill="none" opacity={0.75} />
        ))}
      </g>

      <rect x="0" y="400" width="1200" height="180" fill={url('haze')} />

      {/* 가공 인입 선로 (상단 프레이밍) */}
      <g opacity={soft ? 0.28 : 0.55}>
        {[0, 1, 2].map((i) => (
          <path key={`l${i}`} d={`M-20 ${28 + i * 30} Q160 ${86 + i * 26} 268 ${196 + i * 2}`}
            stroke={c.steelDk} strokeWidth={1.6} fill="none" />
        ))}
        {[0, 1, 2].map((i) => (
          <path key={`r${i}`} d={`M1220 ${24 + i * 30} Q1040 ${84 + i * 26} 980 ${196 + i * 2}`}
            stroke={c.steelDk} strokeWidth={1.6} fill="none" />
        ))}
      </g>

      {/* ── 중경: 가대(gantry) + 부스바 + 애자련 ── */}
      <g>
        {/* 상부 빔 */}
        <g>
          <rect x="70" y="196" width="1110" height="6" fill={c.steel} />
          <rect x="70" y="230" width="1110" height="6" fill={c.steel} />
          {Array.from({ length: 34 }).map((_, i) => (
            <path key={i} d={`M${76 + i * 32} 202 l32 28 M${108 + i * 32} 202 l-32 28`} stroke={c.steel} strokeWidth={1.5} fill="none" opacity={0.75} />
          ))}
          <rect x="70" y="196" width="1110" height="1.6" fill={c.hi} opacity={0.22} />
        </g>
        {/* 기둥 */}
        {gantryX.map((x) => (
          <LatticeColumn key={x} x={x} top={202} bottom={614} w={26} c={c} fill={c.steel} />
        ))}

        {/* 애자련 + 부스바 (상단 인출) */}
        {gantryX.slice(0, 6).map((x, i) => {
          const x2 = gantryX[i + 1];
          const mx = (x + x2) / 2;
          return (
            <g key={i}>
              <InsulatorString x={mx - 44} y={236} n={9} s={1} c={c} />
              <InsulatorString x={mx + 44} y={236} n={9} s={1} c={c} />
              <path d={`M${mx - 44} 292 Q${mx} 316 ${mx + 44} 292`} stroke={c.steelDk} strokeWidth={2.6} fill="none" />
              <path d={`M${mx + 44} 292 Q${mx + 132} 318 ${mx + 220} 292`} stroke={c.steelDk} strokeWidth={2.2} fill="none" opacity={0.7} />
            </g>
          );
        })}

        {/* 수평 부스바 3단 */}
        {[330, 360, 390].map((y, i) => (
          <g key={y}>
            <path d={`M60 ${y} Q600 ${y + 16 + i * 3} 1180 ${y}`} stroke={c.steelDk} strokeWidth={3 - i * 0.4} fill="none" opacity={0.85} />
            <path d={`M60 ${y - 1.4} Q600 ${y + 14.6 + i * 3} 1180 ${y - 1.4}`} stroke={c.hi} strokeWidth={0.8} fill="none" opacity={0.14} />
          </g>
        ))}

        {/* 지지 애자 스탠드 (부스바 받침) */}
        {[268, 624, 980].map((x) => (
          <g key={x}>
            <rect x={x - 2} y={392} width={4} height={68} fill={c.steel} />
            <InsulatorString x={x} y={344} n={8} s={0.9} c={c} />
          </g>
        ))}

        {/* 단로기 스탠드 */}
        {[178, 356, 712, 890].map((x, i) => (
          <g key={x} opacity={0.95}>
            <rect x={x - 22} y={460} width={44} height={5} fill={c.steel} />
            {[-16, 0, 16].map((dx) => (
              <g key={dx}>
                <rect x={x + dx - 1.6} y={430} width={3.2} height={32} fill={c.steel} />
                {Array.from({ length: 5 }).map((_, k) => (
                  <ellipse key={k} cx={x + dx} cy={434 + k * 6} rx={4.6} ry={1.6} fill={c.porc} />
                ))}
                <path d={`M${x + dx} 430 l${i % 2 ? 12 : -12} -18`} stroke={c.steelDk} strokeWidth={2.2} fill="none" />
              </g>
            ))}
            <rect x={x - 5} y={465} width={10} height={150} fill={c.steel} />
            <rect x={x - 14} y={560} width={28} height={34} rx={2} fill={c.steelDk} />
            <rect x={x - 10} y={566} width={20} height={7} fill={c.edge} opacity={0.5} />
          </g>
        ))}

        {/* 피뢰기 세트 */}
        {[500, 1058].map((x) => (
          <g key={x}>
            {[-14, 0, 14].map((dx) => (
              <g key={dx}>
                <rect x={x + dx - 2} y={470} width={4} height={110} fill={c.porc} opacity={0.9} />
                {Array.from({ length: 12 }).map((_, k) => (
                  <ellipse key={k} cx={x + dx} cy={476 + k * 9} rx={5.6} ry={2} fill={c.porc} />
                ))}
                <rect x={x + dx - 3} y={462} width={6} height={9} fill={c.steelDk} />
              </g>
            ))}
            <rect x={x - 24} y={580} width={48} height={7} fill={c.steel} />
            <rect x={x - 20} y={587} width={40} height={30} fill={c.steelDk} opacity={0.8} />
          </g>
        ))}
      </g>

      {/* ── 지면 ── */}
      <rect x="0" y="614" width="1200" height="186" fill={url('gnd')} />
      <rect x="0" y="614" width="1200" height="1.6" fill={c.hi} opacity={0.14} />
      {/* 자갈 텍스처 */}
      <g opacity={soft ? 0.3 : 0.22}>
        {Array.from({ length: 200 }).map((_, i) => {
          const gy = 618 + R() * 178;
          return <rect key={i} x={R() * 1200} y={gy} width={1 + R() * 3.4} height={0.8 + R() * 1.6}
            fill={R() > 0.5 ? c.hi : c.gnd1} opacity={0.16 + R() * 0.35} />;
        })}
      </g>
      {/* 케이블 트렌치 */}
      <g opacity={0.5}>
        <path d="M-20 700 Q400 686 1220 712" stroke={c.gnd1} strokeWidth={11} fill="none" />
        <path d="M-20 700 Q400 686 1220 712" stroke={c.hi} strokeWidth={1} fill="none" opacity={0.16} />
      </g>

      {/* ── 전경: 주변압기 ── */}
      <g>
        {/* 후방 소형 변압기 */}
        <g opacity={0.92}>
          <Transformer x={150} base={652} w={132} h={104} s={0.7} c={c} grad={id('tank')} detail={false} />
        </g>
        {/* 접지/그림자 */}
        <ellipse cx="224" cy="666" rx="164" ry="13" fill={c.gnd1} opacity={soft ? 0.24 : 0.5} filter={url('blur')} />
        <ellipse cx="770" cy="752" rx="320" ry="22" fill={c.gnd1} opacity={soft ? 0.28 : 0.6} filter={url('blur')} />

        {/* 메인 변압기 */}
        <Transformer x={628} base={736} w={286} h={192} s={1.44} c={c} grad={id('tank')} />

        {/* 제어반 캐비닛 */}
        <g>
          <rect x="1004" y="646" width="86" height="86" rx={2} fill={c.steel} />
          <rect x="1004" y="646" width="86" height="4" fill={c.hi} opacity={0.25} />
          <rect x="1010" y="656" width="74" height="44" fill={c.steelDk} opacity={0.6} />
          <rect x="1014" y="660" width="30" height="14" fill={c.accent} opacity={0.55} />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={1014 + (i % 3) * 22} y={680 + Math.floor(i / 3) * 9} width={14} height={4} fill={c.edge} opacity={0.5} />
          ))}
          <circle cx="1078" cy="660" r="2.6" fill={c.accent} className={`${u}-bk2`} />
          <rect x="1004" y="732" width="86" height="6" fill={c.steelDk} />
        </g>

        {/* 전경 펜스 */}
        <g opacity={soft ? 0.42 : 0.55}>
          {[762, 776, 790].map((y) => (
            <rect key={y} x="0" y={y} width="1200" height="1.6" fill={c.steelDk} />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <g key={i}>
              <rect x={i * 118 + 20} y="742" width="5" height="58" fill={c.steelDk} />
              <path d={`M${i * 118 + 22.5} 748 l-13 -12 M${i * 118 + 22.5} 748 l13 -12`}
                stroke={c.steelDk} strokeWidth={2} fill="none" />
            </g>
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <g key={`h${i}`} opacity={0.18}>
              <path d={`M${i * 42} 762 l42 30`} stroke={c.steelDk} strokeWidth={0.9} fill="none" />
              <path d={`M${i * 42 + 42} 762 l-42 30`} stroke={c.steelDk} strokeWidth={0.9} fill="none" />
            </g>
          ))}
        </g>
      </g>

      {/* 항공장애등 / 표시등 */}
      <g>
        <g className={`${u}-bk`}>
          <circle cx="90" cy="200" r="8" fill={c.accent} opacity={0.35} filter={url('blur2')} />
          <circle cx="90" cy="200" r="2.4" fill={c.accent} />
        </g>
        <g className={`${u}-bk2`}>
          <circle cx="1158" cy="200" r="8" fill={c.accent} opacity={0.35} filter={url('blur2')} />
          <circle cx="1158" cy="200" r="2.4" fill={c.accent} />
        </g>
      </g>

      <rect width="1200" height="800" fill={url('vig')} />
    </svg>
  );
}

export default SubstationYard;
