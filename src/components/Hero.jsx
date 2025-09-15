import heroImage from '../assets/ebook-cover.svg';
import Countdown from './Countdown.jsx';
import { KIWIFY_URL, DISCOUNT_PRICE, FULL_PRICE } from '../constants.js';

const Hero = () => {
  const handleRedirect = () => {
    window.location.href = KIWIFY_URL;
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-dark text-white">
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/90">
            Oferta por tempo limitado
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Aprenda a gerar renda extra com IA — do zero ao avançado
          </h1>
          <p className="mt-4 text-lg text-slate-100 sm:text-xl">
            Método prático, passo a passo, para criar novas fontes de receita usando IA — mesmo começando do zero.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-100">
            <span className="flex items-center gap-2">
              <span aria-hidden="true">★★★★★</span> 4.9/5 por 1.200+ alunos
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide">
              Lotes promocionais limitados
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <button
              type="button"
              onClick={handleRedirect}
              className="w-full rounded-full bg-white px-8 py-4 text-center text-lg font-semibold text-dark shadow-xl transition hover:scale-[1.03] hover:bg-slate-100 sm:w-auto"
            >
              Quero meu e-book
            </button>
            <div className="flex items-center gap-4 text-sm text-slate-200">
              <div className="text-left">
                <p className="font-semibold">De {FULL_PRICE} por</p>
                <p className="text-2xl font-extrabold text-white">{DISCOUNT_PRICE} hoje</p>
              </div>
              <Countdown size="lg" className="sm:ml-2" label="Contagem regressiva da oferta" />
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <img
              src={heroImage}
              loading="lazy"
              decoding="async"
              alt="Capa do e-book Renda Extra com Inteligência Artificial"
              className="w-full"
            />
            <div className="mt-6 space-y-2 text-sm text-slate-100">
              <p className="font-semibold text-white">O que você vai dominar:</p>
              <ul className="space-y-1 text-slate-200">
                <li>• Identifique oportunidades de renda com IA em minutos.</li>
                <li>• Modelos de prompts prontos para vender serviços.</li>
                <li>• Estratégias testadas para escalar com automações.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
