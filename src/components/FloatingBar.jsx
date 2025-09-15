import { useEffect, useState } from 'react';
import Countdown from './Countdown.jsx';
import { DISCOUNT_PRICE, KIWIFY_URL } from '../constants.js';

const FloatingBar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    if (!isMobile || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(false);
      return undefined;
    }

    const hero = document.querySelector('#hero');
    if (!hero) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio < 0.4);
      },
      { threshold: [0, 0.25, 0.4, 0.75, 1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isMobile]);

  const handleRedirect = () => {
    window.location.href = KIWIFY_URL;
  };

  if (!visible || !isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-[0_-10px_30px_rgba(15,23,42,0.18)] backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Últimas horas</p>
          <Countdown size="sm" label="Tempo restante na barra flutuante" />
        </div>
        <div className="text-right text-sm">
          <p className="text-xs text-slate-500">por apenas</p>
          <p className="text-lg font-bold text-primary">{DISCOUNT_PRICE}</p>
        </div>
        <button
          type="button"
          onClick={handleRedirect}
          className="flex-1 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-primary/90"
        >
          Garantir minha vaga
        </button>
      </div>
    </div>
  );
};

export default FloatingBar;
