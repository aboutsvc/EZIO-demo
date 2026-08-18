/**
 * EZIO Corporate Website — Canonical Shared Content Model
 * =======================================================
 * 이 파일은 4개 디자인 콘셉트가 공유하는 단일 콘텐츠 기준(Single Source of Truth)이다.
 * 각 concept 프로젝트는 이 파일을 src/data/content.ts 로 복사하여 사용한다.
 *
 * ⚠️ ACCURACY RULES (절대 위반 금지)
 *  - LS ELECTRIC 파트너 등급 표현 금지: "Authorized Distributor", "Official Partner",
 *    "공식 대리점", "공식 특약점", "Authorized Partner" 등 사용 불가.
 *    → 안전 표현만 사용: "LS ELECTRIC Products", "Industrial Power Solutions" 등.
 *  - 고객명(GS칼텍스)은 publicCustomerName 플래그가 false인 동안 절대 노출하지 않는다.
 *  - 확인되지 않은 숫자(프로젝트 수, 직원 수, 업력, 인증, 수상)를 만들지 않는다.
 *  - 재무정보는 반드시 기준연도(FY2022 등)를 함께 표기한다.
 *  - "EZIO Co., Ltd."는 데모용 표기이며 공식 영문 법인명으로 단정하지 않는다.
 */

export type Lang = "ko" | "en";

export interface I18n {
  ko: string;
  en: string;
}

/* ──────────────────────────────────────────────
 * 1. COMPANY
 * ────────────────────────────────────────────── */

export const company = {
  nameKo: "주식회사 이지오",
  // 데모용 영문 표기 — 공식 등록 영문 법인명 미확인 (확정 표현 금지)
  nameEn: "EZIO",
  nameEnLong: "EZIO Co., Ltd.", // demo notation only
  wordmark: "EZIO", // Demo Wordmark — 공식 CI 파일 수령 시 Logo component에서 교체
  ceo: { ko: "김광술", en: "Kim Kwang-sul" },
  founded: "2021-05-07",
  foundedDisplay: { ko: "2021년 5월 설립", en: "Founded May 2021" },
  address: {
    ko: "경기도 안양시 동안구 평촌대로 239, 18층 1820호",
    en: "#1820, 18F, 239 Pyeongchon-daero, Dongan-gu, Anyang-si, Gyeonggi-do, Korea",
  },
  addressShort: { ko: "경기도 안양", en: "Anyang, Korea" },
  // 확인된 재무정보 — 기준연도 표기 필수. 최신 실적으로 오해되지 않게 사용.
  facts: [
    { label: { ko: "설립", en: "Founded" }, value: { ko: "2021년 5월", en: "May 2021" } },
    { label: { ko: "소재지", en: "Location" }, value: { ko: "경기도 안양시", en: "Anyang, Korea" } },
    {
      label: { ko: "사업영역", en: "Business" },
      value: { ko: "산업용 전력·자동화 솔루션", en: "Industrial Power & Automation Solutions" },
    },
    {
      label: { ko: "매출액 (2022 회계연도 기준)", en: "Revenue (FY2022)" },
      value: { ko: "약 67.6억원", en: "KRW 6.76B" },
    },
  ],
  // History — 확인된 항목만. 나머지는 placeholder임을 명시.
  history: [
    {
      year: "2021",
      event: { ko: "주식회사 이지오 설립", en: "EZIO established" },
      confirmed: true,
    },
    {
      year: "—",
      event: {
        ko: "추가 연혁은 회사 자료 수령 후 업데이트 예정입니다.",
        en: "Additional history will be updated upon receipt of company records.",
      },
      confirmed: false, // placeholder — 확인되지 않은 연혁을 만들어내지 않는다
    },
  ],
  // CEO Message — 실제 메시지 미수령. 장문의 가짜 인사말 금지. Demo placeholder.
  ceoMessage: {
    isPlaceholder: true,
    ko: "산업 현장의 안정적인 전력 운영을 위해, 검증된 기술과 제품을 신뢰할 수 있는 방식으로 연결하겠습니다.",
    en: "We connect proven power technology to industrial sites — reliably, and with accountability.",
    note: "Demo placeholder — 실제 CEO 메시지 수령 후 교체",
  },
};

