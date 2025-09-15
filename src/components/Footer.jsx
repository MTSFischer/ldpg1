const Footer = () => (
  <footer className="bg-dark text-slate-300" aria-labelledby="footer-heading">
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-semibold text-white">Renda Extra IA</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#" className="transition hover:text-white">
            Termos de uso
          </a>
          <a href="#" className="transition hover:text-white">
            Política de privacidade
          </a>
          <a href="#" className="transition hover:text-white">
            Contato
          </a>
        </nav>
      </div>
      <div className="mt-6 border-t border-white/10 pt-6 text-xs text-slate-400">
        <p>CNPJ: 12.345.678/0001-90 • Todos os direitos reservados.</p>
        <p className="mt-2">
          © {new Date().getFullYear()} Renda Extra IA. Plataforma com checkout seguro Kiwify. Ambiente confiável e protegido.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
