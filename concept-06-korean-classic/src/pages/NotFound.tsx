import { Link } from "react-router-dom";
import { ui } from "../data/site";

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4 py-24 text-center">
      <p className="text-[3rem] font-extrabold tracking-[0.06em] text-line-strong">404</p>
      <h1 className="mt-2 text-[1.5rem] font-bold text-ink">{ui.notFound.title}</h1>
      <p className="mt-3 text-[0.9375rem] text-ink-2">{ui.notFound.body}</p>
      <Link to="/" className="btn-blue mt-8 h-11 px-8 text-[0.9375rem]">
        {ui.notFound.home}
      </Link>
    </div>
  );
}

export default NotFound;
