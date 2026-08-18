# EZIO Corporate Website — Design Specification (4 Concepts)

> 작성: 설계 담당 (Fable) · 구현: Opus 에이전트
> 이 문서는 4개 콘셉트 구현의 단일 기준이다. 콘텐츠는 반드시 `docs/shared-content/content.ts`를 복사해 사용한다.

---

## A. 공통 기술 요구사항 (모든 콘셉트 동일)

### 스택
- **Vite + React 18 + TypeScript + Tailwind CSS v4** (`@tailwindcss/vite` 플러그인 방식)
- Package manager: **yarn**
- 라우터 사용 금지 — **single-page + 앵커 스크롤** (GitHub Pages 정적 배포 호환)
- `vite.config.ts`에 반드시 `base: './'` 설정 (서브패스 배포 호환)
- 무거운 애니메이션 라이브러리 금지. Concept 03만 필요시 CSS/SVG 애니메이션 우선 (framer-motion은 선택, 남용 금지)

### 스캐폴드 (각 콘셉트 폴더에서)
```bash
# package.json 직접 작성 후 yarn install (create-vite 인터랙티브 프롬프트 회피)
# deps: react, react-dom
# devDeps: typescript, vite, @vitejs/plugin-react, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom
```
- `src/index.css`에 `@import "tailwindcss";` + `@theme { ... }` 토큰 정의
- `yarn build`가 오류 없이 통과해야 함 (tsc 포함)

### 언어 (i18n)
- 기본 언어: **한국어(ko)**. 헤더에 **KO / EN 토글 버튼** (그 외 언어 UI 없음)
- `LanguageContext` (React context) + `t(i18nObj)` helper: `t({ko, en})` → 현재 언어 문자열
- `localStorage`에 선택 언어 저장, `<html lang>` 갱신
- 콘텐츠는 전부 `src/data/content.ts` (공유 콘텐츠 복사본)에서 가져옴 — 컴포넌트 내 하드코딩 금지

### 폰트 (index.html에서 CDN link + 반드시 fallback stack)
- Korean: **Pretendard** (`https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css`)
- English: 콘셉트별 지정 (Google Fonts). 로드 실패 시에도 시스템 폰트로 자연스럽게 표시되도록 fallback 필수

### 공통 컴포넌트 규칙
- `Logo.tsx`: 텍스트 워드마크 "EZIO" + 코드 주석에 `// Demo Wordmark — 공식 CI 수령 시 교체` 명시. 복잡한 심볼 제작 금지 (단순 기하학적 악센트 정도는 허용)
- `IndustrialVisual.tsx` (또는 유사): 사진 placeholder 컴포넌트. **외부 이미지/스톡포토 URL 사용 금지** — 순수 SVG/CSS/그라디언트로 만든 추상적 산업 비주얼(배전반 패널, 정유 플랜트 실루엣, 블루프린트 그리드, 파이프/철골 구조, HMI 화면 등)로 구현. `variant` prop으로 종류 선택. 주석으로 "실제 현장 사진으로 교체 예정" 명시
- Contact form: 데모 UI만 (submit 시 성공 메시지 표시, 전송 없음). 필드: 회사명/성함/이메일/연락처/프로젝트 유형(select)/문의 내용
- Footer: 회사 정보 + 데모 고지 (`footer.demoNotice`)

### 반응형
- Desktop 1440px 기준 완성도 최우선 → Tablet(768~1024) → Mobile(375~)
- 모바일 햄버거 메뉴 동작 필수
- 가로 스크롤 없어야 함

### 콘텐츠 정확성 (절대 규칙 — 위반 시 재작업)
- 금지 문구: "Authorized Distributor", "Official Partner", "공식 대리점", "공식 특약점", "Authorized Partner"
- "GS칼텍스"/"GS Caltex" 화면 노출 금지 (`projectCustomerName()` helper만 사용)
- 가짜 숫자 금지: "100+ Projects", "20+ Years" 등 확인 안 된 수치·고객 수·직원 수·인증·수상 일절 금지
- 재무 수치는 기준연도 병기 (content.ts의 facts 그대로 사용)
- 가격/장바구니/구매 버튼 금지 (쇼핑몰 UI 금지)
- 가짜 testimonial/파트너 로고/인증서 금지

