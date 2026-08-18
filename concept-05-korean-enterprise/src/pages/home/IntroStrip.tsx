import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { company, intro } from "../../data/content";
import { ui } from "../../data/ui";
import Container from "../../components/Container";

/** 슬라이더 하단 소개 스트립 — 회사 정의 + 확인된 회사 현황(기준연도 포함) */
export default function IntroStrip() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line bg-paper py-14 lg:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <p
              className="text-[0.68rem] font-semibold tracking-[0.2em] text-brand uppercase"
              style={{ fontFamily: "var(--font-en)" }}
            >
              About EZIO
            </p>
            <h2 className="mt-3 text-[1.55rem] leading-snug font-bold text-ink lg:text-[2rem]">
              {t(intro.heading)}
            </h2>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-muted">{t(intro.body)}</p>
            <Link
              to="/company"
              className="mt-7 inline-flex items-center gap-2 border border-line px-5 py-2.5 text-[0.82rem] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {t(ui.companyOverviewTitle)}
              <span aria-hidden="true">›</span>
            </Link>
          </div>

          <dl className="grid grid-cols-2 gap-px self-start border border-line bg-line">
            {company.facts.map((fact) => (
              <div key={fact.label.en} className="bg-paper px-6 py-7">
                <dt className="text-[0.72rem] leading-snug text-muted">{t(fact.label)}</dt>
                <dd className="mt-2 text-[1.05rem] leading-snug font-bold text-ink lg:text-[1.15rem]">
                  {t(fact.value)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
