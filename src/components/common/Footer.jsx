function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        backgroundColor: 'var(--footer-bg)', // Escuro em ambos os temas (#111827)
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'white' }}>
              Sobre este Guia
            </h3>
            <p className="leading-relaxed text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Projeto de Extensão Universitária (IPOG - 2025)
              <br />
              Baseado em dados reais da comunidade de desenvolvedores
            </p>
            <p className="text-sm mt-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <strong style={{ color: 'white' }}>Autor:</strong> Ricardo Francisco de Souza Linhares
            </p>
          </div>

          {/* Coluna 2 - Comunidades */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: 'white' }}>
              Comunidades Recomendadas
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://heartdevs.com/" target="_blank" rel="noopener noreferrer" className="transition" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => (e.target.style.color = 'white')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}>
                  He4rt Developers
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="transition" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => (e.target.style.color = 'white')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}>
                  freecodecamp
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/r/brdev/" target="_blank" rel="noopener noreferrer" className="transition" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => (e.target.style.color = 'white')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}>
                  r/brdev
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Info */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: 'white' }}>
              Informações
            </h4>
            <p className="leading-relaxed text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Este guia foi criado para ajudar iniciantes a não se perderem no excesso de informações disponíveis.
            </p>
            <p className="text-sm mt-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Não é um curso. É uma bússola.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-6 text-center" style={{ borderColor: 'var(--footer-border)' }}>
          <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2025 Ricardo Linhares •
            <a href="#inicio" className="ml-2 transition" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => (e.target.style.color = 'white')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}>
              Voltar ao topo ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
