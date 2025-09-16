import { useState } from 'react';

const faqs = [
  {
    question: 'Preciso ter experiência com tecnologia para aplicar o conteúdo?',
    answer: 'Não. O material foi estruturado para iniciantes absolutos. Você começa entendendo os fundamentos e já recebe roteiros e prompts prontos para executar, mesmo sem bagagem técnica.',
  },
  {
    question: 'Por quanto tempo terei acesso ao e-book e aos bônus?',
    answer: 'O acesso é vitalício. Você pode baixar o e-book e utilizar os bônus sempre que quiser. Futuras atualizações também serão liberadas sem custo adicional.',
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer: 'Após a compra, você tem 7 dias para avaliar o material. Se achar que não é para você, é só enviar um e-mail para o suporte solicitando reembolso completo. Sem burocracia.',
  },
  {
    question: 'Quais formas de pagamento estão disponíveis?',
    answer: 'Você pode pagar com cartão de crédito em até 12x, PIX ou boleto bancário através da plataforma Kiwify, em ambiente 100% seguro.',
  },
  {
    question: 'Recebo suporte se tiver dúvidas na aplicação?',
    answer: 'Sim. Você terá acesso a um canal exclusivo para tirar dúvidas durante os primeiros 30 dias, além de receber atualizações com novas estratégias.',
  },
  {
    question: 'O conteúdo funciona para qualquer nicho?',
    answer: 'As estratégias foram testadas em múltiplos nichos (marketing, serviços locais, infoprodutos e consultorias). Você aprende como adaptar as automações para o seu contexto.',
  },
  {
    question: 'Em quanto tempo posso ver resultados?',
    answer: 'Alguns alunos fecharam as primeiras vendas em menos de uma semana. Os resultados dependem da sua dedicação, mas o passo a passo foi criado para gerar ação imediata.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="bg-black/90 text-slate-100" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Dúvidas frequentes
          </span>
          <h2 id="faq-heading" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tudo o que você precisa saber antes de garantir o seu acesso
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-surface/80 p-4">
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(index)}
                >
                  {faq.question}
                  <span aria-hidden="true" className="text-primary">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`mt-3 text-sm text-slate-300 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
                >
                  <p className="pr-6">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
