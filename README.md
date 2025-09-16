# Landing Page – Renda Extra com Inteligência Artificial

Landing page moderna e responsiva desenvolvida em **React + Vite** com **Tailwind CSS** para divulgar e vender o e-book “Renda Extra com Inteligência Artificial”. O foco é conversão, com gatilhos de urgência, escassez e prova social totalmente em português do Brasil.

## 🚀 Tecnologias

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)

## 📦 Como instalar e executar

```bash
npm install
npm run dev
```

O projeto será iniciado em modo desenvolvimento (porta padrão `5173`).

### Gerar build de produção

```bash
npm run build
```

### Visualizar build de produção

```bash
npm run preview
```

## ✏️ Como editar conteúdos principais

Todos os textos e valores estão em componentes dentro da pasta [`src/components`](./src/components). Os principais pontos:

- **URL do checkout Kiwify:** definida na constante [`KIWIFY_URL`](./src/constants.js). Basta alterar esse valor para apontar para o link real.
- **Preços (cheio e promocional):** também presentes em [`src/constants.js`](./src/constants.js) nas constantes `FULL_PRICE` e `DISCOUNT_PRICE`.
- **Tempo do contador regressivo:** altere `COUNTDOWN_MINUTES` em [`src/constants.js`](./src/constants.js). O contador reinicia sempre que a página é recarregada.
- **Cópias e bullets:** atualize diretamente os componentes (`Hero.jsx`, `Benefits.jsx`, `HowItWorks.jsx`, `Offer.jsx`, etc.). Comentários indicam as seções e é seguro editar somente os textos.
- **Imagens/ícones:** arquivos SVG ficam em [`src/assets`](./src/assets). Substitua pelos seus próprios mantendo os mesmos nomes ou atualize as importações nos componentes.

## 🎨 Personalização de estilos

- As cores principais estão configuradas em [`tailwind.config.js`](./tailwind.config.js).
  - `dark` e `surface`: tons de preto/azul escuro para a base do layout.
  - `primary`: verde neon aplicado nos CTAs e botões principais.
  - `accent`: laranja vibrante usado em badges de urgência e barras promocionais.
- Tipografia padrão: fonte **Inter**, carregada em [`index.html`](./index.html).
- Estilos globais adicionais estão em [`src/index.css`](./src/index.css).

## 🧩 Componentes principais

- `Header`, `Hero`, `Benefits`, `HowItWorks`, `Offer`, `Testimonials`, `TrustBadges`, `Guarantee`, `FAQ`, `CTA`, `Footer`
- `Countdown`: componente compartilhado com contexto para manter o tempo sincronizado em toda a página.
- `FloatingBar`: barra fixa que aparece no mobile após 40% de rolagem, com preço, contador e CTA.

## ✅ Acessibilidade & Boas práticas

- Estrutura semântica (uso de `section`, `header`, `main`, `footer`).
- Elementos interativos com foco visível e atributos `aria-*` quando necessário.
- Imagens com texto alternativo descritivo.
- Contador com `role="timer"` e atualização anunciada para tecnologias assistivas.

## 📝 Notas adicionais

- Há um comentário em `App.jsx` indicando onde inserir scripts de analytics (GA4, Meta Pixel etc.).
- Todos os CTAs chamam `window.location.href = KIWIFY_URL` para redirecionar ao checkout.
- As dependências foram mantidas mínimas para garantir carregamento rápido.

Sinta-se à vontade para adaptar textos, cores e imagens para a sua marca.
