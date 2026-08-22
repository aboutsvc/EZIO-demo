/**
 * CONCEPT 06 — KOREAN CLASSIC / 사이트 구조 · UI 문자열 (EGO)
 * ==========================================================
 * 내비게이션 트리 / 페이지 메타(서브비주얼·breadcrumb·LNB) / 메인 배너 / 데모 게시판 항목 정의.
 * 한국어 단일 사이트 — I18n 구조 없이 평문 문자열만 사용한다.
 *
 * ⚠️ 정확성 규칙
 *  - 전화번호 / 팩스 / 이메일 / 주소를 만들어내지 않는다 → 모든 연락 동선은 온라인 데모 폼으로 수렴.
 *  - 게시판 항목은 명세서의 "[예시]" 공지 5건만 사용하고 각 행에 데모 배지를 표기한다.
 *  - 파트너 등급 표현 / 미확인 수치 금지.
 */

import { company } from "./content";

/* ──────────────────────────────────────────────
 * 1. 내비게이션 트리 (GNB → 드롭다운 / 서브페이지 LNB 공용)
 * ────────────────────────────────────────────── */

export interface NavChild {
  path: string;
  label: string;
}

export interface NavSection {
  /** GNB 최상위 경로 (드롭다운 첫 항목 또는 단일 페이지로 이동) */
  path: string;
  label: string;
  children: NavChild[];
}

export const navSections: NavSection[] = [
  {
    path: "/about/intro",
    label: "회사소개",
    children: [
      { path: "/about/intro", label: "EGO 소개" },
      { path: "/about/vision", label: "비전 및 경영철학" },
      { path: "/about/executives", label: "경영진 소개" },
      { path: "/about/workplace", label: "사업장 소개" },
    ],
  },
  {
    path: "/business/supply",
    label: "사업영역",
    children: [
      { path: "/business/supply", label: "LS ELECTRIC 제품 공급" },
      { path: "/business/delivery", label: "납품 및 현장 대응" },
      { path: "/business/service", label: "기술지원 및 A/S" },
    ],
  },
  {
    path: "/customers",
    label: "주요 고객·수행실적",
    children: [],
  },
  {
    path: "/support/inquiry",
    label: "고객지원",
    children: [
      { path: "/support/inquiry", label: "제품·견적 문의" },
      { path: "/support/as", label: "A/S 접수" },
      { path: "/support/resources", label: "기술자료·카탈로그" },
      { path: "/support/notice", label: "공지사항" },
    ],
  },
  {
    path: "/careers",
    label: "채용정보",
    children: [],
  },
];

/* ──────────────────────────────────────────────
 * 2. 페이지 메타 (서브비주얼 타이틀 / breadcrumb / LNB 그룹)
 * ────────────────────────────────────────────── */

export type SceneKey =
  | "RefineryDusk"
  | "SwitchgearRoom"
  | "ControlRoom"
  | "SubstationYard"
  | "RelayPanel"
  | "HmiScreen"
  | "PlantAerial"
  | "EngineerAtPanel";

export interface PageMeta {
  /** LNB/브레드크럼에 쓰는 상위 섹션 index (navSections 기준) */
  sectionIndex: number;
  title: string;
  /** 서브비주얼 밴드의 보조 카피 — 명세서 각 페이지 "메인 영역" 보조 문구 */
  lead: string;
  scene: SceneKey;
}

