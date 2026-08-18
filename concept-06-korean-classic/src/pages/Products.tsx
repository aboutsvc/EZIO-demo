import { useState } from "react";
import { Link } from "react-router-dom";
import Scene from "../components/Scene";
import SectionTitle from "../components/SectionTitle";
import SubPage from "../components/SubPage";
import { useLanguage } from "../context/LanguageContext";
import { productCategories, productCtas } from "../data/content";
import { ui } from "../data/site";

/**
 * 제품소개 — 좌측 카테고리 LNB(자체) + 우측 표/카드 혼합 목록
 * ⚠️ 가격 / 장바구니 / 구매 버튼 없음. 카탈로그 버튼은 실제 파일이 없으므로 비활성 처리한다.
 */
export function Products() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(productCategories[0].id);
  const active = productCategories.find((c) => c.id === activeId) ?? productCategories[0];

  const categoryNav = (
    <>
      {/* Desktop 카테고리 LNB */}
      <nav aria-label={t(ui.products.heading)} className="hidden lg:block">
        <p className="border border-brand-navy bg-brand-navy px-4 py-4 text-[1.125rem] font-bold text-white">
          {t(ui.products.heading)}
        </p>
        <ul className="border border-t-0 border-line">
          {productCategories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <li key={cat.id} className="border-b border-line last:border-b-0">
                <button
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex w-full items-center justify-between px-4 py-3 text-left text-[0.9375rem] transition-colors ${
                    isActive
                      ? "bg-brand-soft font-bold text-brand"
                      : "bg-white text-ink-2 hover:bg-surface hover:text-brand"
                  }`}
                >
                  <span>{t(cat.title)}</span>
                  <span aria-hidden="true" className={isActive ? "text-brand" : "text-line-strong"}>
                    ›
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile 카테고리 → 가로 탭 */}
      <div className="-mx-4 overflow-x-auto px-4 lg:hidden">
        <ul className="flex min-w-max gap-1.5">
          {productCategories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`border px-3 py-2 text-[0.875rem] font-semibold ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-white text-ink-2"
                  }`}
                >
                  {t(cat.title)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );

  return (
    <SubPage path="/products" aside={categoryNav}>
      <SectionTitle size="lg">{t(active.title)}</SectionTitle>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_260px]">
        <div>
          <p className="text-[0.9375rem] leading-relaxed text-ink-2">{t(active.desc)}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/support#inquiry" className="btn-blue h-10 px-4 text-[0.875rem]">
              {t(productCtas.requestInfo)}
            </Link>
            <Link to="/business" className="btn-line h-10 px-4 text-[0.875rem]">
              {t(productCtas.viewSolutions)}
            </Link>
            {/* 카탈로그 — 실제 파일 없음 (데모 비활성) */}
            <button
              type="button"
              disabled
              title={t(ui.products.catalogTip)}
              className="inline-flex h-10 cursor-not-allowed items-center border border-line bg-surface px-4 text-[0.875rem] font-semibold text-line-strong"
            >
              {t(ui.products.catalogBtn)}
            </button>
          </div>
        </div>
        <div className="relative order-first h-[150px] overflow-hidden border border-line md:order-none md:h-auto md:min-h-[160px]">
          <Scene name="RelayPanel" tone="light" className="absolute inset-0" />
        </div>
      </div>

      {/* 제품 목록 — 클래식 테이블 */}
      <table className="tbl-classic mt-8">
        <caption className="sr-only">{t(active.title)}</caption>
        <colgroup>
          <col className="w-[4.5rem]" />
          <col />
          <col className="hidden w-[12rem] sm:table-column" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">{t(ui.products.tableCols.no)}</th>
            <th scope="col">{t(ui.products.tableCols.item)}</th>
            <th scope="col" className="hidden sm:table-cell">
              {t(ui.products.tableCols.category)}
            </th>
          </tr>
        </thead>
        <tbody>
          {active.products.map((product, i) => (
            <tr key={product.en}>
              <td className="text-center text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</td>
              <td className="font-semibold text-ink">{t(product)}</td>
              <td className="hidden text-muted sm:table-cell">{t(active.title)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 전체 카테고리 카드 (표 + 카드 혼합) */}
      <div className="mt-10">
        <SectionTitle>{t(ui.products.heading)}</SectionTitle>
        <ul className="mt-5 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          {productCategories.map((cat) => (
            <li key={cat.id} className="bg-white p-4">
              <button
                type="button"
                onClick={() => setActiveId(cat.id)}
                className="text-left"
              >
                <p className="flex items-center gap-2 text-[1rem] font-bold text-ink">
                  <span aria-hidden="true" className="block h-[7px] w-[7px] bg-brand" />
                  {t(cat.title)}
                </p>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">{t(cat.desc)}</p>
                <p className="mt-2 text-[0.75rem] text-brand">
                  {cat.products.map((p) => t(p)).join(" · ")}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        {t(ui.products.demoScope)}
      </p>
    </SubPage>
  );
}

export default Products;
