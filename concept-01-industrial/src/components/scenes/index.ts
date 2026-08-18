// EZIO shared scene artwork — finished vector scenes. Real site photography can be swapped in later at the same slots.
export type SceneTone = 'dark' | 'light' | 'navy' | 'warm';

export interface SceneProps {
  /** 팔레트 전환: dark=차콜+오렌지 / light=화이트+블루 / navy=네이비+시안 / warm=웜 모노크롬 */
  tone?: SceneTone;
  className?: string;
}

export { RefineryDusk } from './RefineryDusk';
export { SwitchgearRoom } from './SwitchgearRoom';
export { ControlRoom } from './ControlRoom';
export { SubstationYard } from './SubstationYard';
export { RelayPanel } from './RelayPanel';
export { HmiScreen } from './HmiScreen';
export { PlantAerial } from './PlantAerial';
export { EngineerAtPanel } from './EngineerAtPanel';
