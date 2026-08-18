// EZIO shared scene artwork — finished vector scenes. Real site photography can be swapped in later at the same slots.
import { useId } from 'react';

type Tone = 'dark' | 'light' | 'navy' | 'warm';

type Role =
  | 'bg0' | 'bg1' | 'wall' | 'desk' | 'deskHi'
  | 'bezel' | 'scr' | 'ink' | 'ok' | 'warn'
  | 'accent' | 'glow' | 'hi';

const PALETTE: Record<Tone, Record<Role, string>> = {
  dark: {
    bg0: '#08090B', bg1: '#121619', wall: '#1A1F24', desk: '#1D2329', deskHi: '#2E363E',
    bezel: '#0A0C0E', scr: '#0F171D', ink: '#9DB4C2', ok: '#4ADE80', warn: '#F26B1D',
    accent: '#F26B1D', glow: '#6E9AB8', hi: '#E8EAED',
  },
  light: {
    bg0: '#C7D4E0', bg1: '#E2EAF1', wall: '#EDF2F7', desk: '#BFCCD9', deskHi: '#E8EFF5',
    bezel: '#93A5B5', scr: '#FFFFFF', ink: '#0A3D91', ok: '#1E9E6A', warn: '#D9741C',
    accent: '#0A3D91', glow: '#7FA9DA', hi: '#FFFFFF',
  },
  navy: {
    bg0: '#04070D', bg1: '#0A1220', wall: '#101E30', desk: '#122032', deskHi: '#20374F',
    bezel: '#050A12', scr: '#08131F', ink: '#7DD3FC', ok: '#2DD4BF', warn: '#FBBF24',
    accent: '#38BDF8', glow: '#38BDF8', hi: '#E0F2FE',
  },
  warm: {
    bg0: '#D0C5B4', bg1: '#E8E1D6', wall: '#F5F1EA', desk: '#C0B6A6', deskHi: '#E9E2D8',
    bezel: '#8A8175', scr: '#FAF8F5', ink: '#2B2622', ok: '#5A6B4E', warn: '#8A5A32',
    accent: '#141414', glow: '#C4B49C', hi: '#FFFFFF',
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

interface UIProps { x: number; y: number; w: number; h: number; c: Record<Role, string>; r: () => number }

/** 단선결선도 (추상) */
function UiSingleLine({ x, y, w, h, c }: UIProps) {
  const bx = x + w * 0.5;
  return (
    <g>
      <rect x={x + w * 0.08} y={y + h * 0.16} width={w * 0.84} height={2.4} fill={c.ink} opacity={0.85} />
      {[0.2, 0.4, 0.6, 0.8].map((f, i) => {
        const cx = x + w * (0.12 + f * 0.76);
        return (
          <g key={i}>
            <rect x={cx} y={y + h * 0.16} width={1.4} height={h * 0.24} fill={c.ink} opacity={0.7} />
            <rect x={cx - 4.5} y={y + h * 0.4} width={9} height={9} fill="none" stroke={c.ink} strokeWidth={1.4} opacity={0.85} />
            <rect x={cx} y={y + h * 0.49} width={1.4} height={h * 0.16} fill={c.ink} opacity={0.6} />
            <circle cx={cx + 0.7} cy={y + h * 0.7} r={5.2} fill="none" stroke={i === 1 ? c.warn : c.ink} strokeWidth={1.3} opacity={0.8} />
            <circle cx={cx + 0.7} cy={y + h * 0.77} r={5.2} fill="none" stroke={i === 1 ? c.warn : c.ink} strokeWidth={1.3} opacity={0.8} />
            <rect x={cx - 3} y={y + h * 0.87} width={6.5} height={h * 0.06} fill={i === 1 ? c.warn : c.ok} opacity={0.8} />
          </g>
        );
      })}
      <rect x={bx - 1} y={y + h * 0.06} width={2} height={h * 0.1} fill={c.ink} opacity={0.6} />
    </g>
  );
}

/** 트렌드 차트 */
function UiTrend({ x, y, w, h, c, r }: UIProps) {
  const pts = (amp: number, off: number) =>
    Array.from({ length: 26 })
      .map((_, i) => {
        const px = x + 4 + (i * (w - 8)) / 25;
        const py = y + h * off + Math.sin(i * 0.6 + amp * 3) * h * amp + (r() - 0.5) * h * 0.06;
        return `${px.toFixed(1)},${py.toFixed(1)}`;
      })
      .join(' ');
  return (
    <g>
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={i} x={x + 4} y={y + 6 + (i * (h - 12)) / 4} width={w - 8} height={0.7} fill={c.ink} opacity={0.16} />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x={x + 4 + (i * (w - 8)) / 6} y={y + 6} width={0.7} height={h - 12} fill={c.ink} opacity={0.1} />
      ))}
      <polyline points={pts(0.09, 0.42)} fill="none" stroke={c.ink} strokeWidth={1.5} opacity={0.9} />
      <polyline points={pts(0.06, 0.68)} fill="none" stroke={c.accent} strokeWidth={1.3} opacity={0.85} />
      <polyline points={pts(0.04, 0.26)} fill="none" stroke={c.ok} strokeWidth={1.1} opacity={0.6} />
    </g>
  );
}

