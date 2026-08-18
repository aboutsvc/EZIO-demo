/**
 * CONCEPT 06 — KOREAN CLASSIC / 사이트 구조 · UI 문자열
 * =====================================================
 * `content.ts`(공유 콘텐츠 기준)는 수정하지 않는다. 이 파일은 멀티페이지 구조를 위한
 * **내비게이션 트리 / 화면 라벨 / 데모 게시판 항목**만 정의한다.
 * 컴포넌트 안에서 문자열을 하드코딩하지 않기 위한 concept-local 확장이다.
 *
 * ⚠️ 정확성 규칙
 *  - 전화번호 / 팩스 / 이메일을 만들어내지 않는다 → 모든 연락 동선은 온라인 문의 폼으로 수렴.
 *  - 게시판 항목은 중립적 제목 + "데모 게시물" 표기. 실제 뉴스처럼 보이는 제목 금지.
 *  - 파트너 등급 표현 / 고객 실명 / 미확인 수치 금지.
 */

import type { I18n } from "./content";
import { brandMessages, positioning, lsElectricArea } from "./content";

/* ──────────────────────────────────────────────
 * 1. 내비게이션 트리 (GNB → 드롭다운 / 서브페이지 LNB 공용)
 * ────────────────────────────────────────────── */

export interface NavChild {
  path: string;
  label: I18n;
}

export interface NavSection {
  /** GNB 최상위 경로 (드롭다운 첫 항목으로 이동) */
  path: string;
  label: I18n;
  children: NavChild[];
}

export const navSections: NavSection[] = [
  {
    path: "/about/greeting",
    label: { ko: "회사소개", en: "Company" },
    children: [
      { path: "/about/greeting", label: { ko: "인사말", en: "CEO Greeting" } },
      { path: "/about/overview", label: { ko: "회사개요", en: "Company Overview" } },
      { path: "/about/history", label: { ko: "연혁", en: "History" } },
      { path: "/about/location", label: { ko: "오시는길", en: "Location" } },
    ],
  },
  {
    path: "/business",
    label: { ko: "사업분야", en: "Business" },
    children: [{ path: "/business", label: { ko: "사업분야 안내", en: "Business Areas" } }],
  },
  {
    path: "/products",
    label: { ko: "제품소개", en: "Products" },
    children: [{ path: "/products", label: { ko: "제품 카테고리", en: "Product Categories" } }],
  },
  {
    path: "/works",
    label: { ko: "수행실적", en: "Projects" },
    children: [{ path: "/works", label: { ko: "주요 수행실적", en: "Featured Projects" } }],
  },
  {
    path: "/support",
    label: { ko: "고객센터", en: "Support" },
    children: [
      { path: "/support", label: { ko: "공지사항", en: "Notice" } },
      { path: "/support#inquiry", label: { ko: "온라인 문의", en: "Online Inquiry" } },
    ],
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
  title: I18n;
  /** 서브비주얼 밴드의 보조 카피 */
  lead: I18n;
  scene: SceneKey;
}

export const pageMeta: Record<string, PageMeta> = {
  "/about/greeting": {
    sectionIndex: 0,
    title: { ko: "인사말", en: "CEO Greeting" },
    lead: {
      ko: "신뢰를 우선하는 산업 전력 파트너",
      en: "An industrial power partner built on trust",
    },
    scene: "EngineerAtPanel",
  },
  "/about/overview": {
    sectionIndex: 0,
    title: { ko: "회사개요", en: "Company Overview" },
    lead: {
      ko: "확인된 기업 정보만을 게재합니다",
      en: "Only verified company information is published",
    },
    scene: "PlantAerial",
  },
  "/about/history": {
    sectionIndex: 0,
    title: { ko: "연혁", en: "History" },
    lead: { ko: "이지오가 걸어온 길", en: "The path EZIO has taken" },
    scene: "SubstationYard",
  },
  "/about/location": {
    sectionIndex: 0,
    title: { ko: "오시는길", en: "Location" },
    lead: { ko: "찾아오시는 길을 안내합니다", en: "How to find our office" },
    scene: "PlantAerial",
  },
  "/business": {
    sectionIndex: 1,
    title: { ko: "사업분야", en: "Business Areas" },
    lead: {
      ko: "전력 배전 · 보호 · 감시 · 자동화 · 엔지니어링",
      en: "Distribution · Protection · Monitoring · Automation · Engineering",
    },
    scene: "SwitchgearRoom",
  },
  "/products": {
    sectionIndex: 2,
    title: { ko: "제품소개", en: "Products" },
    lead: {
      ko: "현장에 적합한 전력·자동화 제품 구성",
      en: "Power & automation products configured for the site",
    },
    scene: "RelayPanel",
  },
  "/works": {
    sectionIndex: 3,
    title: { ko: "수행실적", en: "Projects" },
    lead: {
      ko: "현장에서 검증된 전력 감시 시스템 구축 경험",
      en: "Field-proven power monitoring system experience",
    },
    scene: "ControlRoom",
  },
  "/support": {
    sectionIndex: 4,
    title: { ko: "고객센터", en: "Customer Support" },
    lead: {
      ko: "문의사항은 온라인 문의 폼으로 접수해 주십시오",
      en: "Please submit your inquiry through the online form",
    },
    scene: "HmiScreen",
  },
};

/* ──────────────────────────────────────────────
 * 3. 메인 비주얼 배너 (3 슬라이드 자동 롤링)
 * ────────────────────────────────────────────── */

export interface BannerSlide {
  id: string;
  eyebrow: I18n;
  headline: I18n;
  sub: I18n;
  cta: { label: I18n; to: string };
  scene: SceneKey;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: "main",
    eyebrow: positioning.primary,
    headline: brandMessages.corporate.sub,
    sub: positioning.supporting,
    cta: { label: { ko: "사업분야 보기", en: "View Business Areas" }, to: "/business" },
    scene: "RefineryDusk",
  },
  {
    id: "products",
    eyebrow: lsElectricArea.eyebrow,
    headline: lsElectricArea.heading,
    sub: lsElectricArea.body,
    cta: { label: { ko: "제품소개 보기", en: "View Products" }, to: "/products" },
    scene: "SwitchgearRoom",
  },
  {
    id: "monitoring",
    eyebrow: { ko: "전력 감시 · 자동화", en: "Monitoring & Automation" },
    headline: {
      ko: "현장의 전력을 한 화면에서 감시합니다",
      en: "Site power, monitored on a single screen",
    },
    sub: {
      ko: "계측 · 보호 · 통신 · HMI를 하나의 감시 체계로 통합합니다.",
      en: "Measurement, protection, communication and HMI integrated into one monitoring system.",
    },
    cta: { label: { ko: "수행실적 보기", en: "View Projects" }, to: "/works" },
    scene: "ControlRoom",
  },
];

