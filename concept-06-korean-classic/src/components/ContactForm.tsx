import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import { contact } from "../data/content";
import { ui } from "../data/site";

/**
 * 온라인 문의 폼 — 클래식 테이블형 입력 레이아웃 (라벨 셀 + 입력 셀).
 * 데모 UI: 제출 시 성공 메시지만 표시하고 실제 전송하지 않는다.
 * ※ 전화번호/이메일 등 회사 연락처를 임의로 표기하지 않으며, 모든 문의는 이 폼으로 접수한다.
 */
export function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "h-10 w-full border border-line-strong bg-white px-3 text-[0.9375rem] text-ink outline-none focus:border-brand";

  const rows: { id: string; label: string; required: boolean; node: "input" | "email" }[] = [
    { id: "company", label: t(contact.fields.company), required: true, node: "input" },
    { id: "name", label: t(contact.fields.name), required: true, node: "input" },
    { id: "email", label: t(contact.fields.email), required: true, node: "email" },
    { id: "phone", label: t(contact.fields.phone), required: false, node: "input" },
  ];

  return (
    <form onSubmit={onSubmit} className="border-t-2 border-brand-navy">
      <div className="divide-y divide-line border-b border-line">
        {rows.map((row) => (
          <div key={row.id} className="sm:flex">
            <label
              htmlFor={`f-${row.id}`}
              className="flex items-center gap-1.5 bg-surface px-4 py-2.5 text-[0.875rem] font-semibold text-ink sm:w-[9.5rem] sm:shrink-0"
            >
              {row.label}
              {row.required ? (
                <span className="text-brand" title={t(ui.support.required)} aria-hidden="true">
                  *
                </span>
              ) : null}
            </label>
            <div className="flex-1 px-4 py-2.5">
              <input
                id={`f-${row.id}`}
                name={row.id}
                type={row.node === "email" ? "email" : "text"}
                required={row.required}
                autoComplete="off"
                className={inputCls}
              />
            </div>
          </div>
        ))}

        <div className="sm:flex">
          <label
            htmlFor="f-type"
            className="flex items-center bg-surface px-4 py-2.5 text-[0.875rem] font-semibold text-ink sm:w-[9.5rem] sm:shrink-0"
          >
            {t(contact.fields.projectType)}
          </label>
          <div className="flex-1 px-4 py-2.5">
            <select id="f-type" name="projectType" defaultValue="" className={inputCls}>
              <option value="" disabled>
                {t(ui.support.select)}
              </option>
              {contact.projectTypes.map((type) => (
                <option key={type.en} value={type.en}>
                  {t(type)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:flex">
          <label
            htmlFor="f-message"
            className="flex items-start gap-1.5 bg-surface px-4 py-2.5 text-[0.875rem] font-semibold text-ink sm:w-[9.5rem] sm:shrink-0"
          >
            {t(contact.fields.message)}
            <span className="text-brand" title={t(ui.support.required)} aria-hidden="true">
              *
            </span>
          </label>
          <div className="flex-1 px-4 py-2.5">
            <textarea
              id="f-message"
              name="message"
              rows={6}
              required
              className="w-full border border-line-strong bg-white px-3 py-2 text-[0.9375rem] text-ink outline-none focus:border-brand"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3">
        <button type="submit" className="btn-blue h-12 w-full px-10 text-[1rem] sm:w-auto">
          {t(contact.submit)}
        </button>
        <p className="text-center text-[0.75rem] text-muted">{t(contact.demoNote)}</p>
        {submitted ? (
          <p
            role="status"
            className="w-full border border-brand bg-brand-soft px-4 py-3 text-center text-[0.875rem] font-semibold text-brand"
          >
            {t(ui.support.submitted)}
          </p>
        ) : null}
      </div>
    </form>
  );
}

export default ContactForm;
