# EZIO Shared Scene Artwork

산업 현장 일러스트레이션 8종. 6개 콘셉트 사이트에서 공용으로 쓰는 **순수 React + inline SVG** 컴포넌트다.
외부 이미지·스톡포토·추가 의존성 없음 (`react`만 필요).

> 각 파일 최상단 주석: `// EZIO shared scene artwork — 실제 현장 사진 수령 시 교체 가능한 일러스트레이션`
> 실제 현장 사진을 수령하면 동일한 자리에 `<img>`/`<picture>`로 교체하면 된다. 그때까지의 대체재이면서,
> 사진과 섞어 쓰기에도 무리 없는 완성도를 목표로 했다.

---

## 1. 파일

```
docs/shared-visuals/
├── index.ts                      # 전체 re-export + SceneTone / SceneProps 타입
├── README.md
└── scenes/
    ├── RefineryDusk.tsx          # 정유 플랜트 황혼 실루엣          1200×800
    ├── SwitchgearRoom.tsx        # MV/LV 배전반실 (1점 투시 복도)    1200×800
    ├── ControlRoom.tsx           # 중앙 관제실 (곡면 비디오월)       1200×800
    ├── SubstationYard.tsx        # 옥외 변전 설비 (변압기·가대)      1200×800
    ├── RelayPanel.tsx            # 보호계전기 패널 클로즈업          1200×900
    ├── HmiScreen.tsx             # HMI 모니터 + 전력감시 UI          1200×900
    ├── PlantAerial.tsx           # 산업단지 부감(aerial)            1200×800
    └── EngineerAtPanel.tsx       # 엔지니어 실루엣 + 패널/HMI        1200×800
```

## 2. 사용법

```tsx
import { RefineryDusk, SwitchgearRoom } from '../../docs/shared-visuals';
// 또는 콘셉트 폴더로 복사해 사용: import { RefineryDusk } from '../visuals';

// 히어로 배경
<div className="relative h-[520px] overflow-hidden">
  <RefineryDusk tone="dark" className="absolute inset-0" />
  <div className="relative z-10">…</div>
</div>

// 카드 썸네일 (부모가 크기를 정한다)
<div className="aspect-[4/3] overflow-hidden rounded">
  <SwitchgearRoom tone="light" />
</div>
```

### Props

```ts
{ tone?: 'dark' | 'light' | 'navy' | 'warm'; className?: string }
```

`tone` 기본값은 `'dark'`. 그 외 prop은 없다 — 크기는 **부모 요소가 결정**한다.

### 콘셉트별 tone 매핑 (권장)

| tone    | 성격                          | 어울리는 콘셉트                   |
| ------- | ----------------------------- | --------------------------------- |
| `dark`  | 차콜 `#0C0E10` + 오렌지 `#F26B1D` | 01 Industrial                     |
| `light` | 화이트/`#F5F7F9` + 블루 `#0A3D91` | 02 Corporate                      |
| `navy`  | 딥네이비 `#0A1220` + 시안/틸      | 03 Technology                     |
| `warm`  | 웜 모노크롬 `#FAF8F5` / `#141414` | 04 Minimal                        |

## 3. 렌더링 규약

- **크기**: `width="100%" height="100%"`. 부모 컨테이너에 `overflow:hidden`과 높이/aspect-ratio를 준다.
- **크롭**: `preserveAspectRatio="xMidYMid slice"` — 어떤 비율에서도 여백 없이 채우며 가장자리가 잘린다.
  주요 요소는 중앙 영역에 배치돼 있어 16:9 ~ 1:1 범위에서 안전하다. 세로로 아주 긴 컨테이너는 피할 것.
- **ID 충돌 방지**: 모든 gradient/filter/mask/clipPath id와 CSS 클래스명은 `useId()`에서 파생한
  스코프 접두사를 갖는다. 한 페이지에 같은 씬을 여러 번, 여러 씬을 동시에 렌더해도 안전하다.
  (검증: 8씬 × 4톤 = 32 인스턴스를 한 루트에 렌더 → 중복 id 0건)
- **접근성**: `role="img" aria-hidden="true"`. 장식 이미지 전제이므로 의미 있는 정보는 옆 텍스트로 제공할 것.
- **텍스트 없음**: 화면 안의 UI는 전부 추상 도형(사각형/선/아이콘 실루엣)이다.
  판독 가능한 글자·브랜드명·한글/영문 라벨은 어디에도 없다 → 다국어(KO/EN) 전환과 무관하게 재사용 가능.

## 4. 애니메이션

각 씬은 SVG 내부 `<style>`로 매우 절제된 모션만 넣는다 — 항공장애등·표시등 점멸, 화염 흔들림,
스크린 미세 플리커, HMI 전류 흐름 대시.