/* ──────────────────────────────────────────────
 * 2. BRAND / POSITIONING
 * ────────────────────────────────────────────── */

export const positioning = {
  primary: { ko: "산업용 전력 솔루션", en: "Industrial Power Solutions" },
  supporting: {
    ko: "전력 배전 · 보호 · 감시 · 자동화 · 엔지니어링",
    en: "Power Distribution · Protection · Monitoring · Automation · Engineering",
  },
  // 30초 안에 전달해야 할 핵심 정의
  definition: {
    ko: "산업 플랜트와 대형 사업장을 대상으로 검증된 전력·자동화 제품과 엔지니어링을 연결하여 공급하는 B2B 산업 전력 솔루션 기업",
    en: "A B2B industrial power solution company connecting proven power & automation products with engineering for industrial plants and large-scale facilities.",
  },
};

// Concept별 브랜드 메시지 (각 concept가 자기 것을 사용)
export const brandMessages = {
  industrial: {
    headline: { ko: "Connecting Power & Industry", en: "Connecting Power & Industry" },
    sub: {
      ko: "산업 현장의 안정적인 전력 운영을 위한\n전력·자동화 솔루션을 제공합니다.",
      en: "Power and automation solutions\nfor reliable industrial operations.",
    },
  },
  corporate: {
    headline: { ko: "Reliable Power for Industry", en: "Reliable Power for Industry" },
    sub: {
      ko: "산업을 움직이는 안정적인 전력 솔루션",
      en: "Stable power solutions that keep industry moving.",
    },
  },
  technology: {
    headline: { ko: "Reliable Power. Smarter Industry.", en: "Reliable Power. Smarter Industry." },
    sub: {
      ko: "산업 현장에 필요한 전력 기술을 연결합니다.",
      en: "Connecting the power technology industry demands.",
    },
  },
  minimal: {
    headline: { ko: "POWER\nFOR\nINDUSTRY", en: "POWER\nFOR\nINDUSTRY" },
    sub: {
      ko: "Power Distribution\nMonitoring\nAutomation\nEngineering",
      en: "Power Distribution\nMonitoring\nAutomation\nEngineering",
    },
  },
};

export const intro = {
  heading: { ko: "산업현장의 전력을 이해합니다", en: "We understand industrial power" },
  body: {
    ko: "이지오는 산업 플랜트와 대형 사업장을 대상으로 검증된 전력·자동화 제품과 관련 엔지니어링을 연결하여 공급하는 B2B 산업 전력 솔루션 기업입니다. 배전 인프라에서 보호·계측, 감시 시스템까지 — 현장에 필요한 기술을 하나의 흐름으로 연결합니다.",
    en: "EZIO is a B2B industrial power solution company supplying proven power & automation products with engineering coordination for industrial plants and large-scale facilities. From distribution infrastructure to protection, measurement and monitoring — we connect the technologies a site needs into one coherent system.",
  },
};

/* ──────────────────────────────────────────────
 * 3. SOLUTIONS (5개 핵심 사업영역)
 * ────────────────────────────────────────────── */

export interface Solution {
  id: string;
  no: string; // "01" 형태 numeric label
  title: I18n;
  desc: I18n;
  items: I18n[];
}

