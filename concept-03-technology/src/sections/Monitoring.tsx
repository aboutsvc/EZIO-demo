import Reveal from "../components/Reveal";
import { Container, DemoBadge, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/ui";

const demo = ui.monitoringDemo;

/* ── 반원형 게이지 (SVG) ── */
function Gauge({
  ratio,
  value,
  unit,
  tag,
}: {
  ratio: number;
  value: number;
  unit: string;
  tag: string;
}) {
  const R = 48;
  const ARC = Math.PI * R; // 반원 호 길이 ≈ 150.8
  const clamped = Math.min(Math.max(ratio, 0), 1);
  const target = ARC * (1 - clamped);

  return (
    <svg viewBox="0 0 120 86" className="h-auto w-full max-w-[190px]" role="img" aria-label={`${tag} ${value}${unit}`}>
      {/* track */}
      <path d="M 12 66 A 48 48 0 0 1 108 66" fill="none" stroke="#1e2b45" strokeWidth="6" strokeLinecap="round" />
      {/* ticks */}
      {[0, 0.25, 0.5, 0.75, 1].map((p) => {
        const a = Math.PI * (1 - p);
        const x1 = 60 + Math.cos(a) * 39;
        const y1 = 66 - Math.sin(a) * 39;
        const x2 = 60 + Math.cos(a) * 34;
        const y2 = 66 - Math.sin(a) * 34;
        return <line key={p} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#243352" strokeWidth="1" />;
      })}
      {/* value arc */}
      <path
        d="M 12 66 A 48 48 0 0 1 108 66"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={ARC}
        className="anim-gauge"
        style={{
          ["--gauge-empty" as string]: `${ARC}`,
          ["--gauge-target" as string]: `${target}`,
          strokeDashoffset: ARC,
        }}
      />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        fill="#dce4f2"
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
        fontSize="20"
        fontWeight="500"
      >
        {value}
      </text>
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fill="#7c8ca8"
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
        fontSize="9"
        letterSpacing="1.4"
      >
        {unit || tag}
      </text>
    </svg>
  );
}

/* ── 트렌드 라인 차트 ── */
function TrendChart() {
  const pts = demo.trend;
  const W = 480;
  const H = 150;
  const padX = 8;
  const padY = 14;
  const step = (W - padX * 2) / (pts.length - 1);
  const coords = pts.map((v, i) => [padX + i * step, H - padY - v * (H - padY * 2)] as const);
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L ${coords[coords.length - 1][0].toFixed(1)} ${H} L ${padX} ${H} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Demo load trend chart">
      <defs>
        <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="0"
          y1={padY + i * ((H - padY * 2) / 3)}
          x2={W}
          y2={padY + i * ((H - padY * 2) / 3)}
          stroke="#172339"
          strokeWidth="1"
        />
      ))}
      <path d={area} fill="url(#trend-fill)" />
      <path d={line} fill="none" stroke="#2dd4bf" strokeWidth="1.6" className="anim-trend" />
      {/* scan line */}
      <g className="anim-scan" style={{ ["--scan-w" as string]: `${W}px` }}>
        <line x1="0" y1="0" x2="0" y2={H} stroke="#38bdf8" strokeWidth="1" opacity="0.25" />
      </g>
      {/* latest marker */}
      <circle cx={coords[coords.length - 1][0]} cy={coords[coords.length - 1][1]} r="3" fill="#2dd4bf" />
    </svg>
  );
}

const LEVEL_STYLE: Record<string, { dot: string; text: string }> = {
  warn: { dot: "bg-[var(--color-amber-alarm)]", text: "text-[var(--color-amber-alarm)]" },
  info: { dot: "bg-[var(--color-cyan-data)]", text: "text-[var(--color-cyan-data)]" },
  ok: { dot: "bg-[var(--color-teal-data)]", text: "text-[var(--color-teal-data)]" },
};

const FEEDER_TONE: Record<string, "ok" | "alarm" | "idle"> = {
  run: "ok",
  warn: "alarm",
  idle: "idle",
};

