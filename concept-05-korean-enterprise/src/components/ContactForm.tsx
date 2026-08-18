import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import { contact } from "../data/content";
import { ui } from "../data/ui";

/** 데모 문의 폼 — 실제 전송 없음. 확인된 연락처가 없어 문의 경로는 이 폼으로만 안내한다. */
export default function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full border border-line bg-white px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors placeholder:text-faint focus:border-brand";
  const labelClass = "mb-2 block text-[0.8rem] font-semibold text-ink";

  return (
    <form onSubmit={onSubmit} className="border border-line bg-surface p-6 lg:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-company">
            {t(contact.fields.company)}
          </label>
          <input id="cf-company" name="company" type="text" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-name">
            {t(contact.fields.name)}{" "}
            <span className="font-normal text-brand">({t(ui.formRequired)})</span>
          </label>
          <input id="cf-name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">
            {t(contact.fields.email)}{" "}
            <span className="font-normal text-brand">({t(ui.formRequired)})</span>
          </label>
          <input id="cf-email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-phone">
            {t(contact.fields.phone)}
          </label>
          <input id="cf-phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="cf-type">
            {t(contact.fields.projectType)}
          </label>
          <select id="cf-type" name="projectType" className={inputClass} defaultValue="">
            <option value="" disabled>
              {t(ui.formSelectPlaceholder)}
            </option>
            {contact.projectTypes.map((type) => (
              <option key={type.en} value={type.en}>
                {t(type)}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="cf-message">
            {t(contact.fields.message)}{" "}
            <span className="font-normal text-brand">({t(ui.formRequired)})</span>
          </label>
          <textarea id="cf-message" name="message" rows={6} required className={inputClass} />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.78rem] text-muted">{t(contact.demoNote)}</p>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-brand to-brand-sky px-8 py-3.5 text-[0.9rem] font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
        >
          {t(contact.submit)}
        </button>
      </div>

      {sent && (
        <p
          role="status"
          className="mt-5 border border-brand-tint bg-brand-soft px-4 py-3 text-[0.85rem] font-medium text-brand"
        >
          {t(ui.formSuccess)}
        </p>
      )}
    </form>
  );
}
