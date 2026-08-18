import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/site";

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-4 py-24 text-center">
      <p className="text-[0.75rem] font-bold tracking-[0.16em] text-brand">404</p>
      <h1 className="text-[1.5rem] font-bold text-ink">{t(ui.notFound.title)}</h1>
      <p className="text-[0.9375rem] text-muted">{t(ui.notFound.body)}</p>
      <Link to="/" className="btn-blue mt-2 h-11 px-6 text-[0.9375rem]">
        {t(ui.notFound.home)}
      </Link>
    </div>
  );
}

export default NotFound;
