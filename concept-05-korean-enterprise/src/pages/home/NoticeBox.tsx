import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { notices, resourceItems } from "../../data/home";
import { ui } from "../../data/ui";
import Container from "../../components/Container";

/** 공지 · 자료 2컬럼 박스 — 게시판 항목은 전부 데모 게시물이며 화면에 명시한다. */
export default function NoticeBox() {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 공지사항 */}
          <div className="border border-line">
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="text-[1.15rem] font-bold text-ink">{t(ui.noticeTitle)}</h2>
              <Link
                to="/support"
                state={{ scrollTo: "notice" }}
                aria-label={t(ui.more)}
                className="flex h-7 w-7 items-center justify-center border border-line text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <span aria-hidden="true">+</span>
              </Link>
            </div>
            <ul className="divide-y divide-line">
              {notices.slice(0, 4).map((post) => (
                <li key={post.no}>
                  <Link
                    to="/support"
                    state={{ scrollTo: "notice" }}
                    className="flex items-center gap-3 px-6 py-4 transition-colors hover:bg-surface"
                  >
                    <span className="shrink-0 border border-line-strong px-1.5 py-0.5 text-[0.62rem] font-semibold text-faint">
                      {t(ui.demoBadge)}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[0.88rem] text-ink">
                      {t(post.title)}
                    </span>
                    <span
                      className="shrink-0 text-[0.75rem] text-faint tabular-nums"
                      style={{ fontFamily: "var(--font-en)" }}
                    >
                      {post.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="border-t border-line bg-surface px-6 py-3 text-[0.72rem] text-faint">
              {t(ui.noticeBoardNote)}
            </p>
          </div>

          {/* 자료실 */}
          <div className="border border-line">
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="text-[1.15rem] font-bold text-ink">{t(ui.resourceTitle)}</h2>
              <span className="border border-line-strong px-2 py-0.5 text-[0.62rem] font-semibold text-faint">
                {t(ui.demoContent)}
              </span>
            </div>
            <ul className="divide-y divide-line">
              {resourceItems.map((item) => (
                <li
                  key={item.title.en}
                  className="flex items-center justify-between gap-3 px-6 py-4"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[0.88rem] font-medium text-ink">{t(item.title)}</p>
                    <p className="mt-0.5 text-[0.72rem] text-faint">{t(item.note)}</p>
                  </div>
                  {/* 실제 파일이 없으므로 다운로드는 비활성 처리 */}
                  <button
                    type="button"
                    disabled
                    title={t(ui.catalogDemoTitle)}
                    className="shrink-0 cursor-not-allowed border border-line bg-surface px-3.5 py-2 text-[0.75rem] font-semibold text-faint"
                  >
                    {t(ui.catalogDemo)}
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t border-line bg-surface px-6 py-3">
              <Link
                to="/support"
                state={{ scrollTo: "contact" }}
                className="text-[0.78rem] font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                {t(ui.inquiry)} ›
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
