import React from 'react';
import { Button } from 'antd';
import './global.css';
import logo from './logo.svg';
import styles from './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Life from './pages/Life';
import { Link, Redirect, BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <header className={styles.header}>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className={styles.logo} alt="logo" />
          </a>
          <div className={styles.nav}>
            <Button type="primary">
              <Link to="/home">首页</Link>
            </Button>
            <Button type="primary">
              <Link to="/Life">生活</Link>
            </Button>

            <Header />
          </div>
        </header>
        <main className={styles.main}>
          <Route path="/home" exact component={Home} />
          <Route path="/life" exact component={Life} />
          <Redirect to="/home" from="/" />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
