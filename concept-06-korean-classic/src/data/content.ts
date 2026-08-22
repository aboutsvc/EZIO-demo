/**
 * EGO Corporate Website — 공유 콘텐츠 (콘텐츠 명세서 기반)
 * ========================================================
 * 문안 출처: EGO_website_content_specification.md — 명세서의 "실제 콘텐츠 문안"을 그대로 사용한다.
 *
 * ⚠️ ACCURACY RULES (절대 위반 금지)
 *  - 전화번호 / 이메일 / 주소 / 대표이사 이름 / 설립연도 / 수치를 만들어내지 않는다.
 *    → 사실이 없는 자리는 "확정 후 게재 예정" 처리하거나 섹션을 숨긴다.
 *  - "Energe Goes On"은 회사가 제공한 공식 영문 의미 — "Energy"로 교정하지 않는다.
 *  - GS칼텍스는 텍스트로만 "주요 고객: GS칼텍스" 표기. 로고 사용 금지.
 *    "공식 파트너 / 독점 공급사 / 전 사업장 총괄" 등 금지 표현 사용 불가.
 *  - EGO를 제조사·공사/설치/시운전 수행사·공식 인증 서비스센터처럼 보이게 하지 않는다.
 *  - "모든 LS ELECTRIC 제품 취급" 금지 — 제품명·사양 확인 후 안내 패턴만 사용.
 */

export const company = {
  name: "EGO",
  /** 공식 영문 의미 — 철자 그대로 표기 (교정 금지) */
  nameMeaning: "Energe Goes On",
  slogan: "LS ELECTRIC 제품과 고객 현장을 잇는 EGO",
  headerTagline: "LS ELECTRIC 제품 공급과 현장 지원을 잇는 EGO",
  positioning:
    "EGO는 LS ELECTRIC 제품의 상담·견적·판매부터 발주·납품 관리, 현장 요청 대응과 제조사 연계 A/S까지 고객 접점을 담당하는 산업재 공급·지원 회사입니다.",
  shortIntro:
    "EGO는 LS ELECTRIC 제품의 상담·견적·공급과 납품 관리, 현장 요청 및 제조사 연계 A/S를 지원하는 대리점입니다.",
  mainBusiness:
    "LS ELECTRIC 제품 상담·견적·판매, 발주·납품 관리, 현장 요청 대응, 제조사 연계 A/S 지원",
  /** 미확정 정보 공통 표기 — 값을 지어내지 않는다 */
  pending: "확정 후 게재 예정",
};

/** 세 주체가 같은 화면에 나올 때 함께 표기하는 역할 라벨 (명세서 12.7) */
export const entityRoles = {
  lsElectric: "제품 제조 및 공급 브랜드",
  ego: "제품 상담·견적·공급 및 고객 현장 지원",
  gsCaltex: "주요 고객 및 대표 수행 경험",
};

/** 공통 하단 CTA (명세서 12.3 기본형) */
export const commonCta = {
  title: "필요한 제품과 지원 내용을 알려주세요",
  body: "제품명이나 정확한 사양을 모르셔도 사용 목적, 기존 제품 정보, 수량과 희망 일정을 알려주시면 확인에 필요한 내용을 안내드립니다.",
  primary: { label: "제품·견적 문의", to: "/support/inquiry" },
  secondary: { label: "A/S 접수", to: "/support/as" },
  /** 회신 안내 (명세서 12.4) */
  replyNote:
    "문의는 운영시간 내 순차적으로 확인합니다. 제조사 확인이 필요한 경우 회신에 추가 시간이 소요될 수 있습니다.",
};

/** 취급 제품 범위 공통 안내 (명세서 12.4) */
export const productScopeNote =
  "구체적인 취급 및 공급 가능 여부는 제품명, 모델, 사양, 수량과 희망 일정을 확인한 뒤 안내드립니다.";

export const footerContent = {
  /** 푸터 소개문 (명세서 12.6) */
  intro:
    "EGO는 LS ELECTRIC 제품의 상담·견적·판매, 발주·납품 관리, 현장 요청 대응과 제조사 연계 A/S를 지원하는 대리점입니다.",
  pendingLine: "회사 정보는 확정 후 게재됩니다.",
  demoNotice: "※ 데모 사이트 — 실제 전송/게시가 아닙니다.",
  copyright: "Copyright © EGO. All rights reserved.",
};
