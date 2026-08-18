# EZIO Corporate Website — 4 Design Concepts

주식회사 이지오(EZIO)의 새로운 기업 웹사이트를 위한 **서로 다른 4개의 디자인 콘셉트 데모**입니다.

> **Positioning**: 산업 플랜트와 대형 사업장을 대상으로 검증된 전력·자동화 제품과 관련 엔지니어링을 연결하여 공급하는 **B2B Industrial Power Solution Company**
>
> Power Distribution · Protection · Monitoring · Automation · Engineering

4개 콘셉트는 동일한 회사·콘텐츠를 사용하지만 레이아웃, 타이포그래피, 히어로 구성, 섹션 리듬, 비주얼 언어, 인터랙션 방식이 모두 다르게 설계되었습니다.

---

## 프로젝트 구조

```
/
├── concept-01-industrial/   # Heavy Industrial / Plant Engineering
├── concept-02-corporate/    # Trust / Enterprise / Professional
├── concept-03-technology/   # Smart Power / Digital Infrastructure
├── concept-04-minimal/      # Premium Industrial Minimalism
├── docs/
│   ├── design-spec.md       # 4개 콘셉트 상세 디자인 명세
│   ├── research-summary.md  # 레퍼런스 사이트 조사 요약
│   └── shared-content/      # 공통 콘텐츠 모델 (단일 기준)
├── deploy/index.html        # 콘셉트 선택 랜딩 페이지 (GitHub Pages 루트)
└── .github/workflows/deploy.yml  # GitHub Pages 자동 배포
```

## 실행 방법

각 콘셉트는 독립 실행 가능한 Vite + React + TypeScript + Tailwind CSS 프로젝트입니다.

```bash
cd concept-01-industrial   # (또는 02, 03, 04)
yarn install
yarn dev                   # 개발 서버
yarn build                 # 정적 빌드 → dist/
```

- Node.js 18+ / Yarn 필요
- 빌드 결과물은 순수 정적 파일이며 `base: './'` 상대 경로 설정으로 **GitHub Pages 등 어떤 정적 호스팅의 서브 경로에서도 동작**합니다.

### GitHub Pages 배포

`.github/workflows/deploy.yml`이 push 시 4개 콘셉트를 모두 빌드하여 하나의 사이트로 배포합니다.

```
/                        → 콘셉트 선택 랜딩 페이지
/concept-01-industrial/  → Concept 01
/concept-02-corporate/   → Concept 02
/concept-03-technology/  → Concept 03
/concept-04-minimal/     → Concept 04
```

> 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정하면 활성화됩니다.

### 언어

기본 언어는 **한국어**이며, 각 사이트 헤더의 **KO / EN 토글**로 영어 전환이 가능합니다 (선택 언어는 localStorage에 저장).

---

## 4개 콘셉트 비교

| | Concept 01 — Industrial | Concept 02 — Corporate | Concept 03 — Technology | Concept 04 — Minimal |
|---|---|---|---|---|
| **테마** | Heavy Industrial / Plant Engineering | Trust / Enterprise | Smart Power / Digital Infrastructure | Premium Industrial Minimalism |
| **배경** | 다크 차콜 `#0C0E10` | 화이트 / 라이트 그레이 | 딥 네이비 `#0A1220` | 웜 오프화이트 `#FAF8F5` |
| **악센트** | 인더스트리얼 오렌지 | 딥 코퍼레이트 블루 | 일렉트릭 시안 | 딥 그린 (극소량) |
| **서체(EN)** | IBM Plex Sans / Mono | Inter | Manrope + JetBrains Mono | Manrope 초대형 |
| **히어로** | 풀뷰포트 다크 + 대문자 대형 타이포 | 스플릿 레이아웃 + Company Facts 밴드 | 애니메이션 데이터 플로우 | 3줄 초대형 타이포 "POWER FOR INDUSTRY" |
| **비주얼 언어** | 엔지니어링 그리드, 도면 주석, 단선도 | 12컬럼 그리드, 정돈된 카드 | SCADA UI, 노드/네트워크, 대시보드 목업 | 여백과 1px 라인, 에디토리얼 |
| **인터랙션** | 오렌지 라인 hover, 미묘한 fade-up | 보수적 hover 섀도 | 데이터 펄스 애니메이션, 게이지/트렌드 | hover 언더라인만 |

