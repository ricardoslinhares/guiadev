import { Rocket, FileText, Users, Briefcase, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useSectionTracking';

const passos = [
  {
    id: 1,
    icon: FileText,
    title: 'Monte seu Portfólio',
    description: 'Seu portfólio é seu cartão de visitas. Mostre projetos reais, não apenas tutoriais.',
    dicas: [
      'Tenha de 3 a 5 projetos bem documentados',
      'Inclua README detalhado em cada projeto',
      'Mostre projetos com diferentes tecnologias',
      'Adicione link para o deploy (não só código)',
    ],
    recursos: [
      { title: 'GitHub Profile README Generator', url: 'https://rahuldkjain.github.io/gh-profile-readme-generator/' },
      { title: 'Como criar portfólio dev', url: 'https://www.devmedia.com.br/como-criar-um-portfolio-de-programador/43262' },
    ],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 2,
    icon: Briefcase,
    title: 'Prepare seu Currículo',
    description: 'Currículo de dev é diferente. Foque em habilidades técnicas e projetos.',
    dicas: [
      'Máximo 1-2 páginas',
      'Liste tecnologias que realmente domina',
      'Inclua links do GitHub e LinkedIn',
      'Descreva projetos com resultados mensuráveis',
    ],
    recursos: [
      { title: 'Template de CV para devs', url: 'https://www.overleaf.com/latex/templates/tagged/cv' },
      { title: 'Dicas de currículo tech', url: 'https://www.hostinger.com/br/tutoriais/curriculo-programador' },
    ],
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 3,
    icon: MessageSquare,
    title: 'Prepare-se para Entrevistas',
    description: 'Entrevistas técnicas têm formato próprio. Praticar é essencial.',
    dicas: [
      'Estude estrutura de dados básicas',
      'Pratique problemas no LeetCode/HackerRank',
      'Saiba explicar seus projetos em detalhes',
      'Prepare perguntas para fazer ao entrevistador',
    ],
    recursos: [
      { title: 'NeetCode - Roadmap de entrevistas', url: 'https://neetcode.io/roadmap' },
      { title: 'Tech Interview Handbook', url: 'https://www.techinterviewhandbook.org/' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    icon: Users,
    title: 'Construa sua Rede',
    description: 'Networking abre mais portas que você imagina. Participe da comunidade.',
    dicas: [
      'Participe de comunidades no Discord',
      'Contribua em projetos open source',
      'Vá a meetups e eventos (presenciais ou online)',
      'Compartilhe seu aprendizado no LinkedIn',
    ],
    recursos: [
      { title: 'He4rt Developers (Discord BR)', url: 'https://discord.gg/he4rt' },
      { title: 'Guia de Open Source', url: 'https://opensource.guide/pt/' },
    ],
    color: 'from-orange-500 to-red-500',
  },
];

const plataformas = [
  { nome: 'LinkedIn', url: 'https://linkedin.com/jobs', tipo: 'Vagas e networking' },
  { nome: 'GitHub Jobs', url: 'https://github.com/trending', tipo: 'Open source e visibilidade' },
  { nome: 'Glassdoor', url: 'https://glassdoor.com.br', tipo: 'Vagas e salários' },
  { nome: 'Programathor', url: 'https://programathor.com.br', tipo: 'Vagas para devs BR' },
  { nome: 'GeekHunter', url: 'https://geekhunter.com.br', tipo: 'Recrutamento tech' },
];

function PassoCard({ passo }) {
  const Icon = passo.icon;

  return (
    <div
      className="rounded-2xl p-6 h-full"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${passo.color} flex items-center justify-center mb-4`}>
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {passo.title}
      </h3>

      <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
        {passo.description}
      </p>

      <ul className="space-y-2 mb-4">
        {passo.dicas.map((dica, index) => (
          <li key={index} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <ArrowRight size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--primary)' }} />
            {dica}
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
        <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-tertiary)' }}>
          RECURSOS:
        </p>
        <div className="space-y-1">
          {passo.recursos.map((recurso, index) => (
            <a
              key={index}
              href={recurso.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:underline"
              style={{ color: 'var(--primary)' }}
            >
              <ExternalLink size={12} />
              {recurso.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProximosPassos() {
  const sectionRef = useSectionTracking('Próximos Passos');

  return (
    <section
      ref={sectionRef}
      id="proximos-passos"
      className="py-20"
      style={{ backgroundColor: 'var(--bg-tertiary)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <Rocket size={18} style={{ color: 'var(--primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
              Após o Roadmap
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Próximos Passos
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Completou o roadmap? Agora é hora de entrar no mercado de trabalho.
          </p>
        </div>

        {/* Cards dos passos */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {passos.map((passo) => (
            <PassoCard key={passo.id} passo={passo} />
          ))}
        </div>

        {/* Plataformas de vagas */}
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <h3 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
            Onde Encontrar Vagas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {plataformas.map((plataforma, index) => (
              <a
                key={index}
                href={plataforma.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl text-center transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              >
                <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {plataforma.nome}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {plataforma.tipo}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProximosPassos;
