import { useEffect } from 'react';

/**
 * Componente para adicionar dados estruturados (Schema.org / JSON-LD)
 * Melhora SEO com rich snippets no Google
 */
const StructuredData = () => {
  useEffect(() => {
    // Schema.org - Website
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'GuiaDev',
      alternateName: 'Guia de Sobrevivência para Devs Iniciantes',
      url: 'https://guiadev.vercel.app/',
      description:
        'Guia prático e direto para quem está começando a programar. Roadmap validado pela comunidade, recursos curados e sem excesso de informação.',
      inLanguage: 'pt-BR',
      publisher: {
        '@type': 'Person',
        name: 'Ricardo Francisco de Souza Linhares',
        url: 'https://www.linkedin.com/in/ricardo-linhares-6a1a73324/',
      },
    };

    // Schema.org - Educational Organization
    const educationalSchema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'GuiaDev',
      url: 'https://guiadev.vercel.app/',
      sameAs: [
        'https://github.com/ricardoslinhares/guiadev',
        'https://www.linkedin.com/in/ricardo-linhares-6a1a73324/',
      ],
      description: 'Guia de Sobrevivência para Desenvolvedores Iniciantes',
    };

    // Schema.org - Course
    const courseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Roadmap Progressivo para Desenvolvedores Iniciantes',
      description:
        'Roadmap completo com 4 fases: Lógica de Programação, Primeira Linguagem + Git, Banco de Dados SQL e Projeto Completo de Portfolio.',
      provider: {
        '@type': 'Person',
        name: 'Ricardo Francisco de Souza Linhares',
      },
      educationalLevel: 'Beginner',
      inLanguage: 'pt-BR',
      isAccessibleForFree: true,
      hasCourseInstance: [
        {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: 'PT40H',
        },
      ],
    };

    // Schema.org - Breadcrumb
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://guiadev.vercel.app/#inicio',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Por Onde Começar',
          item: 'https://guiadev.vercel.app/#por-onde-comecar',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Roadmap',
          item: 'https://guiadev.vercel.app/#roadmap',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Recursos',
          item: 'https://guiadev.vercel.app/#recursos',
        },
      ],
    };

    // Adicionar schemas ao head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(websiteSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(educationalSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(courseSchema);
    document.head.appendChild(script3);

    const script4 = document.createElement('script');
    script4.type = 'application/ld+json';
    script4.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script4);

    // Cleanup ao desmontar
    return () => {
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
      if (document.head.contains(script3)) document.head.removeChild(script3);
      if (document.head.contains(script4)) document.head.removeChild(script4);
    };
  }, []);

  return null;
};

export default StructuredData;
