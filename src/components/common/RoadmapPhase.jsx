import { Target } from 'lucide-react';
import CheckpointWithLink from './CheckpointWithLink';

/**
 * Componente de Fase do Roadmap
 *
 * ✅ CORRIGIDO: Passa a prop 'resources' (não resourceTitle, resourceUrl separados)
 * ✅ ATUALIZADO: Suporta múltiplos recursos por checkpoint
 * ✅ DARK THEME FIXED: Usa CSS variables ao invés de classes Tailwind hardcoded
 * ✅ MOBILE OPTIMIZED: Layout vertical em telas pequenas, horizontal em telas grandes
 *
 * @param {number} number - Número da fase
 * @param {string} title - Título da fase
 * @param {string} description - Descrição da fase
 * @param {Array} checkpoints - Array de checkpoints com recursos linkados
 * @param {Object} project - Objeto com informações do projeto prático
 */
function RoadmapPhase({ number, title, description, checkpoints, project }) {
  return (
    <div className="mb-12 flex flex-col md:flex-row gap-6">
      {/* Círculo numerado - Centralizado no mobile, à esquerda no desktop */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg relative z-10">{number}</div>
      </div>

      {/* Conteúdo - USA CSS VARIABLES */}
      <div
        className="flex-grow rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
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

        {/* Checkpoints COM LINKS - CORRIGIDO */}
        <div className="space-y-1 mb-6">
          {checkpoints.map((checkpoint, index) => (
            <CheckpointWithLink
              key={index}
              label={checkpoint.label}
              resources={checkpoint.resources} // ✅ CORRIGIDO: passa o objeto/array resources completo
            />
          ))}
        </div>

        {/* Projeto - USA CSS VARIABLES */}
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