export default function Monitoring() {
  const { t } = useLanguage();
  const s = ui.sections.monitoring;

  return (
    <Section id="monitoring">
      <div className="dot-grid-tight pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <Reveal>
          <SectionHeader index={s.index} eyebrow={s.eyebrow} title={t(s.title)} desc={t(s.desc)} />
        </Reveal>

        <Reveal className="mt-8" delay={80}>
          <div className="flex flex-wrap items-start gap-3 border border-[var(--color-amber-alarm)]/30 bg-[var(--color-amber-alarm)]/[0.06] px-4 py-3">
            <DemoBadge label="DEMO SIMULATION" />
            <p className="max-w-3xl text-[0.75rem] leading-relaxed text-[var(--color-ink-dim)]">
              {t(s.demoNotice)}
            </p>
          </div>
        </Reveal>

        {/* dashboard mockup */}
        <Reveal className="mt-6" delay={140}>
          <div className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-navy-800)]">
            {/* title bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-line)] bg-[var(--color-navy-700)] px-4 py-2.5">
              <div className="tag-mono flex items-center gap-2.5 text-[0.625rem] text-[var(--color-ink)]">
                <StatusLed tone="ok" />
                POWER MONITORING · HMI
                <span className="text-[var(--color-ink-faint)]">/ DEMO</span>
              </div>
              <div className="tag-mono flex items-center gap-3 text-[0.625rem] text-[var(--color-ink-faint)]">
                <span>{t(demo.window)}</span>
                <span className="hidden sm:inline">SIMULATED</span>
              </div>
            </div>

            <div className="grid gap-px bg-[var(--color-line)] lg:grid-cols-3">
              {/* gauges */}
              <div className="bg-[var(--color-navy-900)] p-5 lg:col-span-1">
                <PanelLabel text={t(s.panels.gauges)} />
                <div className="mt-4 grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-5">
                  {demo.gauges.map((g) => (
                    <div key={g.id} className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-4">
                      <Gauge
                        ratio={(g.value - g.min) / (g.max - g.min)}
                        value={g.value}
                        unit={g.unit}
                        tag={g.tag}
                      />
                      <div className="mt-1 text-center lg:mt-0 lg:text-left">
                        <div className="text-[0.8125rem] font-medium text-[var(--color-ink)]">
                          {t(g.label)}
                        </div>
                        <div className="tag-mono mt-0.5 text-[0.5625rem] text-[var(--color-ink-faint)]">
                          {g.tag}
                        </div>
                        <div className="mt-1 hidden text-[0.6875rem] text-[var(--color-ink-dim)] lg:block">
                          {t(g.nominal)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* trend + feeders */}
              <div className="flex flex-col gap-px bg-[var(--color-line)] lg:col-span-2">
                <div className="bg-[var(--color-navy-900)] p-5">
                  <div className="flex items-center justify-between">
                    <PanelLabel text={t(s.panels.trend)} />
                    <span className="tag-mono text-[0.5625rem] text-[var(--color-ink-faint)]">
                      {t(demo.trendUnit)}
                    </span>
                  </div>
                  <div className="mt-3 overflow-hidden">
                    <TrendChart />
                  </div>
                </div>

                <div className="bg-[var(--color-navy-900)] p-5">
                  <PanelLabel text={t(s.panels.feeders)} />
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {demo.feeders.map((f) => (
                      <li
                        key={f.tag}
                        className="flex items-center gap-3 border border-[var(--color-line-soft)] px-3 py-2.5"
                      >
                        <StatusLed tone={FEEDER_TONE[f.state]} pulse={f.state !== "idle"} />
                        <span className="tag-mono text-[0.625rem] text-[var(--color-ink)]">{f.tag}</span>
                        <span className="ml-auto text-[0.75rem] text-[var(--color-ink-dim)]">
                          {t(f.label)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* alarms */}
            <div className="border-t border-[var(--color-line)] bg-[var(--color-navy-900)] p-5">
              <div className="flex items-center justify-between">
                <PanelLabel text={t(s.panels.alarms)} />
                <DemoBadge />
              </div>
              <ul className="mt-3 divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
                {demo.alarms.map((a, i) => (
                  <li key={i} className="flex flex-wrap items-center gap-x-4 gap-y-1 py-2.5">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${LEVEL_STYLE[a.level].dot} ${
                        a.level === "warn" ? "anim-led" : ""
                      }`}
                      aria-hidden="true"
                    />
                    <span className="tag-mono text-[0.625rem] text-[var(--color-ink-faint)]">
                      {a.time}
                    </span>
                    <span className={`tag-mono text-[0.625rem] ${LEVEL_STYLE[a.level].text}`}>
                      {a.tag}
                    </span>
                    <span className="text-[0.8125rem] text-[var(--color-ink-dim)]">{t(a.text)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function PanelLabel({ text }: { text: string }) {
  return (
    <div className="tag-mono flex items-center gap-2 text-[0.625rem] text-[var(--color-ink-dim)]">
      <span className="h-2 w-px bg-[var(--color-cyan-data)]" aria-hidden="true" />
      {text}
    </div>
  );
}
