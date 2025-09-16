import { useState } from 'react';
import { KIWIFY_URL } from '../constants.js';

const menuItems = [
  { href: '#conteudo', label: 'Conteúdo' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#garantia', label: 'Garantia' },
  { href: '#faq', label: 'FAQ' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRedirect = () => {
    window.location.href = KIWIFY_URL;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-extrabold text-white">
          Renda Extra IA
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex" aria-label="Navegação principal">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <button
            type="button"
            onClick={handleRedirect}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-dark shadow-lg transition hover:scale-[1.02] hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Comprar agora
          </button>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-100 transition hover:border-primary hover:text-primary lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Abrir menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden">
          <nav className="space-y-2 border-t border-white/10 bg-surface/90 px-4 py-4 text-sm font-semibold text-slate-100" aria-label="Menu móvel">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-full px-4 py-2 text-slate-100 transition hover:bg-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleRedirect}
              className="mt-3 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-dark shadow-lg transition hover:scale-[1.02] hover:bg-primary/90"
            >
              Comprar agora
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
