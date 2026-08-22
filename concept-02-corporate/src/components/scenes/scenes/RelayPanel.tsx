// EGO shared scene artwork — 실제 현장 사진 수령 시 교체 가능한 일러스트레이션
import { useId } from 'react';

type Tone = 'dark' | 'light' | 'navy' | 'warm';

type Role =
  | 'plate0' | 'plate1' | 'bezel' | 'face'
  | 'lcd' | 'lcdInk' | 'ledOk' | 'ledAlarm' | 'ledOff'
  | 'btn' | 'edge' | 'accent' | 'hi' | 'shadow';

const PALETTE: Record<Tone, Record<Role, string>> = {
  dark: {
    plate0: '#171B20', plate1: '#2C333A', bezel: '#0B0D10', face: '#232A31',
    lcd: '#0E1A20', lcdInk: '#AFC6D2', ledOk: '#4ADE80', ledAlarm: '#F26B1D', ledOff: '#39424A',
    btn: '#333C44', edge: '#5D6975', accent: '#F26B1D', hi: '#D6DEE5', shadow: '#05070A',
  },
  light: {
    plate0: '#BFCCD9', plate1: '#EAF0F6', bezel: '#7F92A3', face: '#E2EAF1',
    lcd: '#F2F8FD', lcdInk: '#0A3D91', ledOk: '#1E9E6A', ledAlarm: '#D9741C', ledOff: '#A9B8C5',
    btn: '#C2CFDB', edge: '#687E90', accent: '#0A3D91', hi: '#FFFFFF', shadow: '#6E8092',
  },
  navy: {
    plate0: '#08111C', plate1: '#1B3149', bezel: '#040911', face: '#122234',
    lcd: '#06131E', lcdInk: '#7DD3FC', ledOk: '#2DD4BF', ledAlarm: '#FBBF24', ledOff: '#25405A',
    btn: '#1D344B', edge: '#457099', accent: '#38BDF8', hi: '#CFEBFB', shadow: '#01040A',
  },
  warm: {
    plate0: '#C8BEAF', plate1: '#EFE9E0', bezel: '#847B70', face: '#E4DED4',
    lcd: '#F5F1EA', lcdInk: '#2B2622', ledOk: '#5A6B4E', ledAlarm: '#8A5A32', ledOff: '#B0A79A',
    btn: '#C6BDB0', edge: '#7A7167', accent: '#241F1B', hi: '#FFFFFF', shadow: '#8E8478',
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

interface RelayProps {
  x: number; y: number; w: number; h: number;
  c: Record<Role, string>; r: () => number;
  variant: 0 | 1 | 2;
  faceGrad: string; lcdGrad: string;
  alarm?: boolean;
}

/** 보호계전기 1대 */
function Relay({ x, y, w, h, c, r, variant, faceGrad, lcdGrad, alarm }: RelayProps) {
  const lcdW = w * (variant === 2 ? 0.42 : 0.46);
  const lcdH = h * 0.42;
  const lcdX = x + w * (variant === 2 ? 0.3 : 0.28);
  const lcdY = y + h * 0.12;

  return (
    <g>
      {/* 그림자 */}
      <rect x={x + 3} y={y + 5} width={w} height={h} rx="4" fill={c.shadow} opacity={0.45} />
      {/* 베젤 */}
      <rect x={x} y={y} width={w} height={h} rx="4" fill={c.bezel} />
      {/* 전면 페이스 */}
      <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} rx="2.5" fill={`url(#${faceGrad})`} />
      <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} rx="2.5" fill={c.face} opacity={0.35} />
      <rect x={x + 4} y={y + 4} width={w - 8} height={1.6} fill={c.hi} opacity={0.28} />
      <rect x={x + 4} y={y + h - 6} width={w - 8} height={1.6} fill={c.shadow} opacity={0.4} />

      {/* 코너 스크류 */}
      {[[x + 11, y + 11], [x + w - 11, y + 11], [x + 11, y + h - 11], [x + w - 11, y + h - 11]].map(([sx, sy], i) => (
        <g key={i}>
          <circle cx={sx} cy={sy} r="4.2" fill={c.bezel} opacity={0.7} />
          <circle cx={sx} cy={sy} r="3" fill={c.edge} opacity={0.55} />
          <rect x={sx - 2.2} y={sy - 0.6} width={4.4} height={1.2} fill={c.shadow} opacity={0.7} />
        </g>
      ))}

      {/* 상단 식별 스트립 (추상) */}
      <rect x={x + 22} y={y + 8} width={w - 44} height={5} fill={c.accent} opacity={0.4} />

      {/* LED 컬럼 (좌) */}
      <g>
        <rect x={x + 16} y={lcdY} width={w * 0.2} height={lcdH + h * 0.1} fill={c.bezel} opacity={0.35} />
        {Array.from({ length: 8 }).map((_, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const cx = x + 24 + col * 20;
          const cy = lcdY + 10 + row * 15;
          const v = r();
          const fill = alarm && i === 3 ? c.ledAlarm : v > 0.78 ? c.ledOk : v > 0.62 ? c.ledAlarm : c.ledOff;
          const on = fill !== c.ledOff;
          return (
            <g key={i}>
              {on && <circle cx={cx} cy={cy} r="5.6" fill={fill} opacity={0.22} />}
              <circle cx={cx} cy={cy} r="3.1" fill={fill} opacity={on ? 0.98 : 0.75} />
              <circle cx={cx - 0.9} cy={cy - 0.9} r="1" fill={c.hi} opacity={on ? 0.5 : 0.18} />
              <rect x={cx + 5.5} y={cy - 1} width={9} height={1.7} fill={c.edge} opacity={0.3} />
            </g>
          );
        })}
      </g>

      {/* LCD */}
      <g>
        <rect x={lcdX - 3} y={lcdY - 3} width={lcdW + 6} height={lcdH + 6} rx="2" fill={c.bezel} />
        <rect x={lcdX} y={lcdY} width={lcdW} height={lcdH} fill={c.lcd} />
        <rect x={lcdX} y={lcdY} width={lcdW} height={lcdH} fill={`url(#${lcdGrad})`} />
        {variant === 0 && (
          <g>
            {/* 미니 단선도 */}
            <rect x={lcdX + 6} y={lcdY + 8} width={lcdW - 12} height={1.6} fill={c.lcdInk} opacity={0.8} />
            {[0.22, 0.5, 0.78].map((f, i) => {
              const bx = lcdX + 6 + (lcdW - 12) * f;
              return (
                <g key={i}>
                  <rect x={bx} y={lcdY + 9} width={1.2} height={lcdH * 0.2} fill={c.lcdInk} opacity={0.7} />
                  <rect x={bx - 3.4} y={lcdY + 9 + lcdH * 0.2} width={7} height={7} fill="none" stroke={c.lcdInk} strokeWidth={1.1} opacity={0.85} />
                  <rect x={bx} y={lcdY + 16 + lcdH * 0.2} width={1.2} height={lcdH * 0.18} fill={c.lcdInk} opacity={0.6} />
                </g>
              );
            })}
            <rect x={lcdX + 6} y={lcdY + lcdH - 12} width={(lcdW - 12) * 0.62} height={2.2} fill={c.lcdInk} opacity={0.45} />
            <rect x={lcdX + 6} y={lcdY + lcdH - 7} width={(lcdW - 12) * 0.38} height={2.2} fill={c.lcdInk} opacity={0.28} />
          </g>
        )}
        {variant === 1 && (
          <g>
            {/* 수치 표시 (추상 세그먼트) */}
            {[0, 1, 2].map((row) => (
              <g key={row}>
                <rect x={lcdX + 6} y={lcdY + 7 + row * 13} width={lcdW * 0.28} height={2.4} fill={c.lcdInk} opacity={0.35} />
                {Array.from({ length: 4 }).map((_, k) => (
                  <rect key={k} x={lcdX + lcdW * 0.42 + k * 9} y={lcdY + 5 + row * 13} width={5.6} height={8}
                    fill={c.lcdInk} opacity={0.55 + (k % 2) * 0.3} />
                ))}
              </g>
            ))}
            <rect x={lcdX + 6} y={lcdY + lcdH - 10} width={lcdW - 12} height={5} fill={c.lcdInk} opacity={0.12} />
            <rect x={lcdX + 6} y={lcdY + lcdH - 10} width={(lcdW - 12) * 0.7} height={5} fill={c.lcdInk} opacity={0.5} />
          </g>
        )}
        {variant === 2 && (
          <g>
            {/* 파형 */}
            <polyline
              points={Array.from({ length: 30 })
                .map((_, i) => {
                  const pxx = lcdX + 5 + (i * (lcdW - 10)) / 29;
                  const pyy = lcdY + lcdH * 0.42 + Math.sin(i * 0.72) * lcdH * 0.24;
                  return `${pxx.toFixed(1)},${pyy.toFixed(1)}`;
                })
                .join(' ')}
              fill="none" stroke={c.lcdInk} strokeWidth={1.4} opacity={0.9}
            />
            <polyline
              points={Array.from({ length: 30 })
                .map((_, i) => {
                  const pxx = lcdX + 5 + (i * (lcdW - 10)) / 29;
                  const pyy = lcdY + lcdH * 0.74 + Math.sin(i * 0.72 + 2.1) * lcdH * 0.16;
                  return `${pxx.toFixed(1)},${pyy.toFixed(1)}`;
                })
                .join(' ')}
              fill="none" stroke={c.accent} strokeWidth={1.2} opacity={0.75}
            />
            <rect x={lcdX} y={lcdY + lcdH * 0.42} width={lcdW} height={0.6} fill={c.lcdInk} opacity={0.2} />
          </g>
        )}
        {/* 유리 반사 */}
        <path d={`M${lcdX} ${lcdY + lcdH * 0.62} L${lcdX + lcdW * 0.55} ${lcdY} L${lcdX + lcdW} ${lcdY} L${lcdX + lcdW} ${lcdY + lcdH * 0.1} L${lcdX} ${lcdY + lcdH * 0.8}Z`}
          fill={c.hi} opacity={0.055} />
      </g>

      {/* 키패드 */}
      <g>
        {/* 4방향 클러스터 */}
        <g transform={`translate(${x + w - 46} ${lcdY + 22})`}>
          <circle cx="0" cy="0" r="21" fill={c.btn} />
          <circle cx="0" cy="0" r="21" fill={c.shadow} opacity={0.18} />
          <circle cx="0" cy="0" r="8.4" fill={c.face} />
          <circle cx="0" cy="0" r="8.4" fill={c.hi} opacity={0.08} />
          {[0, 1, 2, 3].map((i) => {
            const a = (i * Math.PI) / 2;
            return (
              <path key={i}
                d={`M${Math.cos(a) * 12 - Math.sin(a) * 3.4} ${Math.sin(a) * 12 + Math.cos(a) * 3.4} L${Math.cos(a) * 17} ${Math.sin(a) * 17} L${Math.cos(a) * 12 + Math.sin(a) * 3.4} ${Math.sin(a) * 12 - Math.cos(a) * 3.4}Z`}
                fill={c.edge} opacity={0.55} />
            );
          })}
        </g>
        {/* 기능 버튼 */}
        {Array.from({ length: 6 }).map((_, i) => {
          const bx = x + w * 0.28 + (i % 3) * (w * 0.13);
          const by = y + h * 0.68 + Math.floor(i / 3) * 22;
          return (
            <g key={i}>
              <rect x={bx} y={by} width={w * 0.1} height={15} rx="2.5" fill={c.btn} />
              <rect x={bx} y={by} width={w * 0.1} height={4} rx="2" fill={c.hi} opacity={0.14} />
              <rect x={bx + 4} y={by + 6} width={w * 0.1 - 8} height={2.2} fill={c.edge} opacity={0.45} />
            </g>
          );
        })}
        {/* 리셋 버튼 (강조) */}
        <circle cx={x + w - 30} cy={y + h - 30} r="9.5" fill={c.accent} opacity={0.85} />
        <circle cx={x + w - 30} cy={y + h - 30} r="9.5" fill="none" stroke={c.bezel} strokeWidth={2} />
        <circle cx={x + w - 33} cy={y + h - 33} r="2.6" fill={c.hi} opacity={0.35} />
      </g>

      {/* 하단 포트 / 라벨 슬롯 */}
      <g>
        <rect x={x + 16} y={y + h - 34} width={w * 0.15} height={17} rx="2" fill={c.bezel} />
        <rect x={x + 20} y={y + h - 30} width={w * 0.15 - 8} height={9} rx="1" fill={c.edge} opacity={0.4} />
        <rect x={x + w * 0.28} y={y + h - 26} width={w * 0.3} height={8} fill={c.bezel} opacity={0.45} />
      </g>
    </g>
  );
}

