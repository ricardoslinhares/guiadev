import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { initGA, trackPageView } from './utils/analytics';
import StructuredData from './components/common/StructuredData';
import Header from './components/common/Header';
import ProgressBar from './components/common/ProgressBar'; //
import Hero from './components/sections/Hero';
import PorOndeComecar from './components/sections/PorOndeComecar';
import Roadmap from './components/sections/Roadmap';
import Recursos from './components/sections/Recursos';
import Footer from './components/common/Footer';
import FloatingNav from './components/common/FloatingNav';

function App() {
  // Hook de tema (dark/light)
  const { theme, toggleTheme, isDark } = useTheme();

  // Inicializar Google Analytics
  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="App min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <StructuredData />
      <Header theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
      <ProgressBar />
      <main id="main-content" role="main">
        <Hero />
        <PorOndeComecar />
        <Roadmap />
        <Recursos />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}

export default App;
