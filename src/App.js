import React from 'react';
import { Button } from 'antd';
import './global.css';
import logo from './logo.svg';
import styles from './App.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={logo} className={styles.logo} alt="logo" />
        </a>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
          minima voluptates vel? Et delectus dicta voluptatum molestiae illo
          dolor repudiandae maxime minus, facilis ex, neque dignissimos
          provident illum quae obcaecati?
        </h2>
        <Button type="text" danger>
          Text
        </Button>
      </header>
      <main className={styles.main}>
        <Home />
      </main>
    </div>
  );
}

export default App;