/** 알람 리스트 */
function UiAlarms({ x, y, w, h, c, r }: UIProps) {
  const n = Math.max(5, Math.floor(h / 13));
  return (
    <g>
      <rect x={x + 4} y={y + 4} width={w - 8} height={7} fill={c.ink} opacity={0.22} />
      {Array.from({ length: n }).map((_, i) => {
        const ry = y + 15 + i * 12;
        if (ry > y + h - 8) return null;
        const sev = i === 0 ? c.warn : i === 2 ? c.accent : i === 4 ? c.ok : c.ink;
        return (
          <g key={i}>
            <rect x={x + 4} y={ry} width={w - 8} height={9.4} fill={c.ink} opacity={i % 2 ? 0.05 : 0.1} />
            <rect x={x + 6} y={ry + 2} width={4.5} height={5.4} fill={sev} opacity={0.95} />
            <rect x={x + 14} y={ry + 3.4} width={(w - 40) * (0.45 + r() * 0.5)} height={2.6} fill={c.ink} opacity={0.5} />
            <rect x={x + w - 26} y={ry + 3.4} width={18} height={2.6} fill={c.ink} opacity={0.3} />
          </g>
        );
      })}
    </g>
  );
}

/** 게이지 */
function UiGauges({ x, y, w, h, c, r }: UIProps) {
  const n = 3;
  return (
    <g>
      {Array.from({ length: n }).map((_, i) => {
        const cx = x + w * ((i + 0.5) / n);
        const cy = y + h * 0.6;
        const rad = Math.min(w / n, h) * 0.34;
        const a = Math.PI * (0.86 - r() * 0.72);
        return (
          <g key={i}>
            <path
              d={`M${cx - rad} ${cy} A${rad} ${rad} 0 0 1 ${cx + rad} ${cy}`}
              fill="none" stroke={c.ink} strokeWidth={rad * 0.2} opacity={0.18}
            />
            <path
              d={`M${cx - rad} ${cy} A${rad} ${rad} 0 0 1 ${cx + rad * Math.cos(Math.PI - a * 0.9)} ${cy - rad * Math.sin(a * 0.9)}`}
              fill="none" stroke={i === 2 ? c.warn : c.ok} strokeWidth={rad * 0.2} opacity={0.9}
            />
            <line x1={cx} y1={cy} x2={cx + Math.cos(a) * rad * 0.82} y2={cy - Math.sin(a) * rad * 0.82}
              stroke={c.ink} strokeWidth={1.5} opacity={0.9} />
            <circle cx={cx} cy={cy} r={2} fill={c.ink} opacity={0.8} />
            <rect x={cx - rad * 0.5} y={cy + rad * 0.34} width={rad} height={3} fill={c.ink} opacity={0.28} />
          </g>
        );
      })}
    </g>
  );
}

/** 상태 매트릭스 */
function UiMatrix({ x, y, w, h, c, r }: UIProps) {
  const cols = 8;
  const rows = Math.max(3, Math.floor((h - 10) / 12));
  return (
    <g>
      {Array.from({ length: rows }).map((_, ri) =>
        Array.from({ length: cols }).map((_, ci) => {
          const v = r();
          return (
            <rect
              key={`${ri}-${ci}`}
              x={x + 6 + ci * ((w - 12) / cols)}
              y={y + 6 + ri * ((h - 12) / rows)}
              width={(w - 12) / cols - 2.5}
              height={(h - 12) / rows - 2.5}
              fill={v > 0.92 ? c.warn : v > 0.72 ? c.ok : c.ink}
              opacity={v > 0.72 ? 0.85 : 0.16 + v * 0.2}
            />
          );
        })
      )}
    </g>
  );
}

