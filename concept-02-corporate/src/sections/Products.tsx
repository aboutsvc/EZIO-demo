import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { productCategories, productCtas } from "../data/content";
import { ui } from "../data/ui";

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="border-b border-line bg-paper py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow={ui.productsEyebrow}
          heading={ui.productsHeading}
          lead={ui.productsLead}
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {productCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 60}>
              <article
                className="flex h-full flex-col border border-line bg-paper p-6 transition-all duration-200 hover:border-line-strong hover:shadow-[0_2px_16px_rgba(14,27,51,0.09)]"
                style={{ borderRadius: "3px" }}
              >
                <div className="h-[3px] w-9 bg-brand" aria-hidden="true" />
                <h3 className="mt-5 text-[1.0625rem] font-bold text-ink">{t(cat.title)}</h3>
                <p className="mt-2.5 text-[0.8125rem] leading-[1.7] text-muted">{t(cat.desc)}</p>

                <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {cat.products.map((p, j) => (
                    <li
                      key={j}
                      className="border border-line bg-surface px-2.5 py-1.5 text-[0.75rem] font-medium text-ink/85"
                      style={{ borderRadius: "2px" }}
                    >
                      {t(p)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* 데모 콘텐츠 고지 + 정보 요청 (구매/가격 UI 없음) */}
        <div className="mt-8 flex flex-col gap-4 border border-line bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderRadius: "3px" }}
        >
          <p className="text-[0.8125rem] leading-[1.7] text-muted">{t(ui.productsDemoNote)}</p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 border border-brand px-5 py-2.5 text-[0.8125rem] font-semibold text-brand transition-colors duration-150 hover:bg-brand hover:text-white"
            style={{ borderRadius: "3px" }}
          >
            {t(productCtas.requestInfo)}
          </a>
        </div>
      </Container>
    </section>
  );
}
