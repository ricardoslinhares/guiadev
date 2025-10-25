import { useState, useEffect } from 'react';

/**
 * Hook personalizado para gerenciar tema (dark/light)
 *
 * Funcionalidades:
 * - Inicia com dark theme como padrão
 * - Salva preferência no localStorage
 * - Aplica classes CSS no <html>
 * - Fornece função de toggle
 *
 * @returns {Object} { theme, toggleTheme, isDark }
 */
export function useTheme() {
  // Estado do tema (dark ou light)
  const [theme, setTheme] = useState(() => {
    // Tenta carregar do localStorage
    const savedTheme = localStorage.getItem('devguide-theme');

    // Se não houver tema salvo, usa 'dark' como padrão
    return savedTheme || 'dark';
  });

  // Aplica o tema no <html> sempre que mudar
  useEffect(() => {
    const root = document.documentElement;

    // Remove classes antigas
    root.classList.remove('theme-dark', 'theme-light');

    // Adiciona classe do tema atual
    root.classList.add(`theme-${theme}`);

    // Salva no localStorage
    localStorage.setItem('devguide-theme', theme);

    // Atualiza meta theme-color para mobile
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0f172a' : '#ffffff');
    }
  }, [theme]);

  // Função para alternar tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Helper: verifica se está em dark mode
  const isDark = theme === 'dark';

  return {
    theme, // 'dark' ou 'light'
    toggleTheme, // Função para alternar
    isDark, // Boolean: true se dark
  };
}