export const solutions: Solution[] = [
  {
    id: "power-distribution",
    no: "01",
    title: { ko: "전력 배전", en: "Power Distribution" },
    desc: {
      ko: "산업 시설을 위한 신뢰성 있는 전력 배전 인프라를 공급합니다.",
      en: "Reliable electrical distribution infrastructure for industrial facilities.",
    },
    items: [
      { ko: "MV 배전반 (MV Switchgear)", en: "MV Switchgear" },
      { ko: "LV 배전반 (LV Switchgear)", en: "LV Switchgear" },
      { ko: "MCC", en: "MCC" },
      { ko: "변압기 (Transformer)", en: "Transformer" },
      { ko: "차단기 (Circuit Breaker)", en: "Circuit Breaker" },
      { ko: "부스웨이 (Busway)", en: "Busway" },
    ],
  },
  {
    id: "protection-measurement",
    no: "02",
    title: { ko: "보호 · 계측", en: "Protection & Measurement" },
    desc: {
      ko: "전력 설비의 보호와 계측, 전력 데이터 수집을 담당합니다.",
      en: "Protection, measurement and electrical data acquisition.",
    },
    items: [
      { ko: "보호계전기 (Protection Relay)", en: "Protection Relay" },
      { ko: "디지털 미터 (Digital Meter)", en: "Digital Meter" },
      { ko: "전력 미터 (Power Meter)", en: "Power Meter" },
      { ko: "전력 품질 (Power Quality)", en: "Power Quality" },
      { ko: "IED", en: "IED" },
    ],
  },
  {
    id: "monitoring-control",
    no: "03",
    title: { ko: "감시 · 제어", en: "Monitoring & Control" },
    desc: {
      ko: "현장 기기와 전력 설비를 감시 환경으로 연결합니다.",
      en: "Connecting field devices and power equipment to monitoring environments.",
    },
    items: [
      { ko: "SCADA", en: "SCADA" },
      { ko: "HMI", en: "HMI" },
      { ko: "게이트웨이 (Gateway)", en: "Gateway" },
      { ko: "전력 감시 (Power Monitoring)", en: "Power Monitoring" },
      { ko: "알람 감시 (Alarm Monitoring)", en: "Alarm Monitoring" },
      { ko: "에너지 대시보드 (Energy Dashboard)", en: "Energy Dashboard" },
    ],
  },
  {
    id: "automation",
    no: "04",
    title: { ko: "자동화", en: "Automation" },
    desc: {
      ko: "산업 제어와 통신 통합을 지원합니다.",
      en: "Industrial control and communication integration.",
    },
    items: [
      { ko: "PLC", en: "PLC" },
      { ko: "산업용 네트워크 (Industrial Network)", en: "Industrial Network" },
      { ko: "통신 (Communication)", en: "Communication" },
      { ko: "제어 통합 (Control Integration)", en: "Control Integration" },
    ],
  },
  {
    id: "engineering",
    no: "05",
    title: { ko: "엔지니어링 · 통합", en: "Engineering & Integration" },
    desc: {
      ko: "프로젝트 엔지니어링, 협업 조율, 시험 및 시운전을 지원합니다.",
      en: "Project engineering, coordination, testing and commissioning support.",
    },
    items: [
      { ko: "시스템 설계 (System Design)", en: "System Design" },
      { ko: "엔지니어링 협업 (Engineering Coordination)", en: "Engineering Coordination" },
      { ko: "FAT", en: "FAT" },
      { ko: "시운전 지원 (Commissioning Support)", en: "Commissioning Support" },
      { ko: "기술 지원 (Technical Support)", en: "Technical Support" },
      { ko: "프로젝트 관리 (Project Management)", en: "Project Management" },
    ],
  },
];

/* ──────────────────────────────────────────────
 * 4. PRODUCTS (카테고리 중심 — 쇼핑몰 UI 금지: 가격/장바구니/구매버튼 없음)
 *    ※ 실제 취급범위 미확정 — 데모 콘텐츠. 향후 수정 용이하도록 데이터 분리.
 * ────────────────────────────────────────────── */

export interface ProductCategory {
  id: string;
  title: I18n;
  desc: I18n;
  products: I18n[];
  isDemoContent: true; // 실제 취급범위 확정 전 데모 표기
}

