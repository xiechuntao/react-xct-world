import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
      <main className="App-main">
        <Home />
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Go
        </a>
      </header> */}
    </div>
  );
}

export default App;
