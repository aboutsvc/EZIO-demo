import { useState, type FormEvent } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { company, contact, positioning } from "../data/content";
import { ui } from "../data/ui";

/** Contact — 데모 폼 (실제 전송 없음). 제출 시 성공 메시지만 표시. */
export default function Contact() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 데모 — 서버 전송 없음
    setSubmitted(true);
  };

  const inputCls =
    "w-full border border-line bg-paper px-3.5 py-3 text-[0.9375rem] text-ink outline-none transition-colors duration-150 placeholder:text-muted/60 focus:border-brand";

  const labelCls = "mb-2 block text-[0.8125rem] font-semibold text-ink";

  return (
    <section id="contact" className="border-b border-line bg-paper py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* 좌 — 안내 */}
          <div className="lg:col-span-5">
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand uppercase">
              {t(ui.contactEyebrow)}
            </p>
            <h2 className="mt-3 text-[1.75rem] leading-[1.25] font-bold tracking-[-0.015em] text-ink sm:text-[2.125rem] lg:text-[2.5rem]">
              {t(contact.heading)}
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-[1.8] text-muted">{t(contact.sub)}</p>

            <div
              className="mt-8 border border-line bg-surface p-6"
              style={{ borderRadius: "3px" }}
            >
              <h3 className="text-[0.6875rem] font-semibold tracking-[0.16em] text-brand uppercase">
                {t(ui.contactInfoHeading)}
              </h3>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-[0.75rem] font-semibold text-muted">
                    {t(ui.companyNameLabel)}
                  </dt>
                  <dd className="mt-1 text-[0.9375rem] font-semibold text-ink">
                    {lang === "ko" ? company.nameKo : company.nameEnLong}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.75rem] font-semibold text-muted">
                    {t(ui.companyAddressLabel)}
                  </dt>
                  <dd className="mt-1 text-[0.875rem] leading-[1.7] text-ink">
                    {t(company.address)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.75rem] font-semibold text-muted">
                    {t(ui.solutionsEyebrow)}
                  </dt>
                  <dd className="mt-1 text-[0.875rem] leading-[1.7] text-ink">
                    {t(positioning.supporting)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* 우 — 데모 폼 */}
          <Reveal className="lg:col-span-7">
            <div
              className="border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(14,27,51,0.04)] lg:p-9"
              style={{ borderRadius: "3px" }}
            >
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-start justify-center">
                  <span className="flex h-12 w-12 items-center justify-center border border-brand bg-brand-soft">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-brand"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 12.5l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="mt-6 text-[1.375rem] font-bold text-ink">
                    {t(ui.contactSuccessTitle)}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.9375rem] leading-[1.8] text-muted">
                    {t(ui.contactSuccessBody)}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-line-strong px-6 py-3 text-[0.875rem] font-semibold text-ink transition-colors duration-150 hover:border-brand hover:text-brand"
                    style={{ borderRadius: "3px" }}
                  >
                    {t(ui.contactReset)}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="cf-company">
                        {t(contact.fields.company)}
                        <span className="ml-1 text-brand">*</span>
                      </label>
                      <input id="cf-company" name="company" required className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="cf-name">
                        {t(contact.fields.name)}
                        <span className="ml-1 text-brand">*</span>
                      </label>
                      <input id="cf-name" name="name" required className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="cf-email">
                        {t(contact.fields.email)}
                        <span className="ml-1 text-brand">*</span>
                      </label>
                      <input
                        id="cf-email"
                        name="email"
                        type="email"
                        required
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="cf-phone">
                        {t(contact.fields.phone)}
                      </label>
                      <input id="cf-phone" name="phone" type="tel" className={inputCls} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="cf-type">
                        {t(contact.fields.projectType)}
                      </label>
                      <select id="cf-type" name="projectType" className={inputCls} defaultValue="">
                        <option value="" disabled>
                          {t(ui.contactSelectPlaceholder)}
                        </option>
                        {contact.projectTypes.map((pt, i) => (
                          <option key={i} value={pt.en}>
                            {t(pt)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="cf-message">
                        {t(contact.fields.message)}
                        <span className="ml-1 text-brand">*</span>
                      </label>
                      <textarea
                        id="cf-message"
                        name="message"
                        rows={6}
                        required
                        className={`${inputCls} resize-y`}
                      />
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[0.75rem] text-muted">{t(contact.demoNote)}</p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-brand px-8 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark"
                      style={{ borderRadius: "3px" }}
                    >
                      {t(contact.submit)}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
