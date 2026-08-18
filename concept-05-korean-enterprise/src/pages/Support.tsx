import { useLanguage } from "../context/LanguageContext";
import { contact } from "../data/content";
import { notices, resourceItems } from "../data/home";
import { findSection } from "../data/navigation";
import { ui } from "../data/ui";
import ContactForm from "../components/ContactForm";
import ContentSection from "../components/ContentSection";
import PageLayout from "../components/PageLayout";

const section = findSection("support")!;

export default function Support() {
  const { t } = useLanguage();

  return (
    <PageLayout section={section} lead={contact.sub} scene="HmiScreen" en="Support">
      <div className="space-y-14">
        {/* 공지사항 게시판 (데모) */}
        <ContentSection
          id="notice"
          en="Notice"
          title={ui.noticeBoardTitle}
          lead={ui.noticeBoardNote}
        >
          {/* Desktop — 게시판 테이블 */}
          <table className="hidden w-full border-t-2 border-ink text-left sm:table">
            <caption className="sr-only">{t(ui.noticeBoardTitle)}</caption>
            <thead>
              <tr className="border-b border-line bg-surface text-[0.78rem] text-muted">
                <th scope="col" className="w-20 px-4 py-3 text-center font-semibold">
                  {t(ui.boardNo)}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {t(ui.boardTitle)}
                </th>
                <th scope="col" className="w-32 px-4 py-3 text-center font-semibold">
                  {t(ui.boardDate)}
                </th>
              </tr>
            </thead>
            <tbody>
              {notices.map((post) => (
                <tr key={post.no} className="border-b border-line">
                  <td
                    className="px-4 py-4 text-center text-[0.8rem] text-faint tabular-nums"
                    style={{ fontFamily: "var(--font-en)" }}
                  >
                    {post.no}
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-2.5">
                      <span className="shrink-0 border border-line-strong px-1.5 py-0.5 text-[0.62rem] font-semibold text-faint">
                        {t(ui.demoPost)}
                      </span>
                      <span className="text-[0.88rem] text-ink">{t(post.title)}</span>
                    </span>
                  </td>
                  <td
                    className="px-4 py-4 text-center text-[0.78rem] text-faint tabular-nums"
                    style={{ fontFamily: "var(--font-en)" }}
                  >
                    {post.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile — 리스트 */}
          <ul className="border-t-2 border-ink sm:hidden">
            {notices.map((post) => (
              <li key={post.no} className="border-b border-line px-1 py-4">
                <span className="inline-block border border-line-strong px-1.5 py-0.5 text-[0.62rem] font-semibold text-faint">
                  {t(ui.demoPost)}
                </span>
                <p className="mt-2 text-[0.88rem] leading-snug text-ink">{t(post.title)}</p>
                <p
                  className="mt-1.5 text-[0.75rem] text-faint tabular-nums"
                  style={{ fontFamily: "var(--font-en)" }}
                >
                  {post.date}
                </p>
              </li>
            ))}
          </ul>

          {/* 자료실 — 실제 파일 없음 */}
          <h3 className="mt-10 text-[1.05rem] font-bold text-ink">{t(ui.resourceTitle)}</h3>
          <ul className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-3">
            {resourceItems.map((item) => (
              <li key={item.title.en} className="bg-paper p-5">
                <p className="text-[0.9rem] font-semibold text-ink">{t(item.title)}</p>
                <p className="mt-1 text-[0.72rem] text-faint">{t(item.note)}</p>
                <button
                  type="button"
                  disabled
                  title={t(ui.catalogDemoTitle)}
                  className="mt-4 w-full cursor-not-allowed border border-line bg-surface px-3.5 py-2 text-[0.75rem] font-semibold text-faint"
                >
                  {t(ui.catalogDemo)}
                </button>
              </li>
            ))}
          </ul>
        </ContentSection>

        {/* 온라인 문의 */}
        <ContentSection id="contact" en="Contact" title={ui.contactTitle} lead={contact.sub}>
          {/* 확인된 대표 전화·팩스·이메일이 없어 문의는 폼으로만 접수한다. */}
          <p className="mb-6 border-l-[3px] border-brand bg-brand-soft px-5 py-4 text-[0.85rem] leading-relaxed text-brand">
            {t(ui.contactRouting)}
          </p>
          <ContactForm />
        </ContentSection>
      </div>
    </PageLayout>
  );
}