export const productCategories: ProductCategory[] = [
  {
    id: "power-distribution",
    title: { ko: "전력 배전", en: "Power Distribution" },
    desc: {
      ko: "수배전 인프라를 구성하는 핵심 전력기기",
      en: "Core equipment for power distribution infrastructure",
    },
    products: [
      { ko: "MV Switchgear", en: "MV Switchgear" },
      { ko: "LV Switchgear", en: "LV Switchgear" },
      { ko: "MCC", en: "MCC" },
      { ko: "Circuit Breaker", en: "Circuit Breaker" },
      { ko: "Transformer", en: "Transformer" },
      { ko: "Busway", en: "Busway" },
    ],
    isDemoContent: true,
  },
  {
    id: "protection-measurement",
    title: { ko: "보호 · 계측", en: "Protection & Measurement" },
    desc: {
      ko: "전력계통 보호와 정밀 계측 기기",
      en: "Power system protection and precision measurement devices",
    },
    products: [
      { ko: "Protection Relay", en: "Protection Relay" },
      { ko: "Digital Meter", en: "Digital Meter" },
      { ko: "Power Quality", en: "Power Quality" },
      { ko: "IED", en: "IED" },
    ],
    isDemoContent: true,
  },
  {
    id: "monitoring",
    title: { ko: "감시 시스템", en: "Monitoring Systems" },
    desc: {
      ko: "전력 설비 상태를 실시간으로 감시하는 시스템",
      en: "Real-time power equipment monitoring systems",
    },
    products: [
      { ko: "SCADA", en: "SCADA" },
      { ko: "Power Monitoring", en: "Power Monitoring" },
      { ko: "Energy Dashboard", en: "Energy Dashboard" },
      { ko: "Gateway", en: "Gateway" },
    ],
    isDemoContent: true,
  },
  {
    id: "automation",
    title: { ko: "자동화", en: "Automation" },
    desc: {
      ko: "산업 제어와 통신 통합 기기",
      en: "Industrial control and communication devices",
    },
    products: [
      { ko: "PLC", en: "PLC" },
      { ko: "HMI", en: "HMI" },
      { ko: "Industrial Communication", en: "Industrial Communication" },
    ],
    isDemoContent: true,
  },
];

// Products 영역 CTA — 구매 버튼 아님
export const productCtas = {
  viewSolutions: { ko: "솔루션 보기", en: "View Solutions" },
  requestInfo: { ko: "제품 정보 요청", en: "Request Product Information" },
  technicalInquiry: { ko: "기술 문의", en: "Technical Inquiry" },
};

/* ──────────────────────────────────────────────
 * 5. LS ELECTRIC PRODUCT AREA
 *    ⚠️ 파트너 등급 확정 표현 금지. 아래 안전 문구만 사용.
 *    실제 계약관계 확인 후 문구 교체 가능하도록 분리.
 * ────────────────────────────────────────────── */

export const lsElectricArea = {
  // 안전 표현: "LS ELECTRIC Products" — 파트너십 등급을 주장하지 않음
  eyebrow: { ko: "LS ELECTRIC Products", en: "LS ELECTRIC Products" },
  heading: { ko: "검증된 전력 기술", en: "Proven Power Technology" },
  body: {
    ko: "산업 현장에서 검증된 전력·자동화 제품을 기반으로 현장에 적합한 솔루션을 제공합니다.",
    en: "We deliver solutions built on power & automation products proven in industrial environments.",
  },
  categories: [
    { ko: "전력 배전", en: "Power Distribution" },
    { ko: "저압 (Low Voltage)", en: "Low Voltage" },
    { ko: "고압 (Medium Voltage)", en: "Medium Voltage" },
    { ko: "보호 · 계측", en: "Protection & Measurement" },
    { ko: "스마트 전력", en: "Smart Power" },
    { ko: "자동화", en: "Automation" },
  ],
  // LS 로고 사용 권한 미확인 — 텍스트 기반 표현만 사용
  logoUsageAllowed: false,
};

/* ──────────────────────────────────────────────
 * 6. INDUSTRIES
 * ────────────────────────────────────────────── */

export interface Industry {
  id: string;
  title: I18n;
  desc: I18n;
}

