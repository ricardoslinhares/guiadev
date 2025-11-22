import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useSectionTracking';

const perguntas = [
  {
    id: 1,
    pergunta: 'Qual linguagem de programação devo escolher primeiro?',
    resposta: 'Para iniciantes, recomendamos Python ou JavaScript. Python é mais simples e legível, ótimo para lógica e backend. JavaScript é essencial para web e permite criar tanto frontend quanto backend. Escolha UMA e vá até o fim antes de aprender outra.',
    categoria: 'inicio',
  },
  {
    id: 2,
    pergunta: 'Quanto tempo leva para conseguir o primeiro emprego?',
    resposta: 'Depende muito da sua dedicação e contexto. Em média, com estudo consistente de 3-4 horas por dia, iniciantes conseguem seu primeiro emprego em 6 a 12 meses. O segredo é ter projetos reais no portfólio e não apenas certificados.',
    categoria: 'carreira',
  },
  {
    id: 3,
    pergunta: 'Preciso de faculdade para ser programador?',
    resposta: 'Não é obrigatório, mas pode ajudar. Muitas empresas contratam sem diploma, focando em habilidades práticas. Porém, faculdade oferece networking, fundamentos teóricos e pode abrir portas em empresas tradicionais. Avalie seu contexto.',
    categoria: 'carreira',
  },
  {
    id: 4,
    pergunta: 'Bootcamp vale a pena?',
    resposta: 'Depende do bootcamp e do seu perfil. Bootcamps bons aceleram o aprendizado com estrutura e mentoria. Porém, são caros e intensos. Se você tem disciplina para estudar sozinho, cursos gratuitos + projetos próprios funcionam igualmente bem.',
    categoria: 'estudo',
  },
  {
    id: 5,
    pergunta: 'Inglês é realmente necessário?',
    resposta: 'Sim, especialmente para crescer na carreira. A maior parte da documentação, comunidades e vagas remotas internacionais exigem inglês. Comece com inglês técnico (leitura) e vá evoluindo. Não precisa ser fluente no início.',
    categoria: 'carreira',
  },
  {
    id: 6,
    pergunta: 'Devo aprender framework ou linguagem primeiro?',
    resposta: 'Sempre a linguagem primeiro! Frameworks (React, Django, etc.) são ferramentas que facilitam o trabalho, mas você precisa entender a base. Aprenda JavaScript bem antes de React. Python bem antes de Django. Isso evita frustração.',
    categoria: 'estudo',
  },
  {
    id: 7,
    pergunta: 'Como sei se estou pronto para me candidatar a vagas?',
    resposta: 'Você está pronto quando: 1) Tem 2-3 projetos próprios funcionando e deployados, 2) Consegue resolver problemas básicos sem copiar código, 3) Entende Git e trabalho em equipe, 4) Consegue explicar seu código. Não espere se sentir 100% pronto - nunca vai acontecer!',
    categoria: 'carreira',
  },
  {
    id: 8,
    pergunta: 'Vale a pena contribuir em open source?',
    resposta: 'Sim! Open source é ótimo para ganhar experiência real, aparecer para recrutadores e aprender boas práticas. Comece com issues marcadas como "good first issue". Não precisa ser código - documentação e tradução também contam.',
    categoria: 'carreira',
  },
  {
    id: 9,
    pergunta: 'Qual área da programação paga melhor?',
    resposta: 'Áreas como DevOps, Segurança, Machine Learning e Backend Sênior geralmente pagam mais. Porém, focar só em salário no início é um erro. Escolha uma área que você goste - vai ser mais fácil se dedicar e crescer naturalmente.',
    categoria: 'carreira',
  },
  {
    id: 10,
    pergunta: 'Como lidar com a frustração de não entender algo?',
    resposta: 'É completamente normal! Programação é difícil e todo dev passa por isso. Dicas: 1) Faça pausas quando travar, 2) Tente explicar o problema em voz alta, 3) Peça ajuda em comunidades, 4) Divida o problema em partes menores. A frustração é parte do processo de aprendizado.',
    categoria: 'mindset',
  },
];

const categorias = {
  inicio: { label: 'Começando', color: 'bg-blue-100 text-blue-800' },
  estudo: { label: 'Estudos', color: 'bg-green-100 text-green-800' },
  carreira: { label: 'Carreira', color: 'bg-purple-100 text-purple-800' },
  mindset: { label: 'Mindset', color: 'bg-orange-100 text-orange-800' },
};

function FAQItem({ item, isOpen, onToggle }) {
  const categoria = categorias[item.categoria];

  return (
    <div
      className="border-b last:border-b-0 transition-all"
      style={{ borderColor: 'var(--border-default)' }}
    >
      <button
        onClick={onToggle}
        className="w-full py-5 px-4 text-left flex items-start gap-4"
      >
        <MessageCircle
          size={20}
          className="mt-1 flex-shrink-0"
          style={{ color: isOpen ? 'var(--primary)' : 'var(--text-tertiary)' }}
        />
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full ${categoria.color}`}>
              {categoria.label}
            </span>
          </div>
          <h3
            className="font-semibold text-lg"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.pergunta}
          </h3>
        </div>
        <ChevronDown
          size={20}
          className="mt-1 flex-shrink-0 transition-transform duration-300"
          style={{
            color: 'var(--text-tertiary)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {isOpen && (
        <div className="px-4 pb-5 pl-12">
          <p
            className="leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {item.resposta}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const sectionRef = useSectionTracking('FAQ');
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <HelpCircle size={18} style={{ color: 'var(--primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
              Dúvidas Frequentes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            FAQ
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Respostas para as perguntas mais comuns de quem está começando.
          </p>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          {perguntas.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: 'var(--text-tertiary)' }}>
          Não encontrou sua dúvida? Entre em contato pelo{' '}
          <a
            href="https://github.com/ricardoslinhares/guiadev/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: 'var(--primary)' }}
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

export default FAQ;