### 홈페이지 섹션 플로우 (순서는 콘셉트별 변형 가능, 모두 포함)
1. HERO (브랜드 메시지) 2. INTRO 3. SOLUTIONS(5) 4. LS ELECTRIC PRODUCT AREA
5. INDUSTRIES(4) 6. CAPABILITY (8단계 프로세스 + 기술역량) 7. FEATURED PROJECT
8. POWER FLOW 다이어그램 9. COMPANY 10. CONTACT CTA
- Products는 Solutions 안에 카테고리로 통합하거나 별도 섹션으로 — 콘셉트별 재량

### Power Flow 다이어그램
- `powerFlow` 데이터 기반, 콘셉트 디자인 언어에 맞는 **HTML/CSS/SVG 커스텀 컴포넌트** (Mermaid 금지)
- Desktop: 수직 또는 수평 흐름 자유 / Mobile: 수직 스택

### 8단계 프로세스
- Desktop: horizontal flow / Mobile: vertical timeline

---

## B. CONCEPT 01 — INDUSTRIAL (`concept-01-industrial/`)

**Theme**: Heavy Industrial / Plant Engineering. 참고 무드: GS칼텍스 산업 스케일 + Siemens 엔지니어링.

### 팔레트
- 배경: `#0C0E10` (거의 검정 차콜) / 섹션 교차: `#14171A`, `#1A1E22`
- 텍스트: `#E8EAED` / 보조: `#8B9198`
- 악센트: **인더스트리얼 오렌지 `#F26B1D`** (안전색 계열, 절제해서 사용 — 라벨/라인/CTA만)
- 라인: `#2A2F34` 1px 엔지니어링 라인

### 타이포
- EN: **IBM Plex Sans** + 숫자·라벨에 **IBM Plex Mono**
- Hero headline: Desktop 기준 `clamp(3.5rem, 7vw, 6.5rem)`, 대문자, letter-spacing 타이트, font-weight 700
- 섹션 번호를 mono 폰트로 크게 (`01 / SOLUTIONS` 식의 numeric label 시스템)

### 레이아웃 언어
- 풀블리드 다크 섹션 + 얇은 엔지니어링 그리드 오버레이(1px 라인, 낮은 투명도)
- 블루프린트식 주석: 코너 마커(＋), 치수선, mono 캡션 (`DWG NO. EZ-2026-01` 같은 도면 라벨 장식 — 단 가짜 인증처럼 보이는 표기 금지)
- 섹션 구분: 두꺼운 상단 보더 + 좌측 번호
- 카드 최소화 — 대신 풀폭 리스트 로우(hover 시 배경 밝아지고 오렌지 인디케이터)

### Hero
- 풀 뷰포트. SVG로 그린 정유 플랜트/배전반 실루엣 + 다크 그라디언트 배경
- Headline: **"Connecting Power & Industry"** (brandMessages.industrial)
- 하단에 mono 라벨 스트립: `POWER DISTRIBUTION / PROTECTION / MONITORING / AUTOMATION / ENGINEERING`
- 스크롤 인디케이터 (얇은 라인 + mono 텍스트)

### 섹션 처리
- Solutions: 5개 풀폭 로우 (번호 + 제목 + 설명 + 아이템 태그), hover 확장 느낌
- Power Flow: **세로형 single-line diagram** (전기 단선도 감성 — 얇은 라인, 노드 사각형, mono 라벨)
- Process: 수평 8스텝, 스텝 간 라인 연결, 번호 mono
- Featured Project: 다크 카드 아님 — 도면 스타일 스펙 시트 레이아웃 (라벨: 컬럼 / 값: 컬럼)
- 인터랙션: hover 시 오렌지 라인 슬라이드, 섹션 진입 시 미묘한 fade-up (CSS 기반)

---

## C. CONCEPT 02 — CORPORATE (`concept-02-corporate/`)

**Theme**: Trust / Enterprise / Professional. 참고 무드: LS ELECTRIC 조직화 + GS칼텍스 기업 신뢰. "대기업 벤더 등록 자료를 웹사이트로" 느낌.

