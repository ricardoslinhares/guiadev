import { ArrowRight, Target, Zap, Rocket } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useSectionTracking';

/**
 * Seção "Por Onde Começar?"
 *
 * ✅ ATUALIZADO:
 * - Removidos emojis (apenas ícones Lucide React)
 * - Card de detalhes reorganizado verticalmente para melhor legibilidade
 * - Layout mais limpo e espaçado
 * - CORRIGIDO: Card "Mudança de Carreira" agora vai direto para Fase 4
 */
function PorOndeComecar() {
  const sectionRef = useSectionTracking('Por Onde Começar');
  const profiles = [
    {
      id: 'beginner',
      icon: Target,
      title: 'Começando do Zero',
      subtitle: 'Nunca programei antes',
      description: 'Seu foco agora é entender como computadores "pensam". Comece pela lógica de programação antes de escolher qualquer linguagem.',
      phase: 'Fase 1: Lógica de Programação',
      resource: 'Curso em Vídeo (Gustavo Guanabara)',
      timeEstimate: '2-4 meses',
      action: 'Ir para Fase 1',
      scrollTo: 'fase-1',
      color: 'blue',
      colorBg: 'rgba(59, 130, 246, 0.1)',
      colorIcon: '#3b82f6',
      colorButton: '#3b82f6',
    },
    {
      id: 'intermediate',
      icon: Zap,
      title: 'Já Sei Lógica',
      subtitle: 'Entendo algoritmos básicos',
      description: 'Hora de escolher sua primeira linguagem (Python OU JavaScript) e aprender Git. Não tente aprender tudo ao mesmo tempo.',
      phase: 'Fase 2: Linguagem + Git',
      resource: 'Escolha: Python.org ou JavaScript.info',
      timeEstimate: '3-5 meses',
      action: 'Ir para Fase 2',
      scrollTo: 'fase-2',
      color: 'purple',
      colorBg: 'rgba(139, 92, 246, 0.1)',
      colorIcon: '#8b5cf6',
      colorButton: '#8b5cf6',
    },
    {
      id: 'career-change',
      icon: Rocket,
      title: 'Mudança de Carreira',
      subtitle: 'Migrando para tech',
      description: 'Acelere seu aprendizado focando em portfolio, SQL e Git. Pule o básico se já tem experiência com lógica em outras áreas.',
      phase: 'Fase 4: Portfolio + Job Ready',
      resource: 'Frontend Mentor + GitHub',
      timeEstimate: '4-6 meses (acelerado)',
      action: 'Ir para Fase 4',
      scrollTo: 'fase-4', // ✅ CORRIGIDO: Vai direto para Fase 4
      color: 'green',
      colorBg: 'rgba(16, 185, 129, 0.1)',
      colorIcon: '#10b981',
      colorButton: '#10b981',
    },
  ];

  const handleScrollTo = (targetId) => {
    const element = document.querySelector(`#${targetId}`);
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
    <section ref={sectionRef} id="por-onde-comecar" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            🎯 Por Onde Começar?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Escolha o ponto de partida que corresponde ao seu perfil atual. Cada caminho leva ao mesmo destino: você como desenvolvedor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile) => {
            const IconComponent = profile.icon;

            return (
              <div
                key={profile.id}
                className="rounded-2xl p-8 transition-all duration-300 cursor-pointer group border-2 h-full flex flex-col"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-default)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-default)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={() => handleScrollTo(profile.scrollTo)}
              >
                {/* Ícone único (removido emoji) */}
                <div className="mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: profile.colorBg,
                    }}
                  >
                    <IconComponent size={32} style={{ color: profile.colorIcon }} />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {profile.title}
                </h3>

                {/* Subtítulo */}
                <p className="text-sm mb-4 font-medium" style={{ color: 'var(--text-tertiary)' }}>
                  {profile.subtitle}
                </p>

                {/* Descrição */}
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {profile.description}
                </p>

                <div className="mt-auto">
                  {/* Detalhes - Layout vertical melhorado */}
                  <div className="p-5 rounded-xl mb-6 space-y-4" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    {/* Início */}
                    <div className="pb-3 border-b" style={{ borderColor: 'var(--border-default)' }}>
                      <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>
                        Início
                      </div>
                      <div className="text-base font-semibold" style={{ color: 'var(--text-accent)' }}>
                        {profile.phase}
                      </div>
                    </div>

                    {/* Recurso */}
                    <div className="pb-3 border-b" style={{ borderColor: 'var(--border-default)' }}>
                      <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>
                        Recurso Recomendado
                      </div>
                      <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {profile.resource}
                      </div>
                    </div>

                    {/* Tempo */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>
                        Tempo Estimado
                      </div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {profile.timeEstimate}
                      </div>
                    </div>
                  </div>

                  {/* Botão CTA */}
                  <button
                    className="w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      backgroundColor: profile.colorButton,
                      color: 'white',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScrollTo(profile.scrollTo);
                    }}
                  >
                    {profile.action}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota de rodapé */}
        <div
          className="mt-12 text-center p-6 rounded-xl border-2"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-default)',
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            💡 <strong style={{ color: 'var(--text-primary)' }}>Dica:</strong> Não existe caminho "errado". Escolha onde você se sente mais confortável para começar. Você sempre pode ajustar a rota depois.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PorOndeComecar;
