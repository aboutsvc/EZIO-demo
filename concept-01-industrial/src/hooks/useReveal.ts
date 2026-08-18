import { useEffect } from "react";

/**
 * 섹션 진입 시 미묘한 fade-up.
 * `.reveal` 클래스가 붙은 요소를 관찰하여 `.is-in`을 부여한다 (CSS 기반, 라이브러리 없음).
 */
export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );

    if (reduced || typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
