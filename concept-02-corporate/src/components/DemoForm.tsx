import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ui } from "../data/site";

/* ──────────────────────────────────────────────
 * 데모 폼 공용 요소 — 실제 전송 없음 (submit 시 완료 메시지만 표시)
 * ────────────────────────────────────────────── */

export const inputCls =
  "w-full border border-line bg-paper px-3.5 py-3 text-[0.9375rem] text-ink outline-none transition-colors duration-150 placeholder:text-muted/60 focus:border-brand";

const labelCls = "mb-2 block text-[0.8125rem] font-semibold text-ink";

/** 라벨 + 필수 표시 래퍼 */
export function Field({
  id,
  label,
  required = false,
  className = "",
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  className?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label className={labelCls} htmlFor={id}>
        {label}
        {required && (
          <span className="ml-1 text-brand" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-[0.75rem] leading-[1.6] text-muted">{hint}</p>}
    </div>
  );
}

/** 개인정보 동의 체크박스 */
export function PrivacyConsent({
  id,
  label,
  desc,
}: {
  id: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="border border-line bg-surface p-5" style={{ borderRadius: "3px" }}>
      <label className="flex items-start gap-3 text-[0.875rem] font-semibold text-ink">
        <input
          id={id}
          name={id}
          type="checkbox"
          required
          className="mt-[3px] h-4 w-4 shrink-0 accent-[#0a3d91]"
        />
        <span>
          {label}
          <span className="ml-1 text-brand" aria-hidden="true">
            *
          </span>
        </span>
      </label>
      <p className="mt-2.5 pl-7 text-[0.75rem] leading-[1.7] text-muted">{desc}</p>
    </div>
  );
}

/** 접수 완료 패널 — 데모 표기 필수 */
export function SuccessPanel({
  title,
  body,
  safetyNote,
  followCtas,
  onReset,
}: {
  title: string;
  body: string;
  safetyNote?: string;
  followCtas: readonly { label: string; path: string }[];
  onReset: () => void;
}) {
  return (
    <div className="flex min-h-[420px] flex-col items-start justify-center">
      <span className="flex h-12 w-12 items-center justify-center border border-brand bg-brand-soft">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-brand"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 12.5l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <h3 className="mt-6 text-[1.375rem] font-bold text-ink">{title}</h3>
      <p className="mt-2 text-[0.875rem] font-semibold text-brand">{ui.demoSubmitSuffix}</p>
      <p className="mt-3 max-w-xl text-[0.9375rem] leading-[1.8] text-muted">{body}</p>
      {safetyNote && (
        <p className="mt-3 max-w-xl text-[0.8438rem] leading-[1.7] text-muted">{safetyNote}</p>
      )}
      <div className="mt-8 flex flex-wrap gap-3">
        {followCtas.map((cta) => (
          <Link
            key={cta.path}
            to={cta.path}
            className="border border-line-strong px-6 py-3 text-[0.875rem] font-semibold text-ink transition-colors duration-150 hover:border-brand hover:text-brand"
            style={{ borderRadius: "3px" }}
          >
            {cta.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={onReset}
          className="px-4 py-3 text-[0.875rem] font-semibold text-muted transition-colors duration-150 hover:text-brand"
        >
          {ui.formResetLabel}
        </button>
      </div>
    </div>
  );
}
