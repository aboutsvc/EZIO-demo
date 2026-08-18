import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { solutions } from "../../data/content";
import { ui } from "../../data/ui";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import {
  ControlRoom,
  EngineerAtPanel,
  HmiScreen,
  RelayPanel,
  SwitchgearRoom,
} from "../../components/scenes";

// 솔루션별 장면 아트워크 — 실제 현장 사진 수령 시 동일 위치를 <img>/<picture>로 교체한다.
const sceneBySolution: Record<string, typeof SwitchgearRoom> = {
  "power-distribution": SwitchgearRoom,
  "protection-measurement": RelayPanel,
  "monitoring-control": ControlRoom,
  automation: HmiScreen,
  engineering: EngineerAtPanel,
};

/** 솔루션 하이라이트 — 5개 솔루션 탭 + 상세 패널 */
export default function SolutionHighlights() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((s) => s.id === active) ?? solutions[0];
  const Scene = sceneBySolution[current.id] ?? SwitchgearRoom;

  return (
    <section className="border-y border-line bg-surface py-16 lg:py-20">
      <Container>
        <SectionTitle en="Solutions" title={ui.solutionsTitle} lead={ui.solutionsLead} />

        {/* 탭 */}
        <div className="mt-9 -mx-5 overflow-x-auto px-5 no-scrollbar lg:mx-0 lg:px-0">
          <ul role="tablist" className="flex min-w-max border-b border-line-strong lg:min-w-0">
            {solutions.map((s) => {
              const isActive = s.id === active;
              return (
                <li key={s.id} className="flex-1">
                  <button
                    type="button"
                    role="tab"
                    id={`sol-tab-${s.id}`}
                    aria-selected={isActive}
                    aria-controls={`sol-panel-${s.id}`}
                    onClick={() => setActive(s.id)}
                    className={`flex w-full items-center justify-center gap-2 border-b-[3px] px-5 py-4 text-[0.88rem] whitespace-nowrap transition-colors ${
                      isActive
                        ? "border-brand bg-paper font-bold text-brand"
                        : "border-transparent font-medium text-muted hover:text-ink"
                    }`}
                  >
                    <span
                      className="text-[0.7rem] tabular-nums opacity-70"
                      style={{ fontFamily: "var(--font-en)" }}
                    >
                      {s.no}
                    </span>
                    {t(s.title)}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 패널 */}
        <div
          role="tabpanel"
          id={`sol-panel-${current.id}`}
          aria-labelledby={`sol-tab-${current.id}`}
          className="grid border border-t-0 border-line bg-paper lg:grid-cols-[minmax(0,1fr)_44%]"
        >
          <div className="order-2 p-7 lg:order-1 lg:p-11">
            <p
              className="text-[0.72rem] font-semibold tracking-[0.2em] text-brand"
              style={{ fontFamily: "var(--font-en)" }}
            >
              SOLUTION {current.no}
            </p>
            <h3 className="mt-3 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              {t(current.title)}
            </h3>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">{t(current.desc)}</p>

            <p className="mt-8 text-[0.75rem] font-semibold tracking-wide text-faint">
              {t(ui.solutionScope)}
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {current.items.map((item) => (
                <li
                  key={item.en}
                  className="flex items-start gap-2 text-[0.85rem] leading-relaxed text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-brand-sky"
                  />
                  {t(item)}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => navigate("/solutions", { state: { scrollTo: current.id } })}
              className="mt-9 inline-flex items-center gap-2 bg-brand px-6 py-3 text-[0.85rem] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              {t(ui.viewDetail)}
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <div className="order-1 min-h-[220px] overflow-hidden bg-surface-2 lg:order-2 lg:min-h-[420px]">
            <Scene tone="light" />
          </div>
        </div>
      </Container>
    </section>
  );
}
