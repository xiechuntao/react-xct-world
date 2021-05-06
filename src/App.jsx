import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
      <main className="App-main">
        <Home />
      </main>
    </div>
  );
}

export default App;
