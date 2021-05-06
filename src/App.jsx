import logo from './logo.svg';
import './global.scss';
import styles from './App.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={logo} className={styles.logo} alt="logo" />
        </a>
      </header>
      <main className={styles.main}>
        <Home />
      </main>
    </div>
  );
}

export default App;