export const industries: Industry[] = [
  {
    id: "oil-gas",
    title: { ko: "정유 · 석유화학", en: "Oil & Gas" },
    desc: { ko: "정유 및 석유화학 플랜트", en: "Refinery / Petrochemical plants" },
  },
  {
    id: "manufacturing",
    title: { ko: "제조", en: "Manufacturing" },
    desc: { ko: "산업 제조 시설", en: "Industrial manufacturing facilities" },
  },
  {
    id: "energy",
    title: { ko: "에너지", en: "Energy" },
    desc: { ko: "전력 · 에너지 설비", en: "Power / Energy facilities" },
  },
  {
    id: "infrastructure",
    title: { ko: "인프라", en: "Infrastructure" },
    desc: { ko: "대형 산업 인프라", en: "Large-scale industrial infrastructure" },
  },
];

/* ──────────────────────────────────────────────
 * 7. PROJECT PROCESS (8단계)
 * ────────────────────────────────────────────── */

export interface ProcessStep {
  no: string;
  title: I18n;
  desc: I18n;
}

export const processSteps: ProcessStep[] = [
  { no: "01", title: { ko: "요구사항", en: "Requirement" }, desc: { ko: "현장 요구사항 파악 및 현장 조사", en: "Requirement analysis & site survey" } },
  { no: "02", title: { ko: "엔지니어링", en: "Engineering" }, desc: { ko: "시스템 · 네트워크 설계", en: "System & network design" } },
  { no: "03", title: { ko: "제품 선정", en: "Product Selection" }, desc: { ko: "현장 조건에 맞는 제품 구성", en: "Product configuration for site conditions" } },
  { no: "04", title: { ko: "공급", en: "Supply" }, desc: { ko: "전력 · 자동화 제품 공급", en: "Power & automation product supply" } },
  { no: "05", title: { ko: "통합", en: "Integration" }, desc: { ko: "통신 · 시스템 통합", en: "Communication & system integration" } },
  { no: "06", title: { ko: "FAT", en: "FAT" }, desc: { ko: "공장 인수 시험", en: "Factory Acceptance Test" } },
  { no: "07", title: { ko: "시운전", en: "Commissioning" }, desc: { ko: "현장 시운전 지원", en: "On-site commissioning support" } },
  { no: "08", title: { ko: "지원", en: "Support" }, desc: { ko: "운영 교육 및 기술 지원", en: "Operator training & technical support" } },
];

/* ──────────────────────────────────────────────
 * 8. FEATURED PROJECT — Major Korean Refinery
 *    ⚠️ publicCustomerName: false 인 동안 고객명 절대 노출 금지.
 * ────────────────────────────────────────────── */

export const featuredProject = {
  // 고객명 공개 권한 미확인 — false 유지. 허가 확인 시 true로 변경하면 실명 표기.
  publicCustomerName: false,
  customerNamePublic: { ko: "국내 대형 정유사", en: "Major Korean Refinery" },
  customerNameActual: { ko: "GS칼텍스", en: "GS Caltex" }, // publicCustomerName=true일 때만 사용
  title: {
    ko: "전력 감시 시스템 고도화",
    en: "Power Monitoring System Enhancement",
  },
  location: { ko: "전남 여수", en: "Yeosu, Korea" },
  industry: { ko: "정유 · 석유화학", en: "Oil & Gas / Refinery" },
  scope: [
    { ko: "HV / LV 디지털 계기 통합", en: "HV / LV Digital Instrument Integration" },
    { ko: "보호계전기 통합", en: "Protection Relay Integration" },
    { ko: "게이트웨이 구성", en: "Gateway Configuration" },
    { ko: "네트워크 통합", en: "Network Integration" },
    { ko: "HMI 엔지니어링", en: "HMI Engineering" },
    { ko: "전력 감시", en: "Power Monitoring" },
    { ko: "알람 로직", en: "Alarm Logic" },
    { ko: "웹 모니터링", en: "Web Monitoring" },
    { ko: "시운전 지원", en: "Commissioning Support" },
  ],
  summary: {
    ko: "국내 대형 정유 시설의 수배전 설비 디지털 계기와 보호계전기를 감시 시스템으로 통합하고, HMI 엔지니어링부터 알람 로직, 웹 모니터링, 시운전까지 지원한 전력 감시 시스템 고도화 프로젝트입니다.",
    en: "A power monitoring enhancement project for a major Korean refinery — integrating switchgear digital instruments and protection relays into the monitoring system, with HMI engineering, alarm logic, web monitoring and commissioning support.",
  },
};

