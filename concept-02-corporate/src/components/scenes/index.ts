// EGO shared scene artwork — 실제 현장 사진 수령 시 교체 가능한 일러스트레이션
export type SceneTone = 'dark' | 'light' | 'navy' | 'warm';

export interface SceneProps {
  /** 팔레트 전환: dark=차콜+오렌지 / light=화이트+블루 / navy=네이비+시안 / warm=웜 모노크롬 */
  tone?: SceneTone;
  className?: string;
}

export { RefineryDusk } from './scenes/RefineryDusk';
export { SwitchgearRoom } from './scenes/SwitchgearRoom';
export { ControlRoom } from './scenes/ControlRoom';
export { SubstationYard } from './scenes/SubstationYard';
export { RelayPanel } from './scenes/RelayPanel';
export { HmiScreen } from './scenes/HmiScreen';
export { PlantAerial } from './scenes/PlantAerial';
export { EngineerAtPanel } from './scenes/EngineerAtPanel';
