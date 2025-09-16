import Countdown from './Countdown.jsx';
import { DISCOUNT_PRICE, FULL_PRICE, KIWIFY_URL } from '../constants.js';

const bonuses = [
  'Prompt pack com 120+ comandos prontos para serviços lucrativos.',
  'Checklist diário de ações para manter o foco e a consistência.',
  'Templates de propostas e mensagens para WhatsApp e e-mail.',
];

const Offer = () => {
  const handleRedirect = () => {
    window.location.href = KIWIFY_URL;
  };

  return (
    <section className="bg-black/95 text-slate-100" aria-labelledby="offer-heading">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="offer-heading" className="text-3xl font-bold text-white sm:text-4xl">
              Oferta exclusiva: acesso imediato + bônus imbatíveis
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Aproveite o desconto relâmpago e garanta todos os materiais que já ajudaram milhares de alunos a criarem novas fontes de renda.
            </p>
            <div className="mt-6 rounded-3xl border border-primary/40 bg-surface/80 p-6 shadow-lg shadow-black/40">
              <div className="flex flex-wrap items-baseline gap-3 text-slate-200">
                <span className="text-lg font-semibold line-through text-slate-500">{FULL_PRICE}</span>
                <span className="text-4xl font-extrabold text-primary">{DISCOUNT_PRICE}</span>
                <span className="rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  Somente hoje
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">Pagamento único, acesso vitalício e atualizações inclusas.</p>
              <Countdown size="base" className="mt-4" label="Tempo restante da oferta especial" />
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-white">Bônus imediatos</h3>
              <ul className="space-y-3 text-slate-200">
                {bonuses.map((bonus) => (
                  <li key={bonus} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="mt-10 rounded-2xl border border-accent/60 bg-gradient-to-r from-accent/80 to-primary/70 p-5 text-sm text-dark shadow-glow"
            >
              <p className="font-semibold">
                Urgência: restam poucos lotes promocionais. Estoque digital limitado para manter o suporte próximo.
              </p>
              <p className="mt-2 text-dark/80">
                Garanta sua vaga agora e receba orientações personalizadas nas primeiras 48 horas.
              </p>
            </div>
            <button
              type="button"
              onClick={handleRedirect}
              className="mt-10 w-full rounded-full bg-primary px-10 py-4 text-lg font-semibold text-dark shadow-glow transition hover:scale-[1.05] hover:bg-primary/90 sm:w-auto"
            >
              Garantir minha vaga
            </button>
          </div>
          <aside className="rounded-3xl border border-primary/30 bg-gradient-to-br from-surface/80 via-black/80 to-surface/60 p-8 shadow-2xl shadow-black/40" aria-labelledby="guarantee-heading">
            <h3 id="guarantee-heading" className="text-2xl font-bold text-white">Garantia incondicional de 7 dias</h3>
            <p className="mt-4 text-base text-slate-200">
              Teste sem medo. Se dentro de 7 dias você sentir que o material não é para você, é só enviar um e-mail que devolvemos 100% do investimento. Sem burocracia.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p><strong className="text-primary">Nota legal:</strong> Garantia conforme Código de Defesa do Consumidor. Solicite reembolso dentro do prazo via suporte.</p>
              <p>Acesso imediato após a compra com login enviado por e-mail.</p>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/60 p-6 text-center shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Compra segura</p>
              <p className="mt-2 text-lg font-bold text-white">Ambiente protegido com criptografia SSL e emissão fiscal.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Offer;
