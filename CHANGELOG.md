# Changelog

Todas as mudanças do projeto GuiaDev estão documentadas neste arquivo.

O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [1.2.0] - 2025-01-22

### Adicionado

- **Seção "Armadilhas Comuns"**: 5 armadilhas típicas de iniciantes com dicas de como evitar
  - Tutorial Hell
  - Síndrome do Impostor
  - Pular Fundamentos
  - Comparação Tóxica
  - Querer Aprender Tudo
- **Seção "Próximos Passos"**: Orientação para entrada no mercado de trabalho
  - Monte seu Portfólio
  - Prepare seu Currículo
  - Prepare-se para Entrevistas
  - Construa sua Rede
  - Lista de plataformas de vagas
- **Seção "FAQ"**: 10 perguntas frequentes com respostas objetivas
- Novos links de navegação no Header (desktop e mobile)

### Melhorado

- UX mobile: todas as fases do Roadmap começam fechadas por padrão
- OG Image redesenhada com melhor layout e centralização

---

## [1.1.0] - 2025-01-22

### Adicionado

- **Google Analytics 4**: Rastreamento de eventos e visualizações
- **SEO Completo**:
  - Meta tags (Open Graph, Twitter Cards)
  - Schema.org (JSON-LD)
  - Sitemap.xml e robots.txt
  - PWA manifest
- **Favicons personalizados**: Ícone de bússola em todos os tamanhos
- **OG Image**: Imagem para compartilhamento em redes sociais
- Headers de segurança no Vercel (CSP, X-Frame-Options)
- Acessibilidade: ARIA labels e skip-to-content

### Melhorado

- Performance: code splitting e minificação com Terser
- Otimização de chunks (vendor-react, vendor-icons, vendor-analytics)

---

## [1.0.0] - 2025-01-21

### Adicionado

- **Estrutura inicial do guia**
- **Seção "Por Onde Começar"**: 3 perfis de entrada personalizados
- **Seção "Roadmap"**: 4 fases progressivas com checkpoints
  - Fundamentos: Lógica de Programação
  - Primeira Linguagem + Git
  - Banco de Dados (SQL)
  - Projeto Completo (Portfolio)
- **Seção "Recursos"**: Links curados para cada tecnologia
- **Sistema de Progresso**: LocalStorage para salvar checkpoints
- **Barra de Progresso Global**: Mostra % de conclusão do roadmap
- **Tema Dark/Light**: Alternância suave entre temas
- **Navegação Flutuante**: Atalhos rápidos para seções
- **Design Responsivo**: Mobile-first, funciona em qualquer dispositivo
- Deploy na Vercel

---

## Links

- [Repositório](https://github.com/ricardoslinhares/guiadev)
- [Site em Produção](https://guiadev.vercel.app)