/** 플랜트 배치도 (추상) */
function UiMap({ x, y, w, h, c, r }: UIProps) {
  const blocks = Array.from({ length: 11 }).map(() => ({
    bx: x + 6 + r() * (w - 40),
    by: y + 6 + r() * (h - 30),
    bw: 10 + r() * 30,
    bh: 8 + r() * 18,
  }));
  return (
    <g>
      <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} fill={c.ink} opacity={0.05} />
      {Array.from({ length: 4 }).map((_, i) => (
        <rect key={i} x={x + 4} y={y + 10 + i * ((h - 20) / 3)} width={w - 8} height={1} fill={c.ink} opacity={0.14} />
      ))}
      {blocks.map((b, i) => (
        <rect key={i} x={b.bx} y={b.by} width={b.bw} height={b.bh} fill={c.ink} opacity={0.24 + (i % 3) * 0.12} />
      ))}
      <polyline
        points={`${x + 6},${y + h * 0.75} ${x + w * 0.35},${y + h * 0.72} ${x + w * 0.5},${y + h * 0.4} ${x + w - 8},${y + h * 0.36}`}
        fill="none" stroke={c.accent} strokeWidth={1.4} opacity={0.8}
      />
      <circle cx={x + w * 0.5} cy={y + h * 0.4} r={3} fill={c.accent} opacity={0.95} />
    </g>
  );
}

/** 막대 그래프 */
function UiBars({ x, y, w, h, c, r }: UIProps) {
  const n = 12;
  return (
    <g>
      <rect x={x + 5} y={y + h - 10} width={w - 10} height={0.9} fill={c.ink} opacity={0.3} />
      {Array.from({ length: n }).map((_, i) => {
        const bh = (0.18 + r() * 0.72) * (h - 22);
        return (
          <rect key={i} x={x + 6 + i * ((w - 12) / n)} y={y + h - 10 - bh}
            width={(w - 12) / n - 3} height={bh}
            fill={i === 7 ? c.warn : c.ink} opacity={i === 7 ? 0.9 : 0.45} />
        );
      })}
    </g>
  );
}

const UIS = [UiSingleLine, UiTrend, UiAlarms, UiGauges, UiMatrix, UiMap, UiBars, UiTrend, UiSingleLine, UiAlarms, UiGauges, UiBars];

