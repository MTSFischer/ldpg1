import Countdown from './Countdown.jsx';
import { KIWIFY_URL, DISCOUNT_PRICE } from '../constants.js';

const CTA = () => {
  const handleRedirect = () => {
    window.location.href = KIWIFY_URL;
  };

  return (

    <section className="bg-gradient-to-br from-primary via-primary to-accent text-white" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 id="cta-heading" className="text-3xl font-extrabold sm:text-4xl">
          Não perca a chance de construir uma renda extra previsível com IA
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Garanta acesso imediato ao e-book, aos bônus e à garantia blindada por apenas {DISCOUNT_PRICE}. Oferta válida enquanto durar o lote promocional.
        </p>
        <div className="mt-6 flex justify-center">
          <Countdown size="base" label="Tempo restante para aproveitar a oferta" />
        </div>
        <button
          type="button"
          onClick={handleRedirect}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-dark shadow-xl transition hover:scale-[1.03] hover:bg-slate-100 sm:w-auto"
        >
          Garantir meu e-book agora
        </button>
      </div>
    </section>
  );
};

export default CTA;
