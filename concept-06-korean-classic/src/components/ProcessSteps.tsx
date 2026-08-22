/**
 * 범용 절차 스텝 그리드 — 번호 사각 배지 + 제목 + 설명.
 * Desktop: 격자 흐름 / Mobile: 세로 스택. 페이지별 절차(5~7단계)에 재사용한다.
 */
export interface ProcessStep {
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  /** lg 기준 열 수 (기본 3) */
  cols?: 2 | 3 | 4;
}

export function ProcessSteps({ steps, cols = 3 }: ProcessStepsProps) {
  const colCls = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" }[cols];
  return (
    <ol className={`grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 ${colCls}`}>
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-3 bg-white p-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-brand text-[0.8125rem] font-bold text-white">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <p className="text-[0.9375rem] font-bold text-ink">{step.title}</p>
            <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-muted">{step.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default ProcessSteps;
