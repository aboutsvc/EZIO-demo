import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/ui";
import Container from "../components/Container";

export default function NotFound() {
  const { t, lang } = useLanguage();

  return (
    <Container>
      <div className="flex min-h-[46vh] flex-col items-center justify-center py-20 text-center">
        <p
          className="text-[3rem] leading-none font-bold text-brand-tint"
          style={{ fontFamily: "var(--font-en)" }}
        >
          404
        </p>
        <p className="mt-5 text-[1.05rem] font-semibold text-ink">
          {lang === "ko" ? "요청하신 페이지를 찾을 수 없습니다." : "The page could not be found."}
        </p>
        <Link
          to="/"
          className="mt-7 bg-brand px-6 py-3 text-[0.85rem] font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          {t(ui.goHome)}
        </Link>
      </div>
    </Container>
  );
}
