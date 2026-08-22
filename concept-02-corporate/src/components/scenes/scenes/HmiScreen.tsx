// EGO shared scene artwork — 실제 현장 사진 수령 시 교체 가능한 일러스트레이션
import { useId } from 'react';

type Tone = 'dark' | 'light' | 'navy' | 'warm';

type Role =
  | 'room' | 'wall' | 'desk' | 'bezel'
  | 'screen0' | 'screen1' | 'line' | 'ink' | 'ink2'
  | 'ok' | 'warn' | 'accent' | 'hi' | 'glow';

const PALETTE: Record<Tone, Record<Role, string>> = {
  dark: {
    room: '#08090B', wall: '#14181C', desk: '#1A1F24', bezel: '#0D1013',
    screen0: '#0C1317', screen1: '#141D23', line: '#26333B', ink: '#C6D4DC', ink2: '#7A8B96',
    ok: '#4ADE80', warn: '#F26B1D', accent: '#F26B1D', hi: '#FFFFFF', glow: '#6E9AB8',
  },
  light: {
    room: '#DEE6ED', wall: '#F5F7F9', desk: '#CFD9E2', bezel: '#AFBCC7',
    screen0: '#FFFFFF', screen1: '#F0F4F8', line: '#D5DFE8', ink: '#12314F', ink2: '#6B8296',
    ok: '#1E9E6A', warn: '#D9741C', accent: '#0A3D91', hi: '#FFFFFF', glow: '#9EC0E4',
  },
  navy: {
    room: '#03060C', wall: '#0A1220', desk: '#0C1826', bezel: '#04080E',
    screen0: '#061220', screen1: '#0B1E2E', line: '#1B3A52', ink: '#CFEBFB', ink2: '#5A87A8',
    ok: '#2DD4BF', warn: '#FBBF24', accent: '#38BDF8', hi: '#FFFFFF', glow: '#38BDF8',
  },
  warm: {
    room: '#DFD7CB', wall: '#FAF8F5', desk: '#D2C9BD', bezel: '#9B9288',
    screen0: '#FAF8F5', screen1: '#F1EBE2', line: '#DCD4C8', ink: '#2B2622', ink2: '#7A7167',
    ok: '#5A6B4E', warn: '#8A5A32', accent: '#141414', hi: '#FFFFFF', glow: '#C9B79C',
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

type C = Record<Role, string>;

/** UI 패널 프레임 */
function Panel({ x, y, w, h, c, accentBar }: { x: number; y: number; w: number; h: number; c: C; accentBar?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill={c.screen1} />
      <rect x={x} y={y} width={w} height={h} rx="4" fill="none" stroke={c.line} strokeWidth={1} />
      <rect x={x} y={y} width={w} height={22} rx="4" fill={c.line} opacity={0.45} />
      <rect x={x} y={y + 18} width={w} height={4} fill={c.line} opacity={0.45} />
      <rect x={x + 10} y={y + 8} width={Math.min(64, w * 0.3)} height={5} rx="2.5" fill={c.ink} opacity={0.5} />
      {accentBar && <rect x={x + w - 34} y={y + 8} width={22} height={5} rx="2.5" fill={c.accent} opacity={0.7} />}
    </g>
  );
}

/** 게이지 타일 */
function Gauge({ cx, cy, r, val, c, warn }: { cx: number; cy: number; r: number; val: number; c: C; warn?: boolean }) {
  const a0 = Math.PI * 0.86;
  const a1 = Math.PI * 0.14;
  const a = a0 + (a1 - a0) * val;
  const p = (ang: number, rr: number) => `${(cx + Math.cos(ang) * rr).toFixed(1)} ${(cy - Math.sin(ang) * rr).toFixed(1)}`;
  return (
    <g>
      <path d={`M${p(a0, r)} A${r} ${r} 0 1 1 ${p(a1, r)}`} fill="none" stroke={c.line} strokeWidth={r * 0.2} strokeLinecap="round" />
      <path d={`M${p(a0, r)} A${r} ${r} 0 ${val > 0.55 ? 1 : 0} 1 ${p(a, r)}`}
        fill="none" stroke={warn ? c.warn : c.ok} strokeWidth={r * 0.2} strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={cx + Math.cos(a) * r * 0.68} y2={cy - Math.sin(a) * r * 0.68}
        stroke={c.ink} strokeWidth={1.8} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={r * 0.11} fill={c.ink} />
      <rect x={cx - r * 0.42} y={cy + r * 0.3} width={r * 0.84} height={r * 0.2} rx={r * 0.1} fill={c.ink} opacity={0.3} />
    </g>
  );
}

/** 스파크라인 */
function Spark({ x, y, w, h, c, r, color }: { x: number; y: number; w: number; h: number; c: C; r: () => number; color: string }) {
  const n = 22;
  const pts = Array.from({ length: n })
    .map((_, i) => `${(x + (i * w) / (n - 1)).toFixed(1)},${(y + h - (0.15 + r() * 0.8) * h).toFixed(1)}`)
    .join(' ');
  return (
    <g>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.4} opacity={0.9} />
      <rect x={x} y={y + h} width={w} height={0.8} fill={c.line} />
    </g>
  );
}

export function HmiScreen({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const raw = useId();
  const u = raw.replace(/[^a-zA-Z0-9]/g, '');
  const c = PALETTE[tone];
  const id = (n: string) => `${u}-${n}`;
  const url = (n: string) => `url(#${u}-${n})`;
  const soft = tone === 'light' || tone === 'warm';
  const R = rand(4242);

  // 화면 영역
  const SX = 96, SY = 86, SW = 1008, SH = 542;

  // 단선결선도 좌표
  const sldX = SX + 66, sldY = SY + 92;
  const busY = sldY + 118;
  const feeders = [0, 1, 2, 3, 4];

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
        <linearGradient id={id('roomg')} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor={c.room} />
          <stop offset="45%" stopColor={c.wall} />
          <stop offset="100%" stopColor={c.room} />
        </linearGradient>
        <radialGradient id={id('spill')} cx="0.5" cy="0.42" r="0.55">
          <stop offset="0%" stopColor={c.glow} stopOpacity={soft ? 0.18 : 0.32} />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('bez')} x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor={c.ink2} stopOpacity={soft ? 0.5 : 0.32} />
          <stop offset="14%" stopColor={c.bezel} />
          <stop offset="100%" stopColor={c.room} />
        </linearGradient>
        <linearGradient id={id('scrg')} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor={c.hi} stopOpacity={soft ? 0 : 0.055} />
          <stop offset="45%" stopColor={c.hi} stopOpacity="0" />
          <stop offset="100%" stopColor={c.room} stopOpacity={soft ? 0.05 : 0.16} />
        </linearGradient>
        <linearGradient id={id('deskg')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.desk} />
          <stop offset="100%" stopColor={c.room} />
        </linearGradient>
        <linearGradient id={id('reflg')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.glow} stopOpacity={soft ? 0.2 : 0.26} />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id('vig')} cx="0.5" cy="0.42" r="0.76">
          <stop offset="46%" stopColor={c.room} stopOpacity="0" />
          <stop offset="100%" stopColor={c.room} stopOpacity={soft ? 0.22 : 0.7} />
        </radialGradient>
        <filter id={id('blur')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <clipPath id={id('scrclip')}>
          <rect x={SX} y={SY} width={SW} height={SH} rx="2" />
        </clipPath>
      </defs>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .${u}-flow { stroke-dasharray: 5 11; animation: ${u}-flow 7s linear infinite; }
          .${u}-al { animation: ${u}-al 2.6s steps(1,end) infinite; }
          .${u}-fk { animation: ${u}-fk 11s ease-in-out infinite; }
          @keyframes ${u}-flow { to { stroke-dashoffset: -64 } }
          @keyframes ${u}-al { 0%,56% { opacity: 1 } 60%,100% { opacity: .2 } }
          @keyframes ${u}-fk { 0%,100% { opacity: 1 } 48% { opacity: .975 } 50% { opacity: 1 } }
        }
      `}</style>

      {/* ── 실내 배경 ── */}
      <rect width="1200" height="900" fill={url('roomg')} />
      <ellipse cx="600" cy="360" rx="700" ry="440" fill={url('spill')} />
      {/* 벽 패널 라인 */}
      <g opacity={soft ? 0.35 : 0.2}>
        <rect x="0" y="150" width="1200" height="1.4" fill={c.line} />
        <rect x="0" y="470" width="1200" height="1.4" fill={c.line} />
        <rect x="146" y="0" width="1.4" height="740" fill={c.line} />
        <rect x="1054" y="0" width="1.4" height="740" fill={c.line} />
      </g>

      {/* ── 책상 ── */}
      <rect x="0" y="742" width="1200" height="158" fill={url('deskg')} />
      <rect x="0" y="742" width="1200" height="2" fill={c.hi} opacity={0.14} />
      <rect x="150" y="744" width="900" height="70" fill={url('reflg')} />

      {/* ── 모니터 스탠드 ── */}
      <g>
        <ellipse cx="600" cy="806" rx="196" ry="20" fill={c.room} opacity={soft ? 0.22 : 0.6} filter={url('blur')} />
        <path d="M556 668 L644 668 L632 782 L568 782 Z" fill={url('bez')} />
        <path d="M556 668 L568 668 L562 782 L568 782 Z" fill={c.hi} opacity={0.08} />
        <rect x="470" y="778" width="260" height="16" rx="8" fill={c.bezel} />
        <ellipse cx="600" cy="786" rx="132" ry="15" fill={c.bezel} />
        <ellipse cx="600" cy="783" rx="132" ry="15" fill={c.ink2} opacity={soft ? 0.4 : 0.16} />
      </g>

      {/* ── 모니터 본체 ── */}
      <g>
        <rect x="72" y="62" width="1056" height="616" rx="10" fill={url('bez')} />
        <rect x="72" y="62" width="1056" height="616" rx="10" fill="none" stroke={c.hi} strokeWidth="1" opacity={0.1} />
        <rect x="84" y="74" width="1032" height="592" rx="4" fill={c.bezel} />
        {/* 하단 턱 표시등 */}
        <circle cx="600" cy="652" r="3.4" fill={c.ok} opacity={0.9} className={`${u}-al`} />
        <rect x="556" y="650" width="26" height="4" rx="2" fill={c.ink2} opacity={0.3} />

        {/* ── 화면 ── */}
        <rect x={SX} y={SY} width={SW} height={SH} fill={c.screen0} />
        <g clipPath={`url(#${u}-scrclip)`} className={`${u}-fk`}>
          {/* 상단 바 */}
          <rect x={SX} y={SY} width={SW} height={34} fill={c.screen1} />
          <rect x={SX} y={SY + 33} width={SW} height={1} fill={c.line} />
          <rect x={SX + 14} y={SY + 11} width={13} height={13} rx="3" fill={c.accent} opacity={0.9} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={SX + 40 + i * 54} y={SY + 13} width={40} height={8} rx="4"
              fill={i === 0 ? c.accent : c.ink} opacity={i === 0 ? 0.8 : 0.24} />
          ))}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={SX + SW - 210 + i * 62} y={SY + 11} width={50} height={14} rx="7" fill={c.line} opacity={0.7} />
              <circle cx={SX + SW - 200 + i * 62} cy={SY + 18} r="3.2" fill={i === 1 ? c.warn : c.ok} opacity={0.95} />
              <rect x={SX + SW - 192 + i * 62} y={SY + 16} width={26} height={4} rx="2" fill={c.ink} opacity={0.35} />
            </g>
          ))}
          <rect x={SX + SW - 26} y={SY + 12} width={14} height={11} rx="2" fill={c.ink} opacity={0.3} />

          {/* 좌측 아이콘 레일 */}
          <rect x={SX} y={SY + 34} width={44} height={SH - 34} fill={c.screen1} />
          <rect x={SX + 43} y={SY + 34} width={1} height={SH - 34} fill={c.line} />
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i}>
              {i === 1 && <rect x={SX} y={SY + 44 + i * 42} width={3} height={28} fill={c.accent} />}
              <rect x={SX + 13} y={SY + 48 + i * 42} width={19} height={19} rx="4"
                fill={c.ink} opacity={i === 1 ? 0.6 : 0.2} />
              <rect x={SX + 17} y={SY + 53 + i * 42} width={11} height={9} rx="1.5" fill={c.screen1} opacity={0.55} />
            </g>
          ))}

          {/* ── 단선결선도 패널 ── */}
          <Panel x={SX + 56} y={SY + 46} w={548} h={330} c={c} accentBar />
          <g>
            {/* 인입 전원 */}
            <circle cx={sldX + 200} cy={sldY - 26} r="13" fill="none" stroke={c.ink} strokeWidth={1.8} />
            <path d={`M${sldX + 193} ${sldY - 26} q3.5 -6 7 0 t7 0`} fill="none" stroke={c.ink} strokeWidth={1.4} />
            <line x1={sldX + 200} y1={sldY - 13} x2={sldX + 200} y2={sldY + 4} stroke={c.ok} strokeWidth={2.4} />
            {/* 주 변압기 */}
            <circle cx={sldX + 200} cy={sldY + 18} r="15" fill="none" stroke={c.ink} strokeWidth={1.8} />
            <circle cx={sldX + 200} cy={sldY + 34} r="15" fill="none" stroke={c.ink} strokeWidth={1.8} />
            <line x1={sldX + 200} y1={sldY + 49} x2={sldX + 200} y2={sldY + 66} stroke={c.ok} strokeWidth={2.4} />
            {/* 주 차단기 */}
            <rect x={sldX + 189} y={sldY + 66} width={22} height={22} fill="none" stroke={c.ink} strokeWidth={2} />
            <rect x={sldX + 193} y={sldY + 70} width={14} height={14} fill={c.ok} opacity={0.85} />
            <line x1={sldX + 200} y1={sldY + 88} x2={sldX + 200} y2={busY} stroke={c.ok} strokeWidth={2.4} className={`${u}-flow`} />
            {/* 모선 */}
            <rect x={sldX} y={busY} width={412} height={4.5} fill={c.ok} opacity={0.9} />
            <rect x={sldX} y={busY} width={412} height={1.4} fill={c.hi} opacity={0.25} />
            {/* 피더 */}
            {feeders.map((i) => {
              const fx = sldX + 30 + i * 88;
              const trip = i === 3;
              const col = trip ? c.warn : c.ok;
              return (
                <g key={i}>
                  <line x1={fx} y1={busY + 4} x2={fx} y2={busY + 26} stroke={col} strokeWidth={2.2} />
                  <rect x={fx - 10} y={busY + 26} width={20} height={20} fill="none" stroke={c.ink} strokeWidth={1.8} />
                  {trip ? (
                    <path d={`M${fx - 6} ${busY + 30} l12 12 M${fx + 6} ${busY + 30} l-12 12`} stroke={c.warn} strokeWidth={2} />
                  ) : (
                    <rect x={fx - 6} y={busY + 30} width={12} height={12} fill={c.ok} opacity={0.8} />
                  )}
                  <line x1={fx} y1={busY + 46} x2={fx} y2={busY + 68} stroke={trip ? c.line : col} strokeWidth={2} />
                  {i % 2 === 0 ? (
                    <g>
                      <circle cx={fx} cy={busY + 80} r="12" fill="none" stroke={c.ink} strokeWidth={1.6} />
                      <path d={`M${fx - 6} ${busY + 80} h12 M${fx} ${busY + 74} v12`} stroke={c.ink} strokeWidth={1.4} opacity={0.7} />
                    </g>
                  ) : (
                    <g>
                      <circle cx={fx} cy={busY + 76} r="10" fill="none" stroke={c.ink} strokeWidth={1.6} />
                      <circle cx={fx} cy={busY + 88} r="10" fill="none" stroke={c.ink} strokeWidth={1.6} />
                    </g>
                  )}
                  <rect x={fx - 16} y={busY + 100} width={32} height={5} rx="2" fill={c.ink} opacity={0.22} />
                  <rect x={fx - 16} y={busY + 109} width={22} height={4} rx="2" fill={c.ink} opacity={0.14} />
                  <circle cx={fx + 13} cy={busY + 111} r="2.6" fill={col} opacity={0.9}
                    className={trip ? `${u}-al` : undefined} />
                </g>
              );
            })}
            {/* 계측 태그 (추상) */}
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect x={sldX + 300} y={sldY - 20 + i * 20} width={72} height={14} rx="2" fill={c.screen0} opacity={0.9} />
                <rect x={sldX + 304} y={sldY - 16 + i * 20} width={24} height={5} fill={c.ink2} opacity={0.7} />
                <rect x={sldX + 334} y={sldY - 16 + i * 20} width={32} height={5} fill={c.ink} opacity={0.85} />
              </g>
            ))}
          </g>

          {/* ── 우측 KPI 타일 ── */}
          <Panel x={SX + 620} y={SY + 46} w={352} h={148} c={c} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <Gauge cx={SX + 690 + i * 112} cy={SY + 136} r={36} val={0.3 + i * 0.26} c={c} warn={i === 2} />
              <rect x={SX + 664 + i * 112} y={SY + 156} width={52} height={5} rx="2.5" fill={c.ink} opacity={0.25} />
            </g>
          ))}

          {/* ── 트렌드 패널 ── */}
          <Panel x={SX + 620} y={SY + 208} w={352} h={168} c={c} accentBar />
          <g>
            {Array.from({ length: 5 }).map((_, i) => (
              <rect key={i} x={SX + 634} y={SY + 244 + i * 26} width={324} height={0.8} fill={c.line} />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <rect key={i} x={SX + 634 + i * 40.5} y={SY + 240} width={0.8} height={110} fill={c.line} opacity={0.6} />
            ))}
            {[
              { col: c.ink, amp: 30, off: 300, ph: 0 },
              { col: c.accent, amp: 20, off: 322, ph: 1.4 },
              { col: c.ok, amp: 13, off: 268, ph: 2.7 },
            ].map((s, k) => (
              <polyline key={k}
                points={Array.from({ length: 34 })
                  .map((_, i) => {
                    const xx = SX + 634 + (i * 324) / 33;
                    const yy = SY + s.off - Math.sin(i * 0.42 + s.ph) * s.amp - R() * 6;
                    return `${xx.toFixed(1)},${yy.toFixed(1)}`;
                  })
                  .join(' ')}
                fill="none" stroke={s.col} strokeWidth={1.6} opacity={0.9} />
            ))}
            <rect x={SX + 634} y={SY + 356} width={324} height={0.8} fill={c.line} />
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect x={SX + 636 + i * 62} y={SY + 362} width={9} height={4} fill={i === 0 ? c.ink : i === 1 ? c.accent : c.ok} />
                <rect x={SX + 649 + i * 62} y={SY + 362} width={30} height={4} fill={c.ink} opacity={0.2} />
              </g>
            ))}
          </g>

          {/* ── 알람 리스트 ── */}
          <Panel x={SX + 56} y={SY + 392} w={548} h={126} c={c} />
          <g>
            {[0, 1, 2, 3, 4].map((i) => {
              const ry = SY + 420 + i * 19;
              const sev = i === 0 ? c.warn : i === 1 ? c.accent : c.ok;
              return (
                <g key={i}>
                  <rect x={SX + 62} y={ry} width={536} height={16} fill={c.ink} opacity={i % 2 ? 0.03 : 0.07} />
                  <rect x={SX + 68} y={ry + 4} width={6} height={8} fill={sev} opacity={0.95}
                    className={i === 0 ? `${u}-al` : undefined} />
                  <rect x={SX + 82} y={ry + 6} width={54} height={4} fill={c.ink2} opacity={0.7} />
                  <rect x={SX + 148} y={ry + 6} width={130 + (i % 3) * 60} height={4} fill={c.ink} opacity={0.4} />
                  <rect x={SX + 470} y={ry + 6} width={62} height={4} fill={c.ink} opacity={0.22} />
                  <rect x={SX + 548} y={ry + 5} width={44} height={7} rx="3.5" fill={sev} opacity={0.24} />
                </g>
              );
            })}
          </g>

          {/* ── 우하단 상태 타일 ── */}
          <Panel x={SX + 620} y={SY + 392} w={352} h={126} c={c} />
          <g>
            {Array.from({ length: 3 }).map((_, rw) =>
              Array.from({ length: 6 }).map((_, cl) => {
                const v = R();
                return (
                  <rect key={`${rw}-${cl}`} x={SX + 634 + cl * 55} y={SY + 424 + rw * 30} width={48} height={23} rx="2"
                    fill={v > 0.9 ? c.warn : v > 0.62 ? c.ok : c.ink} opacity={v > 0.62 ? 0.7 : 0.12} />
                );
              })
            )}
            <Spark x={SX + 634} y={SY + 500} w={324} h={12} c={c} r={R} color={c.accent} />
          </g>

          {/* 하단 상태바 */}
          <rect x={SX} y={SY + SH - 22} width={SW} height={22} fill={c.screen1} />
          <rect x={SX} y={SY + SH - 23} width={SW} height={1} fill={c.line} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx={SX + 60 + i * 130} cy={SY + SH - 11} r="3" fill={i === 2 ? c.warn : c.ok} opacity={0.9} />
              <rect x={SX + 68 + i * 130} y={SY + SH - 13} width={72} height={4} rx="2" fill={c.ink} opacity={0.24} />
            </g>
          ))}
          <rect x={SX + SW - 120} y={SY + SH - 13} width={88} height={4} rx="2" fill={c.ink} opacity={0.2} />

          {/* 화면 글래스 */}
          <rect x={SX} y={SY} width={SW} height={SH} fill={url('scrg')} />
          {/* 스캔 라인 */}
          <g opacity={soft ? 0.04 : 0.06}>
            {Array.from({ length: 90 }).map((_, i) => (
              <rect key={i} x={SX} y={SY + i * 6} width={SW} height={1.5} fill={c.room} />
            ))}
          </g>
        </g>
        {/* 화면 테두리 */}
        <rect x={SX} y={SY} width={SW} height={SH} fill="none" stroke={c.bezel} strokeWidth={3} />
      </g>

      {/* ── 데스크 소품 ── */}
      <g>
        {/* 키보드 */}
        <g>
          <rect x="396" y="828" width="408" height="60" rx="6" fill={c.bezel} />
          <rect x="396" y="828" width="408" height="4" rx="2" fill={c.hi} opacity={0.12} />
          {Array.from({ length: 5 }).map((_, rw) =>
            Array.from({ length: 18 }).map((_, cl) => (
              <rect key={`${rw}-${cl}`} x={406 + cl * 21.6} y={836 + rw * 10.4} width={17} height={7.6} rx="1.5"
                fill={c.ink2} opacity={soft ? 0.28 : 0.16} />
            ))
          )}
        </g>
        {/* 마우스 */}
        <ellipse cx="860" cy="856" rx="24" ry="34" fill={c.bezel} />
        <ellipse cx="860" cy="846" rx="20" ry="24" fill={c.ink2} opacity={soft ? 0.3 : 0.12} />
        <rect x="858.5" y="836" width="3" height="12" rx="1.5" fill={c.accent} opacity={0.5} />
        {/* 노트/서류 */}
        <rect x="180" y="820" width="150" height="66" rx="2" fill={c.ink2} opacity={soft ? 0.3 : 0.14} transform="rotate(-6 255 853)" />
        <rect x="192" y="834" width="110" height="4" fill={c.ink} opacity={0.18} transform="rotate(-6 255 853)" />
        <rect x="192" y="846" width="88" height="4" fill={c.ink} opacity={0.13} transform="rotate(-6 255 853)" />
        <rect x="192" y="858" width="96" height="4" fill={c.ink} opacity={0.1} transform="rotate(-6 255 853)" />
      </g>

      <rect width="1200" height="900" fill={url('vig')} />
    </svg>
  );
}

export default HmiScreen;
