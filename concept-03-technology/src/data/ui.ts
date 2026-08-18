/**
 * CONCEPT 03 — TECHNOLOGY : UI 문자열 (섹션 제목/라벨/데모 시뮬레이션 값)
 * ------------------------------------------------------------------
 * `content.ts`(공유 콘텐츠 원본)는 절대 수정하지 않고 VERBATIM으로 유지한다.
 * 이 파일은 콘셉트 전용 UI 라벨만 담으며, 컴포넌트 내 하드코딩을 방지한다.
 *
 * ⚠️ 회사 사실(fact)로 읽힐 수 있는 수치는 여기에 넣지 않는다.
 *    monitoringDemo의 값은 전부 "DEMO 시뮬레이션 값"이며 화면에 DEMO로 명시한다.
 */

import type { I18n } from "./content";

export const ui = {
  sections: {
    intro: { index: "01", eyebrow: "INTRO" },
    solutions: {
      index: "02",
      eyebrow: "SOLUTIONS",
      title: { ko: "5개 핵심 솔루션 영역", en: "Five Core Solution Areas" } as I18n,
      desc: {
        ko: "배전 인프라에서 감시·자동화까지 — 각 영역은 하나의 데이터 흐름으로 연결됩니다.",
        en: "From distribution infrastructure to monitoring and automation — each area connects into a single data flow.",
      } as I18n,
    },
    products: {
      index: "03",
      eyebrow: "PRODUCT AREA",
      title: { ko: "제품 영역", en: "Product Areas" } as I18n,
      desc: {
        ko: "현장 조건에 맞춰 구성하는 전력·자동화 제품 카테고리입니다.",
        en: "Power & automation product categories configured to site conditions.",
      } as I18n,
      demoNote: {
        ko: "제품 목록은 데모 표기이며, 실제 취급 범위 확정 후 갱신됩니다.",
        en: "Product listings are demo notation and will be updated once the actual portfolio is confirmed.",
      } as I18n,
    },
    industries: {
      index: "04",
      eyebrow: "INDUSTRIES",
      title: { ko: "적용 산업 분야", en: "Industries We Serve" } as I18n,
      desc: {
        ko: "전력 신뢰성이 곧 생산 연속성인 산업 환경을 대상으로 합니다.",
        en: "Built for environments where power reliability equals production continuity.",
      } as I18n,
    },
    capability: {
      index: "05",
      eyebrow: "CAPABILITY",
      title: { ko: "프로젝트 수행 파이프라인", en: "Project Delivery Pipeline" } as I18n,
      desc: {
        ko: "요구사항 파악에서 운영 지원까지 8단계로 진행합니다.",
        en: "Eight stages, from requirement analysis through operational support.",
      } as I18n,
      capabilityTitle: { ko: "기술 역량", en: "Technical Capability" } as I18n,
      capabilityDesc: {
        ko: "전력설비 통합부터 통신·HMI·데이터·알람·엔지니어링까지 담당 영역입니다.",
        en: "Coverage across equipment integration, communication, HMI, data, alarm and engineering.",
      } as I18n,
    },
    monitoring: {
      index: "06",
      eyebrow: "MONITORING",
      title: { ko: "전력 감시 대시보드", en: "Power Monitoring Dashboard" } as I18n,
      desc: {
        ko: "전압·전류·역률 계측값, 트렌드, 알람을 하나의 화면에서 확인하는 감시 환경을 구성합니다.",
        en: "Voltage, current and power-factor readings, trends and alarms brought into one monitoring view.",
      } as I18n,
      demoNotice: {
        ko: "아래 화면의 모든 수치·알람은 UI 시연을 위한 데모 시뮬레이션 값입니다. 실제 계측 데이터가 아닙니다.",
        en: "All values and alarms below are demo simulation figures for UI illustration only — not actual measurement data.",
      } as I18n,
      panels: {
        gauges: { ko: "실시간 계측", en: "Live Measurement" } as I18n,
        trend: { ko: "부하 트렌드", en: "Load Trend" } as I18n,
        alarms: { ko: "알람 / 이벤트", en: "Alarm / Event" } as I18n,
        feeders: { ko: "피더 상태", en: "Feeder Status" } as I18n,
      },
    },
    projects: {
      index: "07",
      eyebrow: "FEATURED PROJECT",
      title: { ko: "주요 수행 프로젝트", en: "Featured Project" } as I18n,
      labels: {
        customer: { ko: "고객", en: "Customer" } as I18n,
        industry: { ko: "산업", en: "Industry" } as I18n,
        location: { ko: "위치", en: "Location" } as I18n,
        scope: { ko: "수행 범위", en: "Scope" } as I18n,
        summary: { ko: "개요", en: "Summary" } as I18n,
      },
    },
    powerFlow: {
      index: "08",
      eyebrow: "POWER FLOW",
      title: { ko: "전력 인프라 단선 흐름", en: "Power Infrastructure Flow" } as I18n,
      desc: {
        ko: "전원에서 대시보드까지, 전력과 데이터가 이동하는 경로입니다. 노드를 선택하면 설명이 표시됩니다.",
        en: "The path power and data travel, from source to dashboard. Select a node to see its description.",
      } as I18n,
      hint: {
        ko: "노드에 마우스를 올리거나 선택하세요",
        en: "Hover or select a node",
      } as I18n,
      groups: {
        source: { ko: "수전", en: "Source" } as I18n,
        distribution: { ko: "배전", en: "Distribution" } as I18n,
        measurement: { ko: "계측", en: "Measurement" } as I18n,
        network: { ko: "네트워크", en: "Network" } as I18n,
        monitoring: { ko: "감시", en: "Monitoring" } as I18n,
      },
      nodeDesc: {
        source: {
          ko: "사업장으로 공급되는 수전 전원 계통입니다.",
          en: "Incoming utility supply feeding the facility.",
        } as I18n,
        "hv-mv": {
          ko: "고압·특고압 계통 구간으로, 수전 설비와 연결됩니다.",
          en: "High / medium voltage section connected to the receiving equipment.",
        } as I18n,
        "mv-swgr": {
          ko: "고압 배전반 — 계통 분기와 차단·보호를 담당합니다.",
          en: "MV switchgear — feeder branching, switching and protection.",
        } as I18n,
        transformer: {
          ko: "변압기 — 부하 계통에 맞는 전압으로 변환합니다.",
          en: "Transformer — steps voltage to the level the load system requires.",
        } as I18n,
        "lv-swgr": {
          ko: "저압 배전반 및 MCC — 부하 단위 배전과 전동기 제어를 담당합니다.",
          en: "LV switchgear and MCC — load-level distribution and motor control.",
        } as I18n,
        meter: {
          ko: "디지털 미터·보호계전기·IED가 전기량과 상태 데이터를 취득합니다.",
          en: "Digital meters, protection relays and IEDs acquire electrical and status data.",
        } as I18n,
        network: {
          ko: "RS422/RS485 및 이더넷 기반 산업용 통신망으로 기기를 연결합니다.",
          en: "Industrial network — RS422/RS485 and Ethernet links between field devices.",
        } as I18n,
        gateway: {
          ko: "게이트웨이가 현장 프로토콜을 감시 시스템 규격으로 변환합니다.",
          en: "The gateway converts field protocols into the monitoring system's format.",
        } as I18n,
        scada: {
          ko: "SCADA·HMI에서 전력 계통을 시각화하고 감시 포인트를 운영합니다.",
          en: "SCADA / HMI visualises the power system and operates monitoring points.",
        } as I18n,
        monitoring: {
          ko: "전압·전류·전력·역률·에너지를 상시 감시합니다.",
          en: "Continuous monitoring of voltage, current, power, power factor and energy.",
        } as I18n,
        dashboard: {
          ko: "대시보드·알람·트렌드로 운영자에게 상태를 전달합니다.",
          en: "Dashboards, alarms and trends deliver system status to operators.",
        } as I18n,
      } as Record<string, I18n>,
    },
    company: {
      index: "09",
      eyebrow: "COMPANY",
      title: { ko: "회사 소개", en: "Company" } as I18n,
      factsTitle: { ko: "회사 개요", en: "Company Facts" } as I18n,
      historyTitle: { ko: "연혁", en: "History" } as I18n,
      messageTitle: { ko: "대표 메시지", en: "Message" } as I18n,
      ceoLabel: { ko: "대표이사", en: "CEO" } as I18n,
      placeholderNote: {
        ko: "데모 표기 — 실제 자료 수령 후 갱신됩니다",
        en: "Demo copy — pending official material",
      } as I18n,
    },
    contact: {
      index: "10",
      eyebrow: "CONTACT",
      successTitle: { ko: "문의가 접수되었습니다", en: "Inquiry received" } as I18n,
      successBody: {
        ko: "데모 화면입니다. 실제로 전송되지는 않았습니다.",
        en: "This is a demo screen — nothing was actually sent.",
      } as I18n,
      reset: { ko: "다시 작성", en: "Write another" } as I18n,
      selectPlaceholder: { ko: "선택하세요", en: "Select" } as I18n,
      required: { ko: "필수", en: "Required" } as I18n,
    },
  },

  common: {
    scroll: { ko: "스크롤", en: "Scroll" } as I18n,
    viewMore: { ko: "자세히 보기", en: "View more" } as I18n,
  },

  /**
   * 모니터링 대시보드 데모 시뮬레이션 값.
   * ⚠️ 회사 실적·실제 계측값이 아니며, 화면에 DEMO 라벨과 함께 표시한다.
   */
  monitoringDemo: {
    gauges: [
      {
        id: "voltage",
        label: { ko: "전압", en: "Voltage" } as I18n,
        tag: "V L-L",
        value: 22.7,
        unit: "kV",
        min: 0,
        max: 30,
        nominal: { ko: "정격 22.9kV", en: "Nominal 22.9kV" } as I18n,
      },
      {
        id: "current",
        label: { ko: "전류", en: "Current" } as I18n,
        tag: "I AVG",
        value: 418,
        unit: "A",
        min: 0,
        max: 800,
        nominal: { ko: "정격 800A", en: "Rated 800A" } as I18n,
      },
      {
        id: "pf",
        label: { ko: "역률", en: "Power Factor" } as I18n,
        tag: "PF",
        value: 0.96,
        unit: "",
        min: 0,
        max: 1,
        nominal: { ko: "목표 0.95 이상", en: "Target ≥ 0.95" } as I18n,
      },
    ],
    feeders: [
      { tag: "FDR-01", label: { ko: "정제 A동", en: "Process A" } as I18n, state: "run" },
      { tag: "FDR-02", label: { ko: "유틸리티", en: "Utility" } as I18n, state: "run" },
      { tag: "FDR-03", label: { ko: "냉각 계통", en: "Cooling" } as I18n, state: "warn" },
      { tag: "FDR-04", label: { ko: "예비", en: "Standby" } as I18n, state: "idle" },
    ] as { tag: string; label: I18n; state: "run" | "warn" | "idle" }[],
    alarms: [
      {
        time: "09:41:07",
        tag: "FDR-03",
        level: "warn",
        text: { ko: "역률 하한 근접", en: "Power factor near lower limit" } as I18n,
      },
      {
        time: "09:28:52",
        tag: "TR-01",
        level: "info",
        text: { ko: "변압기 부하율 상승", en: "Transformer loading increased" } as I18n,
      },
      {
        time: "08:55:19",
        tag: "GW-01",
        level: "ok",
        text: { ko: "게이트웨이 통신 정상 복구", en: "Gateway communication restored" } as I18n,
      },
      {
        time: "08:12:03",
        tag: "SWGR-A",
        level: "info",
        text: { ko: "일일 계측 리포트 생성", en: "Daily measurement report generated" } as I18n,
      },
    ] as { time: string; tag: string; level: "warn" | "info" | "ok"; text: I18n }[],
    // 24 point normalised load trend (0–1) — demo waveform
    trend: [
      0.32, 0.3, 0.28, 0.27, 0.29, 0.34, 0.45, 0.58, 0.66, 0.71, 0.74, 0.72,
      0.68, 0.7, 0.75, 0.79, 0.82, 0.78, 0.7, 0.62, 0.55, 0.47, 0.41, 0.36,
    ],
    trendUnit: { ko: "부하율 (%)", en: "Load (%)" } as I18n,
    window: { ko: "최근 24시간", en: "Last 24 hours" } as I18n,
  },
};
