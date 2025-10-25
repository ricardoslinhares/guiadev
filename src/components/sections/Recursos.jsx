import { useState } from 'react';
import ResourceCard from '../common/ResourceCard';

function Recursos() {
  const [activeTab, setActiveTab] = useState('logica');

  const categories = {
    logica: {
      title: '🧠 Lógica de Programação',
      resources: [
        {
          title: '🎥 Curso em Vídeo - Lógica',
          provider: 'Gustavo Guanabara • VisualG + Portugol',
          description: 'Referência nacional. Gratuito. Em português. O melhor ponto de partida.',
          url: 'https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV',
          isFeatured: true,
        },
        {
          title: '💻 Beecrowd',
          provider: 'Plataforma de exercícios',
          description: 'Pratique com problemas reais. Feedback automático.',
          url: 'https://judge.beecrowd.com/',
        },
        {
          title: '🎓 CS50 - Harvard',
          provider: 'Introdução à Ciência da Computação',
          description: 'Legendas em PT-BR. Grátis. Nível mundial.',
          url: 'https://cs50.harvard.edu/x/',
        },
      ],
    },
    python: {
      title: '🐍 Python',
      resources: [
        {
          title: '🎥 Curso em Vídeo - Python',
          provider: 'Gustavo Guanabara • Mundo 1, 2 e 3',
          description: 'Do zero ao avançado. Didática impecável.',
          url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6',
          isFeatured: true,
        },
        {
          title: '📖 Automate the Boring Stuff',
          provider: 'Livro + curso online',
          description: 'Aprenda Python fazendo coisas úteis do dia a dia.',
          url: 'https://automatetheboringstuff.com/',
        },
        {
          title: '📚 Documentação Oficial',
          provider: 'Python.org',
          description: 'Sempre consulte a fonte oficial.',
          url: 'https://docs.python.org/pt-br/3/',
        },
      ],
    },
    javascript: {
      title: '🟨 JavaScript',
      resources: [
        {
          title: '💻 FreeCodeCamp',
          provider: 'Plataforma interativa completa',
          description: 'Do zero ao avançado. Certificados gratuitos.',
          url: 'https://www.freecodecamp.org/',
          isFeatured: true,
        },
        {
          title: '📖 JavaScript.info',
          provider: 'Tutorial moderno e completo',
          description: 'Documentação de altíssima qualidade.',
          url: 'https://javascript.info/',
        },
        {
          title: '📚 MDN Web Docs',
          provider: 'Mozilla Developer Network',
          description: 'A Bíblia do JavaScript.',
          url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
        },
      ],
    },
    sql: {
      title: '🗄️ Banco de Dados (SQL)',
      resources: [
        {
          title: '💻 SQLBolt',
          provider: 'Aprenda SQL de forma interativa',
          description: 'Melhor forma de aprender SQL praticando.',
          url: 'https://sqlbolt.com/',
          isFeatured: true,
        },
        {
          title: '🎥 Curso em Vídeo - MySQL',
          provider: 'Gustavo Guanabara',
          description: 'SQL do zero com didática conhecida.',
          url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r',
        },
        {
          title: '📖 W3Schools SQL',
          provider: 'Referência rápida',
          description: 'Para consultar comandos específicos.',
          url: 'https://www.w3schools.com/sql/',
        },
      ],
    },
    git: {
      title: '🔧 Git & GitHub',
      resources: [
        {
          title: '🎥 Git e GitHub - Curso em Vídeo',
          provider: 'Gustavo Guanabara',
          description: 'Entenda Git de verdade, não só comandos.',
          url: 'https://www.youtube.com/watch?v=xEKo29OWILE&list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA',
          isFeatured: true,
        },
        {
          title: '📖 Pro Git Book',
          provider: 'Livro oficial do Git',
          description: 'Gratuito. Traduzido para português.',
          url: 'https://git-scm.com/book/pt-br/v2',
        },
        {
          title: '🎮 Learn Git Branching',
          provider: 'Aprenda Git jogando',
          description: 'Visualize branches de forma interativa.',
          url: 'https://learngitbranching.js.org/?locale=pt_BR',
        },
      ],
    },
  };

  const tabs = [
    { id: 'logica', label: '🧠 Lógica' },
    { id: 'python', label: '🐍 Python' },
    { id: 'javascript', label: '🟨 JavaScript' },
    { id: 'sql', label: '🗄️ SQL' },
    { id: 'git', label: '🔧 Git' },
  ];

  return (
    <section id="recursos" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            📚 Recursos Curados
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Máximo 3 opções por categoria. <strong style={{ color: 'var(--text-primary)' }}>Escolha 1 e vá até o fim.</strong>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 mb-8 border-b-2 scrollbar-hide" style={{ borderColor: 'var(--border-default)' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-3 font-semibold whitespace-nowrap transition-colors"
              style={{
                color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-secondary)',
                borderBottom: activeTab === tab.id ? '3px solid var(--primary)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = 'var(--primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories[activeTab].resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recursos;
