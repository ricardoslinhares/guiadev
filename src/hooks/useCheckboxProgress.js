import { useState, useEffect } from 'react';
import { roadmapPhases } from '../data/roadmapData';

/**
 * Hook personalizado para gerenciar progresso dos checkboxes do roadmap
 *
 * Funcionalidades:
 * - Salva/carrega estado no LocalStorage
 * - Calcula progresso por fase e total
 * - Permite reset do progresso
 *
 * @returns {Object} Métodos e estado do progresso
 */
export function useCheckboxProgress() {
  // Estado: armazena status de todos os checkboxes
  // Formato: { "phase_1_checkpoint_0": true, "phase_1_checkpoint_1": false, ... }
  const [progress, setProgress] = useState({});

  // Constante: prefixo para chaves no LocalStorage
  const STORAGE_PREFIX = 'devguide_phase_';

  /**
   * Gera chave única para identificar cada checkpoint
   * @param {number} phaseNumber - Número da fase (1-4)
   * @param {number} checkpointIndex - Índice do checkpoint (0-N)
   * @returns {string} Chave única
   */
  const getCheckpointKey = (phaseNumber, checkpointIndex) => {
    return `${STORAGE_PREFIX}${phaseNumber}_checkpoint_${checkpointIndex}`;
  };

  /**
   * Carrega progresso existente do LocalStorage
   * Percorre todas as fases e checkpoints, carregando seus estados
   */
  const loadProgress = () => {
    const loadedProgress = {};

    roadmapPhases.forEach((phase) => {
      phase.checkpoints.forEach((_, checkpointIndex) => {
        const key = getCheckpointKey(phase.number, checkpointIndex);
        const storedValue = localStorage.getItem(key);

        // Converte string "true"/"false" para boolean
        loadedProgress[key] = storedValue === 'true';
      });
    });

    setProgress(loadedProgress);
  };

  /**
   * Salva estado de um checkpoint específico
   * @param {number} phaseNumber - Número da fase
   * @param {number} checkpointIndex - Índice do checkpoint
   * @param {boolean} isChecked - Se está marcado ou não
   */
  const saveCheckpoint = (phaseNumber, checkpointIndex, isChecked) => {
    const key = getCheckpointKey(phaseNumber, checkpointIndex);

    // Salva no LocalStorage
    localStorage.setItem(key, String(isChecked));

    // Atualiza estado do React
    setProgress((prev) => ({
      ...prev,
      [key]: isChecked,
    }));
  };

  /**
   * Verifica se um checkpoint específico está marcado
   * @param {number} phaseNumber - Número da fase
   * @param {number} checkpointIndex - Índice do checkpoint
   * @returns {boolean} True se marcado, false caso contrário
   */
  const isCheckpointChecked = (phaseNumber, checkpointIndex) => {
    const key = getCheckpointKey(phaseNumber, checkpointIndex);
    return progress[key] || false;
  };

  /**
   * Calcula percentual de conclusão de uma fase específica
   * @param {number} phaseNumber - Número da fase (1-4)
   * @returns {number} Percentual de 0 a 100
   */
  const calculatePhaseProgress = (phaseNumber) => {
    const phase = roadmapPhases.find((p) => p.number === phaseNumber);
    if (!phase) return 0;

    const totalCheckpoints = phase.checkpoints.length;
    const completedCheckpoints = phase.checkpoints.filter((_, index) => {
      return isCheckpointChecked(phaseNumber, index);
    }).length;

    return Math.round((completedCheckpoints / totalCheckpoints) * 100);
  };

  /**
   * Calcula percentual de conclusão total do roadmap
   * @returns {number} Percentual de 0 a 100
   */
  const calculateTotalProgress = () => {
    let totalCheckpoints = 0;
    let completedCheckpoints = 0;

    roadmapPhases.forEach((phase) => {
      totalCheckpoints += phase.checkpoints.length;

      phase.checkpoints.forEach((_, index) => {
        if (isCheckpointChecked(phase.number, index)) {
          completedCheckpoints++;
        }
      });
    });

    if (totalCheckpoints === 0) return 0;
    return Math.round((completedCheckpoints / totalCheckpoints) * 100);
  };

  /**
   * Retorna contagem de checkpoints concluídos e total
   * @returns {Object} { completed: number, total: number }
   */
  const getCheckpointCounts = () => {
    let total = 0;
    let completed = 0;

    roadmapPhases.forEach((phase) => {
      total += phase.checkpoints.length;

      phase.checkpoints.forEach((_, index) => {
        if (isCheckpointChecked(phase.number, index)) {
          completed++;
        }
      });
    });

    return { completed, total };
  };

  /**
   * Reset completo do progresso
   * Remove todos os dados do LocalStorage e reseta estado
   */
  const resetProgress = () => {
    // Remove todas as chaves do LocalStorage que começam com nosso prefixo
    Object.keys(localStorage)
      .filter((key) => key.startsWith(STORAGE_PREFIX))
      .forEach((key) => localStorage.removeItem(key));

    // Reseta estado
    setProgress({});
  };

  // useEffect: Carrega progresso ao montar o componente
  useEffect(() => {
    loadProgress();
  }, []);

  // Retorna API do hook
  return {
    progress, // Estado completo
    saveCheckpoint, // Salvar checkpoint
    isCheckpointChecked, // Verificar se está marcado
    calculatePhaseProgress, // Calcular % de uma fase
    calculateTotalProgress, // Calcular % total
    getCheckpointCounts, // Obter contadores
    resetProgress, // Reset completo
  };
}
