/** 홈페이지 콘텐츠 — EGO 콘텐츠 명세서 §6 "실제 콘텐츠 문안" 그대로 사용 */

export const hero = {
  title: "LS ELECTRIC 제품과 고객 현장을 잇는 EGO",
  body: "고객이 필요한 제품을 정확히 확인하고, 견적과 발주, 납품 관리까지 이어갑니다. 납품 이후의 제품 관련 요청과 장애도 접수해 필요한 제조사 지원을 연결합니다.",
  englishMeaning: "Energe Goes On",
  primaryCta: { label: "제품·견적 문의", path: "/support/inquiry" },
  secondaryCta: { label: "A/S 접수", path: "/support/as" },
  tertiaryLink: { label: "EGO의 역할 알아보기", path: "/about/intro" },
};

// 히어로 하단 밴드 — 확정된 회사 사실만 표기
export const heroFacts = [
  { label: "회사명", value: "EGO" },
  { label: "영문 의미", value: "Energe Goes On" },
  { label: "주요 사업", value: "LS ELECTRIC 제품 상담·견적·판매, 발주·납품 관리, 현장 요청 대응, 제조사 연계 A/S 지원" },
  { label: "주요 고객", value: "GS칼텍스" },
];

export const relation = {
  title: "제품 공급 전후의 고객 접점을 하나로 잇습니다",
  lead: "제품을 선택하는 단계부터 납품 이후의 제품 관련 문의까지, EGO가 고객과 LS ELECTRIC 사이의 진행을 연결합니다.",
  steps: [
    {
      no: "1",
      title: "LS ELECTRIC 제품",
      role: "제품 제조 및 공급 브랜드",
      desc: "제품 제조와 공식 사양·기술자료의 기준이 되는 공급 브랜드입니다.",
    },
    {
      no: "2",
      title: "EGO의 공급 및 대응",
      role: "제품 상담·견적·공급 및 고객 현장 지원",
      desc: "요구사항 확인, 제품·사양 검토, 견적, 판매, 발주, 납기와 납품 관리, 현장 요청과 A/S 접수를 담당합니다.",
    },
    {
      no: "3",
      title: "고객 현장의 도입과 운영",
      role: "고객 현장",
      desc: "필요한 제품을 공급받고, 진행 상황과 제품 관련 후속 지원을 한 접점에서 안내받습니다.",
    },
  ],
};

export const duties = {
  title: "필요한 제품을 확인하고, 공급 과정을 관리하며, 후속 요청에 대응합니다",
  body: "산업용 제품 구매는 제품명만으로 끝나지 않습니다. 필요한 사양과 수량, 희망 일정, 납품 장소를 함께 확인해야 하며, 주문 이후에도 제조사 납기와 현장 요청을 계속 조율해야 합니다. EGO는 이 과정을 고객의 접점에서 이어서 관리합니다.",
  items: [
    "고객 요구사항과 사용 조건 확인",
    "제품 및 사양 검토와 제조사 협의",
    "견적 제시와 주문 내용 확인",
    "발주, 납기 확인, 출고와 납품 관리",
    "현장 요청, 변경 및 추가 문의 접수",
    "제품 장애 접수와 제조사 연계 A/S 지원",
  ],
};

