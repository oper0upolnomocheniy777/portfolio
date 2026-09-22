import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <>
      {/* Глобальные декоративные пятна на фоне всего сайта */}
      <div className="bg-blobs" aria-hidden="true">
        <span className="blob blob--purple bg-blob-1" />
        <span className="blob blob--cyan bg-blob-2" />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;