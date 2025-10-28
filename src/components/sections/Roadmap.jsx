import RoadmapPhase from '../common/RoadmapPhase';
import { roadmapPhases } from '../../data/roadmapData';
import { useCheckboxProgress } from '../../hooks/useCheckboxProgress'; // ✨ NOVO IMPORT

/**
 * Componente Roadmap
 * ✅ ATUALIZADO: Integrado com sistema de progresso LocalStorage
 */
function Roadmap() {
  // ✨ NOVO: Inicializar hook de progresso
  const checkboxProgress = useCheckboxProgress();

  return (
    <section id="roadmap" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            🗺️ Roadmap Progressivo
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Este é o caminho validado pela comunidade. <strong style={{ color: 'var(--text-primary)' }}>Não pule etapas.</strong> Cada fase prepara para a próxima.
          </p>
        </div>

        {/* Timeline com progresso */}
        <div className="relative timeline-line">
          {roadmapPhases.map((phase, index) => (
            <div key={index} id={`fase-${phase.number}`}>
              <RoadmapPhase
                {...phase}
                checkboxProgress={checkboxProgress} // ✨ NOVO: Passar hook
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
