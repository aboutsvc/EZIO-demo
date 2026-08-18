import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { I18n, Lang } from "../data/content";
import { seo } from "../data/content";

const STORAGE_KEY = "ezio-concept-06-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** t({ ko, en }) → 현재 언어 문자열 */
  t: (value: I18n) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "ko";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ko" || stored === "en") return stored;
  } catch {
    /* localStorage 접근 불가 환경 — 기본값 사용 */
  }
  return "ko";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = seo.title[lang];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", seo.description[lang]);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* 저장 실패 무시 */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(() => setLangState((p) => (p === "ko" ? "en" : "ko")), []);
  const t = useCallback((value: I18n) => value[lang], [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t }),
    [lang, setLang, toggle, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
