import Logo from "../components/Logo";
import { Container, StatusLed } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { footer, nav, positioning } from "../data/content";

const FOOTER_LINKS = [
  { href: "#company", label: nav.company },
  { href: "#solutions", label: nav.solutions },
  { href: "#products", label: nav.products },
  { href: "#capability", label: nav.capability },
  { href: "#projects", label: nav.projects },
  { href: "#contact", label: nav.contact },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-navy-900)]">
      <div className="dot-grid-tight pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <Container className="relative py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="tag-mono mt-4 text-[0.625rem] text-[var(--color-ink-faint)]">
              {t(positioning.primary)}
            </p>
            <p className="mt-5 text-[0.8125rem] leading-relaxed text-[var(--color-ink-dim)]">
              {t(footer.companyLine)}
            </p>
            <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-[var(--color-ink-dim)]">
              {t(footer.address)}
            </p>
          </div>

          <nav className="lg:col-span-4" aria-label="Footer">
            <div className="tag-mono mb-4 flex items-center gap-2 text-[0.5625rem] text-[var(--color-ink-faint)]">
              <StatusLed tone="idle" pulse={false} />
              SITE INDEX
            </div>
            <ul className="grid grid-cols-2 gap-y-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.8125rem] text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-cyan-data)]"
                  >
                    {t(l.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <div className="border border-[var(--color-line)] p-4">
              <div className="tag-mono flex items-center gap-2 text-[0.5625rem] text-[var(--color-amber-alarm)]">
                <StatusLed tone="alarm" />
                NOTICE
              </div>
              <p className="mt-3 text-[0.75rem] leading-relaxed text-[var(--color-ink-dim)]">
                {t(footer.demoNotice)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line-soft)] pt-6">
          <p className="tag-mono text-[0.625rem] text-[var(--color-ink-faint)]">
            {t(footer.copyright)}
          </p>
          <p className="tag-mono flex items-center gap-2 text-[0.5625rem] text-[var(--color-ink-faint)]">
            <StatusLed tone="ok" />
            CONCEPT 03 · TECHNOLOGY
          </p>
        </div>
      </Container>
    </footer>
  );
}
