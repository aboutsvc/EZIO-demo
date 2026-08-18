import MainSlider from "../components/MainSlider";
import IntroStrip from "./home/IntroStrip";
import NoticeBox from "./home/NoticeBox";
import ProductQuickCards from "./home/ProductQuickCards";
import ProjectBand from "./home/ProjectBand";
import SolutionHighlights from "./home/SolutionHighlights";

/**
 * 메인 페이지 — 한국 대기업 제품 포털 구성 순서
 * 메인 비주얼 슬라이더 → 회사 소개 스트립 → 제품 퀵 카드 → 솔루션 하이라이트
 * → 프로젝트·기술역량 밴드 → 공지·자료 2컬럼
 */
export default function Home() {
  return (
    <>
      <MainSlider />
      <IntroStrip />
      <ProductQuickCards />
      <SolutionHighlights />
      <ProjectBand />
      <NoticeBox />
    </>
  );
}
