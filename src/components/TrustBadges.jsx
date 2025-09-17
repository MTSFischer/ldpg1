const badges = [
  {
    title: 'Compra 100% segura',
    description: 'Pagamento processado com criptografia SSL.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25c-.414 0-.75-.336-.75-.75V7.5a.75.75 0 1 1 1.5 0v3c0 .414-.336.75-.75.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75v3.75a6 6 0 0 0 12 0V9.75m-12 0a6 6 0 0 1 12 0m-12 0h12" />
      </svg>
    ),
  },
  {
    title: 'Garantia de 7 dias',
    description: 'Satisfação garantida ou seu dinheiro de volta.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    title: 'Acesso imediato',
    description: 'Liberação automática assim que o pagamento for aprovado.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0L12 3l9 5.25m-18 0L12 12l9-3.75" />
      </svg>
    ),
  },
];

const TrustBadges = () => (
  <section className="bg-white" aria-labelledby="trust-heading">
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-3">
        {badges.map((badge) => (
          <div key={badge.title} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              {badge.icon}
            </span>
            <div>
              <p className="text-sm font-semibold text-dark">{badge.title}</p>
              <p className="text-sm text-slate-600">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
