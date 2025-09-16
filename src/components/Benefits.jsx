const benefits = [
  'Identifique oportunidades de renda com IA em minutos.',
  'Modelos de prompts prontos para vender serviços e produtos digitais.',
  'Estratégias testadas para fechar vendas no WhatsApp e redes sociais.',
  'Checklist diário para manter a consistência e escalar ganhos.',
  'Fluxos de automação para entregar mais em menos tempo.',
  'Planilhas de acompanhamento para multiplicar seus resultados.',
];

const Benefits = () => (
  <section className="bg-black/90 text-slate-100" aria-labelledby="benefits-heading">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Resultados reais
        </span>
        <h2 id="benefits-heading" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Tudo o que você precisa para lucrar com IA, sem complicação
        </h2>
        <p className="mt-3 text-lg text-slate-300">
          Economia de tempo, clareza nas ações e ferramentas para colocar dinheiro no bolso já nos primeiros dias.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-primary/40">
            <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="text-base font-semibold text-slate-100">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
