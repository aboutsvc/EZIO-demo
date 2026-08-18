import Logo from "./Logo";
import { useLang } from "../context/LanguageContext";
import { footer, nav, positioning } from "../data/content";
import type { I18n } from "../data/content";

const LINKS: { href: string; label: I18n }[] = [
  { href: "#solutions", label: nav.solutions },
  { href: "#products", label: nav.products },
  { href: "#capability", label: nav.capability },
  { href: "#project", label: nav.projects },
  { href: "#company", label: nav.company },
  { href: "#contact", label: nav.contact },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative border-t-2 border-line bg-ink">
      <span
        aria-hidden="true"
        className="absolute -top-[2px] left-0 h-[2px] w-16 bg-orange sm:w-24"
      />
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mono-label mt-5">{t(positioning.primary)}</p>
            <p className="mt-3 max-w-[38ch] text-[0.85rem] leading-relaxed text-muted">
              {t(positioning.supporting)}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <span className="mono-label text-fg/60">Index</span>
            <ul className="mt-5 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-[0.875rem] text-muted transition-colors hover:text-fg"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-orange transition-all duration-300 group-hover:w-4"
                    />
                    {t(l.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <span className="mono-label text-fg/60">Head Office</span>
            <p className="mt-5 text-[0.875rem] leading-relaxed text-fg">
              {t(footer.companyLine)}
            </p>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
              {t(footer.address)}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label text-muted/70">{t(footer.demoNotice)}</p>
          <p className="mono-label text-muted/50">{t(footer.copyright)}</p>
        </div>
      </div>
    </footer>
  );
}
