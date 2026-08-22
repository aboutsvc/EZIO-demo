import { Link } from "react-router-dom";
import { ui } from "../data/site";

/**
 * 우측 플로팅 퀵메뉴 — [제품·견적 문의 / A/S 접수 / 사업장 소개 / TOP]
 * Desktop: 화면 우측 세로 스택 고정 / Mobile: 하단 고정 바로 전환
 */

function IconInquiry() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 5h16v11H9l-4 4V16H4z" strokeLinejoin="round" />
      <path d="M8 9h8M8 12h5" strokeLinecap="round" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M14.5 6.5a4 4 0 0 0-5.4 4.9L4 16.5 6.5 19l5.1-5.1a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function IconTop() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 19V6" strokeLinecap="round" />
      <path d="m6 12 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuickMenu() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop: 우측 세로 스택 ── */}
      <nav
        aria-label={ui.quick.label}
        className="fixed right-0 top-1/2 z-40 hidden w-[74px] -translate-y-1/2 border border-line bg-white shadow-[0_4px_16px_rgba(21,58,102,0.14)] lg:block"
      >
        <p className="border-b border-line bg-brand-navy py-1.5 text-center text-[0.625rem] font-bold tracking-[0.12em] text-white">
          QUICK
        </p>
        <Link
          to="/support/inquiry"
          className="flex flex-col items-center gap-1 border-b border-line px-1 py-3 text-[0.6875rem] font-semibold text-ink-2 hover:bg-brand-soft hover:text-brand"
        >
          <IconInquiry />
          {ui.quick.inquiry}
        </Link>
        <Link
          to="/support/as"
          className="flex flex-col items-center gap-1 border-b border-line px-1 py-3 text-[0.6875rem] font-semibold text-ink-2 hover:bg-brand-soft hover:text-brand"
        >
          <IconWrench />
          {ui.quick.as}
        </Link>
        <Link
          to="/about/workplace"
          className="flex flex-col items-center gap-1 border-b border-line px-1 py-3 text-[0.6875rem] font-semibold text-ink-2 hover:bg-brand-soft hover:text-brand"
        >
          <IconLocation />
          {ui.quick.workplace}
        </Link>
        <button
          type="button"
          onClick={scrollTop}
          className="flex w-full flex-col items-center gap-1 bg-surface px-1 py-3 text-[0.6875rem] font-bold text-brand-navy hover:bg-brand-soft hover:text-brand"
        >
          <IconTop />
          {ui.quick.top}
        </button>
      </nav>

      {/* ── Mobile: 하단 고정 바 ── */}
      <nav
        aria-label={ui.quick.label}
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-brand-navy/30 bg-white shadow-[0_-2px_10px_rgba(21,58,102,0.14)] lg:hidden"
      >
        <Link
          to="/support/inquiry"
          className="flex flex-col items-center justify-center gap-0.5 border-r border-line py-2 text-[0.6875rem] font-semibold text-ink-2"
        >
          <IconInquiry />
          {ui.quick.inquiry}
        </Link>
        <Link
          to="/support/as"
          className="flex flex-col items-center justify-center gap-0.5 border-r border-line py-2 text-[0.6875rem] font-semibold text-ink-2"
        >
          <IconWrench />
          {ui.quick.as}
        </Link>
        <Link
          to="/about/workplace"
          className="flex flex-col items-center justify-center gap-0.5 border-r border-line py-2 text-[0.6875rem] font-semibold text-ink-2"
        >
          <IconLocation />
          {ui.quick.workplace}
        </Link>
        <button
          type="button"
          onClick={scrollTop}
          className="flex flex-col items-center justify-center gap-0.5 bg-surface py-2 text-[0.6875rem] font-bold text-brand-navy"
        >
          <IconTop />
          {ui.quick.top}
        </button>
      </nav>
    </>
  );
}

export default QuickMenu;
