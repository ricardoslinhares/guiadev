import { Moon, Sun } from 'lucide-react';
import { trackThemeChange } from '../../utils/analytics';

/**
 * Componente Toggle de Tema (Dark/Light)
 *
 * Visual: Botão com ícone animado
 * - Dark mode: ícone de Lua 🌙
 * - Light mode: ícone de Sol ☀️
 *
 * @param {boolean} isDark - Se está em dark mode
 * @param {function} onToggle - Função para alternar tema
 */
function ThemeToggle({ isDark, onToggle }) {
  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    trackThemeChange(newTheme);
    onToggle();
  };

  return (
    <button onClick={handleToggle} className="theme-toggle-btn p-2.5 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95" aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'} title={isDark ? 'Tema Claro ☀️' : 'Tema Escuro 🌙'}>
      {/* Ícone com animação de rotação */}
      <div className="relative w-5 h-5">{isDark ? <Moon size={20} className="text-blue-400 animate-theme-icon" strokeWidth={2} /> : <Sun size={20} className="text-yellow-500 animate-theme-icon" strokeWidth={2} />}</div>
    </button>
  );
}

export default ThemeToggle;