### 팔레트
- 배경: `#FFFFFF` / 섹션 교차: `#F5F7F9` (뉴트럴 그레이)
- 텍스트: `#111827` / 보조: `#5B6472`
- 악센트: **딥 코퍼레이트 블루 `#0A3D91`** (절제) + 네이비 `#0E1B33` (푸터/다크 밴드)
- 라인: `#E2E6EB`

### 타이포
- EN: **Inter**
- Hero headline: `clamp(2.75rem, 5vw, 4.5rem)`, font-weight 700, 문장형(대문자 아님)
- 명확한 위계: eyebrow(작은 대문자 블루) → headline → body

### 레이아웃 언어
- 정돈된 12컬럼 그리드, 넉넉한 화이트스페이스
- 섹션 헤더 패턴 통일: 좌측 eyebrow + headline, 우측 설명
- 카드 사용 가능하되 **사각(라운드 최소, 2~4px)** + 1px 보더 + 미묘한 hover 섀도
- 상단 얇은 유틸리티 바(언어 토글 위치) + 메인 내비

### Hero
- 좌 텍스트 / 우 산업 비주얼(SVG 배전반·플랜트 일러스트, 밝은 톤) 스플릿 레이아웃
- Headline: **"Reliable Power for Industry"**
- CTA 2개: "프로젝트 문의" (블루 솔리드) / "솔루션 보기" (아웃라인)
- Hero 하단 밴드: Company Facts 4개 (설립/소재지/사업영역/FY2022 매출 — 기준연도 필수)

### 섹션 처리
- Solutions: 2×3 또는 그리드 카드 (아이콘 대신 번호/심플 라인 아이콘)
- LS ELECTRIC 영역: 밝은 그레이 밴드 + 카테고리 태그 그리드
- Power Flow: **수평 단계형 다이어그램** (박스 + 화살표, 그룹별 옅은 배경 밴드: 배전/계측/네트워크/감시)
- Process: 번호 원형 스텝퍼 수평
- Featured Project: 케이스 스터디 카드 — 좌 메타정보(산업/위치/범위) 우 스코프 리스트
- 인터랙션: 보수적 — hover 섀도/보더 강조, 부드러운 앵커 스크롤

---

## D. CONCEPT 03 — TECHNOLOGY (`concept-03-technology/`)

**Theme**: Smart Power / Digital Infrastructure. 참고 무드: LS Smart Power + Schneider power management. SCADA/단선도에서 영감. **사이버펑크 금지** — Industrial Enterprise Technology 톤 유지.

### 팔레트
- 배경: **딥 네이비 `#0A1220`** / 섹션 교차: `#0E1830`, `#111C33`
- 텍스트: `#DCE4F2` / 보조: `#7C8CA8`
- 악센트: **일렉트릭 시안 `#2DD4BF` 또는 `#38BDF8`** (데이터/활성 상태) + 앰버 `#F59E0B` (알람 표시용 극소량)
- 글로우는 극도로 절제 (box-shadow blur 소량만)

### 타이포
- EN: **Manrope** (헤드라인) + **JetBrains Mono 또는 IBM Plex Mono** (데이터 수치/라벨)
- Hero headline: `clamp(3rem, 6vw, 5.5rem)`, font-weight 600~700

### 레이아웃 언어
- 노드/네트워크 시각 언어: 얇은 연결선, 노드 점, 데이터 패킷 이동
- SCADA 감성 UI 요소: 상태 LED 점(초록/시안), mono 수치 카운터, 패널 프레임
- 섹션 배경에 미묘한 도트 그리드

### Hero — 핵심 차별 요소
- Headline: **"Reliable Power. Smarter Industry."**
- Hero 배경 또는 우측에 **애니메이션 데이터 플로우 SVG**:
  `SWGR → IED → Gateway → SCADA → Dashboard` 노드 체인을 따라 데이터 패킷(작은 점)이 이동하는 애니메이션 (SVG `<circle>` + CSS `offset-path` 또는 `stroke-dashoffset` 애니메이션)
- 애니메이션은 subtle: 느린 속도, 낮은 투명도, `prefers-reduced-motion` 존중

