// 📊 DADOS DO ROADMAP COM RECURSOS LINKADOS
// ATUALIZADO: Link do JavaScript adicionado + suporte para múltiplos recursos por checkpoint

export const roadmapPhases = [
  {
    number: 1,
    title: 'Fundamentos: Lógica de Programação',
    description: 'Pensar como computador. Esta é a base de TUDO. Um dev experiente disse: "A habilidade mais subestimada é lógica de programação."',
    checkpoints: [
      {
        label: 'Entendo o que são variáveis, tipos de dados e operadores',
        resources: {
          resourceTitle: 'Curso em Vídeo - Lógica de Programação',
          resourceUrl: 'https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV',
          resourceLanguage: 'PT-BR',
          resourceType: 'video',
        },
      },
      {
        label: 'Consigo usar if/else para tomar decisões no código',
        resources: {
          resourceTitle: 'Curso em Vídeo - Estruturas Condicionais',
          resourceUrl: 'https://www.youtube.com/watch?v=_g05aHdBAEY&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&index=8',
          resourceLanguage: 'PT-BR',
          resourceType: 'video',
        },
      },
      {
        label: 'Entendo loops (for, while) e quando usar cada um',
        resources: {
          resourceTitle: 'Curso em Vídeo - Estruturas de Repetição',
          resourceUrl: 'https://www.youtube.com/watch?v=U5PnCt58Q68&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&index=10',
          resourceLanguage: 'PT-BR',
          resourceType: 'video',
        },
      },
      {
        label: 'Sei criar e usar funções básicas',
        resources: {
          resourceTitle: 'Curso em Vídeo - Funções',
          resourceUrl: 'https://www.youtube.com/watch?v=-nNx7e8GzHQ&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&index=14',
          resourceLanguage: 'PT-BR',
          resourceType: 'video',
        },
      },
      {
        label: 'Resolvi pelo menos 20 problemas de lógica (Beecrowd, HackerRank, etc)',
        resources: {
          resourceTitle: 'Beecrowd - Problemas Iniciantes',
          resourceUrl: 'https://judge.beecrowd.com/pt/problems/index/1',
          resourceLanguage: 'PT-BR',
          resourceType: 'interactive',
        },
      },
    ],
    project: {
      title: 'Calculadora no Terminal',
      description: 'Crie uma calculadora que pede dois números, a operação desejada, mostra o resultado e trata erros.',
    },
  },
  {
    number: 2,
    title: 'Primeira Linguagem + Git',
    description: 'Escolha Python OU JavaScript (não os dois ao mesmo tempo). Git/GitHub é obrigatório no mercado.',
    checkpoints: [
      {
        label: 'Domino a sintaxe básica da linguagem escolhida',
        // MÚLTIPLOS RECURSOS: Python E JavaScript
        resources: [
          {
            resourceTitle: 'Python: Curso em Vídeo - Mundo 1',
            resourceUrl: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6',
            resourceLanguage: 'PT-BR',
            resourceType: 'video',
          },
          {
            resourceTitle: 'JavaScript: Curso em Vídeo',
            resourceUrl: 'https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1',
            resourceLanguage: 'PT-BR',
            resourceType: 'video',
          },
        ],
      },
      {
        label: 'Sei trabalhar com listas/arrays e dicionários/objetos',
        resources: [
          {
            resourceTitle: 'Python: Listas',
            resourceUrl: 'https://www.youtube.com/watch?v=N1hTsbW50eM&list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH&index=8',
            resourceLanguage: 'PT-BR',
            resourceType: 'video',
          },
          {
            resourceTitle: 'Python: Dicionários',
            resourceUrl: 'https://www.youtube.com/watch?v=ZWj8o692qGY&list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH&index=22',
            resourceLanguage: 'PT-BR',
            resourceType: 'video',
          },
          {
            resourceTitle: 'JavaScript: Arrays',
            resourceUrl: 'https://www.youtube.com/watch?v=XdkW62tkAgU&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=29',
            resourceLanguage: 'PT-BR',
            resourceType: 'video',
          },
          {
            resourceTitle: 'JavaScript: Objetos',
            resourceUrl: 'https://www.youtube.com/watch?v=roP93FA-NgU&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=34',
            resourceLanguage: 'PT-BR',
            resourceType: 'video',
          },
        ],
      },
      {
        label: 'Entendo Git: commit, push, pull, branches',
        resources: {
          resourceTitle: 'Git e GitHub - Curso em Vídeo',
          resourceUrl: 'https://www.youtube.com/watch?v=xEKo29OWILE&list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA',
          resourceLanguage: 'PT-BR',
          resourceType: 'video',
        },
      },
      {
        label: 'Tenho conta no GitHub com pelo menos 3 repositórios',
        resources: {
          resourceTitle: 'GitHub - Criar Repositório',
          resourceUrl: 'https://docs.github.com/pt/get-started/quickstart/create-a-repo',
          resourceLanguage: 'PT-BR',
          resourceType: 'article',
        },
      },
      {
        label: 'Sei ler e escrever READMEs básicos',
        resources: {
          resourceTitle: 'Como Escrever um Bom README',
          resourceUrl: 'https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/',
          resourceLanguage: 'EN',
          resourceType: 'article',
        },
      },
    ],
    project: {
      title: 'Lista de Tarefas (To-Do List) no Terminal',
      description: 'Adicionar, listar, marcar como concluída, remover tarefas e salvar em arquivo. Versione com Git desde o início!',
    },
  },
  {
    number: 3,
    title: 'Banco de Dados (SQL)',
    description: 'Persistir dados de verdade. Quase toda aplicação real usa banco de dados. Dev experiente citou "SQL" como essencial.',
    checkpoints: [
      {
        label: 'Entendo o que são tabelas, linhas e colunas',
        resources: {
          resourceTitle: 'Curso em Vídeo - MySQL (Aula 1-3)',
          resourceUrl: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r',
          resourceLanguage: 'PT-BR',
          resourceType: 'video',
        },
      },
      {
        label: 'Sei fazer operações CRUD (SELECT, INSERT, UPDATE, DELETE)',
        resources: {
          resourceTitle: 'SQLBolt - Lições 1-6',
          resourceUrl: 'https://sqlbolt.com/',
          resourceLanguage: 'EN',
          resourceType: 'interactive',
        },
      },
      {
        label: 'Entendo JOINs básicos (INNER JOIN, LEFT JOIN)',
        resources: {
          resourceTitle: 'SQLBolt - Lições 7-9',
          resourceUrl: 'https://sqlbolt.com/lesson/select_queries_with_joins',
          resourceLanguage: 'EN',
          resourceType: 'interactive',
        },
      },
      {
        label: 'Consigo conectar minha linguagem (Python/JS) com banco de dados',
        resources: [
          {
            resourceTitle: 'Python: SQLite - Tutorial Oficial',
            resourceUrl: 'https://docs.python.org/pt-br/3/library/sqlite3.html',
            resourceLanguage: 'PT-BR',
            resourceType: 'article',
          },
          {
            resourceTitle: 'JavaScript: Node.js + SQLite',
            resourceUrl: 'https://www.sqlitetutorial.net/sqlite-nodejs/',
            resourceLanguage: 'EN',
            resourceType: 'article',
          },
        ],
      },
      {
        label: 'Sei fazer queries com WHERE e filtros básicos',
        resources: {
          resourceTitle: 'W3Schools - SQL WHERE',
          resourceUrl: 'https://www.w3schools.com/sql/sql_where.asp',
          resourceLanguage: 'EN',
          resourceType: 'interactive',
        },
      },
    ],
    project: {
      title: 'Sistema de Cadastro (CRUD Completo)',
      description: 'Cadastro de produtos: adicionar, listar, atualizar estoque/preço e remover produtos. Use SQLite ou PostgreSQL.',
    },
  },
  {
    number: 4,
    title: 'Projeto Completo (Portfolio)',
    description: 'Juntar tudo em um projeto do ZERO ao DEPLOY. Este será o projeto que você mostra em entrevistas.',
    checkpoints: [
      {
        label: 'Projeto tem funcionalidades completas (não é tutorial copiado)',
        resources: {
          resourceTitle: '40 Ideias de Projetos em Javascript',
          resourceUrl: 'https://www.freecodecamp.org/portuguese/news/40-projetos-em-javascript-para-iniciantes-ideias-simples-para-comecar-a-programar-em-js/',
          resourceLanguage: 'PT-BR',
          resourceType: 'article',
        },
      },
      {
        label: 'Código está versionado no GitHub com commits descritivos',
        resources: {
          resourceTitle: 'Conventional Commits',
          resourceUrl: 'https://www.conventionalcommits.org/pt-br/',
          resourceLanguage: 'PT-BR',
          resourceType: 'article',
        },
      },
      {
        label: 'README explica o projeto, como instalar e usar',
        resources: {
          resourceTitle: 'Template de README Profissional',
          resourceUrl: 'https://github.com/othneildrew/Best-README-Template',
          resourceLanguage: 'EN',
          resourceType: 'article',
        },
      },
      {
        label: 'Projeto está deployado (Heroku, Vercel, Render, etc)',
        resources: {
          resourceTitle: 'Vercel - Deploy em 5 minutos',
          resourceUrl: 'https://vercel.com/docs',
          resourceLanguage: 'EN',
          resourceType: 'article',
        },
      },
      {
        label: 'Código tem comentários nos pontos importantes',
        resources: {
          resourceTitle: 'Como Comentar Código',
          resourceUrl: 'https://pt.khanacademy.org/computing/computer-programming/programming/writing-clean-code/pt/clarifying-with-comments',
          resourceLanguage: 'PT-BR',
          resourceType: 'article',
        },
      },
    ],
    project: {
      title: 'Escolha um projeto real',
      description: 'API de Blog, Sistema de Biblioteca, Dashboard financeiro ou API de Tarefas com autenticação.',
    },
  },
];

// Metadados de tipos de recurso e idiomas
export const resourceMetadata = {
  types: {
    video: { icon: '🎥', label: 'Vídeo' },
    interactive: { icon: '💻', label: 'Interativo' },
    article: { icon: '📄', label: 'Artigo' },
    book: { icon: '📚', label: 'Livro' },
  },
  languages: {
    'PT-BR': { flag: '🇧🇷', color: 'bg-green-100 text-green-800 border-green-300' },
    EN: { flag: '🌐', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  },
};