### 추천 용도

- **Concept 01 — Industrial**: 대형 플랜트·EPC 고객에게 "중공업 엔지니어링 회사"의 무게감을 전달하고 싶을 때. 가장 강한 인상.
- **Concept 02 — Corporate**: 대기업 벤더 등록·구매팀 심사 등 보수적인 B2B 심사 환경에 가장 안전한 선택.
- **Concept 03 — Technology**: 전력 감시·SCADA·디지털 전환 역량을 차별점으로 내세우고 싶을 때. 기술 지향 고객에게 효과적.
- **Concept 04 — Minimal**: 브랜드 프리미엄과 디자인 감도를 우선할 때. 유럽 엔지니어링 브랜드 같은 인상.

---

## 콘텐츠 원칙 (정확성 규칙)

확인되지 않은 사실을 만들어내지 않는 것이 이 프로젝트의 최우선 규칙입니다.

- **LS ELECTRIC 파트너 등급 미표기** — "공식 대리점/Authorized Distributor" 등 확정 표현 대신 "LS ELECTRIC Products" 등 안전 표현만 사용. 계약관계 확인 후 문구 교체 가능하도록 콘텐츠 분리.
- **고객명 비공개** — Featured Project는 `publicCustomerName: false` 플래그로 "국내 대형 정유사(Major Korean Refinery)"로 표기. 공개 허가 확인 시 플래그 변경만으로 실명 전환.
- **가짜 수치 없음** — 프로젝트 수, 직원 수, 업력, 인증, 수상 등 미확인 정보 미사용. 재무정보는 기준연도(FY2022) 병기.
- **"EZIO Co., Ltd."는 데모용 표기** — 공식 등록 영문 법인명 확인 전까지 법적 명칭으로 단정하지 않음.
- **쇼핑몰 UI 배제** — 가격/장바구니/구매 버튼 없음. 제품은 카테고리 중심, CTA는 상담·견적 요청.
- 모든 텍스트는 `src/data/content.ts`(공통 콘텐츠 모델 복사본)에서 관리 — 실제 회사 자료 수령 시 데이터 파일만 수정하면 됨.
- 이미지는 저작권 안전한 **자체 제작 SVG 산업 비주얼**(placeholder)로 구성 — 실제 현장 사진 수령 시 컴포넌트 단위 교체.

---

## Research Summary

구현 전 레퍼런스 4개 사이트를 조사했습니다. 상세: [`docs/research-summary.md`](docs/research-summary.md)

- **LS ELECTRIC** — 제품을 "Smart Power Solution"으로 포장하는 IA, 배전 제품의 단선도 순서 분류(MV SWGR → LV SWGR → MCC → Transformer → Busway), SCADA(ECMS/PQMS/SAS)의 시스템 계층 분리 → 제품 분류 체계와 솔루션 프레임에 반영
- **GS Caltex** — 풀블리드 산업 현장 히어로 + 짧은 대형 헤드라인, "지능형 공장/이상징후 감지" 등 DX 어휘 → Concept 01 히어로 구성과 고객 눈높이 카피에 반영
- **Schneider Electric** — 문제 정의 → 가치 명사(Reliability·Safety·Efficiency·Power Quality) → 아키텍처 → 상담 CTA의 솔루션 셀링 서사 → Concept 03의 "기기 → 데이터 → 감시" 스택 서사에 반영
- **Siemens** — 단일 컬러 + 서체 굵기만으로 위계를 만드는 유럽 엔지니어링 타이포그래피, 계통 위치 기준 IA → Concept 04의 절제된 디자인 시스템에 반영

각 콘셉트의 상세 디자인 명세는 [`docs/design-spec.md`](docs/design-spec.md) 참고.

---

*본 저장소의 모든 사이트는 디자인 데모이며, 일부 콘텐츠는 데모용 표기입니다.*
