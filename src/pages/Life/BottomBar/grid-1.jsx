import React, { Component } from 'react';
import styles from './grid-1.scss';
import Radar from '../../../components/charts/Radar.jsx';

export default class Home extends Component {
  render() {
    return (
      <div id="centerChart" className={styles.container}>
        <Radar />
      </div>
    );
  }
}
