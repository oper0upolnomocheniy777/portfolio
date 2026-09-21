import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container" style={{ paddingTop: '120px' }}>
          <h1 className="section__title">
            Скоро здесь будет <span className="gradient-text">портфолио</span>
          </h1>
          <p className="section__subtitle">
            Header готов. Дальше — Hero-секция.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;