### 섹션 처리
- Power Flow: **인터랙티브 단선도 스타일** — 세로 흐름 + 각 노드 hover 시 설명, 흐름선에 상시 데이터 펄스 애니메이션 (이 콘셉트의 시그니처 섹션)
- Monitoring 섹션: **미니 대시보드 목업** (SVG/CSS로 만든 전압·전류·역률 게이지 + 트렌드 라인 차트 + 알람 리스트 — 수치는 명백한 데모 시뮬레이션 수치, 라벨에 "DEMO" 표기)
- Solutions: 노드 카드 — 연결선으로 이어진 배치
- Process: 수평 파이프라인 (진행 라인에 펄스)
- Featured Project: 모니터링 화면 프레임 안에 케이스 내용 배치
- 인터랙션: 데이터 플로우 애니메이션, 게이지/트렌드 애니메이션, 노드 hover 하이라이트

---

## E. CONCEPT 04 — MINIMAL (`concept-04-minimal/`)

**Theme**: Premium Industrial Minimalism. 참고 무드: 유럽 엔지니어링/건축/프리미엄 B2B. 설명을 줄이고 브랜드 인식 극대화.

### 팔레트
- 배경: **웜 오프화이트 `#FAF8F5`** / 교차: `#F1EEE9`
- 텍스트: **`#141414`** (거의 검정) / 보조: `#6E6A64`
- 악센트: 단 하나 — **딥 그린 `#1A3C34` 또는 시그널 레드 `#C8371E`** 중 택1, 극도로 절제 (링크 언더라인, 소형 마커만)
- 다크 섹션 1~2개만 (`#141414` 배경 반전)

### 타이포 — 이 콘셉트의 전부
- EN: **Manrope 또는 Geist** — 초대형 사용
- Hero: `clamp(5rem, 13vw, 12rem)`, font-weight 800, line-height 0.95, 3줄 스택
- 본문은 작고 절제 (`0.9375rem`), 라벨은 소형 대문자 letter-spacing 넓게
- 한국어 본문은 Pretendard로 우아하게

### 레이아웃 언어
- 에디토리얼 그리드: 비대칭 여백, 콘텐츠 폭 제한
- 카드 없음. 섹션은 얇은 1px 라인(`#D9D4CC`)과 여백으로만 구분
- 이미지/비주얼 최소 — 사용 시 흑백 톤 SVG 비주얼 1~2개만
- 내비게이션 최소: 로고 + 3~4개 링크 + 언어 토글

### Hero
```
POWER
FOR
INDUSTRY
```
- 초대형 3줄 타이포 (뷰포트 대부분 차지)
- 하단 작은 리스트: Power Distribution / Monitoring / Automation / Engineering
- 우측 하단에 작게: 산업을 움직이는 안정적인 전력 솔루션

### 섹션 처리
- Intro: 큰 인용문형 텍스트 블록 (`positioning.definition`)
- Solutions: **인덱스 리스트** — `01 전력 배전` 식의 대형 텍스트 로우, hover 시 우측에 아이템 태그 표시
- Industries: 4개 단어 대형 나열
- Power Flow: 극단순 세로 텍스트 체인 (라벨 + 얇은 수직 라인) — 다이어그램조차 타이포그래피로
- Process: 번호 리스트 세로 (Desktop 2컬럼 가능)
- Featured Project: 에디토리얼 아티클 레이아웃 (제목 크게, 메타 작게)
- 다크 반전 섹션: LS ELECTRIC 영역 또는 Contact
- 인터랙션: hover 언더라인 슬라이드, 미묘한 텍스트 fade — 그 외 애니메이션 없음

---

## F. 산출물 체크 (콘셉트별)
1. `yarn build` 통과 (tsc + vite)
2. 금지 문구 grep 클린
3. 필수 요소 존재: EZIO / Industrial Power positioning / 5 Solutions / LS ELECTRIC context / 4 Industries / 8단계 Process / Featured refinery project / Power Flow / Contact CTA / KO·EN 토글
4. Desktop 1440 / Tablet / Mobile 레이아웃 정상 + 모바일 메뉴 동작
5. 4개 콘셉트가 레이아웃·타이포·비주얼 언어 차원에서 확실히 다를 것