export const pageMeta: Record<string, PageMeta> = {
  "/about/intro": {
    sectionIndex: 0,
    title: "EGO 소개",
    lead: "EGO는 LS ELECTRIC 제품의 상담·견적·공급부터 납품 관리, 현장 요청과 제조사 연계 A/S까지 고객 접점을 담당합니다.",
    scene: "EngineerAtPanel",
  },
  "/about/vision": {
    sectionIndex: 0,
    title: "비전 및 경영철학",
    lead: "고객의 요구를 정확히 확인하고, 제품 공급의 각 단계와 후속 지원을 꾸준히 연결하는 것이 EGO의 경영 원칙입니다.",
    scene: "HmiScreen",
  },
  "/about/executives": {
    sectionIndex: 0,
    title: "경영진 소개",
    lead: "EGO의 경영진은 고객 요청을 정확히 듣고 제품 공급과 후속 대응의 각 단계를 책임 있게 관리하는 회사를 만들어갑니다.",
    scene: "ControlRoom",
  },
  "/about/workplace": {
    sectionIndex: 0,
    title: "사업장 소개",
    lead: "방문 전 담당자와 일정 및 방문 목적을 확인해 주세요. 정확한 위치와 연락 방법을 안내드립니다.",
    scene: "PlantAerial",
  },
  "/business/supply": {
    sectionIndex: 1,
    title: "LS ELECTRIC 제품 공급",
    lead: "사용 목적과 요구 사양을 확인한 뒤 제품 검토, 견적, 주문, 발주, 납기와 납품 과정을 안내합니다.",
    scene: "SwitchgearRoom",
  },
  "/business/delivery": {
    sectionIndex: 1,
    title: "납품 및 현장 대응",
    lead: "제품, 수량, 일정과 장소를 확인하고 납품 전후의 제품 관련 요청을 고객사와 제조사 사이에서 연결합니다.",
    scene: "SubstationYard",
  },
  "/business/service": {
    sectionIndex: 1,
    title: "기술지원 및 A/S",
    lead: "제품 정보와 증상을 확인한 뒤 초기 대응을 안내하고, 필요한 경우 제조사 기술지원, 수리 또는 교체 협의를 지원합니다.",
    scene: "RelayPanel",
  },
  "/customers": {
    sectionIndex: 2,
    title: "주요 고객·수행실적",
    lead: "EGO는 LS ELECTRIC 제품의 공급 과정과 현장 요청, 제품 관련 후속 지원을 고객의 접점에서 관리해 왔습니다.",
    scene: "RefineryDusk",
  },
  "/support/inquiry": {
    sectionIndex: 3,
    title: "제품·견적 문의",
    lead: "필요한 제품, 사양, 수량과 희망 일정을 알려주세요. 확인 후 취급·공급 가능 여부와 견적 절차를 안내드립니다.",
    scene: "HmiScreen",
  },
  "/support/as": {
    sectionIndex: 3,
    title: "A/S 접수",
    lead: "제품 정보와 장애 증상을 보내주시면 초기 확인 후 필요한 제조사 또는 관련 기술조직의 지원 절차를 안내드립니다.",
    scene: "RelayPanel",
  },
  "/support/resources": {
    sectionIndex: 3,
    title: "기술자료·카탈로그",
    lead: "제품 검토와 사용에 필요한 공식 카탈로그, 매뉴얼, 사양서와 관련 문서를 확인하세요.",
    scene: "ControlRoom",
  },
  "/support/notice": {
    sectionIndex: 3,
    title: "공지사항",
    lead: "EGO의 운영, 고객지원, 자료와 주요 변경사항을 안내드립니다.",
    scene: "PlantAerial",
  },
  "/careers": {
    sectionIndex: 4,
    title: "채용정보",
    lead: "EGO는 고객의 요구를 세심하게 듣고, 제품 공급과 현장 지원의 각 단계를 끝까지 확인하는 동료를 찾습니다.",
    scene: "EngineerAtPanel",
  },
};

/* ──────────────────────────────────────────────
 * 3. 메인 비주얼 배너 (3 슬라이드 자동 롤링)
 * ────────────────────────────────────────────── */

