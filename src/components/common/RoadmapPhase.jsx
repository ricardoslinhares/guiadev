import { useState, useEffect } from 'react';
import { Target, ChevronDown } from 'lucide-react';
import CheckpointWithLink from './CheckpointWithLink';

/**
 * Componente de Fase do Roadmap
 * ✅ ATUALIZADO: Acordeon mobile + mini progress (mantém estrutura)
 */
function RoadmapPhase({ number, title, description, checkpoints, project, checkboxProgress }) {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Mobile: todas as fases fechadas por padrão
      if (mobile) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [number]);

  const handleToggle = (e) => {
    e.preventDefault();
    if (isMobile) {
      // Fechar outras fases
      document.querySelectorAll('.roadmap-phase-wrapper').forEach((phase) => {
        if (phase.dataset.phaseNumber !== String(number)) {
          phase.classList.remove('expanded');
        }
      });
      setExpanded(!expanded);
    }
  };

  // Calcular progresso da fase localmente
  const calculatePhaseProgress = () => {
    let completed = 0;
    let total = checkpoints.length;

    checkpoints.forEach((_, index) => {
      const key = `devguide_phase_${number}_checkpoint_${index}`;
      const isChecked = localStorage.getItem(key) === 'true';
      if (isChecked) completed++;
    });

    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const phaseProgress = calculatePhaseProgress();

  return (
    <div
      className="roadmap-phase-wrapper mb-12 flex gap-6"
      data-phase-number={number}
      style={{
        flexDirection: isMobile && expanded === false ? 'column' : 'row',
      }}
    >
      {/* Círculo numerado - sempre visível no desktop */}
      <div className="flex-shrink-0" style={{ display: isMobile ? 'none' : 'block' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg relative z-10">{number}</div>
      </div>

      {/* Conteúdo */}
      <div className="flex-grow w-full">
        {/* MOBILE: Header clicável com chevron e mini progress */}
        {isMobile && (
          <button
            onClick={handleToggle}
            className="w-full text-left transition-all rounded-2xl p-4 border-2"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: expanded ? 'var(--primary)' : 'var(--border-default)',
            }}
          >
            <div className="flex items-center gap-3">
              <ChevronDown
                size={20}
                style={{
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  color: 'var(--primary)',
                }}
              />
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{number}</div>
              <div className="flex-grow">
                <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                  {title}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    {phaseProgress}%
                  </span>
                  <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        width: `${phaseProgress}%`,
                        backgroundColor: 'var(--primary)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </button>
        )}

        {/* DESKTOP: Header normal (sem clique) */}
        {!isMobile && (
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h3>
          </div>
        )}

        {/* CONTEÚDO: renderiza sempre no desktop, condicional no mobile */}
        {(expanded || !isMobile) && (
          <div
            className="rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              marginTop: isMobile ? '8px' : '0px',
            }}
          >
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {description}
            </p>

            {/* Checkpoints */}
            <div className="space-y-1 mb-6">
              {checkpoints.map((checkpoint, index) => (
                <CheckpointWithLink key={index} label={checkpoint.label} resources={checkpoint.resources} phaseNumber={number} checkpointIndex={index} checkboxProgress={checkboxProgress} />
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
        )}
      </div>
    </div>
  );
}

export default RoadmapPhase;
