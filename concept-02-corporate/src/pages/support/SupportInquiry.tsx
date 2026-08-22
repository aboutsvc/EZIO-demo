import { useState, type FormEvent } from "react";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import { Checklist, Section, StepList } from "../../components/PageBlocks";
import { Field, PrivacyConsent, SuccessPanel, inputCls } from "../../components/DemoForm";
import { replyNotice, ui } from "../../data/site";
import { supportInquiry as d } from "../../data/support";

export default function SupportInquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 데모 — 서버 전송 없음
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <PageHero
        eyebrow="고객지원 · 제품·견적 문의"
        title={d.hero.title}
        sub={d.hero.sub}
        note={d.hero.note}
      />

      {/* 1. 접수 가능 항목 */}
      <Section tone="paper" eyebrow="문의 가능 항목" heading={d.acceptable.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.acceptable.items} columns={2} />
            <p className="mt-6 border-t border-line pt-5 text-[0.8438rem] leading-[1.75] text-muted">
              {d.acceptable.note}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 2. 준비 정보 */}
      <Section tone="surface" eyebrow="준비 정보" heading={d.prepare.title}>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="h-full">
            <div className="h-full border border-line bg-paper p-6 lg:p-7" style={{ borderRadius: "3px" }}>
              <h3 className="text-[0.875rem] font-bold text-brand">{d.prepare.essential.label}</h3>
              <div className="mt-5 border-t border-line pt-5">
                <Checklist items={d.prepare.essential.items} columns={1} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={60} className="h-full">
            <div className="h-full border border-line bg-paper p-6 lg:p-7" style={{ borderRadius: "3px" }}>
              <h3 className="text-[0.875rem] font-bold text-ink">{d.prepare.helpful.label}</h3>
              <div className="mt-5 border-t border-line pt-5">
                <Checklist items={d.prepare.helpful.items} columns={1} />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. 데모 폼 */}
      <Section tone="paper" eyebrow="문의 양식" heading={d.form.title}>
        <Reveal>
          <div
            className="mt-10 border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(14,27,51,0.04)] lg:p-9"
            style={{ borderRadius: "3px" }}
          >
            {submitted ? (
              <SuccessPanel
                title={d.success.title}
                body={d.success.body}
                followCtas={d.success.followCtas}
                onReset={() => setSubmitted(false)}
              />
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="border-l-2 border-brand pl-4 text-[0.8438rem] leading-[1.8] text-muted">
                  {d.form.topNote}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="iq-category" label="문의 분류" required className="sm:col-span-2">
                    <select id="iq-category" name="category" required className={inputCls} defaultValue="">
                      <option value="" disabled>
                        {ui.selectPlaceholder}
                      </option>
                      {d.form.categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="iq-company" label="회사명" required>
                    <input id="iq-company" name="company" required className={inputCls} />
                  </Field>
                  <Field id="iq-name" label="이름" required>
                    <input id="iq-name" name="name" required className={inputCls} />
                  </Field>
                  <Field id="iq-phone" label="전화번호" required>
                    <input id="iq-phone" name="phone" type="tel" required className={inputCls} />
                  </Field>
                  <Field id="iq-email" label="이메일" required>
                    <input id="iq-email" name="email" type="email" required className={inputCls} />
                  </Field>

                  <Field id="iq-product" label="제품명 또는 제품군" hint="알고 있는 경우 입력해 주세요.">
                    <input id="iq-product" name="product" className={inputCls} />
                  </Field>
                  <Field id="iq-model" label="모델명" hint="알고 있는 경우 입력해 주세요.">
                    <input id="iq-model" name="model" className={inputCls} />
                  </Field>
                  <Field id="iq-quantity" label="수량" hint="견적 요청 시 권장">
                    <input id="iq-quantity" name="quantity" className={inputCls} />
                  </Field>
                  <Field id="iq-date" label="희망 납기일" hint="해당하는 경우 입력해 주세요.">
                    <input id="iq-date" name="dueDate" className={inputCls} />
                  </Field>

                  <Field id="iq-message" label="문의 내용" required className="sm:col-span-2">
                    <textarea id="iq-message" name="message" rows={6} required className={`${inputCls} resize-y`} />
                  </Field>

                  <div className="sm:col-span-2">
                    <PrivacyConsent id="iq-privacy" label={d.form.privacyLabel} desc={d.form.privacyDesc} />
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.75rem] text-muted">{ui.demoFormNote}</p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-brand px-8 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:bg-brand-dark"
                    style={{ borderRadius: "3px" }}
                  >
                    {d.form.submitLabel}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Section>

      {/* 4. 접수 이후 처리 흐름 */}
      <Section tone="surface" eyebrow="처리 흐름" heading={d.flow.title}>
        <Reveal>
          <div className="mt-10">
            <StepList steps={d.flow.steps} />
          </div>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-6 text-[0.8438rem] leading-[1.75] text-muted">{replyNotice}</p>
        </Reveal>
      </Section>
    </>
  );
}
