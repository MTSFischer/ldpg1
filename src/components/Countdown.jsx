import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { COUNTDOWN_MINUTES } from '../constants.js';

const CountdownContext = createContext(null);

export const CountdownProvider = ({ children, minutes = COUNTDOWN_MINUTES }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    setTimeLeft(minutes * 60);
  }, [minutes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const value = useMemo(() => {
    const minutesRemaining = Math.floor(timeLeft / 60);
    const secondsRemaining = timeLeft % 60;
    const formatted = `${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
    const ended = timeLeft === 0;

    return {
      timeLeft,
      formatted,
      ended,
    };
  }, [timeLeft]);

  return <CountdownContext.Provider value={value}>{children}</CountdownContext.Provider>;
};

export const useCountdown = () => {
  const context = useContext(CountdownContext);
  if (!context) {
    throw new Error('Countdown deve ser utilizado dentro de CountdownProvider');
  }
  return context;
};

const variantStyles = {
  sm: 'text-base',
  base: 'text-xl',
  lg: 'text-2xl',
};

const Countdown = ({ size = 'base', label = 'Tempo restante da oferta', className = '' }) => {
  const { formatted, ended } = useCountdown();

  return (
    <div
      className={`inline-flex items-center justify-center gap-2 ${className}`.trim()}
      role="timer"
      aria-live="polite"
      aria-label={label}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary to-accent px-4 py-2 text-slate-900 shadow-glow">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-900/80">Oferta relâmpago</span>
        {ended ? (
          <span className="font-semibold text-slate-900">Oferta quase encerrando!</span>
        ) : (
          <span className={`font-mono font-bold ${variantStyles[size]}`}>{formatted}</span>
        )}
      </span>
    </div>
  );
};

export default Countdown;