/* ──────────────────────────────────────────────
 * 4. 공지사항 — 데모 게시물 (실제 공지 아님)
 *    실제 뉴스처럼 읽히는 제목을 만들지 않는다. 각 행에 데모 배지를 표기한다.
 * ────────────────────────────────────────────── */

export interface NoticePost {
  no: number;
  title: I18n;
  date: string;
  isDemo: true;
}

export const notices: NoticePost[] = [
  {
    no: 4,
    title: { ko: "홈페이지 데모 버전을 공개합니다", en: "Website demo version published" },
    date: "2026-01-05",
    isDemo: true,
  },
  {
    no: 3,
    title: {
      ko: "온라인 문의 접수 안내 (데모 폼)",
      en: "Guide to online inquiry submission (demo form)",
    },
    date: "2025-12-18",
    isDemo: true,
  },
  {
    no: 2,
    title: {
      ko: "회사소개 자료는 준비 중입니다",
      en: "Company profile materials are in preparation",
    },
    date: "2025-12-02",
    isDemo: true,
  },
  {
    no: 1,
    title: {
      ko: "게시판 샘플 항목입니다",
      en: "This is a sample board entry",
    },
    date: "2025-11-20",
    isDemo: true,
  },
];

/* ──────────────────────────────────────────────
 * 5. Power Flow 그룹 라벨 (content.ts 의 FlowNode.group 표시용)
 * ────────────────────────────────────────────── */

export const flowGroupLabels: Record<
  "source" | "distribution" | "measurement" | "network" | "monitoring",
  I18n
> = {
  source: { ko: "수전", en: "Incoming" },
  distribution: { ko: "배전", en: "Distribution" },
  measurement: { ko: "계측 · 보호", en: "Measurement" },
  network: { ko: "네트워크", en: "Network" },
  monitoring: { ko: "감시", en: "Monitoring" },
};

export const flowGroupOrder = [
  "source",
  "distribution",
  "measurement",
  "network",
  "monitoring",
] as const;

/* ──────────────────────────────────────────────
 * 6. UI 라벨 (화면 문구 — 컴포넌트 하드코딩 방지)
 * ────────────────────────────────────────────── */

