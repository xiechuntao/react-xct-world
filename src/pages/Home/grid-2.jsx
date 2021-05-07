import React, { Component } from 'react';
import styles from './center.scss';
import Bar from '../../components/charts/Bar.jsx';

export default class Home extends Component {
  render() {
    return (
      <div id="centerChart" className={styles.container}>
        <Bar />
      </div>
    );
  }
}
