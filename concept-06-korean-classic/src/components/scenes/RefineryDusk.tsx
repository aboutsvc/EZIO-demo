// EZIO shared scene artwork — 실제 현장 사진 수령 시 교체 가능한 일러스트레이션
import { useId } from 'react';

type Tone = 'dark' | 'light' | 'navy' | 'warm';

type Role =
  | 'sky0' | 'sky1' | 'sky2' | 'glow'
  | 'far' | 'mid' | 'near' | 'edge'
  | 'accent' | 'accent2' | 'hi' | 'flame' | 'flame2';

const PALETTE: Record<Tone, Record<Role, string>> = {
  dark: {
    sky0: '#0B0F16', sky1: '#1E1B26', sky2: '#7A3F1E', glow: '#F26B1D',
    far: '#1C222B', mid: '#12171D', near: '#0C0E10', edge: '#3C444E',
    accent: '#F26B1D', accent2: '#FFC08A', hi: '#8B9198', flame: '#F26B1D', flame2: '#FFD3A3',
  },
  light: {
    sky0: '#CBDCEE', sky1: '#E4EDF5', sky2: '#F5F7F9', glow: '#9FC6EA',
    far: '#C2D0DE', mid: '#93A6B9', near: '#485B6E', edge: '#EAF2F9',
    accent: '#0A3D91', accent2: '#3E7FC4', hi: '#FFFFFF', flame: '#E07C34', flame2: '#F8CFA8',
  },
  navy: {
    sky0: '#04070E', sky1: '#0A1220', sky2: '#12374F', glow: '#38BDF8',
    far: '#16293F', mid: '#0D1A2A', near: '#060B14', edge: '#2C5070',
    accent: '#38BDF8', accent2: '#2DD4BF', hi: '#7DD3FC', flame: '#F5A83F', flame2: '#FFE0B0',
  },
  warm: {
    sky0: '#E7DDCF', sky1: '#F2EAE0', sky2: '#FAF8F5', glow: '#D3BA9C',
    far: '#CCC2B5', mid: '#9B9289', near: '#4E463D', edge: '#FAF8F5',
    accent: '#2B2622', accent2: '#7A7167', hi: '#FAF8F5', flame: '#6E6259', flame2: '#A79B8E',
  },
};

const STARS: Record<Tone, number> = { dark: 0.5, light: 0, navy: 0.75, warm: 0 };

