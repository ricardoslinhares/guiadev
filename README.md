<div align="center">

# 🧭 GuiaDev

### Guia de Sobrevivência para Desenvolvedores Iniciantes

[![Deploy](https://img.shields.io/badge/deploy-success-brightgreen?style=flat-square)](https://guiadev.vercel.app)
[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)](https://github.com/ricardoslinhares/guiadev/releases)
[![License](https://img.shields.io/badge/license-MIT-purple?style=flat-square)](LICENSE)

**[🌐 Acessar o GuiaDev](https://guiadev.vercel.app)**

> _Não é um curso. É uma bússola para não se perder no excesso de informações._

</div>

---

## 📖 Sobre o Projeto

O **GuiaDev** é um projeto extensionista desenvolvido como parte do curso da IPOG, baseado em **dados reais** coletados da comunidade.

### 🎯 Problema Identificado

Através de pesquisa com a comunidade:

- **50%** citaram "excesso de informação" como maior dificuldade e ainda não começaram a programar por não saber por onde começar
- **37,5%** dos respondentes querem um roadmap claro

### 💡 Solução

Um guia objetivo e curado que mostra:

- ✅ Por onde começar (baseado no seu perfil)
- ✅ Roadmap progressivo (4 fases claras)
- ✅ Recursos curados (máximo 3 por categoria)
- ✅ Checkpoints com links diretos

---

## ✨ Funcionalidades

- 🎯 **Por Onde Começar** - 3 perfis de entrada personalizados
- 🗺️ **Roadmap Progressivo** - 4 fases com checkpoints práticos
- 📚 **Recursos Curados** - Máximo 3 opções por tecnologia
- 🌓 **Tema Dark/Light** - Alternância suave entre temas
- 🧭 **Navegação Flutuante** - Atalhos rápidos para seções
- 📱 **100% Responsivo** - Mobile-first design

---

## 🛠️ Tecnologias

### Core

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Estilização

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Variables-1572B6?style=flat-square&logo=css3&logoColor=white)

### Ícones & UI

![Lucide React](https://img.shields.io/badge/Lucide_React-0.548.0-F56565?style=flat-square&logo=lucide&logoColor=white)

### Deploy & Ferramentas

![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat-square&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-Control-F05032?style=flat-square&logo=git&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.36.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ricardoslinhares/guiadev.git

# Entre na pasta
cd guiadev

# Instale as dependências
npm install

# Rode o projeto
npm run dev

# Acesse em http://localhost:5173
```

### Build para Produção

```bash
npm run build
npm run preview
```

---

## 📊 Estrutura do Projeto

```
guiadev/
├── src/
│   ├── components/
│   │   ├── common/          # Componentes reutilizáveis
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FloatingNav.jsx
│   │   │   └── ...
│   │   └── sections/        # Seções da página
│   │       ├── Hero.jsx
│   │       ├── PorOndeComecar.jsx
│   │       ├── Roadmap.jsx
│   │       └── Recursos.jsx
│   ├── hooks/               # Custom hooks
│   │   └── useTheme.js
│   ├── data/                # Dados estruturados
│   │   └── roadmapData.js
│   ├── styles/              # Estilos globais
│   │   ├── theme.css
│   │   └── roadmap.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

---

## 🎨 Design System

### Cores

**Tema Claro:**

- Primary: `#2563eb` (Azul)
- Secondary: `#9333ea` (Roxo)
- Success: `#10b981` (Verde)

**Tema Escuro:**

- Background: `#0f172a`
- Text: `#f1f5f9`
- Accent: `#3b82f6`

### Tipografia

- Font: System fonts (Apple, Segoe UI, Roboto)
- Mobile: 16px base
- Desktop: 18px base

---

## 📈 Roadmap do Projeto

### ✅ v1.0.0 - MVP Completo (Atual)

> **Status:** Produção | **Objetivo:** Atividade Extensionista IPOG

**Funcionalidades Core:**

- [x] Estrutura base do guia
- [x] 3 perfis de entrada personalizados
- [x] 4 fases do roadmap progressivo
- [x] Recursos curados (máx. 3 por categoria)
- [x] Sistema de tema dark/light
- [x] Design 100% responsivo
- [x] Deploy na Vercel

**Este projeto está completo e pronto para uso.** ✨

---

### 💡 Melhorias Opcionais (Pós-Validação)

> ⚠️ **Nota:** As versões abaixo são melhorias futuras **não essenciais**.

#### 🔧 v1.1.0 - Experiência Aprimorada

_Melhorias de UX:_

- [ ] LocalStorage para salvar progresso do usuário
- [ ] Barra de progresso global
- [ ] Analytics simples (visualizações por seção)
- [ ] SEO avançado e meta tags otimizadas

#### 📚 v1.2.0 - Conteúdo Expandido

- [ ] Seção "Armadilhas Comuns" (tutorial hell, síndrome do impostor)
- [ ] Seção "Próximos Passos" (mercado de trabalho, entrevistas)
- [ ] FAQ interativo com dúvidas frequentes

#### 🚀 v2.0.0 - Evolução Completa

_Transformação em plataforma:_

- [ ] Painel administrativo (CMS) com Supabase
- [ ] Sistema de autenticação de usuários
- [ ] Perfis personalizados com tracking de progresso
- [ ] Comunidade integrada (comentários, fórum)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Convenção de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação (sem mudança de código)
- `refactor:` - Refatoração
- `test:` - Testes
- `chore:` - Configurações

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Ricardo Francisco de Souza Linhares**

- 📧 Email: ricardo.dkt@gmail.com
- 💼 LinkedIn: [ricardo-linhares](https://www.linkedin.com/in/ricardo-linhares-6a1a73324/)
- 🐙 GitHub: [@ricardoslinhares](https://github.com/ricardoslinhares/)

---

## 🙏 Agradecimentos

- À todos(as) que responderam o [formulário](https://forms.gle/ZD8GHj7rHpbizYnP8)

---

## 📊 Estatísticas

![GitHub stars](https://img.shields.io/github/stars/ricardoslinhares/guiadev?style=social)
![GitHub forks](https://img.shields.io/github/forks/ricardoslinhares/guiadev?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/ricardoslinhares/guiadev?style=social)

---

<div align="center">

**[⬆ Voltar ao topo](#-guiadev)**

Feito com ☕ por [Ricardo Linhares](https://github.com/ricardoslinhares)

_Projeto de Atividade Extensionista - IPOG 2025_

</div>