export function ControlRoom({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const raw = useId();
  const u = raw.replace(/[^a-zA-Z0-9]/g, '');
  const c = PALETTE[tone];
  const id = (n: string) => `${u}-${n}`;
  const url = (n: string) => `url(#${u}-${n})`;
  const soft = tone === 'light' || tone === 'warm';
  const R = rand(90210);

  // 곡면 비디오월: 6열 × 2행
  const COLS = 6;
  const edge = (k: number) => {
    const t = -1 + (2 * k) / COLS;
    return 600 + (452 * Math.sin(t * 1.02)) / Math.sin(1.02);
  };
  const CY = 286;

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
        <linearGradient id={id('room')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.bg0} />
          <stop offset="42%" stopColor={c.bg1} />
          <stop offset="100%" stopColor={c.bg0} />
        </linearGradient>
        <radialGradient id={id('spill')} cx="0.5" cy="0.36" r="0.62">
          <stop offset="0%" stopColor={c.glow} stopOpacity={soft ? 0.2 : 0.4} />
          <stop offset="48%" stopColor={c.glow} stopOpacity={soft ? 0.08 : 0.14} />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('scrg')} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor={c.hi} stopOpacity={soft ? 0.0 : 0.09} />
          <stop offset="60%" stopColor={c.hi} stopOpacity="0" />
          <stop offset="100%" stopColor={c.bg0} stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id={id('deskg')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.deskHi} />
          <stop offset="18%" stopColor={c.desk} />
          <stop offset="100%" stopColor={c.bg0} />
        </linearGradient>
        <linearGradient id={id('floorg')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.bg1} />
          <stop offset="100%" stopColor={c.bg0} />
        </linearGradient>
        <linearGradient id={id('refl')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.glow} stopOpacity={soft ? 0.22 : 0.3} />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id('cove')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.glow} stopOpacity={soft ? 0.3 : 0.34} />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id('vig')} cx="0.5" cy="0.46" r="0.74">
          <stop offset="50%" stopColor={c.bg0} stopOpacity="0" />
          <stop offset="100%" stopColor={c.bg0} stopOpacity={soft ? 0.24 : 0.72} />
        </radialGradient>
        <filter id={id('blur')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id={id('blur2')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .${u}-fk { animation: ${u}-fk 7s ease-in-out infinite; }
          .${u}-fk2 { animation: ${u}-fk 9.3s ease-in-out infinite; animation-delay: -3.4s; }
          .${u}-al { animation: ${u}-al 2.8s steps(1,end) infinite; }
          @keyframes ${u}-fk { 0%,100% { opacity: 1 } 47% { opacity: .93 } 49% { opacity: .99 } 74% { opacity: .95 } }
          @keyframes ${u}-al { 0%,58% { opacity: 1 } 62%,100% { opacity: .25 } }
        }
      `}</style>

      <rect width="1200" height="800" fill={url('room')} />

      {/* 측벽 (원근) */}
      <polygon points="0,0 148,150 148,660 0,800" fill={c.wall} opacity={soft ? 0.7 : 0.55} />
      <polygon points="1200,0 1052,150 1052,660 1200,800" fill={c.wall} opacity={soft ? 0.7 : 0.55} />
      <polygon points="0,0 148,150 148,160 0,12" fill={c.hi} opacity={0.06} />
      <polygon points="1200,0 1052,150 1052,160 1200,12" fill={c.hi} opacity={0.06} />

      {/* 천장 코브 조명 */}
      <rect x="150" y="60" width="900" height="9" rx="4" fill={c.hi} opacity={soft ? 0.55 : 0.4} />
      <rect x="120" y="69" width="960" height="66" fill={url('cove')} />
      <rect x="150" y="94" width="900" height="3" fill={c.hi} opacity={0.1} />

      {/* 비디오월 스필 라이트 */}
      <ellipse cx="600" cy="300" rx="640" ry="360" fill={url('spill')} />

      {/* ── 비디오월 프레임 ── */}
      <g>
        <rect x={edge(0) - 22} y={CY - 190} width={edge(6) - edge(0) + 44} height={382} rx="4" fill={c.bezel} opacity={soft ? 0.7 : 0.95} />
        {Array.from({ length: COLS }).map((_, i) => {
          const x0 = edge(i);
          const x1 = edge(i + 1);
          const dx = (i - (COLS - 1) / 2) / ((COLS - 1) / 2);
          const s = 1 + 0.14 * dx * dx;
          const a = -dx * 3.6;
          const cx = (x0 + x1) / 2;
          const halfH = 158 * s;
          const top = CY - halfH;
          const w = x1 - x0;
          return (
            <g key={i} transform={`translate(${cx} ${CY}) skewY(${a}) translate(${-cx} ${-CY})`}>
              {/* 컬럼 베젤 */}
              <rect x={x0 + 2} y={top} width={w - 4} height={halfH * 2} fill={c.bezel} />
              {[0, 1].map((rw) => {
                const sy = top + 6 + rw * (halfH - 3);
                const sh = halfH - 12;
                const sx = x0 + 7;
                const sw = w - 14;
                const Ui = UIS[(i * 2 + rw) % UIS.length];
                return (
                  <g key={rw} className={rw === 1 && i === 3 ? `${u}-fk` : i === 1 ? `${u}-fk2` : undefined}>
                    <rect x={sx} y={sy} width={sw} height={sh} fill={c.scr} />
                    <rect x={sx} y={sy} width={sw} height={sh} fill={c.glow} opacity={soft ? 0.05 : 0.09} />
                    {/* 헤더바 */}
                    <rect x={sx} y={sy} width={sw} height={9} fill={c.ink} opacity={0.16} />
                    <rect x={sx + 5} y={sy + 3} width={22} height={3} fill={c.ink} opacity={0.42} />
                    <rect x={sx + sw - 14} y={sy + 3} width={9} height={3} fill={c.accent} opacity={0.6} />
                    <Ui x={sx} y={sy + 11} w={sw} h={sh - 15} c={c} r={R} />
                    {/* 화면 반사 */}
                    <rect x={sx} y={sy} width={sw} height={sh} fill={url('scrg')} />
                    <rect x={sx} y={sy} width={sw} height={sh} fill="none" stroke={c.bezel} strokeWidth={2.6} />
                  </g>
                );
              })}
              {/* 컬럼 분할선 */}
              <rect x={x0 + 1} y={top} width={2} height={halfH * 2} fill={c.bg0} opacity={0.6} />
            </g>
          );
        })}
        {/* 월 프레임 하이라이트 */}
        <rect x={edge(0) - 22} y={CY - 190} width={edge(6) - edge(0) + 44} height={382} rx="4"
          fill="none" stroke={c.hi} strokeWidth={1} opacity={0.12} />
      </g>

      {/* 비디오월 하단 글로우 */}
      <ellipse cx="600" cy="480" rx="470" ry="52" fill={url('refl')} filter={url('blur')} opacity={0.8} />

      {/* ── 바닥 ── */}
      <rect x="0" y="500" width="1200" height="300" fill={url('floorg')} />
      <rect x="0" y="500" width="1200" height="1.4" fill={c.hi} opacity={0.08} />
      {/* 바닥 반사 밴드 */}
      <g opacity={soft ? 0.35 : 0.5}>
        <rect x={edge(0)} y="502" width={edge(6) - edge(0)} height="66" fill={url('refl')} />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={edge(0) - 10 + i * ((edge(6) - edge(0)) / 12)} y="502" width={(edge(6) - edge(0)) / 22} height={34 + R() * 30}
            fill={c.glow} opacity={0.09} />
        ))}
      </g>

      {/* ── 콘솔 뒷줄 ── */}
      <g>
        {[0, 1, 2, 3].map((i) => {
          const x = 214 + i * 194;
          return (
            <g key={i}>
              {/* 의자 */}
              <rect x={x + 62} y={528} width={46} height={54} rx="10" fill={c.bg0} opacity={0.9} />
              <rect x={x + 80} y={578} width={10} height={22} fill={c.bg0} opacity={0.9} />
              {/* 데스크 */}
              <rect x={x} y={556} width={172} height={13} rx="3" fill={url('deskg')} />
              <rect x={x} y={556} width={172} height={2} fill={c.hi} opacity={0.16} />
              <rect x={x + 8} y={569} width={156} height={30} fill={c.bg0} opacity={0.85} />
              {/* 모니터 후면 2대 */}
              {[0, 1].map((k) => (
                <g key={k}>
                  <rect x={x + 14 + k * 88} y={508} width={72} height={44} rx="3" fill={c.bezel} />
                  <rect x={x + 14 + k * 88} y={508} width={72} height={44} rx="3" fill={c.desk} opacity={0.5} />
                  <rect x={x + 44 + k * 88} y={552} width={12} height={7} fill={c.bezel} />
                  <rect x={x + 34 + k * 88} y={558} width={32} height={3} rx="1.5" fill={c.bezel} />
                  {/* 모니터 후면 글로우 */}
                  <rect x={x + 11 + k * 88} y={505} width={78} height={50} rx="4" fill={c.glow} opacity={soft ? 0.1 : 0.16} filter={url('blur2')} />
                </g>
              ))}
            </g>
          );
        })}
      </g>

      {/* ── 콘솔 앞줄 (크게, 하단 크롭) ── */}
      <g>
        {[0, 1, 2].map((i) => {
          const x = 92 + i * 380;
          return (
            <g key={i}>
              <rect x={x + 108} y={646} width={78} height={92} rx="16" fill={c.bg0} />
              <rect x={x + 138} y={730} width={16} height={40} fill={c.bg0} />
              <rect x={x - 10} y={690} width={330} height={22} rx="4" fill={url('deskg')} />
              <rect x={x - 10} y={690} width={330} height={3} fill={c.hi} opacity={0.18} />
              <rect x={x + 4} y={712} width={300} height={88} fill={c.bg0} opacity={0.92} />
              {[0, 1, 2].map((k) => (
                <g key={k}>
                  <rect x={x + 12 + k * 100} y={614} width={88} height={58} rx="4" fill={c.bezel} />
                  <rect x={x + 12 + k * 100} y={614} width={88} height={58} rx="4" fill={c.desk} opacity={0.55} />
                  <rect x={x + 46 + k * 100} y={672} width={14} height={12} fill={c.bezel} />
                  <rect x={x + 32 + k * 100} y={684} width={42} height={5} rx="2.5" fill={c.bezel} />
                  <rect x={x + 8 + k * 100} y={610} width={96} height={66} rx="5" fill={c.glow} opacity={soft ? 0.09 : 0.14} filter={url('blur2')} />
                </g>
              ))}
              {/* 데스크 위 표시등 */}
              <circle cx={x + 292} cy={701} r="2.6" fill={c.ok} opacity={0.9} className={i === 1 ? `${u}-al` : undefined} />
              <circle cx={x + 282} cy={701} r="2.6" fill={c.accent} opacity={0.55} />
            </g>
          );
        })}
      </g>

      {/* 전경 어둠 */}
      <rect x="0" y="742" width="1200" height="58" fill={c.bg0} opacity={soft ? 0.35 : 0.85} />
      <rect width="1200" height="800" fill={url('vig')} />
    </svg>
  );
}

export default ControlRoom;
