/**
 * UI CHROME LABELS — CONCEPT 02 (CORPORATE)
 * ==========================================
 * ⚠️ 회사 콘텐츠(사실·수치·문구)는 전부 `content.ts`에서 가져온다.
 * 이 파일은 오직 "인터페이스 껍데기" 라벨(섹션 eyebrow, 다이어그램 그룹명,
 * 버튼/접근성 문구)만 담는다. 회사 정보·실적·주장 문구를 여기에 추가하지 말 것.
 */

import type { I18n } from "./content";

export const ui = {
  /* Header / navigation */
  skipToContent: { ko: "본문으로 건너뛰기", en: "Skip to content" },
  openMenu: { ko: "메뉴 열기", en: "Open menu" },
  closeMenu: { ko: "메뉴 닫기", en: "Close menu" },
  languageLabel: { ko: "언어 선택", en: "Select language" },
  headerCta: { ko: "프로젝트 문의", en: "Contact Us" },

  /* Hero */
  heroEyebrow: { ko: "산업용 전력 솔루션", en: "Industrial Power Solutions" },
  heroPrimaryCta: { ko: "프로젝트 문의", en: "Start a Project" },
  companyFactsLabel: { ko: "회사 개요", en: "Company at a glance" },

  /* Section eyebrows / headings */
  introEyebrow: { ko: "회사 소개", en: "Introduction" },
  solutionsEyebrow: { ko: "사업영역", en: "Solutions" },
  solutionsHeading: { ko: "5개 핵심 솔루션 영역", en: "Five core solution areas" },
  solutionsLead: {
    ko: "배전 인프라부터 보호·계측, 감시·제어, 자동화, 엔지니어링까지 산업 현장이 필요로 하는 전력 기술을 하나의 공급 체계로 연결합니다.",
    en: "From distribution infrastructure to protection, monitoring, automation and engineering — connected into a single supply framework.",
  },

  productsEyebrow: { ko: "제품 카테고리", en: "Product Categories" },
  productsHeading: { ko: "취급 제품 카테고리", en: "Product categories we handle" },
  productsLead: {
    ko: "카테고리 단위로 제품 구성을 안내합니다. 상세 사양과 현장 적용 구성은 문의 시 안내해 드립니다.",
    en: "Product scope is presented by category. Detailed specifications and site configurations are provided on request.",
  },
  productsDemoNote: {
    ko: "표기된 제품 구성은 데모 콘텐츠입니다. 실제 취급 범위는 확정 후 갱신됩니다.",
    en: "The listed product scope is demo content and will be updated once the actual range is confirmed.",
  },

  lsEyebrow: { ko: "제품 기반", en: "Product Basis" },

  industriesEyebrow: { ko: "적용 산업", en: "Industries" },
  industriesHeading: { ko: "산업별 적용 분야", en: "Where our solutions are applied" },
  industriesLead: {
    ko: "플랜트와 대형 사업장을 중심으로 전력 인프라와 감시 시스템을 공급합니다.",
    en: "We supply power infrastructure and monitoring systems for plants and large-scale facilities.",
  },

  capabilityEyebrow: { ko: "수행 역량", en: "Capability" },
  capabilityHeading: { ko: "프로젝트 수행 프로세스", en: "Project delivery process" },
  capabilityLead: {
    ko: "요구사항 파악에서 시운전과 기술 지원까지, 8단계로 정의된 절차에 따라 프로젝트를 진행합니다.",
    en: "From requirement analysis to commissioning and support — delivered through a defined eight-step process.",
  },
  technicalScopeHeading: { ko: "기술 역량 영역", en: "Technical capability areas" },
  technicalScopeLead: {
    ko: "전력설비 통합, 통신, HMI·감시, 데이터, 알람, 엔지니어링 영역에 걸친 수행 범위입니다.",
    en: "Delivery scope across equipment integration, communication, HMI, data, alarm and engineering.",
  },

  projectEyebrow: { ko: "프로젝트 사례", en: "Featured Project" },
  projectHeading: { ko: "대표 수행 사례", en: "Representative project" },
  projectLead: {
    ko: "국내 대형 정유 시설의 전력 감시 시스템 고도화 프로젝트입니다.",
    en: "A power monitoring system enhancement project at a major Korean refinery.",
  },
  projectMetaCustomer: { ko: "고객사", en: "Client" },
  projectMetaIndustry: { ko: "산업", en: "Industry" },
  projectMetaLocation: { ko: "위치", en: "Location" },
  projectMetaScopeCount: { ko: "수행 범위", en: "Scope items" },
  projectScopeHeading: { ko: "프로젝트 범위", en: "Project scope" },
  projectScopeUnit: { ko: "개 항목", en: "items" },

  flowEyebrow: { ko: "전력 인프라", en: "Power Infrastructure" },
  flowHeading: { ko: "전력 흐름과 감시 체계", en: "Power flow and monitoring chain" },
  flowLead: {
    ko: "수전에서 배전, 계측, 네트워크를 거쳐 감시 시스템까지 이어지는 전력 인프라 흐름입니다.",
    en: "The infrastructure chain from incoming power through distribution, measurement and network to monitoring.",
  },

  companyEyebrow: { ko: "회사 정보", en: "Company Profile" },
  companyHeading: { ko: "주식회사 이지오", en: "EZIO" },
  companyLead: {
    ko: "설립 정보와 사업 현황, 대표 메시지를 정리했습니다. 확정되지 않은 항목은 별도로 표기합니다.",
    en: "Company registration details, business status and a message from the CEO. Items pending confirmation are marked separately.",
  },
  companyOverviewLabel: { ko: "일반 현황", en: "Overview" },
  companyHistoryLabel: { ko: "연혁", en: "History" },
  companyMessageLabel: { ko: "대표 메시지", en: "Message" },
  companyCeoLabel: { ko: "대표이사", en: "CEO" },
  companyAddressLabel: { ko: "주소", en: "Address" },
  companyNameLabel: { ko: "상호", en: "Company Name" },
  companyFoundedLabel: { ko: "설립일", en: "Founded" },
  placeholderTag: { ko: "확정 전 표기", en: "Pending confirmation" },

  contactEyebrow: { ko: "문의", en: "Contact" },
  contactInfoHeading: { ko: "문의 안내", en: "Inquiry information" },
  contactSelectPlaceholder: { ko: "선택해 주세요", en: "Please select" },
  contactRequired: { ko: "필수", en: "Required" },
  contactSuccessTitle: { ko: "문의가 접수되었습니다", en: "Your inquiry has been received" },
  contactSuccessBody: {
    ko: "데모 화면입니다. 입력하신 내용은 저장되거나 전송되지 않습니다.",
    en: "This is a demo screen. Your input is neither stored nor transmitted.",
  },
  contactReset: { ko: "다시 작성하기", en: "Write another inquiry" },

  /* Power flow group labels — powerFlow 데이터의 group 키에 대한 표시 라벨 */
  flowGroups: {
    source: { ko: "수전", en: "Incoming" },
    distribution: { ko: "배전", en: "Distribution" },
    measurement: { ko: "계측", en: "Measurement" },
    network: { ko: "네트워크", en: "Network" },
    monitoring: { ko: "감시", en: "Monitoring" },
  } as Record<string, I18n>,
} satisfies Record<string, unknown>;
