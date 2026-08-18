import type { ReactNode } from "react";
import type { I18n } from "../data/content";
import type { NavSection } from "../data/navigation";
import { useScrollToStateAnchor } from "../hooks/useSectionNav";
import Breadcrumb, { type Crumb } from "./Breadcrumb";
import Container from "./Container";
import Lnb from "./Lnb";
import SubVisual, { type SceneKey } from "./SubVisual";

interface Props {
  section: NavSection;
  lead: I18n;
  scene: SceneKey;
  en: string;
  /** breadcrumb 2차 항목 (제품 카테고리 등) */
  trailTail?: Crumb[];
  activeId?: string;
  children: ReactNode;
}

/**
 * 서브페이지 공통 골격:
 * 서브비주얼 밴드 → breadcrumb → (좌 LNB + 우 콘텐츠)
 */
export default function PageLayout({
  section,
  lead,
  scene,
  en,
  trailTail = [],
  activeId,
  children,
}: Props) {
  useScrollToStateAnchor();

  return (
    <>
      <SubVisual title={section.label} lead={lead} scene={scene} en={en} />
      <Breadcrumb trail={[{ label: section.label, to: section.path }, ...trailTail]} />

      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 py-10 lg:grid-cols-[236px_minmax(0,1fr)] lg:gap-14 lg:py-16">
          <Lnb section={section} activeId={activeId} />
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </>
  );
}