function rand(seed: number) {
  let s = seed;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 증류탑 — cap dome, platform rings, ladder, top vent */
function Column(props: { x: number; base: number; h: number; w: number; c: Record<Role, string>; fill: string }) {
  const { x, base, h, w, c, fill } = props;
  const top = base - h;
  const rings = Math.max(3, Math.round(h / 46));
  return (
    <g>
      <rect x={x} y={top} width={w} height={h} fill={fill} />
      <path d={`M${x} ${top} Q${x + w / 2} ${top - w * 0.62} ${x + w} ${top}Z`} fill={fill} />
      <rect x={x + w * 0.42} y={top - w * 0.62 - 16} width={w * 0.16} height={17} fill={fill} />
      {/* 좌측 림라이트 */}
      <rect x={x} y={top} width={1.6} height={h} fill={c.hi} opacity={0.28} />
      {Array.from({ length: rings }).map((_, i) => {
        const y = top + 16 + (i * (h - 24)) / rings;
        return (
          <g key={i}>
            <rect x={x - 7} y={y} width={w + 14} height={4} fill={fill} />
            <rect x={x - 7} y={y} width={w + 14} height={1} fill={c.edge} opacity={0.55} />
            <rect x={x - 7} y={y - 6} width={0.9} height={6} fill={c.edge} opacity={0.4} />
            <rect x={x + w + 6} y={y - 6} width={0.9} height={6} fill={c.edge} opacity={0.4} />
          </g>
        );
      })}
      {/* 사다리 */}
      <rect x={x + w + 2.5} y={top + 10} width={0.9} height={h - 14} fill={c.edge} opacity={0.5} />
      <rect x={x + w + 6.5} y={top + 10} width={0.9} height={h - 14} fill={c.edge} opacity={0.5} />
      {Array.from({ length: Math.floor((h - 20) / 9) }).map((_, i) => (
        <rect key={i} x={x + w + 2.5} y={top + 14 + i * 9} width={4.9} height={0.8} fill={c.edge} opacity={0.34} />
      ))}
    </g>
  );
}

/** 저장탱크 — rim, seam, spiral stair */
function Tank(props: { x: number; base: number; w: number; h: number; c: Record<Role, string>; fill: string }) {
  const { x, base, w, h, c, fill } = props;
  const top = base - h;
  return (
    <g>
      <rect x={x} y={top} width={w} height={h} fill={fill} />
      <ellipse cx={x + w / 2} cy={top} rx={w / 2} ry={w * 0.11} fill={fill} />
      <path d={`M${x} ${top} a${w / 2} ${w * 0.11} 0 0 0 ${w} 0`} fill="none" stroke={c.edge} strokeWidth={1} opacity={0.4} />
      <rect x={x} y={top} width={1.5} height={h} fill={c.hi} opacity={0.24} />
      <rect x={x} y={top + h * 0.42} width={w} height={0.9} fill={c.edge} opacity={0.25} />
      <rect x={x} y={top + h * 0.72} width={w} height={0.9} fill={c.edge} opacity={0.2} />
      <path
        d={`M${x + 2} ${base} L${x + w - 2} ${base - h * 0.55} L${x + w - 2} ${top + 3}`}
        fill="none" stroke={c.edge} strokeWidth={1.1} opacity={0.45}
      />
      <path d={`M${x - 3} ${top - 1} h${w + 6}`} stroke={c.edge} strokeWidth={1.4} opacity={0.35} fill="none" />
    </g>
  );
}

/** 구형 LPG 탱크 */
function Sphere(props: { cx: number; base: number; r: number; c: Record<Role, string>; fill: string }) {
  const { cx, base, r, c, fill } = props;
  const cy = base - r - r * 0.72;
  return (
    <g>
      {Array.from({ length: 5 }).map((_, i) => {
        const a = -Math.PI * 0.86 + (i * Math.PI * 0.72) / 4;
        return (
          <rect key={i} x={cx + Math.cos(a) * r * 0.78 - 1.6} y={cy} width={3.2} height={base - cy} fill={fill} />
        );
      })}
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <path d={`M${cx - r} ${cy} a${r} ${r} 0 0 1 ${r * 0.6} -${r * 0.86}`} fill="none" stroke={c.hi} strokeWidth={2} opacity={0.22} />
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.3} fill="none" stroke={c.edge} strokeWidth={0.9} opacity={0.3} />
      <rect x={cx - r * 0.9} y={base - r * 0.5} width={r * 1.8} height={2.4} fill={fill} />
      <rect x={cx - r * 0.9} y={base - r * 0.5} width={r * 1.8} height={0.9} fill={c.edge} opacity={0.35} />
    </g>
  );
}

/** 파이프랙 — posts + stacked pipes */
function PipeRack(props: {
  x: number; y: number; w: number; h: number; posts: number; pipes: number;
  c: Record<Role, string>; fill: string;
}) {
  const { x, y, w, h, posts, pipes, c, fill } = props;
  return (
    <g>
      {Array.from({ length: posts }).map((_, i) => {
        const px = x + (i * w) / (posts - 1);
        return (
          <g key={i}>
            <rect x={px - 3} y={y} width={6} height={h} fill={fill} />
            <path d={`M${px - 3} ${y + h * 0.35} l6 ${h * 0.3} M${px + 3} ${y + h * 0.35} l-6 ${h * 0.3}`} stroke={c.edge} strokeWidth={0.8} opacity={0.3} fill="none" />
          </g>
        );
      })}
      {Array.from({ length: pipes }).map((_, i) => {
        const py = y + 3 + i * 7.5;
        return (
          <g key={i}>
            <rect x={x - 10} y={py} width={w + 20} height={5} fill={fill} />
            <rect x={x - 10} y={py} width={w + 20} height={1.1} fill={c.hi} opacity={0.2} />
          </g>
        );
      })}
      <rect x={x - 10} y={y - 4} width={w + 20} height={4.5} fill={fill} />
    </g>
  );
}

