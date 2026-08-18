import { useLanguage } from "../context/LanguageContext";
import type { I18n } from "../data/content";
import * as Scenes from "./scenes";
import Container from "./Container";

export type SceneKey = keyof typeof sceneMap;

// 장면 아트워크 — 실제 현장 사진 수령 시 동일 위치를 <img>/<picture>로 교체한다.
const sceneMap = {
  RefineryDusk: Scenes.RefineryDusk,
  SwitchgearRoom: Scenes.SwitchgearRoom,
  ControlRoom: Scenes.ControlRoom,
  SubstationYard: Scenes.SubstationYard,
  RelayPanel: Scenes.RelayPanel,
  HmiScreen: Scenes.HmiScreen,
  PlantAerial: Scenes.PlantAerial,
  EngineerAtPanel: Scenes.EngineerAtPanel,
};

interface Props {
  title: I18n;
  lead: I18n;
  scene: SceneKey;
  en: string;
}

/** 서브페이지 상단 비주얼 밴드 — 페이지명 + 장면 아트워크 배경 */
export default function SubVisual({ title, lead, scene, en }: Props) {
  const { t } = useLanguage();
  const Scene = sceneMap[scene];

  return (
    <section className="relative overflow-hidden bg-deep">
      <div className="absolute inset-0">
        <Scene tone="navy" />
      </div>
      {/* 가독성 확보용 그라디언트 오버레이 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#08172c]/95 via-[#0b1f3a]/75 to-[#0b1f3a]/25"
      />
      <Container className="relative">
        <div className="flex min-h-[190px] flex-col justify-center py-12 lg:min-h-[260px] lg:py-16">
          <p
            className="text-[0.72rem] font-semibold tracking-[0.22em] text-brand-sky uppercase"
            style={{ fontFamily: "var(--font-en)" }}
          >
            {en}
          </p>
          <h1 className="mt-3 text-[1.9rem] leading-tight font-bold text-white lg:text-[2.6rem]">
            {t(title)}
          </h1>
          <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-white/70 lg:text-[1rem]">
            {t(lead)}
          </p>
        </div>
      </Container>
    </section>
  );
}
