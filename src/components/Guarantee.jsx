import { KIWIFY_URL } from '../constants.js';

const Guarantee = () => {
  const handleRedirect = () => {
    window.location.href = KIWIFY_URL;
  };

  return (
    <section id="garantia" className="bg-slate-900 text-white" aria-labelledby="guarantee-block-heading">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:px-8">
        <div className="w-full space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80">
            Garantia blindada
          </span>
          <h2 id="guarantee-block-heading" className="text-3xl font-bold sm:text-4xl">
            Você tem 7 dias completos para testar sem risco
          </h2>
          <p className="text-lg text-slate-200">
            Se não amar o conteúdo, se não sentir que pode gerar renda extra com IA ou se simplesmente mudar de ideia, basta enviar um e-mail dentro de 7 dias e devolvemos 100% do valor. Simples assim.
          </p>
          <p className="text-sm text-slate-300">
            Estamos comprometidos com resultados reais. O risco é nosso, o avanço é seu.
          </p>
          <button
            type="button"
            onClick={handleRedirect}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-dark shadow-lg transition hover:scale-[1.02] hover:bg-slate-100"
          >
            Garantir meu e-book agora
          </button>
        </div>
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Compromisso total</p>
          <p className="mt-4 text-4xl font-extrabold text-white">Garantia de 7 dias</p>
          <p className="mt-4 text-sm text-slate-200">
            Direito de arrependimento conforme o art. 49 do Código de Defesa do Consumidor. Sem perguntas, sem armadilhas.
          </p>
          <div className="mt-6 rounded-2xl bg-white/20 p-4 text-sm text-slate-100">
            <p>Suporte dedicado para acompanhar sua jornada nos primeiros passos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