```css
@media (prefers-reduced-motion: no-preference) { … }
```

로 감싸므로 **모션 감소 설정에서는 완전 정지**한다. 키프레임 이름과 클래스명 역시 `useId()` 스코프다.

## 5. 팔레트 커스터마이즈

각 파일 상단에 `PALETTE: Record<Tone, Record<Role, string>>` 룩업이 있다.
역할(role)은 씬마다 6~14개이며 이름이 의미를 갖는다 (예: `sky0/sky1/sky2`, `far/mid/near`,
`panelA/panelB`, `lcd/lcdInk`, `ledOk/ledAlarm`, `flame`, `edge`, `hi`).
브랜드 CI가 확정되면 이 객체의 hex 값만 교체하면 되고, 도형 코드는 손대지 않아도 된다.

## 6. 씬별 구성 메모

| 씬 | 구성 |
| --- | --- |
| **RefineryDusk** | 그라디언트 황혼 하늘 + 석양 디스크 → 원경 능선/플랜트 → 중경(증류탑 4기·저장탱크·구형탱크·냉각탑·격자 가대·플레어스택) → 전경(대구경 배관·파이프랙·밸브휠). 층마다 헤이즈 밴드를 끼워 대기원근을 만든다. 항공장애등 5개 점멸. |
| **SwitchgearRoom** | 실제 원근투영(초점거리 1400, 소실점 600/392)으로 좌우 큐비클 10련이 마주 보는 복도. 도어면의 디스플레이·아날로그 미터·표시등·환기그릴·핸들·하부 루버는 모두 같은 투영을 통과한다. 바닥 반사는 지면 기준 미러 지오메트리 + 페이드 마스크. |
| **ControlRoom** | 6열×2행 곡면 비디오월(열마다 skewY로 곡률). 화면 12장에 단선결선도·트렌드·알람리스트·게이지·상태매트릭스·배치도·막대그래프를 배분. 천장 코브조명, 스크린 스필광, 콘솔 2열(모니터 후면 글로우 포함). |
| **SubstationYard** | 상단 인입 가공선 → 가대(격자 기둥 7본 + 격자 빔) → 애자련·부스바 현수 → 단로기/피뢰기 스탠드 → 전경 주변압기(방열기 핀·콘서베이터·HV 부싱 3상·LV 부싱·냉각팬·대차) + 제어반 → 자갈 지면·케이블 트렌치·경계 펜스. |
| **RelayPanel** | 브러시드 메탈 플레이트 위 마운팅 레일 4단. 계전기 8대(LCD 3종: 미니 단선도/수치 세그먼트/파형, LED 컬럼, 4방향 키패드, 기능버튼, 리셋버튼, 코너 스크류) + 시험단자 블록 + MCB 16개 + 단자대·배선덕트 + 측면 배선. |
| **HmiScreen** | 모니터 프레임/스탠드/책상. 화면 안에 상단바·아이콘 레일·단선결선도(인입-변압기-주차단기-모선-피더 5회선, 1회선 트립)·게이지 타일·트렌드·알람 리스트·상태 타일·상태바. 데스크 위 키보드/마우스/서류. |
| **PlantAerial** | 부감 원근(지면 Y=250, 소실점 y=168). 근경 탱크팜 12기 + 공정동/증류탑 → 중경 창고동·탱크팜·냉각탑·굴뚝·파이프랙 → 원경 150여 개 시설이 Z 정렬로 렌더되고 거리별 opacity 페이드 + 헤이즈로 깊이를 만든다. 도로망·차선·차량 포함. |
| **EngineerAtPanel** | 아웃포커스(feGaussianBlur) 배전반 열 + 대형 HMI 스크린 배경, 그 앞에 뒷모습 엔지니어 실루엣(안전모·안전조끼 반사밴드·태블릿). **얼굴 없음** — 순수 실루엣에 화면광 방향의 림라이트만. 후방에 보조 인물 1인으로 스케일감. |

## 7. 주의사항

- 실루엣 인물은 **얼굴/개인 식별 요소가 없다**. 특정 인물처럼 보이도록 수정하지 말 것.
- 씬 안에 로고·워드마크·인증마크·수치를 넣지 말 것 (콘텐츠 정확성 규칙 위반).
- `slice` 크롭 특성상 극단적인 종횡비(예: 21:9 초와이드 배너, 세로 3:4 이하)에서는
  주요 구조물이 잘릴 수 있으니 해당 위치엔 `RelayPanel`/`HmiScreen`처럼 균질한 씬을 쓰는 편이 안전하다.
