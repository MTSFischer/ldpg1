const modules = [
  {
    title: 'Módulo 1 • Fundamentos da IA lucrativa',
    description: 'Entenda o ecossistema, os tipos de IA generativa e como escolher nichos com alta demanda imediata.',
  },
  {
    title: 'Módulo 2 • Mapas de oportunidades',
    description: 'Planilhas e roteiros para identificar clientes ideais e ofertas irresistíveis em menos de 30 minutos.',
  },
  {
    title: 'Módulo 3 • Prompts que vendem',
    description: 'Coleção de prompts validados para criar produtos digitais, serviços sob demanda e anúncios que convertem.',
  },
  {
    title: 'Módulo 4 • Fechamento no WhatsApp e redes',
    description: 'Scripts prontos para abordar leads, contornar objeções e fechar vendas rápidas, mesmo com poucos seguidores.',
  },
  {
    title: 'Módulo 5 • Automação e entrega ágil',
    description: 'Configure sistemas simples para entregar projetos em horas, não dias, e encantar clientes.',
  },
  {
    title: 'Módulo 6 • Escala sustentável',
    description: 'Aprenda a reinvestir, montar combos de ofertas e criar parcerias para multiplicar sua renda mensal.',
  },
];

const HowItWorks = () => (
  <section id="conteudo" className="bg-[#060b1d] text-slate-100" aria-labelledby="content-heading">
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
          Conteúdo do e-book
        </span>
        <h2 id="content-heading" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Do básico ao avançado em 6 módulos diretos ao ponto
        </h2>
        <p className="mt-3 text-lg text-slate-300">
          Cada capítulo foi desenhado para você aplicar imediatamente, mesmo sem bagagem técnica.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module) => (
          <article key={module.title} className="rounded-3xl border border-white/10 bg-surface/80 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">{module.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{module.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
