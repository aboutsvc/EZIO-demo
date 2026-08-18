import Section, { CornerMarks } from "../components/Section";
import { SwitchgearRoom } from "../components/scenes";
import { useLang } from "../context/LanguageContext";
import { lsElectricArea, productCategories, productCtas } from "../data/content";

export default function ProductArea() {
  const { lang, t } = useLang();

  return (
    <Section
      id="products"
      no="04"
      label="Product Area"
      dwg="DWG NO. EZ-2026-04"
      tone="base"
      heading={t(lsElectricArea.heading)}
      intro={<p>{t(lsElectricArea.body)}</p>}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* 좌: 제품 영역 라벨 + 카테고리 (로고 미사용 — 텍스트 표기만) */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-orange" />
            <span className="mono-label text-fg/80">
              {t(lsElectricArea.eyebrow)}
            </span>
          </div>

          <ul className="mt-8 grid grid-cols-1 border-t border-line sm:grid-cols-2">
            {lsElectricArea.categories.map((c, i) => (
              <li
                key={i}
                className="group flex items-center justify-between border-b border-line px-1 py-5 transition-colors duration-300 hover:bg-ink-2 sm:px-3"
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[0.6875rem] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.975rem] text-fg">{t(c)}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-0 bg-orange transition-all duration-300 group-hover:w-8"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 우: 배전반실 비주얼 — 동일 슬롯에 실제 현장 사진 대체 가능 */}
        <div className="reveal relative lg:col-span-5">
          <CornerMarks />
          <div className="relative aspect-[4/3] overflow-hidden border border-line">
            <SwitchgearRoom tone="dark" className="h-full w-full" />
            <span
              aria-hidden="true"
              className="eng-grid-fine pointer-events-none absolute inset-0 opacity-60"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <span className="mono-label text-muted/60">
              FIG. 02 — SWITCHGEAR LINE-UP
            </span>
            <span className="mono-label text-muted/40">REF. A-02</span>
          </div>
        </div>
      </div>

      {/* 제품 카테고리 — 풀폭 로우 (가격/구매 UI 없음) */}
      <div className="mt-20">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <span className="mono-label text-fg/70">
            {lang === "ko" ? "제품 카테고리" : "Product Categories"}
          </span>
          <span className="mono-label text-muted/50">
            {lang === "ko"
              ? "취급 범위 확정 전 데모 표기"
              : "Demo notation — scope to be confirmed"}
          </span>
        </div>

        <ul>
          {productCategories.map((cat) => (
            <li
              key={cat.id}
              className="group relative border-b border-line transition-colors duration-300 hover:bg-ink-2"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-orange transition-transform duration-[400ms] ease-out group-hover:scale-y-100"
              />
              <div className="reveal grid gap-3 px-2 py-7 md:grid-cols-12 md:gap-8 md:px-6">
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {t(cat.title)}
                  </h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted">
                    {t(cat.desc)}
                  </p>
                </div>
                <div className="md:col-span-8 md:self-center">
                  <ul className="flex flex-wrap gap-2">
                    {cat.products.map((p, i) => (
                      <li
                        key={i}
                        className="border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-muted transition-colors duration-300 group-hover:text-fg/80"
                      >
                        {t(p)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA — 구매/장바구니 아님, 정보 요청 링크 */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-[0.72rem] tracking-[0.14em] text-fg transition-colors hover:border-orange"
          >
            {t(productCtas.requestInfo)}
            <span className="text-muted transition-colors group-hover:text-orange">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-[0.72rem] tracking-[0.14em] text-fg transition-colors hover:border-orange"
          >
            {t(productCtas.technicalInquiry)}
            <span className="text-muted transition-colors group-hover:text-orange">
              →
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
