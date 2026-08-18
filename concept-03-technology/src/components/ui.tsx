import type { ReactNode } from "react";

/* ──────────────────────────────────────────────
 * SCADA-inspired shared primitives
 * ────────────────────────────────────────────── */

type LedTone = "ok" | "data" | "alarm" | "idle";

const LED_TONE: Record<LedTone, string> = {
  ok: "bg-[var(--color-led-ok)]",
  data: "bg-[var(--color-cyan-data)]",
  alarm: "bg-[var(--color-amber-alarm)]",
  idle: "bg-[var(--color-ink-faint)]",
};

/** 상태 LED 점 — 배전반 표시등 감성 */
export function StatusLed({
  tone = "ok",
  pulse = true,
  className = "",
}: {
  tone?: LedTone;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${LED_TONE[tone]} ${
        pulse ? "anim-led" : ""
      } ${className}`}
    />
  );
}

/** 패널 프레임 — 코너 마커 포함 */
export function Panel({
  children,
  className = "",
  corners = true,
}: {
  children: ReactNode;
  className?: string;
  corners?: boolean;
}) {
  return (
    <div className={`panel relative ${className}`}>
      {corners && (
        <>
          <Corner className="left-[-1px] top-[-1px] border-l border-t" />
          <Corner className="right-[-1px] top-[-1px] border-r border-t" />
          <Corner className="bottom-[-1px] left-[-1px] border-b border-l" />
          <Corner className="bottom-[-1px] right-[-1px] border-b border-r" />
        </>
      )}
      {children}
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-2.5 w-2.5 border-[var(--color-cyan-data)]/45 ${className}`}
    />
  );
}

/** 섹션 헤더 — mono eyebrow + 인덱스 태그 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <div className="tag-mono flex items-center gap-2.5 text-[var(--color-cyan-data)]">
        <StatusLed tone="data" />
        <span>{index}</span>
        <span className="h-px w-6 bg-[var(--color-line)]" aria-hidden="true" />
        <span className="text-[var(--color-ink-dim)]">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {desc && (
        <p
          className={`text-[0.9375rem] leading-relaxed text-[var(--color-ink-dim)] ${
            align === "center" ? "max-w-2xl" : "max-w-2xl"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

/** 섹션 래퍼 */
export function Section({
  id,
  children,
  className = "",
  tone = "base",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised" | "deep";
}) {
  const bg =
    tone === "raised"
      ? "bg-[var(--color-navy-800)]"
      : tone === "deep"
        ? "bg-[var(--color-navy-700)]"
        : "bg-[var(--color-navy-900)]";
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 overflow-hidden border-t border-[var(--color-line-soft)] ${bg} ${className}`}
    >
      {children}
    </section>
  );
}

/** 컨테이너 — 1440 기준 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/** 데모 표기 뱃지 */
export function DemoBadge({ label = "DEMO" }: { label?: string }) {
  return (
    <span className="tag-mono inline-flex items-center gap-1.5 rounded-sm border border-[var(--color-amber-alarm)]/40 bg-[var(--color-amber-alarm)]/10 px-2 py-0.5 text-[0.625rem] text-[var(--color-amber-alarm)]">
      {label}
    </span>
  );
}
