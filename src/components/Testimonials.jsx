import avatarPlaceholder from '../assets/avatar-placeholder.svg';

const testimonials = [
  {
    name: 'Marina S.',
    role: 'Social media freelancer',
    quote: 'Fechei 7 novos contratos em 30 dias usando os prompts prontos. Investimento que se pagou em uma semana!',
  },
  {
    name: 'Thiago A.',
    role: 'Professor de informática',
    quote: 'Transformei o conteúdo do e-book em mentorias em grupo. Minha renda extra já supera o salário fixo.',
  },
  {
    name: 'Carla M.',
    role: 'Artesã digital',
    quote: 'Os modelos de automação me fizeram economizar horas por semana. Consegui lançar minha loja com atendimento 24/7.',
  },
  {
    name: 'Diego R.',
    role: 'Consultor de marketing',
    quote: 'O módulo de negociação me deu confiança para cobrar mais e entregar melhor. Subi meu ticket médio em 65%.',
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="bg-slate-900" aria-labelledby="testimonials-heading">
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center text-white">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
          Histórias reais
        </span>
        <h2 id="testimonials-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
          Alunos lucrando com Inteligência Artificial
        </h2>
        <p className="mt-3 text-lg text-slate-300">
          Mais de 1.200 alunos aplicando diariamente e multiplicando seus resultados com o método.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left text-slate-100 backdrop-blur">
            <div className="flex items-center gap-4">
              <img
                src={avatarPlaceholder}
                loading="lazy"
                alt={`Avatar de ${testimonial.name}`}
                className="h-14 w-14 rounded-full border border-white/40"
              />
              <figcaption>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-300">{testimonial.role}</p>
              </figcaption>
            </div>
            <blockquote className="mt-4 text-base text-slate-100">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-6 flex items-center gap-2 text-sm text-yellow-300" aria-label="Avaliação máxima de 5 estrelas">
              <span aria-hidden="true">★★★★★</span>
              <span className="text-slate-200">5.0</span>
            </div>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