export function RefineryDusk({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const raw = useId();
  const u = raw.replace(/[^a-zA-Z0-9]/g, '');
  const c = PALETTE[tone];
  const R = rand(24601);

  const id = (n: string) => `${u}-${n}`;
  const url = (n: string) => `url(#${u}-${n})`;

  // 원경 실루엣 (far plane)
  const farItems = Array.from({ length: 26 }).map(() => {
    const x = 20 + R() * 1160;
    const kind = R();
    const h = 24 + R() * 92;
    return { x, kind, h, w: 8 + R() * 22 };
  });

  // 창/데크 조명
  const lamps = Array.from({ length: 46 }).map(() => ({
    x: 40 + R() * 1120,
    y: 540 + R() * 220,
    s: 0.9 + R() * 1.9,
    o: 0.25 + R() * 0.6,
  }));

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
        <linearGradient id={id('sky')} x1="0" y1="0" x2="0.18" y2="1">
          <stop offset="0%" stopColor={c.sky0} />
          <stop offset="38%" stopColor={c.sky1} />
          <stop offset="72%" stopColor={c.sky1} />
          <stop offset="90%" stopColor={c.sky2} />
          <stop offset="100%" stopColor={c.sky2} />
        </linearGradient>
        <radialGradient id={id('sun')} cx="0.28" cy="0.72" r="0.55">
          <stop offset="0%" stopColor={c.glow} stopOpacity={tone === 'light' || tone === 'warm' ? 0.55 : 0.85} />
          <stop offset="45%" stopColor={c.glow} stopOpacity="0.22" />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('flareglow')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={c.flame2} stopOpacity="0.85" />
          <stop offset="26%" stopColor={c.flame} stopOpacity="0.38" />
          <stop offset="100%" stopColor={c.flame} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('haze1')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.sky2} stopOpacity="0" />
          <stop offset="70%" stopColor={c.sky2} stopOpacity="0.55" />
          <stop offset="100%" stopColor={c.sky2} stopOpacity="0.72" />
        </linearGradient>
        <linearGradient id={id('haze2')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.sky2} stopOpacity="0" />
          <stop offset="100%" stopColor={c.sky2} stopOpacity="0.34" />
        </linearGradient>
        <linearGradient id={id('ground')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.mid} />
          <stop offset="100%" stopColor={c.near} />
        </linearGradient>
        <linearGradient id={id('fg')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.near} />
          <stop offset="100%" stopColor={c.near} />
        </linearGradient>
        <radialGradient id={id('vig')} cx="0.5" cy="0.46" r="0.78">
          <stop offset="55%" stopColor={c.near} stopOpacity="0" />
          <stop offset="100%" stopColor={c.near} stopOpacity={tone === 'light' || tone === 'warm' ? 0.16 : 0.55} />
        </radialGradient>
        <linearGradient id={id('plume')} x1="0" y1="1" x2="0.3" y2="0">
          <stop offset="0%" stopColor={c.hi} stopOpacity="0.34" />
          <stop offset="100%" stopColor={c.hi} stopOpacity="0" />
        </linearGradient>
        <filter id={id('soft')} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id={id('soft2')} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .${u}-bk { animation: ${u}-bk 3.6s ease-in-out infinite; }
          .${u}-bk2 { animation: ${u}-bk 4.9s ease-in-out infinite; animation-delay: -1.7s; }
          .${u}-bk3 { animation: ${u}-bk 6.2s ease-in-out infinite; animation-delay: -3.1s; }
          .${u}-fl { animation: ${u}-fl 5.5s ease-in-out infinite; transform-origin: 1046px 214px; }
          @keyframes ${u}-bk { 0%,44% { opacity: 1 } 52%,92% { opacity: .12 } 100% { opacity: 1 } }
          @keyframes ${u}-fl { 0%,100% { opacity: .92; transform: scaleY(1) } 40% { opacity: 1; transform: scaleY(1.06) } 70% { opacity: .86; transform: scaleY(.96) } }
        }
      `}</style>

      {/* ── 하늘 ── */}
      <rect width="1200" height="800" fill={url('sky')} />
      <rect width="1200" height="800" fill={url('sun')} />

      {/* 별 */}
      {STARS[tone] > 0 && (
        <g opacity={STARS[tone]}>
          {Array.from({ length: 60 }).map((_, i) => (
            <circle key={i} cx={R() * 1200} cy={R() * 400} r={R() * 1.1 + 0.25} fill={c.hi} opacity={0.15 + R() * 0.6} />
          ))}
        </g>
      )}

      {/* 석양 디스크 (광원 앵커) */}
      <g opacity={tone === 'warm' ? 0.35 : tone === 'light' ? 0.5 : 0.7}>
        <circle cx="330" cy="556" r="66" fill={c.glow} opacity={0.12} filter={url('soft')} />
        <circle cx="330" cy="556" r="34" fill={c.glow} opacity={0.3} filter={url('soft')} />
        <circle cx="330" cy="556" r="19" fill={c.flame2} opacity={0.55} />
      </g>

      {/* 구름 밴드 */}
      <g opacity={tone === 'light' || tone === 'warm' ? 0.75 : 0.55}>
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 120 + i * 46 + R() * 20;
          const w = 260 + R() * 620;
          const x = -80 + R() * 1000;
          return (
            <ellipse key={i} cx={x + w / 2} cy={y} rx={w / 2} ry={5 + R() * 9}
              fill={i > 5 ? c.glow : c.hi} opacity={0.05 + (i / 9) * 0.16} filter={url('soft')} />
          );
        })}
      </g>

      {/* ── 원경 능선 ── */}
      <g opacity={tone === 'light' || tone === 'warm' ? 0.5 : 0.6}>
        <path
          d="M0 548 L90 528 L150 540 L232 512 L300 534 L380 520 L470 542 L556 522 L640 540 L720 526 L810 545 L900 530 L985 546 L1070 528 L1200 544 L1200 620 L0 620Z"
          fill={c.far} opacity={0.42}
        />
      </g>

      {/* ── FAR PLANE ── */}
      <g opacity={tone === 'light' || tone === 'warm' ? 0.55 : 0.62}>
        {farItems.map((it, i) => {
          const base = 566;
          if (it.kind < 0.32) {
            return (
              <g key={i}>
                <rect x={it.x} y={base - it.h} width={it.w * 0.42} height={it.h} fill={c.far} />
                <rect x={it.x - 3} y={base - it.h * 0.62} width={it.w * 0.42 + 6} height={2} fill={c.far} />
              </g>
            );
          }
          if (it.kind < 0.62) {
            return <rect key={i} x={it.x} y={base - it.h * 0.42} width={it.w * 1.5} height={it.h * 0.42} fill={c.far} />;
          }
          if (it.kind < 0.82) {
            return (
              <g key={i}>
                <rect x={it.x} y={base - it.h * 0.5} width={it.w} height={it.h * 0.5} fill={c.far} />
                <ellipse cx={it.x + it.w / 2} cy={base - it.h * 0.5} rx={it.w / 2} ry={it.w * 0.1} fill={c.far} />
              </g>
            );
          }
          return (
            <g key={i}>
              <rect x={it.x} y={base - it.h} width={2.6} height={it.h} fill={c.far} />
              <path d={`M${it.x + 1.3} ${base - it.h} c -8 -26 10 -40 2 -66`} stroke={c.hi} strokeWidth={9} opacity={0.07} fill="none" filter={url('soft')} />
            </g>
          );
        })}
        <rect x="0" y="560" width="1200" height="30" fill={c.far} opacity={0.5} />
      </g>

      {/* haze over far */}
      <rect x="0" y="440" width="1200" height="180" fill={url('haze1')} />

      {/* ── MID PLANE ── */}
      <g>
        {/* 후방 냉각탑 */}
        <g opacity={0.9}>
          <path d="M772 452 C778 512 760 540 758 592 L866 592 C864 540 846 512 852 452 Z" fill={c.mid} />
          <path d="M772 452 h80" stroke={c.edge} strokeWidth="1.6" opacity="0.4" fill="none" />
          <path d="M766 500 h92 M762 528 h100 M760 556 h104" stroke={c.edge} strokeWidth="0.9" opacity="0.2" fill="none" />
          <path d="M812 452 c -16 -40 18 -58 4 -104" stroke={c.hi} strokeWidth="30" opacity="0.07" fill="none" filter={url('soft')} />
          <rect x="770" y="452" width="2" height="140" fill={c.hi} opacity={0.18} />
        </g>

        {/* 증류탑 클러스터 */}
        <Column x={148} base={640} h={330} w={30} c={c} fill={c.mid} />
        <Column x={196} base={640} h={252} w={22} c={c} fill={c.mid} />
        <Column x={238} base={640} h={296} w={26} c={c} fill={c.mid} />
        <Column x={286} base={640} h={198} w={19} c={c} fill={c.mid} />
        <Column x={952} base={640} h={230} w={24} c={c} fill={c.mid} />
        <Column x={992} base={640} h={168} w={17} c={c} fill={c.mid} />

        {/* 탑간 연결 브리지 */}
        <g opacity={0.55}>
          <rect x="178" y="392" width="62" height="3" fill={c.mid} />
          <rect x="178" y="392" width="62" height="1" fill={c.edge} opacity={0.5} />
          <rect x="218" y="470" width="70" height="3" fill={c.mid} />
          <rect x="218" y="470" width="70" height="1" fill={c.edge} opacity={0.5} />
        </g>

        {/* 저장 탱크 */}
        <Tank x={356} base={640} w={92} h={74} c={c} fill={c.mid} />
        <Tank x={462} base={640} w={70} h={58} c={c} fill={c.mid} />
        <Tank x={546} base={640} w={104} h={66} c={c} fill={c.mid} />

        {/* 구형 탱크 */}
        <Sphere cx={690} base={640} r={30} c={c} fill={c.mid} />
        <Sphere cx={742} base={640} r={22} c={c} fill={c.mid} />

        {/* 격자 가스트리 */}
        <g opacity={0.85}>
          {[888, 924].map((x) => (
            <g key={x}>
              <rect x={x} y="486" width="4" height="154" fill={c.mid} />
            </g>
          ))}
          <rect x="884" y="482" width="44" height="5" fill={c.mid} />
          {Array.from({ length: 9 }).map((_, i) => (
            <path key={i} d={`M892 ${492 + i * 17} l32 17 M924 ${492 + i * 17} l-32 17`} stroke={c.mid} strokeWidth="1.6" fill="none" opacity={0.75} />
          ))}
        </g>

        {/* 플레어 스택 */}
        <g>
          <circle cx="1046" cy="214" r="132" fill={url('flareglow')} opacity={tone === 'warm' ? 0.3 : 0.65} />
          <rect x="1041" y="232" width="10" height="408" fill={c.mid} />
          <rect x="1041" y="232" width="2" height="408" fill={c.hi} opacity={0.2} />
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={i} x="1036" y={252 + i * 35} width="20" height="2.4" fill={c.mid} />
          ))}
          <path d="M1046 236 L982 400 M1046 236 L1112 400" stroke={c.edge} strokeWidth="0.8" opacity={0.32} fill="none" />
          <g className={`${u}-fl`}>
            <path
              d="M1046 232 C1034 214 1040 200 1036 186 C1050 196 1052 178 1050 166 C1060 182 1068 198 1062 214 C1060 224 1054 228 1046 232 Z"
              fill={c.flame} opacity={0.95}
            />
            <path
              d="M1046 230 C1040 218 1044 208 1043 198 C1051 206 1054 194 1053 186 C1058 198 1060 212 1054 222 Z"
              fill={c.flame2} opacity={0.9}
            />
          </g>
        </g>

        {/* 세장형 스택 2기 (스카이라인 리듬) */}
        {[{ x: 424, h: 372 }, { x: 872, h: 316 }].map((k, i) => (
          <g key={i}>
            <rect x={k.x} y={640 - k.h} width={13} height={k.h} fill={c.mid} />
            <rect x={k.x} y={640 - k.h} width={2.2} height={k.h} fill={c.hi} opacity={0.18} />
            {Array.from({ length: 7 }).map((_, q) => (
              <rect key={q} x={k.x - 4} y={640 - k.h + 26 + q * (k.h / 8)} width={21} height={2.6} fill={c.mid} />
            ))}
            <rect x={k.x - 3} y={640 - k.h - 7} width={19} height={8} fill={c.mid} />
            <path d={`M${k.x + 6} ${640 - k.h - 8} c -14 -34 16 -52 2 -92 c -6 -18 8 -30 2 -46`}
              stroke={c.hi} strokeWidth={26} opacity={0.055} fill="none" filter={url('soft')} />
          </g>
        ))}

        {/* 메인 파이프랙 */}
        <PipeRack x={60} y={596} w={1080} h={48} posts={17} pipes={4} c={c} fill={c.mid} />

        {/* 지면 */}
        <rect x="0" y="640" width="1200" height="60" fill={url('ground')} />
        <rect x="0" y="640" width="1200" height="1.2" fill={c.edge} opacity={0.28} />
      </g>

      {/* 데크 조명 */}
      <g>
        {lamps.map((l, i) => (
          <circle key={i} cx={l.x} cy={l.y} r={l.s}
            fill={tone === 'light' || tone === 'warm' ? c.accent : c.accent2}
            opacity={tone === 'light' || tone === 'warm' ? l.o * 0.45 : l.o} />
        ))}
      </g>

      {/* haze over mid */}
      <rect x="0" y="560" width="1200" height="160" fill={url('haze2')} />

      {/* ── NEAR / FOREGROUND ── */}
      <g>
        {/* 전경 파이프 번들 */}
        <g>
          <path d="M-20 736 H430 Q470 736 470 776 V820" stroke={c.near} strokeWidth="26" fill="none" strokeLinecap="butt" />
          <path d="M-20 764 H472 Q520 764 520 810 V830" stroke={c.near} strokeWidth="22" fill="none" />
          <path d="M-20 792 H560 Q600 792 600 826 V840" stroke={c.near} strokeWidth="18" fill="none" />
          <path d="M-20 726 H430" stroke={c.hi} strokeWidth="1.6" opacity={0.14} fill="none" />
          <path d="M-20 755 H460" stroke={c.hi} strokeWidth="1.4" opacity={0.11} fill="none" />
        </g>

        {/* 전경 랙 + 지지대 */}
        <g>
          <rect x="0" y="700" width="1200" height="7" fill={c.near} />
          {Array.from({ length: 13 }).map((_, i) => {
            const x = 40 + i * 96;
            return (
              <g key={i}>
                <rect x={x} y="700" width="9" height="100" fill={c.near} />
                <path d={`M${x - 12} 800 L${x + 4.5} 742 L${x + 21} 800`} stroke={c.near} strokeWidth="4" fill="none" opacity={0.8} />
                <rect x={x - 1} y="700" width="1.4" height="100" fill={c.hi} opacity={0.09} />
              </g>
            );
          })}
        </g>

        {/* 우측 전경 대구경 배관 + 밸브 */}
        <g>
          <path d="M1220 690 H900 Q846 690 846 742 V820" stroke={c.near} strokeWidth="34" fill="none" />
          <path d="M1220 678 H900" stroke={c.hi} strokeWidth="1.8" opacity={0.13} fill="none" />
          <rect x="826" y="756" width="40" height="14" rx="2" fill={c.near} />
          <circle cx="846" cy="742" r="17" fill="none" stroke={c.near} strokeWidth="5" />
          <circle cx="846" cy="742" r="17" fill="none" stroke={c.edge} strokeWidth="1" opacity={0.35} />
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (i * Math.PI) / 3;
            return (
              <line key={i} x1={846} y1={742} x2={846 + Math.cos(a) * 16} y2={742 + Math.sin(a) * 16}
                stroke={c.near} strokeWidth="3.2" />
            );
          })}
          <circle cx="846" cy="742" r="5" fill={c.near} />
          <rect x="1010" y="700" width="14" height="100" fill={c.near} />
          <rect x="1052" y="716" width="10" height="84" fill={c.near} />
        </g>

        {/* 전경 하단 그라디언트 마감 */}
        <rect x="0" y="770" width="1200" height="30" fill={url('fg')} />
      </g>

      {/* ── 항공장애등 (blinking beacons) ── */}
      <g>
        <g className={`${u}-bk`}>
          <circle cx="1046" cy="232" r="9" fill={c.accent} opacity={0.4} filter={url('soft2')} />
          <circle cx="1046" cy="232" r="2.6" fill={tone === 'warm' ? c.accent : c.accent2} />
        </g>
        <g className={`${u}-bk2`}>
          <circle cx="163" cy="304" r="8" fill={c.accent} opacity={0.36} filter={url('soft2')} />
          <circle cx="163" cy="304" r="2.4" fill={tone === 'warm' ? c.accent : c.accent2} />
        </g>
        <g className={`${u}-bk3`}>
          <circle cx="251" cy="338" r="8" fill={c.accent} opacity={0.36} filter={url('soft2')} />
          <circle cx="251" cy="338" r="2.4" fill={tone === 'warm' ? c.accent : c.accent2} />
        </g>
        <g className={`${u}-bk2`}>
          <circle cx="964" cy="404" r="7" fill={c.accent} opacity={0.3} filter={url('soft2')} />
          <circle cx="964" cy="404" r="2.1" fill={tone === 'warm' ? c.accent : c.accent2} />
        </g>
        <g className={`${u}-bk`}>
          <circle cx="906" cy="480" r="7" fill={c.accent} opacity={0.3} filter={url('soft2')} />
          <circle cx="906" cy="480" r="2" fill={tone === 'warm' ? c.accent : c.accent2} />
        </g>
      </g>

      {/* 비네트 */}
      <rect width="1200" height="800" fill={url('vig')} />
    </svg>
  );
}

export default RefineryDusk;