export function RelayPanel({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const raw = useId();
  const u = raw.replace(/[^a-zA-Z0-9]/g, '');
  const c = PALETTE[tone];
  const id = (n: string) => `${u}-${n}`;
  const url = (n: string) => `url(#${u}-${n})`;
  const soft = tone === 'light' || tone === 'warm';
  const R = rand(7788);

  const cols = [40, 336, 632, 928];

  return (
    <svg
      viewBox="0 0 1200 900"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id('plate')} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor={c.plate1} />
          <stop offset="38%" stopColor={c.plate0} />
          <stop offset="100%" stopColor={c.plate0} />
        </linearGradient>
        <linearGradient id={id('face')} x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor={c.plate1} />
          <stop offset="45%" stopColor={c.face} />
          <stop offset="100%" stopColor={c.bezel} />
        </linearGradient>
        <linearGradient id={id('lcdg')} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor={c.lcdInk} stopOpacity={soft ? 0.05 : 0.1} />
          <stop offset="100%" stopColor={c.lcdInk} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id('rail')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.plate1} />
          <stop offset="40%" stopColor={c.plate0} />
          <stop offset="100%" stopColor={c.shadow} />
        </linearGradient>
        <linearGradient id={id('sheen')} x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor={c.hi} stopOpacity="0" />
          <stop offset="42%" stopColor={c.hi} stopOpacity={soft ? 0.14 : 0.07} />
          <stop offset="58%" stopColor={c.hi} stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id('lamp')} cx="0.5" cy="0" r="0.9">
          <stop offset="0%" stopColor={c.hi} stopOpacity={soft ? 0.3 : 0.16} />
          <stop offset="100%" stopColor={c.hi} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('vig')} cx="0.5" cy="0.44" r="0.76">
          <stop offset="48%" stopColor={c.shadow} stopOpacity="0" />
          <stop offset="100%" stopColor={c.shadow} stopOpacity={soft ? 0.22 : 0.65} />
        </radialGradient>
        <filter id={id('blur')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .${u}-a1 { animation: ${u}-a 1.9s steps(1,end) infinite; }
          .${u}-a2 { animation: ${u}-a 3.1s steps(1,end) infinite; animation-delay: -1.2s; }
          .${u}-a3 { animation: ${u}-a 4.6s steps(1,end) infinite; animation-delay: -2.8s; }
          @keyframes ${u}-a { 0%,54% { opacity: 1 } 58%,100% { opacity: .18 } }
        }
      `}</style>

      {/* ── 패널 플레이트 ── */}
      <rect width="1200" height="900" fill={url('plate')} />
      {/* 헤어라인 (브러시드 메탈) */}
      <g opacity={soft ? 0.5 : 0.4}>
        {Array.from({ length: 260 }).map((_, i) => {
          const x = R() * 1200;
          return <rect key={i} x={x} y="0" width={0.6 + R() * 1.4} height="900" fill={R() > 0.5 ? c.hi : c.shadow} opacity={0.015 + R() * 0.05} />;
        })}
      </g>
      <rect width="1200" height="360" fill={url('lamp')} />

      {/* 마운팅 레일 */}
      {[62, 358, 654, 862].map((y, i) => (
        <g key={i}>
          <rect x="0" y={y - 22} width="1200" height="22" fill={url('rail')} />
          <rect x="0" y={y - 22} width="1200" height="1.8" fill={c.hi} opacity={0.2} />
          <rect x="0" y={y - 2} width="1200" height="2" fill={c.shadow} opacity={0.5} />
          {Array.from({ length: 24 }).map((_, k) => (
            <circle key={k} cx={26 + k * 50} cy={y - 11} r="2.8" fill={c.shadow} opacity={0.55} />
          ))}
        </g>
      ))}

      {/* ── 계전기 1행 ── */}
      {cols.map((x, i) => (
        <Relay key={`r0-${x}`} x={x} y={80} w={232} h={252} c={c} r={R}
          variant={(i % 3) as 0 | 1 | 2} faceGrad={id('face')} lcdGrad={id('lcdg')} alarm={i === 2} />
      ))}
      {/* ── 계전기 2행 ── */}
      {cols.map((x, i) => (
        <Relay key={`r1-${x}`} x={x} y={376} w={232} h={252} c={c} r={R}
          variant={((i + 2) % 3) as 0 | 1 | 2} faceGrad={id('face')} lcdGrad={id('lcdg')} alarm={i === 0} />
      ))}

      {/* ── 3행: 시험단자 / MCB / 단자대 ── */}
      <g>
        {/* 시험용 단자 블록 */}
        <g>
          <rect x="40" y="674" width="360" height="112" rx="3" fill={c.bezel} />
          <rect x="45" y="679" width="350" height="102" rx="2" fill={url('face')} />
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i}>
              <rect x={56 + i * 34} y={692} width={24} height={76} rx="2" fill={c.btn} />
              <rect x={56 + i * 34} y={692} width={24} height={3} fill={c.hi} opacity={0.16} />
              <circle cx={68 + i * 34} cy={712} r="7.5" fill={c.plate0} />
              <circle cx={68 + i * 34} cy={712} r="7.5" fill="none" stroke={c.edge} strokeWidth={1} opacity={0.5} />
              <rect x={64 + i * 34} y={708 + (i % 3) * 2} width={8} height={2.4} fill={c.shadow} opacity={0.75}
                transform={`rotate(${(i * 37) % 90} ${68 + i * 34} ${712})`} />
              <rect x={60 + i * 34} y={732} width={16} height={4} fill={c.edge} opacity={0.35} />
              <rect x={60 + i * 34} y={742} width={16} height={4} fill={c.edge} opacity={0.22} />
              <circle cx={68 + i * 34} cy={758} r="3" fill={i % 4 === 1 ? c.ledOk : c.ledOff} opacity={0.9} />
            </g>
          ))}
        </g>

        {/* MCB 열 */}
        <g>
          <rect x="424" y="674" width="404" height="112" rx="3" fill={c.bezel} />
          <rect x="429" y="679" width="394" height="102" rx="2" fill={url('face')} />
          <rect x="436" y="700" width="380" height="62" rx="2" fill={c.plate0} opacity={0.65} />
          {Array.from({ length: 16 }).map((_, i) => {
            const bx = 440 + i * 23.6;
            const on = R() > 0.32;
            return (
              <g key={i}>
                <rect x={bx} y="700" width={20} height={62} rx="1.5" fill={c.face} />
                <rect x={bx} y="700" width={20} height={2.4} fill={c.hi} opacity={0.2} />
                <rect x={bx + 2} y="706" width={16} height={26} rx="1" fill={c.bezel} opacity={0.55} />
                <rect x={bx + 5} y={on ? 708 : 720} width={10} height={11} rx="2" fill={on ? c.accent : c.edge} opacity={0.9} />
                <rect x={bx + 3} y="738" width={14} height={4} fill={c.edge} opacity={0.3} />
                <rect x={bx + 3} y="746" width={14} height={4} fill={c.edge} opacity={0.18} />
                <rect x={bx + 6} y="754" width={8} height={5} fill={c.plate0} opacity={0.9} />
              </g>
            );
          })}
        </g>

        {/* 단자대 + 배선 덕트 */}
        <g>
          <rect x="852" y="674" width="308" height="112" rx="3" fill={c.bezel} />
          <rect x="857" y="679" width="298" height="102" rx="2" fill={url('face')} />
          {/* 슬롯 배선 덕트 */}
          <rect x="866" y="688" width="280" height="34" fill={c.plate0} />
          {Array.from({ length: 22 }).map((_, i) => (
            <rect key={i} x={870 + i * 12.6} y="688" width={5} height={34} fill={c.bezel} opacity={0.5} />
          ))}
          <rect x="866" y="688" width="280" height="2" fill={c.hi} opacity={0.16} />
          {/* 단자 열 */}
          {Array.from({ length: 26 }).map((_, i) => (
            <g key={i}>
              <rect x={868 + i * 10.7} y="730" width={8.4} height={44} fill={c.btn} />
              <rect x={868 + i * 10.7} y="730" width={8.4} height={2} fill={c.hi} opacity={0.14} />
              <circle cx={872.2 + i * 10.7} cy={742} r="2.7" fill={c.plate0} />
              <rect x={870 + i * 10.7} y={741} width={4.6} height={1.4} fill={c.shadow} opacity={0.7} />
              <rect x={870 + i * 10.7} y="760" width={4.6} height={10} fill={c.edge} opacity={0.35} />
            </g>
          ))}
        </g>
      </g>

      {/* ── 배선 (측면 진입) ── */}
      <g opacity={soft ? 0.55 : 0.75}>
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i}
            d={`M-10 ${640 + i * 8} C ${120 + i * 30} ${610 + i * 6}, ${180} ${688 + i * 5}, ${40 + i * 6} ${790}`}
            stroke={i % 3 === 0 ? c.accent : c.edge} strokeWidth={2.2} fill="none"
            opacity={i % 3 === 0 ? 0.4 : 0.28} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={`b${i}`}
            d={`M1210 ${630 + i * 9} C ${1080 - i * 24} ${600 + i * 8}, ${1040} ${690 + i * 6}, ${1150 - i * 7} ${800}`}
            stroke={c.edge} strokeWidth={2} fill="none" opacity={0.24} />
        ))}
      </g>

      {/* 하단 마감 레일 */}
      <rect x="0" y="800" width="1200" height="100" fill={url('rail')} />
      <rect x="0" y="800" width="1200" height="2" fill={c.hi} opacity={0.18} />
      <g opacity={0.5}>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={30 + i * 100} y="828" width="46" height="8" rx="4" fill={c.shadow} opacity={0.4} />
        ))}
      </g>

      {/* 점멸 알람 LED (강조) */}
      <g>
        <g className={`${u}-a1`}>
          <circle cx="656" cy="152" r="9" fill={c.ledAlarm} opacity={0.4} filter={url('blur')} />
          <circle cx="656" cy="152" r="3.2" fill={c.ledAlarm} />
        </g>
        <g className={`${u}-a2`}>
          <circle cx="64" cy="463" r="9" fill={c.ledAlarm} opacity={0.4} filter={url('blur')} />
          <circle cx="64" cy="463" r="3.2" fill={c.ledAlarm} />
        </g>
        <g className={`${u}-a3`}>
          <circle cx="952" cy="167" r="8" fill={c.ledOk} opacity={0.35} filter={url('blur')} />
          <circle cx="952" cy="167" r="3" fill={c.ledOk} />
        </g>
      </g>

      {/* 광택 시트 + 비네트 */}
      <rect width="1200" height="900" fill={url('sheen')} />
      <rect width="1200" height="900" fill={url('vig')} />
    </svg>
  );
}

export default RelayPanel;
