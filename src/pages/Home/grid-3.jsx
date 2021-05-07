import React, { Component } from 'react';
import styles from './center.scss';
import Line from '../../components/charts/Line';

export default class Home extends Component {
  render() {
    return (
      <div id="centerChart" className={styles.container}>
        <Line />
      </div>
    );
  }
}
