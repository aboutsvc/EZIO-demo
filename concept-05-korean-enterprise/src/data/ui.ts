/**
 * UI CHROME LABELS — CONCEPT 05 (KOREAN ENTERPRISE)
 * =================================================
 * ⚠️ 회사 콘텐츠(사실·수치·문구)는 전부 `content.ts`에서 가져온다.
 * 이 파일은 오직 인터페이스 껍데기 라벨(내비 라벨, 섹션 타이틀, 버튼, 접근성 문구)만 담는다.
 * 회사 정보·실적·주장 문구를 여기에 추가하지 말 것.
 */

import type { I18n } from "./content";

export const ui = {
  /* ── Utility bar / header ── */
  skipToContent: { ko: "본문 바로가기", en: "Skip to content" },
  sitemap: { ko: "사이트맵", en: "Sitemap" },
  inquiry: { ko: "온라인 문의", en: "Online Inquiry" },
  languageLabel: { ko: "언어 선택", en: "Select language" },
  openMenu: { ko: "전체 메뉴 열기", en: "Open menu" },
  closeMenu: { ko: "메뉴 닫기", en: "Close menu" },
  allMenus: { ko: "전체메뉴", en: "All Menus" },
  goHome: { ko: "홈으로", en: "Home" },

  /* ── Main slider ── */
  sliderLabel: { ko: "메인 비주얼 슬라이더", en: "Main visual slider" },
  sliderPrev: { ko: "이전 슬라이드", en: "Previous slide" },
  sliderNext: { ko: "다음 슬라이드", en: "Next slide" },
  sliderPause: { ko: "자동 재생 정지", en: "Pause autoplay" },
  sliderPlay: { ko: "자동 재생 시작", en: "Start autoplay" },
  sliderGoTo: { ko: "슬라이드로 이동", en: "Go to slide" },

  /* ── Main page section titles ── */
  quickProductsTitle: { ko: "제품 카테고리", en: "Product Categories" },
  quickProductsLead: {
    ko: "산업 현장의 수배전·보호·감시·자동화 영역별로 제품 구성을 안내합니다.",
    en: "Product scope organised by distribution, protection, monitoring and automation.",
  },
  solutionsTitle: { ko: "솔루션", en: "Solutions" },
  solutionsLead: {
    ko: "배전 인프라부터 보호·계측, 감시·제어, 자동화, 엔지니어링까지 하나의 공급 체계로 연결합니다.",
    en: "From distribution infrastructure to protection, monitoring, automation and engineering — one supply framework.",
  },
  projectBandTitle: { ko: "프로젝트 · 기술역량", en: "Projects & Capability" },
  noticeTitle: { ko: "공지사항", en: "Notice" },
  resourceTitle: { ko: "자료실", en: "Resources" },
  more: { ko: "더보기", en: "More" },
  viewAll: { ko: "전체보기", en: "View all" },
  viewDetail: { ko: "자세히 보기", en: "View detail" },

  /* ── Common labels ── */
  demoBadge: { ko: "데모", en: "DEMO" },
  demoPost: { ko: "데모 게시물", en: "Demo post" },
  demoContent: { ko: "데모 콘텐츠", en: "Demo content" },
  catalogDemo: { ko: "카탈로그 (데모)", en: "Catalog (Demo)" },
  catalogDemoTitle: {
    ko: "데모 사이트입니다 — 실제 카탈로그 파일이 없어 다운로드가 비활성화되어 있습니다.",
    en: "Demo site — no actual catalog file is available, so downloading is disabled.",
  },
  home: { ko: "홈", en: "Home" },
  breadcrumbLabel: { ko: "현재 위치", en: "Breadcrumb" },
  lnbLabel: { ko: "하위 메뉴", en: "Section menu" },

  /* ── Company page ── */
  companyOverviewTitle: { ko: "회사 개요", en: "Company Overview" },
  companyFactsTitle: { ko: "회사 현황", en: "Company Facts" },
  historyTitle: { ko: "연혁", en: "History" },
  historyNote: {
    ko: "확인된 연혁만 표기합니다. 추가 항목은 회사 자료 수령 후 갱신됩니다.",
    en: "Only confirmed history is shown. Additional entries follow receipt of company records.",
  },
  ceoTitle: { ko: "CEO 인사말", en: "CEO Message" },
  ceoRole: { ko: "대표이사", en: "CEO" },
  ceoPlaceholderNote: {
    ko: "데모 표기 — 실제 CEO 인사말 수령 후 교체 예정입니다.",
    en: "Demo placeholder — to be replaced with the actual CEO message.",
  },
  addressLabel: { ko: "주소", en: "Address" },
  overviewRow: {
    nameKo: { ko: "회사명", en: "Company name" },
    nameEn: { ko: "영문 표기", en: "English notation" },
    ceo: { ko: "대표이사", en: "CEO" },
    founded: { ko: "설립", en: "Founded" },
    address: { ko: "소재지", en: "Location" },
    business: { ko: "사업영역", en: "Business area" },
  } satisfies Record<string, I18n>,
  nameEnDemoNote: {
    ko: "영문 표기는 데모용이며 공식 등록 영문 법인명이 확인되면 교체됩니다.",
    en: "The English notation is for demo purposes and will be replaced once the registered English name is confirmed.",
  },
  historyPending: { ko: "확인 예정", en: "Pending" },

  /* ── Products page ── */
  productsIntro: {
    ko: "카테고리를 선택하면 해당 영역의 제품 구성을 확인할 수 있습니다. 상세 사양과 현장 적용 구성은 문의 시 안내해 드립니다.",
    en: "Select a category to see its product scope. Detailed specifications and site configurations are provided on request.",
  },
  productsDemoNote: {
    ko: "표기된 제품 구성은 데모 콘텐츠입니다. 실제 취급 범위는 확정 후 갱신됩니다.",
    en: "The listed product scope is demo content and will be updated once the actual range is confirmed.",
  },
  allCategories: { ko: "전체 카테고리", en: "All Categories" },
  productCount: { ko: "개 품목", en: "items" },
  relatedSolution: { ko: "관련 솔루션", en: "Related solution" },
  productSpecNote: {
    ko: "상세 사양·현장 적용 구성은 문의 시 안내",
    en: "Specifications and site configuration on request",
  },
  categoryNotFound: {
    ko: "요청하신 카테고리를 찾을 수 없습니다. 전체 카테고리에서 다시 선택해 주세요.",
    en: "The requested category was not found. Please choose again from all categories.",
  },

  /* ── Solutions page ── */
  solutionScope: { ko: "주요 구성", en: "Scope" },

  /* ── Projects page ── */
  featuredTitle: { ko: "주요 수행 프로젝트", en: "Featured Project" },
  projectCustomer: { ko: "고객", en: "Customer" },
  projectLocation: { ko: "위치", en: "Location" },
  projectIndustry: { ko: "산업", en: "Industry" },
  projectScope: { ko: "수행 범위", en: "Project Scope" },
  industriesTitle: { ko: "적용 산업", en: "Industries" },
  processTitle: { ko: "프로젝트 수행 프로세스", en: "Project Process" },
  capabilityTitle: { ko: "기술 역량", en: "Technical Capability" },
  powerFlowTitle: { ko: "전력 인프라 흐름", en: "Power Infrastructure Flow" },
  powerFlowLead: {
    ko: "전원 인입에서 배전, 계측, 네트워크, 감시까지 하나의 흐름으로 구성합니다.",
    en: "From incoming power through distribution, measurement, network and monitoring — configured as one flow.",
  },

  /* ── Support page ── */
  noticeBoardTitle: { ko: "공지사항", en: "Notice Board" },
  noticeBoardNote: {
    ko: "아래 목록은 게시판 레이아웃 확인을 위한 데모 게시물입니다. 실제 공지가 아닙니다.",
    en: "The list below consists of demo posts for layout purposes only — not actual announcements.",
  },
  boardNo: { ko: "번호", en: "No." },
  boardTitle: { ko: "제목", en: "Title" },
  boardDate: { ko: "등록일", en: "Date" },
  contactTitle: { ko: "온라인 문의", en: "Online Inquiry" },
  contactRouting: {
    ko: "확인된 대표 전화·팩스·이메일이 없어 문의는 아래 폼으로만 접수합니다.",
    en: "No verified phone, fax or email is published — inquiries are received through the form below only.",
  },
  formRequired: { ko: "필수", en: "required" },
  formSelectPlaceholder: { ko: "선택해 주세요", en: "Please select" },
  formSuccess: {
    ko: "문의가 접수되었습니다. (데모 — 실제 전송되지 않습니다)",
    en: "Your inquiry has been received. (Demo — nothing is actually sent.)",
  },

  /* ── Power flow group labels ── */
  flowGroups: {
    source: { ko: "수전", en: "Incoming" },
    distribution: { ko: "배전", en: "Distribution" },
    measurement: { ko: "계측", en: "Measurement" },
    network: { ko: "네트워크", en: "Network" },
    monitoring: { ko: "감시", en: "Monitoring" },
  } satisfies Record<string, I18n>,

  /* ── Footer ── */
  footerFamilyTitle: { ko: "바로가기", en: "Quick links" },
  toTop: { ko: "맨 위로", en: "Back to top" },
};
