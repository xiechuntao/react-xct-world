import React, { Component } from 'react';
import styles from './center.scss';
import Radar from '../../components/charts/Radar.jsx';

export default class Home extends Component {
  render() {
    return (
      <div id="centerChart" className={styles.container}>
        <Radar />
      </div>
    );
  }
}
