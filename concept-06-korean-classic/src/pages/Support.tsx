import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";
import SubPage from "../components/SubPage";
import { useLanguage } from "../context/LanguageContext";
import { contact } from "../data/content";
import { notices, ui } from "../data/site";

/**
 * 고객센터 — 클래식 테이블형 공지 게시판 + 온라인 문의 폼
 * ⚠️ 게시판 항목은 전부 데모 게시물이며 각 행과 목록 하단에 데모 표기를 유지한다.
 *    회사 전화번호/팩스/이메일을 만들어내지 않는다 — 문의는 온라인 폼으로만 접수.
 */
export function Support() {
  const { t } = useLanguage();

  return (
    <SubPage path="/support">
      {/* ── 공지사항 게시판 ── */}
      <SectionTitle size="lg">{t(ui.support.noticeHeading)}</SectionTitle>

      <table className="tbl-classic mt-6">
        <caption className="sr-only">{t(ui.support.noticeHeading)}</caption>
        <colgroup>
          <col className="w-[3.75rem] sm:w-[5rem]" />
          <col />
          <col className="w-[6.5rem] sm:w-[8rem]" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">{t(ui.noticeCols.no)}</th>
            <th scope="col">{t(ui.noticeCols.title)}</th>
            <th scope="col">{t(ui.noticeCols.date)}</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((post) => (
            <tr key={post.no}>
              <td className="text-center text-muted tabular-nums">{post.no}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-ink">{t(post.title)}</span>
                  <span className="border border-line-strong bg-surface px-1.5 py-px text-[0.625rem] font-bold text-muted">
                    {t(ui.demoPost)}
                  </span>
                </div>
              </td>
              <td className="text-center text-muted tabular-nums">{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 클래식 페이지네이션 (데모 — 1페이지) */}
      <div className="mt-5 flex items-center justify-center gap-1" aria-hidden="true">
        <span className="flex h-8 w-8 items-center justify-center border border-brand bg-brand text-[0.8125rem] font-bold text-white">
          1
        </span>
      </div>

      <p className="mt-4 border border-line bg-surface px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        {t(ui.demoPostNotice)}
      </p>

      {/* ── 온라인 문의 ── */}
      <div id="inquiry" className="mt-14 scroll-mt-6">
        <SectionTitle size="lg">{t(ui.support.inquiryHeading)}</SectionTitle>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{t(contact.sub)}</p>
        <p className="mt-1 text-[0.8125rem] text-muted">{t(ui.main.inquiryNote)}</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </SubPage>
  );
}

export default Support;
