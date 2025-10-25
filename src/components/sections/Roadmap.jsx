import RoadmapPhase from '../common/RoadmapPhase';
import { roadmapPhases } from '../../data/roadmapData';

/**
 * Componente Roadmap
 * ATUALIZADO: Adicionados IDs para navegação específica por fase
 */
function Roadmap() {
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

        {/* Timeline com IDs para navegação */}
        <div className="relative timeline-line">
          {roadmapPhases.map((phase, index) => (
            <div key={index} id={`fase-${phase.number}`}>
              <RoadmapPhase {...phase} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
