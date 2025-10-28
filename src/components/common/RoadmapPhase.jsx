import { Target } from 'lucide-react';
import CheckpointWithLink from './CheckpointWithLink';

/**
 * Componente de Fase do Roadmap
 * ✅ ATUALIZADO: Passa progresso para checkpoints
 */
function RoadmapPhase({
  number,
  title,
  description,
  checkpoints,
  project,
  checkboxProgress, // ✨ NOVO PROP
}) {
  return (
    <div className="mb-12 flex gap-6">
      {/* Círculo numerado */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg relative z-10">{number}</div>
      </div>

      {/* Conteúdo */}
      <div
        className="flex-grow rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
        style={{
          backgroundColor: 'var(--bg-secondary)',
        }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        {/* Checkpoints COM PROGRESSO */}
        <div className="space-y-1 mb-6">
          {checkpoints.map((checkpoint, index) => (
            <CheckpointWithLink
              key={index}
              label={checkpoint.label}
              resources={checkpoint.resources}
              phaseNumber={number} // ✨ NOVO
              checkpointIndex={index} // ✨ NOVO
              checkboxProgress={checkboxProgress} // ✨ NOVO
            />
          ))}
        </div>

        {/* Projeto */}
        {project && (
          <div
            className="border-l-4 p-6 rounded-r-lg"
            style={{
              backgroundColor: 'var(--project-bg)',
              borderColor: 'var(--project-border)',
            }}
          >
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Target size={20} style={{ color: 'var(--warning)' }} />
              <span>Projeto: {project.title}</span>
            </h4>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoadmapPhase;
