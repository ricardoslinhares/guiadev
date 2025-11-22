import { useState } from 'react';
import { AlertTriangle, ChevronDown, Repeat, Brain, Zap, GitCompare, Clock, CheckCircle } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useSectionTracking';

const armadilhas = [
  {
    id: 1,
    icon: Repeat,
    title: 'Tutorial Hell',
    description: 'Ficar preso em um ciclo infinito de tutoriais sem nunca criar projetos próprios.',
    sintomas: [
      'Assistiu 10+ cursos mas nunca fez um projeto do zero',
      'Sente que precisa de "só mais um tutorial" antes de começar',
      'Não consegue resolver problemas sem copiar código',
    ],
    solucao: 'Regra 70/30: 30% aprendendo, 70% praticando. Após cada conceito novo, crie algo, mesmo que simples.',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    icon: Brain,
    title: 'Síndrome do Impostor',
    description: 'Sentir que não é bom o suficiente, mesmo tendo conhecimento e resultados.',
    sintomas: [
      'Acha que todos sabem mais que você',
      'Atribui seu sucesso à sorte, não ao esforço',
      'Tem medo de ser "descoberto" como fraude',
    ],
    solucao: 'Documente seu progresso. Compare você de hoje com você de 6 meses atrás, não com outros devs.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Pular Fundamentos',
    description: 'Querer aprender frameworks antes de dominar a linguagem base.',
    sintomas: [
      'Quer aprender React sem saber JavaScript direito',
      'Não entende o que acontece "por baixo dos panos"',
      'Copia código sem entender o porquê',
    ],
    solucao: 'Fundamentos primeiro! JavaScript antes de React, Python antes de Django. A base forte acelera tudo depois.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 4,
    icon: GitCompare,
    title: 'Comparação Tóxica',
    description: 'Se comparar com devs experientes e se sentir inadequado.',
    sintomas: [
      'Segue devs no Twitter/LinkedIn e se sente atrasado',
      'Acha que deveria estar mais avançado',
      'Desanima vendo projetos complexos de outros',
    ],
    solucao: 'Cada pessoa tem seu ritmo e contexto. Foque na sua evolução, não na dos outros.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 5,
    icon: Clock,
    title: 'Querer Aprender Tudo',
    description: 'Tentar dominar várias tecnologias ao mesmo tempo.',
    sintomas: [
      'Estuda Python, JavaScript, Go e Rust ao mesmo tempo',
      'Começa muitos cursos mas não termina nenhum',
      'Não se sente especialista em nada',
    ],
    solucao: 'Escolha UMA stack e vá até o fim. Profundidade > Amplitude no início da carreira.',
    color: 'from-green-500 to-emerald-500',
  },
];

function ArmadilhaCard({ armadilha }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = armadilha.icon;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left flex items-start gap-4"
      >
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${armadilha.color} flex items-center justify-center flex-shrink-0`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
            {armadilha.title}
          </h3>
          <p style={{ color: 'var(--text-secondary)' }}>{armadilha.description}</p>
        </div>
        <ChevronDown
          size={24}
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            color: 'var(--text-tertiary)',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-4">
          <div className="pl-16">
            <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <AlertTriangle size={16} style={{ color: 'var(--warning)' }} />
              Sinais de alerta:
            </h4>
            <ul className="space-y-1">
              {armadilha.sintomas.map((sintoma, index) => (
                <li key={index} className="flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--warning)' }}>•</span>
                  {sintoma}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="ml-16 p-4 rounded-xl border-l-4"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--success)',
            }}
          >
            <h4 className="font-semibold mb-1 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <CheckCircle size={16} style={{ color: 'var(--success)' }} />
              Como evitar:
            </h4>
            <p style={{ color: 'var(--text-secondary)' }}>{armadilha.solucao}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ArmadilhasComuns() {
  const sectionRef = useSectionTracking('Armadilhas Comuns');

  return (
    <section
      ref={sectionRef}
      id="armadilhas"
      className="py-20"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <AlertTriangle size={18} style={{ color: 'var(--warning)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--warning)' }}>
              Atenção, iniciante!
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Armadilhas Comuns
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Erros que quase todo dev iniciante comete. Reconheça-os antes de cair neles.
          </p>
        </div>

        <div className="space-y-4">
          {armadilhas.map((armadilha) => (
            <ArmadilhaCard key={armadilha.id} armadilha={armadilha} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArmadilhasComuns;
