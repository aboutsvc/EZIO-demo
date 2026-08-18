/**
 * MAIN PAGE DATA — CONCEPT 05
 * ===========================
 * 메인 슬라이더 / 게시판 데모 항목 정의.
 * 카피는 전부 content.ts에서 가져오고, 여기서는 조합과 화면 배치 정보만 다룬다.
 * 게시판 항목은 **데모 게시물**이며 실제 뉴스처럼 보이는 제목을 만들지 않는다.
 */

import type { I18n } from "./content";
import { brandMessages, intro, lsElectricArea, positioning, featuredProject } from "./content";

export interface Slide {
  id: string;
  /** 배경 장면 아트워크 키 — components/scenes 에서 매핑 */
  scene: "RefineryDusk" | "SwitchgearRoom" | "ControlRoom" | "SubstationYard" | "PlantAerial";
  eyebrow: I18n;
  headline: I18n;
  sub: I18n;
  cta: { label: I18n; to: string };
  secondary?: { label: I18n; to: string };
}

export const slides: Slide[] = [
  {
    id: "brand",
    scene: "RefineryDusk",
    eyebrow: positioning.primary,
    headline: brandMessages.corporate.headline,
    sub: brandMessages.corporate.sub,
    cta: { label: { ko: "회사소개 보기", en: "About EZIO" }, to: "/company" },
    secondary: { label: { ko: "솔루션 보기", en: "View Solutions" }, to: "/solutions" },
  },
  {
    id: "products",
    scene: "SwitchgearRoom",
    eyebrow: lsElectricArea.eyebrow,
    headline: lsElectricArea.heading,
    sub: lsElectricArea.body,
    cta: { label: { ko: "제품 보기", en: "View Products" }, to: "/products" },
    secondary: { label: { ko: "기술 문의", en: "Technical Inquiry" }, to: "/support" },
  },
  {
    id: "monitoring",
    scene: "ControlRoom",
    eyebrow: { ko: "전력 감시 · 엔지니어링", en: "Monitoring & Engineering" },
    headline: featuredProject.title,
    sub: intro.body,
    cta: { label: { ko: "프로젝트 보기", en: "View Projects" }, to: "/projects" },
    secondary: { label: { ko: "온라인 문의", en: "Online Inquiry" }, to: "/support" },
  },
];

/* ──────────────────────────────────────────────
 * 공지사항 — 전부 데모 게시물 (UI에 "데모 게시물" 표기 필수)
 * 실제 회사 소식·수치·일정이 아니므로 중립적 항목만 둔다.
 * ────────────────────────────────────────────── */

export interface NoticePost {
  no: number;
  title: I18n;
  date: string;
  isDemo: true;
}

export const notices: NoticePost[] = [
  {
    no: 5,
    title: {
      ko: "홈페이지가 새롭게 오픈했습니다",
      en: "Our new website is now open",
    },
    date: "2026-01-05",
    isDemo: true,
  },
  {
    no: 4,
    title: {
      ko: "온라인 문의 접수 안내",
      en: "Guide to submitting an online inquiry",
    },
    date: "2026-01-05",
    isDemo: true,
  },
  {
    no: 3,
    title: {
      ko: "제품 카테고리 페이지 이용 안내",
      en: "How to use the product category pages",
    },
    date: "2026-01-05",
    isDemo: true,
  },
  {
    no: 2,
    title: {
      ko: "자료실 준비 안내",
      en: "Resource library — preparation notice",
    },
    date: "2026-01-05",
    isDemo: true,
  },
  {
    no: 1,
    title: {
      ko: "본 게시판은 레이아웃 확인용 데모입니다",
      en: "This board is a layout demo",
    },
    date: "2026-01-05",
    isDemo: true,
  },
];

/* 자료실 안내 — 실제 파일 없음. 다운로드 버튼은 비활성. */
export const resourceItems: { title: I18n; note: I18n }[] = [
  {
    title: { ko: "회사소개 자료", en: "Company introduction" },
    note: { ko: "준비 중 — 실제 파일 없음", en: "In preparation — no file available" },
  },
  {
    title: { ko: "제품 카탈로그", en: "Product catalog" },
    note: { ko: "준비 중 — 실제 파일 없음", en: "In preparation — no file available" },
  },
  {
    title: { ko: "프로젝트 수행 절차 안내", en: "Project process guide" },
    note: { ko: "준비 중 — 실제 파일 없음", en: "In preparation — no file available" },
  },
];