// helper — 고객명 표시용
export const projectCustomerName = (lang: Lang) =>
  featuredProject.publicCustomerName
    ? featuredProject.customerNameActual[lang]
    : featuredProject.customerNamePublic[lang];

/* ──────────────────────────────────────────────
 * 9. POWER INFRASTRUCTURE FLOW (Visualization용 데이터)
 * ────────────────────────────────────────────── */

export interface FlowNode {
  id: string;
  label: I18n;
  group: "source" | "distribution" | "measurement" | "network" | "monitoring";
}

export const powerFlow: FlowNode[] = [
  { id: "source", label: { ko: "전원 (Power Source)", en: "Power Source" }, group: "source" },
  { id: "hv-mv", label: { ko: "HV / MV", en: "HV / MV" }, group: "source" },
  { id: "mv-swgr", label: { ko: "MV 배전반", en: "MV Switchgear" }, group: "distribution" },
  { id: "transformer", label: { ko: "변압기", en: "Transformer" }, group: "distribution" },
  { id: "lv-swgr", label: { ko: "LV 배전반 / MCC", en: "LV Switchgear / MCC" }, group: "distribution" },
  { id: "meter", label: { ko: "미터 / 릴레이 / IED", en: "Meter / Relay / IED" }, group: "measurement" },
  { id: "network", label: { ko: "산업용 네트워크", en: "Industrial Network" }, group: "network" },
  { id: "gateway", label: { ko: "게이트웨이", en: "Gateway" }, group: "network" },
  { id: "scada", label: { ko: "SCADA / HMI", en: "SCADA / HMI" }, group: "monitoring" },
  { id: "monitoring", label: { ko: "감시 (Monitoring)", en: "Monitoring" }, group: "monitoring" },
  { id: "dashboard", label: { ko: "대시보드 / 알람 / 트렌드", en: "Dashboard / Alarm / Trend" }, group: "monitoring" },
];

/* ──────────────────────────────────────────────
 * 10. CAPABILITIES (GS칼텍스 216 PJT에서 확인된 기술영역 — 표현 주의)
 *     ※ "직접 수행" 단정 금지 → System Integration / Coordination 계열 표현 사용
 * ────────────────────────────────────────────── */

export const capabilities = [
  {
    id: "equipment",
    title: { ko: "전력설비 통합", en: "Power Equipment Integration" },
    items: [
      { ko: "HV/LV 배전반 디지털 계기", en: "HV/LV Switchgear digital instruments" },
      { ko: "디지털 미터 · 보호계전기 · IED", en: "Digital Meter · Protection Relay · IED" },
      { ko: "I/O Device", en: "I/O Device" },
    ],
  },
  {
    id: "communication",
    title: { ko: "통신", en: "Communication" },
    items: [
      { ko: "RS422 / RS485 · Gateway", en: "RS422 / RS485 · Gateway" },
      { ko: "네트워크 구성 · 기기 통신 설정", en: "Network configuration · Device comm. setup" },
      { ko: "통신 시험", en: "Communication testing" },
    ],
  },
  {
    id: "hmi",
    title: { ko: "HMI · 감시", en: "HMI · Monitoring" },
    items: [
      { ko: "HMI 화면 엔지니어링", en: "HMI screen engineering" },
      { ko: "전력계통 시각화 · 감시 포인트", en: "Power system visualization · Monitoring points" },
      { ko: "전압 · 전류 · 전력 · 역률 · 에너지 감시", en: "Voltage · Current · Power · PF · Energy monitoring" },
    ],
  },
  {
    id: "data",
    title: { ko: "데이터", en: "Data" },
    items: [
      { ko: "IED Library · DB 구조 · DB 연동", en: "IED Library · DB structure · DB linking" },
      { ko: "데이터 수집 · 처리 · 조회", en: "Data collection · handling · query" },
      { ko: "Web Server · Multi Trend · Energy Dashboard", en: "Web Server · Multi Trend · Energy Dashboard" },
    ],
  },
  {
    id: "alarm",
    title: { ko: "알람", en: "Alarm" },
    items: [
      { ko: "알람 로직 엔지니어링", en: "Alarm logic engineering" },
      { ko: "생산팀별 알람 구성", en: "Production team-specific alarms" },
      { ko: "이벤트 우선순위 분류", en: "Event priority classification" },
    ],
  },
  {
    id: "engineering",
    title: { ko: "엔지니어링", en: "Engineering" },
    items: [
      { ko: "현장 조사 · 시스템/네트워크 설계", en: "Site survey · System/Network design" },
      { ko: "FAT · 통신/HMI 시험 · I/O Point 시험", en: "FAT · Communication/HMI test · I/O point test" },
      { ko: "시운전 · 운영 교육 · 문서화", en: "Commissioning · Operator training · Documentation" },
    ],
  },
];

