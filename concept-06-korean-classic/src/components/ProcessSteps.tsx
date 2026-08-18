import { useLanguage } from "../context/LanguageContext";
import { processSteps } from "../data/content";

/**
 * 8단계 프로젝트 프로세스
 * Desktop: 가로 흐름(4×2 그리드, 각 스텝 사이 얇은 연결) / Mobile: 세로 타임라인
 */
export function ProcessSteps() {
  const { t } = useLanguage();

  return (
    <ol className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <li key={step.no} className="flex gap-3 bg-white p-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-brand text-[0.8125rem] font-bold text-white">
            {step.no}
          </span>
          <div className="min-w-0">
            <p className="text-[0.9375rem] font-bold text-ink">{t(step.title)}</p>
            <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-muted">{t(step.desc)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default ProcessSteps;
