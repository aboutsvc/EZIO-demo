// 장면 아트워크 레지스트리 — data(site.ts)의 SceneKey 문자열을 실제 컴포넌트로 매핑한다.
// 아트워크는 docs/shared-visuals 에서 복사한 완성 일러스트레이션이다 (실제 현장 사진 수령 시 교체 가능).
import type { SceneKey } from "../data/site";
import type { SceneTone } from "./scenes";
import {
  ControlRoom,
  EngineerAtPanel,
  HmiScreen,
  PlantAerial,
  RefineryDusk,
  RelayPanel,
  SubstationYard,
  SwitchgearRoom,
} from "./scenes";

const REGISTRY = {
  RefineryDusk,
  SwitchgearRoom,
  ControlRoom,
  SubstationYard,
  RelayPanel,
  HmiScreen,
  PlantAerial,
  EngineerAtPanel,
} as const satisfies Record<SceneKey, unknown>;

interface SceneProps {
  name: SceneKey;
  tone?: SceneTone;
  className?: string;
}

export function Scene({ name, tone = "light", className }: SceneProps) {
  const Component = REGISTRY[name];
  return <Component tone={tone} className={className} />;
}

export default Scene;
