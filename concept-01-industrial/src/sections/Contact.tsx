import { useState, type FormEvent } from "react";
import Section from "../components/Section";
import { useLang } from "../context/LanguageContext";
import { company, contact } from "../data/content";

const inputClass =
  "w-full border border-line bg-ink px-4 py-3 text-[0.9rem] text-fg placeholder:text-muted/50 transition-colors focus:border-orange focus:outline-none";

export default function Contact() {
  const { lang, t } = useLang();
  const [sent, setSent] = useState(false);

  // 데모 폼 — 실제 전송 없음
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section
      id="contact"
      no="10"
      label="Contact"
      dwg="DWG NO. EZ-2026-10"
      tone="base"
      grid
      heading={t(contact.heading)}
      intro={<p>{t(contact.sub)}</p>}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* 좌: 연락 정보 */}
        <div className="lg:col-span-4">
          <div className="border-t-2 border-line pt-6">
            <span className="mono-label text-orange">
              {lang === "ko" ? "문의 안내" : "Inquiry"}
            </span>
            <p className="mt-5 text-[0.9rem] leading-[1.85] text-muted">
              {t(contact.sub)}
            </p>
          </div>

          <dl className="mt-10">
            <div className="border-b border-line py-4">
              <dt className="mono-label">
                {lang === "ko" ? "회사" : "Company"}
              </dt>
              <dd className="mt-2 text-[0.9rem] text-fg">
                {lang === "ko" ? company.nameKo : company.nameEnLong}
              </dd>
            </div>
            <div className="border-b border-line py-4">
              <dt className="mono-label">
                {lang === "ko" ? "소재지" : "Location"}
              </dt>
              <dd className="mt-2 text-[0.9rem] leading-relaxed text-fg">
                {t(company.address)}
              </dd>
            </div>
            <div className="border-b border-line py-4">
              <dt className="mono-label">
                {lang === "ko" ? "사업영역" : "Business"}
              </dt>
              <dd className="mt-2 text-[0.9rem] text-fg">
                {t(company.facts[2].value)}
              </dd>
            </div>
          </dl>
        </div>

        {/* 우: 데모 폼 */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} noValidate className="reveal">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="cf-company"
                  className="mono-label mb-2 block text-fg/70"
                >
                  {t(contact.fields.company)}
                </label>
                <input id="cf-company" name="company" className={inputClass} />
              </div>
              <div>
                <label
                  htmlFor="cf-name"
                  className="mono-label mb-2 block text-fg/70"
                >
                  {t(contact.fields.name)}
                </label>
                <input id="cf-name" name="name" className={inputClass} />
              </div>
              <div>
                <label
                  htmlFor="cf-email"
                  className="mono-label mb-2 block text-fg/70"
                >
                  {t(contact.fields.email)}
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="cf-phone"
                  className="mono-label mb-2 block text-fg/70"
                >
                  {t(contact.fields.phone)}
                </label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="cf-type"
                  className="mono-label mb-2 block text-fg/70"
                >
                  {t(contact.fields.projectType)}
                </label>
                <div className="relative">
                  <select
                    id="cf-type"
                    name="projectType"
                    defaultValue=""
                    className={`${inputClass} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      {lang === "ko" ? "선택하세요" : "Select"}
                    </option>
                    {contact.projectTypes.map((pt, i) => (
                      <option key={i} value={pt.en}>
                        {t(pt)}
                      </option>
                    ))}
                  </select>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[0.7rem] text-muted"
                  >
                    ▾
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="cf-message"
                  className="mono-label mb-2 block text-fg/70"
                >
                  {t(contact.fields.message)}
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={6}
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-orange px-8 py-3.5 font-mono text-[0.75rem] tracking-[0.14em] text-ink transition-colors hover:bg-fg"
              >
                {t(contact.submit)}
                <span aria-hidden="true">→</span>
              </button>
              <span className="mono-label text-muted/60">
                {t(contact.demoNote)}
              </span>
            </div>

            {/* 제출 성공 메시지 (데모) */}
            <div aria-live="polite">
              {sent && (
                <div className="mt-6 flex items-start gap-3 border border-orange/60 bg-ink-2 px-5 py-4">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45em] h-[7px] w-[7px] shrink-0 rotate-45 bg-orange"
                  />
                  <p className="text-[0.875rem] leading-relaxed text-fg">
                    {lang === "ko"
                      ? "문의가 접수되었습니다. (데모 — 실제로 전송되지 않습니다.)"
                      : "Your inquiry has been received. (Demo — nothing was actually sent.)"}
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
