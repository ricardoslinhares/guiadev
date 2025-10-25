import { ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToPorOndeComecar = () => {
    const element = document.querySelector('#por-onde-comecar');
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
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        background: 'var(--gradient-hero)',
      }}
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(139, 92, 246, 0.3)' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: 'white' }}>
          Guia de Sobrevivência
          <br className="hidden md:block" /> para Devs Iniciantes
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed" style={{ color: 'white' }}>
          Não é um curso. É uma bússola para não se perder no excesso de informações.
        </p>
        <button
          onClick={scrollToPorOndeComecar}
          className="px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: 'var(--primary)',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
          }}
        >
          Começar Agora
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