export const ui = {
  home: { ko: "홈", en: "Home" },
  langKo: { ko: "한국어", en: "Korean" },
  more: { ko: "더보기", en: "More" },
  viewMore: { ko: "자세히 보기", en: "View More" },
  demoBadge: { ko: "데모", en: "DEMO" },
  demoPost: { ko: "데모 게시물", en: "Demo post" },
  demoPostNotice: {
    ko: "위 목록은 게시판 레이아웃 확인을 위한 데모 게시물입니다. 실제 공지가 아닙니다.",
    en: "The list above consists of demo posts for board layout purposes only — not actual notices.",
  },
  noticeTitle: { ko: "공지사항", en: "Notice" },
  noticeCols: {
    no: { ko: "번호", en: "No." },
    title: { ko: "제목", en: "Title" },
    date: { ko: "등록일", en: "Date" },
  },
  quick: {
    label: { ko: "빠른 메뉴", en: "Quick Menu" },
    inquiry: { ko: "문의하기", en: "Inquiry" },
    location: { ko: "오시는길", en: "Location" },
    top: { ko: "TOP", en: "TOP" },
  },
  menu: { ko: "메뉴", en: "Menu" },
  closeMenu: { ko: "메뉴 닫기", en: "Close menu" },
  openMenu: { ko: "메뉴 열기", en: "Open menu" },
  mainBanner: {
    label: { ko: "메인 배너", en: "Main banner" },
    goTo: { ko: "번째 배너로 이동", en: "Go to slide" },
    prev: { ko: "이전 배너", en: "Previous slide" },
    next: { ko: "다음 배너", en: "Next slide" },
    pause: { ko: "자동 전환 멈춤", en: "Pause auto-rotation" },
    play: { ko: "자동 전환 시작", en: "Start auto-rotation" },
  },
  main: {
    aboutBannerTitle: { ko: "회사소개", en: "About EZIO" },
    aboutBannerBody: {
      ko: "이지오는 산업 플랜트와 대형 사업장의 전력 인프라를 연결하는 B2B 전력 솔루션 기업입니다.",
      en: "EZIO is a B2B power solution company connecting the power infrastructure of industrial plants and large-scale facilities.",
    },
    aboutBannerCta: { ko: "CEO 인사말 보기", en: "Read the CEO Greeting" },
    businessTitle: { ko: "사업분야", en: "Business Areas" },
    businessMore: { ko: "사업분야 전체보기", en: "View all business areas" },
    inquiryTitle: { ko: "프로젝트 문의", en: "Project Inquiry" },
    inquiryBody: {
      ko: "프로젝트 상담 · 제품 정보 요청은 온라인 문의 폼으로 접수해 주십시오. 담당자가 확인 후 회신드립니다.",
      en: "Please submit project consultations and product information requests through the online inquiry form.",
    },
    inquiryCta: { ko: "온라인 문의", en: "Online Inquiry" },
    inquiryNote: {
      ko: "※ 데모 사이트로 대표번호는 표기하지 않습니다.",
      en: "※ This is a demo site; no representative phone number is listed.",
    },
    worksTitle: { ko: "주요 수행실적", en: "Featured Project" },
    flowTitle: { ko: "전력 인프라 흐름", en: "Power Infrastructure Flow" },
    flowBody: {
      ko: "전원 인입에서 감시 대시보드까지 — 현장 전력 흐름의 각 단계를 이지오가 연결합니다.",
      en: "From incoming power to the monitoring dashboard — EZIO connects every stage of the site power flow.",
    },
  },
  about: {
    greetingHeading: { ko: "CEO 인사말", en: "CEO Greeting" },
    greetingSign: { ko: "주식회사 이지오 대표이사", en: "CEO, EZIO" },
    placeholderNote: {
      ko: "본 인사말은 데모용 문구입니다. 실제 대표이사 인사말 수령 후 교체 예정입니다.",
      en: "This greeting is demo text. It will be replaced upon receipt of the official CEO message.",
    },
    overviewHeading: { ko: "회사개요", en: "Company Overview" },
    overviewNote: {
      ko: "※ 확인된 정보만 게재합니다. 임직원수 등 미확인 항목은 자료 수령 후 추가됩니다.",
      en: "※ Only verified information is published. Unverified items such as headcount will be added upon receipt of records.",
    },
    rows: {
      name: { ko: "회사명", en: "Company Name" },
      ceo: { ko: "대표이사", en: "CEO" },
      founded: { ko: "설립일", en: "Founded" },
      address: { ko: "소재지", en: "Address" },
      business: { ko: "사업분야", en: "Business Area" },
      revenue: { ko: "매출액", en: "Revenue" },
    },
    unconfirmed: { ko: "자료 수령 후 게재 예정", en: "To be published upon receipt of records" },
    capitalRow: { ko: "자본금 (2022년 기준)", en: "Capital (as of 2022)" },
    // 확인된 공개정보 — 기준연도 병기 필수
    capitalValue: { ko: "5,000만원", en: "KRW 50M" },
    historyHeading: { ko: "연혁", en: "Company History" },
    historyCols: {
      year: { ko: "연도", en: "Year" },
      event: { ko: "내용", en: "Event" },
    },
    historyConfirmed: { ko: "확인", en: "Confirmed" },
    historyPending: { ko: "확인 예정", en: "Pending" },
    historyNote: {
      ko: "※ 확인된 연혁만 표기하며, 미확인 항목은 임의로 작성하지 않습니다.",
      en: "※ Only verified history is listed; unverified entries are not fabricated.",
    },
    locationHeading: { ko: "오시는길", en: "Location" },
    mapPlaceholder: { ko: "지도 API 연동 예정", en: "Map API integration pending" },
    mapPlaceholderSub: {
      ko: "실서비스에서는 이 영역에 지도 서비스가 표시됩니다.",
      en: "In production, a map service will be displayed in this area.",
    },
    addressRow: { ko: "주소", en: "Address" },
    transportRow: { ko: "교통편", en: "Transport" },
    transportNote: {
      ko: "상세 교통편 안내는 회사 자료 수령 후 게재 예정입니다.",
      en: "Detailed transport guidance will be published upon receipt of company records.",
    },
    contactRow: { ko: "문의", en: "Contact" },
    contactNote: {
      ko: "대표번호 대신 온라인 문의 폼으로 접수해 주십시오.",
      en: "Please use the online inquiry form instead of a phone number.",
    },
  },
  business: {
    heading: { ko: "사업분야 안내", en: "Business Areas" },
    itemsLabel: { ko: "주요 취급 항목", en: "Key Items" },
    lsHeading: { ko: "취급 제품 영역", en: "Product Areas Handled" },
    industriesHeading: { ko: "적용 산업", en: "Industries Served" },
  },
  products: {
    heading: { ko: "제품 카테고리", en: "Product Categories" },
    catalogBtn: { ko: "카탈로그 (준비중)", en: "Catalog (Not Available)" },
    catalogTip: {
      ko: "데모 사이트 — 실제 카탈로그 파일이 없습니다.",
      en: "Demo site — no actual catalog file is available.",
    },
    demoScope: {
      ko: "※ 아래 제품 구성은 데모 콘텐츠입니다. 실제 취급 범위는 확정 후 갱신됩니다. 가격 정보는 제공하지 않으며, 사양 확인은 문의 폼을 이용해 주십시오.",
      en: "※ The product listing below is demo content. Actual scope will be updated once confirmed. No pricing is provided — please use the inquiry form for specifications.",
    },
    tableCols: {
      no: { ko: "No.", en: "No." },
      item: { ko: "제품", en: "Product" },
      category: { ko: "카테고리", en: "Category" },
    },
  },
  works: {
    featuredHeading: { ko: "주요 수행실적", en: "Featured Project" },
    processHeading: { ko: "프로젝트 수행 프로세스", en: "Project Process" },
    capabilityHeading: { ko: "기술 역량", en: "Technical Capability" },
    rows: {
      customer: { ko: "고객사", en: "Customer" },
      industry: { ko: "산업", en: "Industry" },
      location: { ko: "위치", en: "Location" },
      title: { ko: "프로젝트명", en: "Project" },
      scope: { ko: "수행 범위", en: "Scope" },
    },
    customerNote: {
      ko: "고객사 실명은 공개 동의 확인 전까지 표기하지 않습니다.",
      en: "The customer name is withheld until disclosure consent is confirmed.",
    },
  },
  support: {
    noticeHeading: { ko: "공지사항", en: "Notice" },
    inquiryHeading: { ko: "온라인 문의", en: "Online Inquiry" },
    submitted: {
      ko: "문의가 접수되었습니다. (데모 — 실제 전송되지 않습니다)",
      en: "Your inquiry has been received. (Demo — not actually sent)",
    },
    required: { ko: "필수", en: "Required" },
    select: { ko: "선택해 주세요", en: "Please select" },
  },
  footer: {
    sitemapHeading: { ko: "사이트맵", en: "Sitemap" },
  },
  notFound: {
    title: { ko: "페이지를 찾을 수 없습니다", en: "Page Not Found" },
    body: {
      ko: "요청하신 페이지가 존재하지 않거나 주소가 변경되었습니다.",
      en: "The page you requested does not exist or its address has changed.",
    },
    home: { ko: "메인으로 이동", en: "Go to Home" },
  },
};
