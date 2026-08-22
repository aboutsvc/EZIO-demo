/**
 * EGO Corporate Website — 사이트 공통 데이터 (한국어 단일)
 * =======================================================
 * ⚠️ ACCURACY RULES (절대 위반 금지 — EGO 콘텐츠 명세서 기준)
 *  - 전화번호·이메일·주소·대표이사 이름·설립연도·수치 등 미확정 값을 만들지 않는다.
 *    미확정 자리는 "확정 후 게재 예정" 등 중립 안내로 대체한다.
 *  - "공식 파트너/독점 공급사/전 사업장 총괄/공식 인증 서비스센터" 등 금지 표현 사용 불가.
 *  - GS칼텍스는 텍스트 표기("주요 고객: GS칼텍스")만 사용. 로고 사용 금지.
 *  - EGO를 제조사·공사/설치/시운전 수행사처럼 보이게 하는 문구 금지.
 *  - "Energe Goes On"은 회사가 제공한 공식 영문 의미 — "Energy"로 교정하지 않는다.
 */

export const company = {
  name: "EGO",
  wordmark: "EGO",
  englishMeaning: "Energe Goes On",
  // 핵심 포지셔닝 문장
  positioning:
    "EGO는 LS ELECTRIC 제품의 상담·견적·판매부터 발주·납품 관리, 현장 요청 대응과 제조사 연계 A/S까지 고객 접점을 담당하는 산업재 공급·지원 회사입니다.",
  // 메인 슬로건
  slogan: "LS ELECTRIC 제품과 고객 현장을 잇는 EGO",
  // 헤더 보조 문구
  headerTagline: "LS ELECTRIC 제품 공급과 현장 지원을 잇는 EGO",
  // 푸터 소개문
  footerIntro:
    "EGO는 LS ELECTRIC 제품의 상담·견적·판매, 발주·납품 관리, 현장 요청 대응과 제조사 연계 A/S를 지원하는 대리점입니다.",
  // 주요 사업 (회사 개요 확정 문구)
  mainBusiness:
    "LS ELECTRIC 제품 상담·견적·판매, 발주·납품 관리, 현장 요청 대응, 제조사 연계 A/S 지원",
  // 미확정 정보 공통 대체 문구
  pendingValue: "확정 후 게재 예정",
} as const;

/* ──────────────────────────────────────────────
 * 내비게이션 (확정 메뉴 구조)
 * ────────────────────────────────────────────── */

export interface NavChild {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string; // 하위 메뉴가 있으면 첫 하위 페이지 경로
  base: string; // active 판정용 경로 prefix
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: "회사소개",
    path: "/about/intro",
    base: "/about",
    children: [
      { label: "EGO 소개", path: "/about/intro" },
      { label: "비전 및 경영철학", path: "/about/vision" },
      { label: "경영진 소개", path: "/about/executives" },
      { label: "사업장 소개", path: "/about/workplace" },
    ],
  },
  {
    label: "사업영역",
    path: "/business/supply",
    base: "/business",
    children: [
      { label: "LS ELECTRIC 제품 공급", path: "/business/supply" },
      { label: "납품 및 현장 대응", path: "/business/delivery" },
      { label: "기술지원 및 A/S", path: "/business/service" },
    ],
  },
  { label: "주요 고객·수행실적", path: "/customers", base: "/customers" },
  {
    label: "고객지원",
    path: "/support/inquiry",
    base: "/support",
    children: [
      { label: "제품·견적 문의", path: "/support/inquiry" },
      { label: "A/S 접수", path: "/support/as" },
      { label: "기술자료·카탈로그", path: "/support/resources" },
      { label: "공지사항", path: "/support/notice" },
    ],
  },
  { label: "채용정보", path: "/careers", base: "/careers" },
];

export const headerCta = { label: "제품·견적 문의", path: "/support/inquiry" };
export const headerSubCta = { label: "A/S 접수", path: "/support/as" };

/* ──────────────────────────────────────────────
 * 공통 하단 CTA 배너 (페이지별 변형은 각 페이지 데이터에서 전달)
 * ────────────────────────────────────────────── */

export const defaultCtaBanner = {
  title: "필요한 제품과 지원 내용을 알려주세요",
  body: "제품명이나 정확한 사양을 모르셔도 사용 목적, 기존 제품 정보, 수량과 희망 일정을 알려주시면 확인에 필요한 내용을 안내드립니다.",
  primary: { label: "제품·견적 문의", path: "/support/inquiry" },
  secondary: { label: "A/S 접수", path: "/support/as" },
} as const;

// 회신 안내 (공통)
export const replyNotice =
  "문의는 운영시간 내 순차적으로 확인합니다. 제조사 확인이 필요한 경우 회신에 추가 시간이 소요될 수 있습니다.";

/* ──────────────────────────────────────────────
 * 푸터
 * ────────────────────────────────────────────── */

export const footer = {
  intro: company.footerIntro,
  companyInfoPending: "회사 정보는 확정 후 게재됩니다.",
  demoNotice: "※ 데모 사이트 — 실제 전송/게시가 아닙니다.",
  copyright: "Copyright © EGO. All rights reserved.",
} as const;

/* ──────────────────────────────────────────────
 * 공통 UI 라벨
 * ────────────────────────────────────────────── */

export const ui = {
  skipToContent: "본문으로 건너뛰기",
  openMenu: "메뉴 열기",
  closeMenu: "메뉴 닫기",
  demoBadge: "데모",
  requiredMark: "필수",
  selectPlaceholder: "선택해 주세요",
  demoFormNote: "※ 데모 사이트 — 실제 전송/게시가 아닙니다.",
  demoSubmitSuffix: "(데모 — 실제 전송되지 않습니다)",
  formResetLabel: "다시 작성하기",
} as const;