/* ──────────────────────────────────────────────
 * 11. CONTACT (Demo form — backend 전송 없음)
 * ────────────────────────────────────────────── */

export const contact = {
  heading: { ko: "프로젝트를 시작하세요", en: "Start a Project" },
  sub: {
    ko: "프로젝트 상담 및 견적을 요청하실 수 있습니다.",
    en: "Request a project consultation or quotation.",
  },
  fields: {
    company: { ko: "회사명", en: "Company" },
    name: { ko: "성함", en: "Name" },
    email: { ko: "이메일", en: "Email" },
    phone: { ko: "연락처", en: "Phone" },
    projectType: { ko: "프로젝트 유형", en: "Project Type" },
    message: { ko: "문의 내용", en: "Message" },
  },
  projectTypes: [
    { ko: "제품 문의", en: "Product Inquiry" },
    { ko: "전력 배전", en: "Power Distribution" },
    { ko: "감시 / SCADA", en: "Monitoring / SCADA" },
    { ko: "자동화", en: "Automation" },
    { ko: "엔지니어링", en: "Engineering" },
    { ko: "기타", en: "Other" },
  ],
  submit: { ko: "문의 보내기", en: "Send Inquiry" },
  demoNote: {
    ko: "데모 폼입니다 — 실제 전송되지 않습니다.",
    en: "Demo form — submissions are not sent.",
  },
};

/* ──────────────────────────────────────────────
 * 12. NAVIGATION / SEO / FOOTER
 * ────────────────────────────────────────────── */

export const nav = {
  company: { ko: "회사소개", en: "Company" },
  solutions: { ko: "솔루션", en: "Solutions" },
  products: { ko: "제품", en: "Products" },
  projects: { ko: "프로젝트", en: "Projects" },
  capability: { ko: "수행역량", en: "Capability" },
  contact: { ko: "문의", en: "Contact" },
};

export const seo = {
  title: { ko: "이지오 | 산업용 전력·자동화 솔루션", en: "EZIO | Industrial Power Solutions" },
  description: {
    ko: "산업 현장의 안정적인 운영을 위한 전력·자동화·엔지니어링 솔루션",
    en: "Industrial power, automation and engineering solutions for reliable operations.",
  },
};

export const footer = {
  companyLine: {
    ko: "주식회사 이지오 · 대표이사 김광술",
    en: "EZIO · CEO Kim Kwang-sul",
  },
  address: company.address,
  demoNotice: {
    ko: "본 사이트는 디자인 데모입니다. 일부 콘텐츠는 데모용 표기입니다.",
    en: "This site is a design demo. Some content is demo placeholder notation.",
  },
  copyright: {
    ko: "© 2026 EZIO. All rights reserved.",
    en: "© 2026 EZIO. All rights reserved.",
  },
};
