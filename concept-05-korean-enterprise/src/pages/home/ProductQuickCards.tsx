import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { productCategories } from "../../data/content";
import { ui } from "../../data/ui";
import CategoryIcon from "../../components/CategoryIcon";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

/** 제품 카테고리 퀵 카드 4개 — 클릭 시 제품 페이지의 해당 카테고리로 이동 */
export default function ProductQuickCards() {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle
          en="Products"
          title={ui.quickProductsTitle}
          lead={ui.quickProductsLead}
          action={
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-line px-5 py-2.5 text-[0.82rem] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {t(ui.viewAll)}
              <span aria-hidden="true">›</span>
            </Link>
          }
        />

        <ul className="mt-9 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat) => (
            <li key={cat.id} className="bg-paper">
              <Link
                to={`/products/${cat.id}`}
                className="group flex h-full flex-col p-7 transition-colors hover:bg-brand-soft"
              >
                <span className="text-brand transition-transform duration-300 group-hover:-translate-y-0.5">
                  <CategoryIcon name={cat.id} />
                </span>
                <span className="mt-6 text-[1.1rem] font-bold text-ink">{t(cat.title)}</span>
                <span className="mt-2.5 flex-1 text-[0.85rem] leading-relaxed text-muted">
                  {t(cat.desc)}
                </span>
                <span className="mt-5 flex flex-wrap gap-1.5">
                  {cat.products.slice(0, 3).map((p) => (
                    <span
                      key={p.en}
                      className="border border-line bg-surface px-2 py-1 text-[0.68rem] text-muted"
                      style={{ fontFamily: "var(--font-en)" }}
                    >
                      {t(p)}
                    </span>
                  ))}
                  {cat.products.length > 3 && (
                    <span className="px-1 py-1 text-[0.68rem] text-faint">
                      +{cat.products.length - 3}
                    </span>
                  )}
                </span>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-brand">
                  {t(ui.viewDetail)}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ›
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[0.75rem] text-faint">{t(ui.productsDemoNote)}</p>
      </Container>
    </section>
  );
}
