/**
 * NAVIGATION MODEL — CONCEPT 05
 * =============================
 * GNB(메가메뉴)와 서브페이지 좌측 LNB가 같은 트리를 공유한다.
 * 라벨은 content.ts의 도메인 텍스트(solutions / productCategories)를 참조하고,
 * 순수 내비게이션 라벨만 여기서 정의한다.
 */

import type { I18n } from "./content";
import { productCategories, solutions } from "./content";

export interface NavItem {
  id: string;
  label: I18n;
  /** 라우트 이동 항목 (제품 카테고리 등) */
  to?: string;
  /** 같은 페이지 내 섹션 이동 항목 (한국 기업 사이트 LNB 문법) */
  anchor?: string;
}

export interface NavSection {
  id: string;
  label: I18n;
  path: string;
  /** 메가메뉴 컬럼 하단에 붙는 짧은 설명 */
  tagline: I18n;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    id: "company",
    label: { ko: "회사소개", en: "Company" },
    path: "/company",
    tagline: {
      ko: "이지오가 하는 일과 회사 정보",
      en: "What EZIO does, and company information",
    },
    items: [
      { id: "overview", label: { ko: "회사개요", en: "Overview" }, anchor: "overview" },
      { id: "facts", label: { ko: "회사 현황", en: "Company Facts" }, anchor: "facts" },
      { id: "history", label: { ko: "연혁", en: "History" }, anchor: "history" },
      { id: "ceo", label: { ko: "CEO 인사말", en: "CEO Message" }, anchor: "ceo" },
    ],
  },
  {
    id: "products",
    label: { ko: "제품", en: "Products" },
    path: "/products",
    tagline: {
      ko: "카테고리별 전력·자동화 제품 구성",
      en: "Power & automation products by category",
    },
    items: [
      { id: "all", label: { ko: "전체 카테고리", en: "All Categories" }, to: "/products" },
      ...productCategories.map((c) => ({
        id: c.id,
        label: c.title,
        to: `/products/${c.id}`,
      })),
    ],
  },
  {
    id: "solutions",
    label: { ko: "솔루션", en: "Solutions" },
    path: "/solutions",
    tagline: {
      ko: "5개 핵심 솔루션 영역",
      en: "Five core solution areas",
    },
    items: solutions.map((s) => ({ id: s.id, label: s.title, anchor: s.id })),
  },
  {
    id: "projects",
    label: { ko: "프로젝트", en: "Projects" },
    path: "/projects",
    tagline: {
      ko: "수행 프로젝트와 기술 역량",
      en: "Delivered projects and technical capability",
    },
    items: [
      { id: "featured", label: { ko: "주요 수행 프로젝트", en: "Featured Project" }, anchor: "featured" },
      { id: "industries", label: { ko: "적용 산업", en: "Industries" }, anchor: "industries" },
      { id: "process", label: { ko: "수행 프로세스", en: "Project Process" }, anchor: "process" },
      { id: "capability", label: { ko: "기술 역량", en: "Capability" }, anchor: "capability" },
      { id: "powerflow", label: { ko: "전력 인프라 흐름", en: "Power Flow" }, anchor: "powerflow" },
    ],
  },
  {
    id: "support",
    label: { ko: "고객지원", en: "Support" },
    path: "/support",
    tagline: {
      ko: "공지사항과 문의 접수",
      en: "Notices and inquiry intake",
    },
    items: [
      { id: "notice", label: { ko: "공지사항", en: "Notice" }, anchor: "notice" },
      { id: "contact", label: { ko: "온라인 문의", en: "Online Inquiry" }, anchor: "contact" },
    ],
  },
];

export function findSection(id: string): NavSection | undefined {
  return navSections.find((s) => s.id === id);
}
