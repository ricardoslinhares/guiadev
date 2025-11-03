import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

function Header({ theme, toggleTheme, isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      role="banner"
      aria-label="Navegação principal"
      className="sticky top-0 z-50 shadow-sm"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderBottom: '1px solid var(--header-border)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--header-text)' }}>
            <span className="text-3xl">💻</span>
            <span>GuiaDev</span>
          </div>

          {/* Desktop Nav + Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-8">
              <a
                href="#inicio"
                onClick={(e) => scrollToSection(e, '#inicio')}
                className="font-medium transition-colors"
                style={{
                  color: 'var(--header-text)',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--header-text)')}
              >
                Início
              </a>
              <a
                href="#roadmap"
                onClick={(e) => scrollToSection(e, '#roadmap')}
                className="font-medium transition-colors"
                style={{
                  color: 'var(--header-text)',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--header-text)')}
              >
                Roadmap
              </a>
              <a
                href="#recursos"
                onClick={(e) => scrollToSection(e, '#recursos')}
                className="font-medium transition-colors"
                style={{
                  color: 'var(--header-text)',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--header-text)')}
              >
                Recursos
              </a>
            </nav>

            {/* Theme Toggle - Desktop */}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>

          {/* Mobile: Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 transition-colors" style={{ color: 'var(--header-text)' }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="font-medium py-2 transition-colors" style={{ color: 'var(--header-text)' }}>
              Início
            </a>
            <a href="#roadmap" onClick={(e) => scrollToSection(e, '#roadmap')} className="font-medium py-2 transition-colors" style={{ color: 'var(--header-text)' }}>
              Roadmap
            </a>
            <a href="#recursos" onClick={(e) => scrollToSection(e, '#recursos')} className="font-medium py-2 transition-colors" style={{ color: 'var(--header-text)' }}>
              Recursos
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
