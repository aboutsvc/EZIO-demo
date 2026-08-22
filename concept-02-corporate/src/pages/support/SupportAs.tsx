import { useState, type FormEvent } from "react";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import { Checklist, NoteBox, Section, StepList } from "../../components/PageBlocks";
import { Field, PrivacyConsent, SuccessPanel, inputCls } from "../../components/DemoForm";
import { ui } from "../../data/site";
import { supportAs as d } from "../../data/support";

export default function SupportAs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 데모 — 서버 전송 없음
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <PageHero
        eyebrow="고객지원 · A/S 접수"
        title={d.hero.title}
        sub={d.hero.sub}
        note={d.hero.urgentNote}
      />

      {/* 1. 안전 관련 긴급 안내 — 최상단, 시각적으로 구분 */}
      <Section tone="paper">
        <Reveal>
          <NoteBox tone="warn">
            <p className="text-[0.6875rem] font-bold tracking-[0.2em] text-[#b4372f] uppercase">
              안전 관련 긴급 안내
            </p>
            <h2 className="mt-3 text-[1.125rem] leading-[1.5] font-bold text-ink">{d.safety.title}</h2>
            <p className="mt-3 max-w-3xl text-[0.9063rem] leading-[1.85] text-ink/85">{d.safety.body}</p>
            <p className="mt-4 border-t border-[#e0b4b4] pt-4 text-[0.8438rem] font-semibold text-ink/80">
              {d.safety.caution}
            </p>
          </NoteBox>
        </Reveal>
      </Section>

      {/* 2. 접수 가능한 요청 */}
      <Section tone="surface" eyebrow="접수 범위" heading={d.acceptable.title}>
        <Reveal>
          <div className="mt-10 border border-line bg-paper p-6 lg:p-8" style={{ borderRadius: "3px" }}>
            <Checklist items={d.acceptable.items} columns={2} />
            <p className="mt-6 border-t border-line pt-5 text-[0.8438rem] leading-[1.75] text-muted">
              {d.acceptable.note}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. 데모 폼 */}
      <Section tone="paper" eyebrow="접수 양식" heading={d.form.title}>
        <Reveal>
          <div
            className="mt-10 border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(14,27,51,0.04)] lg:p-9"
            style={{ borderRadius: "3px" }}
          >
            {submitted ? (
              <SuccessPanel
                title={d.success.title}
                body={d.success.body}
                safetyNote={d.success.safetyNote}
                followCtas={d.success.followCtas}
                onReset={() => setSubmitted(false)}
              />
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="as-type" label="요청 유형" required className="sm:col-span-2">
                    <select id="as-type" name="type" required className={inputCls} defaultValue="">
                      <option value="" disabled>
                        {ui.selectPlaceholder}
                      </option>
                      {d.form.types.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="as-company" label="회사명" required>
                    <input id="as-company" name="company" required className={inputCls} />
                  </Field>
                  <Field id="as-name" label="이름" required>
                    <input id="as-name" name="name" required className={inputCls} />
                  </Field>
                  <Field id="as-phone" label="전화번호" required>
                    <input id="as-phone" name="phone" type="tel" required className={inputCls} />
                  </Field>
                  <Field id="as-email" label="이메일" required>
                    <input id="as-email" name="email" type="email" required className={inputCls} />
                  </Field>

                  <Field id="as-product" label="제품명" required>
                    <input id="as-product" name="product" required className={inputCls} />
                  </Field>
                  <Field id="as-model" label="모델명" required hint="모르시면 '확인 중'으로 적고 명판 사진을 준비해 주세요.">
                    <input id="as-model" name="model" required className={inputCls} />
                  </Field>
                  <Field id="as-serial" label="시리얼번호" hint="가능한 경우 입력해 주세요.">
                    <input id="as-serial" name="serial" className={inputCls} />
                  </Field>
                  <Field id="as-site" label="설치 또는 사용 현장" required>
                    <input id="as-site" name="site" required className={inputCls} />
                  </Field>

                  <Field id="as-symptom" label="장애 증상과 오류 코드" required className="sm:col-span-2">
                    <textarea id="as-symptom" name="symptom" rows={5} required className={`${inputCls} resize-y`} />
                  </Field>

                  <Field id="as-occurred" label="발생 시점" required>
                    <input id="as-occurred" name="occurredAt" required className={inputCls} />
                  </Field>
                  <Field id="as-urgency" label="긴급도">
                    <select id="as-urgency" name="urgency" className={inputCls} defaultValue="">
                      <option value="" disabled>
                        {ui.selectPlaceholder}
                      </option>
                      {d.form.urgencyLevels.map((u) => (
                        <option key={u} value={u}>
                          {u}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <p className="border-l-2 border-brand pl-4 text-[0.8125rem] leading-[1.8] text-muted">
                      {d.form.urgencyNote}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <PrivacyConsent id="as-privacy" label={d.form.privacyLabel} desc={d.form.privacyDesc} />
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

      {/* 4. 접수 이후 처리 절차 */}
      <Section tone="surface" eyebrow="처리 절차" heading={d.flow.title}>
        <Reveal>
          <div className="mt-10">
            <StepList steps={d.flow.steps} />
          </div>
        </Reveal>
      </Section>

      {/* 5. 제조사 확인 안내 + 비보장 문구 */}
      <Section tone="paper" eyebrow="제조사 확인" heading={d.manufacturer.title}>
        <Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="border border-line bg-paper p-7 lg:col-span-7 lg:p-8" style={{ borderRadius: "3px" }}>
              <p className="text-[0.9375rem] leading-[1.85] text-ink/85">{d.manufacturer.body}</p>
            </div>
            <div className="lg:col-span-5">
              <NoteBox className="h-full">
                <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-brand uppercase">
                  안내
                </p>
                <p className="mt-3 text-[0.8438rem] leading-[1.8] text-ink/80">
                  {d.manufacturer.nonGuarantee}
                </p>
              </NoteBox>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
