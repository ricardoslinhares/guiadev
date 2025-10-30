import { useTheme } from './hooks/useTheme';
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

  return (
    <div className="App min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
      <ProgressBar />
      <main>
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
