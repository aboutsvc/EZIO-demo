import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { seo } from "../data/content";
import type { I18n, Lang } from "../data/content";

const STORAGE_KEY = "ezio-minimal-lang";

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** t({ko, en}) → 현재 언어 문자열 */
  t: (value: I18n) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "ko";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ko" || stored === "en") return stored;
  } catch {
    /* localStorage 사용 불가 환경 — 기본값 사용 */
  }
  return "ko"; // 기본 언어는 한국어
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = seo.title[lang];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", seo.description[lang]);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* 저장 실패는 무시 */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "ko" ? "en" : "ko")),
    [],
  );
  const t = useCallback((value: I18n) => value[lang], [lang]);

  const value = useMemo<LanguageValue>(
    () => ({ lang, setLang, toggle, t }),
    [lang, setLang, toggle, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
