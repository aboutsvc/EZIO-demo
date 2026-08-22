# EGO Corporate Website — 6 Design Concepts

EGO(Energe Goes On)의 새로운 기업 웹사이트를 위한 **서로 다른 6개의 디자인 콘셉트 데모**입니다.

- **Concept 02 · 06 (최종 후보)**: 확정 콘텐츠 명세서(`docs/EGO_website_content_specification.md`)의 메뉴 구조·페이지 문안을 반영한 **멀티페이지** 버전 — 02는 모던 스타일, 06은 전통 한국 기업 홈페이지 스타일
- **Concept 01 · 03 · 04 · 05**: 초기 디자인 탐색 단계의 데모 (구 EZIO 콘텐츠 유지)

> **Positioning (확정)**: EGO는 LS ELECTRIC 제품의 상담·견적·판매부터 발주·납품 관리, 현장 요청 대응과 제조사 연계 A/S까지 고객 접점을 담당하는 **산업재 공급·지원 회사**입니다.
>
> 확정 메뉴: 홈 · 회사소개(EGO 소개/비전·경영철학/경영진/사업장) · 사업영역(제품 공급/납품·현장 대응/기술지원·A/S) · 주요 고객·수행실적 · 고객지원(제품·견적 문의/A/S 접수/기술자료/공지) · 채용정보

---

## 프로젝트 구조

```
/
├── concept-01-industrial/        # Heavy Industrial / Plant Engineering (원페이지)
├── concept-02-corporate/         # Trust / Enterprise / Professional (원페이지)
├── concept-03-technology/        # Smart Power / Digital Infrastructure (원페이지)
├── concept-04-minimal/           # Premium Industrial Minimalism (원페이지)
├── concept-05-korean-enterprise/ # 한국 대기업 제품 포털 스타일 (멀티페이지)
├── concept-06-korean-classic/    # 전통 한국 기업 홈페이지 스타일 (멀티페이지)
├── docs/
│   ├── design-spec.md           # Concept 01~04 상세 디자인 명세
│   ├── design-spec-korean.md    # Concept 05~06 상세 디자인 명세
│   ├── research-summary.md      # 레퍼런스 사이트 조사 요약
│   ├── shared-content/          # 공통 콘텐츠 모델 (단일 기준)
│   └── shared-visuals/          # 공유 장면 아트워크 (8종 × 4톤 SVG 일러스트)
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
/                              → 콘셉트 선택 랜딩 페이지
/concept-01-industrial/        → Concept 01
/concept-02-corporate/         → Concept 02
/concept-03-technology/        → Concept 03
/concept-04-minimal/           → Concept 04
/concept-05-korean-enterprise/ → Concept 05
/concept-06-korean-classic/    → Concept 06
```

> 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정하면 활성화됩니다.

### 언어

- **Concept 02 · 06 (최종 후보)**: 확정 콘텐츠 명세서가 한국어 문안만 정의하므로 **한국어 단일** (KO/EN 토글 없음).
- **Concept 01 · 03 · 04 · 05**: 헤더의 KO / EN 토글로 영어 전환 가능 (localStorage 저장).

---

## 콘셉트 비교

### Concept 05 · 06 — 한국 기업 홈페이지 스타일 (멀티페이지)

| | Concept 05 — Korean Enterprise | Concept 06 — Korean Classic |
|---|---|---|
| **테마** | 한국 대기업 전기·전자 제품 포털 (LS ELECTRIC 레이아웃 문법 벤치마크) | 전통적인 한국 중소·중견 기업 홈페이지 |
| **구조** | 멀티페이지 (HashRouter) — 회사소개/제품/솔루션/프로젝트/고객지원 | 멀티페이지 — 회사소개(인사말·개요·연혁·오시는길)/사업분야/제품/실적/고객센터 |
| **헤더** | 유틸바 + GNB **메가메뉴** (전체 폭 드롭다운 패널) | 유틸바 + GNB 단순 드롭다운 |
| **메인** | 풀와이드 비주얼 슬라이더 + 제품 퀵카드 + 솔루션 탭 + 공지·자료실 | 배너 슬라이더 + 회사소개 배너·사업분야 아이콘·공지사항·문의 박스 그리드 + 플로팅 퀵메뉴 |
| **서브페이지** | 서브비주얼 + breadcrumb + 좌측 LNB 카테고리 트리 | 서브비주얼 바 + breadcrumb + 좌측 LNB + `▎` 섹션 타이틀·클래식 테이블 |
| **컬러** | 로열 블루 `#0B4DA2` | 클래식 블루 `#1B5AA6` + 네이비 |
| **추천 용도** | 제품 카탈로그 중심 소통, 대기업 벤더 포털에 익숙한 담당자 대상 | 보수적인 국내 발주처·구매팀에게 가장 익숙한 형태 |

> Concept 05는 LS ELECTRIC의 **레이아웃 구조만** 벤치마크했으며, 로고·이미지·문구·CI 컬러는 사용하지 않았습니다.

### Concept 01~04 — 원페이지 스크롤 (해외 트렌드형)

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
- **전화번호·팩스·이메일 미표기** — 확인된 연락처가 없어 임의 생성하지 않고 온라인 문의 폼으로 유도. 게시판 데모 게시물은 명시적으로 표기.
- 이미지는 저작권 안전한 **자체 제작 장면 아트워크**(`docs/shared-visuals/` — 정유 플랜트 야경·배전반실·관제실·변전 설비·보호계전기·HMI·공장 부감·엔지니어 실루엣 8종 × dark/light/navy/warm 4톤 SVG 일러스트)로 구성 — 실제 현장 사진 수령 시 동일 슬롯에 교체 가능.

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
