import type { ReactNode } from "react";
import Section, { CornerMarks } from "../components/Section";
import { HmiScreen } from "../components/scenes";
import { useLang } from "../context/LanguageContext";
import { featuredProject, projectCustomerName } from "../data/content";

function SpecRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-12 sm:gap-6">
      <dt className="mono-label sm:col-span-4 lg:col-span-3">{label}</dt>
      <dd className="text-[0.95rem] leading-relaxed text-fg sm:col-span-8 lg:col-span-9">
        {children}
      </dd>
    </div>
  );
}

export default function FeaturedProject() {
  const { lang, t } = useLang();
  // 고객명은 helper를 통해서만 표기 (실명 노출 금지)
  const customer = projectCustomerName(lang);

  return (
    <Section
      id="project"
      no="07"
      label="Featured Project"
      dwg="DWG NO. EZ-2026-07"
      tone="alt"
      heading={t(featuredProject.title)}
      intro={<p>{t(featuredProject.summary)}</p>}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* 스펙 시트 — 라벨 컬럼 / 값 컬럼 */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between border-b-2 border-line pb-3">
            <span className="mono-label text-orange">Project Data Sheet</span>
            <span className="mono-label text-muted/50">SHEET 1 / 1</span>
          </div>

          <dl className="mt-2">
            <SpecRow label={lang === "ko" ? "고객" : "Client"}>
              {customer}
            </SpecRow>
            <SpecRow label={lang === "ko" ? "산업" : "Industry"}>
              {t(featuredProject.industry)}
            </SpecRow>
            <SpecRow label={lang === "ko" ? "위치" : "Location"}>
              {t(featuredProject.location)}
            </SpecRow>
            <SpecRow label={lang === "ko" ? "프로젝트명" : "Project"}>
              {t(featuredProject.title)}
            </SpecRow>
            <SpecRow label={lang === "ko" ? "수행 범위" : "Scope"}>
              <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {featuredProject.scope.map((s, i) => (
                  <li key={i} className="flex gap-3 text-[0.875rem]">
                    <span className="font-mono text-[0.6875rem] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-fg/90">{t(s)}</span>
                  </li>
                ))}
              </ul>
            </SpecRow>
          </dl>

          <p className="mt-6 text-[0.9rem] leading-[1.85] text-muted">
            {t(featuredProject.summary)}
          </p>
        </div>

        {/* 감시 화면 비주얼 — 동일 슬롯에 실제 현장 사진/화면 캡처 대체 가능 */}
        <div className="reveal relative lg:col-span-5">
          <CornerMarks />
          <div className="relative aspect-[4/3] overflow-hidden border border-line">
            <HmiScreen tone="dark" className="h-full w-full" />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <span className="mono-label text-muted/60">
              FIG. 04 — MONITORING VIEW
            </span>
            <span className="mono-label text-muted/40">REF. A-04</span>
          </div>

          <div className="mt-8 border border-line p-6">
            <span className="mono-label text-fg/70">
              {lang === "ko" ? "수행 범위 요약" : "Scope Summary"}
            </span>
            <ul className="mt-4 flex flex-wrap gap-2">
              {featuredProject.scope.slice(0, 6).map((s, i) => (
                <li
                  key={i}
                  className="border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-muted"
                >
                  {t(s)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
