import type { ComponentType } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { productCategories, solutions, type ProductCategory } from "../data/content";
import { findSection } from "../data/navigation";
import { ui } from "../data/ui";
import CategoryIcon from "../components/CategoryIcon";
import ContentSection from "../components/ContentSection";
import PageLayout from "../components/PageLayout";
import {
  ControlRoom,
  HmiScreen,
  RelayPanel,
  SwitchgearRoom,
  type SceneProps,
} from "../components/scenes";

const section = findSection("products")!;

// 카테고리별 장면 아트워크 — 실제 제품/현장 사진 수령 시 동일 위치를 <img>로 교체한다.
const sceneByCategory: Record<string, ComponentType<SceneProps>> = {
  "power-distribution": SwitchgearRoom,
  "protection-measurement": RelayPanel,
  monitoring: ControlRoom,
  automation: HmiScreen,
};

function CategoryBlock({ category }: { category: ProductCategory }) {
  const { t } = useLanguage();
  const Scene = sceneByCategory[category.id] ?? SwitchgearRoom;
  const related = solutions.find((s) => s.id === category.id);

  return (
    <>
      {/* 카테고리 배너 */}
      <div className="grid overflow-hidden border border-line sm:grid-cols-[minmax(0,1fr)_38%]">
        <div className="order-2 p-6 sm:order-1 lg:p-8">
          <span className="inline-flex text-brand">
            <CategoryIcon name={category.id} className="h-8 w-8" />
          </span>
          <h3 className="mt-4 text-[1.2rem] font-bold text-ink lg:text-[1.4rem]">
            {t(category.title)}
          </h3>
          <p className="mt-2.5 text-[0.88rem] leading-relaxed text-muted">{t(category.desc)}</p>
          <p className="mt-4 text-[0.75rem] text-faint">
            {category.products.length}
            {t(ui.productCount)}
          </p>
          {related && (
            <Link
              to="/solutions"
              state={{ scrollTo: related.id }}
              className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              {t(ui.relatedSolution)}: {t(related.title)} ›
            </Link>
          )}
        </div>
        <div className="order-1 min-h-[160px] bg-surface sm:order-2 sm:min-h-[220px]">
          <Scene tone="light" />
        </div>
      </div>

      {/* 제품 카드 그리드 */}
      <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {category.products.map((product) => (
          <li key={product.en} className="flex flex-col bg-paper p-6">
            <p
              className="text-[1rem] font-bold text-ink"
              style={{ fontFamily: "var(--font-en)" }}
            >
              {t(product)}
            </p>
            <p className="mt-1.5 text-[0.75rem] text-faint">{t(category.title)}</p>
            <p className="mt-4 flex-1 text-[0.78rem] leading-relaxed text-muted">
              {t(ui.productSpecNote)}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {/* 실제 카탈로그 파일이 없으므로 비활성 — 데모 표기 유지 */}
              <button
                type="button"
                disabled
                title={t(ui.catalogDemoTitle)}
                className="cursor-not-allowed border border-line bg-surface px-3.5 py-2 text-[0.75rem] font-semibold text-faint"
              >
                {t(ui.catalogDemo)}
              </button>
              <Link
                to="/support"
                state={{ scrollTo: "contact" }}
                className="border border-brand px-3.5 py-2 text-[0.75rem] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                {t(ui.inquiry)}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Products() {
  const { t } = useLanguage();
  const { categoryId } = useParams();
  const category = categoryId ? productCategories.find((c) => c.id === categoryId) : undefined;

  return (
    <PageLayout
      section={section}
      lead={ui.productsIntro}
      scene="SwitchgearRoom"
      en="Products"
      activeId={category ? category.id : "all"}
      trailTail={category ? [{ label: category.title }] : []}
    >
      {category ? (
        <div className="space-y-14">
          <ContentSection id={category.id} en="Product Category" title={category.title}>
            <CategoryBlock category={category} />
            <p className="mt-4 text-[0.75rem] text-faint">{t(ui.productsDemoNote)}</p>
          </ContentSection>
        </div>
      ) : categoryId ? (
        <div className="border border-line bg-surface p-8">
          <p className="text-[0.9rem] text-muted">{t(ui.categoryNotFound)}</p>
          <Link
            to="/products"
            className="mt-5 inline-block bg-brand px-5 py-2.5 text-[0.82rem] font-semibold text-white"
          >
            {t(ui.allCategories)}
          </Link>
        </div>
      ) : (
        <div className="space-y-14">
          <ContentSection id="all" en="All Categories" title={ui.allCategories} lead={ui.productsIntro}>
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {productCategories.map((cat) => (
                <li key={cat.id} className="bg-paper">
                  <Link
                    to={`/products/${cat.id}`}
                    className="group flex h-full flex-col p-6 transition-colors hover:bg-brand-soft"
                  >
                    <span className="text-brand">
                      <CategoryIcon name={cat.id} className="h-8 w-8" />
                    </span>
                    <span className="mt-5 text-[1rem] font-bold text-ink">{t(cat.title)}</span>
                    <span className="mt-2 flex-1 text-[0.8rem] leading-relaxed text-muted">
                      {t(cat.desc)}
                    </span>
                    <span className="mt-4 text-[0.75rem] font-semibold text-brand">
                      {cat.products.length}
                      {t(ui.productCount)} ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.75rem] text-faint">{t(ui.productsDemoNote)}</p>
          </ContentSection>

          {productCategories.map((cat) => (
            <ContentSection key={cat.id} id={cat.id} en="Category" title={cat.title}>
              <CategoryBlock category={cat} />
            </ContentSection>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
