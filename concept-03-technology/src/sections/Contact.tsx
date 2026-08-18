import { useState, type FormEvent, type ReactNode } from "react";
import Reveal from "../components/Reveal";
import { Container, Section, SectionHeader, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { company, contact } from "../data/content";
import { ui } from "../data/ui";

const inputClass =
  "w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-navy-900)] px-3.5 py-3 text-[0.875rem] text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-cyan-data)]/70";

export default function Contact() {
  const { t } = useLanguage();
  const s = ui.sections.contact;
  const [sent, setSent] = useState(false);

  // 데모 폼 — 실제 전송 없음
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="contact" tone="raised">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(700px 420px at 80% 20%, rgba(45,212,191,0.08), transparent 65%)",
        }}
      />
      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeader
              index={s.index}
              eyebrow={s.eyebrow}
              title={t(contact.heading)}
              desc={t(contact.sub)}
            />

            <dl className="mt-10 space-y-px border border-[var(--color-line)] bg-[var(--color-line)]">
              <div className="bg-[var(--color-navy-900)] px-4 py-4">
                <dt className="tag-mono text-[0.5625rem] text-[var(--color-ink-faint)]">COMPANY</dt>
                <dd className="mt-1.5 text-[0.875rem] text-[var(--color-ink)]">
                  {t({ ko: company.nameKo, en: company.nameEnLong })}
                </dd>
              </div>
              <div className="bg-[var(--color-navy-900)] px-4 py-4">
                <dt className="tag-mono text-[0.5625rem] text-[var(--color-ink-faint)]">ADDRESS</dt>
                <dd className="mt-1.5 text-[0.875rem] leading-relaxed text-[var(--color-ink)]">
                  {t(company.address)}
                </dd>
              </div>
            </dl>

            <div className="tag-mono mt-6 flex items-center gap-2 text-[0.625rem] text-[var(--color-amber-alarm)]">
              <StatusLed tone="alarm" />
              {t(contact.demoNote)}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-navy-900)]/80">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-navy-700)] px-4 py-2.5">
                <span className="tag-mono flex items-center gap-2.5 text-[0.625rem] text-[var(--color-ink)]">
                  <StatusLed tone="ok" />
                  INQUIRY FORM
                </span>
                <span className="tag-mono text-[0.5625rem] text-[var(--color-ink-faint)]">DEMO</span>
              </div>

              {sent ? (
                <div className="flex flex-col items-start gap-4 p-8 sm:p-10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-teal-data)]/50 text-[var(--color-teal-data)]">
                    ✓
                  </span>
                  <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                    {t(s.successTitle)}
                  </h3>
                  <p className="text-[0.875rem] text-[var(--color-ink-dim)]">{t(s.successBody)}</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 rounded-sm border border-[var(--color-line)] px-4 py-2.5 text-[0.8125rem] text-[var(--color-ink)] transition-colors hover:border-[var(--color-cyan-data)]/60"
                  >
                    {t(s.reset)}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
                  <Field label={t(contact.fields.company)} required>
                    <input name="company" type="text" required className={inputClass} />
                  </Field>
                  <Field label={t(contact.fields.name)} required>
                    <input name="name" type="text" required className={inputClass} />
                  </Field>
                  <Field label={t(contact.fields.email)} required>
                    <input name="email" type="email" required className={inputClass} />
                  </Field>
                  <Field label={t(contact.fields.phone)}>
                    <input name="phone" type="tel" className={inputClass} />
                  </Field>
                  <Field label={t(contact.fields.projectType)} className="sm:col-span-2">
                    <select name="projectType" defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        {t(s.selectPlaceholder)}
                      </option>
                      {contact.projectTypes.map((p, i) => (
                        <option key={i} value={p.en}>
                          {t(p)}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t(contact.fields.message)} className="sm:col-span-2" required>
                    <textarea name="message" rows={5} required className={`${inputClass} resize-y`} />
                  </Field>
                  <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2.5 rounded-sm bg-[var(--color-cyan-data)] px-5 py-3 text-[0.875rem] font-semibold text-[#04121f] transition-colors hover:bg-[var(--color-teal-data)]"
                    >
                      {t(contact.submit)}
                      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                        →
                      </span>
                    </button>
                    <span className="text-[0.6875rem] text-[var(--color-ink-faint)]">
                      {t(contact.demoNote)}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  children,
  className = "",
  required = false,
}: {
  label: string;
  children: ReactNode;
  className?: string;
  required?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="tag-mono flex items-center gap-2 text-[0.5625rem] text-[var(--color-ink-dim)]">
        {label}
        {required && (
          <span className="text-[var(--color-cyan-data)]">{t(ui.sections.contact.required)}</span>
        )}
      </span>
      {children}
    </label>
  );
}
