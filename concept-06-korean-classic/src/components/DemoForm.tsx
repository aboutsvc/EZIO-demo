import { useState, type FormEvent } from "react";
import { ui } from "../data/site";

/**
 * 데모 접수 폼 — 클래식 테이블형 입력 레이아웃 (라벨 셀 + 입력 셀).
 * 제품·견적 문의 / A/S 접수 두 페이지가 필드 구성을 주입해 재사용한다.
 * 데모 UI: 제출 시 성공 메시지만 표시하고 실제 전송하지 않는다.
 * ※ 전화번호/이메일 등 회사 연락처를 임의로 표기하지 않으며, 모든 문의는 이 폼으로 접수한다.
 */

export interface DemoFormField {
  id: string;
  label: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  options?: string[];
  placeholder?: string;
}

interface DemoFormProps {
  /** 필드 id prefix (한 페이지 내 중복 방지) */
  formId: string;
  fields: DemoFormField[];
  /** 개인정보 동의 체크 라벨 */
  consentLabel: string;
  submitLabel: string;
  /** 제출 시 표시할 완료 메시지 — "(데모 — 실제 전송되지 않습니다)" 포함 */
  successMessage: string;
}

export function DemoForm({ formId, fields, consentLabel, submitLabel, successMessage }: DemoFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "h-10 w-full border border-line-strong bg-white px-3 text-[0.9375rem] text-ink outline-none focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="border-t-2 border-brand-navy">
      <div className="divide-y divide-line border-b border-line">
        {fields.map((field) => {
          const id = `${formId}-${field.id}`;
          const type = field.type ?? "text";
          return (
            <div key={field.id} className="sm:flex">
              <label
                htmlFor={id}
                className={`flex gap-1.5 bg-surface px-4 py-2.5 text-[0.875rem] font-semibold text-ink sm:w-[10.5rem] sm:shrink-0 ${
                  type === "textarea" ? "items-start" : "items-center"
                }`}
              >
                {field.label}
                {field.required ? (
                  <span className="text-brand" title={ui.form.required} aria-hidden="true">
                    *
                  </span>
                ) : null}
              </label>
              <div className="flex-1 px-4 py-2.5">
                {type === "select" ? (
                  <select id={id} name={field.id} defaultValue="" required={field.required} className={inputCls}>
                    <option value="" disabled>
                      {ui.form.select}
                    </option>
                    {(field.options ?? []).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : type === "textarea" ? (
                  <textarea
                    id={id}
                    name={field.id}
                    rows={6}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full border border-line-strong bg-white px-3 py-2 text-[0.9375rem] text-ink outline-none focus:border-brand"
                  />
                ) : (
                  <input
                    id={id}
                    name={field.id}
                    type={type}
                    required={field.required}
                    placeholder={field.placeholder}
                    autoComplete="off"
                    className={inputCls}
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* 개인정보 동의 (데모) */}
        <div className="px-4 py-3">
          <label className="flex items-start gap-2 text-[0.875rem] text-ink-2">
            <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#1b5aa6]" />
            <span>
              {consentLabel}
              <span className="text-brand" title={ui.form.required} aria-hidden="true">
                {" "}
                *
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3">
        <button type="submit" className="btn-blue h-12 w-full px-10 text-[1rem] sm:w-auto">
          {submitLabel}
        </button>
        <p className="text-center text-[0.75rem] text-muted">{ui.form.demoNote}</p>
        {submitted ? (
          <p
            role="status"
            className="w-full border border-brand bg-brand-soft px-4 py-3 text-center text-[0.875rem] font-semibold text-brand"
          >
            {successMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}

export default DemoForm;
