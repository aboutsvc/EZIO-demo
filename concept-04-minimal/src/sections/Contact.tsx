import { useState, type FormEvent, type ReactNode } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { company, contact, nav } from "../data/content";

const fieldBase =
  "w-full border-b border-rule-dark bg-transparent py-3 text-[0.9375rem] text-paper placeholder:text-paper/30 focus:border-accent-on-dark focus:outline-none transition-colors duration-300";

/**
 * 다크 반전 섹션 (2/2) — Contact.
 * 데모 폼: 전송 없음. submit 시 성공 메시지만 표시한다.
 */
export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true); // 데모 — 실제 전송 없음
  };

  return (
    <Section id="contact" index="09" label={t(nav.contact)} tone="dark" rule={false}>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5 lg:col-span-5">
          <Reveal>
            <h2 className="ko text-huge font-extrabold leading-[0.98] tracking-[-0.035em]">
              {t(contact.heading)}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="ko mt-6 max-w-[34ch] text-paper/70">
              {t(contact.sub)}
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-10 border-t border-rule-dark pt-6">
            <p className="label text-paper/50">
              {t({ ko: "소재지", en: "Location" })}
            </p>
            <p className="ko mt-2 max-w-[34ch] text-[0.9375rem] text-paper/80">
              {t(company.address)}
            </p>
          </Reveal>
        </div>

        <Reveal
          className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7"
          delay={120}
        >
          {sent ? (
            <div className="border-t border-rule-dark py-14">
              <p className="ko text-[1.375rem] font-medium leading-snug">
                {t({
                  ko: "문의가 접수되었습니다.",
                  en: "Your inquiry has been received.",
                })}
              </p>
              <p className="ko mt-3 text-paper/60">{t(contact.demoNote)}</p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="link-slide label mt-8 text-accent-on-dark"
              >
                {t({ ko: "다시 작성", en: "Write again" })}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border-t border-rule-dark pt-8">
              <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
                <Field id="contact-company" label={t(contact.fields.company)}>
                  <input id="contact-company" name="company" type="text" required className={fieldBase} />
                </Field>
                <Field id="contact-name" label={t(contact.fields.name)}>
                  <input id="contact-name" name="name" type="text" required className={fieldBase} />
                </Field>
                <Field id="contact-email" label={t(contact.fields.email)}>
                  <input id="contact-email" name="email" type="email" required className={fieldBase} />
                </Field>
                <Field id="contact-phone" label={t(contact.fields.phone)}>
                  <input id="contact-phone" name="phone" type="tel" className={fieldBase} />
                </Field>
                <Field
                  id="contact-projectType"
                  label={t(contact.fields.projectType)}
                  className="sm:col-span-2"
                >
                  <div className="relative">
                    <select
                      id="contact-projectType"
                      name="projectType"
                      defaultValue=""
                      className={`${fieldBase} appearance-none rounded-none pr-8`}
                    >
                      <option value="" disabled>
                        —
                      </option>
                      {contact.projectTypes.map((type) => (
                        <option key={t(type)} value={t(type)} className="bg-ink text-paper">
                          {t(type)}
                        </option>
                      ))}
                    </select>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[0.75rem] text-paper/50"
                    >
                      ↓
                    </span>
                  </div>
                </Field>
                <Field
                  id="contact-message"
                  label={t(contact.fields.message)}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className={`${fieldBase} resize-none`}
                  />
                </Field>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="link-slide label text-paper">
                  {t(contact.submit)} →
                </button>
                <p className="label text-paper/40">{t(contact.demoNote)}</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  className = "",
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label block text-paper/50">
        {label}
      </label>
      {children}
    </div>
  );
}