export const businessCards = {
  title: "EGO의 사업영역",
  lead: "EGO의 업무는 제품 공급, 납품 및 현장 대응, 기술지원과 A/S의 세 영역으로 이어집니다.",
  cards: [
    {
      no: "01",
      title: "필요한 제품과 사양을 확인합니다",
      area: "LS ELECTRIC 제품 공급",
      body: "고객 요구사항을 확인하고 LS ELECTRIC 제품의 사양을 검토합니다. 견적과 주문, 제조사 발주, 납기 확인, 출고와 납품 과정을 관리합니다.",
      link: { label: "제품 공급 업무 보기", path: "/business/supply" },
    },
    {
      no: "02",
      title: "납품 전후의 요청을 이어서 관리합니다",
      area: "납품 및 현장 대응",
      body: "모델, 수량, 일정, 납품 장소를 확인하고 현장의 변경·추가 요청을 접수합니다. 필요한 내용을 고객사와 제조사 사이에서 확인하고 진행 상황을 안내합니다.",
      link: { label: "현장 대응 업무 보기", path: "/business/delivery" },
    },
    {
      no: "03",
      title: "제품 관련 문제의 접점을 맡습니다",
      area: "기술지원 및 A/S",
      body: "제품 정보와 장애 증상을 접수하고 초기 확인을 진행합니다. 필요한 경우 제조사 또는 관련 기술조직과의 확인, 수리·교체 협의와 진행 안내를 지원합니다.",
      link: { label: "기술지원 절차 보기", path: "/business/service" },
    },
  ],
};

export const dealerRole = {
  title: "LS ELECTRIC 제품을 고객 요구에 맞춰 공급합니다",
  body: "EGO는 LS ELECTRIC 대리점으로서 전기 및 시스템 관련 완제품의 상담, 견적, 판매와 공급을 담당합니다. 고객이 전달한 사용 목적과 요청 사양을 바탕으로 제품 정보를 확인하고, 필요한 경우 제조사와 협의합니다. 주문 이후에는 발주와 납기, 출고와 납품 진행을 관리합니다.",
  caution: "구체적인 취급 제품과 공급 가능 여부는 모델, 사양, 수량과 희망 일정을 확인한 뒤 안내드립니다.",
  cta: { label: "취급 제품 문의하기", path: "/support/inquiry" },
};

export const customers = {
  title: "주요 고객 현장에서 쌓아 온 공급과 대응 경험",
  body: "EGO는 GS칼텍스 현장에 공급되는 LS ELECTRIC 시스템 및 전기 제품 관련 업무를 담당해 온 경험이 있습니다. 고객 요청 접수와 견적 대응, 발주와 납기 관리, 제품 납품, 현장 요청, 장애 및 A/S 지원, 제조사와 고객 현장 사이의 커뮤니케이션을 수행합니다.",
  scopeNote:
    "프로젝트명, 사업장명과 세부 공급 내역은 고객사와의 계약 및 보안 기준에 따라 공개 가능한 범위에서 안내합니다.",
  customerLabel: "주요 고객: GS칼텍스",
  cta: { label: "주요 수행 경험 보기", path: "/customers" },
};

export const quickInquiry = {
  title: "어떤 도움이 필요하신가요?",
  cards: [
    {
      title: "제품 구매와 견적이 필요하신가요?",
      body: "제품명 또는 필요한 사양, 수량, 사용 현장과 희망 일정을 보내주시면 확인 후 안내드립니다.",
      cta: { label: "제품·견적 문의", path: "/support/inquiry" },
    },
    {
      title: "사용 중인 제품에 문제가 있나요?",
      body: "제품명, 모델명, 시리얼번호, 장애 증상과 발생 시점을 알려주시면 확인 절차를 안내드립니다.",
      cta: { label: "A/S 접수", path: "/support/as" },
    },
    {
      title: "카탈로그나 기술자료를 찾고 있나요?",
      body: "공개 가능한 공식 카탈로그, 매뉴얼, 사양서와 관련 문서를 확인할 수 있습니다.",
      cta: { label: "기술자료 확인", path: "/support/resources" },
    },
  ],
};

export const bottomCta = {
  title: "제품 공급과 현장 지원에 대해 상담해 보세요",
  body: "제품명이나 정확한 사양을 모르셔도 사용 목적, 현장 조건과 필요한 일정을 알려주시면 확인에 필요한 정보를 안내해 드립니다.",
  primary: { label: "제품·견적 문의하기", path: "/support/inquiry" },
  secondary: { label: "A/S 접수하기", path: "/support/as" },
  // 대표 전화/이메일 미확정 — 온라인 폼 안내로 대체
  contactNote: "문의는 온라인 폼으로 접수해 주세요.",
};
