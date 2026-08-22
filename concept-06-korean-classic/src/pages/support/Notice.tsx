import CtaBanner from "../../components/CtaBanner";
import SectionTitle from "../../components/SectionTitle";
import SubPage from "../../components/SubPage";
import { notices, ui } from "../../data/site";

/**
 * 공지사항 — 클래식 테이블형 게시판 (카테고리/제목/등록일)
 * ⚠️ 게시물은 전부 명세서의 "[예시]" 공지이며 각 행과 목록 하단에 데모 표기를 유지한다.
 *    상세 페이지는 제공하지 않는다 (목록만).
 */
export function Notice() {
  return (
    <SubPage path="/support/notice">
      <SectionTitle size="lg">{ui.noticeTitle}</SectionTitle>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
        운영시간, 휴무, 연락처, 제품·A/S 문의 절차와 기술자료 업데이트 등 고객이 알아야 할 소식을
        전합니다.
      </p>

      <table className="tbl-classic mt-6">
        <caption className="sr-only">{ui.noticeTitle}</caption>
        <colgroup>
          <col className="w-[3.25rem] sm:w-[4.5rem]" />
          <col className="w-[5.5rem] sm:w-[7rem]" />
          <col />
          <col className="w-[6.5rem] sm:w-[8rem]" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">{ui.noticeCols.no}</th>
            <th scope="col">{ui.noticeCols.category}</th>
            <th scope="col">{ui.noticeCols.title}</th>
            <th scope="col">{ui.noticeCols.date}</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((post) => (
            <tr key={post.no}>
              <td className="text-center text-muted tabular-nums">{post.no}</td>
              <td className="text-center text-[0.8125rem] text-ink-2">{post.category}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-ink">{post.title}</span>
                  <span className="border border-line-strong bg-surface px-1.5 py-px text-[0.625rem] font-bold text-muted">
                    {ui.demoBadge}
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
        {ui.demoPostNotice}
      </p>

      {/* ── 고객지원 연결 ── */}
      <CtaBanner
        className="mt-12"
        title="공지에서 찾지 못한 내용은 고객지원 문의를 이용해 주세요"
        body="필요한 제품과 지원 내용을 알려주시면 확인에 필요한 내용을 안내드립니다."
      />
    </SubPage>
  );
}

export default Notice;
