import ReactGA from 'react-ga4';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
      gtagOptions: {
        anonymize_ip: true,
      },
    });
    console.log('Google Analytics inicializado');
  }
};

export const trackPageView = (path) => {
  if (MEASUREMENT_ID) {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

export const trackEvent = (category, action, label = '', value = 0) => {
  if (MEASUREMENT_ID) {
    ReactGA.event({ category, action, label, value });
  }
};

export const trackCheckpoint = (phase, checkpoint, checked) => {
  trackEvent('Roadmap', checked ? 'Checkpoint Marcado' : 'Checkpoint Desmarcado', `Fase ${phase} - ${checkpoint}`, phase);
};

export const trackThemeChange = (theme) => {
  trackEvent('UI', 'Mudança de Tema', theme);
};

export const trackProgress = (percentage) => {
  trackEvent('Roadmap', 'Progresso Atualizado', `${percentage}%`, Math.round(percentage));
};

export const trackSectionView = (sectionName) => {
  trackEvent('Navegação', 'Visualização de Seção', sectionName);
};
