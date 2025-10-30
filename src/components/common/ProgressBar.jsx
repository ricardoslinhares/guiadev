import { useState, useEffect } from 'react';
import { Trophy, Zap } from 'lucide-react';
import { roadmapPhases } from '../../data/roadmapData';

function ProgressBar() {
  const [data, setData] = useState({
    completed: 0,
    total: 0,
    percentage: 0,
    milestone: null,
  });

  // Calcular direto do localStorage
  const calculateFromLocalStorage = () => {
    let completed = 0;
    let total = 0;

    roadmapPhases.forEach((phase) => {
      phase.checkpoints.forEach((_, index) => {
        total++;
        const key = `devguide_phase_${phase.number}_checkpoint_${index}`;
        const isChecked = localStorage.getItem(key) === 'true';
        if (isChecked) completed++;
      });
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    let milestone = null;
    if (percentage === 100) milestone = 'complete';
    else if (percentage >= 75) milestone = 'three-quarters';
    else if (percentage >= 50) milestone = 'half';
    else if (percentage >= 25) milestone = 'quarter';

    setData({ completed, total, percentage, milestone });
  };

  useEffect(() => {
    // Calcular na montagem
    calculateFromLocalStorage();

    // Recalcular quando evento disparar
    window.addEventListener('progress-updated', calculateFromLocalStorage);

    return () => {
      window.removeEventListener('progress-updated', calculateFromLocalStorage);
    };
  }, []);

  const { completed, total, percentage, milestone } = data;

  if (completed === 0) {
    return null;
  }

  const getMilestoneMessage = () => {
    switch (milestone) {
      case 'quarter':
        return '🎯 25% do caminho! Parabéns pelo início!';
      case 'half':
        return '⭐ 50% concluído! Você está no meio!';
      case 'three-quarters':
        return '🔥 75%! Está quase chegando ao final!';
      case 'complete':
        return '🏆 100% Completo! Você está pronto!';
      default:
        return `📈 ${percentage}% de progresso`;
    }
  };

  const getBarColor = () => {
    if (percentage < 25) return '#3b82f6';
    if (percentage < 50) return '#8b5cf6';
    if (percentage < 75) return '#f59e0b';
    return '#10b981';
  };

  return (
    <div
      className="sticky top-[64px] z-40 transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            {milestone === 'complete' ? <Trophy size={24} className="text-green-500 animate-bounce" /> : <Zap size={24} className="text-blue-500" />}
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {getMilestoneMessage()}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                {completed} de {total} checkpoints concluídos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-1 md:flex-none md:w-64">
            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <div
                className="h-full transition-all duration-500 ease-out"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: getBarColor(),
                }}
              />
            </div>
            <div className="text-sm font-bold min-w-[45px] text-right" style={{ color: getBarColor() }}>
              {percentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
