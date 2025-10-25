import { useState, useEffect } from 'react';
import { ArrowUp, Milestone } from 'lucide-react';

/**
 * Navegação Flutuante com Dois Botões
 *
 * ✅ Botão 1: Por Onde Começar (ícone bússola, cor verde)
 * ✅ Botão 2: Voltar ao Topo (ícone seta, cor azul)
 *
 * - Aparecem após scroll > 300px
 * - Apenas no desktop (hidden no mobile)
 * - Canto inferior direito, empilhados verticalmente
 * - Animações suaves no hover
 */
function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      const offset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: sectionId === 'inicio' ? 0 : offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50 hidden md:flex">
          {/* Botão: Por Onde Começar */}
          <button
            onClick={() => scrollToSection('por-onde-comecar')}
            className="p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group"
            style={{
              backgroundColor: '#10b981', // Verde
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(16, 185, 129, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
            }}
            aria-label="Ir para Por Onde Começar"
            title="Por Onde Começar 🧭"
          >
            <Milestone size={24} />

            {/* Tooltip no hover */}
            <span
              className="absolute right-full mr-3 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                backgroundColor: '#10b981',
                color: 'white',
              }}
            >
              Por Onde Começar
            </span>
          </button>

          {/* Botão: Voltar ao Topo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group"
            style={{
              backgroundColor: 'var(--primary)', // Azul (tema)
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(59, 130, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
            }}
            aria-label="Voltar ao topo"
            title="Voltar ao Topo ↑"
          >
            <ArrowUp size={24} />

            {/* Tooltip no hover */}
            <span
              className="absolute right-full mr-3 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'white',
              }}
            >
              Voltar ao Topo
            </span>
          </button>
        </div>
      )}
    </>
  );
}

export default FloatingNav;