export interface BannerSlide {
  id: string;
  eyebrow: string;
  headline: string;
  sub: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
  scene: SceneKey;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: "main",
    eyebrow: company.nameMeaning,
    headline: company.slogan,
    sub: "고객이 필요한 제품을 정확히 확인하고, 견적과 발주, 납품 관리까지 이어갑니다. 납품 이후의 제품 관련 요청과 장애도 접수해 필요한 제조사 지원을 연결합니다.",
    primary: { label: "제품·견적 문의", to: "/support/inquiry" },
    secondary: { label: "EGO의 역할 알아보기", to: "/about/intro" },
    scene: "RefineryDusk",
  },
  {
    id: "business",
    eyebrow: "EGO의 사업영역",
    headline: "필요한 제품을 확인하고,\n공급 과정을 관리하며, 후속 요청에 대응합니다",
    sub: "EGO의 업무는 제품 공급, 납품 및 현장 대응, 기술지원과 A/S의 세 영역으로 이어집니다.",
    primary: { label: "사업영역 자세히 보기", to: "/business/supply" },
    scene: "SwitchgearRoom",
  },
  {
    id: "service",
    eyebrow: "기술지원 및 A/S",
    headline: "제품 관련 문의와 장애를 접수하고\n필요한 지원을 연결합니다",
    sub: "제품 정보와 증상을 확인한 뒤 초기 대응을 안내하고, 필요한 경우 제조사 기술지원, 수리 또는 교체 협의를 지원합니다.",
    primary: { label: "A/S 접수", to: "/support/as" },
    scene: "ControlRoom",
  },
];

/* ──────────────────────────────────────────────
 * 4. 공지사항 — 명세서의 "[예시]" 공지 5건 (실제 공지 아님)
 *    각 행에 데모 배지를 표기하고 목록 하단에 데모 고지를 유지한다.
 *    등록일은 확정된 사실이 아니므로 날짜를 지어내지 않고 "—"로 표기한다.
 * ────────────────────────────────────────────── */

export interface NoticePost {
  no: number;
  category: string;
  title: string;
  /** 미확정 등록일 공통 표기 — 날짜를 만들어내지 않는다 */
  date: "—";
  isDemo: true;
}

export const notices: NoticePost[] = [
  {
    no: 5,
    category: "운영 안내",
    title: "[예시] 연휴 기간 고객지원 운영 안내",
    date: "—",
    isDemo: true,
  },
  {
    no: 4,
    category: "고객지원",
    title: "[예시] 대표 전화번호 및 문의 채널 변경 안내",
    date: "—",
    isDemo: true,
  },
  {
    no: 3,
    category: "제품·자료",
    title: "[예시] LS ELECTRIC 공식 카탈로그 업데이트 안내",
    date: "—",
    isDemo: true,
  },
  {
    no: 2,
    category: "고객지원",
    title: "[예시] A/S 접수 시 필수 정보 안내",
    date: "—",
    isDemo: true,
  },
  {
    no: 1,
    category: "납품 안내",
    title: "[예시] 제품 출고 및 납기 문의 안내",
    date: "—",
    isDemo: true,
  },
];

/* ──────────────────────────────────────────────
 * 5. UI 라벨 (화면 문구 — 컴포넌트 하드코딩 방지)
 * ────────────────────────────────────────────── */

export const ui = {
  home: "홈",
  demoBadge: "데모",
  demoPostNotice: "위 목록은 게시판 구성 확인을 위한 예시 게시물이며, 실제 공지가 아닙니다.",
  noticeTitle: "공지사항",
  noticeCols: {
    no: "번호",
    category: "카테고리",
    title: "제목",
    date: "등록일",
  },
  quick: {
    label: "빠른 메뉴",
    inquiry: "제품·견적",
    as: "A/S 접수",
    workplace: "사업장",
    top: "TOP",
  },
  menu: "메뉴",
  closeMenu: "메뉴 닫기",
  openMenu: "메뉴 열기",
  mainBanner: {
    label: "메인 배너",
    goTo: "번 배너로 이동",
    prev: "이전 배너",
    next: "다음 배너",
    pause: "자동 전환 멈춤",
    play: "자동 전환 시작",
  },
  form: {
    required: "필수",
    select: "선택해 주세요",
    demoNote: "※ 데모 사이트 — 실제 전송/게시가 아닙니다.",
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    body: "요청하신 페이지가 존재하지 않거나 주소가 변경되었습니다.",
    home: "메인으로 이동",
  },
};
